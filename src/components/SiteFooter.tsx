import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="mt-32 border-t border-border">
      <div className="container-editorial py-16 grid md:grid-cols-3 gap-10">
        <div>
          <p className="eyebrow mb-3">Currently</p>
          <p className="font-display text-2xl leading-tight">
            Senior Product Designer at <span className="text-accent">Intuit</span>, based in Bangalore.
          </p>
        </div>
        <div>
          <p className="eyebrow mb-3">Elsewhere</p>
          <ul className="space-y-2 text-sm">
            <li><a href="mailto:pranjaligupta0507@gmail.com" className="link-underline">pranjaligupta0507@gmail.com</a></li>
            <li><a href="tel:+917058512267" className="link-underline">+91 7058 512 267</a></li>
            <li><a href="https://www.linkedin.com/in/pranjali-gupta" target="_blank" rel="noopener" className="link-underline">LinkedIn</a></li>
          </ul>
        </div>
        <div>
          <p className="eyebrow mb-3">Navigate</p>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="link-underline">Selected Work</Link></li>
            <li><Link to="/about" className="link-underline">About & Story</Link></li>
            <li><Link to="/contact" className="link-underline">Contact</Link></li>
          </ul>
        </div>
      </div>
      <div className="container-editorial pb-10 flex flex-wrap items-center justify-between gap-4 text-xs text-muted-foreground font-mono">
        <span>© {new Date().getFullYear()} Pranjali Gupta — Designed & coded with care.</span>
        <span>Crafting clarity inside complex systems.</span>
      </div>
    </footer>
  );
}
