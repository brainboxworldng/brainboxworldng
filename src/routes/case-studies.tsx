import { createFileRoute } from "@tanstack/react-router";
import { TrendingUp } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { Section, Reveal } from "@/components/site/Section";
import { CTABanner } from "@/components/site/CTA";
import portfolio1 from "@/assets/portfolio-1.jpg";
import portfolio3 from "@/assets/portfolio-3.jpg";
import portfolio6 from "@/assets/portfolio-6.jpg";

export const Route = createFileRoute("/case-studies")({
  head: () => ({
    meta: [
      { title: "Case Studies — BrainboxWorld" },
      { name: "description", content: "Real growth stories: how BrainboxWorld helped brands increase traffic, conversions and sales." },
      { property: "og:title", content: "Case Studies — BrainboxWorld" },
      { property: "og:description", content: "Success stories with real numbers." },
    ],
  }),
  component: CaseStudies,
});

const cases = [
  { name: "Bloom Beauty", img: portfolio1, industry: "Ecommerce",
    challenge: "Slow, outdated Shopify store with poor mobile conversions.",
    solution: "Full theme rebuild with speed optimization and revamped product flow.",
    metrics: [{ k: "Sales", v: "+62%" }, { k: "Traffic", v: "+180%" }, { k: "Conv. rate", v: "+42%" }] },
  { name: "Northline Realty", img: portfolio3, industry: "Real Estate",
    challenge: "Zero lead generation from an old brochure site.",
    solution: "New listing platform, SEO strategy and lead-capture funnels.",
    metrics: [{ k: "Leads", v: "+180%" }, { k: "Time on site", v: "+3.2x" }, { k: "Rankings", v: "Top 3" }] },
  { name: "Sunset SaaS", img: portfolio6, industry: "Startup",
    challenge: "Landing page not converting cold ad traffic.",
    solution: "Rebuilt hero, social proof, and pricing with A/B testing.",
    metrics: [{ k: "Conversions", v: "+65%" }, { k: "CPL", v: "-38%" }, { k: "MRR", v: "+2.1x" }] },
];

function CaseStudies() {
  return (
    <>
      <PageHero eyebrow="Case Studies" title={<>Real results, <span className="text-gradient">real numbers</span></>} subtitle="A look at how we've helped brands hit and exceed their growth goals." />
      <Section>
        <div className="space-y-16">
          {cases.map((c, i) => (
            <Reveal key={c.name}>
              <article className={`grid gap-8 rounded-3xl border bg-white p-6 shadow-soft md:p-10 lg:grid-cols-2 lg:gap-12 ${i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""}`}>
                <div className="overflow-hidden rounded-2xl">
                  <img src={c.img} alt={c.name} loading="lazy" width={1200} height={900} className="size-full object-cover" />
                </div>
                <div className="flex flex-col justify-center">
                  <span className="text-xs font-semibold uppercase tracking-wider text-accent">{c.industry}</span>
                  <h3 className="mt-2 font-display text-3xl font-bold">{c.name}</h3>
                  <div className="mt-4 space-y-3 text-sm">
                    <p><strong className="text-foreground">Challenge: </strong><span className="text-muted-foreground">{c.challenge}</span></p>
                    <p><strong className="text-foreground">Solution: </strong><span className="text-muted-foreground">{c.solution}</span></p>
                  </div>
                  <div className="mt-6 grid grid-cols-3 gap-3">
                    {c.metrics.map(m => (
                      <div key={m.k} className="rounded-xl border bg-background p-4 text-center">
                        <TrendingUp className="mx-auto mb-1 size-4 text-success" />
                        <p className="font-display text-xl font-bold text-gradient">{m.v}</p>
                        <p className="text-[10px] uppercase tracking-wider text-muted-foreground">{m.k}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>
      <CTABanner />
    </>
  );
}
