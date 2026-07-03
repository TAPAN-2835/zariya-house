import { createFileRoute } from "@tanstack/react-router";
import { PageBanner } from "@/components/layout/PageParts";
import { FAQS } from "@/data/misc";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQ | Zariya House" },
      { name: "description", content: "Frequently asked questions about Zariya House consultations, customisation, and craft." },
      { property: "og:url", content: "/faq" },
    ],
    links: [{ rel: "canonical", href: "/faq" }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: FAQS.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      }),
    }],
  }),
  component: FaqPage,
});

function FaqPage() {
  return (
    <>
      <PageBanner eyebrow="Questions" title="Frequently Asked" />
      <section className="mx-auto max-w-3xl px-6 py-16 lg:px-10">
        <Accordion type="single" collapsible className="w-full">
          {FAQS.map((f, i) => (
            <AccordionItem key={i} value={`item-${i}`}>
              <AccordionTrigger className="serif-display text-left text-xl">{f.q}</AccordionTrigger>
              <AccordionContent className="text-base text-charcoal/80">{f.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>
    </>
  );
}
