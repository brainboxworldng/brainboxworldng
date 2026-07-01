import {
  Globe, Search, Megaphone, Palette, ShoppingBag, PenTool, Server, Mail, Zap, Layout, Wrench, LineChart,
  Heart, GraduationCap, Building2, UtensilsCrossed, Store, Shirt, HardHat, Church, HandHeart, Briefcase, Rocket,
} from "lucide-react";

export const services = [
  { icon: Globe, title: "Website Design", desc: "Modern, conversion-focused websites built to impress and perform.", features: ["Custom UI/UX", "Responsive", "SEO ready", "Fast loading"] },
  { icon: Layout, title: "Website Redesign", desc: "Refresh outdated sites into modern, high-performing digital assets.", features: ["Audit & strategy", "Improved UX", "Better conversions", "Modern stack"] },
  { icon: PenTool, title: "WordPress Development", desc: "Robust WordPress sites tailored to your brand and business.", features: ["Custom themes", "WooCommerce", "Plugins", "Maintenance"] },
  { icon: ShoppingBag, title: "Shopify Development", desc: "Beautiful Shopify stores that turn browsers into buyers.", features: ["Theme customization", "Apps", "Payments", "Optimization"] },
  { icon: Search, title: "SEO", desc: "Rank higher on Google and drive qualified organic traffic.", features: ["Keyword strategy", "On-page SEO", "Technical SEO", "Local SEO"] },
  { icon: Megaphone, title: "Digital Marketing", desc: "Google & Meta ads that generate real leads and sales.", features: ["Google Ads", "Meta Ads", "Funnels", "Analytics"] },
  { icon: Palette, title: "Brand Identity", desc: "Distinctive logos and brand systems that stand out.", features: ["Logo design", "Guidelines", "Colors", "Typography"] },
  { icon: LineChart, title: "Social Media Management", desc: "Consistent, on-brand content that grows your audience.", features: ["Content plan", "Design", "Scheduling", "Reporting"] },
  { icon: Zap, title: "Landing Pages", desc: "High-converting landing pages built for campaigns.", features: ["Copywriting", "A/B tests", "Fast load", "Analytics"] },
  { icon: Wrench, title: "Website Maintenance", desc: "Keep your site secure, fast and up to date.", features: ["Updates", "Backups", "Security", "Monitoring"] },
  { icon: Server, title: "Hosting & Domains", desc: "Reliable hosting, domain registration and SSL setup.", features: ["Fast hosting", "SSL", "Domains", "Migration"] },
  { icon: Mail, title: "Email & Speed Setup", desc: "Business email, deliverability and site speed optimization.", features: ["Google Workspace", "Deliverability", "Core Web Vitals", "Caching"] },
];

export const process = [
  { step: "01", title: "Discovery", desc: "We dive deep into your goals, audience and competition." },
  { step: "02", title: "Planning", desc: "Strategy, sitemap, content plan and success metrics." },
  { step: "03", title: "Design", desc: "Beautiful, on-brand interfaces designed to convert." },
  { step: "04", title: "Development", desc: "Clean, scalable code with performance built-in." },
  { step: "05", title: "Testing", desc: "QA across devices, browsers and real user scenarios." },
  { step: "06", title: "Launch", desc: "Smooth go-live with analytics, SEO and safety checks." },
  { step: "07", title: "Support", desc: "Ongoing care so your site keeps growing with you." },
];

export const industries = [
  { icon: Heart, label: "Healthcare" },
  { icon: GraduationCap, label: "Education" },
  { icon: Building2, label: "Real Estate" },
  { icon: UtensilsCrossed, label: "Restaurants" },
  { icon: Store, label: "Ecommerce" },
  { icon: Shirt, label: "Fashion" },
  { icon: HardHat, label: "Construction" },
  { icon: Church, label: "Churches" },
  { icon: HandHeart, label: "NGOs" },
  { icon: Briefcase, label: "Corporate" },
  { icon: Rocket, label: "Startups" },
  { icon: Store, label: "Small Business" },
];

export const technologies = [
  "WordPress", "Shopify", "Wix", "HTML", "CSS", "JavaScript",
  "React", "Next.js", "Node.js", "PHP", "Python",
  "Google Analytics", "Meta Ads", "Google Ads", "Canva", "Figma",
];

export const testimonials = [
  { name: "Adaeze Okafor", role: "Founder, Bloom Beauty", text: "BrainboxWorld rebuilt our storefront and our online sales jumped by 62% in three months. Truly professional and results-driven." },
  { name: "Michael Bennett", role: "CEO, NovaCorp", text: "Our new website finally reflects the quality of our services. Leads are up and the design is world-class." },
  { name: "Fatima Hassan", role: "Marketing Lead, Northline", text: "From branding to SEO, they nailed every detail. Communication was smooth and delivery was on time." },
  { name: "David Chen", role: "Owner, Ember Restaurant", text: "The team took time to understand our story. The site is beautiful and our reservations have doubled." },
  { name: "Grace Okon", role: "Director, Kingdom NGO", text: "Fantastic experience end-to-end. Our donation flow is now seamless and our brand feels credible." },
];

export const faqs = [
  { q: "How long does it take to build a website?", a: "Most business websites take 2–4 weeks. Larger ecommerce or custom builds can take 6–10 weeks depending on scope." },
  { q: "Do you offer ongoing support after launch?", a: "Yes. We offer flexible maintenance and growth plans covering updates, security, performance and content changes." },
  { q: "Can you redesign my existing website?", a: "Absolutely. We audit your current site, keep what works and rebuild it with a modern design and stronger conversion flow." },
  { q: "How much does a website cost?", a: "Projects typically start from $500 and scale based on features, ecommerce, integrations and content. Ask for a custom quote." },
  { q: "Do you handle SEO and marketing too?", a: "Yes — we're a full-service agency. Web design, SEO, ads, branding, and social media all under one roof." },
  { q: "What platforms do you build on?", a: "We work with WordPress, Shopify, Wix and modern React/Next.js stacks depending on your needs." },
  { q: "Will my website be mobile friendly?", a: "Every website we build is fully responsive and tuned for mobile speed and accessibility." },
  { q: "Do you write the content?", a: "We can. We offer copywriting, image sourcing and content strategy as part of our packages." },
];

export const packages = [
  { name: "Starter", price: "$499", ideal: "Solopreneurs & new brands", features: ["Up to 5 pages", "Responsive design", "Contact form", "Basic SEO", "1 revision round"], cta: "Start small" },
  { name: "Business", price: "$1,299", featured: true, ideal: "Growing businesses", features: ["Up to 10 pages", "Custom design", "CMS integration", "SEO ready", "Analytics setup", "2 revision rounds"], cta: "Most popular" },
  { name: "Professional", price: "$2,499", ideal: "Established brands", features: ["Unlimited pages", "Advanced animations", "Blog / CMS", "On-page SEO", "Speed optimization", "3 revision rounds"], cta: "Go pro" },
  { name: "Enterprise", price: "Custom", ideal: "Large operations", features: ["Custom builds", "Ecommerce & integrations", "Dedicated PM", "Priority support", "Ongoing growth", "SLA"], cta: "Talk to sales" },
];

export const stats = [
  { value: 250, suffix: "+", label: "Projects Completed" },
  { value: 180, suffix: "+", label: "Happy Clients" },
  { value: 8, suffix: "+", label: "Years Experience" },
  { value: 98, suffix: "%", label: "Client Satisfaction" },
];

export const whyUs = [
  { icon: Palette, title: "Creative Design", desc: "Distinctive, on-brand visuals that stand out." },
  { icon: LineChart, title: "Business Strategy", desc: "Every pixel serves a business objective." },
  { icon: Search, title: "SEO Ready", desc: "Built with search visibility in mind from day one." },
  { icon: Layout, title: "Mobile First", desc: "Perfect experience on every screen size." },
  { icon: Zap, title: "Fast Delivery", desc: "Efficient sprints without cutting corners." },
  { icon: Wrench, title: "Long-Term Support", desc: "We stay with you after launch." },
  { icon: Rocket, title: "Performance Optimized", desc: "Blazing-fast Core Web Vitals." },
  { icon: LineChart, title: "Results Driven", desc: "Measured by leads, sales and growth." },
];
