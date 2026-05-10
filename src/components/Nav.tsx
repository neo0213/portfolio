"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import ThemeToggle from "./ThemeToggle";
import Logo from "./Logo";

const links = [
  { href: "#work", label: "Work" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all ${
        scrolled ? "backdrop-blur-xl bg-[var(--color-bg)]/70 border-b border-[var(--color-border)]" : ""
      }`}
    >
      <nav className="mx-auto max-w-6xl px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 font-semibold tracking-tight">
          <Logo className="size-7" />
          <span>neo<span className="text-[var(--color-accent)]">.</span></span>
        </Link>
        <ul className="hidden md:flex items-center gap-8 text-sm text-[var(--color-muted)]">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="hover:text-[var(--color-fg)] transition-colors">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-3">
          <ThemeToggle />
          <a
            href="#contact"
            className="text-sm rounded-full px-4 py-2 bg-[var(--btn-bg)] text-[var(--btn-fg)] font-medium hover:opacity-90 transition"
          >
            Let&apos;s talk
          </a>
        </div>
      </nav>
    </header>
  );
}
