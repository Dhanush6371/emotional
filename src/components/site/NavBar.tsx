import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  {
    label: "Programs",
    items: [
      { to: "/1-on-1-program", label: "1-on-1 Naturopath Consultation" },
      { to: "/7-pillars", label: "7 Pillars of Self" },
      { to: "/coach-training", label: "Coach Training Course" },
    ]
  },
  { to: "/services", label: "Services" },
  { to: "/testimonials", label: "Testimonials" },
  { to: "/coaches-corner", label: "Coach's Corner" },
  { to: "/podcast", label: "Podcast" },
  { to: "/blog", label: "Blog" },
  { to: "/contact", label: "Contact" },
] as const;

export function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [programsOpen, setProgramsOpen] = useState(false);

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
            {links.map((link) => {
              if ('items' in link) {
                return (
                  <div
                    key={link.label}
                    className="relative"
                    onMouseEnter={() => setProgramsOpen(true)}
                    onMouseLeave={() => setProgramsOpen(false)}
                  >
                    <button
                      className="rounded-full px-3.5 py-1.5 text-xs font-medium text-muted-foreground transition-all hover:bg-white/60 hover:text-foreground flex items-center gap-1"
                    >
                      {link.label}
                      <ChevronDown className="h-3 w-3" />
                    </button>

                    <AnimatePresence>
                      {programsOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-0 mt-2 w-64 glass-strong rounded-2xl p-2 shadow-lg"
                        >
                          {link.items.map((item) => (
                            <Link
                              key={item.to}
                              to={item.to}
                              className="block rounded-xl px-4 py-2.5 text-xs font-medium text-muted-foreground transition-all hover:bg-white/60 hover:text-foreground"
                              activeProps={{ className: "bg-white/80 text-foreground" }}
                            >
                              {item.label}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              }

              return (
                <Link
                  key={link.to}
                  to={link.to}
                  className="rounded-full px-3.5 py-1.5 text-xs font-medium text-muted-foreground transition-all hover:bg-white/60 hover:text-foreground"
                  activeProps={{ className: "bg-white/80 text-foreground shadow-soft" }}
                  activeOptions={{ exact: link.to === "/" }}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <Link
            to="/booking"
            className="hidden lg:inline-flex items-center rounded-full bg-gradient-glow px-5 py-2 text-xs font-semibold text-white shadow-glow transition-transform hover:scale-105"
          >
            Book Session
          </Link>

          <button onClick={() => setMobileOpen(!mobileOpen)} className="lg:hidden rounded-full p-2 glass" aria-label="Menu">
            {mobileOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>

        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-2 lg:hidden glass-strong rounded-3xl p-4"
          >
            <nav className="grid gap-1">
              {links.map((link) => {
                if ('items' in link) {
                  return (
                    <div key={link.label}>
                      <div className="px-4 py-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                        {link.label}
                      </div>
                      {link.items.map((item) => (
                        <Link
                          key={item.to}
                          to={item.to}
                          onClick={() => setMobileOpen(false)}
                          className="rounded-2xl px-4 py-3 text-sm font-medium text-muted-foreground hover:bg-white/60 hover:text-foreground block pl-8"
                          activeProps={{ className: "bg-white text-foreground" }}
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  );
                }

                return (
                  <Link
                    key={link.to}
                    to={link.to}
                    onClick={() => setMobileOpen(false)}
                    className="rounded-2xl px-4 py-3 text-sm font-medium text-muted-foreground hover:bg-white/60 hover:text-foreground"
                    activeProps={{ className: "bg-white text-foreground" }}
                  >
                    {link.label}
                  </Link>
                );
              })}
              <Link
                to="/booking"
                onClick={() => setMobileOpen(false)}
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
