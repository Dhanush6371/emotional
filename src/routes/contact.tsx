import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import { Mail, MessageCircle, MapPin, Sparkles, Send, Instagram, Linkedin, Youtube, Twitter } from "lucide-react";
import { GlassPanel } from "@/components/fx/GlassPanel";
import { GradientOrb } from "@/components/fx/GradientOrb";
import { ScrollReveal } from "@/components/fx/ScrollReveal";
import { useState } from "react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Emotional Fitness Academy" },
      { name: "description", content: "Reach out to the Academy. Our concierge responds within 24 hours." },
      { property: "og:title", content: "Contact — Emotional Fitness Academy" },
      { property: "og:description", content: "Reach out to the Academy." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);
  return (
    <div className="relative">
      <section className="relative pt-40 pb-12 bg-gradient-to-br from-background via-iceberg-light/8 to-frost/20">
        <GradientOrb className="-left-40 top-20" size={500} />
        <div className="mx-auto max-w-5xl px-6 text-center relative z-10">
          <p className="text-xs uppercase tracking-[0.4em] text-accent">Contact</p>
          <h1 className="mt-4 font-display text-6xl font-light leading-[0.95] sm:text-8xl">
            Say <span className="text-gradient">hello</span>.
          </h1>
        </div>
      </section>

      <section className="relative py-12">
        <div className="mx-auto max-w-7xl px-6 grid gap-6 lg:grid-cols-[1.4fr_1fr]">
          <ScrollReveal>
            <GlassPanel strong className="!p-10">
              {sent ? (
                <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="py-12 text-center">
                  <div className="mx-auto mb-6 inline-flex rounded-full bg-gradient-glow p-4 shadow-glow"><Send className="h-6 w-6 text-white" /></div>
                  <h2 className="font-display text-3xl">Message received.</h2>
                  <p className="mt-2 text-muted-foreground">We'll be in touch within 24 hours.</p>
                </motion.div>
              ) : (
                <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} className="space-y-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <Field label="Your name" placeholder="Aanya Rao" />
                    <Field label="Email" type="email" placeholder="hello@you.com" />
                  </div>
                  <Field label="Subject" placeholder="A new chapter" />
                  <div>
                    <label className="mb-2 block text-xs uppercase tracking-[0.3em] text-muted-foreground">Message</label>
                    <textarea rows={5} className="w-full glass rounded-2xl px-5 py-4 text-sm outline-none focus:neon-ring resize-none" placeholder="Tell us what's alive for you…" />
                  </div>
                  <button type="submit" className="inline-flex items-center gap-2 rounded-full bg-gradient-glow px-7 py-3.5 text-sm font-medium text-white shadow-glow transition-transform hover:scale-105">
                    <Send className="h-4 w-4" /> Send Transmission
                  </button>
                </form>
              )}
            </GlassPanel>
          </ScrollReveal>

          <div className="grid gap-4">
            {[
              { icon: Mail, label: "Email", value: "hello@efacademy.io" },
              { icon: MessageCircle, label: "Chat", value: "24/7 concierge" },
              { icon: MapPin, label: "Studio", value: "Lisbon · Bali · NYC" },
            ].map((c) => (
              <ScrollReveal key={c.label}>
                <GlassPanel className="!p-6 flex items-center gap-4">
                  <div className="rounded-2xl bg-gradient-glow p-3 shadow-glow"><c.icon className="h-5 w-5 text-white" /></div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">{c.label}</p>
                    <p className="font-display text-lg">{c.value}</p>
                  </div>
                </GlassPanel>
              </ScrollReveal>
            ))}
            <ScrollReveal>
              <GlassPanel className="!p-6">
                <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Follow</p>
                <div className="mt-4 flex gap-2">
                  {[Instagram, Linkedin, Youtube, Twitter].map((Icon, i) => (
                    <a key={i} href="#" className="glass rounded-full p-3 transition-transform hover:scale-110"><Icon className="h-4 w-4" /></a>
                  ))}
                </div>
              </GlassPanel>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="relative py-12">
        <div className="mx-auto max-w-7xl px-6 grid gap-6 lg:grid-cols-2">
          <ScrollReveal>
            <GlassPanel strong className="!p-0 overflow-hidden">
              <div className="relative aspect-[16/10] bg-gradient-soft">
                <svg viewBox="0 0 400 250" className="absolute inset-0 h-full w-full opacity-50">
                  {Array.from({ length: 12 }).map((_, i) => (
                    <line key={`h${i}`} x1="0" x2="400" y1={i * 22} y2={i * 22} stroke="url(#g)" strokeWidth="0.5" />
                  ))}
                  {Array.from({ length: 20 }).map((_, i) => (
                    <line key={`v${i}`} y1="0" y2="250" x1={i * 22} x2={i * 22} stroke="url(#g)" strokeWidth="0.5" />
                  ))}
                  <defs>
                    <linearGradient id="g" x1="0" x2="1">
                      <stop offset="0%" stopColor="#7DD3FC" />
                      <stop offset="100%" stopColor="#0EA5E9" />
                    </linearGradient>
                  </defs>
                </svg>
                <motion.div animate={{ scale: [1, 1.3, 1] }} transition={{ duration: 2, repeat: Infinity }} className="absolute left-1/2 top-1/2 h-6 w-6 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-glow shadow-glow" />
              </div>
              <div className="p-6">
                <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Headquarters</p>
                <p className="mt-1 font-display text-lg">Lisbon, Portugal</p>
              </div>
            </GlassPanel>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <GlassPanel strong className="!p-10 h-full flex flex-col justify-center">
              <Sparkles className="h-5 w-5 text-accent" />
              <h3 className="mt-4 font-display text-3xl font-light">Need an answer right now?</h3>
              <p className="mt-3 text-muted-foreground">Our AI concierge is online 24/7 to triage questions about programs, scheduling, and logistics.</p>
              <button className="mt-6 inline-flex w-fit items-center gap-2 rounded-full glass px-6 py-3 text-sm font-medium hover:neon-ring">Chat with EFA AI</button>
            </GlassPanel>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}

function Field({ label, ...rest }: { label: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div>
      <label className="mb-2 block text-xs uppercase tracking-[0.3em] text-muted-foreground">{label}</label>
      <input {...rest} className="w-full glass rounded-full px-5 py-3.5 text-sm outline-none focus:neon-ring" />
    </div>
  );
}