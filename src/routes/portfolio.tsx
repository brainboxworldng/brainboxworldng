import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { useState } from "react";
import { PageHero } from "@/components/site/PageHero";
import { Section, Reveal } from "@/components/site/Section";
import { CTABanner } from "@/components/site/CTA";
import portfolio1 from "@/assets/portfolio-1.jpg";
import portfolio2 from "@/assets/portfolio-2.jpg";
import portfolio3 from "@/assets/portfolio-3.jpg";
import portfolio4 from "@/assets/portfolio-4.jpg";
import portfolio5 from "@/assets/portfolio-5.jpg";
import portfolio6 from "@/assets/portfolio-6.jpg";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Portfolio — BrainboxWorld" },
      { name: "description", content: "Recent websites, ecommerce stores and brand projects shipped by BrainboxWorld." },
      { property: "og:title", content: "Portfolio — BrainboxWorld" },
      { property: "og:description", content: "Selected recent work." },
    ],
  }),
  component: PortfolioPage,
});

const items = [
  { title: "Bloom Beauty", category: "Ecommerce", tag: "Shopify", img: portfolio1, result: "+62% online sales" },
  { title: "Ember Restaurant", category: "Restaurant", tag: "WordPress", img: portfolio2, result: "2x reservations" },
  { title: "Northline Realty", category: "Real Estate", tag: "Custom", img: portfolio3, result: "+180% leads" },
  { title: "MediCare Clinic", category: "Healthcare", tag: "WordPress", img: portfolio4, result: "+45% bookings" },
  { title: "Learnly Academy", category: "Education", tag: "Custom", img: portfolio5, result: "+3.4x enrollments" },
  { title: "Sunset SaaS", category: "Startup", tag: "Landing", img: portfolio6, result: "+65% conversions" },
];

function PortfolioPage() {
  const [filter, setFilter] = useState("All");
  const filters = ["All", "Ecommerce", "Restaurant", "Real Estate", "Healthcare", "Education", "Startup"];
  const list = items.filter(i => filter === "All" || i.category === filter);
  return (
    <>
      <PageHero eyebrow="Portfolio" title={<>Work we're <span className="text-gradient">proud of</span></>} subtitle="A selection of recent projects across industries and stacks." />
      <Section>
        <div className="mb-10 flex flex-wrap justify-center gap-2">
          {filters.map(f => (
            <button key={f} onClick={() => setFilter(f)} className={`rounded-full border px-4 py-1.5 text-xs font-semibold transition ${filter === f ? "bg-foreground text-background border-foreground" : "hover:bg-muted"}`}>{f}</button>
          ))}
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {list.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.04}>
              <article className="group overflow-hidden rounded-2xl border bg-white shadow-soft card-lift">
                <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                  <img src={item.img} alt={item.title} loading="lazy" width={1200} height={900} className="size-full object-cover transition duration-700 group-hover:scale-105" />
                  <span className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold backdrop-blur">{item.tag}</span>
                  <span className="absolute right-3 top-3 rounded-full bg-gradient-brand px-3 py-1 text-xs font-semibold text-white">{item.result}</span>
                </div>
                <div className="flex items-center justify-between p-5">
                  <div>
                    <p className="text-xs text-muted-foreground">{item.category}</p>
                    <h3 className="font-display text-lg font-semibold">{item.title}</h3>
                  </div>
                  <Link to="/contact" aria-label="Start a project" className="grid size-10 place-items-center rounded-full bg-foreground text-background transition hover:bg-accent">
                    <ArrowRight className="size-4" />
                  </Link>
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
