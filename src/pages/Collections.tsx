import { Link } from "react-router-dom";

import { COLLECTIONS } from "@/data/collections";
import { PageBanner, Breadcrumbs } from "@/components/layout/PageParts";
import { Reveal } from "@/components/ui/Reveal";
import { ArrowUpRight } from "lucide-react";
import { LuxButton } from "@/components/ui/lux-button";

function CollectionsPage() {
  return (
    <>
      <PageBanner
        eyebrow="Editorial"
        title="Collections"
        subtitle="Curated chapters of design — each one telling its own story of material, silhouette and season."
      />
      <div className="mx-auto max-w-[1440px] px-6 py-8 lg:px-10">
        <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Collections" }]} />
      </div>

      <section className="mx-auto max-w-[1440px] px-6 pb-24 lg:px-10">
        <div className="grid gap-10 md:grid-cols-2">
          {COLLECTIONS.map((c, i) => (
            <Reveal key={c.slug} delay={(i % 2) * 0.1}>
              <Link to={`/collections/${c.slug }`} className="group block">
                <div className="relative aspect-[4/5] overflow-hidden bg-charcoal">
                  <img
                    src={c.image}
                    alt={c.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-[1400ms] group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/85 via-charcoal/10 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-8 text-ivory">
                    <div className="mb-3 flex flex-wrap gap-2">
                      {c.materials.map((m) => (
                        <span key={m} className="border border-ivory/40 px-2 py-0.5 text-[0.6rem] uppercase tracking-[0.22em]">
                          {m}
                        </span>
                      ))}
                    </div>
                    <div className="serif-display text-4xl">{c.title}</div>
                    <div className="mt-2 max-w-md text-sm text-ivory/85">{c.tagline}</div>
                    <div className="mt-4 flex items-center gap-2 text-[0.7rem] font-medium uppercase tracking-[0.28em] text-gold-soft">
                      View Story <ArrowUpRight size={14} />
                    </div>
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>

        <div className="mt-20 border border-border p-10 text-center">
          <div className="serif-display text-3xl text-charcoal">Not sure where to begin?</div>
          <p className="mt-3 text-muted-foreground">Speak with our stylists — they'll walk you through the collection for your story.</p>
          <div className="mt-6 flex justify-center">
            <LuxButton href="/book-consultation" variant="wine">Book Consultation</LuxButton>
          </div>
        </div>
      </section>
    </>
  );
}

export default CollectionsPage;
