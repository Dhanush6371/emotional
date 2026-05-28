import { Link } from "@tanstack/react-router";
import { Instagram, Linkedin, Youtube, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative mt-32 overflow-hidden border-t border-border/60">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/2 h-[500px] w-[900px] -translate-x-1/2 rounded-full opacity-30 blur-3xl"
        style={{ background: "var(--gradient-glow)" }}
      />
      <div className="relative mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <h3 className="font-display text-3xl font-light leading-tight">
              Train the <span className="text-gradient">mind</span> like the body.
            </h3>
            <p className="mt-4 max-w-md text-sm text-muted-foreground">
              Emotional Fitness Academy — an AI-native wellness ecosystem for the next generation of resilient minds.
            </p>
            <div className="mt-6 flex gap-2">
              {[Instagram, Linkedin, Youtube, Twitter].map((Icon, i) => (
                <a key={i} href="#" className="glass rounded-full p-3 transition-transform hover:scale-110">
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="mb-4 text-xs uppercase tracking-[0.3em] text-muted-foreground">Explore</p>
            <ul className="space-y-3 text-sm">
              <li><Link to="/about" className="hover:text-gradient">About</Link></li>
              <li><Link to="/services" className="hover:text-gradient">Services</Link></li>
              <li><Link to="/coaching" className="hover:text-gradient">Coaching</Link></li>
              <li><Link to="/podcast" className="hover:text-gradient">Podcast</Link></li>
            </ul>
          </div>

          <div>
            <p className="mb-4 text-xs uppercase tracking-[0.3em] text-muted-foreground">Connect</p>
            <ul className="space-y-3 text-sm">
              <li><Link to="/contact" className="hover:text-gradient">Contact</Link></li>
              <li><Link to="/booking" className="hover:text-gradient">Book Session</Link></li>
              <li><Link to="/testimonials" className="hover:text-gradient">Stories</Link></li>
              <li><Link to="/blog" className="hover:text-gradient">Insights</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-border/60 pt-8 md:flex-row">
          <p className="text-xs text-muted-foreground">© {new Date().getFullYear()} Emotional Fitness Academy. All rights reserved.</p>
          <p className="text-xs text-muted-foreground">Designed for the future of wellness.</p>
        </div>
      </div>
    </footer>
  );
}