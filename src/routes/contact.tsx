import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Pranjali Gupta" },
      { name: "description", content: "Get in touch with Pranjali Gupta — Senior Product Designer based in Bangalore. Available for senior UX and product design roles." },
      { property: "og:title", content: "Contact — Pranjali Gupta" },
      { property: "og:description", content: "Open to Senior / Lead UX roles. Let's talk." },
    ],
  }),
  component: Contact,
});

function Contact() {
  return (
    <section className="container-editorial pt-20 md:pt-32 pb-24">
      <p className="eyebrow mb-8">Contact</p>
      <h1 className="display-xl max-w-4xl">
        Hiring a senior designer for <em className="text-accent not-italic">enterprise, fintech</em> or B2B SaaS? Let's talk.
      </h1>
      <p className="lede mt-10 max-w-2xl">
        I reply to every thoughtful email within 24 hours. The fastest way to reach me is below — pick whichever feels least formal.
      </p>

      <div className="mt-16 grid md:grid-cols-3 gap-6">
        {[
          { label: "Email", value: "pranjaligupta0507@gmail.com", href: "mailto:pranjaligupta0507@gmail.com", note: "Best for roles & long messages" },
          { label: "Phone", value: "+91 7058 512 267", href: "tel:+917058512267", note: "Calls & WhatsApp, weekdays" },
          { label: "LinkedIn", value: "/in/pranjali-gupta", href: "https://www.linkedin.com/in/pranjali-gupta", note: "DM open to recruiters" },
        ].map((c) => (
          <a
            key={c.label}
            href={c.href}
            target={c.href.startsWith("http") ? "_blank" : undefined}
            rel="noopener"
            className="group block p-8 border border-border rounded-lg bg-card hover:bg-foreground hover:text-background transition"
          >
            <p className="eyebrow group-hover:text-background/60">{c.label}</p>
            <p className="font-display text-2xl mt-4 break-words">{c.value}</p>
            <p className="mt-6 text-sm text-muted-foreground group-hover:text-background/70">{c.note}</p>
            <span className="inline-flex items-center gap-2 mt-6 text-sm">Open <span aria-hidden>→</span></span>
          </a>
        ))}
      </div>

      <div className="mt-24 grid md:grid-cols-2 gap-12 border-t border-border pt-12">
        <div>
          <p className="eyebrow mb-3">Looking for</p>
          <h3 className="font-display text-3xl leading-tight">Senior or Lead Product Designer roles in enterprise SaaS, fintech & B2B platforms.</h3>
        </div>
        <div>
          <p className="eyebrow mb-3">Currently based in</p>
          <h3 className="font-display text-3xl leading-tight">Bangalore, India — open to remote & hybrid; relocation for the right team.</h3>
        </div>
      </div>
    </section>
  );
}
