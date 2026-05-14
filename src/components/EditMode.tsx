import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

type Ctx = { editing: boolean; owner: boolean; toggle: () => void; unlock: (code: string) => boolean; signOut: () => void };
const EditModeCtx = createContext<Ctx>({ editing: false, owner: false, toggle: () => {}, unlock: () => false, signOut: () => {} });

const KEY = "pranjali.editmode";
const OWNER_KEY = "pranjali.owner";
// Owner passcode — only Pranjali knows this. Visitors see a read-only site.
const OWNER_CODE = "pranjali2026";

export function EditModeProvider({ children }: { children: ReactNode }) {
  const [editing, setEditing] = useState(false);
  const [owner, setOwner] = useState(false);

  useEffect(() => {
    try {
      // Auto-unlock via URL param: ?owner=pranjali2025 (one-time, then stored)
      const url = new URL(window.location.href);
      const param = url.searchParams.get("owner");
      if (param === OWNER_CODE) {
        localStorage.setItem(OWNER_KEY, "1");
        url.searchParams.delete("owner");
        window.history.replaceState({}, "", url.toString());
      }
      setOwner(localStorage.getItem(OWNER_KEY) === "1");
      setEditing(localStorage.getItem(KEY) === "1");
    } catch {}
  }, []);

  const toggle = () => {
    setEditing((v) => {
      const next = !v;
      try { localStorage.setItem(KEY, next ? "1" : "0"); } catch {}
      return next;
    });
  };

  const unlock = (code: string) => {
    if (code.trim() === OWNER_CODE) {
      try { localStorage.setItem(OWNER_KEY, "1"); } catch {}
      setOwner(true);
      return true;
    }
    return false;
  };

  const signOut = () => {
    try {
      localStorage.removeItem(OWNER_KEY);
      localStorage.setItem(KEY, "0");
    } catch {}
    setOwner(false);
    setEditing(false);
  };

  return <EditModeCtx.Provider value={{ editing: editing && owner, owner, toggle, unlock, signOut }}>{children}</EditModeCtx.Provider>;
}

export const useEditMode = () => useContext(EditModeCtx);

export function EditModeToggle() {
  const { editing, owner, toggle, unlock, signOut } = useEditMode();
  const [exported, setExported] = useState<string | null>(null);
  const [showLogin, setShowLogin] = useState(false);
  const [code, setCode] = useState("");
  const [error, setError] = useState("");

  // Hidden trigger: triple-click the footer year, OR keyboard Ctrl+Shift+E
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.shiftKey && (e.key === "E" || e.key === "e")) {
        e.preventDefault();
        if (!owner) setShowLogin(true);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [owner]);

  const exportEdits = () => {
    const out: Record<string, string> = {};
    try {
      for (let i = 0; i < localStorage.length; i++) {
        const k = localStorage.key(i)!;
        if (k.startsWith("edit:")) out[k] = localStorage.getItem(k) ?? "";
      }
    } catch {}
    setExported(JSON.stringify(out, null, 2));
  };

  const clearEdits = () => {
    try {
      const keys: string[] = [];
      for (let i = 0; i < localStorage.length; i++) {
        const k = localStorage.key(i)!;
        if (k.startsWith("edit:")) keys.push(k);
      }
      keys.forEach((k) => localStorage.removeItem(k));
    } catch {}
    location.reload();
  };

  // Visitors see nothing. Press Ctrl+Shift+E to open the owner login.
  if (!owner) {
    return showLogin ? (
      <div
        className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm grid place-items-center p-6"
        onClick={() => setShowLogin(false)}
      >
        <div
          className="bg-card border border-border rounded-2xl max-w-sm w-full p-6"
          onClick={(e) => e.stopPropagation()}
        >
          <h3 className="font-display text-2xl mb-2">Owner sign-in</h3>
          <p className="text-sm text-muted-foreground mb-4">Enter the passcode to enable edit mode on this device.</p>
          <input
            type="password"
            autoFocus
            value={code}
            onChange={(e) => { setCode(e.target.value); setError(""); }}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                if (unlock(code)) { setShowLogin(false); setCode(""); }
                else setError("Wrong passcode.");
              }
              if (e.key === "Escape") setShowLogin(false);
            }}
            className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-amber outline-none font-mono text-sm"
            placeholder="passcode"
          />
          {error && <p className="text-xs text-destructive mt-2">{error}</p>}
          <div className="flex justify-end gap-2 mt-4">
            <button onClick={() => setShowLogin(false)} className="text-xs px-3 py-2 rounded-full border border-border">Cancel</button>
            <button
              onClick={() => {
                if (unlock(code)) { setShowLogin(false); setCode(""); }
                else setError("Wrong passcode.");
              }}
              className="text-xs px-4 py-2 rounded-full bg-amber text-ink"
            >
              Unlock
            </button>
          </div>
        </div>
      </div>
    ) : null;
  }

  return (
    <>
      <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-2">
        {editing && (
          <div className="flex gap-2 flex-wrap justify-end">
            <button onClick={exportEdits} className="text-[11px] font-mono uppercase tracking-wider px-3 py-2 rounded-full bg-card border border-border hover:border-amber transition">
              Export edits
            </button>
            <button onClick={clearEdits} className="text-[11px] font-mono uppercase tracking-wider px-3 py-2 rounded-full bg-card border border-border hover:border-destructive transition">
              Reset all
            </button>
            <button onClick={signOut} className="text-[11px] font-mono uppercase tracking-wider px-3 py-2 rounded-full bg-card border border-border hover:border-amber transition">
              Sign out
            </button>
          </div>
        )}
        <button
          onClick={toggle}
          className={`text-xs font-mono uppercase tracking-wider px-4 py-2.5 rounded-full shadow-lg transition ${
            editing ? "bg-amber text-ink" : "bg-card text-foreground border border-border hover:border-amber"
          }`}
          aria-pressed={editing}
        >
          {editing ? "✓ Editing on — click any text" : "✎ Edit mode (owner)"}
        </button>
      </div>

      {exported !== null && (
        <div className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm grid place-items-center p-6" onClick={() => setExported(null)}>
          <div className="bg-card border border-border rounded-2xl max-w-2xl w-full p-6 max-h-[80vh] overflow-auto" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-display text-2xl">Your edits</h3>
              <button onClick={() => navigator.clipboard?.writeText(exported)} className="text-xs font-mono px-3 py-1.5 rounded-full bg-amber text-ink">
                Copy JSON
              </button>
            </div>
            <p className="text-sm text-muted-foreground mb-3">
              Send this to me in chat and I'll bake your edits into the code permanently.
            </p>
            <pre className="text-[11px] font-mono bg-background/50 p-4 rounded-lg overflow-auto whitespace-pre-wrap break-words">
              {exported}
            </pre>
          </div>
        </div>
      )}
    </>
  );
}
