import { motion } from "framer-motion";
import type { ReactNode } from "react";

export function Section({
  eyebrow,
  title,
  subtitle,
  children,
  className = "",
  align = "center",
}: {
  eyebrow?: string;
  title?: ReactNode;
  subtitle?: ReactNode;
  children?: ReactNode;
  className?: string;
  align?: "center" | "left";
}) {
  return (
    <section className={`py-20 md:py-28 ${className}`}>
      <div className="container-x">
        {(eyebrow || title || subtitle) && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className={`mx-auto mb-14 max-w-2xl ${align === "center" ? "text-center" : "text-left mx-0"}`}
          >
            {eyebrow && (
              <span className="inline-flex items-center rounded-full border border-accent/20 bg-accent/5 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-accent">
                {eyebrow}
              </span>
            )}
            {title && <h2 className="mt-4 text-3xl font-bold tracking-tight md:text-5xl">{title}</h2>}
            {subtitle && <p className="mt-4 text-base text-muted-foreground md:text-lg">{subtitle}</p>}
          </motion.div>
        )}
        {children}
      </div>
    </section>
  );
}

export function Reveal({ children, delay = 0 }: { children: ReactNode; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
