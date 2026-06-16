"use client";

import { useEffect, useRef, useState } from "react";

const modules = [
  {
    number: "01",
    item: "DALE_item_01: VERBAL_REASONING",
    title: "Verbal Reasoning, decoded.",
    description:
      "Stop reading every word. Learn the scanning architecture that lets you process passages in seconds and lock in the right answer under brutal time pressure.",
  },
  {
    number: "02",
    item: "DALE_item_02: DECISION_MAKING",
    title: "Decision Making frameworks.",
    description:
      "Syllogisms, probability, and logic puzzles reduced to repeatable templates. Recognise the pattern, apply the system, move on.",
  },
  {
    number: "03",
    item: "DALE_item_03: QUANTITATIVE_REASONING",
    title: "Quantitative speed engine.",
    description:
      "Mental maths shortcuts and on-screen calculator discipline that shave precious seconds off every single question.",
  },
];

function ModuleCard({ module, index }: { module: (typeof modules)[0]; index: number }) {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.2 }
    );
    if (cardRef.current) observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={cardRef}
      className={`group transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      }`}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      <div className="flex flex-col lg:flex-row gap-6 lg:gap-16 py-10 lg:py-14 border-b border-foreground/10">
        {/* Bold numerical index */}
        <div className="shrink-0">
          <span className="block font-display font-bold text-6xl lg:text-8xl leading-none text-foreground/15 group-hover:text-primary transition-colors duration-500">
            {module.number}
          </span>
        </div>

        {/* Content */}
        <div className="flex-1 grid lg:grid-cols-2 gap-4 lg:gap-12 lg:items-center">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-primary mb-4 block">
              [ {module.item} ]
            </span>
            <h3 className="text-2xl lg:text-4xl font-display font-bold tracking-tight group-hover:translate-x-2 transition-transform duration-500">
              {module.title}
            </h3>
          </div>
          <p className="text-base lg:text-lg text-muted-foreground leading-relaxed">
            {module.description}
          </p>
        </div>
      </div>
    </div>
  );
}

export function FeaturesSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="features" ref={sectionRef} className="relative py-24 lg:py-32">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="mb-16 lg:mb-20">
          <span className="inline-flex items-center gap-3 text-xs sm:text-sm font-mono uppercase tracking-widest text-primary mb-6">
            <span className="w-2 h-2 bg-primary" />
            [ DALE_index_02: THE_CURRICULUM ]
          </span>
          <h2
            className={`text-4xl lg:text-6xl font-display font-bold uppercase tracking-tight text-balance transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Three modules.
            <br />
            <span className="text-muted-foreground">One engineered system.</span>
          </h2>
        </div>

        {/* Modules */}
        <div>
          {modules.map((module, index) => (
            <ModuleCard key={module.number} module={module} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
