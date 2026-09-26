"use client";
import { useRef, useEffect } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FiGithub, FiExternalLink, FiLayers, FiCpu, FiDatabase } from "react-icons/fi";
import profile from "@/config/profile";

gsap.registerPlugin(ScrollTrigger);

const DOMAIN_ICONS = {
  "Full-stack": FiLayers,
  "GenAI / Agentic": FiCpu,
  "Machine Learning": FiDatabase,
};

export default function Work() {
  const ref = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray(".work-item").forEach((item) => {
        gsap.from(item, {
          scrollTrigger: { trigger: item, start: "top 90%", toggleActions: "play none none none" },
          y: 40,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
        });
      });

      gsap.to(ref.current, {
        scrollTrigger: {
          trigger: ref.current,
          start: "bottom 80%",
          end: "bottom 20%",
          scrub: 1,
        },
        opacity: 0,
        y: -50,
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={ref}
      id="work-section"
      className="relative w-full min-h-screen px-6 md:px-20 pt-48 pb-60 flex flex-col justify-center"
    >
      <div className="max-w-5xl w-full mx-auto">

        {/* Header */}
        <div className="mb-14 md:mb-20">
          <p className="font-sans text-[10px] text-[#ff6b1a] tracking-[0.5em] uppercase mb-4 font-semibold">
            Featured Systems
          </p>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <h2
              className="font-sans font-black tracking-tighter text-white leading-none"
              style={{ fontSize: "clamp(2.8rem, 7vw, 5.5rem)" }}
            >
              Engineering Highlights.
            </h2>

            {/* Quick domain badges */}
            <div className="flex flex-wrap gap-2 lg:pb-2">
              <span className="px-3.5 py-1.5 rounded-full text-[10px] font-mono tracking-wider uppercase bg-sky-500/10 text-sky-400 border border-sky-500/20">
                Full-Stack
              </span>
              <span className="px-3.5 py-1.5 rounded-full text-[10px] font-mono tracking-wider uppercase bg-purple-500/10 text-purple-400 border border-purple-500/20">
                GenAI & Agents
              </span>
              <span className="px-3.5 py-1.5 rounded-full text-[10px] font-mono tracking-wider uppercase bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                Machine Learning
              </span>
            </div>
          </div>
        </div>

        {/* 3 Featured Project Cards (DecisionForge, AgentGuard, Credit Card Fraud Detection) */}
        <div className="flex flex-col">
          {profile.featuredProjects.map((project) => {
            const Icon = DOMAIN_ICONS[project.domain] || FiLayers;

            return (
              <div
                key={project.id}
                className="work-item group relative flex flex-col lg:flex-row items-stretch gap-6 lg:gap-8 py-10 md:py-14 border-b border-white/8 hover:border-white/20 transition-all duration-500"
              >
                {/* Left accent bar on hover */}
                <div
                  className="absolute left-0 top-0 bottom-0 w-1 origin-top scale-y-0 group-hover:scale-y-100 transition-transform duration-500 ease-out rounded-full"
                  style={{ backgroundColor: project.accentColor }}
                />

                {/* Left: Number & Domain Icon */}
                <div className="pl-4 shrink-0 flex lg:flex-col items-center lg:items-start justify-between gap-3 pt-1">
                  <span className="font-mono text-xs text-white/30 group-hover:text-white tracking-widest transition-colors duration-300">
                    {project.num}
                  </span>
                  <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white/50 group-hover:text-white group-hover:border-white/20 transition-colors">
                    <Icon className="w-4 h-4" />
                  </div>
                </div>

                {/* Middle: Main Copy (Links to /projects entry per Task 1) */}
                <div className="flex-1 min-w-0 flex flex-col justify-between translate-x-0 group-hover:translate-x-1.5 transition-transform duration-500 ease-out">
                  <div>
                    {/* Domain & Open Source Badges */}
                    <div className="flex flex-wrap items-center gap-2 mb-3">
                      <span className="text-[10px] font-mono uppercase tracking-widest text-white/40">
                        {project.domain}
                      </span>
                      <span className="text-white/20">•</span>
                      {/* Task 3: Visible Open-Source Badge */}
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[9px] font-bold tracking-widest uppercase bg-[#ff6b1a]/15 text-[#ff6b1a] border border-[#ff6b1a]/30">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#ff6b1a] animate-pulse" />
                        Open Source
                      </span>
                    </div>

                    {/* Project Name (Navigates to /projects entry) */}
                    <Link
                      href={project.projectPageHref}
                      className="inline-block group-hover:text-white transition-colors"
                      aria-label={`Explore full case study of ${project.name}`}
                    >
                      <h3 className="font-sans text-2xl md:text-3xl font-black text-white tracking-tight mb-2">
                        {project.name}
                      </h3>
                    </Link>

                    {/* One-Liner */}
                    <p className="text-xs md:text-sm text-[#ff6b1a] font-medium leading-relaxed mb-3">
                      {project.one_liner}
                    </p>

                    {/* Excerpt from key_design_decision */}
                    <p className="text-xs md:text-[13px] text-white/60 font-light leading-relaxed max-w-2xl mb-4">
                      {project.homeExcerpt}
                    </p>

                    {/* Tech stack tags */}
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {project.tech_stack.map((t) => (
                        <span
                          key={t}
                          className="px-2 py-0.5 rounded text-[9px] font-mono uppercase bg-white/5 text-white/60 border border-white/8"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Actions: Full Entry Link (Task 1) + Prominent GitHub Button (Task 3) */}
                  <div className="flex flex-wrap items-center gap-4 pt-2">
                    <Link
                      href={project.projectPageHref}
                      className="inline-flex items-center gap-2 text-[11px] font-semibold text-white/80 group-hover:text-white tracking-wider uppercase transition-colors"
                    >
                      <span>Explore Case Study on /projects</span>
                      <span className="text-[#ff6b1a]">→</span>
                    </Link>

                    {/* Prominent GitHub link */}
                    <a
                      href={project.github_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/10 hover:bg-white text-white hover:text-black rounded-lg text-[10px] font-mono uppercase tracking-wider transition-all duration-300"
                      aria-label={`View ${project.name} source code on GitHub`}
                    >
                      <FiGithub className="w-3.5 h-3.5" />
                      <span>GitHub</span>
                      <FiExternalLink className="w-3 h-3 opacity-60" />
                    </a>
                  </div>
                </div>

                {/* Right: Abstract Visual Placeholder Banner (Task 4) */}
                <div className="w-full lg:w-64 h-36 lg:h-auto rounded-2xl bg-black/40 border border-white/10 p-4 flex flex-col justify-between overflow-hidden relative group/banner shrink-0">
                  <div
                    className="absolute inset-0 opacity-15 pointer-events-none"
                    style={{
                      backgroundImage: `radial-gradient(circle at 50% 50%, ${project.accentColor} 1px, transparent 1px)`,
                      backgroundSize: "16px 16px",
                    }}
                  />
                  <div className="relative z-10 flex items-center justify-between text-[9px] font-mono text-white/40 uppercase">
                    <span>Architecture</span>
                    <span className="text-[#ff6b1a]">Placeholder</span>
                  </div>
                  <div className="relative z-10 font-mono text-[10px] text-white/80 bg-black/60 backdrop-blur-sm p-2 rounded border border-white/10">
                    <span className="text-[#ff6b1a] mr-1">$</span>
                    {project.metricBadge}
                  </div>
                  <div className="relative z-10 text-[8px] font-mono uppercase tracking-wider text-white/30 truncate">
                    {project.placeholderLabel}
                  </div>
                </div>
              </div>
            );
          })}

          {/* 4th item — View Full 12 Projects CTA */}
          <Link
            href="/projects"
            className="work-item group relative flex items-center gap-8 py-10 md:py-14 border-b border-white/8 hover:border-white/20 transition-all duration-500"
          >
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#ff6b1a] origin-top scale-y-0 group-hover:scale-y-100 transition-transform duration-500 ease-out rounded-full" />
            <div className="pl-4 shrink-0 w-8">
              <span className="font-mono text-sm text-white/20 group-hover:text-[#ff6b1a] tracking-widest transition-colors duration-300">
                →
              </span>
            </div>
            <div className="flex-1 translate-x-0 group-hover:translate-x-1.5 transition-transform duration-500 ease-out">
              <p className="font-sans text-[10px] text-white/30 group-hover:text-[#ff6b1a] tracking-[0.4em] uppercase font-light mb-1 transition-colors duration-300">
                Full 12-Project Showcase
              </p>
              <h3 className="font-sans text-xl md:text-2xl font-black text-white tracking-tight group-hover:text-white transition-colors duration-300">
                View All Projects Across Full-Stack, Agentic AI & ML
              </h3>
            </div>
            <div className="hidden md:flex items-center gap-2 text-white/20 group-hover:text-[#ff6b1a] transition-colors duration-300 pr-2">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </Link>
        </div>

      </div>
    </section>
  );
}
