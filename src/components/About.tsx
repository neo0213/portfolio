"use client";
import { motion } from "framer-motion";
import { Code2, Layers, Rocket, Wand2 } from "lucide-react";

const stack = [
  { icon: Code2, title: "Languages", text: "PHP, JavaScript, HTML, CSS, Tailwind." },
  { icon: Wand2, title: "AI", text: "Claude and OpenAI. Building with Claude Skills and MCP." },
  { icon: Layers, title: "Frameworks", text: "React, Next.js, Expo, Laravel, Slim PHP." },
  { icon: Rocket, title: "Hosting", text: "Vercel, Railway, SiteGround, GoDaddy." },
];

export default function About() {
  return (
    <section id="about" className="border-t border-[var(--color-border)] bg-[var(--color-card)]">
      <div className="mx-auto max-w-6xl px-6 py-32 grid md:grid-cols-2 gap-16">
        <div>
          <p className="text-sm text-[var(--color-accent-2)] font-mono">/ about</p>
          <h2 className="mt-2 text-3xl md:text-5xl font-semibold tracking-tight">
            A generalist who ships.
          </h2>
          <p className="mt-6 text-[var(--color-muted)] leading-relaxed">
            I&apos;ve been building since 2023, so about three years in. Mostly
            web apps and internal tools, taken from idea to something people
            actually use. I care about taste, speed, and the small details that
            make software feel good to use.
          </p>
          <p className="mt-4 text-[var(--color-muted)] leading-relaxed">
            I&apos;ve also done a fair bit of WordPress work, building sites
            with Elementor and dropping into custom CSS when the visual editor
            runs out of room.
          </p>
          <p className="mt-4 text-[var(--color-muted)] leading-relaxed">
            Lately I&apos;ve been focused on AI-native interfaces and the
            design-engineering work that makes them click.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          {stack.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="rounded-xl border border-[var(--color-border)] bg-[var(--color-card)] p-5"
            >
              <s.icon className="size-5 text-[var(--color-accent)]" />
              <h3 className="mt-4 font-medium">{s.title}</h3>
              <p className="mt-1 text-sm text-[var(--color-muted)]">{s.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
