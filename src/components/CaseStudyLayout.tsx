import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { Editable } from "@/components/Editable";
import { EditableImage } from "@/components/EditableImage";

interface Props {
  /** Stable id used to namespace editable content for this case study (e.g. "payroll"). */
  editKey: string;
  meta: {
    company: string;
    role: string;
    year: string;
    duration?: string;
    platform: string;
    team?: string;
  };
  figmaUrl?: string;
  title: string;
  hook: string;
  hero: string;
  heroAlt: string;
  context: ReactNode;
  problem: { stat: string; label: string }[];
  research: ReactNode;
  decisions: { title: string; body: string }[];
  tradeoffs?: { title: string; body: string }[];
  outcomes: { stat: string; label: string }[];
  reflection: ReactNode;
  interviews?: { quote: string; who: string }[];
  next?: { slug: string; title: string };
}

export function CaseStudyLayout(p: Props) {
  const k = p.editKey;
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
        <Editable id={`cs.${k}.title`} as="h1" className="display-xl max-w-5xl">
          {p.title}
        </Editable>
        <Editable id={`cs.${k}.hook`} as="p" className="lede mt-8 max-w-3xl">
          {p.hook}
        </Editable>
      </header>

      <div className="container-editorial">
        <div className="rounded-2xl overflow-hidden bg-secondary border border-border">
          <img src={p.hero} alt={p.heroAlt} width={1600} height={1024} className="w-full h-auto" />
        </div>
      </div>

      {/* META BAR */}
      <section className="container-editorial mt-14">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 border-y border-border py-8">
          <Meta label="Platform" id={`cs.${k}.meta.platform`} value={p.meta.platform} />
          <Meta label="My role" id={`cs.${k}.meta.role`} value={p.meta.role} />
          <Meta label="Team" id={`cs.${k}.meta.team`} value={p.meta.team ?? "Cross-functional"} />
          <Meta label="Duration" id={`cs.${k}.meta.duration`} value={p.meta.duration ?? p.meta.year} />
          <FigmaLink id={`cs.${k}.meta.figma`} url={p.figmaUrl} />
        </div>
      </section>

      {/* CONTEXT */}
      <section className="container-narrow mt-24">
        <p className="eyebrow mb-4">01 — Context</p>
        <Editable id={`cs.${k}.context.h`} as="h2" className="display-lg mb-8">
          The business, the user, the stakes.
        </Editable>
        <Editable id={`cs.${k}.context.body`} as="div" className="space-y-6 text-lg leading-relaxed">
          {p.context}
        </Editable>
      </section>

      {/* PROBLEM */}
      <section className="container-editorial mt-24">
        <p className="eyebrow mb-4">02 — The problem in numbers</p>
        <div className="grid md:grid-cols-3 gap-6 mt-8">
          {p.problem.map((s, i) => (
            <div key={s.label} className="border border-border rounded-2xl p-8 bg-card">
              <Editable id={`cs.${k}.problem.${i}.s`} as="div" className="font-display text-5xl text-amber" multiline={false}>
                {s.stat}
              </Editable>
              <Editable id={`cs.${k}.problem.${i}.l`} as="p" className="mt-4 text-muted-foreground leading-snug">
                {s.label}
              </Editable>
            </div>
          ))}
        </div>
      </section>

      {/* RESEARCH */}
      <section className="container-narrow mt-24">
        <p className="eyebrow mb-4">03 — Discovery</p>
        <Editable id={`cs.${k}.research.h`} as="h2" className="display-lg mb-8">
          Listening before drawing.
        </Editable>
        <Editable id={`cs.${k}.research.body`} as="div" className="space-y-6 text-lg leading-relaxed">
          {p.research}
        </Editable>
      </section>

      {/* DECISIONS */}
      <section className="container-editorial mt-24">
        <p className="eyebrow mb-4">04 — Design decisions</p>
        <Editable id={`cs.${k}.decisions.h`} as="h2" className="display-lg mb-12">
          The bets I made, and why.
        </Editable>
        <div className="space-y-12">
          {p.decisions.map((d, i) => (
            <div key={i} className="grid md:grid-cols-12 gap-6 border-t border-border pt-8">
              <div className="md:col-span-2 font-mono text-xs text-amber">0{i + 1}</div>
              <div className="md:col-span-10">
                <Editable id={`cs.${k}.dec.${i}.t`} as="h3" className="font-display text-2xl md:text-3xl leading-tight mb-4">
                  {d.title}
                </Editable>
                <Editable id={`cs.${k}.dec.${i}.b`} as="p" className="text-muted-foreground leading-relaxed text-lg max-w-3xl">
                  {d.body}
                </Editable>
              </div>
            </div>
          ))}
        </div>

        {/* PROCESS — sketches & interview */}
        <div className="mt-16 grid md:grid-cols-3 gap-6">
          <EditableImage id={`${k}.sketch.1`} alt="Early sketch" caption="Early flow exploration" captionId={`cs.${k}.sketch.1.cap`} />
          <EditableImage id={`${k}.sketch.2`} alt="Wireframe" caption="Wireframe iteration" captionId={`cs.${k}.sketch.2.cap`} />
          <EditableImage id={`${k}.sketch.3`} alt="Hi-fi" caption="Hi-fi annotation" captionId={`cs.${k}.sketch.3.cap`} />
        </div>
      </section>

      {/* INTERVIEW — voice of the user */}
      <section className="container-narrow mt-24">
        <p className="eyebrow mb-4">Voices from the field</p>
        <div className="grid md:grid-cols-2 gap-6">
          {(p.interviews ?? [
            { quote: "I just want to pay my people. If you ask me one more question on Friday I will switch tools.", who: "Owner, 12-person construction firm" },
            { quote: "Half my Mondays are spent figuring out who can take what. The tool only tells me after the fact.", who: "Resource Manager, 8 years tenure" },
          ]).map((q, i) => (
            <Editable key={i} id={`cs.${k}.interview.${i}`} as="blockquote" className="glass rounded-2xl p-7 text-lg leading-relaxed border-l-2 border-amber">
              “{q.quote}” <span className="block mt-3 text-xs font-mono text-muted-foreground">— {q.who}</span>
            </Editable>
          ))}
        </div>
      </section>

      {/* TRADE-OFFS — signals seniority */}
      {p.tradeoffs && p.tradeoffs.length > 0 && (
        <section className="container-editorial mt-24">
          <p className="eyebrow mb-4">05 — Trade-offs</p>
          <Editable id={`cs.${k}.trade.h`} as="h2" className="display-lg mb-10">
            What we cut — and why.
          </Editable>
          <div className="grid md:grid-cols-2 gap-6">
            {p.tradeoffs.map((t, i) => (
              <div key={i} className="glass rounded-2xl p-7">
                <Editable id={`cs.${k}.trade.${i}.t`} as="h3" className="font-display text-xl mb-3">
                  {t.title}
                </Editable>
                <Editable id={`cs.${k}.trade.${i}.b`} as="p" className="text-muted-foreground leading-relaxed text-sm">
                  {t.body}
                </Editable>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* OUTCOMES */}
      <section className="container-editorial mt-32">
        <div className="rounded-2xl bg-foreground text-background p-10 md:p-16">
          <p className="eyebrow text-background/60 mb-4">06 — Outcome</p>
          <Editable id={`cs.${k}.out.h`} as="h2" className="font-display text-4xl md:text-5xl mb-12 max-w-3xl leading-tight">
            What changed after launch.
          </Editable>
          <div className="grid md:grid-cols-3 gap-10">
            {p.outcomes.map((o, i) => (
              <div key={o.label} className="border-t border-background/20 pt-6">
                <Editable id={`cs.${k}.out.${i}.s`} as="div" className="font-display text-5xl" multiline={false}>
                  {o.stat}
                </Editable>
                <Editable id={`cs.${k}.out.${i}.l`} as="p" className="mt-3 text-background/70 leading-snug">
                  {o.label}
                </Editable>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REFLECTION */}
      <section className="container-narrow mt-24">
        <p className="eyebrow mb-4">07 — Reflection</p>
        <Editable id={`cs.${k}.ref.h`} as="h2" className="display-lg mb-8">
          What I'd carry forward.
        </Editable>
        <Editable id={`cs.${k}.ref.body`} as="div" className="space-y-6 text-lg leading-relaxed">
          {p.reflection}
        </Editable>
      </section>

      {/* NEXT */}
      {p.next && (
        <section className="container-editorial mt-32 border-t border-border pt-12">
          <p className="eyebrow mb-4">Next case study</p>
          <Link to={p.next.slug} className="group block">
            <h3 className="font-display text-3xl md:text-5xl leading-tight group-hover:text-amber transition max-w-4xl">
              {p.next.title} <span aria-hidden className="inline-block transition-transform group-hover:translate-x-2">→</span>
            </h3>
          </Link>
        </section>
      )}
    </article>
  );
}

function Meta({ label, value, id }: { label: string; value: string; id: string }) {
  return (
    <div>
      <p className="eyebrow mb-2">{label}</p>
      <Editable id={id} as="p" className="text-foreground" multiline={false}>
        {value}
      </Editable>
    </div>
  );
}

function FigmaLink({ url, id }: { url?: string; id: string }) {
  // Owner edits the URL inline (paste it into the field). Visitors see it as a link.
  return (
    <div>
      <p className="eyebrow mb-2">Figma</p>
      <Editable id={id} as="div" multiline={false} className="text-amber hover:underline break-all">
        {url ?? "Paste Figma link here"}
      </Editable>
      <FigmaOpen storageId={id} fallback={url} />
    </div>
  );
}

function FigmaOpen({ storageId, fallback }: { storageId: string; fallback?: string }) {
  if (typeof window === "undefined") return null;
  let stored: string | null = null;
  try { stored = localStorage.getItem(`edit:${storageId}`); } catch {}
  const raw = (stored || fallback || "").replace(/<[^>]+>/g, "").trim();
  if (!raw || !/^https?:\/\//.test(raw)) return null;
  return (
    <a href={raw} target="_blank" rel="noopener noreferrer" className="text-xs font-mono text-muted-foreground hover:text-amber inline-flex mt-1">
      Open prototype ↗
    </a>
  );
}
