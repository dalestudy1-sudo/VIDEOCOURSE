"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "[ PERFORMANCE ]", href: "#performance" },
  { name: "[ CURRICULUM ]", href: "#features" },
  { name: "[ SYSTEM_METHOD ]", href: "#how-it-works" },
  { name: "[ ENROLL ]", href: "#secure" },
];

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed z-50 transition-all duration-500 ${
        isScrolled ? "top-4 left-4 right-4" : "top-0 left-0 right-0"
      }`}
    >
      <nav
        className={`mx-auto transition-all duration-500 ${
          isScrolled || isMobileMenuOpen
            ? "bg-background/80 backdrop-blur-xl border border-foreground/10 max-w-[1280px]"
            : "bg-transparent max-w-[1480px]"
        }`}
      >
        <div
          className={`flex items-center justify-between transition-all duration-500 px-6 lg:px-8 ${
            isScrolled ? "h-14" : "h-20"
          }`}
        >
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <span className="w-3 h-3 bg-primary" />
            <span
              className={`font-display font-bold uppercase tracking-tight transition-all duration-500 ${
                isScrolled ? "text-base" : "text-lg"
              }`}
            >
              DALEPREP&trade;
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex flex-1 items-center justify-center gap-10 lg:gap-12">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs font-mono uppercase tracking-wider text-foreground/60 hover:text-foreground transition-colors duration-300 relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-primary transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          {/* Desktop utility + CTA */}
          <div className="hidden md:flex items-center gap-6">
            <Button
              size="sm"
              asChild
              className={`bg-primary hover:bg-primary/90 text-primary-foreground font-mono uppercase tracking-wider transition-all duration-500 ${
                isScrolled ? "px-5 h-8 text-[11px]" : "px-6 h-10 text-[11px]"
              }`}
            >
              <a href="#secure">[ GET_LIFETIME_ACCESS ]</a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu - Full Screen Overlay */}
      <div
        className={`md:hidden fixed inset-0 bg-background z-40 transition-all duration-500 ${
          isMobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        style={{ top: 0 }}
      >
        <div className="flex flex-col h-full px-8 pt-28 pb-8">
          <div className="flex-1 flex flex-col justify-center gap-7">
            {navLinks.map((link, i) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`text-3xl font-display font-bold uppercase text-foreground hover:text-primary transition-all duration-500 ${
                  isMobileMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
                style={{ transitionDelay: isMobileMenuOpen ? `${i * 75}ms` : "0ms" }}
              >
                {link.name}
              </a>
            ))}
          </div>

          <div
            className={`pt-8 border-t border-foreground/10 transition-all duration-500 ${
              isMobileMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
            style={{ transitionDelay: isMobileMenuOpen ? "200ms" : "0ms" }}
          >
            <Button
              asChild
              className="w-full bg-primary text-primary-foreground h-14 text-sm font-mono uppercase tracking-wider"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <a href="#secure">[ GET_LIFETIME_ACCESS ]</a>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
