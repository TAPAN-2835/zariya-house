
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { IMG } from "@/data/images";
import { BRIDAL_CHAPTERS, BRIDE_STYLES } from "@/data/bridal";
import { PageBanner } from "@/components/layout/PageParts";
import { LuxButton } from "@/components/ui/lux-button";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";

gsap.registerPlugin(ScrollTrigger);

function BridalPage() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const panelsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const panels = panelsRef.current;
    const container = scrollRef.current;
    if (!panels || !container) return;

    const ctx = gsap.context(() => {
      gsap.to(panels, {
        x: () => -(panels.scrollWidth - window.innerWidth),
        ease: "none",
        scrollTrigger: {
          trigger: container,
          pin: true,
          scrub: 1,
          end: () => "+=" + (panels.scrollWidth - window.innerWidth),
        }
      });
    }, container);
    
    return () => ctx.revert();
  }, []);

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

      <section className="bg-wine-deep py-24 text-ivory lg:py-32 noise-overlay relative">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-10 mb-16">
          <SectionHeader
            eyebrow="Seven Chapters"
            title="The Bridal Journey"
            subtitle="A ceremonial arc, told through the pieces that shape it."
            className="[&_h2]:text-ivory [&_p]:text-ivory/70"
          />
        </div>
        
        {/* GSAP Horizontal Scroll Container */}
        <div ref={scrollRef} className="h-[300vh] relative w-full">
          <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center">
            <div ref={panelsRef} className="flex gap-16 px-6 lg:px-20 min-w-max h-full items-center">
              {BRIDAL_CHAPTERS.map((ch, i) => (
                <div key={ch.key} className="w-[85vw] max-w-[1000px] shrink-0 h-[70vh] flex flex-col justify-center">
                  <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
                    <div className="relative aspect-[4/5] lg:aspect-square overflow-hidden shadow-2xl">
                      <img src={ch.image} alt={ch.title} loading="lazy" className="h-full w-full object-cover" />
                      <div className="absolute inset-0 bg-gradient-to-t from-wine-deep/80 via-transparent to-transparent" />
                      <div className="absolute inset-x-0 bottom-0 p-8 lg:hidden">
                        <div className="eyebrow text-gold-soft drop-shadow-md">Chapter {String(i + 1).padStart(2, "0")}</div>
                        <h3 className="serif-display mt-2 text-3xl text-ivory drop-shadow-md">{ch.title}</h3>
                      </div>
                    </div>
                    <div className="hidden lg:block lg:pl-10">
                      <div className="eyebrow text-gold-soft">Chapter {String(i + 1).padStart(2, "0")}</div>
                      <h3 className="serif-display mt-4 text-5xl xl:text-6xl text-ivory">{ch.title}</h3>
                      <div className="mt-4 text-xl italic text-ivory/70">{ch.subtitle}</div>
                      <p className="mt-8 text-lg text-ivory/80 leading-relaxed">{ch.description}</p>
                      <div className="mt-10">
                        <LuxButton href="/collections/bridal-radiance" variant="outline-gold">
                          Explore {ch.title} Pieces
                        </LuxButton>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
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

export default BridalPage;
