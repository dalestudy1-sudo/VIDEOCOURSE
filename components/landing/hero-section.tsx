"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { PerformanceMap } from "./performance-map";

const VERBS = ["DECODE", "ENGINEER", "OPTIMIZE", "MASTER"];

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [verbIndex, setVerbIndex] = useState(0);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setVerbIndex((prev) => (prev + 1) % VERBS.length);
    }, 2200);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      {/* UCAT performance contour map */}
      <PerformanceMap />

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12 py-32 lg:py-40 w-full">
        {/* Eyebrow */}
        <div
          className={`mb-8 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <span className="inline-flex items-center gap-3 text-xs sm:text-sm font-mono uppercase tracking-widest text-primary">
            <span className="w-2 h-2 bg-primary" />
            [ DALE_sys_00: UCAT_MASTERCLASS ]
          </span>
        </div>

        {/* Main headline — two-line hierarchy */}
        <div className="mb-10">
          <h1
            className={`text-[clamp(2.75rem,10vw,9rem)] font-display font-bold uppercase leading-[0.9] tracking-tight text-balance transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <span className="block">The System</span>
            <span className="block">
              To{" "}
              <span className="relative inline-block text-primary align-baseline">
                <span
                  key={verbIndex}
                  className="inline-block animate-char-in"
                >
                  {VERBS[verbIndex]}
                </span>
                <span className="absolute -bottom-1 left-0 right-0 h-1.5 bg-primary/30" />
              </span>{" "}
              The UCAT.
            </span>
          </h1>
        </div>

        {/* Description + CTA */}
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-24 items-end">
          <p
            className={`text-lg lg:text-2xl text-muted-foreground leading-relaxed max-w-xl transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            An engineered video framework to decode the UCAT and lock in a 2600+
            score.
          </p>

          <div
            className={`flex flex-col items-start gap-6 transition-all duration-700 delay-300 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
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
            <span className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
              [ Lifetime access — one engineered system ]
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
