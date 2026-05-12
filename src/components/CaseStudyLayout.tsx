import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";

interface Props {
  meta: {
    company: string;
    role: string;
    year: string;
    duration?: string;
    platform: string;
  };
  title: string;
  hook: string;
  hero: string;
  heroAlt: string;
  context: ReactNode;
  problem: { stat: string; label: string }[];
  research: ReactNode;
  decisions: { title: string; body: string }[];
  outcomes: { stat: string; label: string }[];
  reflection: ReactNode;
  next?: { slug: string; title: string };
}

export function CaseStudyLayout(p: Props) {
  return (
    <article>
      {/* HERO */}
      <header className="container-editorial pt-20 md:pt-28 pb-12">
        <div className="flex flex-wrap items-center gap-4 font-mono text-xs text-muted-foreground mb-10">
          <Link to="/" className="link-underline">← Selected work</Link>
          <span className="h-px w-8 bg-border" />
          <span>{p.meta.company}</span>
          <span>· {p.meta.role}</span>
          <span>· {p.meta.year}</span>
        </div>
        <h1 className="display-xl max-w-5xl">{p.title}</h1>
        <p className="lede mt-8 max-w-2xl">{p.hook}</p>
      </header>

      <div className="container-editorial">
        <div className="rounded-md overflow-hidden bg-secondary">
          <img src={p.hero} alt={p.heroAlt} width={1600} height={1024} className="w-full h-auto" />
        </div>
      </div>

      {/* META BAR */}
      <section className="container-editorial mt-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 border-y border-border py-8">
          <Meta label="Platform" value={p.meta.platform} />
          <Meta label="My role" value={p.meta.role} />
          <Meta label="Year" value={p.meta.year} />
          <Meta label="Duration" value={p.meta.duration ?? "—"} />
        </div>
      </section>

      {/* CONTEXT */}
      <section className="container-narrow mt-24">
        <p className="eyebrow mb-4">01 — The context</p>
        <h2 className="display-lg mb-8">Where the story begins.</h2>
        <div className="space-y-6 text-lg leading-relaxed">{p.context}</div>
      </section>

      {/* PROBLEM */}
      <section className="container-editorial mt-24">
        <p className="eyebrow mb-4">02 — The problem in numbers</p>
        <div className="grid md:grid-cols-3 gap-6 mt-8">
          {p.problem.map((s) => (
            <div key={s.label} className="border border-border rounded-lg p-8 bg-card">
              <div className="font-display text-5xl text-accent">{s.stat}</div>
              <p className="mt-4 text-muted-foreground leading-snug">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* RESEARCH */}
      <section className="container-narrow mt-24">
        <p className="eyebrow mb-4">03 — Research & discovery</p>
        <h2 className="display-lg mb-8">Listening before drawing.</h2>
        <div className="space-y-6 text-lg leading-relaxed">{p.research}</div>
      </section>

      {/* DECISIONS */}
      <section className="container-editorial mt-24">
        <p className="eyebrow mb-4">04 — Design decisions</p>
        <h2 className="display-lg mb-12">Three calls that shaped the experience.</h2>
        <div className="space-y-12">
          {p.decisions.map((d, i) => (
            <div key={i} className="grid md:grid-cols-12 gap-6 border-t border-border pt-8">
              <div className="md:col-span-2 font-mono text-xs text-muted-foreground">0{i + 1}</div>
              <div className="md:col-span-10">
                <h3 className="font-display text-3xl leading-tight mb-4">{d.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-lg max-w-3xl">{d.body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* OUTCOMES */}
      <section className="container-editorial mt-32">
        <div className="rounded-2xl bg-foreground text-background p-10 md:p-16">
          <p className="eyebrow text-background/60 mb-4">05 — The outcome</p>
          <h2 className="font-display text-4xl md:text-5xl mb-12 max-w-3xl leading-tight">
            What changed after launch.
          </h2>
          <div className="grid md:grid-cols-3 gap-10">
            {p.outcomes.map((o) => (
              <div key={o.label} className="border-t border-background/20 pt-6">
                <div className="font-display text-5xl">{o.stat}</div>
                <p className="mt-3 text-background/70 leading-snug">{o.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REFLECTION */}
      <section className="container-narrow mt-24">
        <p className="eyebrow mb-4">06 — Reflection</p>
        <h2 className="display-lg mb-8">What I'd carry into the next role.</h2>
        <div className="space-y-6 text-lg leading-relaxed">{p.reflection}</div>
      </section>

      {/* NEXT */}
      {p.next && (
        <section className="container-editorial mt-32 border-t border-border pt-12">
          <p className="eyebrow mb-4">Next case study</p>
          <Link to={p.next.slug} className="group block">
            <h3 className="font-display text-3xl md:text-5xl leading-tight group-hover:text-accent transition max-w-4xl">
              {p.next.title} <span aria-hidden className="inline-block transition-transform group-hover:translate-x-2">→</span>
            </h3>
          </Link>
        </section>
      )}
    </article>
  );
}

function Meta({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="eyebrow mb-2">{label}</p>
      <p className="text-foreground">{value}</p>
    </div>
  );
}
