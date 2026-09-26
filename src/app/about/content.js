// ─────────────────────────────────────────────
//  ABOUT SECTION — wired to central profile
// ─────────────────────────────────────────────

import profile from "@/config/profile";

import {
  SiReact, SiNextdotjs, SiJavascript, SiTailwindcss,
  SiPython, SiCplusplus,
  SiHtml5, SiCss, SiTypescript,
  SiGit, SiDocker, SiNodedotjs, SiExpress, SiPostgresql, SiMysql, SiRedis,
  SiVercel, SiNetlify, SiPostman, SiFigma,
  SiFastapi,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { TbSql } from "react-icons/tb";

export const SECTION = {
  label: "About Me",
};

export const HEADING = profile.bioHeading || {
  line1: "Crafting",
  line2: "the",
  line3: "invisible.",
};

// *word* = highlighted/bold in BlurText
export const BIO = profile.bio;

export const RESUME_URL = profile.resumeUrl;

// Languages, frameworks, and libraries evidenced across ≥2 projects
export const TECH = [
  { name: "Python",         icon: SiPython },
  { name: "JavaScript",     icon: SiJavascript },
  { name: "TypeScript",     icon: SiTypescript },
  { name: "C++",            icon: SiCplusplus },
  { name: "Java",           icon: FaJava },
  { name: "SQL",            icon: TbSql },
  { name: "React",          icon: SiReact },
  { name: "Next.js",        icon: SiNextdotjs },
  { name: "Node.js",        icon: SiNodedotjs },
  { name: "Express",        icon: SiExpress },
  { name: "FastAPI",        icon: SiFastapi },
  { name: "Tailwind CSS",   icon: SiTailwindcss },
  { name: "HTML5",          icon: SiHtml5 },
  { name: "CSS3",           icon: SiCss },
];

// Infrastructure, DevOps, and tooling evidenced across ≥2 projects
export const CREATIVE = [
  { name: "Docker",         icon: SiDocker },
  { name: "Git",            icon: SiGit },
  { name: "PostgreSQL",     icon: SiPostgresql },
  { name: "MySQL",          icon: SiMysql },
  { name: "Redis",          icon: SiRedis },
  { name: "Postman",        icon: SiPostman },
  { name: "Vercel",         icon: SiVercel },
  { name: "Netlify",        icon: SiNetlify },
  { name: "Figma",          icon: SiFigma },
];

export const EXPERIENCE = [
  { role: "AI/ML Engineer Intern · Venturing Digitally", period: "May 2026 – Jul 2026" },
  { role: "Microsoft Learn Student Ambassador · Microsoft", period: "2026 – Present" },
  { role: "B.Tech CSE (AI & ML) · Arka Jain University", period: "2024 – 2028 (3rd Year)" },
];
