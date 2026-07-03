import { useParams } from "react-router-dom";

import { DESIGNS } from "@/data/designs";
import { PageBanner, Breadcrumbs } from "@/components/layout/PageParts";
import { DesignCard } from "@/components/DesignCard";

function SubcategoryPage() {
  const { category, subcategory } = useParams();
  const sub = subcategory || "";
  const catStr = category || "";
  const title = sub.replace(/-/g, " ");
  const designs = DESIGNS.filter((d) =>
    d.category.toLowerCase().includes(sub.split("-")[0]) ||
    d.style.some((s) => s.toLowerCase().includes(sub.split("-")[0])),
  );
  const items = designs.length ? designs : DESIGNS.slice(0, 6);

  return (
    <>
      <PageBanner eyebrow={category} title={title} />
      <div className="mx-auto max-w-[1440px] px-6 py-8 lg:px-10">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: catStr, href: `/category/${catStr}` },
            { label: title },
          ]}
        />
      </div>
      <section className="mx-auto max-w-[1440px] px-6 pb-24 lg:px-10">
        <div className="grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((d) => <DesignCard key={d.slug} design={d} />)}
        </div>
      </section>
    </>
  );
}

export default SubcategoryPage;
