import { Link } from "@tanstack/react-router";
import { Editable } from "@/components/Editable";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-background/80 border-b border-border">
      <div className="container-editorial flex items-center justify-between h-16">
        <Link to="/" className="flex items-center gap-3 group">
          <Editable id="nav.logo.initial" as="span" multiline={false} className="w-8 h-8 rounded-full bg-foreground text-background grid place-items-center font-display text-sm">P</Editable>
          <Editable id="nav.name" as="span" multiline={false} className="font-display text-lg tracking-tight">Pranjali Gupta</Editable>
          <Editable id="nav.role" as="span" multiline={false} className="hidden sm:inline text-xs text-muted-foreground font-mono">· Experienced UX Designer</Editable>
        </Link>
        <nav className="hidden md:flex items-center gap-8 text-sm">
          <Link to="/" activeOptions={{ exact: true }} activeProps={{ className: "text-foreground" }} className="text-muted-foreground hover:text-foreground transition">Work</Link>
          <Link to="/about" activeProps={{ className: "text-foreground" }} className="text-muted-foreground hover:text-foreground transition">About</Link>
          <Link to="/contact" activeProps={{ className: "text-foreground" }} className="text-muted-foreground hover:text-foreground transition">Contact</Link>
        </nav>
        <Link
          to="/contact"
          className="hidden md:inline-flex items-center gap-2 text-sm px-4 py-2 rounded-full bg-amber text-ink hover:scale-105 transition"
        >
          <Editable id="nav.cta" as="span" multiline={false}>Say hi</Editable>
          <span aria-hidden>→</span>
        </Link>
      </div>
    </header>
  );
}
