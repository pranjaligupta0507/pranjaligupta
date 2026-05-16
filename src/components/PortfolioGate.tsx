import { useEffect, useState, type ReactNode } from "react";

const GATE_KEY = "pranjali.portfolio.access";
const PASSCODE_KEY = "pranjali.portfolio.passcode";
const OWNER_KEY = "pranjali.owner";

async function sha256Hex(input: string): Promise<string> {
  const data = new TextEncoder().encode(input);
  const buf = await crypto.subtle.digest("SHA-256", data);
  return Array.from(new Uint8Array(buf))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

/**
 * Optional portfolio passcode gate.
 *
 * - By default the portfolio is PUBLIC. No passcode is set out of the box.
 * - Only the owner (unlocked via Edit Mode, Ctrl+Shift+E) can set or remove
 *   a passcode from the in-page settings panel below.
 * - Visitors only see the lock screen if the owner has set a passcode.
 */
export function PortfolioGate({ children }: { children: ReactNode }) {
  const [ready, setReady] = useState(false);
  const [passcode, setPasscode] = useState<string | null>(null);
  const [allowed, setAllowed] = useState(true);
  const [code, setCode] = useState("");
  const [error, setError] = useState("");
  const [isOwner, setIsOwner] = useState(false);
  const [showOwnerPanel, setShowOwnerPanel] = useState(false);
  const [newPass, setNewPass] = useState("");

  useEffect(() => {
    try {
      const stored = localStorage.getItem(PASSCODE_KEY);
      setPasscode(stored && stored.length > 0 ? stored : null);
      setAllowed(!stored || localStorage.getItem(GATE_KEY) === "1");
      setIsOwner(localStorage.getItem(OWNER_KEY) === "1");
    } catch {}
    setReady(true);
  }, []);

  const submit = async (event: React.FormEvent) => {
    event.preventDefault();
    const hash = await sha256Hex(code);
    if (passcode && hash === passcode) {
      try { localStorage.setItem(GATE_KEY, "1"); } catch {}
      setAllowed(true);
      setError("");
      return;
    }
    setError("Incorrect passcode.");
  };

  const setOrClearPasscode = async (value: string) => {
    try {
      if (value.trim() === "") {
        localStorage.removeItem(PASSCODE_KEY);
        localStorage.removeItem(GATE_KEY);
        setPasscode(null);
      } else {
        // Store only the hash — never the plaintext passcode.
        const hash = await sha256Hex(value);
        localStorage.setItem(PASSCODE_KEY, hash);
        localStorage.setItem(GATE_KEY, "1");
        setPasscode(hash);
      }
    } catch {}
    setNewPass("");
    setShowOwnerPanel(false);
  };

  if (!ready) return null;

  // No passcode set → public portfolio. Just render children, plus the
  // owner-only floating "Set passcode" control if the viewer is the owner.
  if (!passcode || allowed) {
    return (
      <>
        {children}
        {isOwner && (
          <div className="fixed bottom-5 left-5 z-40">
            {showOwnerPanel ? (
              <div className="bg-card border border-border rounded-2xl p-4 shadow-xl w-72">
                <p className="eyebrow mb-2">Portfolio passcode</p>
                <p className="text-xs text-muted-foreground mb-3">
                  {passcode ? "A passcode is currently set. Leave empty and save to remove it." : "No passcode. Visitors see the portfolio publicly."}
                </p>
                <input
                  type="text"
                  value={newPass}
                  onChange={(e) => setNewPass(e.target.value)}
                  placeholder={passcode ? "New passcode (or empty to remove)" : "Set a passcode"}
                  className="w-full px-3 py-2 rounded-lg bg-background border border-border text-sm font-mono outline-none focus:border-amber"
                />
                <div className="flex justify-end gap-2 mt-3">
                  <button onClick={() => setShowOwnerPanel(false)} className="text-xs px-3 py-1.5 rounded-full border border-border">Cancel</button>
                  <button onClick={() => setOrClearPasscode(newPass)} className="text-xs px-3 py-1.5 rounded-full bg-amber text-ink">Save</button>
                </div>
              </div>
            ) : (
              <button
                onClick={() => setShowOwnerPanel(true)}
                className="text-[11px] font-mono uppercase tracking-wider px-3 py-2 rounded-full bg-card border border-border hover:border-amber shadow-lg"
              >
                {passcode ? "🔒 Passcode set" : "🔓 Set passcode"}
              </button>
            )}
          </div>
        )}
      </>
    );
  }

  return (
    <main className="min-h-screen grid place-items-center px-6 py-16">
      <form onSubmit={submit} className="w-full max-w-md rounded-2xl border border-border bg-card/80 p-8 shadow-2xl backdrop-blur">
        <p className="eyebrow mb-4">Private portfolio</p>
        <h1 className="font-display text-4xl leading-tight">Enter passcode to view Pranjali's work.</h1>
        <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
          This portfolio is shared privately with reviewers and collaborators.
        </p>
        <label className="mt-8 block text-xs font-mono uppercase tracking-wider text-muted-foreground" htmlFor="portfolio-passcode">
          Passcode
        </label>
        <input
          id="portfolio-passcode"
          type="password"
          value={code}
          onChange={(event) => { setCode(event.target.value); setError(""); }}
          className="mt-2 w-full rounded-lg border border-border bg-background px-4 py-3 text-foreground outline-none focus:border-amber"
          autoFocus
        />
        {error && <p className="mt-3 text-sm text-destructive">{error}</p>}
        <button type="submit" className="mt-6 w-full rounded-full bg-amber px-5 py-3 text-sm font-medium text-ink transition hover:scale-[1.02]">
          Unlock portfolio
        </button>
      </form>
    </main>
  );
}
