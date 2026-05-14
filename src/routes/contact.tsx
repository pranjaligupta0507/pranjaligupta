import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Editable } from "@/components/Editable";
import { EditableLink } from "@/components/EditableLink";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Pranjali Gupta" },
      { name: "description", content: "Get in touch with Pranjali Gupta — Experienced UX Designer based in Bangalore." },
    ],
  }),
  component: Contact,
});

const EMAIL = "pranjaligupta0507@gmail.com";
const PHONE = "+91 7058 512 267";
const PHONE_HREF = "tel:+917058512267";
const LINKEDIN = "https://www.linkedin.com/in/pranjali-gupta-5a1234110/";

function Contact() {
  return (
    <section className="container-editorial pt-16 md:pt-24 pb-24">
      <Editable id="contact.eyebrow" as="p" className="eyebrow mb-8" multiline={false}>
        Contact
      </Editable>
      <Editable id="contact.title" as="h1" className="display-xl max-w-4xl">
        Let's talk.
      </Editable>
      <Editable id="contact.lede" as="p" className="lede mt-8 max-w-2xl">
        The fastest way to reach me is email or LinkedIn. I reply to thoughtful messages within
        24 hours.
      </Editable>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mt-16 grid md:grid-cols-[1.1fr_1fr] gap-8"
      >
        {/* Single contact panel */}
        <div className="glass rounded-2xl p-8 md:p-10 space-y-7">
          <div>
            <p className="eyebrow mb-2">Email</p>
            <a
              href={`mailto:${EMAIL}`}
              className="font-display text-2xl md:text-3xl break-words text-foreground hover:text-amber transition block"
            >
              {EMAIL}
            </a>
            <div className="mt-3 flex flex-wrap gap-2">
              <a
                href={`https://mail.google.com/mail/?view=cm&fs=1&to=${EMAIL}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-mono px-3 py-1.5 rounded-full bg-amber text-ink hover:scale-105 transition"
              >
                Open in Gmail
              </a>
              <a
                href={`mailto:${EMAIL}`}
                className="text-xs font-mono px-3 py-1.5 rounded-full border border-border hover:border-amber transition"
              >
                Default mail app
              </a>
            </div>
          </div>
          <div className="border-t border-border pt-6">
            <p className="eyebrow mb-2">Phone</p>
            <a href={PHONE_HREF} className="font-display text-2xl md:text-3xl text-foreground hover:text-amber transition">
              {PHONE}
            </a>
            <Editable id="contact.phone.note" as="p" className="text-sm text-muted-foreground mt-2">
              Calls and WhatsApp, weekdays 10am — 7pm IST.
            </Editable>
          </div>
          <div className="border-t border-border pt-6">
            <p className="eyebrow mb-2">Based in</p>
            <Editable id="contact.location" as="p" className="font-display text-2xl text-foreground">
              Bangalore, India.
            </Editable>
          </div>
        </div>

        {/* LinkedIn card — direct anchor so it always opens */}
        <a
          href={LINKEDIN}
          target="_blank"
          rel="noopener noreferrer"
          className="block rounded-2xl overflow-hidden border border-border hover:border-amber transition group bg-card"
        >
          <div className="h-28 bg-gradient-to-r from-azure/30 via-amber/20 to-azure/30" />
          <div className="px-7 pb-7 -mt-12 relative">
            <div className="w-24 h-24 rounded-full border-4 border-card bg-amber text-ink grid place-items-center font-display text-4xl shadow-lg">
              PG
            </div>
            <div className="mt-5">
              <p className="font-display text-2xl">Pranjali Gupta</p>
              <Editable id="contact.linkedin.headline" as="p" className="text-sm text-muted-foreground mt-1">
                Experienced UX Designer · Enterprise SaaS · Fintech · B2B
              </Editable>
              <p className="text-xs font-mono text-muted-foreground mt-1">Bangalore, India</p>
            </div>
            <div className="mt-6 flex items-center justify-between gap-3 flex-wrap">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber text-ink text-sm font-medium group-hover:scale-105 transition">
                <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor" aria-hidden>
                  <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.36V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.61 0 4.28 2.38 4.28 5.47v6.27ZM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13Zm1.78 13.02H3.55V9h3.57v11.45ZM22.23 0H1.77C.79 0 0 .77 0 1.72v20.55C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.72C24 .77 23.21 0 22.23 0Z"/>
                </svg>
                View on LinkedIn
              </span>
              <span className="text-xs font-mono text-muted-foreground">linkedin.com/in/pranjali-gupta-5a1234110</span>
            </div>
          </div>
        </a>
      </motion.div>
    </section>
  );
}
