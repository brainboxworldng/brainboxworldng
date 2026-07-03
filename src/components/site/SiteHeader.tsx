import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, Sparkles } from "lucide-react";

const nav = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/case-studies", label: "Case Studies" },
  { to: "/pricing", label: "Pricing" },
  { to: "/about", label: "About" },
  { to: "/blog", label: "Blog" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 transition-all ${scrolled ? "glass shadow-soft" : "bg-transparent"}`}>
      <div className="container-x flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2 font-display text-lg font-bold">
          <span className="grid size-8 place-items-center rounded-xl bg-gradient-brand text-white shadow-elegant">
            <Sparkles className="size-4" />
          </span>
          <span>Brainbox<span className="text-gradient">World</span></span>
        </Link>
        <nav className="hidden items-center gap-7 lg:flex">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              activeOptions={{ exact: n.to === "/" }}
              className="text-sm font-medium text-foreground/70 transition hover:text-foreground"
              activeProps={{ className: "text-foreground" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>
        <div className="hidden lg:block">
          <Link to="/contact" className="inline-flex items-center rounded-full bg-gradient-brand px-5 py-2.5 text-sm font-semibold text-white shadow-elegant transition hover:scale-105">
            Get a Quote
          </Link>
        </div>
        <button
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden rounded-lg p-2"
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>
      {open && (
        <div className="lg:hidden glass border-t">
          <div className="container-x flex flex-col gap-1 py-4">
            {nav.map((n) => (
              <Link key={n.to} to={n.to} onClick={() => setOpen(false)} className="rounded-lg px-3 py-2 text-sm font-medium hover:bg-muted">
                {n.label}
              </Link>
            ))}
            <Link to="/contact" onClick={() => setOpen(false)} className="mt-2 inline-flex justify-center rounded-full bg-gradient-brand px-5 py-2.5 text-sm font-semibold text-white">
              Get a Quote
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
