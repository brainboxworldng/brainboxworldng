import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { Mail, Phone, MessageCircle, MapPin, Clock, CheckCircle2 } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { Section } from "@/components/site/Section";
import { z } from "zod";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — BrainboxWorld" },
      { name: "description", content: "Get in touch with BrainboxWorld. Free consultation, custom quotes, and fast responses." },
      { property: "og:title", content: "Contact BrainboxWorld" },
      { property: "og:description", content: "Let's build something great together." },
    ],
  }),
  component: ContactPage,
});

const schema = z.object({
  name: z.string().trim().min(1, "Name is required").max(80),
  email: z.string().trim().email("Invalid email").max(200),
  phone: z.string().trim().max(30).optional(),
  business: z.string().trim().max(120).optional(),
  service: z.string().max(80),
  budget: z.string().max(40),
  timeline: z.string().max(40),
  message: z.string().trim().min(10, "Tell us a bit more").max(2000),
});

function ContactPage() {
  const [sent, setSent] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const data = Object.fromEntries(fd.entries());
    const res = schema.safeParse(data);
    if (!res.success) {
      const errs: Record<string, string> = {};
      res.error.issues.forEach(i => { errs[i.path[0] as string] = i.message; });
      setErrors(errs);
      return;
    }
    setErrors({});
    setSent(true);
  };

  return (
    <>
      <PageHero eyebrow="Contact" title={<>Let's build something <span className="text-gradient">great together</span></>} subtitle="Tell us about your project. We'll get back within one business day." />
      <Section>
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr]">
          <div className="rounded-3xl border bg-white p-8 shadow-soft md:p-10">
            {sent ? (
              <div className="flex flex-col items-center py-16 text-center">
                <CheckCircle2 className="size-14 text-success" />
                <h3 className="mt-4 font-display text-2xl font-bold">Message received!</h3>
                <p className="mt-2 max-w-sm text-sm text-muted-foreground">Thanks for reaching out. We'll be in touch shortly to schedule your free consultation.</p>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="grid gap-5 md:grid-cols-2">
                <Field label="Name" name="name" error={errors.name} />
                <Field label="Email" name="email" type="email" error={errors.email} />
                <Field label="Phone" name="phone" error={errors.phone} />
                <Field label="Business name" name="business" error={errors.business} />
                <Select label="Service interested in" name="service" options={["Website Design", "SEO", "Digital Marketing", "Branding", "Shopify", "WordPress", "Other"]} />
                <Select label="Budget" name="budget" options={["Under $500", "$500 – $1,500", "$1,500 – $5,000", "$5,000+"]} />
                <Select label="Timeline" name="timeline" options={["ASAP", "1–2 weeks", "1 month", "Flexible"]} />
                <div className="md:col-span-2">
                  <Field label="Project description" name="message" as="textarea" error={errors.message} />
                </div>
                <button className="md:col-span-2 inline-flex justify-center rounded-full bg-gradient-brand px-6 py-3.5 text-sm font-semibold text-white shadow-elegant transition hover:scale-[1.02]">
                  Send message
                </button>
              </form>
            )}
          </div>

          <div className="space-y-4">
            {[
              { icon: MessageCircle, title: "WhatsApp", value: "Chat with us", href: "https://wa.me/2348000000000" },
              { icon: Mail, title: "Email", value: "hello@brainboxworld.com", href: "mailto:hello@brainboxworld.com" },
              { icon: Phone, title: "Phone", value: "+234 800 000 0000", href: "tel:+2348000000000" },
              { icon: Clock, title: "Office hours", value: "Mon–Fri · 9am – 6pm" },
              { icon: MapPin, title: "Location", value: "Remote worldwide" },
            ].map(c => (
              <a key={c.title} href={c.href ?? "#"} className="flex items-start gap-4 rounded-2xl border bg-white p-5 shadow-soft transition hover:border-accent">
                <div className="grid size-11 place-items-center rounded-xl bg-gradient-brand text-white"><c.icon className="size-5" /></div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-muted-foreground">{c.title}</p>
                  <p className="font-semibold">{c.value}</p>
                </div>
              </a>
            ))}
            <div className="overflow-hidden rounded-2xl border bg-muted">
              <div className="aspect-video bg-gradient-brand opacity-90 grid place-items-center text-white text-sm font-semibold">Map placeholder</div>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}

function Field({ label, name, type = "text", as = "input", error }: { label: string; name: string; type?: string; as?: "input" | "textarea"; error?: string }) {
  const cls = "mt-1 w-full rounded-xl border bg-background px-4 py-2.5 text-sm outline-none focus:border-accent";
  return (
    <label className="block">
      <span className="text-xs font-semibold text-muted-foreground">{label}</span>
      {as === "textarea"
        ? <textarea name={name} rows={5} className={cls} />
        : <input name={name} type={type} className={cls} />}
      {error && <span className="mt-1 block text-xs text-destructive">{error}</span>}
    </label>
  );
}

function Select({ label, name, options }: { label: string; name: string; options: string[] }) {
  return (
    <label className="block">
      <span className="text-xs font-semibold text-muted-foreground">{label}</span>
      <select name={name} className="mt-1 w-full rounded-xl border bg-background px-4 py-2.5 text-sm outline-none focus:border-accent">
        {options.map(o => <option key={o}>{o}</option>)}
      </select>
    </label>
  );
}
