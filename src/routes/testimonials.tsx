import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import { Play, Quote } from "lucide-react";
import { GlassPanel } from "@/components/fx/GlassPanel";
import { GradientOrb } from "@/components/fx/GradientOrb";
import { ScrollReveal } from "@/components/fx/ScrollReveal";
import { useEffect, useState } from "react";

export const Route = createFileRoute("/testimonials")({
  head: () => ({
    meta: [
      { title: "Stories — Emotional Fitness Academy" },
      { name: "description", content: "Real transformations from our global community." },
      { property: "og:title", content: "Stories — Emotional Fitness Academy" },
      { property: "og:description", content: "Real transformations from our global community." },
    ],
  }),
  component: Page,
});

const videos = [
  { name: "Sasha M.", role: "Founder, Berlin", quote: "I rebuilt my baseline. Everything else followed." },
  { name: "Devon K.", role: "Athlete, Lagos", quote: "The most useful 12 weeks of my life." },
  { name: "Maya R.", role: "Designer, Tokyo", quote: "Felt like therapy met sci-fi." },
  { name: "Noah P.", role: "Surgeon, NYC", quote: "Recovery from a brutal year — restored." },
];

const quotes = [
  "I stopped surviving my mornings.",
  "I have a co-pilot for the hard stuff.",
  "Emotional fitness is now infrastructure for me.",
  "It rewired how I parent.",
  "Cinematic. That's the only word.",
];

function Page() {
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % quotes.length), 4500);
    return () => clearInterval(t);
  }, []);
  return (
    <div className="relative">
      <section className="relative pt-40 pb-12 bg-gradient-to-br from-background via-iceberg-light/10 to-frost/25">
        <GradientOrb className="-left-40 top-20" size={500} />
        <div className="mx-auto max-w-5xl px-6 text-center relative z-10">
          <p className="text-xs uppercase tracking-[0.4em] text-accent">Stories</p>
          <h1 className="mt-4 font-display text-6xl font-light leading-[0.95] sm:text-8xl">
            Lives, <span className="text-gradient">recomposed</span>.
          </h1>
        </div>
      </section>

      <section className="relative py-12">
        <div className="mx-auto max-w-7xl px-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[{ v: "12,000+", l: "Lives transformed" }, { v: "47", l: "Countries" }, { v: "98%", l: "Report clarity" }, { v: "4.9★", l: "Avg. rating" }].map((s) => (
            <ScrollReveal key={s.l}>
              <GlassPanel className="!p-6 text-center">
                <p className="font-display text-4xl text-gradient">{s.v}</p>
                <p className="mt-2 text-xs uppercase tracking-[0.3em] text-muted-foreground">{s.l}</p>
              </GlassPanel>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <section className="relative py-12">
        <div className="mx-auto max-w-7xl px-6 grid gap-6 md:grid-cols-2">
          {videos.map((v, i) => (
            <ScrollReveal key={v.name} delay={i * 0.08}>
              <motion.div whileHover={{ y: -6 }}>
                <GlassPanel className="!p-0 overflow-hidden">
                  <div className="relative aspect-video bg-gradient-soft">
                    <div className="absolute inset-0 bg-gradient-glow opacity-20" />
                    <button className="absolute inset-0 m-auto h-16 w-16 rounded-full bg-white/90 backdrop-blur flex items-center justify-center shadow-glow transition-transform hover:scale-110">
                      <Play className="h-6 w-6 text-foreground translate-x-0.5" />
                    </button>
                  </div>
                  <div className="p-6">
                    <Quote className="h-5 w-5 text-accent" />
                    <p className="mt-2 font-display text-xl font-light">"{v.quote}"</p>
                    <p className="mt-3 text-xs text-muted-foreground">— {v.name}, {v.role}</p>
                  </div>
                </GlassPanel>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <section className="relative py-24">
        <div className="mx-auto max-w-4xl px-6">
          <GlassPanel strong className="!p-12 text-center min-h-[200px] flex items-center justify-center">
            <motion.p
              key={idx}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6 }}
              className="font-display text-3xl font-light leading-snug sm:text-4xl"
            >
              "{quotes[idx]}"
            </motion.p>
          </GlassPanel>
        </div>
      </section>
    </div>
  );
}