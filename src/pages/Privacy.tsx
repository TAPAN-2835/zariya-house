import { PageBanner } from "@/components/layout/PageParts";

export default function Privacy() {
  return (
    <>
      <PageBanner eyebrow="Legal" title="Privacy Policy" />
      <article className="mx-auto max-w-2xl space-y-6 px-6 py-16 text-charcoal/85 leading-relaxed">
        <p>Zariya House is a design showcase. When you submit a consultation form or contact request, we collect your name, contact details and message solely to arrange a personal consultation.</p>
        <p>We never sell your information. We do not run e-commerce, so we do not collect payment information. Analytics is limited to aggregate site metrics.</p>
        <p>Requests to review or delete your information can be sent to hello@zariyahouse.example. We will respond within 30 days.</p>
        <p className="text-sm text-muted-foreground">Last updated: 2026.</p>
      </article>
    </>
  );
}
