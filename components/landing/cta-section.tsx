"use client";

import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function CtaSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
    });
  };

  return (
    <section id="secure" ref={sectionRef} className="relative py-24 lg:py-32 overflow-hidden scroll-mt-24">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div
          className={`relative border border-primary transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          onMouseMove={handleMouseMove}
        >
          {/* Spotlight effect */}
          <div
            className="absolute inset-0 opacity-20 pointer-events-none transition-opacity duration-300"
            style={{
              background: `radial-gradient(600px circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(249,55,22,0.25), transparent 40%)`,
            }}
          />

          <div className="relative z-10 px-8 lg:px-20 py-16 lg:py-28 text-center flex flex-col items-center">
            <span className="inline-flex items-center gap-3 text-xs sm:text-sm font-mono uppercase tracking-widest text-primary mb-8">
              <span className="w-2 h-2 bg-primary" />
              [ DALE_index_05: ENROLLMENT ]
            </span>

            <h2 className="text-4xl lg:text-7xl font-display font-bold uppercase tracking-tight mb-8 leading-[0.95] text-balance">
              Secure your <span className="text-primary">system.</span>
            </h2>

            <p className="text-lg lg:text-xl text-muted-foreground mb-12 leading-relaxed max-w-2xl">
              Gain lifetime access to the full blueprint, master the frameworks,
              and walk into the UCAT with total certainty.
            </p>

            <Button
              size="lg"
              asChild
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 h-14 text-sm font-mono uppercase tracking-wider group"
            >
              <a href="#secure">
                [ GET_LIFETIME_ACCESS ]
                <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>

            <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground mt-8">
              [ One payment — lifetime access to the system ]
            </p>
          </div>

          {/* Decorative corner */}
          <div className="absolute top-0 right-0 w-32 h-32 border-b border-l border-primary/20" />
          <div className="absolute bottom-0 left-0 w-32 h-32 border-t border-r border-primary/20" />
        </div>
      </div>
    </section>
  );
}
