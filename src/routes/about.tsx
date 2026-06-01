import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { GlassPanel } from "@/components/fx/GlassPanel";
import { GradientOrb } from "@/components/fx/GradientOrb";
import { ScrollReveal } from "@/components/fx/ScrollReveal";
import { MagneticButton } from "@/components/fx/MagneticButton";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Emotional Fitness Academy" },
      { name: "description", content: "Our mission: to make emotional fitness as universal as physical fitness." },
      { property: "og:title", content: "About — Emotional Fitness Academy" },
      { property: "og:description", content: "Our mission: to make emotional fitness as universal as physical fitness." },
    ],
  }),
  component: AboutPage,
});

const timeline = [
  { year: "2019", title: "First Spark", body: "A single coach. A handful of clients. A radical idea: train the mind like the body." },
  { year: "2021", title: "The Academy", body: "Curriculum codified. Naturopathic practice integrated. First cohort certified." },
  { year: "2023", title: "Going AI-Native", body: "Launched the EFA Companion — an emotional co-pilot trained on lived practice." },
  { year: "2025", title: "Global Resonance", body: "12,000+ practitioners across 47 countries. A movement, not a brand." },
];

const team = [
  { name: "Aanya Rao", role: "Founder & Lead Coach" },
  { name: "Marcus Chen", role: "Head of AI & Research" },
  { name: "Dr. Lila Okafor", role: "Clinical Naturopath" },
  { name: "Iris Vasquez", role: "Programs Director" },
];

function AboutPage() {
  return (
    <div className="relative">
      <section className="relative pt-40 pb-20 bg-gradient-to-br from-background via-iceberg-light/10 to-frost/30">
        <GradientOrb className="-right-40 top-20" size={500} />
        {/* Cool blue accents */}
        <div className="absolute top-20 left-10 w-[400px] h-[400px] bg-iceberg-light/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-20 w-[350px] h-[350px] bg-iceberg-blue/10 rounded-full blur-3xl" />
        <div className="mx-auto max-w-5xl px-6 text-center relative z-10">
          <p className="text-xs uppercase tracking-[0.4em] text-accent">About</p>
          <h1 className="mt-4 font-display text-6xl font-light leading-[0.95] sm:text-8xl">
            We're building <br /><span className="text-gradient">the next century of wellness</span>.
          </h1>
          <p className="mx-auto mt-8 max-w-2xl text-lg font-light text-muted-foreground">
            Emotional Fitness Academy is a global movement merging neuroscience, naturopathy, and AI to create a new category of human flourishing.
          </p>
        </div>
      </section>

      <section className="relative py-24">
        <div className="mx-auto max-w-6xl px-6">
          <ScrollReveal className="text-center">
            <p className="text-xs uppercase tracking-[0.4em] text-accent">Timeline</p>
            <h2 className="mt-3 font-display text-5xl font-light">A six-year resonance.</h2>
          </ScrollReveal>
          <div className="mt-20 relative">
            <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-border to-transparent" />
            {timeline.map((t, i) => (
              <ScrollReveal key={t.year} delay={i * 0.1}>
                <div className={`relative grid grid-cols-2 gap-8 py-10 ${i % 2 === 0 ? "" : "[&>*:first-child]:order-2"}`}>
                  <div className={i % 2 === 0 ? "text-right pr-12" : "pl-12"}>
                    <p className="font-display text-5xl font-light text-gradient">{t.year}</p>
                    <h3 className="mt-2 font-display text-2xl">{t.title}</h3>
                  </div>
                  <div className={i % 2 === 0 ? "pl-12" : "text-right pr-12"}>
                    <GlassPanel className="!p-6 inline-block max-w-sm"><p className="text-sm text-muted-foreground">{t.body}</p></GlassPanel>
                  </div>
                  <div className="absolute left-1/2 top-12 h-3 w-3 -translate-x-1/2 rounded-full bg-gradient-glow shadow-glow" />
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-24">
        <div className="mx-auto max-w-6xl px-6 grid gap-8 md:grid-cols-2">
          <ScrollReveal>
            <GlassPanel strong className="!p-10 h-full">
              <p className="text-xs uppercase tracking-[0.4em] text-accent">Founder</p>
              <div className="mt-6 flex items-center gap-5">
                <div className="relative h-20 w-20 shrink-0">
                  <div className="absolute inset-0 rounded-full bg-gradient-glow blur-md opacity-70" />
                  <div className="relative h-full w-full rounded-full bg-gradient-glow" />
                </div>
                <div>
                  <h3 className="font-display text-3xl">Aanya Rao</h3>
                  <p className="text-sm text-muted-foreground">Founder · Naturopath · Coach</p>
                </div>
              </div>
              <p className="mt-6 text-muted-foreground leading-relaxed">
                "I built EFA because I refused to accept that emotional struggle is a private burden. We deserve infrastructure — beautiful, intelligent, daily — for the inner life."
              </p>
            </GlassPanel>
          </ScrollReveal>
          <ScrollReveal delay={0.15}>
            <GlassPanel strong className="!p-10 h-full">
              <p className="text-xs uppercase tracking-[0.4em] text-accent">Mission</p>
              <h3 className="mt-4 font-display text-3xl leading-snug">To make emotional fitness as universal as physical fitness.</h3>
              <p className="mt-6 text-muted-foreground">Through programs, technology, and a global practitioner network, we're rewriting what it means to be well.</p>
            </GlassPanel>
          </ScrollReveal>
        </div>
      </section>

      <section className="relative py-24">
        <div className="mx-auto max-w-6xl px-6">
          <ScrollReveal className="text-center">
            <p className="text-xs uppercase tracking-[0.4em] text-accent">The People</p>
            <h2 className="mt-3 font-display text-5xl font-light">A small, fierce team.</h2>
          </ScrollReveal>
          <div className="mt-16 grid gap-6 sm:grid-cols-2 md:grid-cols-4">
            {team.map((m, i) => (
              <ScrollReveal key={m.name} delay={i * 0.08}>
                <motion.div whileHover={{ y: -6 }}>
                  <GlassPanel className="!p-6 text-center">
                    <div className="mx-auto mb-4 h-20 w-20 rounded-full bg-gradient-glow" />
                    <h3 className="font-display text-lg">{m.name}</h3>
                    <p className="mt-1 text-xs text-muted-foreground">{m.role}</p>
                  </GlassPanel>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-24">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <GlassPanel strong className="!p-12">
            <h2 className="font-display text-4xl font-light">Join the renaissance.</h2>
            <p className="mt-3 text-muted-foreground">Step into the experience.</p>
            <div className="mt-8 flex justify-center"><Link to="/booking"><MagneticButton>Book Discovery Call</MagneticButton></Link></div>
          </GlassPanel>
        </div>
      </section>
    </div>
  );
}