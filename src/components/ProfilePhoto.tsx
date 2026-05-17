import { useEffect, useRef, useState } from "react";
import defaultProfile from "@/assets/profile.jpg";
import { useEditMode } from "./EditMode";

const STORAGE_KEY = "pranjali.profile.image";

export function ProfilePhoto({ className = "" }: { className?: string }) {
  const { owner } = useEditMode();
  const [src, setSrc] = useState<string>(defaultProfile);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) setSrc(saved);
    } catch {}
  }, []);

  const handleFile = (file: File) => {
    const reader = new FileReader();
    reader.onload = () => {
      const data = reader.result as string;
      setSrc(data);
      try { localStorage.setItem(STORAGE_KEY, data); } catch {}
    };
    reader.readAsDataURL(file);
  };

  const reset = () => {
    setSrc(defaultProfile);
    try { localStorage.removeItem(STORAGE_KEY); } catch {}
  };

  return (
    <div className={`relative group ${className}`}>
      <div className="absolute -inset-3 rounded-full bg-gradient-to-br from-amber/40 via-azure/30 to-transparent blur-2xl opacity-70 group-hover:opacity-100 transition" aria-hidden />
      <div className="relative aspect-square rounded-full overflow-hidden border-2 border-amber/30 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.6)]">
        <img src={src} alt="Pranjali Gupta" className="w-full h-full object-cover" />
      </div>
      {owner && (
        <>
          <button
            type="button"
            onClick={() => inputRef.current?.click()}
            className="absolute bottom-2 right-2 text-[11px] font-mono uppercase tracking-wider px-3 py-1.5 rounded-full bg-amber text-ink hover:scale-105 transition shadow-lg"
            aria-label="Change profile picture"
          >
            Change photo
          </button>
          {src !== defaultProfile && (
            <button
              type="button"
              onClick={reset}
              className="absolute top-2 right-2 text-[10px] font-mono uppercase tracking-wider px-2 py-1 rounded-full bg-background/80 text-foreground border border-border hover:bg-background"
            >
              Reset
            </button>
          )}
          <input
            ref={inputRef}
            type="file"
            accept="image/*"
            className="hidden"
            onChange={(e) => {
              const f = e.target.files?.[0];
              if (f) handleFile(f);
            }}
          />
        </>
      )}
    </div>
  );
}
