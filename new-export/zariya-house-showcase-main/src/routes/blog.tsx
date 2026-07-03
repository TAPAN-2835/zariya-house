import { createFileRoute, Link } from "@tanstack/react-router";
import { PageBanner } from "@/components/layout/PageParts";
import { IMG } from "@/data/images";

const POSTS = [
  { slug: "reading-a-bridal-necklace", title: "How to read a bridal necklace", excerpt: "A short field guide to the language of temple silhouettes, kundan setting, and the arc of a haar.", image: IMG.collection.bridal, date: "March 2026" },
  { slug: "the-quiet-gold-of-everyday", title: "The quiet gold of everyday", excerpt: "In praise of the pendant you never take off.", image: IMG.collection.everyday, date: "February 2026" },
  { slug: "seven-stages-of-a-piece", title: "Seven stages of a piece", excerpt: "A step-by-step walkthrough of the bench.", image: IMG.craftsmanship, date: "January 2026" },
];
export { POSTS };

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Journal | Zariya House" },
      { name: "description", content: "Notes from the studio — reading jewellery, the craft, the bride, and the everyday." },
      { property: "og:url", content: "/blog" },
    ],
    links: [{ rel: "canonical", href: "/blog" }],
  }),
  component: BlogIndex,
});

function BlogIndex() {
  return (
    <>
      <PageBanner eyebrow="Journal" title="Field Notes" subtitle="Slow reading from the Zariya House studio." />
      <section className="mx-auto max-w-[1200px] px-6 py-16 lg:px-10">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {POSTS.map((p) => (
            <Link key={p.slug} to="/blog/$slug" params={{ slug: p.slug }} className="group block">
              <div className="relative aspect-[4/5] overflow-hidden">
                <img src={p.image} alt={p.title} loading="lazy" className="h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-105" />
              </div>
              <div className="mt-4 eyebrow text-gold-deep">{p.date}</div>
              <h2 className="serif-display mt-2 text-2xl text-charcoal group-hover:text-wine">{p.title}</h2>
              <p className="mt-2 text-sm text-muted-foreground">{p.excerpt}</p>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
