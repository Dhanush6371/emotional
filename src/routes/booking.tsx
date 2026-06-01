import { createFileRoute } from "@tanstack/react-router";
import { motion, AnimatePresence } from "motion/react";
import { Check, ChevronLeft, ChevronRight, Sparkles, Calendar as CalIcon } from "lucide-react";
import { GlassPanel } from "@/components/fx/GlassPanel";
import { GradientOrb } from "@/components/fx/GradientOrb";
import { useState } from "react";

export const Route = createFileRoute("/booking")({
  head: () => ({
    meta: [
      { title: "Book a Session — Emotional Fitness Academy" },
      { name: "description", content: "Reserve a cinematic 1:1 session with an Emotional Fitness master coach." },
      { property: "og:title", content: "Book a Session — Emotional Fitness Academy" },
      { property: "og:description", content: "Reserve a cinematic 1:1 session." },
    ],
  }),
  component: BookingPage,
});

const slots = ["08:00", "09:30", "11:00", "13:00", "15:30", "17:00", "19:00"];

function BookingPage() {
  const [step, setStep] = useState(0);
  const [date, setDate] = useState<number | null>(null);
  const [slot, setSlot] = useState<string | null>(null);
  const [intent, setIntent] = useState("");
  const today = new Date();
  const days = Array.from({ length: 28 }, (_, i) => i + 1);

  const next = () => setStep((s) => Math.min(s + 1, 3));
  const back = () => setStep((s) => Math.max(s - 1, 0));

  return (
    <div className="relative min-h-screen pt-32 pb-20 bg-gradient-to-b from-background via-frost/30 to-background">
      <GradientOrb className="-left-40 top-20" size={500} />
      <GradientOrb className="-right-40 bottom-0" size={500} />
      <div className="mx-auto max-w-4xl px-6 relative z-10">
        <div className="text-center">
          <p className="text-xs uppercase tracking-[0.4em] text-accent">Booking</p>
          <h1 className="mt-3 font-display text-5xl font-light sm:text-6xl">
            Reserve your <span className="text-gradient">resonance</span>.
          </h1>
        </div>

        <div className="mt-12 flex items-center justify-center gap-2">
          {["Intent", "Date", "Time", "Confirm"].map((s, i) => (
            <div key={s} className="flex items-center gap-2">
              <div className={`flex h-8 w-8 items-center justify-center rounded-full text-xs ${i <= step ? "bg-gradient-glow text-white shadow-glow" : "glass text-muted-foreground"}`}>
                {i < step ? <Check className="h-3.5 w-3.5" /> : i + 1}
              </div>
              {i < 3 && <div className={`h-px w-10 ${i < step ? "bg-gradient-glow" : "bg-border"}`} />}
            </div>
          ))}
        </div>

        <GlassPanel strong className="mt-10 !p-10 sm:!p-14 overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={step}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.4 }}
            >
              {step === 0 && (
                <div>
                  <div className="flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-accent"><Sparkles className="h-3.5 w-3.5" /> AI Intake</div>
                  <h2 className="mt-3 font-display text-3xl font-light">What's calling you here?</h2>
                  <div className="mt-6 grid gap-3 sm:grid-cols-2">
                    {["Stress & overwhelm", "Burnout recovery", "Relational clarity", "Performance & focus", "Spiritual integration", "Just curious"].map((i) => (
                      <button
                        key={i}
                        onClick={() => setIntent(i)}
                        className={`rounded-2xl px-5 py-4 text-left text-sm transition-all ${intent === i ? "bg-gradient-glow text-white shadow-glow" : "glass hover:neon-ring"}`}
                      >
                        {i}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {step === 1 && (
                <div>
                  <div className="flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-accent"><CalIcon className="h-3.5 w-3.5" /> Choose a day</div>
                  <h2 className="mt-3 font-display text-3xl font-light">{today.toLocaleString("en", { month: "long", year: "numeric" })}</h2>
                  <div className="mt-6 grid grid-cols-7 gap-2">
                    {["S", "M", "T", "W", "T", "F", "S"].map((d, i) => (
                      <p key={i} className="text-center text-xs text-muted-foreground">{d}</p>
                    ))}
                    {days.map((d) => (
                      <button
                        key={d}
                        onClick={() => setDate(d)}
                        className={`aspect-square rounded-2xl text-sm transition-all ${date === d ? "bg-gradient-glow text-white shadow-glow" : "glass hover:neon-ring"}`}
                      >
                        {d}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {step === 2 && (
                <div>
                  <div className="text-xs uppercase tracking-[0.3em] text-accent">Choose a time</div>
                  <h2 className="mt-3 font-display text-3xl font-light">Available slots</h2>
                  <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
                    {slots.map((s) => (
                      <motion.button
                        key={s}
                        whileHover={{ scale: 1.05 }}
                        onClick={() => setSlot(s)}
                        className={`rounded-full px-4 py-3 text-sm transition-all ${slot === s ? "bg-gradient-glow text-white shadow-glow" : "glass hover:neon-ring"}`}
                      >
                        {s}
                      </motion.button>
                    ))}
                  </div>
                </div>
              )}

              {step === 3 && (
                <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="text-center py-6">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1, rotate: 360 }}
                    transition={{ duration: 0.8, ease: "backOut" }}
                    className="mx-auto mb-6 inline-flex rounded-full bg-gradient-glow p-5 shadow-glow"
                  >
                    <Check className="h-8 w-8 text-white" />
                  </motion.div>
                  <h2 className="font-display text-4xl font-light">You're in.</h2>
                  <p className="mt-3 text-muted-foreground">
                    {intent || "Discovery"} · {date ? `Day ${date}` : "—"} · {slot || "—"}
                  </p>
                  <p className="mt-2 text-xs text-muted-foreground">Confirmation transmitted to your inbox.</p>
                </motion.div>
              )}
            </motion.div>
          </AnimatePresence>

          {step < 3 && (
            <div className="mt-10 flex items-center justify-between">
              <button
                onClick={back}
                disabled={step === 0}
                className="inline-flex items-center gap-1 text-sm text-muted-foreground transition hover:text-foreground disabled:opacity-30"
              >
                <ChevronLeft className="h-4 w-4" /> Back
              </button>
              <button
                onClick={next}
                disabled={(step === 0 && !intent) || (step === 1 && !date) || (step === 2 && !slot)}
                className="inline-flex items-center gap-2 rounded-full bg-gradient-glow px-6 py-3 text-sm font-medium text-white shadow-glow transition-transform hover:scale-105 disabled:opacity-50 disabled:hover:scale-100"
              >
                {step === 2 ? "Confirm" : "Continue"} <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          )}
        </GlassPanel>
      </div>
    </div>
  );
}