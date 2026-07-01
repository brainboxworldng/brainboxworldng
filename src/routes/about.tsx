import { createFileRoute } from "@tanstack/react-router";
import { Target, Eye, Heart, Users } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { Section, Reveal } from "@/components/site/Section";
import { Counter } from "@/components/site/Counter";
import { CTABanner } from "@/components/site/CTA";
import { stats, whyUs } from "@/lib/site-data";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — BrainboxWorld" },
      { name: "description", content: "BrainboxWorld is a premium digital agency helping ambitious brands grow with strategy, design and marketing." },
      { property: "og:title", content: "About BrainboxWorld" },
      { property: "og:description", content: "Our mission, vision and values." },
    ],
  }),
  component: About,
});

function About() {
  return (
    <>
      <PageHero eyebrow="About Us" title={<>A digital agency built to <span className="text-gradient">grow brands</span></>} subtitle="We combine strategy, creativity and technology to build digital experiences that move the needle." />

      <Section>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {[
            { icon: Target, title: "Our Mission", desc: "Empower businesses to grow through world-class digital experiences." },
            { icon: Eye, title: "Our Vision", desc: "Become the go-to growth partner for ambitious brands worldwide." },
            { icon: Heart, title: "Our Values", desc: "Craft, honesty, ownership, and long-term partnership." },
            { icon: Users, title: "Our Team", desc: "Designers, developers, marketers and strategists in one team." },
          ].map((c, i) => (
            <Reveal key={c.title} delay={i * 0.05}>
              <div className="card-lift h-full rounded-2xl border bg-white p-7 shadow-soft">
                <div className="grid size-11 place-items-center rounded-xl bg-gradient-brand text-white shadow-elegant"><c.icon className="size-5" /></div>
                <h3 className="mt-5 font-display text-lg font-semibold">{c.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{c.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section className="bg-white border-y">
        <div className="grid gap-6 md:grid-cols-4">
          {stats.map(s => (
            <div key={s.label} className="text-center">
              <div className="font-display text-4xl font-bold text-gradient md:text-5xl">
                <Counter to={s.value} suffix={s.suffix} />
              </div>
              <p className="mt-2 text-sm text-muted-foreground">{s.label}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section eyebrow="Why choose us" title={<>What makes us <span className="text-gradient">different</span></>}>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {whyUs.map((w, i) => (
            <Reveal key={w.title} delay={i * 0.04}>
              <div className="card-lift h-full rounded-2xl border bg-white p-6">
                <div className="grid size-10 place-items-center rounded-xl bg-accent/10 text-accent"><w.icon className="size-5" /></div>
                <h3 className="mt-4 font-display text-base font-semibold">{w.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{w.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <CTABanner />
    </>
  );
}
