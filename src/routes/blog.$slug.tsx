import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Section, Reveal } from "@/components/site/Section";
import { CTABanner } from "@/components/site/CTA";
import { getPost, posts } from "@/lib/blog-data";
import { ArrowLeft } from "lucide-react";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const post = getPost(params.slug);
    if (!post) throw notFound();
    return { post };
  },
  head: ({ loaderData }) => {
    const post = loaderData?.post;
    const title = post ? `${post.title} — BrainboxWorld Blog` : "Blog — BrainboxWorld";
    const description = post?.excerpt ?? "Insights from BrainboxWorld.";
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "article" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  errorComponent: () => (
    <Section>
      <p className="text-center text-muted-foreground">Something went wrong loading this post.</p>
    </Section>
  ),
  notFoundComponent: () => (
    <Section>
      <div className="mx-auto max-w-2xl text-center">
        <h1 className="font-display text-3xl font-bold">Post not found</h1>
        <p className="mt-2 text-muted-foreground">The article you're looking for doesn't exist.</p>
        <Link to="/blog" className="mt-6 inline-flex items-center gap-2 text-primary hover:underline">
          <ArrowLeft className="h-4 w-4" /> Back to blog
        </Link>
      </div>
    </Section>
  ),
  component: BlogPostPage,
});

function renderBlock(block: string, i: number) {
  if (block.startsWith("## ")) {
    return (
      <h2 key={i} className="mt-10 font-display text-2xl font-bold text-foreground">
        {block.replace(/^##\s+/, "")}
      </h2>
    );
  }
  if (block.startsWith("### ")) {
    return (
      <h3 key={i} className="mt-8 font-display text-xl font-semibold text-foreground">
        {block.replace(/^###\s+/, "")}
      </h3>
    );
  }
  return (
    <p key={i} className="mt-4 text-base leading-relaxed text-muted-foreground">
      {block}
    </p>
  );
}

function BlogPostPage() {
  const { post } = Route.useLoaderData();
  const related = posts.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <>
      <Section className="pt-32">
        <article className="mx-auto max-w-3xl">
          <Reveal>
            <Link to="/blog" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary">
              <ArrowLeft className="h-4 w-4" /> All articles
            </Link>
            <span className="mt-6 inline-block text-xs font-semibold uppercase tracking-wider text-accent">
              {post.tag}
            </span>
            <h1 className="mt-3 font-display text-4xl font-bold leading-tight sm:text-5xl">
              {post.title}
            </h1>
            <div className="mt-4 flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
              <span>{post.author}</span>
              <span>•</span>
              <span>{post.date}</span>
              <span>•</span>
              <span>{post.readTime}</span>
            </div>
            <div className="mt-8 aspect-[2/1] rounded-2xl bg-gradient-brand" />
          </Reveal>

          <Reveal delay={0.05}>
            <div className="mt-10">
              <p className="text-xl leading-relaxed text-foreground">{post.excerpt}</p>
              {post.content.map(renderBlock)}
            </div>
          </Reveal>
        </article>
      </Section>

      <Section className="bg-muted/30">
        <div className="mx-auto max-w-6xl">
          <h2 className="font-display text-2xl font-bold">Keep reading</h2>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            {related.map((p) => (
              <Link
                key={p.slug}
                to="/blog/$slug"
                params={{ slug: p.slug }}
                className="group flex h-full flex-col rounded-2xl border bg-white p-6 shadow-soft card-lift"
              >
                <span className="text-xs font-semibold uppercase tracking-wider text-accent">{p.tag}</span>
                <h3 className="mt-2 font-display text-lg font-semibold group-hover:text-primary transition-colors">
                  {p.title}
                </h3>
                <p className="mt-2 flex-1 text-sm text-muted-foreground">{p.excerpt}</p>
              </Link>
            ))}
          </div>
        </div>
      </Section>

      <CTABanner />
    </>
  );
}
