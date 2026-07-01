import type { ReactNode } from "react";
import { motion } from "framer-motion";

export function PageHero({ eyebrow, title, subtitle, children }: { eyebrow?: string; title: ReactNode; subtitle?: ReactNode; children?: ReactNode }) {
  return (
    <section className="relative overflow-hidden bg-mesh">
      <div className="container-x pt-16 pb-20 md:pt-24 md:pb-28 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          {eyebrow && (
            <span className="inline-flex items-center rounded-full border border-accent/20 bg-accent/5 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-accent">
              {eyebrow}
            </span>
          )}
          <h1 className="mt-4 text-4xl font-bold tracking-tight md:text-6xl">{title}</h1>
          {subtitle && <p className="mx-auto mt-5 max-w-2xl text-lg text-muted-foreground">{subtitle}</p>}
          {children && <div className="mt-8">{children}</div>}
        </motion.div>
      </div>
    </section>
  );
}
