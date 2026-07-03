import { createFileRoute, Link } from "@tanstack/react-router";
import { CheckCircle2, Sparkles } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { Section, Reveal } from "@/components/site/Section";
import { CTABanner } from "@/components/site/CTA";
import { packages, faqs } from "@/lib/site-data";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Pricing — BrainboxWorld" },
      { name: "description", content: "Transparent starting prices for websites, SEO, branding and digital marketing. Every package tailored to your business goals." },
      { property: "og:title", content: "Pricing — BrainboxWorld" },
      { property: "og:description", content: "Simple, transparent pricing for premium digital work." },
    ],
  }),
  component: PricingPage,
});

const included = [
  "Free strategy consultation",
  "Custom design (no templates)",
  "Mobile-first responsive build",
  "SEO best practices baked in",
  "Analytics & Search Console setup",
  "Post-launch support window",
  "SSL & security hardening",
  "Speed & Core Web Vitals tuning",
];

function PricingPage() {
  return (
    <>
      <PageHero
        eyebrow="Pricing"
        title={<>Transparent pricing for <span className="text-gradient">every stage</span></>}
        subtitle="Start with a package that fits, and scale as your business grows. Every project is tailored — request a custom quote and we'll match the scope to your goals."
      />

      <Section>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {packages.map((p, i) => (
            <Reveal key={p.name} delay={i * 0.05}>
              <div className={`relative flex h-full flex-col rounded-2xl border p-7 ${p.featured ? "bg-gradient-to-b from-accent/10 to-transparent border-accent shadow-elegant" : "bg-white shadow-soft"}`}>
                {p.featured && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-brand px-3 py-1 text-xs font-semibold text-white">
                    <Sparkles className="mr-1 inline size-3" /> Recommended
                  </span>
                )}
                <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{p.name}</p>
                <div className="mt-2 flex items-baseline gap-1">
                  <p className="font-display text-4xl font-bold">{p.price}</p>
                  {p.price !== "Custom" && <span className="text-xs text-muted-foreground">/ starting</span>}
                </div>
                <p className="mt-1 text-xs text-muted-foreground">{p.ideal}</p>
                <ul className="mt-6 flex-1 space-y-2">
                  {p.features.map(f => (
                    <li key={f} className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="mt-0.5 size-4 text-success" /> {f}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className={`mt-6 inline-flex justify-center rounded-full px-5 py-3 text-sm font-semibold transition ${p.featured ? "bg-gradient-brand text-white shadow-elegant hover:scale-[1.02]" : "border hover:bg-foreground hover:text-background"}`}
                >
                  Request custom quote
                </Link>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section eyebrow="What's included" title={<>Every project ships with <span className="text-gradient">the essentials</span></>} className="bg-white border-y">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {included.map(item => (
            <div key={item} className="flex items-start gap-3 rounded-2xl border bg-background p-5">
              <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-success" />
              <span className="text-sm font-medium">{item}</span>
            </div>
          ))}
        </div>
      </Section>

      <Section eyebrow="Pricing FAQ" title={<>Common <span className="text-gradient">questions</span></>}>
        <div className="mx-auto grid max-w-4xl gap-4 md:grid-cols-2">
          {faqs.slice(0, 6).map(f => (
            <div key={f.q} className="rounded-2xl border bg-white p-5 shadow-soft">
              <p className="font-semibold">{f.q}</p>
              <p className="mt-2 text-sm text-muted-foreground">{f.a}</p>
            </div>
          ))}
        </div>
      </Section>

      <CTABanner />
    </>
  );
}
