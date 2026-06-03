import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { GlassPanel } from "@/components/fx/GlassPanel";
import { GradientOrb } from "@/components/fx/GradientOrb";
import { ScrollReveal } from "@/components/fx/ScrollReveal";
import { MagneticButton } from "@/components/fx/MagneticButton";
import { Heart, Target, Users, Award, Lightbulb, Shield, Home, ArrowRight, FileText, Headphones, BookOpen, CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "Meet Our Family — Emotional Fitness Academy" },
      { name: "description", content: "Greetings from the Founder. Learn about Darren Duguay and the Emotional Fitness® Academy mission." },
      { property: "og:title", content: "Meet Our Family — Emotional Fitness Academy" },
    ],
  }),
  component: AboutPage,
});

const academyValues = [
  { letter: "A", word: "Advocates for Change", icon: Target },
  { letter: "C", word: "Connected", icon: Users },
  { letter: "A", word: "Aboriginal", icon: Heart },
  { letter: "D", word: "Dedicated", icon: Award },
  { letter: "E", word: "Educated Leaders", icon: Lightbulb },
  { letter: "M", word: "Mission Focused", icon: Target },
  { letter: "Y", word: "Your Academy", icon: Home },
];

function AboutPage() {
  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative pt-40 pb-20 bg-gradient-to-br from-background via-frost/20 to-iceberg-light/8">
        <GradientOrb className="-left-40 top-20" size={600} />
        <div className="mx-auto max-w-5xl px-6 relative z-10">
          <p className="text-xs uppercase tracking-[0.4em] text-accent text-center">Meet Our Family</p>
          <h1 className="mt-4 font-display text-5xl font-light leading-[0.95] sm:text-7xl text-center">
            Greetings from the <span className="text-gradient">Founder!</span>
          </h1>
        </div>
      </section>

      {/* Darren Duguay Bio Section */}
      <section className="relative py-20">
        <div className="mx-auto max-w-6xl px-6">
          <ScrollReveal>
            <GlassPanel className="!p-12">
              <div className="grid md:grid-cols-2 gap-12 items-start">
                <div>
                  <div className="relative h-64 w-64 mx-auto mb-6">
                    <div className="absolute inset-0 rounded-full bg-gradient-glow blur-xl opacity-60" />
                    <div className="relative h-full w-full rounded-full bg-gradient-glow flex items-center justify-center">
                      <Heart className="h-32 w-32 text-white" />
                    </div>
                  </div>
                  <h2 className="font-display text-4xl font-light text-center">Darren Duguay</h2>
                  <p className="text-sm text-center text-accent uppercase tracking-wider mt-2">
                    EFI, BSc, BEd, CD1, n.d.<br />
                    Emotional Fitness® Educator
                  </p>
                </div>

                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Darren graduated from Mount Allison University with a Bachelor of Science and a
                    Bachelor of Education as well as from the Canadian Land Force Command Staff College
                    as a mature student.
                  </p>
                  <p>
                    Upon return from Afghanistan in 2011, he returned back to school in 2012 with the
                    Emotional Fitness® Institute to receive his Emotional Fitness® Coach and Instructor's
                    Certification after completing two years of intensive experiential education and training.
                  </p>
                  <p>
                    He is a former New Brunswick Community College instructor of eight years and has
                    completed 27 years' service in the Canadian Armed Forces. As a Naturopath Consultant (n.d.),
                    he is a member of the Alliance of Professional Naturopaths & Naturotherapists.
                  </p>
                  <p>
                    As an Emotional Fitness® Educator for nine years & Founder of your Emotional Fitness® Academy,
                    Darren leverages his personal, educational and leadership background to educate experientially
                    and train with tools of Emotional Fitness®.
                  </p>
                  <p>
                    One of Darren's highlights in life is becoming a parent to two incredible young adults
                    Alexandre & Josee as well as being a Grandfather to Ava. Darren is a passionate advocate
                    of holistic fitness! He is a two-time Boston Marathon Finisher and embraces his roots of
                    being Indigenous as well as his journey with complex Post Traumatic Stress (C-PTS) to serve others!
                  </p>
                </div>
              </div>
            </GlassPanel>
          </ScrollReveal>
        </div>
      </section>

      {/* ACADEMY Acronym Section */}
      <section className="relative py-20 bg-gradient-to-br from-background via-frost/10 to-iceberg-light/5">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-12">
            <h2 className="font-display text-5xl font-light">
              Get to know your <span className="text-gradient">Academy</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {academyValues.map((value, i) => (
              <ScrollReveal key={`${value.letter}-${i}`} delay={i * 0.05}>
                <GlassPanel className="!p-6 h-full">
                  <div className="mb-4 inline-flex rounded-2xl bg-gradient-glow p-3 shadow-glow">
                    <value.icon className="h-6 w-6 text-white" />
                  </div>
                  <div className="text-4xl font-display font-light text-gradient mb-2">{value.letter}</div>
                  <h3 className="font-display text-lg font-light">{value.word}</h3>
                </GlassPanel>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* What is EFA + Mission Section */}
      <section className="relative py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center mb-12">
            <h2 className="font-display text-5xl font-light">
              The <span className="text-gradient">Academy</span>
            </h2>
          </div>

          <ScrollReveal>
            <GlassPanel strong className="!p-12">
              <h3 className="font-display text-3xl font-light mb-6">
                What is the Emotional Fitness® Academy?
              </h3>

              <div className="space-y-4 text-muted-foreground leading-relaxed mb-8">
                <p>
                  The Emotional Fitness® Academy is your "Centre of Excellence" in experiential education
                  and training with personal and professional development specializing in E-Fitness
                  (Emotional Fitness®) facilitated in large part over a digital platform and on a global scale.
                </p>
                <p>
                  Emotional Fitness® originally started in the UK, Founded by Warren Redman and has been
                  facilitated since 1984.
                </p>
                <p>
                  To provide greatest value and support, the Emotional Fitness® Academy is equipped with
                  professionally licensed educators, facilitators and faculty members with life experience
                  that align with their licensed Emotional Fitness® training.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8 pt-8 border-t border-border/50">
                <div>
                  <h4 className="font-display text-2xl font-light mb-4 text-gradient">Our Vision</h4>
                  <p className="text-lg text-muted-foreground">"A World That Listens and Is Heard"</p>
                </div>
                <div>
                  <h4 className="font-display text-2xl font-light mb-4 text-gradient">Our Mission</h4>
                  <p className="text-muted-foreground">
                    To educate people through Emotional Fitness® tools in order to use their own innate wisdom
                    and experience while facilitating continued growth & development with tools to create success
                    desired in health, relationships, life & work.
                  </p>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-border/50">
                <h4 className="font-display text-xl font-light mb-4">Core Values</h4>
                <div className="flex flex-wrap gap-3">
                  {["Authenticity", "Creation", "Dedication", "Excellence", "Family", "Integrity", "Trust"].map((value) => (
                    <span key={value} className="px-4 py-2 rounded-full bg-gradient-to-r from-accent/10 to-transparent border border-accent/20 text-sm">
                      {value}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-border/50">
                <h4 className="font-display text-xl font-light mb-4">Triple Bottom Line</h4>
                <p className="text-muted-foreground">
                  Our triple bottom line (People, Planet, Profit) ensures we put people and planet first.
                </p>
              </div>
            </GlassPanel>
          </ScrollReveal>
        </div>
      </section>

      {/* Partnerships Section */}
      <section className="relative py-20 bg-gradient-to-br from-background via-frost/10 to-iceberg-light/5">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl font-light">
              Ambassadors, Faculty & <span className="text-gradient">Partnerships</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "Blue Cross", subtitle: "Medavie Blue Cross", desc: "Insurance coverage partner" },
              { name: "Startup Moncton", subtitle: "Greater Moncton", desc: "Community support" },
              { name: "Chamber", subtitle: "Greater Moncton", desc: "Business network" },
              { name: "Buddy Up", subtitle: "Campaign", desc: "Men's mental health" },
            ].map((partner, i) => (
              <ScrollReveal key={partner.name} delay={i * 0.1}>
                <GlassPanel className="!p-6 text-center h-full">
                  <div className="h-20 w-20 rounded-full bg-gradient-glow mx-auto mb-4 flex items-center justify-center">
                    <Users className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="font-display text-lg font-light">{partner.name}</h3>
                  <p className="text-xs text-accent mb-2">{partner.subtitle}</p>
                  <p className="text-xs text-muted-foreground">{partner.desc}</p>
                </GlassPanel>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="relative py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl font-light">
              Available <span className="text-gradient">Resources</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: FileText, title: "Download E-book", desc: "EFA Academy E-Book Now Available", link: "/contact" },
              { icon: BookOpen, title: "Read Latest Blog", desc: "Dive into our latest insights", link: "/blog" },
              { icon: Headphones, title: "Listen to Podcast", desc: "Buddy Up Campaign & more", link: "/podcast" },
            ].map((resource, i) => (
              <ScrollReveal key={resource.title} delay={i * 0.1}>
                <Link to={resource.link}>
                  <motion.div whileHover={{ y: -8 }} transition={{ type: "spring", stiffness: 200 }}>
                    <GlassPanel className="!p-8 h-full hover:shadow-glow group">
                      <div className="mb-6 inline-flex rounded-2xl bg-gradient-glow p-3 shadow-glow">
                        <resource.icon className="h-6 w-6 text-white" />
                      </div>
                      <h3 className="font-display text-xl font-light mb-3">{resource.title}</h3>
                      <p className="text-sm text-muted-foreground mb-4">{resource.desc}</p>
                      <div className="inline-flex items-center gap-1 text-xs font-medium text-gradient">
                        Access <ArrowRight className="h-3 w-3" />
                      </div>
                    </GlassPanel>
                  </motion.div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <GlassPanel strong className="!p-12">
            <h2 className="font-display text-4xl font-light mb-4">
              Let's <span className="text-gradient">Collaborate</span>
            </h2>
            <p className="text-muted-foreground mb-8">
              Have questions or want to learn more about our family? We'd love to hear from you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <MagneticButton>Contact Us</MagneticButton>
              </Link>
              <Link to="/booking">
                <MagneticButton variant="ghost">Book Discovery Call</MagneticButton>
              </Link>
            </div>
          </GlassPanel>
        </div>
      </section>
    </div>
  );
}
