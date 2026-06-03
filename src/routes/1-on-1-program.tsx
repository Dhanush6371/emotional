import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { Heart, Shield, Users, Sparkles, CheckCircle2, ArrowRight } from "lucide-react";
import { GlassPanel } from "@/components/fx/GlassPanel";
import { GradientOrb } from "@/components/fx/GradientOrb";
import { ScrollReveal } from "@/components/fx/ScrollReveal";
import { MagneticButton } from "@/components/fx/MagneticButton";

export const Route = createFileRoute("/1-on-1-program")({
    head: () => ({
        meta: [
            { title: "1-on-1 Naturopath Consultation — Emotional Fitness Academy" },
            { name: "description", content: "When Traditional Approaches Fall Short, Experience-Based Education and Training Makes the Difference" },
            { property: "og:title", content: "1-on-1 Naturopath Consultation — Emotional Fitness Academy" },
        ],
    }),
    component: OneOnOneProgram,
});

const taslSupport = [
    "Feeling stuck in cycles of pain and reactivity",
    "Overwhelming emotions difficult to regulate",
    "Isolation and difficulty connecting",
    "Loss of hope and purpose",
    "Physical symptoms from unprocessed emotional distress",
    "Fear of seeking help or being judged"
];

const leadershipChallenges = [
    "Imposter syndrome and self-doubt",
    "Difficulty having courageous conversations",
    "Burnout from constant pressure",
    "Struggling to build trust and psychological safety",
    "Managing team conflict and dysfunction",
    "Balancing authenticity with professional expectations"
];

function OneOnOneProgram() {
    return (
        <div className="relative">
            {/* Hero Section */}
            <section className="relative pt-40 pb-20 bg-gradient-to-br from-background via-frost/20 to-iceberg-light/8">
                <GradientOrb className="-left-40 top-20" size={600} />
                <div className="mx-auto max-w-5xl px-6 relative z-10">
                    <p className="text-xs uppercase tracking-[0.4em] text-accent text-center">1-on-1 Naturopath Consultation</p>
                    <h1 className="mt-4 font-display text-5xl font-light leading-[0.95] sm:text-7xl text-center">
                        When Traditional Approaches Fall Short, <span className="text-gradient">Experience-Based Education</span> Makes the Difference
                    </h1>
                    <p className="mt-8 text-lg text-muted-foreground text-center max-w-3xl mx-auto">
                        Military veteran turned naturopath consultant • Personal and professional trauma survivor • 12+ years helping others transform their lives
                    </p>
                </div>
            </section>

            {/* Meet Darren Section */}
            <section className="relative py-20">
                <div className="mx-auto max-w-6xl px-6">
                    <ScrollReveal>
                        <GlassPanel className="!p-12">
                            <div className="grid md:grid-cols-2 gap-12 items-center">
                                <div>
                                    <h2 className="font-display text-4xl font-light">Meet Darren Duguay</h2>
                                    <p className="mt-2 text-sm text-accent uppercase tracking-wider">EFI, BSc, BEd, CD1, n.d. • Founder & Lead Consultant</p>
                                    <div className="mt-6 space-y-4 text-muted-foreground">
                                        <p>After 27 years serving in the Canadian Armed Forces, including deployment to Afghanistan, Darren returned home facing his own battle with complex Post Traumatic Stress (C-PTS). Instead of letting it define him, he chose transformation—and now helps others do the same.</p>
                                        <p>Darren combines his Bachelor degrees (BSc, BEd) from Mount Allison University, Army Operations Course from Canadian Army Command and Staff College (CACSC), Naturopath Consultant designation, and 2 years intensive Emotional Fitness® Institute licensing with the deep understanding that comes from personal and professional recovery.</p>
                                        <p>For over 12 years, Darren has helped individuals, families, teams, and organizations build resilience. As a veteran Toastmaster, co-author, two-time Boston Marathon finisher, trauma-addiction-suicide-survivor interventionist, leadership professional, and entrepreneur, he practices what he teaches—because he's been where you are.</p>
                                    </div>
                                </div>
                                <div className="relative h-[400px] rounded-2xl overflow-hidden">
                                    <div className="absolute inset-0 bg-gradient-glow opacity-20"></div>
                                </div>
                            </div>
                        </GlassPanel>
                    </ScrollReveal>
                </div>
            </section>

            {/* Two Specialized Areas */}
            <section className="relative py-20">
                <div className="mx-auto max-w-6xl px-6">
                    <div className="text-center mb-16">
                        <h2 className="font-display text-5xl font-light">Addressing Life's Most <span className="text-gradient">Complex Challenges</span></h2>
                        <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">Sometimes recovery requires more than clinical expertise—it requires someone who has faced their own darkness and found the way through.</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        {/* TASL Support */}
                        <ScrollReveal delay={0.1}>
                            <GlassPanel className="h-full !p-8">
                                <div className="mb-6 inline-flex rounded-2xl bg-gradient-glow p-3 shadow-glow">
                                    <Heart className="h-6 w-6 text-white" />
                                </div>
                                <h3 className="font-display text-3xl font-light">TASL Support</h3>
                                <p className="mt-2 text-sm text-accent">Trauma • Addiction • Suicide Ideation • Loss</p>
                                <p className="mt-4 text-muted-foreground">Life's deepest wounds require someone who truly understands. Whether you're processing trauma, struggling with addiction, experiencing thoughts of suicide, or grieving profound loss, you need more than textbook knowledge.</p>

                                <div className="mt-6">
                                    <p className="text-sm font-medium mb-3">Common Struggles:</p>
                                    <ul className="space-y-2">
                                        {taslSupport.map((item) => (
                                            <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                                                <span className="text-red-400 mt-1">⚠️</span>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="mt-6">
                                    <p className="text-sm font-medium mb-3">Our Specialized Approach:</p>
                                    <ul className="space-y-2">
                                        {[
                                            "Trauma-informed listening tools creating safety",
                                            "Addiction recovery through inner wisdom activation",
                                            "Suicide intervention through connection restoration",
                                            "Grief processing using experiential healing",
                                            "Crisis intervention with immediate support",
                                            "Holistic healing (physical, mental, emotional, spiritual)"
                                        ].map((item) => (
                                            <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                                                <CheckCircle2 className="h-4 w-4 text-green-400 mt-0.5 shrink-0" />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </GlassPanel>
                        </ScrollReveal>

                        {/* Leadership Support */}
                        <ScrollReveal delay={0.2}>
                            <GlassPanel className="h-full !p-8">
                                <div className="mb-6 inline-flex rounded-2xl bg-gradient-glow p-3 shadow-glow">
                                    <Shield className="h-6 w-6 text-white" />
                                </div>
                                <h3 className="font-display text-3xl font-light">Leadership & Culture Support</h3>
                                <p className="mt-2 text-sm text-accent">Leadership Development • Organizational Culture</p>
                                <p className="mt-4 text-muted-foreground">Leadership in today's world requires more than management training—it demands emotional resilience and authentic communication skills.</p>

                                <div className="mt-6">
                                    <p className="text-sm font-medium mb-3">Leadership Challenges:</p>
                                    <ul className="space-y-2">
                                        {leadershipChallenges.map((item) => (
                                            <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                                                <span className="text-red-400 mt-1">⚠️</span>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="mt-6">
                                    <p className="text-sm font-medium mb-3">Leadership Development Focus:</p>
                                    <ul className="space-y-2">
                                        {[
                                            "Emotional intelligence building for authentic leadership",
                                            "Communication tools fostering trust and openness",
                                            "Conflict resolution through listening-based approaches",
                                            "Organizational culture transformation strategies",
                                            "Personal resilience and stress management",
                                            "Values-based leadership development"
                                        ].map((item) => (
                                            <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                                                <CheckCircle2 className="h-4 w-4 text-green-400 mt-0.5 shrink-0" />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </GlassPanel>
                        </ScrollReveal>
                    </div>
                </div>
            </section>

            {/* What's Included */}
            <section className="relative py-20 bg-gradient-to-br from-background via-frost/10 to-iceberg-light/5">
                <div className="mx-auto max-w-5xl px-6">
                    <div className="text-center mb-12">
                        <h2 className="font-display text-5xl font-light">Your Personalized <span className="text-gradient">Support Program</span></h2>
                    </div>

                    <ScrollReveal>
                        <GlassPanel strong className="!p-12">
                            <div className="grid md:grid-cols-2 gap-8">
                                <div>
                                    <h3 className="font-display text-2xl font-light mb-4">What's Included</h3>
                                    <ul className="space-y-3">
                                        {[
                                            "Comprehensive assessment and personalized plan",
                                            "1-on-1 sessions (Zoom or in-person)",
                                            "Email support between sessions",
                                            "Crisis intervention protocols when needed",
                                            "Experiential exercises tailored to your situation",
                                            "Progress tracking and adjustment tools",
                                            "Optional SMS/voice note check-ins"
                                        ].map((item) => (
                                            <li key={item} className="flex items-start gap-3">
                                                <span className="h-1.5 w-1.5 rounded-full bg-gradient-glow mt-2 shrink-0" />
                                                <span className="text-muted-foreground">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div>
                                    <h3 className="font-display text-2xl font-light mb-4">Specialized Tools & Techniques</h3>
                                    <ul className="space-y-3">
                                        {[
                                            "5-stage Listening Power framework",
                                            "Emotional Fitness® tools aligned with your plan",
                                            "Trauma-informed emotional regulation",
                                            "Leadership communication strategies"
                                        ].map((item) => (
                                            <li key={item} className="flex items-start gap-3">
                                                <span className="h-1.5 w-1.5 rounded-full bg-gradient-glow mt-2 shrink-0" />
                                                <span className="text-muted-foreground">{item}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    <div className="mt-8 p-4 rounded-xl bg-gradient-to-br from-accent/10 to-transparent border border-accent/20">
                                        <p className="text-sm font-medium">Partially Covered by Your Naturopath Benefits</p>
                                    </div>
                                </div>
                            </div>
                        </GlassPanel>
                    </ScrollReveal>
                </div>
            </section>

            {/* CTA Section */}
            <section className="relative py-24">
                <div className="mx-auto max-w-4xl px-6 text-center">
                    <GlassPanel strong className="!p-12">
                        <h2 className="font-display text-4xl font-light">Ready to Begin Your <span className="text-gradient">Healing Journey?</span></h2>
                        <p className="mt-3 text-muted-foreground">Start with a no-pressure discovery call to explore whether this specialized support is right for you.</p>
                        <div className="mt-8 flex justify-center">
                            <Link to="/booking">
                                <MagneticButton>Book Your Discovery Call</MagneticButton>
                            </Link>
                        </div>
                        <p className="mt-6 text-sm text-muted-foreground">
                            <strong>Crisis Support Available:</strong> If you're experiencing thoughts of self-harm, please reach out immediately or contact your local crisis line.
                        </p>
                    </GlassPanel>
                </div>
            </section>
        </div>
    );
}
