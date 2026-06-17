"use client";

import { useEffect, useState, useRef } from "react";
import {
  ClipboardList,
  BookOpen,
  FileText,
  Stethoscope,
} from "lucide-react";

const platforms = [
  { name: "Medify", icon: ClipboardList },
  { name: "MedEntry", icon: BookOpen },
  { name: "Official UCAT Question Bank", icon: FileText },
  { name: "The Medic Portal", icon: Stethoscope },
];

export function IntegrationsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

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
    <section id="integrations" ref={sectionRef} className="relative py-24 lg:py-32">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div
          className={`max-w-3xl mb-16 lg:mb-20 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="inline-flex items-center gap-3 text-xs sm:text-sm font-mono uppercase tracking-widest text-primary mb-6">
            <span className="w-2 h-2 bg-primary" />
            [ DALE_index_04: COMPLEMENT_YOUR_WORKFLOW ]
          </span>
          <h2 className="text-4xl lg:text-6xl font-display font-bold uppercase tracking-tight text-balance">
            Built to complement
            <br />
            <span className="text-muted-foreground">your workflow.</span>
          </h2>
        </div>

        {/* Monochrome platform grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 border-l border-t border-foreground/10">
          {platforms.map((platform, index) => {
            const Icon = platform.icon;
            return (
              <div
                key={platform.name}
                className={`group flex flex-col items-start gap-5 p-6 lg:p-8 border-r border-b border-foreground/10 transition-all duration-500 hover:bg-foreground/[0.03] ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                }`}
                style={{ transitionDelay: `${index * 60}ms` }}
              >
                <Icon
                  className="w-7 h-7 text-muted-foreground transition-colors duration-300 group-hover:text-foreground"
                  strokeWidth={1.5}
                />
                <div>
                  <span className="block text-sm lg:text-base font-medium text-foreground">
                    {platform.name}
                  </span>
                  <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                    [ synced ]
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
