"use client";

import { useEffect, useRef, useState } from "react";

const steps = [
  {
    number: "I",
    title: "Diagnose your baseline",
    description:
      "We map your current section scores against the 2600+ blueprint to pinpoint exactly where the points are leaking.",
    code: `> dale diagnose --candidate

  VR ......... 580  [ gap: -90 ]
  DM ......... 620  [ gap: -50 ]
  QR ......... 640  [ gap: -30 ]
  SJT ........ 600  [ gap: -70 ]

  target = 2600+`,
  },
  {
    number: "II",
    title: "Install the system",
    description:
      "Work through the four modules in sequence. Each one installs a repeatable framework you apply on autopilot.",
    code: `> dale install --module all

  [01] verbal_reasoning ..... OK
  [02] decision_making ...... OK
  [03] quantitative ......... OK
  [04] situational .......... OK`,
  },
  {
    number: "III",
    title: "Drill under pressure",
    description:
      "Timed, exam-condition drilling with feedback loops until the system runs faster than the clock.",
    code: `> dale drill --timed --exam

  questions ...... 1,200+
  avg_time ....... -18%
  accuracy ....... +24%

  status: EXAM_READY`,
  },
];

export function HowItWorksSection() {
  const [activeStep, setActiveStep] = useState(0);
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

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="how-it-works"
      ref={sectionRef}
      className="relative py-24 lg:py-32 bg-foreground text-background overflow-hidden"
    >
      {/* Diagonal lines pattern */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `repeating-linear-gradient(
              -45deg,
              transparent,
              transparent 40px,
              currentColor 40px,
              currentColor 41px
            )`,
          }}
        />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="mb-16 lg:mb-24">
          <span className="inline-flex items-center gap-3 text-xs sm:text-sm font-mono uppercase tracking-widest text-primary mb-6">
            <span className="w-2 h-2 bg-primary" />
            [ DALE_index_03: HOW_IT_WORKS ]
          </span>
          <h2
            className={`text-4xl lg:text-6xl font-display font-bold uppercase tracking-tight transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Three phases.
            <br />
            <span className="text-background/50">Zero guesswork.</span>
          </h2>
        </div>

        {/* Main content */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Steps */}
          <div className="space-y-0">
            {steps.map((step, index) => (
              <button
                key={step.number}
                type="button"
                onClick={() => setActiveStep(index)}
                className={`w-full text-left py-8 border-b border-background/10 transition-all duration-500 group ${
                  activeStep === index ? "opacity-100" : "opacity-40 hover:opacity-70"
                }`}
              >
                <div className="flex items-start gap-6">
                  <span className="font-display font-bold text-3xl text-primary">{step.number}</span>
                  <div className="flex-1">
                    <h3 className="text-2xl lg:text-3xl font-display font-bold mb-3 group-hover:translate-x-2 transition-transform duration-300">
                      {step.title}
                    </h3>
                    <p className="text-background/60 leading-relaxed">{step.description}</p>

                    {activeStep === index && (
                      <div className="mt-4 h-px bg-background/20 overflow-hidden">
                        <div
                          className="h-full bg-primary w-0"
                          style={{ animation: "progress 5s linear forwards" }}
                        />
                      </div>
                    )}
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Terminal display */}
          <div className="lg:sticky lg:top-32 self-start">
            <div className="border border-background/15">
              {/* Window header */}
              <div className="px-6 py-4 border-b border-background/10 flex items-center justify-between">
                <div className="flex gap-2">
                  <div className="w-3 h-3 bg-background/20" />
                  <div className="w-3 h-3 bg-background/20" />
                  <div className="w-3 h-3 bg-primary" />
                </div>
                <span className="text-xs font-mono uppercase tracking-widest text-background/40">
                  dale_system.sh
                </span>
              </div>

              {/* Code content */}
              <div className="p-8 font-mono text-sm min-h-[280px]">
                <pre className="text-background/70 whitespace-pre-wrap">
                  {steps[activeStep].code.split("\n").map((line, lineIndex) => (
                    <div
                      key={`${activeStep}-${lineIndex}`}
                      className="leading-loose code-line-reveal"
                      style={{ animationDelay: `${lineIndex * 80}ms` }}
                    >
                      {line || "\u00A0"}
                    </div>
                  ))}
                </pre>
              </div>

              {/* Status */}
              <div className="px-6 py-4 border-t border-background/10 flex items-center gap-3">
                <span className="w-2 h-2 bg-primary animate-pulse" />
                <span className="text-xs font-mono uppercase tracking-widest text-background/40">
                  Ready
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes progress {
          from {
            width: 0%;
          }
          to {
            width: 100%;
          }
        }

        .code-line-reveal {
          opacity: 0;
          transform: translateX(-8px);
          animation: lineReveal 0.4s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }

        @keyframes lineReveal {
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </section>
  );
}
