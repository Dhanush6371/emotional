import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/coaching", label: "Coaching" },
  { to: "/podcast", label: "Podcast" },
  { to: "/testimonials", label: "Stories" },
  { to: "/blog", label: "Insights" },
  { to: "/contact", label: "Contact" },
] as const;

export function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled ? "py-3" : "py-5",
      )}
    >
      <div className="mx-auto max-w-7xl px-4">
        <div
          className={cn(
            "flex items-center justify-between rounded-full px-5 py-2.5 transition-all duration-500",
            scrolled ? "glass-strong" : "bg-transparent",
          )}
        >
          <Link to="/" className="flex items-center gap-2">
            <span className="relative inline-block h-7 w-7">
              <span className="absolute inset-0 rounded-full bg-gradient-glow blur-md opacity-70" />
              <span className="relative block h-full w-full rounded-full bg-gradient-glow" />
              <span className="absolute inset-1.5 rounded-full bg-white" />
            </span>
            <span className="font-display text-sm font-semibold tracking-tight">
              Emotional Fitness <span className="text-gradient">Academy</span>
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="rounded-full px-3.5 py-1.5 text-xs font-medium text-muted-foreground transition-all hover:bg-white/60 hover:text-foreground"
                activeProps={{ className: "bg-white/80 text-foreground shadow-soft" }}
                activeOptions={{ exact: l.to === "/" }}
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <Link
            to="/booking"
            className="hidden lg:inline-flex items-center rounded-full bg-gradient-glow px-5 py-2 text-xs font-semibold text-white shadow-glow transition-transform hover:scale-105"
          >
            Book Session
          </Link>

          <button onClick={() => setOpen(!open)} className="lg:hidden rounded-full p-2 glass" aria-label="Menu">
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>

        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-2 lg:hidden glass-strong rounded-3xl p-4"
          >
            <nav className="grid gap-1">
              {links.map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  onClick={() => setOpen(false)}
                  className="rounded-2xl px-4 py-3 text-sm font-medium text-muted-foreground hover:bg-white/60 hover:text-foreground"
                  activeProps={{ className: "bg-white text-foreground" }}
                >
                  {l.label}
                </Link>
              ))}
              <Link
                to="/booking"
                onClick={() => setOpen(false)}
                className="mt-2 rounded-2xl bg-gradient-glow px-4 py-3 text-center text-sm font-semibold text-white"
              >
                Book Session
              </Link>
            </nav>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
}