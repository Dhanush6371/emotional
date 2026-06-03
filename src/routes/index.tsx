import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { ArrowRight, Sparkles, Brain, Heart, Activity, Mic, Waves, GraduationCap } from "lucide-react";
import { GlassPanel } from "@/components/fx/GlassPanel";
import { MagneticButton } from "@/components/fx/MagneticButton";
import { GradientOrb } from "@/components/fx/GradientOrb";
import { ParticleField } from "@/components/fx/ParticleField";
import { Hero3DOrb } from "@/components/fx/Hero3DOrb";
import { ScrollReveal } from "@/components/fx/ScrollReveal";
import { ClientOnly } from "@/components/site/ClientOnly";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Emotional Fitness Academy — Looking Within" },
      { name: "description", content: "Centre of Excellence in experiential education. A World That Listens and Is Heard." },
      { property: "og:title", content: "Emotional Fitness Academy" },
      { property: "og:description", content: "Looking Within - Using your innate wisdom" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Hero />
      <DashboardPreview />
      <ServiceCards />
      <Mission />
      <AIAssistant />
      <Storytelling />
      <BlogSection />
      <PodcastSection />
      <CTA />
    </>
  );
}

function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden pt-24">
      {/* Medicine Wheel inspired background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-background via-frost to-background">
        <ClientOnly>
          <ParticleField density={80} />
        </ClientOnly>
      </div>
      <GradientOrb className="-left-40 top-20" size={500} />
      <GradientOrb className="-right-40 bottom-0" size={600} />

      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 pt-12 lg:grid-cols-2">
        <div className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs"
          >
            <Sparkles className="h-3.5 w-3.5 text-accent" />
            <span className="tracking-wide text-muted-foreground">Centre of Excellence in experiential education</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.1 }}
            className="mt-6 font-display text-[3.5rem] font-light leading-[0.95] tracking-tight sm:text-7xl lg:text-[5.5rem]"
          >
            Looking Within
            <br />
            <span className="text-gradient animate-gradient">with innate wisdom.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-6 max-w-lg text-base font-light leading-relaxed text-muted-foreground sm:text-lg"
          >
            Leading-edge experiential Emotional Fitness® tools. A tool-kit for life in the 21st century
            with investment focus on People, Planet, Profit.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <Link to="/booking"><MagneticButton>Book Discovery Call <ArrowRight className="ml-2 inline h-4 w-4" /></MagneticButton></Link>
            <Link to="/about"><MagneticButton variant="ghost">Meet Our Family</MagneticButton></Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="mt-14 flex items-center gap-8"
          >
            {[
              { v: "40+", l: "Years proven" },
              { v: "Global", l: "Reach" },
              { v: "1984", l: "Since" },
            ].map((s) => (
              <div key={s.l}>
                <p className="font-display text-2xl font-light">{s.v}</p>
                <p className="text-xs text-muted-foreground">{s.l}</p>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.2 }}
          className="relative aspect-square w-full max-w-xl mx-auto"
        >
          <ClientOnly
            fallback={
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="h-72 w-72 rounded-full bg-gradient-glow blur-2xl opacity-60" />
              </div>
            }
          >
            <Hero3DOrb />
          </ClientOnly>
          {/* Floating holographic cards */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute left-0 top-12"
          >
            <GlassPanel className="!p-4">
              <div className="flex items-center gap-3">
                <div className="rounded-full bg-gradient-glow p-2"><Heart className="h-4 w-4 text-white" /></div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-muted-foreground">Listening Power</p>
                  <p className="font-display text-lg">Active</p>
                </div>
              </div>
            </GlassPanel>
          </motion.div>
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            className="absolute right-0 bottom-16"
          >
            <GlassPanel className="!p-4">
              <div className="flex items-center gap-3">
                <div className="rounded-full bg-gradient-glow p-2"><Activity className="h-4 w-4 text-white" /></div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-muted-foreground">Inner Wisdom</p>
                  <p className="font-display text-lg">+Engaged</p>
                </div>
              </div>
            </GlassPanel>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function DashboardPreview() {
  return (
    <section className="relative py-32 bg-gradient-to-b from-background via-frost/30 to-background">
      <div className="mx-auto max-w-7xl px-6">
        <ScrollReveal className="mx-auto max-w-3xl text-center">
          <p className="text-xs uppercase tracking-[0.4em] text-accent">Our Vision</p>
          <h2 className="mt-4 font-display text-5xl font-light leading-tight sm:text-6xl">
            A World That Listens <span className="text-gradient">and Is Heard</span>.
          </h2>
          <p className="mt-5 text-base text-muted-foreground">
            The mission is to educate people through Emotional Fitness® tools to use their innate wisdom
            and experience while facilitating growth & development.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.2} className="mt-16">
          <GlassPanel strong className="!p-8 sm:!p-12">
            <div className="grid gap-6 md:grid-cols-3">
              {[
                { label: "Experiential Tools", value: "Active", trend: "Since 1984", color: "from-blue-400 to-blue-500" },
                { label: "Triple Bottom Line", value: "People, Planet, Profit", trend: "Core Focus", color: "from-blue-500 to-blue-600" },
                { label: "Global Reach", value: "Worldwide", trend: "Digital Platform", color: "from-blue-400 to-blue-600" },
              ].map((m) => (
                <GlassPanel key={m.label} className="!p-6">
                  <p className="text-xs uppercase tracking-widest text-muted-foreground">{m.label}</p>
                  <p className="mt-3 font-display text-xl font-light">{m.value}</p>
                  <div className="mt-4 h-2 overflow-hidden rounded-full bg-secondary">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: "90%" }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, ease: "easeOut" }}
                      className={`h-full bg-gradient-to-r ${m.color}`}
                    />
                  </div>
                  <p className="mt-2 text-xs text-accent">{m.trend}</p>
                </GlassPanel>
              ))}
            </div>

            <div className="mt-8 grid gap-6 md:grid-cols-2">
              <GlassPanel className="!p-6">
                <div className="flex items-center justify-between">
                  <p className="text-xs uppercase tracking-widest text-muted-foreground">Programme Impact</p>
                  <Waves className="h-4 w-4 text-accent" />
                </div>
                <div className="mt-6 flex items-end gap-2 h-32">
                  {[50, 70, 60, 85, 75, 95, 88].map((h, i) => (
                    <motion.div
                      key={i}
                      initial={{ height: 0 }}
                      whileInView={{ height: `${h}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: i * 0.1 }}
                      className="flex-1 rounded-full bg-gradient-glow opacity-80"
                    />
                  ))}
                </div>
              </GlassPanel>
              <GlassPanel className="!p-6">
                <div className="flex items-center justify-between">
                  <p className="text-xs uppercase tracking-widest text-muted-foreground">Foundation</p>
                  <Brain className="h-4 w-4 text-accent" />
                </div>
                <p className="mt-4 font-display text-xl font-light leading-snug">
                  "Developed by Warren Redman over 40 years, our tools help you discover your own truth and inner wisdom."
                </p>
                <p className="mt-4 text-xs text-muted-foreground">Emotional Fitness® Methodology · Est. 1984</p>
              </GlassPanel>
            </div>
          </GlassPanel>
        </ScrollReveal>
      </div>
    </section>
  );
}

function ServiceCards() {
  const services = [
    {
      icon: Heart,
      title: "1-on-1 Naturopath Consultation",
      desc: "Personalized support for trauma, addiction, loss, and leadership challenges.",
      link: "/1-on-1-program"
    },
    {
      icon: Sparkles,
      title: "7 Pillars of Self",
      desc: "10-week transformational journey through emotional, purpose, financial, physical, mental, environmental, and spiritual pillars.",
      link: "/7-pillars"
    },
    {
      icon: GraduationCap,
      title: "Coach Training Course",
      desc: "122-hour certification program teaching the 9 Steps to Emotional Fitness®.",
      link: "/coach-training"
    },
  ];
  return (
    <section className="relative py-32 bg-gradient-to-b from-background to-frost/20">
      <div className="mx-auto max-w-7xl px-6">
        <ScrollReveal className="mx-auto max-w-2xl text-center">
          <p className="text-xs uppercase tracking-[0.4em] text-accent">Programmes</p>
          <h2 className="mt-4 font-display text-5xl font-light leading-tight sm:text-6xl">
            To Achieve This Vision <span className="text-gradient">We Offer</span>
          </h2>
        </ScrollReveal>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {services.map((s, i) => (
            <ScrollReveal key={s.title} delay={i * 0.1}>
              <motion.div
                whileHover={{ y: -8, rotateX: 4, rotateY: -4 }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
                style={{ transformStyle: "preserve-3d" }}
              >
                <Link to={s.link}>
                  <GlassPanel className="group h-full !p-8 hover:shadow-glow">
                    <div className="mb-6 inline-flex rounded-2xl bg-gradient-glow p-3 shadow-glow">
                      <s.icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="font-display text-2xl font-light">{s.title}</h3>
                    <p className="mt-3 text-sm text-muted-foreground">{s.desc}</p>
                    <div className="mt-6 inline-flex items-center gap-1 text-xs font-medium text-gradient">
                      Learn More <ArrowRight className="h-3 w-3" />
                    </div>
                  </GlassPanel>
                </Link>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Mission() {
  return (
    <section className="relative py-32 bg-gradient-to-b from-background to-frost/20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <ScrollReveal>
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-violet-500/20 to-blue-500/20" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <Heart className="h-24 w-24 text-accent mx-auto mb-4" />
                  <p className="text-2xl font-display font-light text-muted-foreground">Connection & Growth</p>
                </div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <p className="text-xs uppercase tracking-[0.4em] text-accent mb-4">The Mission</p>
            <h2 className="font-display text-4xl md:text-5xl font-light mb-6">
              Emotional Fitness® <span className="text-gradient">Academy</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              The mission of the Emotional Fitness® Academy is to educate people through
              Emotional Fitness® tools in order to use their own innate wisdom and experience
              while facilitating continued growth & development with tools to create success
              desired in health, relationships, life & work.
            </p>
            <Link to="/about">
              <MagneticButton>Meet Our Family <ArrowRight className="ml-2 inline h-4 w-4" /></MagneticButton>
            </Link>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

function AIAssistant() {
  return (
    <section className="relative py-32 bg-gradient-to-b from-frost/20 via-background to-frost/30">
      <div className="mx-auto max-w-7xl px-6">
        <GlassPanel strong className="relative overflow-hidden !p-12 sm:!p-20">
          <GradientOrb className="-right-40 -top-40" size={600} />
          <div className="relative z-10 grid items-center gap-12 md:grid-cols-2">
            <ScrollReveal>
              <p className="text-xs uppercase tracking-[0.4em] text-accent">Testimonials</p>
              <h2 className="mt-4 font-display text-5xl font-light leading-tight">
                What people are <span className="text-gradient">saying</span>.
              </h2>
              <p className="mt-5 text-muted-foreground">
                Real stories from graduates and participants who have transformed their lives through Emotional Fitness®.
              </p>
              <div className="mt-8">
                <Link to="/testimonials"><MagneticButton>Read More Stories</MagneticButton></Link>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <div className="relative flex flex-col gap-3">
                {[
                  { who: "client", text: "The program helped me identify and monitor my emotional well-being using a holistic approach." },
                  { who: "academy", text: "That's wonderful progress. How are you feeling about your growth?" },
                  { who: "client", text: "I've learned tools to steer myself in a better way of life." },
                  { who: "academy", text: "Your transformation is inspiring. Keep engaging your inner wisdom." },
                ].map((m, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: m.who === "client" ? 30 : -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.15 }}
                    className={m.who === "client" ? "self-end" : "self-start"}
                  >
                    <div
                      className={
                        m.who === "client"
                          ? "max-w-xs rounded-3xl rounded-br-md bg-gradient-glow px-5 py-3 text-sm text-white shadow-soft"
                          : "max-w-xs rounded-3xl rounded-bl-md glass px-5 py-3 text-sm"
                      }
                    >
                      {m.text}
                    </div>
                  </motion.div>
                ))}
                <div className="mt-4 flex items-center gap-2 self-start glass rounded-full px-4 py-2">
                  <Mic className="h-4 w-4 text-accent" />
                  <div className="flex gap-1">
                    {[1, 2, 3, 4, 5].map((b) => (
                      <motion.span
                        key={b}
                        animate={{ scaleY: [0.4, 1, 0.4] }}
                        transition={{ duration: 1, repeat: Infinity, delay: b * 0.1 }}
                        className="h-3 w-0.5 rounded-full bg-gradient-glow origin-center"
                      />
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </GlassPanel>
      </div>
    </section>
  );
}

function Storytelling() {
  const chapters = [
    { n: "01", t: "Listening Power", d: "Five stages of powerful listening to create better relationships and become more fulfilled." },
    { n: "02", t: "Learning From Experience", d: "Review your own experiences to discover opportunities for continuous learning and growth." },
    { n: "03", t: "Lifescale", d: "Use ten questions to achieve greater levels of balance in what satisfies and frustrates you." },
    { n: "04", t: "Integration", d: "Embed practices into your daily life with tools for sustained success in health, relationships, and work." },
  ];
  return (
    <section className="relative py-32 bg-gradient-to-b from-frost/30 to-background">
      {/* Iceberg depth visualization */}
      <div className="absolute inset-0 bg-gradient-to-b from-iceberg-light/5 to-iceberg-blue/5" />
      <div className="mx-auto max-w-7xl px-6 relative z-10">
        <ScrollReveal className="mx-auto max-w-2xl text-center">
          <p className="text-xs uppercase tracking-[0.4em] text-accent">The Approach</p>
          <h2 className="mt-4 font-display text-5xl font-light leading-tight">
            The 9 Steps to <span className="text-gradient">Emotional Fitness®</span>
          </h2>
        </ScrollReveal>
        <div className="mt-20 space-y-12">
          {chapters.map((c, i) => (
            <ScrollReveal key={c.n} delay={i * 0.08}>
              <div className="grid items-center gap-8 md:grid-cols-[120px_1fr_2fr]">
                <p className="font-display text-7xl font-light text-gradient">{c.n}</p>
                <h3 className="font-display text-3xl font-light">{c.t}</h3>
                <p className="text-muted-foreground">{c.d}</p>
              </div>
              {i < chapters.length - 1 && <div className="mt-12 h-px w-full bg-gradient-to-r from-transparent via-border to-transparent" />}
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function BlogSection() {
  const blogPosts = [
    {
      title: "And When I Listened",
      author: "Luciano Onichino, BA, RMT",
      role: "Emotional Fitness® Coach, Ambassador",
      excerpt: "While away for Labor Day weekend, Angie and I had the luxury and privilege to steal away around Cape Breton, choosing accommodations which provided solace and disconnect from all...",
      category: "EFIT ACADEMY®"
    },
    {
      title: "How financially fit are you?",
      author: "Dr. Richard Vaillancourt",
      role: "B.Comm, MBA, DBA, CHRP",
      excerpt: "Financial fitness is not just about income. It is about clarity, control, resilience, and long term strategy. In this insightful presentation, Dr. Richard...",
      category: "EMOTIONAL FITNESS® ACADEMY"
    },
  ];

  return (
    <section className="relative py-32 bg-gradient-to-b from-background to-frost/20">
      <div className="mx-auto max-w-7xl px-6">
        <ScrollReveal>
          <h2 className="font-display text-4xl md:text-5xl font-light text-center mb-4">
            What Are We <span className="text-gradient">Blogging About?</span>
          </h2>
        </ScrollReveal>

        <div className="mt-16 grid md:grid-cols-2 gap-8">
          {blogPosts.map((post, i) => (
            <ScrollReveal key={post.title} delay={i * 0.1}>
              <motion.div
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
              >
                <GlassPanel className="h-full !p-8 hover:shadow-glow">
                  <div className="text-xs uppercase tracking-wider text-accent mb-3">{post.category}</div>
                  <h3 className="font-display text-2xl font-light mb-3">{post.title}</h3>
                  <p className="text-xs text-muted-foreground mb-2">by {post.author}</p>
                  <p className="text-xs text-muted-foreground mb-4">{post.role}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-6">{post.excerpt}</p>
                  <div className="inline-flex items-center gap-1 text-xs font-medium text-gradient">
                    Read More <ArrowRight className="h-3 w-3" />
                  </div>
                </GlassPanel>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal className="text-center mt-12">
          <Link to="/blog">
            <MagneticButton variant="ghost">Further Blogs <ArrowRight className="ml-2 inline h-4 w-4" /></MagneticButton>
          </Link>
        </ScrollReveal>
      </div>
    </section>
  );
}

function PodcastSection() {
  const podcasts = [
    {
      title: "The Shift from Productivity to Purpose",
      guest: "Phabien Doiron",
      series: "The Connected Movement",
      facilitator: "Stu Murray"
    },
    {
      title: "To Heal Is To Feel",
      guest: "Darren Duguay",
      series: "The Connected Movement",
      facilitator: "Stu Murray"
    },
    {
      title: "Come Off The Ledge - Buddy Up",
      host: "Carl Chase",
      series: "Come off the Ledge",
      description: "Men's suicide prevention campaign"
    },
  ];

  return (
    <section className="relative py-32 bg-gradient-to-b from-frost/20 to-background">
      <div className="mx-auto max-w-7xl px-6">
        <ScrollReveal>
          <h2 className="font-display text-4xl md:text-5xl font-light text-center mb-4">
            Looking For <span className="text-gradient">Meaningful Conversations?</span>
          </h2>
        </ScrollReveal>

        <div className="mt-16 grid md:grid-cols-3 gap-8">
          {podcasts.map((podcast, i) => (
            <ScrollReveal key={podcast.title} delay={i * 0.1}>
              <motion.div
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
              >
                <GlassPanel className="h-full !p-8 hover:shadow-glow">
                  <div className="mb-6 inline-flex rounded-2xl bg-gradient-glow p-3 shadow-glow">
                    <Mic className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-display text-xl font-light mb-3">{podcast.title}</h3>
                  {podcast.guest && (
                    <p className="text-xs text-muted-foreground mb-2">W/ {podcast.guest}</p>
                  )}
                  {podcast.host && (
                    <p className="text-xs text-muted-foreground mb-2">by {podcast.host}</p>
                  )}
                  {podcast.facilitator && (
                    <p className="text-xs text-muted-foreground mb-2">facilitated by {podcast.facilitator}</p>
                  )}
                  <p className="text-xs text-accent mb-4">{podcast.series}</p>
                  {podcast.description && (
                    <p className="text-sm text-muted-foreground mb-4">{podcast.description}</p>
                  )}
                  <div className="mt-4 flex items-center gap-2 glass rounded-full px-4 py-2">
                    <div className="flex gap-1">
                      {[1, 2, 3, 4].map((b) => (
                        <motion.span
                          key={b}
                          animate={{ scaleY: [0.4, 1, 0.4] }}
                          transition={{ duration: 1, repeat: Infinity, delay: b * 0.1 }}
                          className="h-3 w-0.5 rounded-full bg-gradient-glow origin-center"
                        />
                      ))}
                    </div>
                    <span className="text-xs text-muted-foreground">Audio</span>
                  </div>
                </GlassPanel>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal className="text-center mt-12">
          <Link to="/podcast">
            <MagneticButton variant="ghost">Further Podcasts <ArrowRight className="ml-2 inline h-4 w-4" /></MagneticButton>
          </Link>
        </ScrollReveal>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="relative py-32 bg-gradient-to-b from-background via-frost/20 to-background">
      <div className="mx-auto max-w-5xl px-6 relative z-10">
        <GlassPanel strong className="relative overflow-hidden !p-16 text-center">
          <GradientOrb className="left-1/2 top-0 -translate-x-1/2" size={800} />
          <div className="relative z-10">
            <h2 className="font-display text-5xl font-light leading-tight sm:text-7xl">
              Ready to start <br /><span className="text-gradient">your journey</span>?
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-muted-foreground">
              Book a free 20-minute discovery call. Let's have a chat about how Emotional Fitness® can help you.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Link to="/booking"><MagneticButton>Book Your Discovery Call</MagneticButton></Link>
              <Link to="/about"><MagneticButton variant="ghost">Meet Our Family</MagneticButton></Link>
            </div>
          </div>
        </GlassPanel>
      </div>
    </section>
  );
}
