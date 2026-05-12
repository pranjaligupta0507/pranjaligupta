import { Link } from "@tanstack/react-router";

const LINKEDIN = "https://www.linkedin.com/in/pranjali-gupta-5a1234110/";

export function SiteFooter() {
  return (
    <footer className="mt-32 border-t border-border">
      <div className="container-editorial py-14 grid md:grid-cols-3 gap-10">
        <div>
          <p className="eyebrow mb-3">Pranjali Gupta</p>
          <p className="font-display text-2xl leading-tight">
            Product Designer · Bangalore.
          </p>
        </div>
        <div>
          <p className="eyebrow mb-3">Elsewhere</p>
          <ul className="space-y-2 text-sm">
            <li><a href="mailto:pranjaligupta0507@gmail.com" className="link-underline">pranjaligupta0507@gmail.com</a></li>
            <li><a href={LINKEDIN} target="_blank" rel="noopener" className="link-underline">LinkedIn</a></li>
          </ul>
        </div>
        <div>
          <p className="eyebrow mb-3">Navigate</p>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="link-underline">Work</Link></li>
            <li><Link to="/about" className="link-underline">About</Link></li>
            <li><Link to="/contact" className="link-underline">Contact</Link></li>
          </ul>
        </div>
      </div>
      <div className="container-editorial pb-10 text-xs text-muted-foreground font-mono">
        © {new Date().getFullYear()} Pranjali Gupta.
      </div>
    </footer>
  );
}
