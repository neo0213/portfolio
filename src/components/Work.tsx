"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { projects } from "@/lib/projects";

export default function Work() {
  return (
    <section id="work" className="mx-auto max-w-6xl px-6 py-32">
      <div className="flex items-end justify-between mb-12">
        <div>
          <p className="text-sm text-[var(--color-accent-2)] font-mono">/ selected work</p>
          <h2 className="mt-2 text-3xl md:text-5xl font-semibold tracking-tight">
            Things I worked on.
          </h2>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((p, i) => (
          <motion.div
            key={p.slug}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
          >
            <Link
              href={`/work/${p.slug}`}
              className="group relative block overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[var(--color-card)] p-8 hover:border-[var(--color-border-strong)] transition"
            >
              <div
                className={`absolute -top-24 -right-24 size-64 rounded-full bg-gradient-to-br ${p.accent} blur-3xl opacity-60 group-hover:opacity-100 transition`}
              />
              <div className="relative">
                <h3 className="text-xl font-semibold">{p.title}</h3>
                <p className="mt-3 text-[var(--color-muted)] max-w-md">{p.blurb}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="text-xs rounded-full border border-[var(--color-border)] px-2.5 py-1 text-[var(--color-muted)]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
