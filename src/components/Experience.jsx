"use client";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import profile from "@/config/profile";

gsap.registerPlugin(ScrollTrigger);

export default function Experience() {
  const ref = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray(".exp-item").forEach((item) => {
        gsap.from(item, {
          scrollTrigger: { trigger: item, start: "top 88%", toggleActions: "play none none none" },
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
      id="experience-section"
      className="relative w-full min-h-screen px-6 md:px-20 pt-44 pb-48 flex flex-col justify-center"
    >
      <div className="max-w-5xl w-full mx-auto">

        {/* Section Header */}
        <div className="mb-14 md:mb-20">
          <p className="font-sans text-[10px] text-[#ff6b1a] tracking-[0.5em] uppercase mb-4 font-semibold">
            Career & Leadership
          </p>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <h2
              className="font-sans font-black tracking-tighter text-white leading-none"
              style={{ fontSize: "clamp(2.8rem, 7vw, 5.5rem)" }}
            >
              Experience.
            </h2>
            <p className="text-white/40 text-sm max-w-md font-light leading-relaxed">
              Industrial internship engineering and student leadership in AI, cloud infrastructure, and builder communities.
            </p>
          </div>
        </div>

        {/* Experience List (Venturing Digitally & MLSA from profile.md) */}
        <div className="flex flex-col">
          {profile.experience.map((exp, idx) => (
            <div
              key={exp.id}
              className="exp-item group relative flex flex-col lg:flex-row items-start gap-6 lg:gap-10 py-10 md:py-14 border-b border-white/8 hover:border-white/20 transition-all duration-500"
            >
              {/* Left accent hover line */}
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#ff6b1a] origin-top scale-y-0 group-hover:scale-y-100 transition-transform duration-500 ease-out rounded-full" />

              {/* Index & Period */}
              <div className="pl-4 shrink-0 w-full lg:w-48 pt-1">
                <span className="font-mono text-xs text-[#ff6b1a] tracking-widest block mb-1">
                  0{idx + 1}
                </span>
                <span className="font-mono text-xs text-white/50 tracking-wider block">
                  {exp.period}
                </span>
                <span className="text-[10px] text-white/30 uppercase tracking-widest block mt-1">
                  {exp.location}
                </span>
              </div>

              {/* Main Role & Contributions */}
              <div className="flex-1 translate-x-0 group-hover:translate-x-1.5 transition-transform duration-500 ease-out">
                <div className="flex flex-wrap items-center gap-3 mb-2">
                  <h3 className="font-sans text-2xl md:text-3xl font-black text-white tracking-tight">
                    {exp.role}
                  </h3>
                  <span className="text-white/30 font-light">•</span>
                  <span className="text-[#ff6b1a] font-medium text-base md:text-lg">
                    {exp.company}
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full text-[9px] font-mono uppercase bg-white/5 text-white/60 border border-white/10">
                    {exp.type}
                  </span>
                </div>

                {/* Key Responsibilities & Contributions (Verbatim from profile.md) */}
                <ul className="mt-4 space-y-2.5 max-w-3xl">
                  {exp.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-3 text-xs md:text-sm text-white/65 font-light leading-relaxed">
                      <span className="text-[#ff6b1a] mt-1 shrink-0 text-xs">▹</span>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-1.5 mt-6">
                  {exp.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 rounded text-[10px] font-mono uppercase bg-white/5 text-white/70 border border-white/8 group-hover:border-white/15 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
