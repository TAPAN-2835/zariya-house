import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { format } from "date-fns";
import { Calendar as CalendarIcon, Store, Video, Check, ChevronRight, ChevronLeft } from "lucide-react";
import { z } from "zod";
import { PageBanner } from "@/components/layout/PageParts";
import { LuxButton } from "@/components/ui/lux-button";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { cn } from "@/lib/utils";

const searchSchema = z.object({ design: z.string().optional() });

export const Route = createFileRoute("/book-consultation")({
  validateSearch: searchSchema,
  head: () => ({
    meta: [
      { title: "Book a Consultation | Zariya House" },
      { name: "description", content: "Book a private jewellery consultation with Zariya House — in-studio or online. Explore designs with our stylists." },
      { property: "og:url", content: "/book-consultation" },
    ],
    links: [{ rel: "canonical", href: "/book-consultation" }],
  }),
  component: BookPage,
});

type FormState = {
  name: string;
  phone: string;
  email: string;
  interest: string;
  mode: "store" | "online" | "";
  date: Date | undefined;
  message: string;
  designRef: string;
};

function BookPage() {
  const nav = useNavigate();
  const { design } = Route.useSearch();
  const [step, setStep] = useState<0 | 1 | 2 | 3>(0);
  const [form, setForm] = useState<FormState>({
    name: "",
    phone: "",
    email: "",
    interest: "",
    mode: "",
    date: undefined,
    message: "",
    designRef: design ?? "",
  });

  const canNext = () => {
    if (step === 0) return form.name && form.phone && form.email;
    if (step === 1) return form.mode !== "";
    if (step === 2) return !!form.date;
    return true;
  };

  const submit = () => {
    nav({ to: "/thank-you" });
  };

  return (
    <>
      <PageBanner
        eyebrow="Consultation"
        title="Book a Consultation"
        subtitle="A private conversation — in the studio or from wherever you are. Our stylists will walk you through the pieces made for your story."
      />

      <section className="mx-auto max-w-3xl px-6 py-16 lg:px-10">
        <div className="mb-10 flex items-center justify-between">
          {["Details", "Mode", "Date", "Confirm"].map((label, i) => (
            <div key={label} className="flex flex-1 items-center">
              <div className={cn("grid h-9 w-9 place-items-center rounded-full border-2 text-xs font-medium transition-colors", i <= step ? "border-wine bg-wine text-ivory" : "border-border text-muted-foreground")}>
                {i < step ? <Check size={14} /> : i + 1}
              </div>
              <div className="ml-3 hidden text-xs uppercase tracking-widest sm:block">{label}</div>
              {i < 3 && <div className={cn("mx-3 h-px flex-1 transition-colors", i < step ? "bg-wine" : "bg-border")} />}
            </div>
          ))}
        </div>

        <div className="border border-border bg-card p-8 md:p-10">
          <AnimatePresence mode="wait">
            {step === 0 && (
              <motion.div key="0" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.3 }}>
                <div className="serif-display text-2xl text-charcoal">Tell us about you</div>
                <p className="mt-2 text-sm text-muted-foreground">All fields are held in confidence.</p>
                <div className="mt-6 grid gap-4">
                  <Field label="Full name">
                    <input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="input" />
                  </Field>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <Field label="Phone">
                      <input value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className="input" />
                    </Field>
                    <Field label="Email">
                      <input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="input" />
                    </Field>
                  </div>
                  <Field label="I'm interested in">
                    <select value={form.interest} onChange={(e) => setForm({ ...form, interest: e.target.value })} className="input">
                      <option value="">Select…</option>
                      <option>Bridal Jewellery</option>
                      <option>Engagement / Couple Rings</option>
                      <option>Everyday Pieces</option>
                      <option>Men's Jewellery</option>
                      <option>Custom Design</option>
                      <option>General Consultation</option>
                    </select>
                  </Field>
                  {form.designRef && (
                    <Field label="Design reference">
                      <div className="input flex items-center bg-secondary/50 text-charcoal">{form.designRef}</div>
                    </Field>
                  )}
                </div>
              </motion.div>
            )}

            {step === 1 && (
              <motion.div key="1" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.3 }}>
                <div className="serif-display text-2xl text-charcoal">How would you like to meet?</div>
                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  <ModeCard
                    icon={<Store size={22} />}
                    title="Store Visit"
                    body="Meet us at the studio. See pieces in person, hold them, wear them."
                    active={form.mode === "store"}
                    onClick={() => setForm({ ...form, mode: "store" })}
                  />
                  <ModeCard
                    icon={<Video size={22} />}
                    title="Online Consultation"
                    body="Speak with a stylist from anywhere. High-resolution imagery on request."
                    active={form.mode === "online"}
                    onClick={() => setForm({ ...form, mode: "online" })}
                  />
                </div>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div key="2" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.3 }}>
                <div className="serif-display text-2xl text-charcoal">Pick a date</div>
                <p className="mt-2 text-sm text-muted-foreground">Our team will confirm the time within 24 hours.</p>
                <div className="mt-6">
                  <Popover>
                    <PopoverTrigger asChild>
                      <button className={cn("input flex items-center justify-between text-left", !form.date && "text-muted-foreground")}>
                        <span>{form.date ? format(form.date, "EEEE, d MMMM yyyy") : "Choose a date"}</span>
                        <CalendarIcon size={16} />
                      </button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={form.date}
                        onSelect={(d) => setForm({ ...form, date: d })}
                        disabled={(d) => d < new Date()}
                        initialFocus
                        className={cn("p-3 pointer-events-auto")}
                      />
                    </PopoverContent>
                  </Popover>
                </div>
                <Field label="A note for our stylists (optional)" className="mt-6">
                  <textarea value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} rows={4} className="input resize-none" />
                </Field>
              </motion.div>
            )}

            {step === 3 && (
              <motion.div key="3" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.3 }}>
                <div className="serif-display text-2xl text-charcoal">Confirm your consultation</div>
                <dl className="mt-6 space-y-3 border border-border p-6 text-sm">
                  <Row label="Name" value={form.name} />
                  <Row label="Contact" value={`${form.phone} · ${form.email}`} />
                  {form.interest && <Row label="Interested in" value={form.interest} />}
                  <Row label="Mode" value={form.mode === "store" ? "Store Visit" : "Online Consultation"} />
                  {form.date && <Row label="Date" value={format(form.date, "EEEE, d MMMM yyyy")} />}
                  {form.designRef && <Row label="Design reference" value={form.designRef} />}
                </dl>
              </motion.div>
            )}
          </AnimatePresence>

          <div className="mt-8 flex items-center justify-between">
            <button
              onClick={() => setStep((s) => Math.max(0, s - 1) as 0 | 1 | 2 | 3)}
              disabled={step === 0}
              className="flex items-center gap-2 text-xs uppercase tracking-widest text-charcoal/70 disabled:opacity-30"
            >
              <ChevronLeft size={14} /> Back
            </button>
            {step < 3 ? (
              <button
                onClick={() => setStep((s) => (s + 1) as 0 | 1 | 2 | 3)}
                disabled={!canNext()}
                className="shine-sweep inline-flex items-center gap-2 border border-wine bg-wine px-6 py-3 text-[0.7rem] font-medium uppercase tracking-[0.28em] text-ivory transition-all hover:bg-wine-deep disabled:cursor-not-allowed disabled:opacity-40"
              >
                Continue <ChevronRight size={14} />
              </button>
            ) : (
              <LuxButton onClick={submit} variant="wine">Confirm Consultation</LuxButton>
            )}
          </div>
        </div>

        <p className="mt-6 text-center text-xs text-muted-foreground">
          Your details are private and used only to arrange your consultation.
        </p>
      </section>

      <style>{`
        .input { width:100%; border:1px solid var(--color-border); background:var(--color-card); padding:0.75rem 1rem; font-size:0.9rem; color:var(--color-charcoal); transition:border-color .2s; }
        .input:focus { outline:none; border-color:var(--color-gold); }
      `}</style>
    </>
  );
}

function Field({ label, children, className }: { label: string; children: React.ReactNode; className?: string }) {
  return (
    <label className={cn("block", className)}>
      <div className="eyebrow mb-2 text-[0.6rem] text-charcoal/70">{label}</div>
      {children}
    </label>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between border-b border-border/60 pb-2 last:border-0 last:pb-0">
      <dt className="text-muted-foreground">{label}</dt>
      <dd className="text-charcoal">{value}</dd>
    </div>
  );
}

function ModeCard({ icon, title, body, active, onClick }: { icon: React.ReactNode; title: string; body: string; active: boolean; onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "group text-left border p-6 transition-all",
        active ? "border-wine bg-wine/5 shadow-md" : "border-border hover:border-gold",
      )}
    >
      <div className={cn("grid h-12 w-12 place-items-center", active ? "bg-wine text-ivory" : "bg-secondary text-charcoal")}>{icon}</div>
      <div className="serif-display mt-4 text-xl text-charcoal">{title}</div>
      <p className="mt-2 text-sm text-muted-foreground">{body}</p>
    </button>
  );
}
