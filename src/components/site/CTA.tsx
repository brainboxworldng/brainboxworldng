import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

export function CTABanner() {
  return (
    <section className="container-x pb-24">
      <div className="relative overflow-hidden rounded-3xl bg-gradient-brand px-6 py-16 text-white shadow-elegant md:px-16 md:py-20">
        <div className="absolute -right-24 -top-24 size-72 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 size-72 rounded-full bg-white/10 blur-3xl" />
        <div className="relative grid gap-8 md:grid-cols-2 md:items-center">
          <div>
            <h3 className="font-display text-3xl font-bold leading-tight md:text-4xl">
              Ready to grow your business online?
            </h3>
            <p className="mt-3 max-w-lg text-white/85">
              Book a free 30-minute strategy call. We'll audit your presence and map out a plan to hit your next milestone.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 md:justify-end">
            <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-foreground shadow-soft transition hover:scale-105">
              Get free consultation <ArrowRight className="size-4" />
            </Link>
            <Link to="/portfolio" className="inline-flex items-center gap-2 rounded-full border border-white/40 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10">
              View portfolio
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
