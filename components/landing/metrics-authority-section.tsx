"use client";

import { useEffect, useRef, useState } from "react";

const metrics = [
  { value: "2600+", label: "Avg Score" },
  { value: "95%", label: "Offer Success" },
  { value: "3x", label: "Speed Improvement" },
  { value: "Top 1%", label: "Frameworks" },
];

const schools = [
  { name: "University of Oxford", src: "/logos/oxford.jpg" },
  { name: "University of Cambridge", src: "/logos/cambridge.png" },
  { name: "Imperial College London", src: "/logos/imperial.jpg" },
  { name: "UCL", src: "/logos/ucl.jpg" },
  { name: "King's College London", src: "/logos/kings.png" },
  { name: "University of Bristol", src: "/logos/bristol.png" },
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

        {/* Authority / trust logos: uniform badge grid */}
        <div
          className={`mt-12 lg:mt-16 transition-opacity duration-700 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <span className="block font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-8 text-center">
            [ Secured offers at ]
          </span>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-5 lg:gap-8">
            {schools.map((school) => (
              <div
                key={school.name}
                className="flex h-24 lg:h-28 items-center justify-center rounded-xl border border-foreground/10 bg-foreground/[0.03] px-6 backdrop-blur-sm transition-colors duration-300 hover:border-foreground/20 hover:bg-foreground/[0.06]"
              >
                <img
                  src={school.src || "/placeholder.svg"}
                  alt={`${school.name} logo`}
                  className="max-h-12 lg:max-h-14 w-auto max-w-full object-contain"
                  style={{ filter: "brightness(0.95) contrast(0.9)" }}
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
