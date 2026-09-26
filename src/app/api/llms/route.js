import { NextResponse } from "next/server";
import profile from "@/config/profile";

/**
 * GET /api/llms
 * 
 * Machine-readable JSON endpoint for AI chatbots and LLM crawlers.
 * Dynamically generated from central profile configuration.
 */
export async function GET() {
  const data = {
    name: profile.name,
    title: profile.role,
    website: profile.siteUrl,
    email: profile.contact.email,
    location: `${profile.location.city}, ${profile.location.country}`,
    available_for_hire: true,
    summary: profile.shortBio,
    experience: profile.experience,
    featured_projects: profile.featuredProjects,
    projects: profile.projects,
    services: profile.services,
    skills: profile.seo.keywords,
    stats: profile.stats,
    pages: {
      home: `${profile.siteUrl}/`,
      about: `${profile.siteUrl}/about`,
      projects: `${profile.siteUrl}/projects`,
      contact: `${profile.siteUrl}/contact`,
    },
    socials: profile.socialLinks,
    llms_txt: `${profile.siteUrl}/llms.txt`,
    llms_full_txt: `${profile.siteUrl}/llms-full.txt`,
  };

  return NextResponse.json(data, {
    headers: {
      "Cache-Control": "public, max-age=86400, s-maxage=86400",
      "Content-Type": "application/json",
    },
  });
}
