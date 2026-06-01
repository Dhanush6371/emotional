import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import { Play, Search, Sparkles, Clock } from "lucide-react";
import { GlassPanel } from "@/components/fx/GlassPanel";
import { GradientOrb } from "@/components/fx/GradientOrb";
import { ScrollReveal } from "@/components/fx/ScrollReveal";
import { useState } from "react";

export const Route = createFileRoute("/podcast")({
  head: () => ({
    meta: [
      { title: "Podcast — Emotional Fitness Academy" },
      { name: "description", content: "Cinematic conversations on emotional fitness, neuroscience, and the future of wellness." },
      { property: "og:title", content: "Podcast — Emotional Fitness Academy" },
      { property: "og:description", content: "Cinematic conversations on emotional fitness." },
    ],
  }),
  component: PodcastPage,
});

const episodes = [
  { n: 42, title: "The Neuroscience of Calm", host: "Dr. Lila Okafor", dur: "48 min", tag: "Neuroscience" },
  { n: 41, title: "Rebuilding Trust with the Body", host: "Aanya Rao", dur: "52 min", tag: "Somatics" },
  { n: 40, title: "AI as a Mirror, Not a Crutch", host: "Marcus Chen", dur: "39 min", tag: "Technology" },
  { n: 39, title: "Burnout's Quiet Architecture", host: "Iris Vasquez", dur: "44 min", tag: "Lifestyle" },
  { n: 38, title: "The Practice of Slowing Down", host: "Aanya Rao", dur: "31 min", tag: "Practice" },
  { n: 37, title: "Plant Medicine, Reverently", host: "Dr. Lila Okafor", dur: "57 min", tag: "Naturopathy" },
];

const categories = ["All", "Neuroscience", "Somatics", "Technology", "Lifestyle", "Practice", "Naturopathy"];

function PodcastPage() {
  const [q, setQ] = useState("");
  const [cat, setCat] = useState("All");
  const filtered = episodes.filter(
    (e) => (cat === "All" || e.tag === cat) && (q === "" || e.title.toLowerCase().includes(q.toLowerCase())),
  );
  return (
    <div className="relative">
      <section className="relative pt-40 pb-12 bg-gradient-to-br from-background via-frost/25 to-iceberg-light/8">
        <GradientOrb className="-right-40 top-20" size={500} />
        {/* Cool blue voice energy */}
        <div className="absolute top-10 left-10 w-[450px] h-[450px] bg-iceberg-blue/8 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-1/4 w-[400px] h-[400px] bg-iceberg-light/8 rounded-full blur-3xl" />
        <div className="mx-auto max-w-5xl px-6 text-center relative z-10">
          <p className="text-xs uppercase tracking-[0.4em] text-accent">Podcast</p>
          <h1 className="mt-4 font-display text-6xl font-light leading-[0.95] sm:text-8xl">
            Cinematic conversations <span className="text-gradient">on becoming</span>.
          </h1>
        </div>
      </section>

      <section className="relative py-12">
        <div className="mx-auto max-w-7xl px-6">
          <GlassPanel strong className="relative overflow-hidden !p-10 sm:!p-14">
            <GradientOrb className="-left-40 -top-40" size={500} />
            <div className="relative z-10 grid items-center gap-10 md:grid-cols-[1fr_auto]">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-accent">Featured · Episode 42</p>
                <h2 className="mt-3 font-display text-4xl font-light sm:text-5xl">The Neuroscience of Calm</h2>
                <p className="mt-4 text-muted-foreground max-w-md">Dr. Lila Okafor on the vagal nerve, polyvagal theory, and the daily rituals that rewire baseline.</p>
                <div className="mt-6 flex items-end gap-1 h-12">
                  {Array.from({ length: 36 }).map((_, i) => (
                    <motion.span
                      key={i}
                      animate={{ scaleY: [0.3, 1, 0.3] }}
                      transition={{ duration: 1.2, delay: i * 0.04, repeat: Infinity }}
                      className="block w-1 rounded-full bg-gradient-glow origin-bottom"
                    />
                  ))}
                </div>
              </div>
              <button className="relative h-28 w-28 shrink-0 rounded-full bg-gradient-glow shadow-glow transition-transform hover:scale-105">
                <span className="absolute inset-0 rounded-full bg-gradient-glow blur-2xl opacity-60 animate-pulse" />
                <Play className="relative mx-auto h-10 w-10 text-white" />
              </button>
            </div>
          </GlassPanel>
        </div>
      </section>

      <section className="relative py-12">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <input
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="Search episodes"
                className="w-full glass rounded-full py-3 pl-11 pr-4 text-sm outline-none focus:neon-ring"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((c) => (
                <button
                  key={c}
                  onClick={() => setCat(c)}
                  className={`rounded-full px-4 py-1.5 text-xs transition-all ${cat === c ? "bg-gradient-glow text-white shadow-glow" : "glass text-muted-foreground hover:text-foreground"}`}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {filtered.map((e, i) => (
              <ScrollReveal key={e.n} delay={i * 0.05}>
                <motion.div whileHover={{ y: -6 }}>
                  <GlassPanel className="!p-6 group cursor-pointer">
                    <div className="flex items-start justify-between">
                      <p className="text-xs text-accent">#{e.n} · {e.tag}</p>
                      <button className="rounded-full bg-gradient-glow p-2 opacity-80 transition-opacity group-hover:opacity-100">
                        <Play className="h-3 w-3 text-white" />
                      </button>
                    </div>
                    <h3 className="mt-4 font-display text-xl font-light leading-snug">{e.title}</h3>
                    <div className="mt-4 flex items-center justify-between text-xs text-muted-foreground">
                      <span>{e.host}</span>
                      <span className="inline-flex items-center gap-1"><Clock className="h-3 w-3" />{e.dur}</span>
                    </div>
                  </GlassPanel>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-20">
        <div className="mx-auto max-w-7xl px-6">
          <GlassPanel strong className="!p-10">
            <div className="flex items-center gap-2"><Sparkles className="h-4 w-4 text-accent" /><p className="text-xs uppercase tracking-[0.3em] text-accent">AI Recommended for you</p></div>
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              {episodes.slice(0, 3).map((e) => (
                <div key={e.n} className="rounded-2xl bg-white/60 p-5">
                  <p className="text-xs text-accent">#{e.n}</p>
                  <h3 className="mt-2 font-display text-lg">{e.title}</h3>
                </div>
              ))}
            </div>
          </GlassPanel>
        </div>
      </section>
    </div>
  );
}