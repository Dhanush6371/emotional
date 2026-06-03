import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import { Search, Clock, ArrowRight } from "lucide-react";
import { GlassPanel } from "@/components/fx/GlassPanel";
import { GradientOrb } from "@/components/fx/GradientOrb";
import { ScrollReveal } from "@/components/fx/ScrollReveal";
import { useEffect, useState } from "react";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Insights — Emotional Fitness Academy" },
      { name: "description", content: "Field notes from the frontier of emotional fitness, AI, and modern wellness." },
      { property: "og:title", content: "Insights — Emotional Fitness Academy" },
      { property: "og:description", content: "Field notes from the frontier of emotional fitness." },
    ],
  }),
  component: BlogPage,
});

const posts = [
  { title: "And When I Listened", cat: "Emotional Fitness®", time: "8 min", author: "Luciano Onichino, BA, RMT" },
  { title: "Homelessness & Taking Action", cat: "Community", time: "6 min", author: "Bill Lane" },
  { title: "Fear – False evidence appearing real?", cat: "Personal Growth", time: "7 min", author: "Keaton Van Bryce" },
  { title: "How financially fit are you?", cat: "Wellness", time: "10 min", author: "Dr. Richard Vaillancourt" },
  { title: "Organizational Culture & Emotional Fitness®", cat: "Leadership", time: "12 min", author: "Dr. Richard Vaillancourt" },
  { title: "Trauma Is Our Friend", cat: "Emotional Fitness®", time: "9 min", author: "Darren Duguay" },
  { title: "A Self-Examined Life", cat: "Personal Growth", time: "8 min", author: "EFA Team" },
  { title: "Loving Myself Means Letting Go of My Fears", cat: "Personal Growth", time: "6 min", author: "EFA Team" },
  { title: "Truly, Who Am I?", cat: "Philosophy", time: "11 min", author: "Luciano" },
  { title: "Peeling Back the Layers", cat: "Emotional Fitness®", time: "7 min", author: "EFA Team" },
  { title: "Emotional Fitness® Storytelling", cat: "Emotional Fitness®", time: "5 min", author: "EFA Team" },
  { title: "Co-Creating the More Beautiful World", cat: "Philosophy", time: "9 min", author: "EFA Team" },
  { title: "My Last Chapter", cat: "Personal Growth", time: "8 min", author: "Darren Duguay" },
];
const cats = ["All", "Emotional Fitness®", "Personal Growth", "Leadership", "Community", "Wellness", "Philosophy"];

function BlogPage() {
  const [q, setQ] = useState("");
  const [cat, setCat] = useState("All");
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const total = h.scrollHeight - h.clientHeight;
      setProgress(total > 0 ? (h.scrollTop / total) * 100 : 0);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const filtered = posts.filter((p) => (cat === "All" || p.cat === cat) && (q === "" || p.title.toLowerCase().includes(q.toLowerCase())));

  return (
    <div className="relative">
      <div className="fixed left-0 top-0 z-[60] h-0.5 bg-gradient-glow shadow-glow" style={{ width: `${progress}%` }} />

      <section className="relative pt-40 pb-12 bg-gradient-to-br from-background via-frost/20 to-iceberg-light/10">
        <GradientOrb className="-right-40 top-20" size={500} />
        <div className="mx-auto max-w-5xl px-6 text-center relative z-10">
          <p className="text-xs uppercase tracking-[0.4em] text-accent">Insights & Stories</p>
          <h1 className="mt-4 font-display text-6xl font-light leading-[0.95] sm:text-8xl">
            Emotional Fitness® <span className="text-gradient">Academy Blog</span>
          </h1>
          <p className="mt-6 text-muted-foreground max-w-2xl mx-auto">
            Your destination for personal growth, transformational insights, and real-life stories from the Emotional Fitness Academy community.
          </p>
        </div>
      </section>

      <section className="relative py-12">
        <div className="mx-auto max-w-7xl px-6">
          <ScrollReveal>
            <GlassPanel strong className="relative overflow-hidden !p-10 sm:!p-14">
              <GradientOrb className="-left-40 -top-40" size={500} />
              <div className="relative z-10">
                <p className="text-xs uppercase tracking-[0.3em] text-accent">Featured Article</p>
                <h2 className="mt-3 font-display text-4xl font-light sm:text-5xl max-w-2xl">Trauma Is Our Friend</h2>
                <p className="mt-4 max-w-xl text-muted-foreground">By Darren Duguay, BSc, BEd, EFI, CD1, n.d. — An exploration of connecting within through trauma understanding, and how our experiences shape our emotional fitness journey.</p>
                <button className="mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-glow px-6 py-3 text-sm text-white shadow-glow">Read article <ArrowRight className="h-4 w-4" /></button>
              </div>
            </GlassPanel>
          </ScrollReveal>
        </div>
      </section>

      <section className="relative py-12">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="relative max-w-md flex-1">
              <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search articles" className="w-full glass rounded-full py-3 pl-11 pr-4 text-sm outline-none focus:neon-ring" />
            </div>
            <div className="flex flex-wrap gap-2">
              {cats.map((c) => (
                <button key={c} onClick={() => setCat(c)} className={`rounded-full px-4 py-1.5 text-xs transition-all ${cat === c ? "bg-gradient-glow text-white shadow-glow" : "glass text-muted-foreground hover:text-foreground"}`}>{c}</button>
              ))}
            </div>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filtered.map((p, i) => (
              <ScrollReveal key={p.title} delay={i * 0.05}>
                <motion.div whileHover={{ y: -8 }}>
                  <GlassPanel className="!p-0 overflow-hidden h-full cursor-pointer group">
                    <div className="relative aspect-[16/10] bg-gradient-soft">
                      <div className="absolute inset-0 bg-gradient-glow opacity-15" />
                      <p className="absolute left-4 top-4 rounded-full glass-strong px-3 py-1 text-[10px] uppercase tracking-widest">{p.cat}</p>
                    </div>
                    <div className="p-6">
                      <h3 className="font-display text-xl font-light leading-snug">{p.title}</h3>
                      <p className="mt-2 text-xs text-muted-foreground">By {p.author}</p>
                      <div className="mt-4 flex items-center justify-between text-xs text-muted-foreground">
                        <span className="inline-flex items-center gap-1"><Clock className="h-3 w-3" />{p.time}</span>
                        <span className="inline-flex items-center gap-1 text-gradient">Read <ArrowRight className="h-3 w-3" /></span>
                      </div>
                    </div>
                  </GlassPanel>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}