import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { supabase } from '@/lib/supabase';
import profile from '@/config/profile';

const resend = new Resend(process.env.RESEND_API_KEY);

const DAILY_LIMIT = 3;

function getIP(request) {
  return (
    request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ||
    request.headers.get('x-real-ip') ||
    '0.0.0.0'
  );
}

export async function POST(request) {
  const { name, email, message } = await request.json();

  if (!name || !email || !message) {
    return NextResponse.json({ error: 'All fields are required' }, { status: 400 });
  }

  // ── Rate limit: max 3 per IP per day ──────────────────────────
  const ip = getIP(request);
  const dayStart = new Date();
  dayStart.setHours(0, 0, 0, 0);

  if (supabase) {
    const { count } = await supabase
      .from('inquiries')
      .select('*', { count: 'exact', head: true })
      .eq('ip', ip)
      .gte('created_at', dayStart.toISOString());

    if (count >= DAILY_LIMIT) {
      return NextResponse.json(
        { error: `Too many messages. You can send up to ${DAILY_LIMIT} messages per day.` },
        { status: 429 }
      );
    }
  }

  try {
    // Save to Supabase (include ip for rate limiting) if available
    if (supabase) {
      const { error: dbError } = await supabase.from('inquiries').insert([{ name, email, message, ip }]);
      if (dbError) {
        console.error('[Contact] Supabase insert error:', JSON.stringify(dbError, null, 2));
        // Non-fatal: continue to send email even if DB insert fails
      }
    }

    // ── Resend "from" address rules ─────────────────────────────
    // Resend ONLY accepts:
    //   • onboarding@resend.dev  (sandbox — works for any RESEND_API_KEY, BUT can only
    //     send to the Resend account's own registered email address)
    //   • <anything>@<your-verified-domain>  (requires domain verification in Resend dashboard)
    //
    // Sandbox limitation: "to" MUST be the Resend account owner's email (abhinavbusiness2005@gmail.com).
    // replyTo is set to the visitor's email so Abhinav can reply directly to them.
    // Once a custom domain is verified, set RESEND_FROM_ADDRESS to use it and ADMIN_EMAIL becomes the to.
    const fromAddress = process.env.RESEND_FROM_ADDRESS || 'Portfolio Contact <onboarding@resend.dev>';
    const toAddress = process.env.RESEND_FROM_ADDRESS
      ? (process.env.ADMIN_EMAIL || profile.contact.email)  // custom domain: deliver to real inbox
      : (process.env.RESEND_OWNER_EMAIL || 'abhinavbusiness2005@gmail.com'); // sandbox: must be Resend account email

    const { data, error: emailError } = await resend.emails.send({
      from: fromAddress,
      to: toAddress,
      replyTo: email,
      subject: `New message from ${name}`,
      html: `
        <div style="font-family:sans-serif;max-width:600px;margin:0 auto;background:#0d0d0d;color:#fff;padding:32px;border-radius:12px">
          <h2 style="color:#ff6b1a;margin:0 0 24px">New Contact Form Submission</h2>
          <table style="width:100%;border-collapse:collapse">
            <tr><td style="padding:8px 0;color:#999;width:80px">From</td><td style="padding:8px 0;color:#fff">${name}</td></tr>
            <tr><td style="padding:8px 0;color:#999">Email</td><td style="padding:8px 0;color:#ff6b1a"><a href="mailto:${email}" style="color:#ff6b1a">${email}</a></td></tr>
          </table>
          <hr style="border:1px solid #222;margin:20px 0"/>
          <p style="color:#ccc;line-height:1.7;white-space:pre-wrap">${message}</p>
        </div>
      `,
    });

    if (emailError) {
      console.error('[Contact] Resend API error:', JSON.stringify(emailError, null, 2));
      return NextResponse.json(
        { error: 'Failed to send email', detail: emailError.message },
        { status: 500 }
      );
    }

    console.log('[Contact] Email sent successfully. Resend ID:', data?.id);
    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('[Contact] Unexpected error:', err?.message, err?.stack);
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
  }
}
