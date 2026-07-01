import { motion } from "framer-motion";
import { TrendingUp, Users, Search, ShoppingCart, Zap } from "lucide-react";

export function HeroDashboard() {
  return (
    <div className="relative">
      <motion.div
        initial={{ opacity: 0, y: 30, rotateX: -8 }}
        animate={{ opacity: 1, y: 0, rotateX: 0 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className="relative rounded-3xl border border-white/60 bg-white/70 p-5 shadow-elegant backdrop-blur-xl"
      >
        {/* Header */}
        <div className="mb-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="size-2.5 rounded-full bg-red-400" />
            <div className="size-2.5 rounded-full bg-amber-400" />
            <div className="size-2.5 rounded-full bg-emerald-400" />
          </div>
          <span className="text-xs font-medium text-muted-foreground">brainboxworld.com/analytics</span>
        </div>

        {/* KPI Row */}
        <div className="grid grid-cols-3 gap-3">
          <Kpi icon={<Users className="size-4" />} label="Visitors" value="24.8k" trend="+18%" />
          <Kpi icon={<Search className="size-4" />} label="SEO Rank" value="#3" trend="+12" />
          <Kpi icon={<ShoppingCart className="size-4" />} label="Sales" value="$42k" trend="+35%" />
        </div>

        {/* Chart */}
        <div className="mt-4 rounded-2xl border bg-white p-4">
          <div className="mb-3 flex items-center justify-between">
            <div>
              <p className="text-xs text-muted-foreground">Marketing Performance</p>
              <p className="font-display text-lg font-semibold">Growth Analytics</p>
            </div>
            <span className="rounded-full bg-emerald-100 px-2.5 py-1 text-xs font-semibold text-emerald-700">+68%</span>
          </div>
          <svg viewBox="0 0 300 90" className="h-24 w-full">
            <defs>
              <linearGradient id="g1" x1="0" x2="0" y1="0" y2="1">
                <stop offset="0%" stopColor="oklch(0.556 0.204 260.5)" stopOpacity="0.4" />
                <stop offset="100%" stopColor="oklch(0.556 0.204 260.5)" stopOpacity="0" />
              </linearGradient>
            </defs>
            <motion.path
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.6, delay: 0.4 }}
              d="M0,70 C40,60 60,40 90,42 C120,44 140,20 170,25 C200,30 220,10 260,8 L300,5"
              fill="none"
              stroke="oklch(0.556 0.204 260.5)"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
            <path d="M0,70 C40,60 60,40 90,42 C120,44 140,20 170,25 C200,30 220,10 260,8 L300,5 L300,90 L0,90 Z" fill="url(#g1)" />
          </svg>
        </div>

        {/* Progress list */}
        <div className="mt-3 space-y-2 rounded-2xl border bg-white p-4">
          <Progress label="Website Design" value={95} />
          <Progress label="SEO Optimization" value={88} />
          <Progress label="Brand Performance" value={92} />
        </div>
      </motion.div>

      <FloatBadge className="-left-4 top-8" delay={0.6}><TrendingUp className="size-3.5 text-emerald-500" /> Mobile Responsive</FloatBadge>
      <FloatBadge className="-right-4 top-32" delay={0.8}><Search className="size-3.5 text-accent" /> SEO Optimized</FloatBadge>
      <FloatBadge className="-left-6 bottom-24" delay={1}><Zap className="size-3.5 text-amber-500" /> Fast Loading</FloatBadge>
      <FloatBadge className="-right-2 -bottom-4" delay={1.2}><TrendingUp className="size-3.5 text-secondary" /> Conversion Focused</FloatBadge>
    </div>
  );
}

function Kpi({ icon, label, value, trend }: { icon: React.ReactNode; label: string; value: string; trend: string }) {
  return (
    <div className="rounded-xl border bg-white p-3">
      <div className="flex items-center gap-1.5 text-xs text-muted-foreground">{icon}{label}</div>
      <div className="mt-1 font-display text-lg font-bold">{value}</div>
      <div className="text-[10px] font-semibold text-emerald-600">{trend}</div>
    </div>
  );
}
function Progress({ label, value }: { label: string; value: number }) {
  return (
    <div>
      <div className="mb-1 flex justify-between text-xs"><span className="text-muted-foreground">{label}</span><span className="font-semibold">{value}%</span></div>
      <div className="h-1.5 overflow-hidden rounded-full bg-muted">
        <motion.div initial={{ width: 0 }} whileInView={{ width: `${value}%` }} viewport={{ once: true }} transition={{ duration: 1.2, ease: "easeOut" }} className="h-full rounded-full bg-gradient-brand" />
      </div>
    </div>
  );
}
function FloatBadge({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: [0, -6, 0] }}
      transition={{ opacity: { duration: 0.5, delay }, y: { duration: 4, delay, repeat: Infinity, ease: "easeInOut" } }}
      className={`absolute z-10 inline-flex items-center gap-1.5 rounded-full border bg-white/90 px-3 py-1.5 text-xs font-semibold shadow-soft backdrop-blur ${className}`}
    >
      {children}
    </motion.div>
  );
}
