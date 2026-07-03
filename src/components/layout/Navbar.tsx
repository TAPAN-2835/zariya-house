"use client";
import { useEffect, useMemo, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, Search, ChevronRight, X } from "lucide-react";
import { Logo } from "@/components/brand/Logo";
import { MEGA_MENUS, TOP_LINKS } from "@/data/navigation";
import { DESIGNS } from "@/data/designs";
import { COLLECTIONS } from "@/data/collections";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const { pathname } = useLocation();
  const isHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setOpenMenu(null); setSearchOpen(false); }, [pathname]);

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
          <SearchDropdown solid={solid} open={searchOpen} setOpen={setSearchOpen} />
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

      {/* Search panel — full-width on mobile, right-aligned dropdown on desktop */}
      <AnimatePresence>
        {searchOpen && (
          <SearchPanel open={searchOpen} setOpen={setSearchOpen} />
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

type Suggestion = { type: "design" | "collection" | "category"; label: string; sub?: string; to: string };

const STATIC_SUGGESTIONS: Suggestion[] = [
  { type: "category", label: "Gold", sub: "Material", to: "/category/material/gold" },
  { type: "category", label: "Silver", sub: "Material", to: "/category/material/silver" },
  { type: "category", label: "Rose Gold", sub: "Material", to: "/category/material/rose-gold" },
  { type: "category", label: "Platinum", sub: "Material", to: "/category/material/platinum" },
  { type: "category", label: "Rings", sub: "Category", to: "/category/rings" },
  { type: "category", label: "Necklaces", sub: "Category", to: "/category/necklaces" },
  { type: "category", label: "Earrings", sub: "Category", to: "/category/earrings" },
  { type: "category", label: "Bridal", sub: "Journey", to: "/bridal" },
  { type: "category", label: "Men's Rings", sub: "Category", to: "/category/rings/mens" },
  { type: "category", label: "Couple Rings", sub: "Category", to: "/category/rings/couple" },
];

function SearchDropdown({ solid, open, setOpen }: { solid: boolean; open: boolean; setOpen: (v: boolean) => void }) {
  return (
    <button
      onClick={() => setOpen(!open)}
      aria-label="Search"
      aria-expanded={open}
      className={cn(
        "inline-flex rounded-full p-2 transition-colors",
        solid ? "text-charcoal hover:bg-secondary" : "text-ivory hover:bg-ivory/10",
      )}
    >
      <Search size={18} />
    </button>
  );
}

function SearchPanel({ open, setOpen }: { open: boolean; setOpen: (v: boolean) => void }) {
  const [q, setQ] = useState("");
  const [active, setActive] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  const results: Suggestion[] = useMemo(() => {
    const term = q.trim().toLowerCase();
    if (!term) return STATIC_SUGGESTIONS.slice(0, 6);
    const dSug: Suggestion[] = DESIGNS.filter((d) =>
      [d.name, d.material, d.category, ...d.style, ...d.occasion].join(" ").toLowerCase().includes(term),
    )
      .slice(0, 5)
      .map((d) => ({ type: "design", label: d.name, sub: d.category, to: `/design/${d.slug}` }));
    const cSug: Suggestion[] = COLLECTIONS.filter((c) => c.title.toLowerCase().includes(term))
      .slice(0, 3)
      .map((c) => ({ type: "collection", label: c.title, sub: "Collection", to: `/collections/${c.slug}` }));
    const catSug = STATIC_SUGGESTIONS.filter((s) => s.label.toLowerCase().includes(term)).slice(0, 3);
    return [...cSug, ...catSug, ...dSug].slice(0, 8);
  }, [q]);

  useEffect(() => {
    if (open) setTimeout(() => inputRef.current?.focus(), 80);
    else { setQ(""); setActive(0); }
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setOpen(false); };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, setOpen]);

  const go = (s: Suggestion) => { setOpen(false); navigate(s.to); };

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "ArrowDown") { e.preventDefault(); setActive((a) => Math.min(a + 1, results.length - 1)); }
    else if (e.key === "ArrowUp") { e.preventDefault(); setActive((a) => Math.max(a - 1, 0)); }
    else if (e.key === "Enter") {
      e.preventDefault();
      const s = results[active];
      if (s) go(s);
      else if (q.trim()) { setOpen(false); navigate("/search"); }
    }
  };

  return (
    <>
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.15 }}
        className="fixed inset-0 top-20 z-40 bg-charcoal/20 backdrop-blur-[2px] lg:hidden"
        onClick={() => setOpen(false)}
      />
      {/* Panel — full-width below navbar on mobile, right-aligned on desktop */}
      <motion.div
        initial={{ opacity: 0, y: -6 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -6 }}
        transition={{ duration: 0.18 }}
        className="absolute inset-x-0 top-full z-50 border-t border-border bg-ivory shadow-2xl lg:inset-x-auto lg:right-10 lg:top-[calc(100%+6px)] lg:w-[420px] lg:border"
        role="dialog"
        aria-label="Search"
      >
        <div className="flex items-center gap-2 border-b border-border px-4 py-3">
          <Search size={16} className="shrink-0 text-charcoal/60" />
          <input
            ref={inputRef}
            value={q}
            onChange={(e) => { setQ(e.target.value); setActive(0); }}
            onKeyDown={onKeyDown}
            placeholder="Search rings, necklaces, gold, bridal…"
            aria-label="Search designs"
            aria-autocomplete="list"
            className="w-full bg-transparent text-sm text-charcoal outline-none placeholder:text-charcoal/40"
          />
          <button onClick={() => setOpen(false)} aria-label="Close" className="shrink-0 text-charcoal/60 hover:text-charcoal">
            <X size={16} />
          </button>
        </div>
        <ul role="listbox" className="max-h-[55vh] overflow-y-auto py-2">
          {results.length ? results.map((s, i) => (
            <li key={`${s.to}-${i}`}>
              <button
                onMouseEnter={() => setActive(i)}
                onClick={() => go(s)}
                role="option"
                aria-selected={i === active}
                className={cn(
                  "flex w-full items-center justify-between gap-4 px-4 py-2.5 text-left transition-colors",
                  i === active ? "bg-secondary" : "hover:bg-secondary/60",
                )}
              >
                <div>
                  <div className="text-sm text-charcoal">{s.label}</div>
                  {s.sub && <div className="text-[0.65rem] uppercase tracking-[0.22em] text-charcoal/50">{s.sub}</div>}
                </div>
                <ChevronRight size={14} className="text-charcoal/40" />
              </button>
            </li>
          )) : (
            <li className="px-4 py-6 text-center text-sm text-muted-foreground">No matches — try a broader term.</li>
          )}
        </ul>
        <div className="border-t border-border px-4 py-2">
          <Link to="/search" onClick={() => setOpen(false)} className="text-[0.7rem] uppercase tracking-[0.28em] text-wine hover:text-wine-deep">
            Open full search →
          </Link>
        </div>
      </motion.div>
    </>
  );
}
