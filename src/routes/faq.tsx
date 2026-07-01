import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { PageHero } from "@/components/site/PageHero";
import { Section } from "@/components/site/Section";
import { CTABanner } from "@/components/site/CTA";
import { faqs } from "@/lib/site-data";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQ — BrainboxWorld" },
      { name: "description", content: "Answers to frequently asked questions about BrainboxWorld's services, pricing and process." },
      { property: "og:title", content: "FAQ — BrainboxWorld" },
      { property: "og:description", content: "Frequently asked questions." },
    ],
  }),
  component: FAQPage,
});

function FAQPage() {
  const [open, setOpen] = useState<number | null>(0);
  const [q, setQ] = useState("");
  const list = faqs.filter(f => f.q.toLowerCase().includes(q.toLowerCase()));
  return (
    <>
      <PageHero eyebrow="FAQ" title={<>Answers to your <span className="text-gradient">questions</span></>} subtitle="Everything you need to know about working with BrainboxWorld." />
      <Section>
        <div className="mx-auto max-w-3xl">
          <input value={q} onChange={e => setQ(e.target.value)} placeholder="Search questions..." className="mb-6 w-full rounded-full border bg-white px-5 py-3 text-sm shadow-soft outline-none focus:border-accent" />
          <div className="space-y-3">
            {list.map((f, i) => (
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
      <CTABanner />
    </>
  );
}
