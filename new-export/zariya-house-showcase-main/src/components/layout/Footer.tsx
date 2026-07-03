import { Link } from "@tanstack/react-router";
import { Instagram, Facebook, Youtube } from "lucide-react";
import { Logo } from "@/components/brand/Logo";
import { MEGA_MENUS } from "@/data/navigation";
import { SITE } from "@/data/site";

const SOCIALS = [
  { Icon: Instagram, href: SITE.social.instagram, label: "Instagram" },
  { Icon: Facebook, href: SITE.social.facebook, label: "Facebook" },
  { Icon: Youtube, href: SITE.social.youtube, label: "YouTube" },
];

export function Footer() {
  return (
    <footer className="mt-24 border-t border-border/60 bg-gradient-to-b from-ivory to-secondary/60">
      <div className="mx-auto max-w-[1440px] px-6 pt-20 pb-10 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_2fr_1fr]">
          <div>
            <Logo />
            <p className="mt-6 max-w-xs text-sm text-muted-foreground">
              {SITE.tagline}. A curated jewellery design showcase — where timeless Indian ornamentation meets modern elegance.
            </p>
            <div className="mt-6 flex items-center gap-3">
              {SOCIALS.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="grid h-10 w-10 place-items-center rounded-full border border-border text-charcoal transition-colors hover:border-gold hover:text-wine"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            {MEGA_MENUS.map((m) => (
              <div key={m.key}>
                <div className="eyebrow mb-4 text-gold-deep">{m.label}</div>
                <ul className="space-y-2">
                  {m.sections[0].items.slice(0, 5).map((it) => (
                    <li key={it.href}>
                      <Link to={it.href} className="text-sm text-charcoal/75 hover:text-wine">
                        {it.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div>
            <div className="eyebrow mb-4 text-gold-deep">Studio</div>
            <ul className="space-y-2 text-sm text-charcoal/75">
              <li><Link to="/about" className="hover:text-wine">About</Link></li>
              <li><Link to="/craftsmanship" className="hover:text-wine">Craftsmanship</Link></li>
              <li><Link to="/blog" className="hover:text-wine">Journal</Link></li>
              <li><Link to="/contact" className="hover:text-wine">Contact</Link></li>
              <li><Link to="/faq" className="hover:text-wine">FAQ</Link></li>
              <li><Link to="/book-consultation" className="hover:text-wine">Book Consultation</Link></li>
            </ul>
            <div className="mt-6 text-xs text-muted-foreground">
              <div>{SITE.email}</div>
              <div>{SITE.phoneDisplay}</div>
            </div>
          </div>
        </div>

        <hr className="gold-divider my-10" />

        <div className="flex flex-col items-start justify-between gap-4 text-xs text-muted-foreground md:flex-row md:items-center">
          <div>© {new Date().getFullYear()} {SITE.name}. All rights reserved.</div>
          <div className="max-w-xl text-center md:text-right">
            Design showcase only. Final availability, specifications and customisation are confirmed through consultation.
          </div>
          <div className="flex gap-4">
            <Link to="/privacy" className="hover:text-wine">Privacy</Link>
            <Link to="/terms" className="hover:text-wine">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
