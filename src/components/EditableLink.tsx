import { useEffect, useMemo, useState } from "react";
import { useEditMode } from "./EditMode";

type LinkKind = "url" | "email" | "phone";

interface EditableLinkProps {
  id: string;
  href: string;
  label: string;
  kind?: LinkKind;
  className?: string;
  target?: string;
  rel?: string;
  hrefPlaceholder?: string;
}

function normalizeHref(value: string, kind: LinkKind) {
  const raw = value.trim();
  if (!raw) return "";
  if (kind === "email") return raw.startsWith("mailto:") ? raw : `mailto:${raw}`;
  if (kind === "phone") return raw.startsWith("tel:") ? raw : `tel:${raw.replace(/[^+\d]/g, "")}`;
  return /^https?:\/\//.test(raw) ? raw : `https://${raw}`;
}

export function EditableLink({
  id,
  href,
  label,
  kind = "url",
  className = "",
  target,
  rel = "noopener noreferrer",
  hrefPlaceholder = "Paste link",
}: EditableLinkProps) {
  const { editing } = useEditMode();
  const labelKey = `edit:${id}:label`;
  const hrefKey = `edit:${id}:href`;
  const [text, setText] = useState(label);
  const [url, setUrl] = useState(href);

  useEffect(() => {
    try {
      setText(localStorage.getItem(labelKey) ?? label);
      setUrl(localStorage.getItem(hrefKey) ?? href);
    } catch {
      setText(label);
      setUrl(href);
    }
  }, [href, hrefKey, label, labelKey]);

  const normalized = useMemo(() => normalizeHref(url, kind), [kind, url]);

  const saveText = (next: string) => {
    setText(next);
    try { localStorage.setItem(labelKey, next); } catch {}
  };

  const saveUrl = (next: string) => {
    setUrl(next);
    try { localStorage.setItem(hrefKey, next); } catch {}
  };

  if (editing) {
    return (
      <span className="inline-flex w-full max-w-full flex-col gap-2 rounded-lg border border-dashed border-amber/50 bg-background/40 p-2">
        <input
          value={text}
          onChange={(event) => saveText(event.target.value)}
          className="min-w-0 rounded-md border border-border bg-card px-3 py-2 text-sm text-foreground outline-none focus:border-amber"
          aria-label={`${id} label`}
        />
        <input
          value={url}
          onChange={(event) => saveUrl(event.target.value)}
          className="min-w-0 rounded-md border border-border bg-card px-3 py-2 font-mono text-xs text-foreground outline-none focus:border-amber"
          placeholder={hrefPlaceholder}
          aria-label={`${id} URL`}
        />
      </span>
    );
  }

  if (!normalized) {
    return <span className={className}>{text}</span>;
  }

  return (
    <a href={normalized} target={target} rel={target ? rel : undefined} className={className}>
      {text}
    </a>
  );
}