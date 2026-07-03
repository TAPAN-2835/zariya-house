import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, Share2, Download, MessageCircle, Sparkles, ImageIcon, X, Play } from "lucide-react";
import { DESIGNS, findDesign } from "@/data/designs";
import { Breadcrumbs } from "@/components/layout/PageParts";
import { DesignCard } from "@/components/DesignCard";
import { LuxButton } from "@/components/ui/lux-button";
import { Viewer360 } from "@/components/Viewer360";
import { SITE, waLink } from "@/data/site";

export const Route = createFileRoute("/design/$slug")({
  loader: ({ params }) => {
    const d = findDesign(params.slug);
    if (!d) throw notFound();
    return { design: d };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.design.name} | Zariya House` },
          { name: "description", content: loaderData.design.story.slice(0, 155) },
          { property: "og:title", content: loaderData.design.name },
          { property: "og:description", content: loaderData.design.story.slice(0, 155) },
          { property: "og:image", content: loaderData.design.image },
          { property: "og:url", content: `/design/${loaderData.design.slug}` },
        ]
      : [{ title: "Design" }, { name: "robots", content: "noindex" }],
    links: loaderData ? [{ rel: "canonical", href: `/design/${loaderData.design.slug}` }] : [],
    scripts: loaderData
      ? [
          {
            type: "application/ld+json",
            children: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "Home", item: "/" },
                { "@type": "ListItem", position: 2, name: "Collections", item: "/collections" },
                { "@type": "ListItem", position: 3, name: loaderData.design.name, item: `/design/${loaderData.design.slug}` },
              ],
            }),
          },
        ]
      : [],
  }),
  component: DesignDetail,
  notFoundComponent: () => (
    <div className="grid min-h-screen place-items-center">
      <div className="text-center">
        <div className="serif-display text-3xl">Design not found</div>
        <LuxButton href="/collections" variant="outline-gold" className="mt-6">View collections</LuxButton>
      </div>
    </div>
  ),
});

const SAVED_KEY = "zariya:saved";

function DesignDetail() {
  const { design } = Route.useLoaderData();
  const [saved, setSaved] = useState(false);
  const [tab, setTab] = useState<"image" | "360" | "video">("image");
  const [zoom, setZoom] = useState(false);
  const [copied, setCopied] = useState(false);

  const gallery = design.gallery && design.gallery.length ? design.gallery : [design.image];
  const [activeImg, setActiveImg] = useState(gallery[0]);

  useEffect(() => {
    try {
      const list: string[] = JSON.parse(localStorage.getItem(SAVED_KEY) || "[]");
      setSaved(list.includes(design.slug));
      const recent: string[] = JSON.parse(localStorage.getItem("zariya:recent") || "[]");
      const next = [design.slug, ...recent.filter((s) => s !== design.slug)].slice(0, 8);
      localStorage.setItem("zariya:recent", JSON.stringify(next));
    } catch {}
  }, [design.slug]);

  const toggleSave = () => {
    try {
      const list: string[] = JSON.parse(localStorage.getItem(SAVED_KEY) || "[]");
      const next = saved ? list.filter((s) => s !== design.slug) : [...list, design.slug];
      localStorage.setItem(SAVED_KEY, JSON.stringify(next));
      setSaved(!saved);
    } catch {}
  };

  const shareUrl = typeof window !== "undefined" ? window.location.href : `/design/${design.slug}`;
  const shareText = `${design.name} — ${SITE.name}`;

  const onShare = async () => {
    try {
      if (typeof navigator !== "undefined" && "share" in navigator) {
        await (navigator as Navigator & { share: (d: ShareData) => Promise<void> }).share({
          title: shareText,
          text: design.story,
          url: shareUrl,
        });
        return;
      }
    } catch {}
    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {}
  };

  const onPdf = () => {
    if (typeof window !== "undefined") window.print();
  };

  const similar = DESIGNS.filter((d) => d.slug !== design.slug && d.category === design.category).slice(0, 4);
  if (similar.length < 4) {
    similar.push(...DESIGNS.filter((d) => d.slug !== design.slug && !similar.includes(d)).slice(0, 4 - similar.length));
  }

  return (
    <>
      <div className="mx-auto max-w-[1440px] px-6 pt-28 pb-6 lg:px-10">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Collections", href: "/collections" },
            { label: design.category },
            { label: design.name },
          ]}
        />
      </div>

      <section className="mx-auto grid max-w-[1440px] gap-12 px-6 py-8 lg:grid-cols-[1.2fr_1fr] lg:gap-16 lg:px-10">
        <div className="space-y-4">
          <motion.div
            initial={{ opacity: 0, scale: 1.02 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative aspect-[4/5] overflow-hidden bg-secondary"
          >
            {tab === "image" && (
              <>
                <img src={activeImg} alt={design.name} className="h-full w-full object-cover" />
                <button
                  onClick={() => setZoom(true)}
                  className="absolute bottom-4 right-4 grid h-11 w-11 place-items-center bg-ivory/90 text-charcoal shadow-md backdrop-blur-sm transition-colors hover:bg-ivory"
                  aria-label="View fullscreen"
                >
                  <ImageIcon size={18} />
                </button>
              </>
            )}
            {tab === "360" && (
              <div className="grid h-full w-full place-items-center bg-charcoal/5 p-4">
                <div className="w-full max-w-[560px]">
                  <Viewer360 primary={design.image} images={gallery.length > 1 ? gallery : undefined} alt={design.name} />
                </div>
              </div>
            )}
            {tab === "video" && (
              <div className="grid h-full w-full place-items-center bg-charcoal text-ivory">
                <div className="text-center">
                  <div className="mx-auto grid h-16 w-16 place-items-center rounded-full border border-ivory/40">
                    <Play size={22} />
                  </div>
                  <div className="serif-display mt-6 text-2xl">Film coming soon</div>
                  <p className="mt-2 max-w-xs text-sm text-ivory/70">A short craft film for this piece is being finished at the studio.</p>
                </div>
              </div>
            )}
          </motion.div>

          <div className="grid grid-cols-3 gap-3">
            {gallery.slice(0, 3).map((g: string, i: number) => (
              <button
                key={i}
                onClick={() => { setTab("image"); setActiveImg(g); }}
                className={`aspect-square overflow-hidden border ${tab === "image" && activeImg === g ? "border-gold" : "border-transparent"}`}
                aria-label={`View image ${i + 1}`}
              >
                <img src={g} alt="" className="h-full w-full object-cover opacity-90 transition-opacity hover:opacity-100" />
              </button>
            ))}
          </div>
          <div className="grid grid-cols-2 gap-3">
            <button
              onClick={() => setTab("360")}
              className={`aspect-[3/1] border text-xs uppercase tracking-widest ${tab === "360" ? "border-gold bg-gold/5 text-gold-deep" : "border-dashed border-border text-muted-foreground hover:border-gold"}`}
            >
              360° View
            </button>
            <button
              onClick={() => setTab("video")}
              className={`aspect-[3/1] border text-xs uppercase tracking-widest ${tab === "video" ? "border-gold bg-gold/5 text-gold-deep" : "border-dashed border-border text-muted-foreground hover:border-gold"}`}
            >
              Craft Film
            </button>
          </div>
        </div>

        <div className="lg:sticky lg:top-28 lg:self-start">
          <div className="eyebrow mb-3 text-gold-deep">{design.material}</div>
          <h1 className="serif-display text-4xl text-charcoal md:text-5xl">{design.name}</h1>

          <div className="mt-4 flex flex-wrap gap-2">
            {[...design.occasion, ...design.style].map((t) => (
              <span key={t} className="border border-border px-3 py-1 text-xs text-charcoal/75">{t}</span>
            ))}
          </div>

          <div className="gold-divider my-8" />

          <div className="eyebrow mb-3 text-gold-deep">The Story</div>
          <p className="text-charcoal/85 leading-relaxed">{design.story}</p>

          <div className="mt-8 grid grid-cols-2 gap-4">
            {design.details.map((d: { label: string; value: string }) => (
              <div key={d.label}>
                <div className="eyebrow mb-1 text-[0.6rem]">{d.label}</div>
                <div className="text-sm text-charcoal">{d.value}</div>
              </div>
            ))}
          </div>

          <div className="mt-10 space-y-3">
            <LuxButton href={`/book-consultation?design=${design.slug}`} variant="wine" className="w-full">
              Book Styling Consultation
            </LuxButton>
            <div className="grid grid-cols-2 gap-3">
              <button
                onClick={toggleSave}
                aria-pressed={saved}
                className={`shine-sweep flex items-center justify-center gap-2 border px-4 py-3 text-[0.68rem] font-medium uppercase tracking-[0.24em] transition-all ${saved ? "border-wine bg-wine text-ivory" : "border-gold text-gold-deep hover:bg-gold/10"}`}
              >
                <Heart size={14} className={saved ? "fill-current" : ""} /> {saved ? "Saved" : "Save to Inspiration"}
              </button>
              <button
                onClick={onShare}
                className="flex items-center justify-center gap-2 border border-border px-4 py-3 text-[0.68rem] font-medium uppercase tracking-[0.24em] text-charcoal transition-colors hover:border-gold"
              >
                <Share2 size={14} /> {copied ? "Link copied" : "Share"}
              </button>
              <button
                onClick={onPdf}
                className="flex items-center justify-center gap-2 border border-border px-4 py-3 text-[0.68rem] font-medium uppercase tracking-[0.24em] text-charcoal transition-colors hover:border-gold"
              >
                <Download size={14} /> Catalogue PDF
              </button>
              <a
                href={waLink(`Hello Zariya House, I'd love to know more about "${design.name}" (${shareUrl})`)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 border border-border px-4 py-3 text-[0.68rem] font-medium uppercase tracking-[0.24em] text-charcoal transition-colors hover:border-gold"
              >
                <MessageCircle size={14} /> WhatsApp
              </a>
            </div>
          </div>

          <div className="mt-8 border-t border-border pt-6 text-xs text-muted-foreground">
            <Sparkles size={12} className="mr-2 inline text-gold" />
            Every Zariya House piece is customisable in metal, stone and size during consultation.
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1440px] px-6 py-20 lg:px-10">
        <div className="eyebrow mb-6 text-gold-deep">Similar Designs</div>
        <div className="grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {similar.map((d) => <DesignCard key={d.slug} design={d} />)}
        </div>
      </section>

      <section className="mx-auto max-w-[1440px] px-6 py-10 lg:px-10">
        <div className="border border-border bg-secondary/50 p-10 text-center">
          <div className="serif-display text-3xl text-charcoal">Want to see this piece in person?</div>
          <p className="mt-3 text-muted-foreground">Book a private viewing at our studio or online with a stylist.</p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <LuxButton href="/book-consultation" variant="wine">Book Consultation</LuxButton>
            <LuxButton href="/contact" variant="outline-gold">Request More Images</LuxButton>
            <a
              href={waLink(`Hi Zariya House — I'd like more details on ${design.name}.`)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-gold px-6 py-3 text-[0.72rem] font-medium uppercase tracking-[0.28em] text-gold-deep hover:bg-gold/10"
            >
              <MessageCircle size={14} /> WhatsApp
            </a>
          </div>
        </div>
      </section>

      <AnimatePresence>
        {zoom && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] grid place-items-center bg-charcoal/95 p-4"
            onClick={() => setZoom(false)}
            role="dialog"
            aria-modal="true"
            aria-label={`${design.name} fullscreen`}
          >
            <button
              onClick={() => setZoom(false)}
              aria-label="Close"
              className="absolute right-6 top-6 grid h-11 w-11 place-items-center border border-ivory/40 text-ivory hover:bg-ivory/10"
            >
              <X size={20} />
            </button>
            <img src={activeImg} alt={design.name} className="max-h-[90vh] max-w-[90vw] object-contain" />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
