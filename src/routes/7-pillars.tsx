import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { Heart, Target, DollarSign, Activity, Brain, Leaf, Sparkles, ArrowRight, CheckCircle } from "lucide-react";
import { GlassPanel } from "@/components/fx/GlassPanel";
import { GradientOrb } from "@/components/fx/GradientOrb";
import { ScrollReveal } from "@/components/fx/ScrollReveal";
import { MagneticButton } from "@/components/fx/MagneticButton";

export const Route = createFileRoute("/7-pillars")({
    head: () => ({
        meta: [
            { title: "7 Pillars of Self Program — Emotional Fitness Academy" },
            { name: "description", content: "10-week transformational journey through 7 foundational areas of personal growth." },
            { property: "og:title", content: "7 Pillars of Self Program — Emotional Fitness Academy" },
            { property: "og:description", content: "Transform your life through the 7 Pillars: Emotional, Purpose, Financial, Physical, Mental, Environmental, Spiritual." },
        ],
    }),
    component: SevenPillarsPage,
});

const pillars = [
    { icon: Heart, title: "Emotional", question: "What is my heart trying to tell me that I haven't yet paused to hear?", color: "from-rose-500 to-pink-500" },
    { icon: Target, title: "Purpose", question: "What deeper purpose is calling me forward in this season of my life?", color: "from-violet-500 to-purple-500" },
    { icon: DollarSign, title: "Financial", question: "How does my relationship with money reflect how I value myself?", color: "from-emerald-500 to-green-500" },
    { icon: Activity, title: "Physical", question: "In what ways is my body asking for more care, presence, or compassion?", color: "from-orange-500 to-amber-500" },
    { icon: Brain, title: "Mental", question: "How do I respond when life challenges my peace of mind?", color: "from-blue-500 to-cyan-500" },
    { icon: Leaf, title: "Environmental", question: "What environments and traditions help me feel grounded and connected?", color: "from-teal-500 to-emerald-500" },
    { icon: Sparkles, title: "Spiritual", question: "What practices nourish my spirit and help me stay aligned with my truth?", color: "from-indigo-500 to-violet-500" },
];

const outcomes = [
    "Practical tools to regulate and respond with clarity",
    "Deeper sense of purpose and alignment in daily life",
    "Healthier beliefs around money, self-worth, and abundance",
    "Greater connection to your body, energy, and physical well-being",
    "Mindset shifts supporting resilience and self-leadership",
    "Spiritual foundation anchoring you through change",
];

const included = [
    "Pre-program discovery consultation",
    "10 weekly group sessions",
    "Facilitated exploration of each pillar",
    "Reflective tools, worksheets, pillar-based practices",
    "Two individual sessions with instructor",
    "Email/voice note check-ins between sessions",
    "Partially covered by naturopath benefits",
];

function SevenPillarsPage() {
    return (
        <div className="relative">
            {/* Hero Section */}
            <section className="relative pt-40 pb-20 bg-gradient-to-br from-background via-frost/30 to-iceberg-light/10 overflow-hidden">
                <GradientOrb className="left-20 top-40" size={600} />
                <GradientOrb className="-right-20 top-60" size={500} color="rgba(139, 92, 246, 0.15)" />

                <div className="mx-auto max-w-6xl px-6 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center"
                    >
                        <p className="text-xs uppercase tracking-[0.4em] text-accent mb-4">Transform Your Life</p>
                        <h1 className="font-display text-6xl md:text-8xl font-light leading-[0.95] mb-6">
                            Fundamentally Me<br />
                            <span className="text-gradient">7 Pillars of Self</span>
                        </h1>
                        <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                            This 7 Step "To Help Me Help Myself" Program is your gateway to a balanced, vibrant existence
                            where every aspect of your well-being flourishes.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* 7 Pillars Grid */}
            <section className="relative py-24 bg-gradient-to-b from-background to-frost/10">
                <div className="mx-auto max-w-7xl px-6">
                    <ScrollReveal>
                        <h2 className="font-display text-4xl md:text-5xl font-light text-center mb-16">
                            The <span className="text-gradient">7 Pillars</span> of Self
                        </h2>
                    </ScrollReveal>

                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {pillars.map((pillar, i) => (
                            <ScrollReveal key={pillar.title} delay={i * 0.1}>
                                <motion.div
                                    whileHover={{ y: -8, rotateX: 3 }}
                                    transition={{ type: "spring", stiffness: 200, damping: 20 }}
                                    className="h-full"
                                >
                                    <GlassPanel className="h-full !p-8 hover:shadow-glow group">
                                        <div className={`mb-4 inline-flex rounded-2xl bg-gradient-to-br ${pillar.color} p-3 shadow-lg`}>
                                            <pillar.icon className="h-6 w-6 text-white" />
                                        </div>
                                        <h3 className="font-display text-2xl font-light mb-3">{pillar.title}</h3>
                                        <p className="text-sm text-muted-foreground italic leading-relaxed">
                                            "{pillar.question}"
                                        </p>
                                    </GlassPanel>
                                </motion.div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* Program Format */}
            <section className="relative py-24">
                <div className="mx-auto max-w-5xl px-6">
                    <ScrollReveal>
                        <GlassPanel strong className="!p-12">
                            <div className="text-center mb-12">
                                <h2 className="font-display text-4xl font-light mb-4">
                                    The <span className="text-gradient">10-Week</span> Journey
                                </h2>
                                <p className="text-muted-foreground max-w-2xl mx-auto">
                                    Each week, you'll explore one of these pillars through a blend of teachings, guided reflection,
                                    and experiential tools designed to help you reconnect with your purpose and realign with your true self.
                                </p>
                            </div>

                            <div className="grid md:grid-cols-2 gap-8">
                                <div>
                                    <h3 className="font-display text-xl font-light mb-4 flex items-center gap-2">
                                        <CheckCircle className="h-5 w-5 text-accent" />
                                        You'll Walk Away With
                                    </h3>
                                    <ul className="space-y-3">
                                        {outcomes.map((outcome) => (
                                            <li key={outcome} className="flex items-start gap-3 text-sm">
                                                <span className="h-1.5 w-1.5 rounded-full bg-gradient-glow mt-2 flex-shrink-0" />
                                                <span className="text-muted-foreground">{outcome}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div>
                                    <h3 className="font-display text-xl font-light mb-4 flex items-center gap-2">
                                        <CheckCircle className="h-5 w-5 text-accent" />
                                        What's Included
                                    </h3>
                                    <ul className="space-y-3">
                                        {included.map((item) => (
                                            <li key={item} className="flex items-start gap-3 text-sm">
                                                <span className="h-1.5 w-1.5 rounded-full bg-gradient-glow mt-2 flex-shrink-0" />
                                                <span className="text-muted-foreground">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </GlassPanel>
                    </ScrollReveal>
                </div>
            </section>

            {/* How It Works */}
            <section className="relative py-24 bg-gradient-to-b from-frost/5 to-background">
                <div className="mx-auto max-w-6xl px-6">
                    <ScrollReveal>
                        <h2 className="font-display text-4xl font-light text-center mb-16">
                            How It <span className="text-gradient">Works</span>
                        </h2>
                    </ScrollReveal>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { num: "01", title: "Book a Discovery Call", desc: "Schedule a short discovery call to identify what you'd like to improve through this program." },
                            { num: "02", title: "Begin Your Journey", desc: "Each week, explore a different aspect of self through experiential learning and Emotional Fitness® tools." },
                            { num: "03", title: "Rebuild from Within", desc: "By the end, you'll have gained more than insight—you'll have a tool-kit for being fundamentally, authentically, you." },
                        ].map((step, i) => (
                            <ScrollReveal key={step.num} delay={i * 0.15}>
                                <GlassPanel className="!p-8 text-center h-full">
                                    <div className="text-6xl font-display font-light text-gradient mb-4">{step.num}</div>
                                    <h3 className="font-display text-xl font-light mb-3">{step.title}</h3>
                                    <p className="text-sm text-muted-foreground">{step.desc}</p>
                                </GlassPanel>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="relative py-24">
                <div className="mx-auto max-w-6xl px-6">
                    <ScrollReveal>
                        <h2 className="font-display text-4xl font-light text-center mb-16">
                            What Our <span className="text-gradient">Clients Say</span>
                        </h2>
                    </ScrollReveal>

                    <div className="grid md:grid-cols-3 gap-6">
                        {[
                            {
                                quote: "The 7 Pillars of Self program allowed me to assess my own progress in each pillar and brought awareness to areas that need improvement so that I can create a plan to strengthen these pillars in the future.",
                                name: "Client",
                            },
                            {
                                quote: "I never knew this type of self-education existed. Being able to practice listening exercises with others so that I may use them in my own life has been greatly rewarding.",
                                name: "Client",
                            },
                            {
                                quote: "As much as I thought I may have had a handle on the experiences that have so negatively impacted my life, the tools of Emotional Fitness® have taken my transformation to a level I didn't think was available.",
                                name: "Client",
                            },
                        ].map((testimonial, i) => (
                            <ScrollReveal key={i} delay={i * 0.1}>
                                <GlassPanel className="!p-6 h-full">
                                    <p className="text-sm text-muted-foreground italic mb-4">"{testimonial.quote}"</p>
                                    <p className="text-xs font-medium text-gradient">— {testimonial.name}</p>
                                </GlassPanel>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="relative py-24">
                <div className="mx-auto max-w-4xl px-6">
                    <ScrollReveal>
                        <GlassPanel strong className="!p-12 text-center">
                            <h2 className="font-display text-4xl md:text-5xl font-light mb-4">
                                Ready to <span className="text-gradient">Transform</span>?
                            </h2>
                            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                                Have questions or need more info before getting started? We'd love to hear from you.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Link to="/booking">
                                    <MagneticButton>Book Your Discovery Call</MagneticButton>
                                </Link>
                                <Link to="/contact">
                                    <MagneticButton variant="ghost">
                                        Contact Us <ArrowRight className="ml-2 h-4 w-4" />
                                    </MagneticButton>
                                </Link>
                            </div>
                        </GlassPanel>
                    </ScrollReveal>
                </div>
            </section>
        </div>
    );
}
