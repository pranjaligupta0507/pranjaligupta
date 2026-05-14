import { useState, type ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Editable } from "@/components/Editable";
import { EditableImage } from "@/components/EditableImage";
import { useEditMode } from "@/components/EditMode";

interface FlipCardProps {
  editKey: string;
  no: string;
  image: string;
  title: string;
  company: string;
  year: string;
  tags: string[];
  background: string;
  role: string;
  metrics: { stat: string; label: string }[];
  slug: string;
  ctaLabel?: string;
  children?: ReactNode;
}

export function FlipCard(props: FlipCardProps) {
  const [flipped, setFlipped] = useState(false);
  const { editing } = useEditMode();
  const k = props.editKey;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6 }}
      className="flip-scene min-h-[560px]"
    >
      <div className={`flip-card h-full ${flipped ? "is-flipped" : ""}`}>
        {/* FRONT */}
        <div
          role="button"
          tabIndex={0}
          onClick={() => { if (!editing) setFlipped(true); }}
          onKeyDown={(event) => {
            if (!editing && (event.key === "Enter" || event.key === " ")) setFlipped(true);
          }}
          className="flip-face absolute inset-0 text-left rounded-2xl overflow-hidden glass group cursor-pointer"
          aria-label={`Flip card: ${props.title}`}
        >
          <div className="relative h-64 overflow-hidden">
            <EditableImage id={`fc.${k}.image`} defaultSrc={props.image} alt={props.title} imgClassName="w-full h-64 object-cover block group-hover:scale-105 transition-transform duration-700" />
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/30 to-transparent" />
            <span className="absolute top-4 left-4 font-mono text-xs px-2.5 py-1 rounded-full bg-background/70 border border-border">
              <Editable id={`fc.${k}.no`} as="span" multiline={false}>{props.no}</Editable>
            </span>
            <span className="absolute top-4 right-4 font-mono text-xs px-2.5 py-1 rounded-full bg-amber text-ink">
              <Editable id={`fc.${k}.flipLabel`} as="span" multiline={false}>Tap to flip ↻</Editable>
            </span>
            {editing && (
              <button type="button" onClick={() => setFlipped(true)} className="absolute bottom-4 right-4 font-mono text-xs px-3 py-1.5 rounded-full bg-card border border-border text-foreground">
                Edit back
              </button>
            )}
          </div>
          <div className="p-6">
            <Editable id={`fc.${k}.company`} as="p" multiline={false} className="font-mono text-xs text-amber mb-3">
              {props.company} · {props.year}
            </Editable>
            <Editable id={`fc.${k}.title`} as="h3" className="font-display text-2xl md:text-3xl leading-tight">
              {props.title}
            </Editable>
            <div className="mt-5 flex flex-wrap gap-2">
              {props.tags.map((t, i) => (
                <Editable key={i} id={`fc.${k}.tag.${i}`} as="span" multiline={false} className="text-xs px-2.5 py-1 rounded-full border border-border text-muted-foreground">
                  {t}
                </Editable>
              ))}
            </div>
          </div>
        </div>

        {/* BACK */}
        <div className="flip-face flip-back absolute inset-0 rounded-2xl p-7 md:p-8 overflow-hidden flex flex-col" style={{ background: "var(--gradient-card)" }}>
          <div className="flex items-start justify-between gap-3">
            <Editable id={`fc.${k}.back.eyebrow`} as="p" className="eyebrow" multiline={false}>Background &amp; My Role</Editable>
            <button
              type="button"
              onClick={() => setFlipped(false)}
              className="text-xs font-mono px-3 py-1.5 rounded-full border border-border hover:border-amber hover:text-amber transition"
              aria-label="Flip back"
            >
              ← Back
            </button>
          </div>

          <Editable id={`fc.${k}.titleBack`} as="h3" className="font-display text-2xl mt-3 leading-tight">
            {props.title}
          </Editable>

          <div className="mt-4 space-y-3 text-sm leading-relaxed text-muted-foreground overflow-y-auto pr-1">
            <div>
              <p className="text-xs uppercase tracking-wider text-amber/80 mb-1 font-mono">Background</p>
              <Editable id={`fc.${k}.bg`} as="p">{props.background}</Editable>
            </div>
            <div>
              <p className="text-xs uppercase tracking-wider text-amber/80 mb-1 font-mono">My Role</p>
              <Editable id={`fc.${k}.role`} as="p">{props.role}</Editable>
            </div>
          </div>

          <div className="mt-4 grid grid-cols-3 gap-2 border-t border-border pt-4">
            {props.metrics.map((m, i) => (
              <div key={i}>
                <Editable id={`fc.${k}.m.${i}.s`} as="div" multiline={false} className="font-display text-xl text-gradient">
                  {m.stat}
                </Editable>
                <Editable id={`fc.${k}.m.${i}.l`} as="p" multiline={false} className="text-[10px] uppercase tracking-wider text-muted-foreground mt-1 leading-tight">
                  {m.label}
                </Editable>
              </div>
            ))}
          </div>

          <Link
            to={props.slug}
            className="mt-5 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-amber text-ink text-sm font-medium hover:scale-[1.02] transition"
          >
            <Editable id={`fc.${k}.cta`} as="span" multiline={false}>{props.ctaLabel ?? "Open the full story"}</Editable>
            <span aria-hidden>→</span>
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
