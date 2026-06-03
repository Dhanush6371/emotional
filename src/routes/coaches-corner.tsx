import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import { Heart, CheckCircle, Sparkles, Users, MessageCircle, Clock } from "lucide-react";
import { GlassPanel } from "@/components/fx/GlassPanel";
import { GradientOrb } from "@/components/fx/GradientOrb";
import { ScrollReveal } from "@/components/fx/ScrollReveal";

export const Route = createFileRoute("/coaches-corner")({
    head: () => ({
        meta: [
            { title: "Coach's Corner — Emotional Fitness Academy" },
            { name: "description", content: "Monthly Emotional Fitness themes, practices, and reflections for personal growth." },
            { property: "og:title", content: "Coach's Corner — Emotional Fitness Academy" },
            { property: "og:description", content: "Monthly Emotional Fitness themes and practices for deepening your journey." },
        ],
    }),
    component: CoachesCornerPage,
});

const holdingSpaceLooks = [
    "Listening without interrupting",
    "Allowing silence without feeling the need to fill it",
    "Being curious rather than assuming",
    "Acknowledging feelings without trying to fix them",
    "Respecting another person's journey and choices",
    "Offering empathy while maintaining healthy boundaries",
];

const reflectionQuestions = [
    "When someone shares a challenge with me, do I listen or immediately try to solve it?",
    "How comfortable am I with silence and uncertainty?",
    "What boundaries help me remain emotionally healthy while supporting others?",
    "Where in my life could I offer more presence and less advice?",
    "How do I know when I need to recharge my own emotional reserves?",
];

const practiceSteps = [
    { num: "01", text: "Pause before responding" },
    { num: "02", text: "Listen with the intention to understand rather than fix" },
    { num: "03", text: "Reflect back what you heard" },
    { num: "04", text: 'Ask, "What would be most helpful for you right now?"' },
    { num: "05", text: "Notice your own emotional state afterward and take a moment to reconnect with yourself" },
];

function CoachesCornerPage() {
    return (
        <div className="relative">
            {/* Hero Section */}
            <section className="relative pt-40 pb-20 bg-gradient-to-br from-background via-amber-950/10 to-orange-950/10 overflow-hidden">
                <GradientOrb className="-left-40 top-20" size={700} color="rgba(251, 146, 60, 0.15)" />
                <GradientOrb className="right-0 top-80" size={500} color="rgba(245, 158, 11, 0.15)" />

                <div className="mx-auto max-w-6xl px-6 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center"
                    >
                        <p className="text-xs uppercase tracking-[0.4em] text-accent mb-4">Coach's Corner</p>
                        <h1 className="font-display text-6xl md:text-8xl font-light leading-[0.95] mb-6">
                            Monthly <span className="text-gradient">Emotional Fitness</span> Theme
                        </h1>
                        <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                            Practical insights, reflections, and practices to deepen your emotional fitness journey
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Current Theme */}
            <section className="relative py-24 bg-gradient-to-b from-background to-frost/10">
                <div className="mx-auto max-w-5xl px-6">
                    <ScrollReveal>
                        <GlassPanel strong className="!p-12 text-center">
                            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-accent mb-4">
                                <Sparkles className="h-4 w-4" />
                                <span>This Month's Theme</span>
                            </div>
                            <h2 className="font-display text-5xl md:text-6xl font-light mb-6">
                                Holding <span className="text-gradient">Space</span>
                            </h2>
                            <p className="text-xl text-muted-foreground">
                                The Art of Being Present for Others While Honouring Yourself
                            </p>
                        </GlassPanel>
                    </ScrollReveal>
                </div>
            </section>

            {/* Introduction */}
            <section className="relative py-24">
                <div className="mx-auto max-w-4xl px-6">
                    <ScrollReveal>
                        <div className="prose prose-lg mx-auto text-muted-foreground">
                            <p className="text-lg leading-relaxed">
                                In a world that often rewards fixing, advising, and rushing to solutions, there is a quieter skill
                                that can have an even greater impact: <span className="text-foreground font-medium">holding space</span>.
                            </p>
                            <p className="mt-6 leading-relaxed">
                                Holding space means being fully present with another person without trying to change, judge, rescue,
                                or control their experience. It is the practice of offering support through presence rather than solutions.
                                It allows others to feel seen, heard, and valued exactly where they are.
                            </p>
                            <p className="mt-6 leading-relaxed">
                                Yet true holding space is not about carrying someone else's emotional load. It is about standing beside
                                them while remaining grounded in your own wellbeing.
                            </p>
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* What Holding Space Looks Like */}
            <section className="relative py-24 bg-gradient-to-b from-frost/5 to-background">
                <div className="mx-auto max-w-6xl px-6">
                    <ScrollReveal>
                        <h2 className="font-display text-4xl font-light text-center mb-4">
                            What Holding Space <span className="text-gradient">Looks Like</span>
                        </h2>
                        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                            Holding space can be as simple as:
                        </p>
                    </ScrollReveal>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {holdingSpaceLooks.map((item, i) => (
                            <ScrollReveal key={item} delay={i * 0.1}>
                                <GlassPanel className="!p-6 h-full">
                                    <div className="flex items-start gap-3">
                                        <div className="mt-1 h-2 w-2 rounded-full bg-gradient-glow flex-shrink-0" />
                                        <p className="text-sm text-muted-foreground leading-relaxed">{item}</p>
                                    </div>
                                </GlassPanel>
                            </ScrollReveal>
                        ))}
                    </div>

                    <ScrollReveal delay={0.3}>
                        <p className="mt-12 text-center text-lg italic text-muted-foreground">
                            Sometimes the most powerful support we can give is our attention.
                        </p>
                    </ScrollReveal>
                </div>
            </section>

            {/* The Balance */}
            <section className="relative py-24">
                <div className="mx-auto max-w-5xl px-6">
                    <ScrollReveal>
                        <GlassPanel strong className="!p-12">
                            <h2 className="font-display text-4xl font-light mb-6">
                                The Balance: <span className="text-gradient">Supporting Others Without Losing Yourself</span>
                            </h2>
                            <p className="text-muted-foreground leading-relaxed mb-8">
                                Many caring individuals, leaders, coaches, parents, and friends naturally put others first.
                                Over time, however, constantly absorbing the emotions of those around us can lead to exhaustion,
                                resentment, or emotional burnout.
                            </p>
                            <p className="text-muted-foreground leading-relaxed mb-8">
                                Holding space effectively requires two commitments:
                            </p>

                            <div className="grid md:grid-cols-2 gap-8">
                                <div className="rounded-2xl bg-white/5 p-6 border border-white/10">
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="rounded-xl bg-gradient-glow p-2">
                                            <Users className="h-5 w-5 text-white" />
                                        </div>
                                        <h3 className="font-display text-xl font-light">1. Presence for Others</h3>
                                    </div>
                                    <p className="text-sm text-muted-foreground">
                                        Showing up with compassion, patience, and openness.
                                    </p>
                                </div>

                                <div className="rounded-2xl bg-white/5 p-6 border border-white/10">
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="rounded-xl bg-gradient-glow p-2">
                                            <Heart className="h-5 w-5 text-white" />
                                        </div>
                                        <h3 className="font-display text-xl font-light">2. Presence for Yourself</h3>
                                    </div>
                                    <p className="text-sm text-muted-foreground">
                                        Recognising your own emotional needs, limits, and boundaries.
                                    </p>
                                </div>
                            </div>

                            <p className="mt-8 text-center text-lg font-medium text-gradient">
                                You do not need to carry someone else's pain to demonstrate that you care.
                            </p>
                        </GlassPanel>
                    </ScrollReveal>
                </div>
            </section>

            {/* Reflection Questions */}
            <section className="relative py-24 bg-gradient-to-b from-frost/10 to-background">
                <div className="mx-auto max-w-5xl px-6">
                    <ScrollReveal>
                        <h2 className="font-display text-4xl font-light text-center mb-4">
                            Reflection <span className="text-gradient">Questions</span>
                        </h2>
                        <p className="text-center text-muted-foreground mb-12">
                            Take a moment to consider:
                        </p>
                    </ScrollReveal>

                    <div className="space-y-4">
                        {reflectionQuestions.map((question, i) => (
                            <ScrollReveal key={i} delay={i * 0.08}>
                                <GlassPanel className="!p-6">
                                    <div className="flex items-start gap-4">
                                        <div className="mt-1 flex-shrink-0 h-6 w-6 rounded-full bg-gradient-glow flex items-center justify-center">
                                            <span className="text-xs text-white font-medium">{i + 1}</span>
                                        </div>
                                        <p className="text-muted-foreground leading-relaxed">{question}</p>
                                    </div>
                                </GlassPanel>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* This Month's Practice */}
            <section className="relative py-24">
                <div className="mx-auto max-w-5xl px-6">
                    <ScrollReveal>
                        <GlassPanel strong className="!p-12">
                            <div className="text-center mb-10">
                                <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-accent mb-4">
                                    <MessageCircle className="h-4 w-4" />
                                    <span>This Month's Emotional Fitness Practice</span>
                                </div>
                                <h2 className="font-display text-4xl font-light mb-4">
                                    The <span className="text-gradient">Three-Minute Pause</span>
                                </h2>
                                <p className="text-muted-foreground">
                                    The next time someone shares something difficult:
                                </p>
                            </div>

                            <div className="space-y-4 max-w-3xl mx-auto">
                                {practiceSteps.map((step, i) => (
                                    <motion.div
                                        key={step.num}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ delay: i * 0.1 }}
                                        viewport={{ once: true }}
                                        className="flex items-start gap-4"
                                    >
                                        <div className="flex-shrink-0 text-3xl font-display font-light text-gradient">
                                            {step.num}
                                        </div>
                                        <p className="pt-2 text-muted-foreground leading-relaxed">{step.text}</p>
                                    </motion.div>
                                ))}
                            </div>

                            <p className="mt-10 text-center text-muted-foreground italic">
                                Small moments of mindful presence can strengthen relationships, build trust, and deepen connection.
                            </p>
                        </GlassPanel>
                    </ScrollReveal>
                </div>
            </section>

            {/* Coach's Thought */}
            <section className="relative py-24 bg-gradient-to-b from-background to-frost/10">
                <div className="mx-auto max-w-4xl px-6">
                    <ScrollReveal>
                        <GlassPanel className="!p-12 text-center relative overflow-hidden">
                            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-glow" />
                            <p className="text-xs uppercase tracking-[0.3em] text-accent mb-6">Coach's Thought for the Month</p>
                            <blockquote className="text-xl md:text-2xl font-light leading-relaxed text-muted-foreground italic">
                                "Sometimes people don't need answers. They need a safe place to be heard, understood, and accepted.
                                Holding space is one of the greatest gifts we can offer—both to others and to ourselves."
                            </blockquote>
                        </GlassPanel>
                    </ScrollReveal>
                </div>
            </section>

            {/* Challenge Section */}
            <section className="relative py-24">
                <div className="mx-auto max-w-5xl px-6">
                    <ScrollReveal>
                        <GlassPanel strong className="!p-12 text-center">
                            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-accent mb-4">
                                <CheckCircle className="h-4 w-4" />
                                <span>Your Emotional Fitness Challenge</span>
                            </div>
                            <h2 className="font-display text-4xl md:text-5xl font-light mb-6">
                                This Month's <span className="text-gradient">Challenge</span>
                            </h2>
                            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-4">
                                This month, choose one conversation each day where your goal is simply to be present.
                                Listen deeply, respond thoughtfully, and allow yourself to remain grounded in your own wellbeing.
                            </p>
                            <p className="text-muted-foreground italic max-w-2xl mx-auto">
                                Because emotional fitness isn't just about managing our own emotions—it's also about creating
                                space for others while honouring our own needs.
                            </p>
                        </GlassPanel>
                    </ScrollReveal>
                </div>
            </section>
        </div>
    );
}
