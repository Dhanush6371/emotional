import { motion, AnimatePresence } from "motion/react";
import { useEffect, useState } from "react";

export function AILoader() {
  const [show, setShow] = useState(true);
  useEffect(() => {
    const t = setTimeout(() => setShow(false), 1400);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-white"
        >
          <div className="relative flex flex-col items-center gap-6">
            <div className="relative h-20 w-20">
              <div className="absolute inset-0 rounded-full bg-gradient-glow blur-2xl opacity-60" />
              <motion.div
                className="relative h-full w-full rounded-full bg-gradient-glow"
                animate={{ rotate: 360, scale: [1, 1.1, 1] }}
                transition={{ rotate: { duration: 2, repeat: Infinity, ease: "linear" }, scale: { duration: 1.4, repeat: Infinity } }}
              />
              <div className="absolute inset-2 rounded-full bg-white" />
            </div>
            <p className="text-xs uppercase tracking-[0.4em] text-muted-foreground">Initializing experience</p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}