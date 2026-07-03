
import { PageBanner } from "@/components/layout/PageParts";
import { FAQS } from "@/data/misc";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

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

export default FaqPage;
