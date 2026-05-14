import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useState } from "react";
import { Editable } from "@/components/Editable";
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
        Let's connect.
      </Editable>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
      >
        <ContactCard
          eyebrow="Email"
          value={EMAIL}
          icon={
            <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
              <rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/>
            </svg>
          }
        />
        <ContactCard
          eyebrow="Call & WhatsApp"
          value={PHONE}
          hint="Open to calls and WhatsApp messages — say hi anytime."
          icon={
            <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92Z"/>
            </svg>
          }
        />
        <ContactCard
          eyebrow="LinkedIn"
          value={LINKEDIN}
          mono
          icon={
            <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor" aria-hidden>
              <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.36V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.61 0 4.28 2.38 4.28 5.47v6.27ZM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13Zm1.78 13.02H3.55V9h3.57v11.45ZM22.23 0H1.77C.79 0 0 .77 0 1.72v20.55C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.72C24 .77 23.21 0 22.23 0Z"/>
            </svg>
          }
        />

        {/* Location — full width */}
        <div className="glass rounded-2xl p-7 sm:col-span-2 lg:col-span-3 flex items-center gap-5">
          <span className="w-12 h-12 rounded-full bg-azure/20 text-azure grid place-items-center">
            <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
              <path d="M12 22s-8-7.58-8-13a8 8 0 1 1 16 0c0 5.42-8 13-8 13Z"/><circle cx="12" cy="9" r="3"/>
            </svg>
          </span>
          <div>
            <p className="eyebrow mb-1">Based in</p>
            <Editable id="contact.location" as="p" className="font-display text-xl text-foreground">
              Bangalore, India.
            </Editable>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

function ContactCard({
  eyebrow,
  value,
  icon,
  mono = false,
}: {
  eyebrow: string;
  value: string;
  icon: React.ReactNode;
  mono?: boolean;
}) {
  const [copied, setCopied] = useState(false);
  const onCopy = async () => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch {}
  };
  return (
    <div className="glass rounded-2xl p-7 flex flex-col gap-4 border border-border">
      <span className="w-12 h-12 rounded-full bg-amber/15 text-amber grid place-items-center">
        {icon}
      </span>
      <div>
        <p className="eyebrow mb-2">{eyebrow}</p>
        <p className={`${mono ? "font-mono text-sm" : "font-display text-lg"} text-foreground break-all select-all`}>
          {value}
        </p>
      </div>
      <button
        type="button"
        onClick={onCopy}
        className="mt-auto self-start text-xs font-mono px-3 py-1.5 rounded-full border border-border hover:border-amber hover:text-amber transition"
      >
        {copied ? "Copied ✓" : "Copy"}
      </button>
    </div>
  );
}
