import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { IMG } from "@/data/images";
import { BRIDAL_CHAPTERS, BRIDE_STYLES } from "@/data/bridal";
import { PageBanner } from "@/components/layout/PageParts";
import { LuxButton } from "@/components/ui/lux-button";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";

export const Route = createFileRoute("/bridal")({
  head: () => ({
    meta: [
      { title: "The Bridal Edit | Zariya House" },
      { name: "description", content: "The Zariya House Bridal Universe — engagement, haldi, mehendi, wedding, reception. A curated journey through seven chapters and six bride styles." },
      { property: "og:title", content: "The Bridal Edit | Zariya House" },
      { property: "og:image", content: IMG.collection.bridal },
      { property: "og:url", content: "/bridal" },
    ],
    links: [{ rel: "canonical", href: "/bridal" }],
  }),
  component: BridalPage,
});

function BridalPage() {
  return (
    <>
      <PageBanner
        eyebrow="The Bridal Universe"
        title="A journey, chapter by chapter"
        subtitle="From the first ring to the anniversary band — an edit built for the whole story."
        image={IMG.bridalHero}
      />

      <section className="mx-auto max-w-[1440px] px-6 py-20 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="relative aspect-[4/5] overflow-hidden">
            <img src={IMG.collection.bridal} alt="Bridal statement necklace" loading="lazy" className="h-full w-full object-cover" />
          </div>
          <div>
            <div className="eyebrow mb-4 text-gold-deep">The Edit</div>
            <h2 className="serif-display text-4xl md:text-5xl text-charcoal">
              Every bride, her own <em className="text-wine">chapter</em>
            </h2>
            <p className="mt-6 text-charcoal/80">
              Zariya House's bridal atelier is not a checklist — it is a conversation. We begin with the woman, then the wedding, then the pieces that will travel with her from ceremony to ceremony, and eventually into the next generation.
            </p>
            <div className="mt-8">
              <LuxButton href="/book-consultation" variant="wine">Book Bridal Consultation</LuxButton>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-wine-deep py-24 text-ivory lg:py-32 noise-overlay">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
          <SectionHeader
            eyebrow="Seven Chapters"
            title="The Bridal Journey"
            subtitle="A ceremonial arc, told through the pieces that shape it."
            className="[&_h2]:text-ivory [&_p]:text-ivory/70"
          />
          <div className="mt-16 space-y-24">
            {BRIDAL_CHAPTERS.map((ch, i) => (
              <Reveal key={ch.key}>
                <div className={`grid gap-10 lg:grid-cols-2 lg:items-center ${i % 2 ? "lg:[&>div:first-child]:order-2" : ""}`}>
                  <div className="relative aspect-[4/5] overflow-hidden">
                    <img src={ch.image} alt={ch.title} loading="lazy" className="h-full w-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-wine-deep/60 via-transparent to-transparent" />
                  </div>
                  <div>
                    <div className="eyebrow text-gold-soft">Chapter {String(i + 1).padStart(2, "0")}</div>
                    <h3 className="serif-display mt-3 text-4xl md:text-5xl text-ivory">{ch.title}</h3>
                    <div className="mt-2 text-lg italic text-ivory/70">{ch.subtitle}</div>
                    <p className="mt-6 max-w-md text-ivory/80">{ch.description}</p>
                    <div className="mt-8">
                      <LuxButton href="/collections/bridal-radiance" variant="outline-ivory" size="sm">
                        Explore Pieces
                      </LuxButton>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1440px] px-6 py-24 lg:px-10 lg:py-32">
        <SectionHeader eyebrow="Six Styles" title="Which bride are you?" />
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {BRIDE_STYLES.map((b, i) => (
            <Reveal key={b.key} delay={i * 0.06}>
              <motion.div whileHover={{ y: -6 }} className="luxury-card h-full p-8">
                <div className="serif-display text-2xl text-charcoal">{b.title}</div>
                <div className="mt-3 text-sm text-muted-foreground">{b.note}</div>
                <div className="mt-6 h-px w-10 bg-gold" />
              </motion.div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 py-24 text-center">
        <blockquote className="serif-display text-3xl leading-tight text-charcoal md:text-4xl">
          "The right bridal piece is the one you can imagine your daughter fastening around her own neck someday."
        </blockquote>
        <div className="eyebrow mt-6 text-gold-deep">— Studio Journal</div>
      </section>
    </>
  );
}
