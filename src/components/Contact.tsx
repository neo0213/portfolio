"use client";
import { Mail } from "lucide-react";

// const socials = [
//   { icon: Github, href: "https://github.com", label: "GitHub" },
//   { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
//   { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
// ];

export default function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden">
      <div className="mx-auto max-w-6xl px-6 py-32 text-center">
        <p className="text-sm text-[var(--color-accent-2)] font-mono">/ contact</p>
        <h2 className="mt-2 text-4xl md:text-6xl font-semibold tracking-tight">
          Let&apos;s build <span className="text-gradient">something good</span>.
        </h2>
        <p className="mt-6 max-w-xl mx-auto text-[var(--color-muted)]">
          Open to consulting, contract engineering, and select full-time roles.
          The fastest way to reach me is email.
        </p>

        <a
          href="mailto:neomiguelolinar@gmail.com"
          className="mt-10 inline-flex items-center gap-2 rounded-full bg-[var(--btn-bg)] text-[var(--btn-fg)] px-6 py-3.5 text-sm font-medium hover:opacity-90 transition"
        >
          <Mail className="size-4" />
          neomiguelolinar@gmail.com
        </a>

        {/* <div className="mt-10 flex items-center justify-center gap-3">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noreferrer"
              aria-label={s.label}
              className="size-10 grid place-items-center rounded-full border border-[var(--color-border)] hover:bg-[var(--color-hover)] transition"
            >
              <s.icon className="size-4" />
            </a>
          ))}
        </div> */}
      </div>

      <footer className="border-t border-[var(--color-border)]">
        <div className="mx-auto max-w-6xl px-6 py-8 flex items-center justify-between text-xs text-[var(--color-muted)]">
          <span>© {new Date().getFullYear()} Neo Olinar</span>
          <span>Made with Next.js · Hosted on Vercel</span>
        </div>
      </footer>
    </section>
  );
}
