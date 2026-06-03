import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { Brain, Heart, GraduationCap, ArrowRight, CheckCircle } from "lucide-react";
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
  {
    icon: Brain,
    title: "1-on-1 Naturopath Consultation",
    desc: "Personalized Emotional Fitness® sessions for trauma, addiction, suicide ideation, loss, and leadership development.",
    points: [
      "TASL Support (Trauma, Addiction, Suicide, Loss)",
      "Leadership & Organizational Culture",
      "Comprehensive assessment & personalized plan",
      "1-on-1 sessions (Zoom or in-person)",
      "Crisis intervention protocols",
      "Partially covered by naturopath benefits"
    ],
    link: "/1-on-1-program"
  },
  {
    icon: Heart,
    title: "7 Pillars of Self Program",
    desc: "10-week transformational group journey through 7 foundational areas: Emotional, Purpose, Financial, Physical, Mental, Environmental, Spiritual.",
    points: [
      "10 weekly group sessions",
      "Pre-program discovery consultation",
      "Facilitated exploration of each pillar",
      "Two individual sessions with instructor",
      "Email/voice note check-ins",
      "Reflective tools & worksheets"
    ],
    link: "/7-pillars"
  },
  {
    icon: GraduationCap,
    title: "Coach Training Course",
    desc: "122-hour modular certification program teaching the 9 Steps to Emotional Fitness® for personal evolution or professional development.",
    points: [
      "9 Steps to Emotional Fitness® framework",
      "Flexible format (in-person, virtual, hybrid)",
      "Certification pathway available",
      "Three individual sessions with instructor",
      "Code of Professional Conduct & Ethics",
      "Customized workshops & masterclasses"
    ],
    link: "/coach-training"
  },
];

function ServicesPage() {
  return (
    <div className="relative">
      <section className="relative pt-40 pb-16 bg-gradient-to-br from-background via-frost/20 to-iceberg-light/8">
        <GradientOrb className="-left-40 top-20" size={500} />
        <div className="mx-auto max-w-5xl px-6 text-center relative z-10">
          <p className="text-xs uppercase tracking-[0.4em] text-accent">Our Programs</p>
          <h1 className="mt-4 font-display text-6xl font-light leading-[0.95] sm:text-8xl">
            Three pathways to <span className="text-gradient">emotional fitness</span>
          </h1>
          <p className="mt-6 text-muted-foreground max-w-2xl mx-auto">
            Whether you're seeking personal transformation, professional certification, or deep healing, we offer specialized programs designed to help you discover your innate wisdom.
          </p>
        </div>
      </section>

      <section className="relative py-16">
        <div className="mx-auto max-w-7xl px-6 grid gap-8 md:grid-cols-1 lg:grid-cols-3">
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
  icon: Icon, title, desc, points, link, delay,
}: { icon: typeof Brain; title: string; desc: string; points: string[]; link: string; delay: number }) {
  const [expanded, setExpanded] = useState(false);
  return (
    <ScrollReveal delay={delay}>
      <motion.div
        whileHover={{ y: -10, rotateX: 5, rotateY: -3 }}
        transition={{ type: "spring", stiffness: 180, damping: 18 }}
        style={{ transformStyle: "preserve-3d", perspective: 1000 }}
        className="h-full"
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
            <ul className="mt-6 space-y-3">
              {points.map((p) => (
                <li key={p} className="flex items-start gap-2 text-sm">
                  <CheckCircle className="h-4 w-4 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">{p}</span>
                </li>
              ))}
            </ul>
          </motion.div>
          <div className="mt-6 flex items-center justify-between">
            <button
              onClick={() => setExpanded(!expanded)}
              className="inline-flex items-center gap-1 text-xs font-medium text-gradient"
            >
              {expanded ? "Show less" : "Learn more"} <ArrowRight className="h-3 w-3" />
            </button>
            <Link to={link} className="inline-flex items-center gap-1 text-xs font-medium text-accent hover:text-accent/80">
              View program
            </Link>
          </div>
        </GlassPanel>
      </motion.div>
    </ScrollReveal>
  );
}