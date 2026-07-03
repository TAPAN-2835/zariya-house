
import { useState } from "react";
import { Mail, Phone, MapPin, MessageCircle } from "lucide-react";
import { PageBanner } from "@/components/layout/PageParts";
import { LuxButton } from "@/components/ui/lux-button";

function ContactPage() {
  const [sent, setSent] = useState(false);
  return (
    <>
      <PageBanner eyebrow="Reach the Studio" title="Contact" subtitle="A note, a question, a request for the catalogue — we read every one." />

      <section className="mx-auto grid max-w-[1200px] gap-16 px-6 py-16 lg:grid-cols-[1fr_1.5fr] lg:px-10">
        <div className="space-y-8">
          <InfoRow icon={<Phone size={16} />} title="Speak with a stylist" body="+91 00000 00000" />
          <InfoRow icon={<Mail size={16} />} title="Write to us" body="hello@zariyahouse.example" />
          <InfoRow icon={<MapPin size={16} />} title="The Studio" body="By appointment only. Address shared upon confirmation." />
          <InfoRow icon={<MessageCircle size={16} />} title="WhatsApp" body="A discreet way to send us your reference images." />

          <div className="border-t border-border pt-6">
            <LuxButton href="/book-consultation" variant="outline-gold" size="sm">Book Consultation</LuxButton>
          </div>
        </div>

        <div>
          {sent ? (
            <div className="border border-gold bg-gold/5 p-10 text-center">
              <div className="serif-display text-2xl text-charcoal">Thank you — we will be in touch shortly.</div>
              <p className="mt-3 text-muted-foreground">The catalogue is on its way to your inbox.</p>
            </div>
          ) : (
            <form
              onSubmit={(e) => { e.preventDefault(); setSent(true); }}
              className="space-y-4 border border-border bg-card p-8"
            >
              <div className="serif-display text-2xl text-charcoal">Send us a note</div>
              <div className="grid gap-4 sm:grid-cols-2">
                <input required placeholder="Name" className="input" />
                <input required placeholder="Phone" className="input" />
              </div>
              <input required type="email" placeholder="Email" className="input" />
              <select className="input" defaultValue="">
                <option value="" disabled>Interested in…</option>
                <option>Bridal Jewellery</option>
                <option>Everyday Pieces</option>
                <option>Men's Jewellery</option>
                <option>Custom Design</option>
                <option>Catalogue Request</option>
              </select>
              <textarea rows={5} placeholder="Message" className="input resize-none" />
              <div className="flex flex-wrap gap-3 pt-2">
                <button type="submit" className="shine-sweep inline-flex items-center gap-2 border border-wine bg-wine px-6 py-3 text-[0.72rem] font-medium uppercase tracking-[0.28em] text-ivory hover:bg-wine-deep">Request Catalogue</button>
                <a href="#" className="inline-flex items-center gap-2 border border-gold px-6 py-3 text-[0.72rem] font-medium uppercase tracking-[0.28em] text-gold-deep hover:bg-gold/10">
                  <MessageCircle size={14} /> WhatsApp Us
                </a>
              </div>
            </form>
          )}
        </div>
      </section>
      <style>{`
        .input { width:100%; border:1px solid var(--color-border); background:var(--color-card); padding:0.75rem 1rem; font-size:0.9rem; color:var(--color-charcoal); transition:border-color .2s; }
        .input:focus { outline:none; border-color:var(--color-gold); }
      `}</style>
    </>
  );
}

function InfoRow({ icon, title, body }: { icon: React.ReactNode; title: string; body: string }) {
  return (
    <div className="flex gap-4">
      <div className="grid h-10 w-10 shrink-0 place-items-center border border-gold/40 text-gold-deep">{icon}</div>
      <div>
        <div className="eyebrow text-charcoal/70">{title}</div>
        <div className="mt-1 text-charcoal">{body}</div>
      </div>
    </div>
  );
}

export default ContactPage;
