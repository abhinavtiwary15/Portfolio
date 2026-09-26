import PageShell from "@/components/PageShell";
import ContactPage from "@/views/contact";
import profile from "@/config/profile";

export const metadata = {
  title:       `Contact — Get in Touch with ${profile.name}`,
  description: `Get in touch with ${profile.name} (${profile.role}) for software development, engineering, and collaboration inquiries.`,
  keywords:    ["contact developer", "hire engineer", "software development contact", "freelance contact"],
  alternates:  { canonical: `${profile.siteUrl}/contact` },
  openGraph: {
    title: `Contact ${profile.name} — ${profile.role}`,
    description: `Contact ${profile.name} for software engineering and development projects.`,
  },
};

export default function Page() {
  return (
    <PageShell>
      <ContactPage />
    </PageShell>
  );
}
