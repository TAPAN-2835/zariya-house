import { Link } from "react-router-dom";
import { LuxButton } from "@/components/ui/lux-button";
import { ZMonogram } from "@/components/brand/Logo";
import { IMG } from "@/data/images";

export default function NotFound() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-charcoal text-ivory">
      <img
        src={IMG.notfound}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover opacity-40"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/85 to-charcoal/50" />
      <div className="relative z-10 mx-auto grid min-h-screen max-w-[1100px] place-items-center px-6 py-24 text-center">
        <div>
          <ZMonogram size={64} className="mx-auto mb-8 opacity-90" />
          <div className="eyebrow text-gold-soft">Error 404</div>
          <h1 className="serif-display mx-auto mt-4 max-w-3xl text-5xl leading-[1.05] md:text-6xl lg:text-7xl">
            The design you're looking for has <em className="text-gold-soft">wandered off</em>
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-ivory/80">
            Perhaps it moved to a new chapter, or is being polished in the studio. Return to the corridor and choose another door.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <LuxButton href="/" variant="gold">Return Home</LuxButton>
            <LuxButton href="/collections" variant="outline-ivory">Browse Collections</LuxButton>
            <LuxButton href="/book-consultation" variant="outline-ivory">Book Consultation</LuxButton>
          </div>

          <div className="mt-16 grid gap-6 sm:grid-cols-3">
            {[
              { label: "Bridal Edit", to: "/bridal" },
              { label: "Signature Rings", to: "/category/rings" },
              { label: "Search Designs", to: "/search" },
            ].map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="group border border-ivory/20 bg-ivory/5 p-6 text-left backdrop-blur-sm transition-all hover:border-gold hover:bg-ivory/10"
              >
                <div className="eyebrow text-gold-soft">Explore</div>
                <div className="serif-display mt-2 text-2xl text-ivory group-hover:text-gold-soft">{l.label}</div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
