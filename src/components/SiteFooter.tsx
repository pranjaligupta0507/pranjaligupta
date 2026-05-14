import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Editable } from "@/components/Editable";

function CopyRow({ id, label, value }: { id: string; label: string; value: string }) {
  const [copied, setCopied] = useState(false);
  const onCopy = async () => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {}
  };
  return (
    <li className="flex flex-col gap-1">
      <span className="text-[11px] uppercase tracking-wider text-muted-foreground font-mono">{label}</span>
      <div className="flex items-center gap-2">
        <Editable id={id} as="span" multiline={false} className="text-sm text-foreground break-all">
          {value}
        </Editable>
        <button
          type="button"
          onClick={onCopy}
          className="text-[11px] font-mono px-2 py-0.5 rounded-full border border-border hover:border-amber hover:text-amber transition shrink-0"
          aria-label={`Copy ${label}`}
        >
          {copied ? "Copied" : "Copy"}
        </button>
      </div>
    </li>
  );
}

export function SiteFooter() {
  return (
    <footer className="mt-32 border-t border-border">
      <div className="container-editorial py-14 grid md:grid-cols-3 gap-10">
        <div>
          <p className="eyebrow mb-3">Pranjali Gupta</p>
          <p className="font-display text-2xl leading-tight">
            Experienced UX Designer · Bangalore.
          </p>
        </div>
        <div>
          <p className="eyebrow mb-3">Elsewhere</p>
          <ul className="space-y-4 text-sm">
            <CopyRow id="footer.email" label="Email" value="pranjaligupta0507@gmail.com" />
            <CopyRow id="footer.linkedin" label="LinkedIn" value="linkedin.com/in/pranjali-gupta-5a1234110" />
          </ul>
        </div>
        <div>
          <p className="eyebrow mb-3">Navigate</p>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="link-underline">Work</Link></li>
            <li><Link to="/about" className="link-underline">About</Link></li>
            <li><Link to="/contact" className="link-underline">Contact</Link></li>
          </ul>
        </div>
      </div>
      <div className="container-editorial pb-10 text-xs text-muted-foreground font-mono">
        © {new Date().getFullYear()} Pranjali Gupta.
      </div>
    </footer>
  );
}
