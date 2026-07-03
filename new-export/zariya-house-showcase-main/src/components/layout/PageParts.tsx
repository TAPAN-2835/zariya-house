import { Link } from "@tanstack/react-router";
import { ChevronRight } from "lucide-react";

type Crumb = { label: string; href?: string };

export function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-muted-foreground">
      {items.map((c, i) => (
        <span key={i} className="flex items-center gap-2">
          {i > 0 && <ChevronRight size={12} className="opacity-60" />}
          {c.href ? (
            <Link to={c.href} className="hover:text-wine">
              {c.label}
            </Link>
          ) : (
            <span className="text-charcoal">{c.label}</span>
          )}
        </span>
      ))}
    </nav>
  );
}

export function PageBanner({
  eyebrow,
  title,
  subtitle,
  image,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  image?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-wine-deep pt-32 pb-16 text-ivory md:pt-40 md:pb-24">
      {image && (
        <>
          <img src={image} alt="" aria-hidden className="absolute inset-0 h-full w-full object-cover opacity-40" />
          <div className="absolute inset-0 bg-gradient-to-b from-wine-deep/50 via-wine-deep/60 to-wine-deep" />
        </>
      )}
      <div className="relative mx-auto max-w-[1440px] px-6 lg:px-10">
        {eyebrow && <div className="eyebrow mb-4 text-gold-soft">{eyebrow}</div>}
        <h1 className="serif-display text-5xl md:text-6xl lg:text-7xl">{title}</h1>
        {subtitle && <p className="mt-6 max-w-2xl text-lg text-ivory/80">{subtitle}</p>}
      </div>
    </section>
  );
}
