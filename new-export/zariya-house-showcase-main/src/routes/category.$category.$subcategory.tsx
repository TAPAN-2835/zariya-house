import { createFileRoute } from "@tanstack/react-router";
import { DESIGNS } from "@/data/designs";
import { PageBanner, Breadcrumbs } from "@/components/layout/PageParts";
import { DesignCard } from "@/components/DesignCard";

export const Route = createFileRoute("/category/$category/$subcategory")({
  head: ({ params }) => ({
    meta: [
      { title: `${params.subcategory.replace(/-/g, " ")} | Zariya House` },
      { name: "description", content: `Discover ${params.subcategory.replace(/-/g, " ")} designs at Zariya House.` },
      { property: "og:url", content: `/category/${params.category}/${params.subcategory}` },
    ],
    links: [{ rel: "canonical", href: `/category/${params.category}/${params.subcategory}` }],
  }),
  component: SubcategoryPage,
});

function SubcategoryPage() {
  const { category, subcategory } = Route.useParams();
  const title = subcategory.replace(/-/g, " ");
  const key = subcategory.toLowerCase();

  // Material-first filtering when category === "material"
  const materialAliases: Record<string, string[]> = {
    gold: ["gold"],
    silver: ["silver"],
    "rose-gold": ["rose gold", "rose-gold"],
    platinum: ["platinum"],
    diamond: ["diamond"],
    pearl: ["pearl"],
    kundan: ["kundan", "polki"],
    gemstone: ["ruby", "emerald", "sapphire", "gemstone"],
  };

  let items = DESIGNS;
  if (category === "material") {
    const aliases = materialAliases[key] ?? [key];
    items = DESIGNS.filter((d) => aliases.some((a) => d.material.toLowerCase().includes(a)));
  } else if (category === "occasion") {
    items = DESIGNS.filter((d) => d.occasion.some((o) => o.toLowerCase().includes(key.replace(/-/g, " "))));
  } else if (category === "finish") {
    items = DESIGNS.filter((d) =>
      d.details.some((x) => x.label.toLowerCase().includes("finish") && x.value.toLowerCase().includes(key)),
    );
  } else {
    items = DESIGNS.filter(
      (d) =>
        d.category.toLowerCase().includes(key.split("-")[0]) ||
        d.style.some((s) => s.toLowerCase().includes(key.split("-")[0])),
    );
  }
  if (!items.length) items = DESIGNS.slice(0, 6);

  return (
    <>
      <PageBanner eyebrow={category} title={title} />
      <div className="mx-auto max-w-[1440px] px-6 py-8 lg:px-10">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: category },
            { label: title },
          ]}
        />
      </div>
      <section className="mx-auto max-w-[1440px] px-6 pb-24 lg:px-10">
        <div className="mb-6 text-sm text-muted-foreground">{items.length} designs</div>
        <div className="grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((d) => <DesignCard key={d.slug} design={d} />)}
        </div>
      </section>
    </>
  );
}
