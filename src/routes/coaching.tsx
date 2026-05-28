import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { Check, Sparkles, Brain, Heart } from "lucide-react";
import { GlassPanel } from "@/components/fx/GlassPanel";
import { GradientOrb } from "@/components/fx/GradientOrb";
import { ScrollReveal } from "@/components/fx/ScrollReveal";
import { MagneticButton } from "@/components/fx/MagneticButton";

export const Route = createFileRoute("/coaching")({
  head: () => ({
    meta: [
      { title: "Coaching Program — Emotional Fitness Academy" },
      { name: "description", content: "A 12-week cinematic transformation roadmap with AI-guided integration." },
      { property: "og:title", content: "Coaching Program — Emotional Fitness Academy" },
      { property: "og:description", content: "A 12-week cinematic transformation roadmap with AI-guided integration." },
    ],
  }),
  component: CoachingPage,
});

const roadmap = [
  { week: "Weeks 1–3", title: "Mapping", body: "Baseline assessments, nervous-system literacy, intention setting." },
  { week: "Weeks 4–6", title: "Regulating", body: "Daily protocols, somatic practice, AI check-ins." },
  { week: "Weeks 7–9", title: "Reframing", body: "Cognitive integration, narrative shifts, breath mastery." },
  { week: "Weeks 10–12", title: "Embodying", body: "Sustained practice, lifestyle redesign, community ritual." },
];

const benefits = [
  "+ 41% emotional range expansion (avg.)",
  "− 38% perceived stress",
  "+ 52% sleep depth",
  "+ 64% relational clarity",
];

function CoachingPage() {
  return (
    <div className="relative">
      <section className="relative pt-40 pb-16">
        <GradientOrb className="-right-40 top-20" size={500} />
        <div className="mx-auto max-w-5xl px-6 text-center">
          <p className="text-xs uppercase tracking-[0.4em] text-accent">Coaching Program</p>
          <h1 className="mt-4 font-display text-6xl font-light leading-[0.95] sm:text-8xl">
            A 12-week <span className="text-gradient">cinematic transformation</span>.
          </h1>
        </div>
      </section>

      <section className="relative py-20">
        <div className="mx-auto max-w-5xl px-6">
          <ScrollReveal className="text-center">
            <p className="text-xs uppercase tracking-[0.4em] text-accent">Roadmap</p>
            <h2 className="mt-3 font-display text-5xl font-light">Four phases. One arc.</h2>
          </ScrollReveal>
          <div className="mt-16 relative">
            <div className="absolute left-8 top-0 h-full w-px bg-gradient-to-b from-transparent via-border to-transparent md:left-1/2" />
            {roadmap.map((r, i) => (
              <ScrollReveal key={r.week} delay={i * 0.1}>
                <div className="relative py-8 pl-20 md:pl-0 md:grid md:grid-cols-2 md:gap-12">
                  <div className={i % 2 === 0 ? "md:text-right md:pr-12" : "md:order-2 md:pl-12"}>
                    <p className="text-xs uppercase tracking-[0.3em] text-accent">{r.week}</p>
                    <h3 className="mt-2 font-display text-3xl font-light">{r.title}</h3>
                  </div>
                  <div className={i % 2 === 0 ? "md:pl-12" : "md:order-1 md:text-right md:pr-12"}>
                    <p className="text-muted-foreground">{r.body}</p>
                  </div>
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 + 0.2 }}
                    className="absolute left-8 top-10 h-4 w-4 -translate-x-1/2 rounded-full bg-gradient-glow shadow-glow md:left-1/2"
                  />
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-20">
        <div className="mx-auto max-w-6xl px-6 grid gap-6 md:grid-cols-2">
          <ScrollReveal>
            <GlassPanel strong className="!p-8">
              <div className="flex items-center gap-3"><Brain className="h-5 w-5 text-accent" /><p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">AI Wellness Analysis</p></div>
              <h3 className="mt-4 font-display text-2xl">Personal Baseline</h3>
              <div className="mt-6 space-y-4">
                {[
                  { l: "Nervous System Regulation", v: 62 },
                  { l: "Cognitive Flexibility", v: 78 },
                  { l: "Emotional Range", v: 54 },
                  { l: "Recovery Velocity", v: 71 },
                ].map((m) => (
                  <div key={m.l}>
                    <div className="flex justify-between text-xs"><span>{m.l}</span><span className="text-accent">{m.v}%</span></div>
                    <div className="mt-1 h-1.5 rounded-full bg-secondary overflow-hidden">
                      <motion.div initial={{ width: 0 }} whileInView={{ width: `${m.v}%` }} viewport={{ once: true }} transition={{ duration: 1.2 }} className="h-full bg-gradient-glow" />
                    </div>
                  </div>
                ))}
              </div>
            </GlassPanel>
          </ScrollReveal>
          <ScrollReveal delay={0.15}>
            <GlassPanel strong className="!p-8 grid grid-cols-2 gap-4">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Before</p>
                <div className="mt-4 rounded-2xl bg-secondary p-6">
                  <Heart className="h-6 w-6 text-muted-foreground" />
                  <p className="mt-3 font-display text-xl font-light">Reactive</p>
                  <p className="mt-1 text-xs text-muted-foreground">Stress as static.</p>
                </div>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-accent">After</p>
                <div className="mt-4 rounded-2xl bg-gradient-glow p-6 text-white shadow-glow">
                  <Sparkles className="h-6 w-6" />
                  <p className="mt-3 font-display text-xl font-light">Resonant</p>
                  <p className="mt-1 text-xs opacity-90">Stress as signal.</p>
                </div>
              </div>
            </GlassPanel>
          </ScrollReveal>
        </div>
      </section>

      <section className="relative py-20">
        <div className="mx-auto max-w-5xl px-6">
          <ScrollReveal className="text-center">
            <h2 className="font-display text-5xl font-light">Outcomes you feel.</h2>
          </ScrollReveal>
          <div className="mt-12 grid gap-4 sm:grid-cols-2">
            {benefits.map((b, i) => (
              <ScrollReveal key={b} delay={i * 0.08}>
                <GlassPanel className="!p-6 flex items-center gap-4">
                  <div className="rounded-full bg-gradient-glow p-2"><Check className="h-4 w-4 text-white" /></div>
                  <p className="font-display text-lg font-light">{b}</p>
                </GlassPanel>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-24">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <GlassPanel strong className="!p-12">
            <h2 className="font-display text-4xl font-light">Enrollment opens monthly.</h2>
            <p className="mt-3 text-muted-foreground">Limited cohorts. Hand-selected practitioners.</p>
            <div className="mt-8 flex justify-center"><Link to="/booking"><MagneticButton>Apply for Next Cohort</MagneticButton></Link></div>
          </GlassPanel>
        </div>
      </section>
    </div>
  );
}