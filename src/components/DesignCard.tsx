import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import type { Design } from "@/data/designs";

export function DesignCard({ design }: { design: Design }) {
  return (
    <Link
      to={`/design/${design.slug }`}
      className="group block"
    >
      <div className="relative aspect-[4/5] overflow-hidden bg-secondary">
        <img
          src={design.image}
          alt={design.name}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/50 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
      </div>
      <div className="mt-4">
        <div className="eyebrow text-gold-deep">{design.material}</div>
        <div className="serif-display mt-1 text-xl text-charcoal transition-colors group-hover:text-wine">
          {design.name}
        </div>
        <div className="mt-2 flex items-center justify-between">
          <div className="text-xs text-muted-foreground">{design.occasion.join(" · ")}</div>
          <ArrowUpRight size={14} className="text-gold-deep transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
        </div>
      </div>
    </Link>
  );
}
