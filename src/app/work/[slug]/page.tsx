import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import Nav from "@/components/Nav";
import Gallery from "@/components/Gallery";
import { getProject, projects } from "@/lib/projects";
import { getProjectImages } from "@/lib/projectImages";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return { title: `${project.title} — Neo`, description: project.blurb };
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const images = getProjectImages(project.slug);
  const isExternal = project.href.startsWith("http");

  return (
    <main className="min-h-screen">
      <Nav />

      <article className="mx-auto max-w-5xl px-6 pt-32 pb-24">
        <Link
          href="/#work"
          className="inline-flex items-center gap-2 text-sm text-[var(--color-muted)] hover:text-[var(--color-fg)] transition"
        >
          <ArrowLeft className="size-4" /> Back to work
        </Link>

        <header className="relative mt-8 overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[var(--color-card)] p-10">
          <div
            className={`absolute -top-32 -right-32 size-96 rounded-full bg-gradient-to-br ${project.accent} blur-3xl opacity-60`}
          />
          <div className="relative">
            <p className="text-sm text-[var(--color-accent-2)] font-mono">
              / project
            </p>
            <h1 className="mt-2 text-4xl md:text-6xl font-semibold tracking-tight">
              {project.title}
            </h1>
            <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-sm text-[var(--color-muted)]">
              {project.role && <span>{project.role}</span>}
              {project.year && <span>{project.year}</span>}
            </div>
            <div className="mt-6 flex flex-wrap gap-2">
              {project.tags.map((t) => (
                <span
                  key={t}
                  className="text-xs rounded-full border border-[var(--color-border)] px-2.5 py-1 text-[var(--color-muted)]"
                >
                  {t}
                </span>
              ))}
            </div>
            {isExternal && (
              <a
                href={project.href}
                target="_blank"
                rel="noreferrer"
                className="mt-8 inline-flex items-center gap-2 rounded-full border border-[var(--color-border-strong)] px-4 py-2 text-sm hover:bg-[var(--color-card)] transition"
              >
                Visit site <ArrowUpRight className="size-4" />
              </a>
            )}
          </div>
        </header>

        <section className="mt-12 max-w-2xl space-y-4 text-[var(--color-muted)] leading-relaxed">
          {project.summary.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </section>

        <section className="mt-16">
          <h2 className="text-sm font-mono text-[var(--color-accent-2)] mb-4">
            / gallery
          </h2>
          {images.length > 0 ? (
            <Gallery images={images} alt={project.title} />
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {Array.from({ length: 4 }).map((_, i) => (
                <div
                  key={i}
                  className="relative aspect-[4/3] overflow-hidden rounded-xl border border-[var(--color-border)] bg-[var(--color-card)]"
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${project.accent} opacity-70`}
                  />
                  <div className="relative flex h-full items-center justify-center">
                    <span className="text-xs font-mono text-[var(--color-muted)]">
                      drop image into /public/projects/{project.slug}/
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>
      </article>
    </main>
  );
}
