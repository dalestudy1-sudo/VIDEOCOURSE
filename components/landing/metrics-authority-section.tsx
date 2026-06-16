"use client";

import { useEffect, useRef, useState } from "react";

const metrics = [
  { value: "2600+", label: "Avg Score" },
  { value: "95%", label: "Offer Success" },
  { value: "90s→30s", label: "Avg Time Per Question" },
  { value: "Top 1%", label: "Frameworks" },
];

const schools = [
  { name: "University of Oxford", src: "/logos/oxford.png" },
  { name: "University of Cambridge", src: "/logos/cambridge.png" },
  { name: "University College London", src: "/logos/ucl.png" },
  { name: "University of Edinburgh", src: "/logos/edinburgh.png" },
  { name: "University of Bristol", src: "/logos/bristol.png" },
  { name: "University of Nottingham", src: "/logos/nottingham.png" },
  { name: "University of St Andrews", src: "/logos/standrews.png" },
  { name: "Cardiff University", src: "/logos/cardiff.png" },
];

export function MetricsAuthoritySection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

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
    <section
      id="performance"
      ref={sectionRef}
      className="relative py-16 lg:py-20 border-y border-foreground/10 scroll-mt-24"
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="mb-10 lg:mb-14">
          <span className="inline-flex items-center gap-3 text-xs font-mono uppercase tracking-widest text-primary">
            <span className="w-2 h-2 bg-primary" />
            [ DALE_index_01: PERFORMANCE ]
          </span>
        </div>

        {/* Metrics row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 border-l border-t border-foreground/10">
          {metrics.map((metric, index) => (
            <div
              key={metric.label}
              className={`flex flex-col gap-2 p-6 lg:p-8 border-r border-b border-foreground/10 transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
              style={{ transitionDelay: `${index * 80}ms` }}
            >
              <span className="font-display font-bold text-4xl lg:text-6xl tracking-tight text-foreground">
                {metric.value}
              </span>
              <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                {metric.label}
              </span>
            </div>
          ))}
        </div>

        {/* Authority / trust logos: continuous marquee */}
        <div
          className={`mt-12 lg:mt-16 transition-opacity duration-700 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <span className="block font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-10 text-center">
            [ Secured offers at ]
          </span>
          <div
            className="group relative w-full overflow-hidden"
            style={{
              maskImage:
                "linear-gradient(to right, transparent, black 12%, black 88%, transparent)",
              WebkitMaskImage:
                "linear-gradient(to right, transparent, black 12%, black 88%, transparent)",
            }}
          >
            <div className="flex w-max marquee-slow group-hover:[animation-play-state:paused]">
              {[...schools, ...schools].map((school, index) => (
                <div
                  key={`${school.name}-${index}`}
                  className="flex h-24 shrink-0 items-center justify-center px-12 lg:px-14"
                >
                  <img
                    src={school.src || "/placeholder.svg"}
                    alt={`${school.name} logo`}
                    className="max-h-24 w-auto object-contain opacity-60 grayscale transition-all duration-500 hover:opacity-100 hover:brightness-125 hover:grayscale-0"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
