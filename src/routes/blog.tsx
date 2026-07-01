import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Section, Reveal } from "@/components/site/Section";
import { CTABanner } from "@/components/site/CTA";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Blog — BrainboxWorld" },
      { name: "description", content: "Insights on web design, SEO, marketing, branding and business growth from BrainboxWorld." },
      { property: "og:title", content: "Blog — BrainboxWorld" },
      { property: "og:description", content: "Ideas and strategies from our team." },
    ],
  }),
  component: BlogPage,
});

const posts = [
  { tag: "SEO", title: "10 SEO tactics that still work in 2026", excerpt: "The tactics that reliably move rankings this year." },
  { tag: "Web Design", title: "What makes a website convert in 2026", excerpt: "Design principles behind our highest-converting sites." },
  { tag: "Marketing", title: "Google Ads vs Meta Ads: what to pick", excerpt: "A practical breakdown for growing service businesses." },
  { tag: "Branding", title: "Building a brand that customers remember", excerpt: "Consistency, story and identity systems that scale." },
  { tag: "Business Growth", title: "The website audit checklist we use", excerpt: "Copy our internal audit template for your team." },
  { tag: "Web Design", title: "Design tokens: the secret behind fast rebrands", excerpt: "How we cut redesign time in half using tokens." },
];

function BlogPage() {
  return (
    <>
      <PageHero eyebrow="Blog" title={<>Insights on <span className="text-gradient">digital growth</span></>} subtitle="Ideas, playbooks and stories from the BrainboxWorld team." />
      <Section>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.04}>
              <article className="group flex h-full flex-col rounded-2xl border bg-white p-6 shadow-soft card-lift">
                <div className="mb-4 aspect-video rounded-xl bg-gradient-brand opacity-90" />
                <span className="text-xs font-semibold uppercase tracking-wider text-accent">{p.tag}</span>
                <h3 className="mt-2 font-display text-lg font-semibold">{p.title}</h3>
                <p className="mt-2 flex-1 text-sm text-muted-foreground">{p.excerpt}</p>
                <p className="mt-4 text-xs text-muted-foreground">Coming soon</p>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>
      <CTABanner />
    </>
  );
}
