import { Link, useParams } from "react-router-dom";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BROWSE_CATEGORIES, MATERIALS } from "@/data/categories";
import { DESIGNS } from "@/data/designs";
import { PageBanner, Breadcrumbs } from "@/components/layout/PageParts";
import { DesignCard } from "@/components/DesignCard";
import { LuxButton } from "@/components/ui/lux-button";

function CategoryPage() {
  const { category } = useParams();
  const cat = BROWSE_CATEGORIES.find((c) => c.slug === category);
  const [material, setMaterial] = useState<string>("all");
  const [occasion, setOccasion] = useState<string>("all");

  const title = cat?.title ?? (category || "").replace(/-/g, " ");
  const designs = DESIGNS.filter((d) => {
    if (material !== "all" && !d.material.toLowerCase().includes(material)) return false;
    if (occasion !== "all" && !d.occasion.some((o) => o.toLowerCase() === occasion)) return false;
    return true;
  });

  const occasions = ["all", "wedding", "engagement", "daily wear", "festive", "office wear", "reception"];

  return (
    <>
      <PageBanner eyebrow="Category" title={title} subtitle={cat?.description} image={cat?.image} />
      <div className="mx-auto max-w-[1440px] px-6 py-8 lg:px-10">
        <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Categories", href: "/collections" }, { label: title }]} />
      </div>

      <section className="mx-auto max-w-[1440px] px-6 pb-24 lg:px-10">
        <div className="grid gap-8 lg:grid-cols-[240px_1fr]">
          <aside className="space-y-8">
            <div>
              <div className="eyebrow mb-3 text-gold-deep">Material</div>
              <div className="space-y-1.5">
                {["all", ...MATERIALS.map((m) => m.slug.split("-")[0])].map((m) => (
                  <button
                    key={m}
                    onClick={() => setMaterial(m)}
                    className={`block w-full text-left text-sm capitalize transition-colors ${material === m ? "text-wine font-medium" : "text-charcoal/70 hover:text-charcoal"}`}
                  >
                    {m}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <div className="eyebrow mb-3 text-gold-deep">Occasion</div>
              <div className="space-y-1.5">
                {occasions.map((o) => (
                  <button
                    key={o}
                    onClick={() => setOccasion(o)}
                    className={`block w-full text-left text-sm capitalize transition-colors ${occasion === o ? "text-wine font-medium" : "text-charcoal/70 hover:text-charcoal"}`}
                  >
                    {o}
                  </button>
                ))}
              </div>
            </div>
            <div className="border-t border-border pt-6">
              <LuxButton href="/book-consultation" variant="outline-gold" size="sm">Book Consultation</LuxButton>
            </div>
          </aside>

          <div>
            <div className="mb-6 flex items-center justify-between text-sm text-muted-foreground">
              <div>{designs.length} designs</div>
              <div>Curated by Zariya House</div>
            </div>
            <motion.div layout className="min-h-[400px]">
              <AnimatePresence mode="popLayout">
                {designs.length ? (
                  <motion.div layout className="grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
                    {designs.map((d) => (
                      <motion.div
                        layout
                        key={d.slug}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        transition={{ duration: 0.3 }}
                      >
                        <DesignCard design={d} />
                      </motion.div>
                    ))}
                  </motion.div>
                ) : (
                  <motion.div
                    key="empty"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="grid place-items-center border border-border p-16 text-center"
                  >
                    <div className="serif-display text-2xl text-charcoal">No pieces match this filter</div>
                    <p className="mt-2 text-muted-foreground">Try changing your material or occasion selection.</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        </div>

        <div className="mt-20">
          <div className="eyebrow mb-6 text-gold-deep">Related Categories</div>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {BROWSE_CATEGORIES.filter((c) => c.slug !== category).slice(0, 4).map((c) => (
              <Link key={c.slug} to={`/category/${c.slug }`} className="group block">
                <div className="relative aspect-square overflow-hidden bg-secondary">
                  <img src={c.image} alt={c.title} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                </div>
                <div className="mt-2 serif-display text-base text-charcoal group-hover:text-wine">{c.title}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default CategoryPage;
