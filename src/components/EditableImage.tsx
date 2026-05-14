import { useEffect, useRef, useState } from "react";
import { useEditMode } from "./EditMode";

interface Props {
  id: string;
  defaultSrc?: string;
  alt?: string;
  className?: string;
  imgClassName?: string;
  caption?: string;
  captionId?: string;
}

/**
 * Owner-editable image. Click to upload from disk; stores a data URL in
 * localStorage. Visitors see the default or stored image, no controls.
 */
export function EditableImage({ id, defaultSrc, alt = "", className = "", imgClassName = "w-full h-auto block", caption, captionId }: Props) {
  const { editing } = useEditMode();
  const fileRef = useRef<HTMLInputElement>(null);
  const [src, setSrc] = useState<string | undefined>(defaultSrc);
  const key = `edit:img:${id}`;

  useEffect(() => {
    try {
      const stored = localStorage.getItem(key);
      if (stored) setSrc(stored);
    } catch {}
  }, [key]);

  const onPick = (e: React.ChangeEvent<HTMLInputElement>) => {
    const f = e.target.files?.[0];
    if (!f) return;
    const reader = new FileReader();
    reader.onload = () => {
      const dataUrl = reader.result as string;
      try { localStorage.setItem(key, dataUrl); } catch {}
      setSrc(dataUrl);
    };
    reader.readAsDataURL(f);
  };

  const remove = () => {
    try { localStorage.removeItem(key); } catch {}
    setSrc(defaultSrc);
  };

  return (
    <figure className={className}>
      <div className={`relative rounded-2xl overflow-hidden border border-border bg-secondary ${editing ? "outline-dashed outline-1 outline-offset-4 outline-amber/40" : ""}`}>
        {src ? (
          <img src={src} alt={alt} className={imgClassName} />
        ) : (
          <div className="aspect-[16/10] grid place-items-center text-muted-foreground text-sm">
            {editing ? "Click ‘Upload sketch’ to add an image" : "Sketch coming soon"}
          </div>
        )}
        {editing && (
          <div className="absolute top-3 right-3 flex gap-2">
            <button type="button" onClick={() => fileRef.current?.click()} className="text-[11px] font-mono px-3 py-1.5 rounded-full bg-amber text-ink shadow">
              Upload sketch
            </button>
            {src && src !== defaultSrc && (
              <button type="button" onClick={remove} className="text-[11px] font-mono px-3 py-1.5 rounded-full bg-card border border-border">
                Reset
              </button>
            )}
            <input ref={fileRef} type="file" accept="image/*" hidden onChange={onPick} />
          </div>
        )}
      </div>
      {(caption || captionId) && (
        <figcaption className="mt-3 text-xs text-muted-foreground font-mono">
          {captionId ? <CaptionEditable id={captionId} fallback={caption ?? ""} /> : caption}
        </figcaption>
      )}
    </figure>
  );
}

function CaptionEditable({ id, fallback }: { id: string; fallback: string }) {
  // Lazy import to avoid circular: just inline a simple editable span
  const { editing } = useEditMode();
  const ref = useRef<HTMLSpanElement>(null);
  const [stored, setStored] = useState<string | null>(null);
  const key = `edit:${id}`;
  useEffect(() => {
    try { const v = localStorage.getItem(key); if (v != null) setStored(v); } catch {}
  }, [key]);
  return (
    <span
      ref={ref}
      contentEditable={editing}
      suppressContentEditableWarning
      onBlur={() => { try { localStorage.setItem(key, ref.current?.innerText ?? ""); } catch {} }}
      className={editing ? "outline-dashed outline-1 outline-offset-2 outline-amber/40 rounded-sm cursor-text" : ""}
    >
      {stored ?? fallback}
    </span>
  );
}
