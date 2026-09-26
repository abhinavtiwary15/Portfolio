import { Suspense } from "react";
import Cursor from "../../components/Cursor";
import Navbar from "../../components/Navbar";
import ProjectsPage from "../../views/projects";
import profile from "@/config/profile";

export const metadata = {
  title:       `Projects — Case Studies & Engineering Work by ${profile.name}`,
  description: `Explore projects, case studies, and engineering architecture built by ${profile.name}.`,
  keywords:    ["portfolio projects", "case studies", "software projects", "engineering architecture"],
  alternates:  { canonical: `${profile.siteUrl}/projects` },
  openGraph: {
    title: `Projects — ${profile.name} | Case Studies & Work`,
    description: `Detailed case studies and engineering projects by ${profile.name}.`,
  },
};

export default function Page() {
  return (
    <main>
      <div className="grain-overlay" />
      <Cursor />
      <Navbar />
      <div className="relative z-10">
        <Suspense fallback={<div className="min-h-screen bg-[#060606]" />}>
          <ProjectsPage />
        </Suspense>
      </div>
    </main>
  );
}
