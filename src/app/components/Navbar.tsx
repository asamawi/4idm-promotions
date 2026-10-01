"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
  { href: "/about", label: "من نحن" },
  { href: "/services", label: "خدماتنا" },
  { href: "/", label: "الرئيسية" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav
      className="fixed top-0 inset-x-0 z-50 bg-[#1a2a6c] shadow-lg"
      aria-label="القائمة الرئيسية"
    >
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        {/* Desktop nav links — left side in RTL */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`px-4 py-1.5 rounded transition-colors text-sm font-medium ${
                pathname === link.href
                  ? "text-[#f0c040] border-b-2 border-[#f0c040]"
                  : "text-white/80 hover:text-white"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Logo — right side in RTL */}
        <Link href="/" className="flex items-center gap-3" onClick={() => setIsOpen(false)}>
          <div className="text-center">
            <p className="text-[#f0c040] text-sm font-bold leading-tight">أربعة أفكار للدعاية والإعلان</p>
            <p className="text-white/60 text-xs tracking-wide">FOUR IDEAS ADVERTISING</p>
          </div>
          <div className="w-11 h-11 rounded-full bg-white flex items-center justify-center border-2 border-[#f0c040] flex-shrink-0">
            <span className="text-xl font-black text-[#1a2a6c] leading-none">4</span>
          </div>
        </Link>

        {/* Hamburger — mobile only */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-expanded={isOpen}
          aria-label="فتح القائمة"
          onClick={() => setIsOpen((o) => !o)}
        >
          <span
            className={`block w-6 h-0.5 bg-white transition-transform duration-200 ${isOpen ? "rotate-45 translate-y-2" : ""}`}
          />
          <span
            className={`block w-6 h-0.5 bg-white transition-opacity duration-200 ${isOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`block w-6 h-0.5 bg-white transition-transform duration-200 ${isOpen ? "-rotate-45 -translate-y-2" : ""}`}
          />
        </button>
      </div>

      {/* Mobile dropdown */}
      {isOpen && (
        <div className="md:hidden bg-[#121d4e] border-t border-white/10">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={`block w-full text-right px-6 py-3 border-b border-white/10 text-sm font-medium transition-colors ${
                pathname === link.href
                  ? "text-[#f0c040] bg-white/5"
                  : "text-white/80 hover:text-white hover:bg-white/5"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
