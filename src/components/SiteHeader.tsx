import { Link } from "@tanstack/react-router";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-background/80 border-b border-border">
      <div className="container-editorial flex items-center justify-between h-16">
        <Link to="/" className="flex items-center gap-3 group">
          <span className="w-8 h-8 rounded-full bg-foreground text-background grid place-items-center font-display text-sm">P</span>
          <span className="font-display text-lg tracking-tight">Pranjali Gupta</span>
        </Link>
        <nav className="hidden md:flex items-center gap-8 text-sm">
          <Link to="/" activeOptions={{ exact: true }} activeProps={{ className: "text-foreground" }} className="text-muted-foreground hover:text-foreground transition">Work</Link>
          <Link to="/about" activeProps={{ className: "text-foreground" }} className="text-muted-foreground hover:text-foreground transition">About</Link>
          <Link to="/contact" activeProps={{ className: "text-foreground" }} className="text-muted-foreground hover:text-foreground transition">Contact</Link>
        </nav>
        <a
          href="mailto:pranjaligupta0507@gmail.com"
          className="hidden md:inline-flex items-center gap-2 text-sm px-4 py-2 rounded-full bg-foreground text-background hover:bg-accent transition"
        >
          Let's talk
          <span aria-hidden>→</span>
        </a>
      </div>
    </header>
  );
}
