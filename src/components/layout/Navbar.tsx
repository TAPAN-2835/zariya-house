"use client";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, Search, X, ChevronRight } from "lucide-react";
import { Logo } from "@/components/brand/Logo";
import { MEGA_MENUS, TOP_LINKS } from "@/data/navigation";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const { pathname } = useLocation();
  const isHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpenMenu(null), [pathname]);

  const solid = scrolled || !isHome;

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        solid
          ? "border-b border-border/60 bg-ivory/95 backdrop-blur-xl shadow-[0_1px_20px_-8px_oklch(0.24_0.008_45/0.15)]"
          : "bg-transparent",
      )}
      onMouseLeave={() => setOpenMenu(null)}
    >
      <div className="mx-auto flex h-20 max-w-[1440px] items-center justify-between gap-4 px-6 lg:px-10">
        <Logo variant="compact" onLight={solid} />

        {/* Desktop nav */}
        <nav className="hidden items-center gap-6 xl:gap-8 lg:flex">
          {MEGA_MENUS.map((m) => (
            <button
              key={m.key}
              onMouseEnter={() => setOpenMenu(m.key)}
              onFocus={() => setOpenMenu(m.key)}
              className={cn(
                "eyebrow relative py-2 transition-colors",
                solid ? "text-charcoal hover:text-wine" : "text-ivory/90 hover:text-ivory",
              )}
            >
              {m.label}
            </button>
          ))}
          {TOP_LINKS.map((l) => (
            <Link
              key={l.href}
              to={l.href}
              className={cn(
                "eyebrow hidden 2xl:inline-block transition-colors",
                solid ? "text-charcoal hover:text-wine" : "text-ivory/90 hover:text-ivory",
              )}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            to="/search"
            aria-label="Search"
            className={cn(
              "hidden rounded-full p-2 transition-colors md:inline-flex",
              solid ? "text-charcoal hover:bg-secondary" : "text-ivory hover:bg-ivory/10",
            )}
          >
            <Search size={18} />
          </Link>
          <Link
            to="/book-consultation"
            className="hidden lg:inline-flex items-center gap-2 rounded-none border border-wine bg-wine px-5 py-2.5 text-[0.72rem] font-medium uppercase tracking-[0.28em] text-ivory transition-all hover:bg-wine-deep hover:shadow-lg"
          >
            Book Consultation
          </Link>

          {/* Mobile menu */}
          <Sheet>
            <SheetTrigger asChild>
              <button
                aria-label="Open menu"
                className={cn(
                  "rounded-full p-2 transition-colors lg:hidden",
                  solid ? "text-charcoal hover:bg-secondary" : "text-ivory hover:bg-ivory/10",
                )}
              >
                <Menu size={22} />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full max-w-md bg-ivory p-0 sm:max-w-md">
              <SheetTitle className="sr-only">Menu</SheetTitle>
              <MobileMenu />
            </SheetContent>
          </Sheet>
        </div>
      </div>

      {/* Mega menu */}
      <AnimatePresence>
        {openMenu && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-x-0 top-full border-t border-border/60 bg-ivory shadow-xl"
            onMouseEnter={() => setOpenMenu(openMenu)}
          >
            <MegaPanel menuKey={openMenu} />
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

function MegaPanel({ menuKey }: { menuKey: string }) {
  const menu = MEGA_MENUS.find((m) => m.key === menuKey);
  if (!menu) return null;
  return (
    <div className="mx-auto grid max-w-[1440px] grid-cols-12 gap-10 px-10 py-12">
      <div className="col-span-8 grid grid-cols-3 gap-10">
        {menu.sections.map((s) => (
          <div key={s.title}>
            <div className="eyebrow mb-4 text-gold-deep">{s.title}</div>
            <ul className="space-y-3">
              {s.items.map((it) => (
                <li key={it.href}>
                  <Link
                    to={it.href}
                    className="serif-display text-lg text-charcoal transition-colors hover:text-wine"
                  >
                    {it.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <Link to={menu.feature.href} className="col-span-4 group block">
        <div className="relative aspect-[4/5] overflow-hidden">
          <img
            src={menu.feature.image}
            alt={menu.feature.title}
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-transparent to-transparent" />
          <div className="absolute bottom-0 left-0 p-6 text-ivory">
            <div className="eyebrow text-gold-soft">Featured</div>
            <div className="serif-display mt-2 text-2xl">{menu.feature.title}</div>
            <div className="mt-1 text-sm opacity-85">{menu.feature.description}</div>
          </div>
        </div>
      </Link>
    </div>
  );
}

function MobileMenu() {
  const [openKey, setOpenKey] = useState<string | null>(null);
  return (
    <div className="flex h-full flex-col overflow-y-auto">
      <div className="border-b border-border p-6">
        <Logo variant="compact" />
      </div>
      <nav className="flex-1 px-6 py-6">
        {MEGA_MENUS.map((m) => (
          <div key={m.key} className="border-b border-border/60 py-3">
            <button
              onClick={() => setOpenKey(openKey === m.key ? null : m.key)}
              className="flex w-full items-center justify-between"
            >
              <span className="serif-display text-xl text-charcoal">{m.label}</span>
              <ChevronRight
                size={18}
                className={cn("transition-transform", openKey === m.key && "rotate-90")}
              />
            </button>
            <AnimatePresence>
              {openKey === m.key && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="space-y-4 py-4 pl-2">
                    {m.sections.map((s) => (
                      <div key={s.title}>
                        <div className="eyebrow mb-2 text-gold-deep">{s.title}</div>
                        <ul className="space-y-2">
                          {s.items.map((it) => (
                            <li key={it.href}>
                              <Link to={it.href} className="text-sm text-charcoal/80 hover:text-wine">
                                {it.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
        <div className="mt-2 space-y-3 pt-4">
          {TOP_LINKS.map((l) => (
            <Link key={l.href} to={l.href} className="serif-display block text-xl text-charcoal">
              {l.label}
            </Link>
          ))}
        </div>
      </nav>
      <div className="border-t border-border p-6">
        <Link
          to="/book-consultation"
          className="flex w-full items-center justify-center border border-wine bg-wine px-6 py-3 text-[0.72rem] font-medium uppercase tracking-[0.28em] text-ivory"
        >
          Book Consultation
        </Link>
      </div>
    </div>
  );
}
