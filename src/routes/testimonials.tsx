import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { Quote, Star, ArrowRight } from "lucide-react";
import { GlassPanel } from "@/components/fx/GlassPanel";
import { GradientOrb } from "@/components/fx/GradientOrb";
import { ScrollReveal } from "@/components/fx/ScrollReveal";
import { MagneticButton } from "@/components/fx/MagneticButton";

export const Route = createFileRoute("/testimonials")({
  head: () => ({
    meta: [
      { title: "Testimonials — Emotional Fitness Academy" },
      { name: "description", content: "Real stories from clients who have transformed their lives through Emotional Fitness®" },
      { property: "og:title", content: "Testimonials — Emotional Fitness Academy" },
    ],
  }),
  component: TestimonialsPage,
});

const testimonials = [
  {
    name: "Carmen Moar",
    role: "Financial & HR Controller, Writer, Graduate",
    program: "The Emotional Fitness® Personal Development Program",
    quote: "There is a change in me. As I headed to work this morning, I discovered a change in myself. I noticed the sun coming up on the horizon and how beautiful the sky looked as it started to brighten. I'm wowed by the amazing colours of the trees. I find myself reaching out to someone who has been on my journey, but I have disconnected from. I realize I love spending time with myself and all of my wonder.",
  },
  {
    name: "Dr. Richard A. Vaillancourt",
    role: "CEO (Retired), Leadership Workshop Graduate",
    program: "Leaders, Managers, Coaches Workshop",
    quote: "I found the Leaders, Managers, Coaches Workshop to be a terrific experiential program, instrumental in helping me improve my leadership and listening skills.",
  },
  {
    name: "Bill Lane",
    role: "Dad, Triathlete, Entrepreneur, Graduate",
    program: "Lessons Learned from Emotional Fitness®",
    quote: "I measure anything I do and learn in life by a result. The result for me has been a wonderful new relationship with myself, family, friends, co-workers and clients. I have experienced the Emotional Fitness® Approach & tools both for myself personally & for myself as a leader-entrepreneur. By truly listening to myself and others I am finally improving myself. Through the use of the Emotional Fitness® tools, my eyes and ears have been opened. I now shut my mouth while freeing myself from my mind. I feel I am now a better person, friend, dad, high performance athlete and business owner.",
  },
  {
    name: "Stephen Lalanchette",
    role: "Husband, Teacher, Leadership Workshop Graduate",
    program: "Emotional Fitness® Coach Training Course",
    quote: "For a long time, I was very interested in some sort of life coaching, personal development coach, leadership coach as a new career. I have been a teacher now for 11 years teaching Physical Education and English in Canada, the UAE, and Kyrgyzstan. Emotional Fitness® coaches in New Brunswick were able to mail me several books and within a few weeks I was partaking in an online Emotional Fitness® Leadership Program while living and working in Kyrgyzstan. I now intend on continuing my Emotional Fitness® Coaching journey by attending workshops and I would like to take the Emotional Fitness® Coach Training Course.",
  },
  {
    name: "Kendra LeBlanc McAllister",
    role: "Singer, Song Writer",
    program: "I Highly Recommend Emotional Fitness® Academy for any Youth or Adults",
    quote: "Darren and his team at Emotional Fitness® Academy provide a safe place for everyone to be heard and have a tremendous amount of support, it's like a family! When I myself was battling with suicide Darren and his team were there for me everyday even checking in to just say 'good morning I hope you have a great day'. I really want people to be aware of this help that is out there for them. Having that community of people working on themselves too makes you feel less alone and gives you that extra push to keep bettering yourself. As a teenager 'a youth' it was hard to find the right support to also be able to feel safe and not be looked at differently but at Emotional Fitness® Academy I felt right at home, and everybody involved treated me with the utmost respect. I highly recommend Emotional Fitness® Academy for any youth or adults struggling with their mental health and need that support to be a better version of themselves.",
  },
  {
    name: "Jessica Gallant",
    role: "Optician, Spiritual Healer, Writer",
    program: "The Emotional Fitness® Group Training",
    quote: "The Emotional Fitness® group training program helped me get in the core of myself, to find the new Jessica I had to become. With the tools being used, I was able to go through different situations of life with a new eye and new understanding within myself. I am forever grateful to have met amazing connections with whom I felt comfortable sharing and being able to also listen.",
  },
];

function TestimonialsPage() {
  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative pt-40 pb-20 bg-gradient-to-br from-background via-frost/20 to-iceberg-light/8">
        <GradientOrb className="-left-40 top-20" size={600} />
        <div className="mx-auto max-w-5xl px-6 relative z-10">
          <p className="text-xs uppercase tracking-[0.4em] text-accent text-center">Testimonials</p>
          <h1 className="mt-4 font-display text-5xl font-light leading-[0.95] sm:text-7xl text-center mb-6">
            What Are People <span className="text-gradient">Saying?</span>
          </h1>
          <p className="text-lg text-muted-foreground text-center max-w-3xl mx-auto">
            Over the years, many clients have shared how Emotional Fitness® coaching has impacted their lives.
            In the same way, your experience matters too.
          </p>
        </div>
      </section>

      {/* Main Testimonials Grid */}
      <section className="relative py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-8">
            {testimonials.map((testimonial, i) => (
              <ScrollReveal key={testimonial.name} delay={i * 0.1}>
                <GlassPanel className="!p-8 md:!p-12">
                  <div className="grid md:grid-cols-[200px_1fr] gap-8">
                    <div className="text-center md:text-left">
                      <div className="relative h-32 w-32 mx-auto md:mx-0 mb-4">
                        <div className="absolute inset-0 rounded-full bg-gradient-glow blur-md opacity-60" />
                        <div className="relative h-full w-full rounded-full bg-gradient-glow flex items-center justify-center">
                          <Quote className="h-16 w-16 text-white" />
                        </div>
                      </div>
                      <div className="flex justify-center md:justify-start gap-1 mb-2">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star key={star} className="h-4 w-4 fill-accent text-accent" />
                        ))}
                      </div>
                    </div>

                    <div>
                      <h3 className="font-display text-2xl font-light mb-2 text-gradient">{testimonial.program}</h3>
                      <p className="text-muted-foreground italic leading-relaxed mb-6">
                        "{testimonial.quote}"
                      </p>
                      <div className="pt-4 border-t border-border/50">
                        <p className="font-medium">{testimonial.name}</p>
                        <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                </GlassPanel>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why EFA Section */}
      <section className="relative py-20 bg-gradient-to-br from-background via-frost/10 to-iceberg-light/5">
        <div className="mx-auto max-w-5xl px-6">
          <ScrollReveal>
            <GlassPanel strong className="!p-12 text-center">
              <h2 className="font-display text-4xl font-light mb-6">
                Why <span className="text-gradient">Emotional Fitness Academy?</span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                At Emotional Fitness® Academy, we don't offer band-aid fixes. Instead, we provide practical
                tools through experiential education that empowers individuals and leaders to transform their
                lives—by tapping into the wisdom already within. This is Emotional Fitness®.
              </p>
            </GlassPanel>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <ScrollReveal>
            <GlassPanel strong className="!p-12">
              <h2 className="font-display text-4xl font-light mb-4">
                Let's <span className="text-gradient">Connect</span>
              </h2>
              <p className="text-muted-foreground mb-8">
                Have questions or need more info before getting started? We'd love to hear from you.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Link to="/contact">
                  <MagneticButton>Contact Us</MagneticButton>
                </Link>
                <Link to="/booking">
                  <MagneticButton variant="ghost">Book Discovery Call</MagneticButton>
                </Link>
              </div>
              <div className="pt-8 border-t border-border/50">
                <p className="text-sm text-muted-foreground mb-4">Want to share your story?</p>
                <a
                  href="https://g.page/r/CWUijsFdyMu4EB0/review"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium text-gradient"
                >
                  Leave Us a Review <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </GlassPanel>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
