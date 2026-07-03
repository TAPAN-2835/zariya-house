import { PageBanner } from "@/components/layout/PageParts";

export default function Terms() {
  return (
    <>
      <PageBanner eyebrow="Legal" title="Terms of Use" />
      <article className="mx-auto max-w-2xl space-y-6 px-6 py-16 text-charcoal/85 leading-relaxed">
        <p>Zariya House is a curated jewellery design showcase. Content on this site — imagery, product designs, editorial writing — is provided for discovery and inspiration.</p>
        <p>Availability, pricing and final specifications are confirmed only through consultation. No transaction is initiated or completed on this website.</p>
        <p>Images and design language are the intellectual property of Zariya House. Reproduction for commercial purposes without written permission is prohibited.</p>
        <p className="text-sm text-muted-foreground">Last updated: 2026.</p>
      </article>
    </>
  );
}
