import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Section, Reveal } from "@/components/site/Section";
import { CTABanner } from "@/components/site/CTA";
import { posts } from "@/lib/blog-data";

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

function BlogPage() {
  return (
    <>
      <PageHero
        eyebrow="Blog"
        title={<>Insights on <span className="text-gradient">digital growth</span></>}
        subtitle="Ideas, playbooks and stories from the BrainboxWorld team."
      />
      <Section>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((p, i) => (
            <Reveal key={p.slug} delay={i * 0.04}>
              <Link
                to="/blog/$slug"
                params={{ slug: p.slug }}
                className="group flex h-full flex-col rounded-2xl border bg-white p-6 shadow-soft card-lift"
              >
                <div className="mb-4 aspect-video rounded-xl bg-gradient-brand opacity-90" />
                <span className="text-xs font-semibold uppercase tracking-wider text-accent">{p.tag}</span>
                <h3 className="mt-2 font-display text-lg font-semibold group-hover:text-primary transition-colors">{p.title}</h3>
                <p className="mt-2 flex-1 text-sm text-muted-foreground">{p.excerpt}</p>
                <div className="mt-4 flex items-center justify-between text-xs text-muted-foreground">
                  <span>{p.date}</span>
                  <span>{p.readTime}</span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </Section>
      <CTABanner />
    </>
  );
}
