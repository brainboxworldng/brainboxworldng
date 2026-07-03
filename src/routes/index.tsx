import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2, Star, ChevronDown, Sparkles, Zap, Users, Shield, Clock, Award, MessageCircle } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HeroDashboard } from "@/components/site/HeroDashboard";
import { Section, Reveal } from "@/components/site/Section";
import { Counter } from "@/components/site/Counter";
import { CTABanner } from "@/components/site/CTA";
import { services, process, industries, technologies, testimonials, faqs, packages, stats, whyUs } from "@/lib/site-data";
import portfolio1 from "@/assets/portfolio-1.jpg";
import portfolio2 from "@/assets/portfolio-2.jpg";
import portfolio3 from "@/assets/portfolio-3.jpg";
import portfolio4 from "@/assets/portfolio-4.jpg";
import portfolio5 from "@/assets/portfolio-5.jpg";
import portfolio6 from "@/assets/portfolio-6.jpg";

export const Route = createFileRoute("/")({
  component: Home,
});

const portfolioImages = [portfolio1, portfolio2, portfolio3, portfolio4, portfolio5, portfolio6];
const portfolioItems = [
  { title: "Bloom Beauty", category: "Ecommerce", tag: "Shopify" },
  { title: "Ember Restaurant", category: "Restaurant", tag: "WordPress" },
  { title: "Northline Realty", category: "Real Estate", tag: "Custom" },
  { title: "MediCare Clinic", category: "Healthcare", tag: "WordPress" },
  { title: "Learnly Academy", category: "Education", tag: "Custom" },
  { title: "Sunset SaaS", category: "Startup", tag: "Landing" },
];

function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      <Stats />
      <WhyUs />
      <ServicesGrid />
      <Process />
      <Portfolio />
      <Industries />
      <Technologies />
      <Testimonials />
      <Pricing />
      <FAQSection />
      <BlogPreview />
      <CTABanner />
    </>
  );
}

/* --- HERO --- */
function Hero() {
  return (
    <section className="relative overflow-hidden bg-mesh pt-10 pb-24 md:pt-16 md:pb-32">
      <div className="container-x grid items-center gap-16 lg:grid-cols-2">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <span className="inline-flex items-center gap-2 rounded-full border border-accent/20 bg-white/60 px-4 py-1.5 text-xs font-semibold text-accent backdrop-blur">
            <Sparkles className="size-3.5" /> Premium Digital Agency · Trusted by 180+ brands
          </span>
          <h1 className="mt-6 font-display text-5xl font-bold leading-[1.05] tracking-tight md:text-6xl lg:text-7xl">
            Websites that <span className="text-gradient">grow your business</span>, not just your bounce rate.
          </h1>
          <p className="mt-6 max-w-xl text-lg text-muted-foreground">
            We help ambitious brands generate more leads, close more sales and rank higher on Google — through strategic web design, SEO and digital marketing that ships fast and scales with you.
          </p>
          <ul className="mt-6 grid max-w-xl gap-2 sm:grid-cols-2">
            {["More qualified leads", "Higher search rankings", "Faster page speed", "Better conversion rate"].map(v => (
              <li key={v} className="flex items-center gap-2 text-sm text-foreground/80">
                <CheckCircle2 className="size-4 text-success" /> {v}
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-gradient-brand px-7 py-3.5 text-sm font-semibold text-white shadow-elegant transition hover:scale-105">
              Get free consultation <ArrowRight className="size-4" />
            </Link>
            <Link to="/portfolio" className="inline-flex items-center gap-2 rounded-full border border-foreground/15 bg-white/60 px-7 py-3.5 text-sm font-semibold backdrop-blur transition hover:bg-white">
              View portfolio
            </Link>
          </div>
          <div className="mt-10 flex flex-wrap items-center gap-5 text-sm text-muted-foreground">
            <div className="flex -space-x-2">
              {[1,2,3,4].map(i => (
                <div key={i} className="size-9 rounded-full border-2 border-white bg-gradient-brand" style={{ opacity: 0.7 + i*0.05 }} />
              ))}
            </div>
            <div>
              <div className="flex text-amber-400">{[...Array(5)].map((_,i)=><Star key={i} className="size-4 fill-current" />)}</div>
              <p className="text-xs">Rated 5.0 by 180+ happy clients</p>
            </div>
          </div>
        </motion.div>

        <div className="relative">
          <HeroDashboard />
        </div>
      </div>
    </section>
  );
}

/* --- TRUST --- */
function TrustBar() {
  const pillars = [
    { icon: Zap, title: "Fast delivery", desc: "Most sites ship in 2–4 weeks." },
    { icon: MessageCircle, title: "Transparent communication", desc: "Weekly updates, no surprises." },
    { icon: Shield, title: "Reliable partnership", desc: "Secure, backed-up and monitored." },
    { icon: Clock, title: "Long-term support", desc: "We stay with you past launch." },
    { icon: Award, title: "Award-worthy craft", desc: "Design that punches above budget." },
    { icon: Users, title: "180+ happy clients", desc: "Across 12 industries worldwide." },
  ];
  return (
    <section className="border-y bg-white/60 py-12">
      <div className="container-x">
        <p className="text-center text-xs font-semibold uppercase tracking-widest text-muted-foreground">Why brands trust BrainboxWorld</p>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {pillars.map(p => (
            <div key={p.title} className="flex items-start gap-3 rounded-2xl border bg-white p-4">
              <div className="grid size-10 shrink-0 place-items-center rounded-xl bg-accent/10 text-accent">
                <p.icon className="size-5" />
              </div>
              <div className="min-w-0">
                <p className="text-sm font-semibold">{p.title}</p>
                <p className="text-xs text-muted-foreground">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* --- STATS --- */
function Stats() {
  return (
    <section className="py-20">
      <div className="container-x grid gap-6 rounded-3xl border bg-white p-8 shadow-soft md:grid-cols-4 md:p-12">
        {stats.map(s => (
          <Reveal key={s.label}>
            <div className="text-center md:text-left">
              <div className="font-display text-4xl font-bold text-gradient md:text-5xl">
                <Counter to={s.value} suffix={s.suffix} />
              </div>
              <p className="mt-2 text-sm text-muted-foreground">{s.label}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* --- WHY US --- */
function WhyUs() {
  return (
    <Section eyebrow="Why BrainboxWorld" title={<>Everything you need to <span className="text-gradient">win online</span></>} subtitle="Nine reasons ambitious teams choose us to build their digital presence.">
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {whyUs.map((w, i) => (
          <Reveal key={w.title} delay={i * 0.05}>
            <div className="group card-lift h-full rounded-2xl border bg-white p-6">
              <div className="grid size-11 place-items-center rounded-xl bg-gradient-brand text-white shadow-elegant">
                <w.icon className="size-5" />
              </div>
              <h3 className="mt-5 font-display text-lg font-semibold">{w.title}</h3>
              <p className="mt-1.5 text-sm text-muted-foreground">{w.desc}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

/* --- SERVICES --- */
function ServicesGrid() {
  return (
    <Section eyebrow="Our Services" title={<>Full-stack digital services, <span className="text-gradient">under one roof</span></>} subtitle="From strategy to launch and beyond — we cover every step of your growth journey." className="bg-white border-y">
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {services.map((s, i) => (
          <Reveal key={s.title} delay={i * 0.04}>
            <div className="group card-lift h-full rounded-2xl border bg-background p-7">
              <div className="grid size-12 place-items-center rounded-xl bg-accent/10 text-accent transition group-hover:bg-gradient-brand group-hover:text-white">
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
            </div>
          </Reveal>
        ))}
      </div>
      <div className="mt-10 text-center">
        <Link to="/services" className="inline-flex items-center gap-2 rounded-full border px-6 py-3 text-sm font-semibold transition hover:bg-foreground hover:text-background">
          Explore all services <ArrowRight className="size-4" />
        </Link>
      </div>
    </Section>
  );
}

/* --- PROCESS --- */
function Process() {
  return (
    <Section eyebrow="Our Process" title={<>A proven <span className="text-gradient">7-step</span> delivery process</>} subtitle="Structured, transparent and results-focused — from first call to long-term growth.">
      <div className="relative">
        <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-accent/40 to-transparent lg:block" />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
          {process.map((p, i) => (
            <Reveal key={p.step} delay={i * 0.06}>
              <div className={`relative rounded-2xl border bg-white p-6 shadow-soft ${i % 2 === 1 ? "lg:mt-16" : ""}`}>
                <span className="font-display text-5xl font-bold text-gradient opacity-30">{p.step}</span>
                <h3 className="mt-2 font-display text-xl font-semibold">{p.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}

/* --- PORTFOLIO --- */
function Portfolio() {
  const [filter, setFilter] = useState<string>("All");
  const filters = ["All", "Ecommerce", "Restaurant", "Real Estate", "Healthcare", "Education", "Startup"];
  const items = portfolioItems.filter(i => filter === "All" || i.category === filter);
  return (
    <Section eyebrow="Portfolio" title={<>Selected <span className="text-gradient">recent work</span></>} subtitle="A snapshot of projects we've shipped for brands across industries." className="bg-white border-y">
      <div className="mb-8 flex flex-wrap justify-center gap-2">
        {filters.map(f => (
          <button key={f} onClick={() => setFilter(f)} className={`rounded-full border px-4 py-1.5 text-xs font-semibold transition ${filter === f ? "bg-foreground text-background border-foreground" : "hover:bg-muted"}`}>{f}</button>
        ))}
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {items.map((item, i) => {
          const idx = portfolioItems.indexOf(item);
          return (
            <Reveal key={item.title} delay={i * 0.05}>
              <div className="group overflow-hidden rounded-2xl border bg-white shadow-soft card-lift">
                <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                  <img src={portfolioImages[idx]} alt={item.title} loading="lazy" width={1200} height={900} className="size-full object-cover transition duration-700 group-hover:scale-105" />
                  <span className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold backdrop-blur">{item.tag}</span>
                </div>
                <div className="flex items-center justify-between p-5">
                  <div>
                    <p className="text-xs text-muted-foreground">{item.category}</p>
                    <h3 className="font-display text-lg font-semibold">{item.title}</h3>
                  </div>
                  <Link to="/portfolio" aria-label="View project" className="grid size-10 place-items-center rounded-full bg-foreground text-background transition hover:bg-accent">
                    <ArrowRight className="size-4" />
                  </Link>
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}

/* --- INDUSTRIES --- */
function Industries() {
  return (
    <Section eyebrow="Industries" title={<>Trusted across <span className="text-gradient">every industry</span></>} subtitle="From startups to established brands — we build for teams that value quality.">
      <div className="grid gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
        {industries.map((ind, i) => (
          <Reveal key={ind.label} delay={i * 0.03}>
            <div className="flex flex-col items-center gap-2 rounded-2xl border bg-white p-6 text-center card-lift">
              <ind.icon className="size-6 text-accent" />
              <span className="text-sm font-semibold">{ind.label}</span>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

/* --- TECHNOLOGIES --- */
function Technologies() {
  return (
    <Section eyebrow="Tech Stack" title={<>Modern tools, <span className="text-gradient">expertly wielded</span></>} className="bg-white border-y">
      <div className="flex flex-wrap justify-center gap-3">
        {technologies.map(t => (
          <span key={t} className="rounded-full border bg-background px-5 py-2.5 text-sm font-semibold shadow-soft transition hover:-translate-y-0.5 hover:border-accent">{t}</span>
        ))}
      </div>
    </Section>
  );
}

/* --- TESTIMONIALS --- */
function Testimonials() {
  const [idx, setIdx] = useState(0);
  return (
    <Section eyebrow="Testimonials" title={<>What clients <span className="text-gradient">say about us</span></>}>
      <div className="mx-auto max-w-3xl">
        <AnimatePresence mode="wait">
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="rounded-3xl border bg-white p-10 text-center shadow-soft"
          >
            <div className="mb-4 flex justify-center text-amber-400">
              {[...Array(5)].map((_,i)=><Star key={i} className="size-5 fill-current" />)}
            </div>
            <p className="text-lg text-foreground/90 md:text-xl">"{testimonials[idx].text}"</p>
            <div className="mt-6 flex items-center justify-center gap-3">
              <div className="grid size-11 place-items-center rounded-full bg-gradient-brand font-display text-white">{testimonials[idx].name[0]}</div>
              <div className="text-left">
                <p className="font-semibold">{testimonials[idx].name}</p>
                <p className="text-xs text-muted-foreground">{testimonials[idx].role}</p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
        <div className="mt-6 flex justify-center gap-2">
          {testimonials.map((_, i) => (
            <button key={i} onClick={() => setIdx(i)} aria-label={`Testimonial ${i+1}`} className={`h-2 rounded-full transition-all ${idx === i ? "w-8 bg-gradient-brand" : "w-2 bg-muted-foreground/30"}`} />
          ))}
        </div>
      </div>
    </Section>
  );
}

/* --- PRICING --- */
function Pricing() {
  return (
    <Section eyebrow="Packages" title={<>Simple, <span className="text-gradient">transparent pricing</span></>} subtitle="Choose a starting point. Every package can be tailored to your goals." className="bg-white border-y">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {packages.map((p, i) => (
          <Reveal key={p.name} delay={i * 0.05}>
            <div className={`relative flex h-full flex-col rounded-2xl border p-7 ${p.featured ? "bg-gradient-to-b from-accent/10 to-transparent border-accent shadow-elegant" : "bg-white shadow-soft"}`}>
              {p.featured && <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-brand px-3 py-1 text-xs font-semibold text-white">Most popular</span>}
              <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{p.name}</p>
              <p className="mt-2 font-display text-4xl font-bold">{p.price}</p>
              <p className="text-xs text-muted-foreground">{p.ideal}</p>
              <ul className="mt-6 flex-1 space-y-2">
                {p.features.map(f => (
                  <li key={f} className="flex items-start gap-2 text-sm"><CheckCircle2 className="mt-0.5 size-4 text-success" /> {f}</li>
                ))}
              </ul>
              <Link to="/contact" className={`mt-6 inline-flex justify-center rounded-full px-5 py-3 text-sm font-semibold transition ${p.featured ? "bg-gradient-brand text-white shadow-elegant" : "border hover:bg-foreground hover:text-background"}`}>
                {p.cta}
              </Link>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

/* --- FAQ --- */
function FAQSection() {
  const [open, setOpen] = useState<number | null>(0);
  const [q, setQ] = useState("");
  const filtered = faqs.filter(f => f.q.toLowerCase().includes(q.toLowerCase()));
  return (
    <Section eyebrow="FAQ" title={<>Frequently asked <span className="text-gradient">questions</span></>}>
      <div className="mx-auto max-w-3xl">
        <input value={q} onChange={e => setQ(e.target.value)} placeholder="Search questions..." className="mb-6 w-full rounded-full border bg-white px-5 py-3 text-sm shadow-soft outline-none focus:border-accent" />
        <div className="space-y-3">
          {filtered.map((f, i) => (
            <div key={f.q} className="overflow-hidden rounded-2xl border bg-white">
              <button onClick={() => setOpen(open === i ? null : i)} className="flex w-full items-center justify-between px-6 py-5 text-left">
                <span className="font-semibold">{f.q}</span>
                <ChevronDown className={`size-5 transition ${open === i ? "rotate-180" : ""}`} />
              </button>
              <AnimatePresence>
                {open === i && (
                  <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.25 }}>
                    <p className="px-6 pb-5 text-sm text-muted-foreground">{f.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

/* --- BLOG --- */
function BlogPreview() {
  const posts = [
    { tag: "SEO", title: "10 SEO tactics that still work in 2026", excerpt: "Cut through the noise with strategies that actually move rankings.", date: "Coming soon" },
    { tag: "Web Design", title: "What makes a website convert in 2026", excerpt: "The design principles behind our highest-converting sites.", date: "Coming soon" },
    { tag: "Marketing", title: "Google Ads vs Meta Ads: what to pick", excerpt: "A practical breakdown for growing service businesses.", date: "Coming soon" },
  ];
  return (
    <Section eyebrow="Insights" title={<>From our <span className="text-gradient">blog</span></>} subtitle="Ideas, strategies and stories from the BrainboxWorld team.">
      <div className="grid gap-6 md:grid-cols-3">
        {posts.map((p, i) => (
          <Reveal key={p.title} delay={i * 0.05}>
            <article className="group flex h-full flex-col rounded-2xl border bg-white p-6 shadow-soft card-lift">
              <div className="mb-4 aspect-video rounded-xl bg-gradient-brand opacity-90" />
              <span className="text-xs font-semibold uppercase tracking-wider text-accent">{p.tag}</span>
              <h3 className="mt-2 font-display text-lg font-semibold">{p.title}</h3>
              <p className="mt-2 flex-1 text-sm text-muted-foreground">{p.excerpt}</p>
              <p className="mt-4 text-xs text-muted-foreground">{p.date}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
