import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { Ear, BookOpen, Scale, Clock, Users, MessageCircle, Sparkles, Moon, Eye, CheckCircle, GraduationCap, ArrowRight } from "lucide-react";
import { GlassPanel } from "@/components/fx/GlassPanel";
import { GradientOrb } from "@/components/fx/GradientOrb";
import { ScrollReveal } from "@/components/fx/ScrollReveal";
import { MagneticButton } from "@/components/fx/MagneticButton";

export const Route = createFileRoute("/coach-training")({
    head: () => ({
        meta: [
            { title: "Coach Training Course — Emotional Fitness Academy" },
            { name: "description", content: "122-hour modular certification program in Emotional Fitness® coaching. Learn the 9 Steps to Emotional Fitness®." },
            { property: "og:title", content: "Emotional Fitness® Coach Training Course" },
            { property: "og:description", content: "Become a certified Emotional Fitness® Practitioner through our comprehensive 122-hour training program." },
        ],
    }),
    component: CoachTrainingPage,
});

const nineSteps = [
    { icon: Ear, title: "Listening Power", desc: "Five stages of powerful listening for better relationships" },
    { icon: BookOpen, title: "Learning From Experience", desc: "Review experiences to develop learning opportunities" },
    { icon: Scale, title: "Lifescale", desc: "Ten questions to discover greater balance" },
    { icon: Clock, title: "Time Capsule", desc: "Connect present patterns to previous experiences" },
    { icon: Users, title: "Group Dialogue", desc: "Seven-stage process for group listening and learning" },
    { icon: MessageCircle, title: "Storytelling", desc: "Create and learn from your own life stories" },
    { icon: Moon, title: "Dreamtime", desc: "Step-by-step personal dream interpretation process" },
    { icon: Eye, title: "The Mirror", desc: "Practice of true self-acknowledgment" },
    { icon: Sparkles, title: "Connections", desc: "Use personal symbols for deeper level connections" },
];

const whoItsFor = [
    "Wellness professionals pursuing certification",
    "Leaders and changemakers expanding listening capacity",
    "Support workers and caregivers preventing burnout",
    "Teams seeking deeper cohesion and connection",
    "Individuals navigating personal growth or major life transitions",
];

const outcomes = [
    "Certification-ready training hours",
    "Deepened emotional awareness and practical resilience tools",
    "Increased confidence, clarity, and personal integrity",
    "Stronger relationships and team communication",
    "Skills to support others through challenge and growth",
    "Foundation for ongoing self-leadership and service",
];

const included = [
    "Pre-program discovery consultation",
    "Training in flexible modules (122 hours)",
    "Emotional Fitness® framework and 9 listening tools",
    "Three individual sessions with instructor",
    "Ongoing support via email or voice note",
    "Code of Professional Conduct & Ethics adherence",
    "Delivery: in-person, virtual, or hybrid",
    "Customized workshops & masterclasses (upon request)",
];

function CoachTrainingPage() {
    return (
        <div className="relative">
            {/* Hero Section */}
            <section className="relative pt-40 pb-20 bg-gradient-to-br from-background via-violet-950/10 to-purple-950/10 overflow-hidden">
                <GradientOrb className="-left-40 top-20" size={700} color="rgba(139, 92, 246, 0.15)" />
                <GradientOrb className="right-0 top-80" size={500} />

                <div className="mx-auto max-w-6xl px-6 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center"
                    >
                        <p className="text-xs uppercase tracking-[0.4em] text-accent mb-4">Certification Program</p>
                        <h1 className="font-display text-6xl md:text-8xl font-light leading-[0.95] mb-6">
                            Emotional Fitness®<br />
                            <span className="text-gradient">Coach Training Course</span>
                        </h1>
                        <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-8">
                            A modular Emotional Fitness® journey—designed for personal evolution or professional development,
                            with certification options available.
                        </p>
                        <div className="inline-flex items-center gap-2 text-sm text-muted-foreground">
                            <GraduationCap className="h-5 w-5 text-accent" />
                            <span>122-hour comprehensive training • Flexible format • Globally recognized</span>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* The 9 Steps */}
            <section className="relative py-24 bg-gradient-to-b from-background to-frost/10">
                <div className="mx-auto max-w-7xl px-6">
                    <ScrollReveal>
                        <div className="text-center mb-16">
                            <h2 className="font-display text-4xl md:text-5xl font-light mb-4">
                                The <span className="text-gradient">9 Steps</span> to Emotional Fitness®
                            </h2>
                            <p className="text-muted-foreground max-w-2xl mx-auto">
                                A tool-kit for life in the 21st century
                            </p>
                        </div>
                    </ScrollReveal>

                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {nineSteps.map((step, i) => (
                            <ScrollReveal key={step.title} delay={i * 0.08}>
                                <motion.div
                                    whileHover={{ y: -8, rotateX: 3 }}
                                    transition={{ type: "spring", stiffness: 200, damping: 20 }}
                                    className="h-full"
                                >
                                    <GlassPanel className="h-full !p-8 hover:shadow-glow group">
                                        <div className="mb-4 inline-flex rounded-2xl bg-gradient-glow p-3 shadow-lg">
                                            <step.icon className="h-6 w-6 text-white" />
                                        </div>
                                        <div className="flex items-start gap-3 mb-3">
                                            <span className="text-3xl font-display font-light text-gradient">0{i + 1}</span>
                                            <h3 className="font-display text-xl font-light mt-1">{step.title}</h3>
                                        </div>
                                        <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
                                    </GlassPanel>
                                </motion.div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* Who It's For & What's Included */}
            <section className="relative py-24">
                <div className="mx-auto max-w-6xl px-6">
                    <div className="grid md:grid-cols-2 gap-8">
                        <ScrollReveal>
                            <GlassPanel strong className="!p-10 h-full">
                                <h2 className="font-display text-3xl font-light mb-6">
                                    Who It's <span className="text-gradient">For</span>
                                </h2>
                                <ul className="space-y-4">
                                    {whoItsFor.map((item) => (
                                        <li key={item} className="flex items-start gap-3">
                                            <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                                            <span className="text-muted-foreground">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </GlassPanel>
                        </ScrollReveal>

                        <ScrollReveal delay={0.2}>
                            <GlassPanel strong className="!p-10 h-full">
                                <h2 className="font-display text-3xl font-light mb-6">
                                    What's <span className="text-gradient">Included</span>
                                </h2>
                                <ul className="space-y-4">
                                    {included.map((item) => (
                                        <li key={item} className="flex items-start gap-3">
                                            <span className="h-1.5 w-1.5 rounded-full bg-gradient-glow flex-shrink-0 mt-2" />
                                            <span className="text-sm text-muted-foreground">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </GlassPanel>
                        </ScrollReveal>
                    </div>
                </div>
            </section>

            {/* Outcomes */}
            <section className="relative py-24 bg-gradient-to-b from-frost/5 to-background">
                <div className="mx-auto max-w-5xl px-6">
                    <ScrollReveal>
                        <GlassPanel strong className="!p-12">
                            <h2 className="font-display text-3xl font-light text-center mb-8">
                                You'll Walk Away <span className="text-gradient">With</span>
                            </h2>
                            <div className="grid md:grid-cols-2 gap-6">
                                {outcomes.map((outcome) => (
                                    <div key={outcome} className="flex items-start gap-3">
                                        <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                                        <span className="text-muted-foreground">{outcome}</span>
                                    </div>
                                ))}
                            </div>
                        </GlassPanel>
                    </ScrollReveal>
                </div>
            </section>

            {/* How It Works */}
            <section className="relative py-24">
                <div className="mx-auto max-w-6xl px-6">
                    <ScrollReveal>
                        <h2 className="font-display text-4xl font-light text-center mb-16">
                            How We <span className="text-gradient">Work Together</span>
                        </h2>
                    </ScrollReveal>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { num: "01", title: "Book a Discovery Call", desc: "Schedule a short call to identify what you'd like to improve personally and professionally through this program." },
                            { num: "02", title: "Design the Experience", desc: "Each module, explore a different aspect of your development through experimental learning of the Emotional Fitness® approach and tools." },
                            { num: "03", title: "Dive Deep & Transform", desc: "Across a series of transformational modules, gain embodied experience with tools that will serve you as a tool-kit for life." },
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
            <section className="relative py-24 bg-gradient-to-b from-frost/10 to-background">
                <div className="mx-auto max-w-6xl px-6">
                    <ScrollReveal>
                        <h2 className="font-display text-4xl font-light text-center mb-16">
                            What Our <span className="text-gradient">Graduates Say</span>
                        </h2>
                    </ScrollReveal>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            { quote: "The 7 Pillars of Self program allowed me to assess my own progress in each pillar of self and brought awareness to areas that need improvement so that I can create a plan to strengthen these pillars in the future." },
                            { quote: "I have never felt so good in my life. I have been caught up in addiction for over 20 years. Now I'm stronger than ever, I've learned tools to steer myself in a better way of life." },
                            { quote: "Before starting this journey, I often felt overwhelmed by stress and struggled to manage effectively. The course provided me with tools that have helped me navigate challenging situations with greater ease." },
                            { quote: "Emotional Fitness® is an amazing program for self discovery that is very different than traditional and conventional approaches. I am now an instructor. I now have listening tools to support groups." },
                            { quote: "This course has given me different tools to discover that every problem, when looked at in the right way, is here to teach me something to grow from and become a better person." },
                        ].map((testimonial, i) => (
                            <ScrollReveal key={i} delay={i * 0.1}>
                                <GlassPanel className="!p-6 h-full">
                                    <p className="text-sm text-muted-foreground italic">"{testimonial.quote}"</p>
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
                                Ready to <span className="text-gradient">Begin</span>?
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
                            <p className="text-xs text-muted-foreground mt-6">
                                Partially covered by your naturopath benefits
                            </p>
                        </GlassPanel>
                    </ScrollReveal>
                </div>
            </section>
        </div>
    );
}
