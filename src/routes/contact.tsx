import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Pranjali Gupta" },
      { name: "description", content: "Get in touch with Pranjali Gupta — Product Designer based in Bangalore. Enterprise SaaS, fintech and B2B." },
      { property: "og:title", content: "Contact — Pranjali Gupta" },
      { property: "og:description", content: "Let's talk about product, design and the workflows in between." },
    ],
  }),
  component: Contact,
});

const channels = [
  { label: "Email", value: "pranjaligupta0507@gmail.com", href: "mailto:pranjaligupta0507@gmail.com", note: "Best for projects & long messages" },
  { label: "Phone", value: "+91 7058 512 267", href: "tel:+917058512267", note: "Calls & WhatsApp, weekdays" },
  { label: "LinkedIn", value: "/in/pranjali-gupta", href: "https://www.linkedin.com/in/pranjali-gupta", note: "DM open" },
];

function Contact() {
  return (
    <section className="container-editorial pt-16 md:pt-24 pb-24">
      <p className="eyebrow mb-8">Contact</p>
      <h1 className="display-xl max-w-4xl">
        Working on something <span className="text-gradient">complicated and human</span>? Let's talk.
      </h1>
      <p className="lede mt-8 max-w-2xl">
        I reply to thoughtful messages within 24 hours. Pick whichever channel feels least formal.
      </p>

      <div className="mt-16 grid md:grid-cols-3 gap-6">
        {channels.map((c, i) => (
          <motion.a
            key={c.label}
            href={c.href}
            target={c.href.startsWith("http") ? "_blank" : undefined}
            rel="noopener"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            whileHover={{ y: -6 }}
            className="group block p-8 glass rounded-2xl hover:border-amber transition"
          >
            <p className="eyebrow">{c.label}</p>
            <p className="font-display text-2xl mt-4 break-words">{c.value}</p>
            <p className="mt-6 text-sm text-muted-foreground">{c.note}</p>
            <span className="inline-flex items-center gap-2 mt-6 text-sm text-amber">Open <span aria-hidden>→</span></span>
          </motion.a>
        ))}
      </div>

      <div className="mt-20 grid md:grid-cols-2 gap-10 border-t border-border pt-12">
        <div>
          <p className="eyebrow mb-3">Focus</p>
          <h3 className="font-display text-3xl leading-tight">Enterprise SaaS, fintech & B2B platforms.</h3>
        </div>
        <div>
          <p className="eyebrow mb-3">Based in</p>
          <h3 className="font-display text-3xl leading-tight">Bangalore — open to remote & hybrid.</h3>
        </div>
      </div>
    </section>
  );
}
