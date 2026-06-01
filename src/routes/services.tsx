import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { Brain, Heart, Sparkles, Leaf, GraduationCap, ArrowRight } from "lucide-react";
import { GlassPanel } from "@/components/fx/GlassPanel";
import { GradientOrb } from "@/components/fx/GradientOrb";
import { ScrollReveal } from "@/components/fx/ScrollReveal";
import { MagneticButton } from "@/components/fx/MagneticButton";
import { useState } from "react";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Emotional Fitness Academy" },
      { name: "description", content: "Coaching, transformation programs, AI guidance, naturopathy, and certification." },
      { property: "og:title", content: "Services — Emotional Fitness Academy" },
      { property: "og:description", content: "Coaching, transformation programs, AI guidance, naturopathy, and certification." },
    ],
  }),
  component: ServicesPage,
});

const services = [
  { icon: Brain, title: "Emotional Fitness Coaching", desc: "Private 1:1 sessions with master coaches, paired with daily AI follow-through.", points: ["12 cinematic sessions", "Personal AI co-pilot", "Somatic + cognitive blend"] },
  { icon: Heart, title: "Wellness Transformation", desc: "12-week immersive program rewiring habits, rhythms, and self-narrative.", points: ["Weekly group rituals", "Custom protocols", "Lifetime alumni access"] },
  { icon: Sparkles, title: "AI Wellness Guidance", desc: "Voice-first companion trained on neuroscience, contemplative practice, and your patterns.", points: ["24/7 availability", "Voice + text", "Privacy-first"] },
  { icon: Leaf, title: "Naturopath Consultation", desc: "Whole-body assessments integrating herbal medicine, nutrition, and somatic care.", points: ["Lab-informed", "Personal protocols", "Quarterly follow-up"] },
  { icon: GraduationCap, title: "Certification Programs", desc: "Train as an Emotional Fitness Practitioner. 9-month accredited path.", points: ["Live cohorts", "Practicum hours", "Global community"] },
];

function ServicesPage() {
  return (
    <div className="relative">
      <section className="relative pt-40 pb-16 bg-gradient-to-br from-background via-frost/20 to-iceberg-light/8">
        <GradientOrb className="-left-40 top-20" size={500} />
        {/* Cool blue presence */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-iceberg-blue/8 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-iceberg-light/8 rounded-full blur-3xl" />
        <div className="mx-auto max-w-5xl px-6 text-center relative z-10">
          <p className="text-xs uppercase tracking-[0.4em] text-accent">Services</p>
          <h1 className="mt-4 font-display text-6xl font-light leading-[0.95] sm:text-8xl">
            Five pathways to <span className="text-gradient">felt clarity</span>.
          </h1>
        </div>
      </section>

      <section className="relative py-16">
        <div className="mx-auto max-w-7xl px-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => <ServiceCard key={s.title} {...s} delay={i * 0.08} />)}
        </div>
      </section>

      <section className="relative py-24">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <GlassPanel strong className="!p-12">
            <h2 className="font-display text-4xl font-light">Not sure where to begin?</h2>
            <p className="mt-3 text-muted-foreground">A 20-minute resonance call. We'll listen, you'll feel.</p>
            <div className="mt-8 flex justify-center"><Link to="/booking"><MagneticButton>Book a Discovery Call</MagneticButton></Link></div>
          </GlassPanel>
        </div>
      </section>
    </div>
  );
}

function ServiceCard({
  icon: Icon, title, desc, points, delay,
}: { icon: typeof Brain; title: string; desc: string; points: string[]; delay: number }) {
  const [expanded, setExpanded] = useState(false);
  return (
    <ScrollReveal delay={delay}>
      <motion.div
        whileHover={{ y: -10, rotateX: 5, rotateY: -3 }}
        transition={{ type: "spring", stiffness: 180, damping: 18 }}
        style={{ transformStyle: "preserve-3d", perspective: 1000 }}
        onClick={() => setExpanded(!expanded)}
        className="cursor-pointer h-full"
      >
        <GlassPanel className="group h-full !p-8 hover:shadow-glow hover:[box-shadow:0_0_0_1px_rgba(139,92,246,0.3),0_30px_80px_-20px_rgba(139,92,246,0.4)]">
          <div className="mb-6 inline-flex rounded-2xl bg-gradient-glow p-3 shadow-glow">
            <Icon className="h-6 w-6 text-white" />
          </div>
          <h3 className="font-display text-2xl font-light">{title}</h3>
          <p className="mt-3 text-sm text-muted-foreground">{desc}</p>
          <motion.div
            initial={false}
            animate={{ height: expanded ? "auto" : 0, opacity: expanded ? 1 : 0 }}
            className="overflow-hidden"
          >
            <ul className="mt-6 space-y-2">
              {points.map((p) => (
                <li key={p} className="flex items-center gap-2 text-sm">
                  <span className="h-1.5 w-1.5 rounded-full bg-gradient-glow" />
                  {p}
                </li>
              ))}
            </ul>
          </motion.div>
          <div className="mt-6 inline-flex items-center gap-1 text-xs font-medium text-gradient">
            {expanded ? "Collapse" : "Expand"} <ArrowRight className="h-3 w-3" />
          </div>
        </GlassPanel>
      </motion.div>
    </ScrollReveal>
  );
}