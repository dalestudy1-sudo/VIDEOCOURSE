"use client";

import { useEffect, useRef, useState } from "react";
import { Plus } from "lucide-react";

const faqs = [
  {
    question: "How does the DALEPREP system differ from Medify or MedEntry?",
    answer:
      "Medify and MedEntry are question banks. They give you volume, but no method for actually attacking each question type. DALEPREP is the engineered framework that sits on top: a repeatable, step-by-step system for every section so you stop guessing and start scoring with intent.",
  },
  {
    question: "Can I use this if I have less than 4 weeks until my exam?",
    answer:
      "Yes. The system is built in modular phases, so you can install the highest-leverage frameworks first and drill them under timed conditions immediately. Candidates on compressed timelines use the diagnose step to target the weakest sections and prioritise the fastest point gains.",
  },
  {
    question: "Does the system include a question bank, or is it a framework?",
    answer:
      "DALEPREP is a framework, not a question bank. It teaches you the exact decision process for every UCAT question type and pairs with any bank you already use (Medify, MedEntry, official practice). You bring the questions; we install the system that converts them into score.",
  },
  {
    question: 'What exactly is the "2600+ Blueprint"?',
    answer:
      "The 2600+ Blueprint is the complete, sequenced curriculum that maps every section of the UCAT to a repeatable framework engineered to push your total score past 2600. It covers Verbal Reasoning, Decision Making, Quantitative Reasoning, and Situational Judgement, plus the timing and pressure-handling systems that hold it all together.",
  },
];

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
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
    <section
      id="faq"
      ref={sectionRef}
      className="relative py-24 lg:py-32 border-t border-foreground/10 scroll-mt-24"
    >
      <div className="max-w-[1100px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="mb-12 lg:mb-16">
          <span className="inline-flex items-center gap-3 text-xs sm:text-sm font-mono uppercase tracking-widest text-primary mb-6">
            <span className="w-2 h-2 bg-primary" />
            [ DALE_index_04: FAQ ]
          </span>
          <h2
            className={`text-4xl lg:text-6xl font-display font-bold uppercase tracking-tight transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Common questions.
          </h2>
        </div>

        {/* Accordion */}
        <div className="border-t border-foreground/10">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={faq.question} className="border-b border-foreground/10">
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex items-start justify-between gap-6 py-6 lg:py-8 text-left group"
                  aria-expanded={isOpen}
                >
                  <span className="text-lg lg:text-2xl font-display font-bold tracking-tight text-balance transition-colors duration-300 group-hover:text-primary">
                    {faq.question}
                  </span>
                  <Plus
                    className={`w-5 h-5 shrink-0 mt-1 text-primary transition-transform duration-300 ${
                      isOpen ? "rotate-45" : "rotate-0"
                    }`}
                  />
                </button>
                <div
                  className={`grid transition-all duration-500 ease-out ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="pb-8 pr-8 lg:pr-16 text-muted-foreground leading-relaxed max-w-3xl">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
