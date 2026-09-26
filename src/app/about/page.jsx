import PageShell from "@/components/PageShell";
import AboutPage from "@/views/about";
import profile from "@/config/profile";

export const metadata = {
  title:       `About — ${profile.name} | ${profile.role}`,
  description: profile.shortBio || profile.seo.description,
  keywords:    profile.seo.keywords,
  alternates:  { canonical: `${profile.siteUrl}/about` },
  openGraph: {
    title: `About ${profile.name} — ${profile.role}`,
    description: profile.shortBio || profile.seo.description,
  },
};

export default function Page() {
  return (
    <PageShell>
      <style>{`.bottom-blur { display: none !important; }`}</style>
      <AboutPage />
    </PageShell>
  );
}
