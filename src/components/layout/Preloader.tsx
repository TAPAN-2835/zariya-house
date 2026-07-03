"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ZMonogram } from "@/components/brand/Logo";

export function Preloader() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setVisible(false), 1600);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: [0.65, 0, 0.35, 1] }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-ivory"
          aria-hidden={!visible}
        >
          <motion.div
            initial={{ scale: 0.6, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <ZMonogram size={96} animate />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.7 }}
            className="mt-6 text-center"
          >
            <div className="serif-display text-2xl tracking-wide text-charcoal">Zariya House</div>
            <div className="eyebrow mt-2">Designs to Adorn Every Story</div>
          </motion.div>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: 160 }}
            transition={{ delay: 0.6, duration: 1 }}
            className="mt-8 h-px bg-gradient-to-r from-transparent via-gold to-transparent"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
