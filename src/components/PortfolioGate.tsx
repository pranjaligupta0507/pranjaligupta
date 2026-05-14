import { useEffect, useState, type ReactNode } from "react";

const GATE_KEY = "pranjali.portfolio.access";
const PORTFOLIO_PASSCODE = "Pranjali@2026";

export function PortfolioGate({ children }: { children: ReactNode }) {
  const [ready, setReady] = useState(false);
  const [allowed, setAllowed] = useState(false);
  const [code, setCode] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    try {
      setAllowed(localStorage.getItem(GATE_KEY) === "1");
    } catch {}
    setReady(true);
  }, []);

  const submit = (event: React.FormEvent) => {
    event.preventDefault();
    if (code.trim() === PORTFOLIO_PASSCODE) {
      try { localStorage.setItem(GATE_KEY, "1"); } catch {}
      setAllowed(true);
      setError("");
      return;
    }
    setError("Incorrect passcode. Please try again.");
  };

  if (!ready) return null;
  if (allowed) return <>{children}</>;

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