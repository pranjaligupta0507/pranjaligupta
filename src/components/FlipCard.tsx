import { useState, type ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";

interface FlipCardProps {
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

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6 }}
      className="flip-scene min-h-[520px]"
    >
      <div className={`flip-card h-full ${flipped ? "is-flipped" : ""}`}>
        {/* FRONT */}
        <button
          type="button"
          onClick={() => setFlipped(true)}
          className="flip-face absolute inset-0 text-left rounded-2xl overflow-hidden glass group cursor-pointer"
          aria-label={`Flip card: ${props.title}`}
        >
          <div className="relative h-64 overflow-hidden">
            <img
              src={props.image}
              alt={props.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/30 to-transparent" />
            <span className="absolute top-4 left-4 font-mono text-xs px-2.5 py-1 rounded-full bg-background/70 border border-border">
              {props.no}
            </span>
            <span className="absolute top-4 right-4 font-mono text-xs px-2.5 py-1 rounded-full bg-amber text-ink">
              Tap to flip ↻
            </span>
          </div>
          <div className="p-6">
            <p className="font-mono text-xs text-amber mb-3">{props.company} · {props.year}</p>
            <h3 className="font-display text-2xl md:text-3xl leading-tight">{props.title}</h3>
            <div className="mt-5 flex flex-wrap gap-2">
              {props.tags.map((t) => (
                <span key={t} className="text-xs px-2.5 py-1 rounded-full border border-border text-muted-foreground">{t}</span>
              ))}
            </div>
          </div>
        </button>

        {/* BACK */}
        <div className="flip-face flip-back absolute inset-0 rounded-2xl p-7 md:p-8 overflow-hidden flex flex-col"
             style={{ background: "var(--gradient-card)" }}>
          <div className="flex items-start justify-between gap-3">
            <p className="eyebrow">Background & My Role</p>
            <button
              type="button"
              onClick={() => setFlipped(false)}
              className="text-xs font-mono px-3 py-1.5 rounded-full border border-border hover:border-amber hover:text-amber transition"
              aria-label="Flip back"
            >
              ← Back
            </button>
          </div>

          <h3 className="font-display text-2xl mt-3 leading-tight">{props.title}</h3>

          <div className="mt-4 space-y-3 text-sm leading-relaxed text-muted-foreground overflow-y-auto pr-1">
            <div>
              <p className="text-xs uppercase tracking-wider text-amber/80 mb-1 font-mono">Background</p>
              <p>{props.background}</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-wider text-amber/80 mb-1 font-mono">My Role</p>
              <p>{props.role}</p>
            </div>
          </div>

          <div className="mt-4 grid grid-cols-3 gap-2 border-t border-border pt-4">
            {props.metrics.map((m) => (
              <div key={m.label}>
                <div className="font-display text-xl text-gradient">{m.stat}</div>
                <p className="text-[10px] uppercase tracking-wider text-muted-foreground mt-1 leading-tight">{m.label}</p>
              </div>
            ))}
          </div>

          <Link
            to={props.slug}
            className="mt-5 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-amber text-ink text-sm font-medium hover:scale-[1.02] transition"
          >
            {props.ctaLabel ?? "Open the full story"}
            <span aria-hidden>→</span>
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
