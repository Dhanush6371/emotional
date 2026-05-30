import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import { ArrowRight, Sparkles, Brain, Heart, Activity, Mic, Waves } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { GlassPanel } from "@/components/fx/GlassPanel";
import { MagneticButton } from "@/components/fx/MagneticButton";
import { GradientOrb } from "@/components/fx/GradientOrb";
import { ParticleField } from "@/components/fx/ParticleField";
import { Hero3DOrb } from "@/components/fx/Hero3DOrb";
import { ScrollReveal } from "@/components/fx/ScrollReveal";
import { ClientOnly } from "@/components/site/ClientOnly";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Emotional Fitness Academy — Train the Mind Like the Body" },
      { name: "description", content: "An AI-native emotional wellness ecosystem. Coaching, programs, podcasts, and immersive transformation for the next generation of resilient minds." },
      { property: "og:title", content: "Emotional Fitness Academy" },
      { property: "og:description", content: "AI-native emotional wellness ecosystem." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Hero />
      <DashboardPreview />
      <ServiceCards />
      <AIAssistant />
      <Storytelling />
      <CTA />
    </>
  );
}

function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden pt-24">
      {/* Medicine Wheel inspired background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-background via-frost to-background">
        <ClientOnly>
          <ParticleField density={80} />
        </ClientOnly>
        {/* Subtle Medicine Wheel color accents */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-medicine-yellow/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-iceberg-blue/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-iceberg opacity-5 rounded-full blur-3xl" />
      </div>
      <GradientOrb className="-left-40 top-20" size={500} />
      <GradientOrb className="-right-40 bottom-0" size={600} />

      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 pt-12 lg:grid-cols-2">
        <div className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs"
          >
            <Sparkles className="h-3.5 w-3.5 text-accent" />
            <span className="tracking-wide text-muted-foreground">AI-native emotional wellness</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.1 }}
            className="mt-6 font-display text-[3.5rem] font-light leading-[0.95] tracking-tight sm:text-7xl lg:text-[5.5rem]"
          >
            Train the mind
            <br />
            <span className="text-gradient animate-gradient">like the body.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-6 max-w-lg text-base font-light leading-relaxed text-muted-foreground sm:text-lg"
          >
            An immersive emotional fitness ecosystem powered by AI-guided coaching, neuroscience-backed programs, and cinematic wellness experiences.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <Link to="/booking"><MagneticButton>Begin Transformation <ArrowRight className="ml-2 inline h-4 w-4" /></MagneticButton></Link>
            <Link to="/services"><MagneticButton variant="ghost">Explore the Academy</MagneticButton></Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="mt-14 flex items-center gap-8"
          >
            {[
              { v: "12K+", l: "Lives transformed" },
              { v: "98%", l: "Report clarity" },
              { v: "24/7", l: "AI companion" },
            ].map((s) => (
              <div key={s.l}>
                <p className="font-display text-2xl font-light">{s.v}</p>
                <p className="text-xs text-muted-foreground">{s.l}</p>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.2 }}
          className="relative aspect-square w-full max-w-xl mx-auto"
        >
          <ClientOnly
            fallback={
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="h-72 w-72 rounded-full bg-gradient-glow blur-2xl opacity-60" />
              </div>
            }
          >
            <Hero3DOrb />
          </ClientOnly>
          {/* Floating holographic cards */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute left-0 top-12"
          >
            <GlassPanel className="!p-4">
              <div className="flex items-center gap-3">
                <div className="rounded-full bg-gradient-glow p-2"><Heart className="h-4 w-4 text-white" /></div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-muted-foreground">Calm Index</p>
                  <p className="font-display text-lg">94<span className="text-xs text-muted-foreground">/100</span></p>
                </div>
              </div>
            </GlassPanel>
          </motion.div>
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            className="absolute right-0 bottom-16"
          >
            <GlassPanel className="!p-4">
              <div className="flex items-center gap-3">
                <div className="rounded-full bg-gradient-glow p-2"><Activity className="h-4 w-4 text-white" /></div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-muted-foreground">Resilience</p>
                  <p className="font-display text-lg">+38%</p>
                </div>
              </div>
            </GlassPanel>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function DashboardPreview() {
  return (
    <section className="relative py-32 bg-gradient-to-b from-background via-frost/30 to-background">
      <div className="mx-auto max-w-7xl px-6">
        <ScrollReveal className="mx-auto max-w-3xl text-center">
          <p className="text-xs uppercase tracking-[0.4em] text-accent">Wellness Intelligence</p>
          <h2 className="mt-4 font-display text-5xl font-light leading-tight sm:text-6xl">
            Your emotional state, <span className="text-gradient">visualized</span>.
          </h2>
          <p className="mt-5 text-base text-muted-foreground">
            A living dashboard tracking nervous system regulation, cognitive load, and emotional resilience in real time.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.2} className="mt-16">
          <GlassPanel strong className="!p-8 sm:!p-12">
            <div className="grid gap-6 md:grid-cols-3">
              {[
                { label: "Nervous System", value: "Regulated", trend: "+12%", color: "from-blue-500 to-yellow-400" },
                { label: "Cognitive Load", value: "Light", trend: "-24%", color: "from-yellow-400 to-red-500" },
                { label: "Emotional Range", value: "Expansive", trend: "+41%", color: "from-blue-400 to-blue-600" },
              ].map((m) => (
                <GlassPanel key={m.label} className="!p-6">
                  <p className="text-xs uppercase tracking-widest text-muted-foreground">{m.label}</p>
                  <p className="mt-3 font-display text-3xl font-light">{m.value}</p>
                  <div className="mt-4 h-2 overflow-hidden rounded-full bg-secondary">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: "80%" }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, ease: "easeOut" }}
                      className={`h-full bg-gradient-to-r ${m.color}`}
                    />
                  </div>
                  <p className="mt-2 text-xs text-accent">{m.trend} this week</p>
                </GlassPanel>
              ))}
            </div>

            <div className="mt-8 grid gap-6 md:grid-cols-2">
              <GlassPanel className="!p-6">
                <div className="flex items-center justify-between">
                  <p className="text-xs uppercase tracking-widest text-muted-foreground">Weekly Rhythm</p>
                  <Waves className="h-4 w-4 text-accent" />
                </div>
                <div className="mt-6 flex items-end gap-2 h-32">
                  {[40, 65, 50, 80, 70, 90, 75].map((h, i) => (
                    <motion.div
                      key={i}
                      initial={{ height: 0 }}
                      whileInView={{ height: `${h}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: i * 0.1 }}
                      className="flex-1 rounded-full bg-gradient-glow opacity-80"
                    />
                  ))}
                </div>
              </GlassPanel>
              <GlassPanel className="!p-6">
                <div className="flex items-center justify-between">
                  <p className="text-xs uppercase tracking-widest text-muted-foreground">AI Insight</p>
                  <Brain className="h-4 w-4 text-accent" />
                </div>
                <p className="mt-4 font-display text-xl font-light leading-snug">
                  "Your evening rituals are stabilizing the limbic baseline. Consider deepening morning breathwork."
                </p>
                <p className="mt-4 text-xs text-muted-foreground">Generated by EFA Companion · just now</p>
              </GlassPanel>
            </div>
          </GlassPanel>
        </ScrollReveal>
      </div>
    </section>
  );
}

function ServiceCards() {
  const services = [
    { icon: Brain, title: "Emotional Fitness Coaching", desc: "1-on-1 cinematic coaching tailored to your nervous system." },
    { icon: Heart, title: "Wellness Transformation", desc: "12-week programs blending neuroscience and lifestyle design." },
    { icon: Sparkles, title: "AI Wellness Guidance", desc: "An always-on emotional companion trained on your patterns." },
  ];
  return (
    <section className="relative py-32 bg-gradient-to-b from-background to-frost/20">
      {/* Subtle accent orbs */}
      <div className="absolute top-20 right-10 w-[400px] h-[400px] bg-medicine-red/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-[350px] h-[350px] bg-medicine-yellow/8 rounded-full blur-3xl" />
      <div className="mx-auto max-w-7xl px-6">
        <ScrollReveal className="mx-auto max-w-2xl text-center">
          <p className="text-xs uppercase tracking-[0.4em] text-accent">Pillars</p>
          <h2 className="mt-4 font-display text-5xl font-light leading-tight sm:text-6xl">
            Built for the <span className="text-gradient">human renaissance</span>.
          </h2>
        </ScrollReveal>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {services.map((s, i) => (
            <ScrollReveal key={s.title} delay={i * 0.1}>
              <motion.div
                whileHover={{ y: -8, rotateX: 4, rotateY: -4 }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
                style={{ transformStyle: "preserve-3d" }}
              >
                <GlassPanel className="group h-full !p-8 hover:shadow-glow">
                  <div className="mb-6 inline-flex rounded-2xl bg-gradient-glow p-3 shadow-glow">
                    <s.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-display text-2xl font-light">{s.title}</h3>
                  <p className="mt-3 text-sm text-muted-foreground">{s.desc}</p>
                  <Link to="/services" className="mt-6 inline-flex items-center gap-1 text-xs font-medium text-gradient">
                    Discover <ArrowRight className="h-3 w-3" />
                  </Link>
                </GlassPanel>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function AIAssistant() {
  return (
    <section className="relative py-32 bg-gradient-to-b from-frost/20 via-background to-frost/30">
      <div className="mx-auto max-w-7xl px-6">
        <GlassPanel strong className="relative overflow-hidden !p-12 sm:!p-20">
          <GradientOrb className="-right-40 -top-40" size={600} />
          <div className="relative z-10 grid items-center gap-12 md:grid-cols-2">
            <ScrollReveal>
              <p className="text-xs uppercase tracking-[0.4em] text-accent">EFA Companion</p>
              <h2 className="mt-4 font-display text-5xl font-light leading-tight">
                Your emotional <span className="text-gradient">co-pilot</span>.
              </h2>
              <p className="mt-5 text-muted-foreground">
                Voice-first. Cinematic. Always present. Talk through stress, rehearse difficult conversations, or wind down a charged day.
              </p>
              <div className="mt-8">
                <MagneticButton>Activate Companion</MagneticButton>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <div className="relative flex flex-col gap-3">
                {[
                  { who: "you", text: "I felt overwhelmed in the meeting today." },
                  { who: "ai", text: "Let's breathe through it together. What sensation showed up first?" },
                  { who: "you", text: "Tightness in my chest." },
                  { who: "ai", text: "Beautiful awareness. Try the 4-7-8 protocol with me now." },
                ].map((m, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: m.who === "you" ? 30 : -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.15 }}
                    className={m.who === "you" ? "self-end" : "self-start"}
                  >
                    <div
                      className={
                        m.who === "you"
                          ? "max-w-xs rounded-3xl rounded-br-md bg-gradient-glow px-5 py-3 text-sm text-white shadow-soft"
                          : "max-w-xs rounded-3xl rounded-bl-md glass px-5 py-3 text-sm"
                      }
                    >
                      {m.text}
                    </div>
                  </motion.div>
                ))}
                <div className="mt-4 flex items-center gap-2 self-start glass rounded-full px-4 py-2">
                  <Mic className="h-4 w-4 text-accent" />
                  <div className="flex gap-1">
                    {[1, 2, 3, 4, 5].map((b) => (
                      <motion.span
                        key={b}
                        animate={{ scaleY: [0.4, 1, 0.4] }}
                        transition={{ duration: 1, repeat: Infinity, delay: b * 0.1 }}
                        className="h-3 w-0.5 rounded-full bg-gradient-glow origin-center"
                      />
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </GlassPanel>
      </div>
    </section>
  );
}

function Storytelling() {
  const chapters = [
    { n: "01", t: "Awareness", d: "Map the inner landscape with AI-assisted reflection." },
    { n: "02", t: "Regulation", d: "Build nervous-system literacy and somatic fluency." },
    { n: "03", t: "Integration", d: "Embed practices into your daily operating system." },
    { n: "04", t: "Embodiment", d: "Live with sustained clarity, range, and presence." },
  ];
  return (
    <section className="relative py-32 bg-gradient-to-b from-frost/30 to-background">
      {/* Iceberg depth visualization */}
      <div className="absolute inset-0 bg-gradient-to-b from-iceberg-light/5 to-iceberg-blue/5" />
      <div className="mx-auto max-w-7xl px-6 relative z-10">
        <ScrollReveal className="mx-auto max-w-2xl text-center">
          <p className="text-xs uppercase tracking-[0.4em] text-accent">The Journey</p>
          <h2 className="mt-4 font-display text-5xl font-light leading-tight">
            Four chapters to a <span className="text-gradient">new operating system</span>.
          </h2>
        </ScrollReveal>
        <div className="mt-20 space-y-12">
          {chapters.map((c, i) => (
            <ScrollReveal key={c.n} delay={i * 0.08}>
              <div className="grid items-center gap-8 md:grid-cols-[120px_1fr_2fr]">
                <p className="font-display text-7xl font-light text-gradient">{c.n}</p>
                <h3 className="font-display text-3xl font-light">{c.t}</h3>
                <p className="text-muted-foreground">{c.d}</p>
              </div>
              {i < chapters.length - 1 && <div className="mt-12 h-px w-full bg-gradient-to-r from-transparent via-border to-transparent" />}
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="relative py-32 bg-gradient-to-b from-background via-frost/20 to-background">
      {/* Medicine Wheel completion - all four colors subtly present */}
      <div className="absolute top-0 left-1/4 w-[300px] h-[300px] bg-medicine-yellow/8 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-[300px] h-[300px] bg-iceberg-blue/10 rounded-full blur-3xl" />
      <div className="mx-auto max-w-5xl px-6 relative z-10">
        <GlassPanel strong className="relative overflow-hidden !p-16 text-center">
          <GradientOrb className="left-1/2 top-0 -translate-x-1/2" size={800} />
          <div className="relative z-10">
            <h2 className="font-display text-5xl font-light leading-tight sm:text-7xl">
              The future of <br /><span className="text-gradient">wellness is felt</span>.
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-muted-foreground">Begin with a 20-minute resonance call. No commitments. Just clarity.</p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Link to="/booking"><MagneticButton>Book Your Session</MagneticButton></Link>
              <Link to="/about"><MagneticButton variant="ghost">Read Our Story</MagneticButton></Link>
            </div>
          </div>
        </GlassPanel>
      </div>
    </section>
  );
}
