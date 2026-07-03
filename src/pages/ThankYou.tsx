import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { ZMonogram } from "@/components/brand/Logo";
import { LuxButton } from "@/components/ui/lux-button";

function ThankYou() {
  return (
    <section className="mx-auto flex min-h-[100svh] max-w-2xl flex-col items-center justify-center px-6 py-32 text-center">
      <motion.div initial={{ scale: 0.6, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}>
        <div className="relative">
          <ZMonogram size={96} animate />
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.7, duration: 0.5 }}
            className="absolute -bottom-2 -right-2 grid h-10 w-10 place-items-center rounded-full bg-wine text-ivory"
          >
            <Check size={18} />
          </motion.div>
        </div>
      </motion.div>
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.7 }}
        className="serif-display mt-10 text-4xl md:text-5xl text-charcoal"
      >
        Your consultation is on its way
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.7 }}
        className="mt-6 max-w-lg text-charcoal/80"
      >
        A stylist from Zariya House will reach out within 24 hours to confirm your date and answer any questions.
        In the meantime, feel free to keep browsing — we've saved your inspiration.
      </motion.p>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.7 }}
        className="mt-12 flex flex-wrap justify-center gap-3"
      >
        <LuxButton href="/collections" variant="wine">Continue Browsing</LuxButton>
        <LuxButton href="/" variant="outline-gold">Return Home</LuxButton>
      </motion.div>

      <div className="mt-16 border-t border-border pt-8 text-sm text-muted-foreground">
        Next steps · Our stylist will call to confirm · A private link will be shared for online consultations · Please arrive ten minutes early for in-studio visits
      </div>
    </section>
  );
}

export default ThankYou;
