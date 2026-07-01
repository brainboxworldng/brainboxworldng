import { createFileRoute, Link } from "@tanstack/react-router";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { services, process } from "@/lib/site-data";
import { PageHero } from "@/components/site/PageHero";
import { Section, Reveal } from "@/components/site/Section";
import { CTABanner } from "@/components/site/CTA";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — BrainboxWorld" },
      { name: "description", content: "Web design, SEO, digital marketing, branding, Shopify and WordPress development services by BrainboxWorld." },
      { property: "og:title", content: "Services — BrainboxWorld" },
      { property: "og:description", content: "Full-stack digital services under one roof." },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <>
      <PageHero eyebrow="Services" title={<>Everything you need to <span className="text-gradient">grow online</span></>} subtitle="Strategy, design, development and marketing — delivered as one seamless service." />
      <Section>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.04}>
              <div className="group card-lift h-full rounded-2xl border bg-white p-7 shadow-soft">
                <div className="grid size-12 place-items-center rounded-xl bg-accent/10 text-accent group-hover:bg-gradient-brand group-hover:text-white transition">
                  <s.icon className="size-5" />
                </div>
                <h3 className="mt-5 font-display text-xl font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
                <ul className="mt-4 space-y-1.5">
                  {s.features.map(f => (
                    <li key={f} className="flex items-center gap-2 text-sm">
                      <CheckCircle2 className="size-4 text-success" /> {f}
                    </li>
                  ))}
                </ul>
                <Link to="/contact" className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-accent hover:gap-3 transition-all">
                  Get a quote <ArrowRight className="size-4" />
                </Link>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>
      <Section eyebrow="Process" title={<>How we <span className="text-gradient">work with you</span></>} className="bg-white border-y">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {process.map((p, i) => (
            <Reveal key={p.step} delay={i * 0.05}>
              <div className="rounded-2xl border bg-background p-6">
                <span className="font-display text-3xl font-bold text-gradient">{p.step}</span>
                <h3 className="mt-2 font-display text-lg font-semibold">{p.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{p.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>
      <CTABanner />
    </>
  );
}
