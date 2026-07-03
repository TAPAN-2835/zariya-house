import { Link } from "react-router-dom";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { IMG } from "@/data/images";
import { COLLECTIONS } from "@/data/collections";
import { BROWSE_CATEGORIES, MATERIALS } from "@/data/categories";
import { BRIDAL_CHAPTERS, BRIDE_STYLES } from "@/data/bridal";
import { CRAFT_PILLARS, TESTIMONIALS } from "@/data/misc";
import { DESIGNS } from "@/data/designs";
import { LuxButton } from "@/components/ui/lux-button";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal } from "@/components/ui/Reveal";
import { ZMonogram } from "@/components/brand/Logo";

function Home() {
  return (
    <div className="overflow-hidden">
      <Hero />
      <WhyZariyaHouse />
      <MaterialDiscovery />
      <BrowseByDesign />
      <FeaturedCollections />
      <BridalUniverse />
      <SignatureRings />
      <CraftStory />
      <Lookbook />
      <Testimonials />
      <FinalCTA />
    </div>
  );
}

function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const y = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, -60]);

  return (
    <section ref={ref} className="relative h-[100svh] min-h-[500px] md:min-h-[720px] w-full overflow-hidden bg-charcoal">
      <motion.div style={{ scale, y }} className="absolute inset-0">
        <img
          src={IMG.hero}
          alt="Ornate gold necklace with garnet drops"
          className="h-full w-full object-cover"
          fetchPriority="high"
        />
      </motion.div>
      {/* Layered overlays for readable hero text */}
      <div className="absolute inset-0 bg-[var(--gradient-hero-overlay)]" />
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/60 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-r from-wine-deep/75 via-wine-deep/30 to-transparent" />

      {/* Sparkles */}
      {[...Array(12)].map((_, i) => (
        <motion.span
          key={i}
          className="absolute h-1 w-1 rounded-full bg-gold-soft"
          style={{ left: `${(i * 137) % 100}%`, top: `${(i * 61) % 100}%` }}
          animate={{ opacity: [0, 1, 0], scale: [0.5, 1.4, 0.5] }}
          transition={{ duration: 3, delay: i * 0.4, repeat: Infinity }}
        />
      ))}

      <motion.div
        style={{ y: textY }}
        className="relative z-10 mx-auto flex h-full max-w-[1440px] flex-col justify-end px-6 pb-24 lg:px-10 lg:pb-32"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.7, duration: 1, ease: [0.22, 1, 0.36, 1] }}
          style={{ textShadow: "0 2px 24px rgba(0,0,0,0.55)" }}
        >
          <div className="mb-6 flex items-center gap-3">
            <ZMonogram size={44} />
            <div className="eyebrow text-gold-soft">A Design Showcase</div>
          </div>
          <h1 className="serif-display max-w-3xl text-4xl leading-[1.05] text-ivory sm:text-5xl md:text-6xl lg:text-7xl">
            Jewellery Designs for{" "}
            <em className="bg-gradient-to-r from-[#F5D68A] via-[#E9C46A] to-[#F5D68A] bg-clip-text not-italic text-transparent drop-shadow-[0_2px_10px_rgba(0,0,0,0.45)]">
              Every Story
            </em>{" "}
            You Carry
          </h1>
          <p className="mt-6 max-w-xl text-base text-ivory/90 sm:text-lg">
            Explore curated gold, silver, rose gold and platinum ornaments — crafted for weddings, celebrations and the quiet, everyday elegance in between.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <LuxButton href="/collections" variant="gold">Explore Collections</LuxButton>
            <LuxButton href="/bridal" variant="outline-ivory">View Bridal Edit</LuxButton>
          </div>
        </motion.div>
      </motion.div>

      {/* Floating parallax card */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 2.3, duration: 1.2, ease: "easeOut" }}
        className="absolute right-6 top-1/2 -translate-y-1/2 md:right-10 xl:right-16"
      >
        <div className="group w-40 sm:w-48 md:w-56 border border-ivory/30 bg-ivory/10 p-3 backdrop-blur-md transition-all hover:bg-ivory/20 hover:scale-105 cursor-pointer">
          <div className="overflow-hidden">
            <img src={IMG.design.earrings} alt="Kundan jhumka" className="aspect-square w-full object-cover transition-transform duration-700 group-hover:scale-110" />
          </div>
          <div className="mt-3">
            <div className="eyebrow text-gold-soft">Signature</div>
            <div className="serif-display mt-1 text-lg text-ivory">Rani Kundan Jhumka</div>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-ivory/70"
      >
        <div className="flex flex-col items-center gap-2">
          <div className="h-8 w-px animate-pulse bg-gold-soft" />
          <span className="eyebrow text-[0.55rem] text-ivory/60">Scroll</span>
        </div>
      </motion.div>
    </section>
  );
}

function WhyZariyaHouse() {
  return (
    <section className="bg-ivory py-24 lg:py-32">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          <div>
            <div className="eyebrow mb-4 text-gold-deep">The Showroom Experience</div>
            <h2 className="serif-display text-4xl text-charcoal md:text-5xl">
              Not just jewellery, but a legacy you wear
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-charcoal/80">
              For over three generations, Zariya House has stood for uncompromising purity, distinct design, and an intimate showroom experience. 
              We don't just sell ornaments; we co-create heirlooms tailored to your story.
            </p>
            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              {[
                { title: "Certified Purity", desc: "Every diamond and metal carries international hallmarking." },
                { title: "Bespoke Design", desc: "Work with our designers to alter or create from scratch." },
                { title: "Lifetime Polish", desc: "Complimentary polishing for every piece you take home." },
                { title: "Private Viewings", desc: "Experience the showroom in an exclusive, private appointment." },
              ].map((b) => (
                <div key={b.title} className="border-l border-gold pl-4">
                  <div className="serif-display text-lg text-charcoal">{b.title}</div>
                  <div className="mt-1 text-sm text-muted-foreground">{b.desc}</div>
                </div>
              ))}
            </div>
            <div className="mt-12">
              <LuxButton href="/about" variant="outline-gold">Discover Our Heritage</LuxButton>
            </div>
          </div>
          <div className="relative aspect-square overflow-hidden bg-secondary">
            <img src={IMG.craftsmanship} alt="Zariya House showroom" className="h-full w-full object-cover opacity-90 transition-transform duration-1000 hover:scale-105" />
            <div className="absolute inset-0 bg-charcoal/5" />
          </div>
        </div>
      </div>
    </section>
  );
}

function MaterialDiscovery() {
  return (
    <section className="mx-auto max-w-[1440px] px-6 py-24 lg:px-10 lg:py-32">
      <SectionHeader
        eyebrow="Discover by Material"
        title="A metal for every moment"
        subtitle="Four metals, endless silhouettes. Begin your journey with the material that draws you in."
      />
      <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {MATERIALS.map((m, i) => (
          <Reveal key={m.slug} delay={i * 0.1}>
            <Link
              to={`/category/material/${m.slug }`}
              className="group luxury-card block"
            >
              <div className="relative aspect-[3/4] overflow-hidden">
                <img
                  src={m.image}
                  alt={`${m.title} jewellery`}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-[1400ms] group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-transparent to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6 text-ivory">
                  <div className="serif-display text-2xl">{m.title}</div>
                </div>
              </div>
              <div className="p-6">
                <p className="text-sm text-muted-foreground">{m.description}</p>
                <div className="mt-4 flex items-center gap-2 text-[0.7rem] font-medium uppercase tracking-[0.28em] text-wine">
                  Explore Designs <ArrowUpRight size={14} />
                </div>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function BrowseByDesign() {
  return (
    <section className="bg-gradient-to-b from-ivory to-secondary/40 py-24 lg:py-32">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
        <SectionHeader
          eyebrow="Browse by Design"
          title="Find your silhouette"
          subtitle="From bridal statement necklaces to everyday chains — a starting point for every story."
        />
        <div className="mt-16 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {BROWSE_CATEGORIES.slice(0, 15).map((c, i) => (
            <Reveal key={c.slug} delay={i * 0.03}>
              <Link
                to={`/category/${c.slug }`}
                className="group block"
              >
                <div className="relative aspect-square overflow-hidden bg-secondary">
                  <img
                    src={c.image}
                    alt={c.title}
                    loading="lazy"
                    className="h-full w-full object-cover opacity-90 transition-all duration-700 group-hover:scale-110 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-charcoal/10 transition-opacity group-hover:bg-charcoal/0" />
                </div>
                <div className="mt-3 text-center">
                  <div className="serif-display text-lg text-charcoal transition-colors group-hover:text-wine">
                    {c.title}
                  </div>
                  <div className="mt-0.5 text-xs text-muted-foreground">{c.description}</div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function FeaturedCollections() {
  return (
    <section className="mx-auto max-w-[1440px] px-6 py-24 lg:px-10 lg:py-32">
      <SectionHeader
        eyebrow="Editorial"
        title="Featured Collections"
        subtitle="Chapters of design — each a story of a season, a bride, a life."
      />
      <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {COLLECTIONS.map((c, i) => (
          <Reveal key={c.slug} delay={(i % 3) * 0.1}>
            <Link
              to={`/collections/${c.slug }`}
              className="group block"
            >
              <div className="relative aspect-[4/5] overflow-hidden bg-charcoal">
                <img
                  src={c.image}
                  alt={c.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-[1400ms] group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/10 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-7 text-ivory">
                  <div className="mb-2 flex flex-wrap gap-2">
                    {c.materials.slice(0, 2).map((m) => (
                      <span key={m} className="border border-ivory/40 px-2 py-0.5 text-[0.6rem] uppercase tracking-[0.22em]">
                        {m}
                      </span>
                    ))}
                  </div>
                  <div className="serif-display text-3xl">{c.title}</div>
                  <div className="mt-2 max-w-sm text-sm text-ivory/85">{c.tagline}</div>
                  <div className="mt-4 flex items-center gap-2 text-[0.7rem] font-medium uppercase tracking-[0.28em] text-gold-soft">
                    View Story <ArrowUpRight size={14} />
                  </div>
                </div>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function BridalUniverse() {
  return (
    <section className="relative overflow-hidden bg-wine-deep py-24 text-ivory lg:py-32 noise-overlay">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:items-end">
          <div>
            <div className="eyebrow mb-4 text-gold-soft">The Bridal Universe</div>
            <h2 className="serif-display text-4xl md:text-5xl lg:text-6xl">
              A journey, told in <em className="text-gold-soft">seven chapters</em>
            </h2>
            <p className="mt-6 max-w-lg text-ivory/80">
              From the first engagement ring to the anniversary band — a bridal edit that keeps counting with you.
            </p>
          </div>
          <div className="flex gap-3 lg:justify-end">
            <LuxButton href="/bridal" variant="gold">Explore Bridal Designs</LuxButton>
          </div>
        </div>

        {/* Chapter horizontal scroll */}
        <div className="mt-16 -mx-6 overflow-x-auto pb-6 lg:-mx-10 [scrollbar-width:thin]">
          <div className="flex min-w-max gap-6 px-6 lg:px-10">
            {BRIDAL_CHAPTERS.map((ch, i) => (
              <motion.div
                key={ch.key}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.7 }}
                className="w-72 shrink-0 md:w-80"
              >
                <div className="relative aspect-[3/4] overflow-hidden">
                  <img src={ch.image} alt={ch.title} loading="lazy" className="h-full w-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-wine-deep via-wine-deep/20 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-5">
                    <div className="eyebrow text-gold-soft">Chapter {String(i + 1).padStart(2, "0")}</div>
                    <div className="serif-display mt-1 text-2xl text-ivory">{ch.title}</div>
                    <div className="mt-1 text-xs italic text-ivory/70">{ch.subtitle}</div>
                    <p className="mt-3 text-sm text-ivory/80">{ch.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mt-16">
          <div className="eyebrow mb-6 text-gold-soft">Bride Styles</div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {BRIDE_STYLES.map((b, i) => (
              <Reveal key={b.key} delay={i * 0.05}>
                <div className="group border border-ivory/20 p-6 transition-all hover:border-gold hover:bg-ivory/5">
                  <div className="serif-display text-2xl text-ivory">{b.title}</div>
                  <div className="mt-2 text-sm text-ivory/70">{b.note}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function SignatureRings() {
  const shapes = ["Round", "Oval", "Pear", "Emerald", "Princess", "Cushion", "Heart"];
  return (
    <section className="mx-auto max-w-[1440px] px-6 py-24 lg:px-10 lg:py-32">
      <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
        <div className="relative aspect-[4/5] overflow-hidden">
          <img src={IMG.collection.couple} alt="Signature rings" loading="lazy" className="h-full w-full object-cover" />
        </div>
        <div>
          <div className="eyebrow mb-4 text-gold-deep">Signature Rings</div>
          <h2 className="serif-display text-4xl md:text-5xl text-charcoal">
            Rings that say what words won't
          </h2>
          <p className="mt-6 text-muted-foreground">
            From solitaire-inspired engagement rings to sculpted men's bands, our ring atelier spans eight silhouettes and seven stone shapes.
          </p>
          <div className="mt-8 flex flex-wrap gap-2">
            {[
              "Engagement",
              "Couple Bands",
              "Solitaire Inspired",
              "Cocktail",
              "Daily Wear",
              "Men's Rings",
              "Platinum Bands",
              "Rose Gold",
            ].map((r) => (
              <span key={r} className="border border-border px-3 py-1.5 text-xs text-charcoal/80 transition-colors hover:border-gold hover:text-wine">
                {r}
              </span>
            ))}
          </div>
          <div className="mt-8">
            <div className="eyebrow mb-3">Stone Shapes</div>
            <div className="flex flex-wrap gap-2">
              {shapes.map((s) => (
                <motion.span
                  key={s}
                  whileHover={{ scale: 1.05 }}
                  className="cursor-default border border-gold/50 bg-gold/5 px-4 py-1.5 text-xs text-gold-deep"
                >
                  {s}
                </motion.span>
              ))}
            </div>
          </div>
          <div className="mt-10">
            <LuxButton href="/category/rings" variant="wine">Explore Ring Atelier</LuxButton>
          </div>
        </div>
      </div>
    </section>
  );
}

function CraftStory() {
  return (
    <section className="relative overflow-hidden bg-secondary/60 py-24 lg:py-32">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
        <SectionHeader
          eyebrow="Craft & Material"
          title="Four hands, seven stages, one piece"
          subtitle="A brief look at how a Zariya House design is made — from pencil sketch to final polish."
        />
        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {CRAFT_PILLARS.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.08}>
              <div className="luxury-card h-full p-8">
                <div className="grid h-12 w-12 place-items-center bg-gold/15 text-gold-deep">
                  <Sparkles size={20} />
                </div>
                <div className="serif-display mt-6 text-2xl text-charcoal">{p.title}</div>
                <p className="mt-3 text-sm text-muted-foreground">{p.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <div className="mt-16 grid gap-8 lg:grid-cols-2 lg:items-center">
          <div className="relative aspect-[16/10] overflow-hidden">
            <img src={IMG.craftsmanship} alt="Jeweller at work" loading="lazy" className="h-full w-full object-cover" />
          </div>
          <div>
            <blockquote className="serif-display text-3xl leading-tight text-charcoal md:text-4xl">
              "A piece of jewellery is finished when the hand and the light agree."
            </blockquote>
            <div className="eyebrow mt-6 text-gold-deep">— Studio Notes</div>
            <div className="mt-8">
              <LuxButton href="/craftsmanship" variant="outline-gold">Read the Craft Story</LuxButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Lookbook() {
  const items = DESIGNS.slice(0, 8);
  const heights = ["row-span-2", "row-span-1", "row-span-1", "row-span-2", "row-span-1", "row-span-2", "row-span-1", "row-span-1"];
  return (
    <section className="mx-auto max-w-[1440px] px-6 py-24 lg:px-10 lg:py-32">
      <SectionHeader
        eyebrow="The Lookbook"
        title="An editorial gallery"
        subtitle="A masonry of pieces from across the studio."
      />
      <div className="mt-16 grid auto-rows-[180px] grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 lg:auto-rows-[220px]">
        {items.map((d, i) => (
          <Reveal key={d.slug} delay={i * 0.05} className={heights[i % heights.length]}>
            <Link
              to={`/design/${d.slug }`}
              className="group relative block h-full w-full overflow-hidden bg-charcoal"
            >
              <img
                src={d.image}
                alt={d.name}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/85 via-charcoal/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <div className="absolute inset-x-0 bottom-0 translate-y-4 p-4 text-ivory opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                <div className="eyebrow text-gold-soft">{d.material}</div>
                <div className="serif-display mt-1 text-xl">{d.name}</div>
                <div className="mt-2 text-[0.7rem] uppercase tracking-[0.22em] text-ivory/80">View Details →</div>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section className="bg-secondary/40 py-24 lg:py-32">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <div className="eyebrow mb-6 text-gold-deep">In Their Words</div>
        <div className="grid gap-10 md:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.1}>
              <div className="flex flex-col items-center">
                <div className="text-4xl text-gold serif-display">"</div>
                <p className="serif-display mt-2 text-xl leading-tight text-charcoal">
                  {t.quote}
                </p>
                <div className="eyebrow mt-6">{t.name}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-wine py-24 text-ivory lg:py-32 noise-overlay">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <ZMonogram size={64} className="mx-auto" />
        <h2 className="serif-display mt-6 text-4xl md:text-5xl lg:text-6xl">
          A design, discovered together
        </h2>
        <p className="mt-6 text-ivory/80">
          Book a consultation — in-studio or online — and let our stylists walk you through the pieces made for your story.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <LuxButton href="/book-consultation" variant="gold">Book Consultation</LuxButton>
          <LuxButton href="/collections" variant="outline-ivory">Browse Collections</LuxButton>
        </div>
      </div>
    </section>
  );
}

export default Home;
