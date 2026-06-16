"use client";

import { useEffect, useRef, useState } from "react";

const metrics = [
  { value: "2600+", label: "Avg Score" },
  { value: "95%", label: "Offer Success" },
  { value: "3x", label: "Speed Improvement" },
  { value: "Top 1%", label: "Frameworks" },
];

const schools = ["King's College London", "Imperial", "UCL", "Bristol"];

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

        {/* Authority / trust logos row */}
        <div className="mt-12 lg:mt-16">
          <span className="block font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-6">
            [ Offers secured at ]
          </span>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-foreground/10 border border-foreground/10">
            {schools.map((school, index) => (
              <div
                key={school}
                className={`flex items-center justify-center bg-background px-4 py-8 transition-all duration-700 ${
                  isVisible ? "opacity-100" : "opacity-0"
                }`}
                style={{ transitionDelay: `${index * 100 + 200}ms` }}
              >
                <span className="font-display font-bold text-base lg:text-xl uppercase tracking-tight text-muted-foreground/70 grayscale transition-colors duration-300 hover:text-foreground text-center text-balance">
                  {school}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
