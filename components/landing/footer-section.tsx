"use client";

import { ArrowUpRight } from "lucide-react";

const footerLinks = {
  System: [
    { name: "The Curriculum", href: "#features" },
    { name: "How it works", href: "#how-it-works" },
    { name: "Works with", href: "#integrations" },
  ],
  Resources: [
    { name: "UCAT Overview", href: "#" },
    { name: "Score Bands", href: "#" },
    { name: "FAQ", href: "#faq" },
    {
      name: "DALETRACKER: UCAT Mock Tracker",
      href: "https://dale-tracker-d.vercel.app/",
    },
  ],
  Legal: [
    { name: "Privacy", href: "#" },
    { name: "Terms", href: "#" },
  ],
};

const socialLinks = [{ name: "YouTube", href: "#" }];

export function FooterSection() {
  return (
    <footer className="relative border-t border-foreground/10">
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Main Footer */}
        <div className="py-16 lg:py-24">
          <div className="grid grid-cols-2 md:grid-cols-6 gap-12 lg:gap-8">
            {/* Brand Column */}
            <div className="col-span-2">
              <a href="#" className="inline-flex items-center gap-2 mb-6">
                <span className="w-3 h-3 bg-primary" />
                <span className="text-xl font-display font-bold uppercase tracking-tight">
                  DALEPREP&trade;
                </span>
              </a>

              <p className="text-muted-foreground leading-relaxed mb-8 max-w-xs">
                The engineered blueprint to master the UCAT and score 2600+. A
                structured, repeatable system. Not luck.
              </p>

              {/* Social Links */}
              <div className="flex gap-6">
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="text-sm font-mono uppercase tracking-wider text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1 group"
                  >
                    {link.name}
                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </a>
                ))}
              </div>
            </div>

            {/* Link Columns */}
            {Object.entries(footerLinks).map(([title, links]) => (
              <div key={title}>
                <h3 className="text-xs font-mono uppercase tracking-widest text-primary mb-6">
                  [ {title} ]
                </h3>
                <ul className="space-y-4">
                  {links.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        target={link.href.startsWith("http") ? "_blank" : undefined}
                        rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-8 border-t border-foreground/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm font-mono uppercase tracking-wider text-muted-foreground">
            2026 DALEPREP&trade;. All rights reserved.
          </p>

          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <span className="flex items-center gap-2 font-mono uppercase tracking-wider text-xs">
              <span className="w-2 h-2 bg-primary animate-pulse" />
              Cohort enrolling now
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
