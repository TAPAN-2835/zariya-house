import { createFileRoute } from "@tanstack/react-router";
import { IMG } from "@/data/images";
import { PageBanner } from "@/components/layout/PageParts";
import { LuxButton } from "@/components/ui/lux-button";
import { Reveal } from "@/components/ui/Reveal";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About | Zariya House" },
      { name: "description", content: "Zariya House is a curated jewellery design showcase where timeless Indian ornamentation meets modern elegance." },
      { property: "og:title", content: "About Zariya House" },
      { property: "og:image", content: IMG.craftsmanship },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <PageBanner eyebrow="Studio" title="Zariya House" subtitle="A curated jewellery design showcase where timeless Indian ornamentation meets modern elegance." image={IMG.craftsmanship} />

      <section className="mx-auto max-w-3xl px-6 py-24 text-center">
        <blockquote className="serif-display text-3xl leading-tight text-charcoal md:text-4xl lg:text-5xl">
          "We do not sell jewellery. We introduce you to it — and if the two of you are meant to belong, we help you begin."
        </blockquote>
        <div className="eyebrow mt-8 text-gold-deep">— The Zariya House Studio</div>
      </section>

      <section className="mx-auto max-w-[1200px] px-6 pb-24 lg:px-10">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
          {[
            { year: "2011", title: "A studio, quietly begun", body: "Zariya House opens as a small karigar-led atelier — three benches, one master, an unwavering rule about the weight of a hand-set stone." },
            { year: "2015", title: "The Bridal chapter", body: "Our bridal universe is codified — seven chapters, six bride styles, a stylist-led consultation model that becomes the studio signature." },
            { year: "2019", title: "Modern Minimal", body: "A conversation with a younger clientele produces a new visual language — geometric, quiet, wearable every day." },
            { year: "2024", title: "The Design Showcase", body: "Zariya House moves online as a design-first, non-transactional showcase — a way to discover, save and consult, without ever browsing a shopping cart." },
          ].map((t, i) => (
            <Reveal key={t.year} delay={i * 0.05}>
              <div className="flex gap-6">
                <div className="serif-display text-4xl text-gold-deep">{t.year}</div>
                <div>
                  <div className="serif-display text-2xl text-charcoal">{t.title}</div>
                  <p className="mt-3 text-charcoal/75">{t.body}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-wine py-24 text-ivory noise-overlay">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="serif-display text-4xl md:text-5xl">Come sit with us</h2>
          <p className="mt-4 text-ivory/80">The best introduction to Zariya House is a conversation.</p>
          <div className="mt-8 flex justify-center gap-3">
            <LuxButton href="/book-consultation" variant="gold">Book Consultation</LuxButton>
            <LuxButton href="/craftsmanship" variant="outline-ivory">The Craft</LuxButton>
          </div>
        </div>
      </section>
    </>
  );
}
