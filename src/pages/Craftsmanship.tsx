
import { IMG } from "@/data/images";
import { PageBanner } from "@/components/layout/PageParts";
import { CRAFT_PILLARS } from "@/data/misc";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { LuxButton } from "@/components/ui/lux-button";

function CraftPage() {
  return (
    <>
      <PageBanner eyebrow="The Craft" title="Made slowly, on purpose" subtitle="Behind every finished piece: seven stages, four pairs of hands, and a rule that nothing leaves the bench until the light agrees." image={IMG.craftsmanship} />

      <section className="mx-auto max-w-[1440px] px-6 py-24 lg:px-10 lg:py-32">
        <SectionHeader eyebrow="Four Pillars" title="The way we work" />
        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {CRAFT_PILLARS.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.08}>
              <div className="luxury-card h-full p-8">
                <div className="serif-display text-4xl text-gold">{String(i + 1).padStart(2, "0")}</div>
                <div className="serif-display mt-4 text-2xl text-charcoal">{p.title}</div>
                <p className="mt-3 text-sm text-muted-foreground">{p.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-secondary/50 py-24 lg:py-32">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
            <div className="relative aspect-[4/5] overflow-hidden">
              <img src={IMG.craftsmanship} alt="Master jeweller at work" className="h-full w-full object-cover" />
            </div>
            <div>
              <div className="eyebrow mb-4 text-gold-deep">Studio Notes</div>
              <h2 className="serif-display text-4xl md:text-5xl text-charcoal">
                The bench is where <em className="text-wine">time</em> becomes shine
              </h2>
              <p className="mt-6 text-charcoal/80">
                A single bridal choker can take three karigars twenty-one days to complete. Every kundan stone is set individually, in a foil-backed bezel, under a jeweller's loupe. There is no faster way — only the right way.
              </p>
              <div className="mt-8">
                <LuxButton href="/book-consultation" variant="wine">Visit the Studio</LuxButton>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default CraftPage;
