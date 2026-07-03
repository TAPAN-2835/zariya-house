import { Link, useParams } from "react-router-dom";
import { COLLECTIONS } from "@/data/collections";
import { DESIGNS } from "@/data/designs";
import { PageBanner, Breadcrumbs } from "@/components/layout/PageParts";
import { DesignCard } from "@/components/DesignCard";
import { Reveal } from "@/components/ui/Reveal";
import { LuxButton } from "@/components/ui/lux-button";

function CollectionDetail() {
  const { slug } = useParams();
  const collection = COLLECTIONS.find((x) => x.slug === slug);

  if (!collection) return (
    <div className="grid min-h-screen place-items-center">
      <div className="text-center">
        <div className="serif-display text-3xl">Collection not found</div>
        <LuxButton href="/collections" variant="outline-gold" className="mt-6">View all collections</LuxButton>
      </div>
    </div>
  );

  const designs = DESIGNS.filter((d) => d.collectionSlug === collection.slug);
  const related = DESIGNS.filter((d) => d.collectionSlug !== collection.slug).slice(0, 4);

  return (
    <>
      <PageBanner eyebrow="Collection" title={collection.title} subtitle={collection.tagline} image={collection.image} />
      <div className="mx-auto max-w-[1440px] px-6 py-8 lg:px-10">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Collections", href: "/collections" },
            { label: collection.title },
          ]}
        />
      </div>

      <section className="mx-auto grid max-w-[1200px] gap-12 px-6 py-16 lg:grid-cols-[1fr_1.3fr] lg:gap-20 lg:px-10">
        <div>
          <div className="eyebrow mb-4 text-gold-deep">The Story</div>
          <h2 className="serif-display text-3xl text-charcoal">{collection.description}</h2>
        </div>
        <div>
          <p className="text-lg leading-relaxed text-charcoal/80">{collection.story}</p>
          <div className="mt-8 grid grid-cols-2 gap-4">
            <div>
              <div className="eyebrow mb-2">Materials</div>
              <div className="text-sm text-charcoal">{collection.materials.join(", ")}</div>
            </div>
            <div>
              <div className="eyebrow mb-2">Occasions</div>
              <div className="text-sm text-charcoal">{collection.occasions.join(", ")}</div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1440px] px-6 py-16 lg:px-10">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <div className="eyebrow mb-2 text-gold-deep">Pieces in this collection</div>
            <div className="serif-display text-3xl text-charcoal">The Edit</div>
          </div>
        </div>
        {designs.length > 0 ? (
          <div className="grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
            {designs.map((d, i) => (
              <Reveal key={d.slug} delay={(i % 4) * 0.05}>
                <DesignCard design={d} />
              </Reveal>
            ))}
          </div>
        ) : (
          <p className="text-muted-foreground">More designs coming soon.</p>
        )}
      </section>

      <section className="mx-auto max-w-[1440px] px-6 py-16 lg:px-10">
        <div className="eyebrow mb-6 text-gold-deep">You may also love</div>
        <div className="grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {related.map((d) => (
            <DesignCard key={d.slug} design={d} />
          ))}
        </div>
      </section>

      <section className="mx-auto my-16 max-w-3xl px-6 text-center">
        <h2 className="serif-display text-4xl text-charcoal">Bring this story home</h2>
        <p className="mt-4 text-muted-foreground">
          Book a consultation with our stylists to explore the {collection.title} pieces in person or online.
        </p>
        <div className="mt-8">
          <LuxButton href="/book-consultation" variant="wine">Book Consultation</LuxButton>
        </div>
      </section>
    </>
  );
}

export default CollectionDetail;
