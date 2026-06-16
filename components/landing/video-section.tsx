"use client";

import { useEffect, useRef, useState } from "react";
import { Play } from "lucide-react";

export function VideoSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="relative py-12 lg:py-20">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
        <div
          className={`mb-8 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <span className="inline-flex items-center gap-3 text-xs sm:text-sm font-mono uppercase tracking-widest text-primary">
            <span className="w-2 h-2 bg-primary" />
            [ DALE_brief_01: WATCH_THE_METHOD ]
          </span>
        </div>

        {/* Video placeholder with technical border */}
        <div
          className={`relative transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Corner brackets */}
          <span className="absolute -top-px -left-px w-6 h-6 border-t-2 border-l-2 border-primary z-10" />
          <span className="absolute -top-px -right-px w-6 h-6 border-t-2 border-r-2 border-primary z-10" />
          <span className="absolute -bottom-px -left-px w-6 h-6 border-b-2 border-l-2 border-primary z-10" />
          <span className="absolute -bottom-px -right-px w-6 h-6 border-b-2 border-r-2 border-primary z-10" />

          <div className="relative aspect-video w-full border border-foreground/15 bg-card overflow-hidden group">
            {/* Grid texture */}
            <div
              className="absolute inset-0 opacity-[0.04]"
              style={{
                backgroundImage:
                  "linear-gradient(currentColor 1px, transparent 1px), linear-gradient(90deg, currentColor 1px, transparent 1px)",
                backgroundSize: "40px 40px",
              }}
            />

            {/* Play button */}
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
              <button
                type="button"
                aria-label="Play overview"
                className="w-20 h-20 flex items-center justify-center border border-foreground/20 bg-background/40 backdrop-blur-sm transition-all duration-300 group-hover:border-primary group-hover:bg-primary"
              >
                <Play className="w-7 h-7 fill-current text-foreground transition-colors group-hover:text-primary-foreground" />
              </button>
              <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                [ 04:32 — SYSTEM_OVERVIEW.mp4 ]
              </span>
            </div>

            {/* Top status bar */}
            <div className="absolute top-0 left-0 right-0 flex items-center justify-between px-4 py-3 border-b border-foreground/10">
              <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                REC / UCAT_BLUEPRINT
              </span>
              <span className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                <span className="w-1.5 h-1.5 bg-primary animate-pulse" />
                LIVE
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
