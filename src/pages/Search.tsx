import { Link } from "react-router-dom";

import { useState } from "react";
import { Search as SearchIcon } from "lucide-react";
import { DESIGNS } from "@/data/designs";
import { COLLECTIONS } from "@/data/collections";
import { PageBanner } from "@/components/layout/PageParts";
import { DesignCard } from "@/components/DesignCard";


function SearchPage() {
  const [q, setQ] = useState("");
  const term = q.trim().toLowerCase();
  const designs = term
    ? DESIGNS.filter((d) =>
        [d.name, d.material, d.category, ...d.occasion, ...d.style].join(" ").toLowerCase().includes(term),
      )
    : DESIGNS.slice(0, 6);
  const collections = term ? COLLECTIONS.filter((c) => c.title.toLowerCase().includes(term)) : [];

  const suggestions = ["Bridal", "Ring", "Necklace", "Gold", "Silver", "Diamond", "Mangalsutra"];

  return (
    <>
      <PageBanner eyebrow="Search" title="Find your piece" />
      <section className="mx-auto max-w-3xl px-6 py-10">
        <div className="relative">
          <SearchIcon size={18} className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-charcoal/60" />
          <input
            autoFocus
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search by collection, ring, necklace, bride, gold…"
            className="w-full border border-border bg-card py-4 pl-12 pr-4 text-lg text-charcoal focus:border-gold focus:outline-none"
          />
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {suggestions.map((s) => (
            <button key={s} onClick={() => setQ(s)} className="border border-border px-3 py-1.5 text-xs text-charcoal/70 hover:border-gold hover:text-wine">
              {s}
            </button>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[1200px] px-6 pb-24 lg:px-10">
        {collections.length > 0 && (
          <div className="mb-12">
            <div className="eyebrow mb-4 text-gold-deep">Collections</div>
            <div className="grid gap-4 sm:grid-cols-2">
              {collections.map((c) => (
                <Link key={c.slug} to={`/collections/${c.slug }`} className="group flex items-center gap-4 border border-border p-4 hover:border-gold">
                  <img src={c.image} alt={c.title} className="h-20 w-20 object-cover" />
                  <div>
                    <div className="serif-display text-xl text-charcoal group-hover:text-wine">{c.title}</div>
                    <div className="text-xs text-muted-foreground">{c.tagline}</div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

        <div className="eyebrow mb-4 text-gold-deep">{term ? `Designs matching "${q}"` : "Popular designs"}</div>
        {designs.length ? (
          <div className="grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
            {designs.map((d) => <DesignCard key={d.slug} design={d} />)}
          </div>
        ) : (
          <div className="border border-border p-16 text-center">
            <div className="serif-display text-2xl text-charcoal">Nothing matches that yet</div>
            <p className="mt-2 text-muted-foreground">Try a broader term, or browse our collections.</p>
          </div>
        )}
      </section>
    </>
  );
}

export default SearchPage;
