import { Link } from "@tanstack/react-router";
import { Sparkles, Mail, Phone, MapPin, Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t bg-[oklch(0.15_0.03_260)] text-white/80">
      <div className="container-x grid gap-10 py-16 md:grid-cols-2 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <Link to="/" className="flex items-center gap-2 font-display text-lg font-bold text-white">
            <span className="grid size-8 place-items-center rounded-xl bg-gradient-brand text-white">
              <Sparkles className="size-4" />
            </span>
            BrainboxWorld
          </Link>
          <p className="mt-4 max-w-sm text-sm text-white/60">
            A premium digital agency helping ambitious brands grow with strategic web design, SEO and marketing.
          </p>
          <div className="mt-6 flex gap-3">
            {[Facebook, Instagram, Linkedin, Twitter].map((Icon, i) => (
              <a key={i} href="#" aria-label="Social" className="grid size-9 place-items-center rounded-full border border-white/15 transition hover:bg-white/10">
                <Icon className="size-4" />
              </a>
            ))}
          </div>
        </div>
        <FooterCol title="Services" links={[
          ["Web Design", "/services"],
          ["SEO", "/services"],
          ["Digital Marketing", "/services"],
          ["Branding", "/services"],
          ["Shopify", "/services"],
          ["WordPress", "/services"],
        ]} />
        <FooterCol title="Company" links={[
          ["About", "/about"],
          ["Portfolio", "/portfolio"],
          ["Case Studies", "/case-studies"],
          ["Blog", "/blog"],
          ["FAQ", "/faq"],
          ["Contact", "/contact"],
        ]} />
        <div>
          <h4 className="mb-4 font-semibold text-white">Get in touch</h4>
          <ul className="space-y-3 text-sm text-white/60">
            <li className="flex items-start gap-2"><Mail className="mt-0.5 size-4 text-secondary" /> hello@brainboxworld.com</li>
            <li className="flex items-start gap-2"><Phone className="mt-0.5 size-4 text-secondary" /> +234 800 000 0000</li>
            <li className="flex items-start gap-2"><MapPin className="mt-0.5 size-4 text-secondary" /> Available worldwide, remote-first</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-x flex flex-col items-center justify-between gap-3 py-5 text-xs text-white/50 md:flex-row">
          <p>© {new Date().getFullYear()} BrainboxWorld. All rights reserved.</p>
          <div className="flex gap-5">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, links }: { title: string; links: [string, string][] }) {
  return (
    <div>
      <h4 className="mb-4 font-semibold text-white">{title}</h4>
      <ul className="space-y-2 text-sm text-white/60">
        {links.map(([label, href]) => (
          <li key={label}><Link to={href} className="hover:text-white">{label}</Link></li>
        ))}
      </ul>
    </div>
  );
}
