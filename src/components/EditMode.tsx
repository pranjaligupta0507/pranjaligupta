import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

type Ctx = { editing: boolean; toggle: () => void };
const EditModeCtx = createContext<Ctx>({ editing: false, toggle: () => {} });

const KEY = "pranjali.editmode";

export function EditModeProvider({ children }: { children: ReactNode }) {
  const [editing, setEditing] = useState(false);

  useEffect(() => {
    try {
      setEditing(localStorage.getItem(KEY) === "1");
    } catch {}
  }, []);

  const toggle = () => {
    setEditing((v) => {
      const next = !v;
      try {
        localStorage.setItem(KEY, next ? "1" : "0");
      } catch {}
      return next;
    });
  };

  return <EditModeCtx.Provider value={{ editing, toggle }}>{children}</EditModeCtx.Provider>;
}

export const useEditMode = () => useContext(EditModeCtx);

export function EditModeToggle() {
  const { editing, toggle } = useEditMode();
  const [exported, setExported] = useState<string | null>(null);

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

  return (
    <>
      <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-2">
        {editing && (
          <div className="flex gap-2">
            <button
              onClick={exportEdits}
              className="text-[11px] font-mono uppercase tracking-wider px-3 py-2 rounded-full bg-card border border-border hover:border-amber transition"
            >
              Export edits
            </button>
            <button
              onClick={clearEdits}
              className="text-[11px] font-mono uppercase tracking-wider px-3 py-2 rounded-full bg-card border border-border hover:border-destructive transition"
            >
              Reset all
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
          {editing ? "✓ Editing on — click any text" : "✎ Edit mode"}
        </button>
      </div>

      {exported !== null && (
        <div
          className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm grid place-items-center p-6"
          onClick={() => setExported(null)}
        >
          <div
            className="bg-card border border-border rounded-2xl max-w-2xl w-full p-6 max-h-[80vh] overflow-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-display text-2xl">Your edits</h3>
              <button
                onClick={() => {
                  navigator.clipboard?.writeText(exported);
                }}
                className="text-xs font-mono px-3 py-1.5 rounded-full bg-amber text-ink"
              >
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
