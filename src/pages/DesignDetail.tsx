import { Link, useParams } from "react-router-dom";

import { useState } from "react";
import { motion } from "framer-motion";
import { Heart, Share2, Download, MessageCircle, Sparkles, ImageIcon } from "lucide-react";
import { DESIGNS, findDesign } from "@/data/designs";
import { Breadcrumbs } from "@/components/layout/PageParts";
import { DesignCard } from "@/components/DesignCard";
import { LuxButton } from "@/components/ui/lux-button";

function DesignDetail() {
  const { slug } = useParams();
  const design = findDesign(slug!);
  if (!design) return <div className="min-h-screen grid place-items-center"><div className="text-center serif-display text-2xl">Design not found</div></div>;
  const [saved, setSaved] = useState(false);
  const similar = DESIGNS.filter((d) => d.slug !== design.slug && d.category === design.category).slice(0, 4);
  if (similar.length < 4) {
    similar.push(...DESIGNS.filter((d) => d.slug !== design.slug && !similar.includes(d)).slice(0, 4 - similar.length));
  }

  return (
    <>
      <div className="mx-auto max-w-[1440px] px-6 pt-28 pb-6 lg:px-10">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Collections", href: "/collections" },
            { label: design.category },
            { label: design.name },
          ]}
        />
      </div>

      <section className="mx-auto grid max-w-[1440px] gap-12 px-6 py-8 lg:grid-cols-[1.2fr_1fr] lg:gap-16 lg:px-10">
        <div className="space-y-4">
          <motion.div
            initial={{ opacity: 0, scale: 1.02 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative aspect-[4/5] overflow-hidden bg-secondary"
          >
            <img src={design.image} alt={design.name} className="h-full w-full object-cover" />
            <button className="absolute bottom-4 right-4 grid h-11 w-11 place-items-center bg-ivory/90 text-charcoal shadow-md backdrop-blur-sm transition-colors hover:bg-ivory" aria-label="Fullscreen">
              <ImageIcon size={18} />
            </button>
          </motion.div>
          <div className="grid grid-cols-3 gap-3">
            <div className="aspect-square overflow-hidden bg-secondary">
              <img src={design.image} alt="" className="h-full w-full object-cover opacity-90" />
            </div>
            <div className="grid aspect-square place-items-center border border-dashed border-border text-xs uppercase tracking-widest text-muted-foreground">
              360° View
            </div>
            <div className="grid aspect-square place-items-center border border-dashed border-border text-xs uppercase tracking-widest text-muted-foreground">
              Video
            </div>
          </div>
        </div>

        <div className="lg:sticky lg:top-28 lg:self-start">
          <div className="eyebrow mb-3 text-gold-deep">{design.material}</div>
          <h1 className="serif-display text-4xl text-charcoal md:text-5xl">{design.name}</h1>

          <div className="mt-4 flex flex-wrap gap-2">
            {[...design.occasion, ...design.style].map((t) => (
              <span key={t} className="border border-border px-3 py-1 text-xs text-charcoal/75">{t}</span>
            ))}
          </div>

          <div className="gold-divider my-8" />

          <div className="eyebrow mb-3 text-gold-deep">The Story</div>
          <p className="text-charcoal/85 leading-relaxed">{design.story}</p>

          <div className="mt-8 grid grid-cols-2 gap-4">
            {design.details.map((d: { label: string; value: string }) => (
              <div key={d.label}>
                <div className="eyebrow mb-1 text-[0.6rem]">{d.label}</div>
                <div className="text-sm text-charcoal">{d.value}</div>
              </div>
            ))}
          </div>

          <div className="mt-10 space-y-3">
            <LuxButton href={`/book-consultation?design=${design.slug}`} variant="wine" className="w-full">
              Book Styling Consultation
            </LuxButton>
            <div className="grid grid-cols-2 gap-3">
              <button
                onClick={() => setSaved((s) => !s)}
                className={`shine-sweep flex items-center justify-center gap-2 border px-4 py-3 text-[0.68rem] font-medium uppercase tracking-[0.24em] transition-all ${saved ? "border-wine bg-wine text-ivory" : "border-gold text-gold-deep hover:bg-gold/10"}`}
              >
                <Heart size={14} className={saved ? "fill-current" : ""} /> {saved ? "Saved" : "Save to Inspiration"}
              </button>
              <button className="flex items-center justify-center gap-2 border border-border px-4 py-3 text-[0.68rem] font-medium uppercase tracking-[0.24em] text-charcoal transition-colors hover:border-gold">
                <Share2 size={14} /> Share
              </button>
              <button className="flex items-center justify-center gap-2 border border-border px-4 py-3 text-[0.68rem] font-medium uppercase tracking-[0.24em] text-charcoal transition-colors hover:border-gold">
                <Download size={14} /> Catalogue PDF
              </button>
              <button className="flex items-center justify-center gap-2 border border-border px-4 py-3 text-[0.68rem] font-medium uppercase tracking-[0.24em] text-charcoal transition-colors hover:border-gold">
                <MessageCircle size={14} /> WhatsApp
              </button>
            </div>
          </div>

          <div className="mt-8 border-t border-border pt-6 text-xs text-muted-foreground">
            <Sparkles size={12} className="mr-2 inline text-gold" />
            Every Zariya House piece is customisable in metal, stone and size during consultation.
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1440px] px-6 py-20 lg:px-10">
        <div className="eyebrow mb-6 text-gold-deep">Similar Designs</div>
        <div className="grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {similar.map((d) => <DesignCard key={d.slug} design={d} />)}
        </div>
      </section>

      <section className="mx-auto max-w-[1440px] px-6 py-10 lg:px-10">
        <div className="border border-border bg-secondary/50 p-10 text-center">
          <div className="serif-display text-3xl text-charcoal">Want to see this piece in person?</div>
          <p className="mt-3 text-muted-foreground">Book a private viewing at our studio or online with a stylist.</p>
          <div className="mt-6 flex justify-center gap-3">
            <LuxButton href="/book-consultation" variant="wine">Book Consultation</LuxButton>
            <LuxButton href="/contact" variant="outline-gold">Request More Images</LuxButton>
          </div>
        </div>
      </section>
    </>
  );
}

export default DesignDetail;
