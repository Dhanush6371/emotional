import { createFileRoute } from "@tanstack/react-router";
import { motion, AnimatePresence } from "motion/react";
import { Check, ArrowRight, Send, Calendar as CalIcon } from "lucide-react";
import { GlassPanel } from "@/components/fx/GlassPanel";
import { GradientOrb } from "@/components/fx/GradientOrb";
import { useState } from "react";

export const Route = createFileRoute("/booking")({
  head: () => ({
    meta: [
      { title: "Book Your Discovery Call — Emotional Fitness Academy" },
      { name: "description", content: "Begin your journey with a guided intake and discovery call booking." },
      { property: "og:title", content: "Book Your Discovery Call — Emotional Fitness Academy" },
      { property: "og:description", content: "Take a few quiet moments with yourself before booking your first session." },
    ],
  }),
  component: BookingPage,
});

const intakeQuestions = [
  { id: "name", label: "What is your full name?", guide: "This is simply so we know who we're welcoming.", type: "text" as const },
  { id: "email", label: "What is the best email address to reach you?", guide: "", type: "email" as const },
  { id: "phone", label: "What is your phone number?", guide: "", type: "tel" as const },
  { id: "source", label: "How did you hear about the Emotional Fitness® Academy?", guide: "Sometimes the path that leads us somewhere is worth noting.", type: "text" as const },
  { id: "personal", label: "What do you commit to achieving for yourself personally through this journey?", guide: "There are no right answers here. What feels true for you right now?", type: "textarea" as const },
  { id: "professional", label: "What do you commit to achieving professionally through this journey?", guide: "Consider what you'd love to feel differently about in your work life.", type: "textarea" as const },
  {
    id: "offering",
    label: "Which offering are you most drawn to?",
    guide: "Trust your instinct — your coach will explore this with you.",
    type: "select" as const,
    options: [
      "1-on-1 Naturopath Consultation",
      "Fundamentally Me: 7 Pillars of Self",
      "Emotional Fitness® Coach Training Course",
      "I'm not sure yet"
    ]
  },
  {
    id: "coverage",
    label: "Do you have naturopath coverage through your benefits plan?",
    guide: "Sessions may be covered — your coach can share more details when you meet.",
    type: "select" as const,
    options: ["Yes", "No", "Not sure"]
  },
  { id: "additional", label: "Is there anything else you'd like your coach to know before your first conversation?", guide: "This is your space. Share as little or as much as feels right.", type: "textarea" as const, optional: true },
];

function BookingPage() {
  const [stage, setStage] = useState<"welcome" | "questions" | "confirmation" | "calendar">("welcome");
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [formData, setFormData] = useState<Record<string, string>>({});
  const [commitment, setCommitment] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleNext = () => {
    if (currentQuestion < intakeQuestions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
    } else if (!commitment) {
      // Stay on last question until commitment is made
    } else {
      handleSubmit();
    }
  };

  const handleBack = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(prev => prev - 1);
    }
  };

  const handleSubmit = async () => {
    setSubmitting(true);
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    setStage("confirmation");
    setSubmitting(false);
  };

  const currentQ = intakeQuestions[currentQuestion];
  const progress = ((currentQuestion + 1) / intakeQuestions.length) * 100;
  const canContinue = formData[currentQ.id] || currentQ.optional;

  return (
    <div className="relative min-h-screen pt-24 pb-20 bg-gradient-to-br from-background via-frost/30 to-iceberg-light/10 overflow-hidden">
      {/* Animated Gradient Background */}
      <div className="fixed inset-0 bg-gradient-to-br from-cyan-500/5 via-blue-500/5 to-purple-500/5 animate-pulse" style={{ animationDuration: "8s" }} />

      <GradientOrb className="-left-40 top-20" size={700} />
      <GradientOrb className="-right-40 bottom-20" size={600} color="rgba(139, 92, 246, 0.15)" />

      {/* Rotating Medicine Wheel Watermark */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
        className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.03] pointer-events-none"
        style={{ width: "600px", height: "600px" }}
      >
        <svg viewBox="0 0 200 200" className="w-full h-full text-accent">
          <circle cx="100" cy="100" r="90" fill="none" stroke="currentColor" strokeWidth="1" />
          <circle cx="100" cy="100" r="60" fill="none" stroke="currentColor" strokeWidth="1" />
          <circle cx="100" cy="100" r="30" fill="none" stroke="currentColor" strokeWidth="1" />
          <line x1="100" y1="10" x2="100" y2="190" stroke="currentColor" strokeWidth="1" />
          <line x1="10" y1="100" x2="190" y2="100" stroke="currentColor" strokeWidth="1" />
        </svg>
      </motion.div>

      <div className="mx-auto max-w-3xl px-6 relative z-10">
        <AnimatePresence mode="wait">
          {/* Welcome Screen */}
          {stage === "welcome" && (
            <motion.div
              key="welcome"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="text-center"
            >
              <GlassPanel strong className="!p-12 sm:!p-16">
                <h1 className="font-display text-4xl sm:text-5xl font-light leading-tight mb-8" style={{ fontFamily: "Cinzel, serif" }}>
                  Before booking your <span className="text-gradient">discovery call</span>
                </h1>
                <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-8">
                  We'd like to invite you to take a few quiet moments with yourself. Your coach will read your reflections
                  before your first meeting — so your time together can begin where you truly are.
                </p>
                <button
                  onClick={() => setStage("questions")}
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-glow px-8 py-4 text-lg font-medium text-white shadow-glow transition-all hover:scale-105"
                >
                  I'm Ready <ArrowRight className="h-5 w-5" />
                </button>
              </GlassPanel>
            </motion.div>
          )}

          {/* Intake Questions */}
          {stage === "questions" && (
            <motion.div
              key="questions"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              {/* Medicine Wheel Progress Indicator */}
              <div className="mb-8 flex justify-center">
                <div className="relative w-24 h-24">
                  <svg className="w-full h-full -rotate-90">
                    <circle
                      cx="48"
                      cy="48"
                      r="40"
                      fill="none"
                      stroke="rgba(125, 211, 252, 0.2)"
                      strokeWidth="4"
                    />
                    <circle
                      cx="48"
                      cy="48"
                      r="40"
                      fill="none"
                      stroke="rgb(125, 211, 252)"
                      strokeWidth="4"
                      strokeDasharray={`${2 * Math.PI * 40}`}
                      strokeDashoffset={`${2 * Math.PI * 40 * (1 - progress / 100)}`}
                      strokeLinecap="round"
                      style={{ transition: "stroke-dashoffset 0.5s ease" }}
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-sm font-medium text-accent">{currentQuestion + 1}/{intakeQuestions.length}</span>
                  </div>
                </div>
              </div>

              <GlassPanel strong className="!p-8 sm:!p-12">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentQuestion}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <label className="block mb-6">
                      <span className="block text-xl sm:text-2xl font-light mb-2">{currentQ.label}</span>
                      {currentQ.guide && (
                        <span className="block text-sm text-muted-foreground italic mb-6">"{currentQ.guide}"</span>
                      )}

                      {currentQ.type === "textarea" ? (
                        <textarea
                          value={formData[currentQ.id] || ""}
                          onChange={(e) => setFormData({ ...formData, [currentQ.id]: e.target.value })}
                          rows={5}
                          className="w-full glass rounded-2xl px-5 py-4 text-base outline-none focus:neon-ring resize-none"
                          placeholder="Your reflection..."
                        />
                      ) : currentQ.type === "select" ? (
                        <select
                          value={formData[currentQ.id] || ""}
                          onChange={(e) => setFormData({ ...formData, [currentQ.id]: e.target.value })}
                          className="w-full glass rounded-2xl px-5 py-4 text-base outline-none focus:neon-ring"
                        >
                          <option value="">Choose an option...</option>
                          {currentQ.options?.map((opt) => (
                            <option key={opt} value={opt}>{opt}</option>
                          ))}
                        </select>
                      ) : (
                        <input
                          type={currentQ.type}
                          value={formData[currentQ.id] || ""}
                          onChange={(e) => setFormData({ ...formData, [currentQ.id]: e.target.value })}
                          className="w-full glass rounded-2xl px-5 py-4 text-base outline-none focus:neon-ring"
                          placeholder="Your answer..."
                        />
                      )}
                    </label>

                    {/* Commitment Checkbox (only on last question) */}
                    {currentQuestion === intakeQuestions.length - 1 && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mt-8 pt-8 border-t border-white/10"
                      >
                        <label className="flex items-start gap-4 cursor-pointer group">
                          <div className="relative mt-1">
                            <input
                              type="checkbox"
                              checked={commitment}
                              onChange={(e) => setCommitment(e.target.checked)}
                              className="sr-only"
                            />
                            <div className={`w-7 h-7 rounded-full border-2 transition-all ${commitment ? "border-cyan-400 bg-cyan-400/20" : "border-white/30"}`}>
                              {commitment && (
                                <motion.div
                                  initial={{ scale: 0 }}
                                  animate={{ scale: 1 }}
                                  className="w-full h-full rounded-full bg-cyan-400 flex items-center justify-center"
                                >
                                  <Check className="h-5 w-5 text-background" strokeWidth={3} />
                                </motion.div>
                              )}
                            </div>
                          </div>
                          <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                            I commit to showing up with openness and honesty — for myself.
                          </span>
                        </label>
                      </motion.div>
                    )}
                  </motion.div>
                </AnimatePresence>

                <div className="mt-8 flex items-center justify-between">
                  <button
                    onClick={handleBack}
                    disabled={currentQuestion === 0}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
                  >
                    ← Back
                  </button>
                  <button
                    onClick={handleNext}
                    disabled={!canContinue || (currentQuestion === intakeQuestions.length - 1 && !commitment) || submitting}
                    className={`inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-all disabled:opacity-30 disabled:cursor-not-allowed ${canContinue && (currentQuestion < intakeQuestions.length - 1 || commitment)
                      ? "bg-gradient-glow text-white shadow-glow"
                      : "glass text-muted-foreground"
                      }`}
                  >
                    {submitting ? "Submitting..." : currentQuestion === intakeQuestions.length - 1 ? "Submit" : "Continue"}
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </GlassPanel>
            </motion.div>
          )}

          {/* Confirmation Screen */}
          {stage === "confirmation" && (
            <motion.div
              key="confirmation"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
            >
              <GlassPanel strong className="!p-12 sm:!p-16 text-center">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: "spring" }}
                  className="mx-auto mb-8 inline-flex rounded-full bg-gradient-glow p-4 shadow-glow"
                >
                  <Send className="h-8 w-8 text-white" />
                </motion.div>

                <h2 className="font-display text-3xl sm:text-4xl font-light mb-6" style={{ fontFamily: "Cinzel, serif" }}>
                  Thank you for taking this time with yourself.
                </h2>

                <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-8">
                  Your reflections have been received. When you and your coach meet,
                  the conversation can begin where you truly are.
                </p>

                {/* Display Summary of Responses */}
                <div className="glass rounded-2xl p-6 mb-8 text-left max-w-2xl mx-auto">
                  <p className="text-sm font-medium text-foreground mb-4">Your Reflections:</p>
                  <div className="space-y-4 max-h-96 overflow-y-auto">
                    {intakeQuestions.map((q) => {
                      const answer = formData[q.id];
                      if (!answer) return null;
                      return (
                        <div key={q.id} className="pb-4 border-b border-white/10 last:border-0">
                          <p className="text-xs text-accent mb-1">{q.label}</p>
                          <p className="text-sm text-muted-foreground">{answer}</p>
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div className="glass rounded-2xl p-6 mb-8 text-left max-w-xl mx-auto">
                  <p className="text-sm text-muted-foreground mb-4">
                    <strong className="text-foreground">What happens next:</strong>
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                      <span>You'll receive a confirmation email with a copy of your reflections</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                      <span>Your coach (darren.d@efitacademy.ca) has been notified and will review your intake</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                      <span>Now you can choose a time that feels right for your discovery call</span>
                    </li>
                  </ul>
                </div>

                <button
                  onClick={() => setStage("calendar")}
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-glow px-8 py-4 text-lg font-medium text-white shadow-glow transition-all hover:scale-105"
                >
                  Choose Your Time <CalIcon className="h-5 w-5" />
                </button>
              </GlassPanel>
            </motion.div>
          )}

          {/* Calendar Booking */}
          {stage === "calendar" && (
            <motion.div
              key="calendar"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <div className="text-center mb-8">
                <h2 className="font-display text-3xl sm:text-4xl font-light mb-4">
                  Your coach is ready to <span className="text-gradient">meet you</span>
                </h2>
                <p className="text-muted-foreground">Choose a time that feels right.</p>
              </div>

              <GlassPanel strong className="!p-8 sm:!p-12">
                {/* Office Hours Info */}
                <div className="mb-8 text-center">
                  <p className="text-xs uppercase tracking-[0.3em] text-accent mb-4">Office Hours (ADT)</p>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs text-muted-foreground max-w-2xl mx-auto">
                    <div>Mon, Tue, Thu: 7am-8pm</div>
                    <div>Wednesday: 7am-5pm</div>
                    <div>Friday: 7am-12pm</div>
                    <div>Saturday: 10am-1pm</div>
                    <div className="col-span-2 sm:col-span-1">Sunday: Closed</div>
                  </div>
                </div>

                {/* Calendar */}
                <div className="mb-8">
                  <p className="text-sm text-muted-foreground mb-4 text-center">Select a date</p>
                  <div className="max-w-md mx-auto">
                    <div className="grid grid-cols-7 gap-2 mb-2">
                      {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
                        <div key={day} className="text-center text-xs text-muted-foreground font-medium">{day}</div>
                      ))}
                    </div>
                    <div className="grid grid-cols-7 gap-2">
                      {Array.from({ length: 35 }, (_, i) => i + 1).map((day) => (
                        <button
                          key={day}
                          className="aspect-square rounded-xl glass hover:bg-gradient-glow hover:text-white transition-all text-sm"
                        >
                          {day}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Time Slots */}
                <div className="mb-8">
                  <p className="text-sm text-muted-foreground mb-4 text-center">Select a time</p>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-2xl mx-auto">
                    {["9:00 AM", "10:30 AM", "1:00 PM", "2:30 PM", "4:00 PM", "5:30 PM", "7:00 PM"].map((time) => (
                      <button
                        key={time}
                        className="rounded-full glass px-4 py-3 text-sm hover:bg-gradient-glow hover:text-white transition-all"
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Confirm Button */}
                <div className="text-center mb-8">
                  <button className="inline-flex items-center gap-2 rounded-full bg-gradient-glow px-8 py-4 text-lg font-medium text-white shadow-glow transition-all hover:scale-105">
                    Confirm Booking
                  </button>
                </div>

                {/* Alternative: Direct Contact */}
                <div className="text-center glass rounded-2xl p-6">
                  <p className="text-sm text-muted-foreground mb-2">
                    Prefer to book directly?
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <a href="mailto:darren.d@efitacademy.ca" className="text-accent hover:text-accent/80 transition-colors">
                      darren.d@efitacademy.ca
                    </a>
                    <span className="hidden sm:inline text-muted-foreground">•</span>
                    <a href="tel:+15068507592" className="text-accent hover:text-accent/80 transition-colors">
                      (506) 850-7592
                    </a>
                  </div>
                </div>
              </GlassPanel>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
