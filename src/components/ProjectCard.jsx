"use client";
import React from "react";
import Image from "next/image";
import { FiGithub, FiExternalLink, FiCpu, FiDatabase, FiLayers } from "react-icons/fi";

/**
 * Domain Visual Configuration:
 * Full-stack -> Cyan / Indigo theme with architecture grid
 * GenAI / Agentic -> Purple / Fuchsia theme with neural network nodes
 * Machine Learning -> Emerald / Teal theme with curve / matrix lines
 */
const DOMAIN_STYLES = {
  "Full-stack": {
    badgeBg: "bg-sky-500/10 text-sky-400 border-sky-500/30",
    gradient: "from-sky-950/40 via-[#0a192f] to-[#080808]",
    accentBorder: "border-sky-500/20 hover:border-sky-500/50",
    accentGlow: "rgba(56, 189, 248, 0.15)",
    icon: FiLayers,
    domainLabel: "Full-Stack System",
  },
  "GenAI / Agentic": {
    badgeBg: "bg-purple-500/10 text-purple-400 border-purple-500/30",
    gradient: "from-purple-950/40 via-[#180a2f] to-[#080808]",
    accentBorder: "border-purple-500/20 hover:border-purple-500/50",
    accentGlow: "rgba(192, 132, 252, 0.15)",
    icon: FiCpu,
    domainLabel: "Agentic AI / LLMs",
  },
  "Machine Learning": {
    badgeBg: "bg-emerald-500/10 text-emerald-400 border-emerald-500/30",
    gradient: "from-emerald-950/40 via-[#052317] to-[#080808]",
    accentBorder: "border-emerald-500/20 hover:border-emerald-500/50",
    accentGlow: "rgba(52, 211, 153, 0.15)",
    icon: FiDatabase,
    domainLabel: "Machine Learning",
  },
};

export default function ProjectCard({ project, featured = false }) {
  if (!project) return null;

  const style = DOMAIN_STYLES[project.domain] || DOMAIN_STYLES["Full-stack"];
  const DomainIcon = style.icon;

  return (
    <article
      id={project.id}
      className={`group relative flex flex-col rounded-3xl bg-[#0c0c0e] border ${style.accentBorder} transition-all duration-500 overflow-hidden hover:shadow-2xl`}
      style={{
        boxShadow: "0 10px 30px -15px rgba(0,0,0,0.7)",
      }}
    >
      {/* ── CARD HEADER: Real Screenshot or Placeholder Banner ── */}
      {project.image_url ? (
        /* Real screenshot — fills fixed-height container via object-cover */
        <div className="relative w-full h-48 md:h-52 overflow-hidden border-b border-white/5">
          <Image
            src={project.image_url}
            alt={`${project.name} screenshot`}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover object-top"
            priority={false}
          />
          {/* Subtle domain badge overlaid bottom-left on real screenshot */}
          <div className="absolute bottom-3 left-3 z-10">
            <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-semibold tracking-wider uppercase border backdrop-blur-md ${style.badgeBg}`}>
              <DomainIcon className="w-3 h-3" />
              {style.domainLabel}
            </span>
          </div>
        </div>
      ) : (
        /* Placeholder banner — exactly unchanged for projects without image_url */
        <div className={`relative w-full h-48 md:h-52 bg-gradient-to-br ${style.gradient} p-6 flex flex-col justify-between overflow-hidden border-b border-white/5`}>
          {/* Subtle geometric pattern overlay */}
          <div
            className="absolute inset-0 opacity-20 pointer-events-none mix-blend-overlay"
            style={{
              backgroundImage: `radial-gradient(circle at 20% 30%, rgba(255,255,255,0.2) 1px, transparent 1px), radial-gradient(circle at 80% 70%, rgba(255,255,255,0.15) 1px, transparent 1px)`,
              backgroundSize: "24px 24px, 32px 32px",
            }}
          />

          {/* Ambient accent glow */}
          <div
            className="absolute -top-16 -right-16 w-44 h-44 rounded-full blur-3xl pointer-events-none transition-opacity duration-500 group-hover:opacity-100 opacity-60"
            style={{ backgroundColor: style.accentGlow }}
          />

          {/* Top bar inside placeholder: Badges */}
          <div className="relative z-10 flex items-center justify-between gap-2">
            {/* Domain Pill */}
            <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-semibold tracking-wider uppercase border ${style.badgeBg}`}>
              <DomainIcon className="w-3 h-3" />
              {style.domainLabel}
            </span>

            {/* Task 3: Visible Open-Source Badge */}
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase bg-[#ff6b1a]/15 text-[#ff6b1a] border border-[#ff6b1a]/30 shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-[#ff6b1a] animate-pulse" />
              Open Source
            </span>
          </div>

          {/* Middle terminal / architecture metric badge */}
          <div className="relative z-10 my-auto py-2">
            <div className="inline-block bg-black/60 backdrop-blur-md px-3.5 py-1.5 rounded-lg border border-white/10 font-mono text-[11px] text-white/90">
              <span className="text-[#ff6b1a] mr-2">$</span>
              {project.metricBadge || project.name}
            </div>
          </div>

          {/* Bottom indicator for Abhinav: Clear placeholder flag */}
          <div className="relative z-10 flex items-center justify-between text-[9px] tracking-wider uppercase text-white/30 font-mono">
            <span>{project.placeholderLabel || "Architecture Blueprint"}</span>
            <span className="text-white/20">[ Placeholder ]</span>
          </div>
        </div>
      )}

      {/* ── CARD BODY: Content & Descriptions ── */}
      <div className="flex-1 p-6 md:p-8 flex flex-col justify-between gap-6">
        <div className="flex flex-col gap-3">
          {/* Title */}
          <h3 className="font-sans font-black text-2xl md:text-3xl text-white tracking-tight group-hover:text-white transition-colors duration-300">
            {project.name}
          </h3>

          {/* One-Liner */}
          <p className="text-xs md:text-sm text-[#ff6b1a] font-medium leading-relaxed">
            {project.one_liner}
          </p>

          {/* Expanded 2-3 sentence description (problem + key_design_decision) */}
          <p className="text-xs md:text-[13px] text-white/60 font-light leading-relaxed mt-1">
            {project.description}
          </p>

          {/* Quantifiable Impact Quote */}
          {project.quantifiable_impact && (
            <div className="mt-2 p-3.5 rounded-xl bg-white/[0.02] border-l-2 border-[#ff6b1a] border-y border-r border-white/5">
              <p className="text-[10px] uppercase tracking-[0.25em] text-white/40 font-semibold mb-1">
                Verified Benchmark
              </p>
              <p className="font-mono text-xs text-white/80 leading-normal">
                {project.quantifiable_impact}
              </p>
            </div>
          )}
        </div>

        {/* ── TECH STACK TAGS ── */}
        <div>
          <p className="text-[9px] uppercase tracking-[0.3em] text-white/30 mb-2 font-medium">
            Core Technologies
          </p>
          <div className="flex flex-wrap gap-1.5">
            {project.tech_stack?.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 rounded-md text-[10px] font-mono uppercase bg-white/5 text-white/70 border border-white/8 group-hover:border-white/15 transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* ── CARD FOOTER: Prominent GitHub Link (Task 3) ── */}
        <div className="pt-4 border-t border-white/8 flex items-center justify-between gap-4 mt-auto">
          {project.github_url && (
            <a
              href={project.github_url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-white text-black hover:bg-[#ff6b1a] hover:text-black font-black text-xs uppercase tracking-wider rounded-xl transition-all duration-300 shadow-md hover:scale-[1.02]"
              aria-label={`View ${project.name} source code on GitHub`}
            >
              <FiGithub className="w-4 h-4" />
              <span>View on GitHub</span>
              <FiExternalLink className="w-3 h-3 opacity-70" />
            </a>
          )}

          <span className="font-mono text-[10px] text-white/30 tracking-widest uppercase">
            MIT License
          </span>
        </div>
      </div>
    </article>
  );
}
