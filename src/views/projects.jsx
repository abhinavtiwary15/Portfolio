"use client";
import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import ProjectCard from "@/components/ProjectCard";
import profile from "@/config/profile";
import { FiLayers, FiCpu, FiDatabase, FiGrid } from "react-icons/fi";

const CATEGORIES = [
  { id: "ALL", label: "All Projects", count: 12, icon: FiGrid },
  { id: "Full-stack", label: "Full-Stack", count: 3, icon: FiLayers },
  { id: "GenAI / Agentic", label: "GenAI & Agents", count: 4, icon: FiCpu },
  { id: "Machine Learning", label: "Machine Learning", count: 5, icon: FiDatabase },
];

export default function ProjectsPage() {
  const searchParams = useSearchParams();
  const catParam = searchParams.get("cat");

  const getInitialCategory = () => {
    if (!catParam) return "ALL";
    const c = catParam.toLowerCase();
    if (c.includes("full") || c.includes("stack") || c.includes("web")) return "Full-stack";
    if (c.includes("agent") || c.includes("genai") || c.includes("llm")) return "GenAI / Agentic";
    if (c.includes("ml") || c.includes("machine") || c.includes("learn")) return "Machine Learning";
    return "ALL";
  };

  const [activeCategory, setActiveCategory] = useState(getInitialCategory());

  // Deep-linking scroll: check window.location.hash on mount
  useEffect(() => {
    if (typeof window !== "undefined" && window.location.hash) {
      const el = document.querySelector(window.location.hash);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 300);
      }
    }
  }, []);

  const filteredProjects = activeCategory === "ALL"
    ? profile.projects
    : profile.projects.filter(p => p.domain === activeCategory);

  return (
    <div className="min-h-screen bg-[#060606] text-white pt-32 pb-36 px-6 md:px-16 lg:px-20 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-[#ff6b1a]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* ── Page Header ── */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 pb-8 border-b border-white/10">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="font-mono text-[10px] text-[#ff6b1a] tracking-[0.4em] uppercase font-bold">
                Open-Source Portfolio
              </span>
              <span className="text-white/20">•</span>
              <span className="px-2 py-0.5 rounded-full text-[9px] font-mono uppercase bg-white/5 text-white/50 border border-white/10">
                12 Verified Systems
              </span>
            </div>

            <h1
              className="font-sans font-black tracking-tight text-white leading-none mb-4"
              style={{ fontSize: "clamp(2.5rem, 6vw, 5.5rem)" }}
            >
              Projects Showcase.
            </h1>

            <p className="text-white/50 text-sm md:text-base max-w-2xl font-light leading-relaxed">
              Production architectures, autonomous multi-agent orchestration, and leakage-free ML pipelines with calibrated decision boundaries and verified ground-truth benchmarks.
            </p>
          </div>

          {/* Quick stats pill */}
          <div className="hidden lg:flex items-center gap-6 px-6 py-4 rounded-2xl bg-white/[0.02] border border-white/8 backdrop-blur-sm">
            <div className="text-center">
              <span className="font-mono font-bold text-xl text-white block">100%</span>
              <span className="text-[9px] uppercase tracking-widest text-white/40 font-mono">Open Source</span>
            </div>
            <div className="w-px h-8 bg-white/10" />
            <div className="text-center">
              <span className="font-mono font-bold text-xl text-[#38bdf8] block">3</span>
              <span className="text-[9px] uppercase tracking-widest text-white/40 font-mono">Full-Stack</span>
            </div>
            <div className="w-px h-8 bg-white/10" />
            <div className="text-center">
              <span className="font-mono font-bold text-xl text-[#c084fc] block">4</span>
              <span className="text-[9px] uppercase tracking-widest text-white/40 font-mono">Agents/GenAI</span>
            </div>
            <div className="w-px h-8 bg-white/10" />
            <div className="text-center">
              <span className="font-mono font-bold text-xl text-[#34d399] block">5</span>
              <span className="text-[9px] uppercase tracking-widest text-white/40 font-mono">ML Pipelines</span>
            </div>
          </div>
        </div>

        {/* ── Category Filter Tabs ── */}
        <div className="flex flex-wrap items-center gap-3 mb-12">
          {CATEGORIES.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeCategory === cat.id;

            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`flex items-center gap-2.5 px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 ${
                  isActive
                    ? "bg-white text-black shadow-lg scale-[1.02]"
                    : "bg-white/5 text-white/60 hover:text-white hover:bg-white/10 border border-white/8"
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{cat.label}</span>
                <span className={`text-[10px] font-mono px-1.5 py-0.2 rounded-full ${
                  isActive ? "bg-black text-white" : "bg-white/10 text-white/50"
                }`}>
                  {cat.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* ── Project Cards Grid (12 Projects) ── */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch"
        >
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="flex"
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* ── Bottom Callout ── */}
        <div className="mt-24 p-8 md:p-12 rounded-3xl bg-white/[0.02] border border-white/8 text-center max-w-3xl mx-auto flex flex-col items-center gap-4">
          <span className="font-mono text-xs uppercase tracking-widest text-[#ff6b1a]">
            Open-Source Transparency
          </span>
          <h2 className="text-2xl md:text-3xl font-black text-white tracking-tight">
            Every repository is public and documented.
          </h2>
          <p className="text-white/50 text-sm max-w-xl font-light leading-relaxed">
            All codebases include automated test suites, architecture decision records, and reproduction instructions on GitHub under the MIT license.
          </p>
          <a
            href={profile.socialLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-flex items-center gap-2 px-6 py-3 bg-[#ff6b1a] text-black font-black text-xs uppercase tracking-wider rounded-xl hover:bg-[#ff8c42] transition-colors"
          >
            Visit GitHub Profile (@{profile.socialLinks.githubUsername}) →
          </a>
        </div>

      </div>
    </div>
  );
}
