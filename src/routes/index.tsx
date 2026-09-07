import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { CalendarCheck, Camera, Clock, Film, Heart, MapPin, Phone, Users } from "lucide-react";

import heroCourtyard from "@/assets/hero-courtyard.jpg";
import veranda from "@/assets/veranda.jpg";
import galleryPrewedding from "@/assets/gallery-prewedding.jpg";
import galleryFashion from "@/assets/gallery-fashion.jpg";
import galleryMusicvideo from "@/assets/gallery-musicvideo.jpg";
import galleryCrew from "@/assets/gallery-crew.jpg";
import galleryJali from "@/assets/gallery-jali.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Heritage Haveli — Mughal Shoot Location, Bedian Road Lahore" },
      {
        name: "description",
        content:
          "Heritage Haveli on Bedian Road, Lahore — a Mughal-era courtyard haveli trusted by famous actresses and leading brands for pre-wedding shoots, fashion editorials, and music videos. See rates and book a slot.",
      },
      { property: "og:title", content: "Heritage Haveli — Mughal Shoot Location, Bedian Road Lahore" },
      {
        property: "og:description",
        content:
          "Courtyards, scalloped arches, and carved verandas — a Mughal-era haveli in Lahore open for pre-wedding, fashion, and music video productions.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

/* ---------------- scroll reveal wrapper ---------------- */
function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.12 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`${className} transition-all duration-1000 ease-out ${
        visible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

function SectionLabel({ children, light = false }: { children: ReactNode; light?: boolean }) {
  return (
    <p
      className={`font-mono text-xs uppercase tracking-[0.3em] ${
        light ? "text-terra-soft" : "text-primary"
      }`}
    >
      {children}
    </p>
  );
}

/* ---------------- data ---------------- */
const shootTypes = [
  {
    icon: Heart,
    num: "01",
    title: "Pre-Wedding",
    desc: "Golden-hour courtyards, scalloped archways, and a fountain courtyard made for cinematic couple stories. Bridal dressing rooms included.",
    best: "Best for · 1–2 day stories",
  },
  {
    icon: Camera,
    num: "02",
    title: "Fashion & Editorial",
    desc: "Frescoed walls, jali light, and carved verandas — backdrops that have carried campaigns for Pakistan's leading fashion houses.",
    best: "Best for · Campaigns & lookbooks",
  },
  {
    icon: Film,
    num: "03",
    title: "Music Videos",
    desc: "Full-property access with night shoots, space for rigging and large crews, and a quiet compound off Bedian Road.",
    best: "Best for · Full-day & night shoots",
  },
];

const rates = [
  {
    name: "Half Day",
    price: "PKR 85,000",
    unit: "/ 5 hours",
    features: [
      "Courtyard + two verandas",
      "Crew up to 15",
      "Bridal / dressing room",
      "On-site coordinator",
    ],
    featured: false,
  },
  {
    name: "Full Day",
    price: "PKR 150,000",
    unit: "/ 10 hours",
    features: [
      "Entire haveli access",
      "Crew up to 35",
      "Power + generator backup",
      "Changing & makeup rooms",
      "Secure parking for crew vehicles",
    ],
    featured: true,
  },
  {
    name: "Night / Full Production",
    price: "PKR 250,000",
    unit: "/ 12 hours",
    features: [
      "6pm – 6am exclusive access",
      "Unlimited crew & rigging",
      "Drone-friendly rooftop",
      "Security + night staff",
    ],
    featured: false,
  },
];

const featuredIn = [
  "Leading couture houses",
  "Film & TV actresses",
  "Bridal campaigns",
  "Top music labels",
  "Drama productions",
  "Designer lookbooks",
];

/* ---------------- page ---------------- */
function Index() {
  const [sent, setSent] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground antialiased">
      {/* NAV */}
      <header className="sticky top-0 z-40 border-b border-border bg-background/90 backdrop-blur-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="#top" className="flex items-baseline gap-2">
            <span className="font-display text-2xl font-semibold tracking-tight">
              Heritage Haveli
            </span>
            <span className="hidden font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground sm:inline">
              Bedian Road · Lahore
            </span>
          </a>
          <nav className="hidden items-center gap-8 text-sm text-muted-foreground md:flex">
            <a href="#about" className="transition-colors hover:text-primary">About</a>
            <a href="#gallery" className="transition-colors hover:text-primary">Gallery</a>
            <a href="#types" className="transition-colors hover:text-primary">Shoot Types</a>
            <a href="#rates" className="transition-colors hover:text-primary">Rates</a>
          </nav>
          <a
            href="#booking"
            className="rounded-full bg-primary px-5 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-accent"
          >
            Book a Slot
          </a>
        </div>
      </header>

      {/* HERO */}
      <section id="top" className="relative">
        <img
          src={heroCourtyard}
          alt="Golden-hour Mughal courtyard of Heritage Haveli with scalloped arches and fountains"
          className="h-[86vh] min-h-[560px] w-full object-cover"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/25 to-foreground/10" />
        <div className="absolute inset-0 flex items-end">
          <div className="mx-auto w-full max-w-7xl px-6 pb-16">
            <p className="mb-4 animate-fade-up font-mono text-xs uppercase tracking-[0.3em] text-background/90 [animation-delay:150ms]">
              A Mughal-era location · Bedian Road, Lahore
            </p>
            <h1 className="max-w-[22ch] animate-fade-up font-display text-5xl font-semibold leading-[1.02] tracking-tight text-balance text-background [animation-delay:300ms] md:text-7xl">
              Where Mughal grandeur meets <span className="italic text-terra-soft">your</span> next frame
            </h1>
            <p className="mt-5 max-w-[52ch] animate-fade-up text-base text-pretty text-background/85 [animation-delay:450ms]">
              A heritage haveli of courtyards, scalloped arches, and carved verandas — opened for
              pre-wedding shoots, fashion editorials, and music videos. The set is already dressed.
            </p>
            <div className="mt-8 flex animate-fade-up flex-wrap gap-4 [animation-delay:600ms]">
              <a
                href="#booking"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-accent"
              >
                <CalendarCheck className="size-4" />
                Book a Slot
              </a>
              <a
                href="#gallery"
                className="inline-flex items-center rounded-full border border-background/40 px-7 py-3 text-sm font-medium text-background transition-colors hover:border-background hover:bg-background/10"
              >
                View the Gallery
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="border-b border-border">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 py-20 md:grid-cols-12 md:py-28">
          <div className="md:col-span-5">
            <Reveal>
              <SectionLabel>About the Haveli</SectionLabel>
            </Reveal>
            <Reveal delay={120}>
              <h2 className="mt-4 max-w-[18ch] font-display text-4xl font-semibold leading-tight tracking-tight text-balance md:text-5xl">
                Step through carved doors into a courtyard built for light
              </h2>
            </Reveal>
            <Reveal delay={220}>
              <p className="mt-6 max-w-[52ch] text-base leading-relaxed text-pretty text-muted-foreground">
                Heritage Haveli is a family seat of red sandstone, white marble, and frescoed
                archways on Bedian Road, Lahore. Its central courtyard opens to the sky, its
                verandas frame every doorway like a composed shot, and its jali screens pour
                patterned light across the floor each afternoon.
              </p>
              <p className="mt-4 max-w-[52ch] text-base leading-relaxed text-pretty text-muted-foreground">
                We keep the heritage intact and hand the location to your production — with dressing
                rooms, power, parking, and a coordinator who knows every corner of the building.
              </p>
            </Reveal>
            <Reveal delay={320}>
              <div className="mt-8 grid grid-cols-3 gap-4">
                {[
                  ["100+", "Years of heritage"],
                  ["2", "Courtyards"],
                  ["200+", "Shoots hosted"],
                ].map(([num, label]) => (
                  <div key={label}>
                    <div className="font-display text-3xl font-semibold text-accent">{num}</div>
                    <div className="text-xs uppercase tracking-wider text-muted-foreground">
                      {label}
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
          <div className="md:col-span-7">
            <Reveal delay={200} className="h-full">
              <img
                src={veranda}
                alt="Carved sandstone veranda corridor with arched columns and marble floor"
                className="h-full min-h-[360px] w-full rounded-2xl object-cover"
                loading="lazy"
                width={1024}
                height={1280}
              />
            </Reveal>
          </div>
        </div>
      </section>

      {/* FEATURED IN */}
      <section className="border-b border-border bg-secondary">
        <div className="mx-auto max-w-7xl px-6 py-14">
          <Reveal>
            <p className="text-center font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">
              Chosen by Pakistan's most recognised faces &amp; brands
            </p>
          </Reveal>
          <Reveal delay={150}>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
              {featuredIn.map((name) => (
                <span
                  key={name}
                  className="font-display text-xl font-semibold italic tracking-tight text-muted-foreground/80 md:text-2xl"
                >
                  {name}
                </span>
              ))}
            </div>
          </Reveal>
          <Reveal delay={250}>
            <p className="mx-auto mt-8 max-w-[56ch] text-center text-sm text-pretty text-muted-foreground">
              From celebrated actresses' bridal editorials to campaigns for the country's biggest
              fashion labels, Heritage Haveli has quietly starred in productions you've already seen.
            </p>
          </Reveal>
        </div>
      </section>

      {/* GALLERY */}
      <section id="gallery" className="border-b border-border">
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-24">
          <div className="mb-10 flex items-end justify-between">
            <div>
              <SectionLabel>Gallery</SectionLabel>
              <h2 className="mt-3 font-display text-4xl font-semibold tracking-tight text-balance md:text-5xl">
                Shoots, in situ
              </h2>
            </div>
            <p className="hidden max-w-[26ch] text-sm text-muted-foreground sm:block">
              Frames from real productions — bridal mornings, couture campaigns, and night shoots.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <Reveal className="group">
              <img
                src={galleryPrewedding}
                alt="Pre-wedding couple in ivory and gold attire beneath a Mughal archway"
                className="aspect-[4/5] w-full rounded-2xl object-cover transition-transform duration-500 ease-out group-hover:-translate-y-1"
                loading="lazy"
                width={1024}
                height={1280}
              />
            </Reveal>
            <Reveal delay={100} className="group">
              <img
                src={galleryFashion}
                alt="Fashion editorial model in deep red couture gown framed by a frescoed arch"
                className="aspect-[4/5] w-full rounded-2xl object-cover transition-transform duration-500 ease-out group-hover:-translate-y-1"
                loading="lazy"
                width={1024}
                height={1280}
              />
            </Reveal>
            <Reveal delay={200} className="group">
              <img
                src={galleryMusicvideo}
                alt="Dancer silhouette in the haveli courtyard at dusk under string lights"
                className="aspect-[4/5] w-full rounded-2xl object-cover transition-transform duration-500 ease-out group-hover:-translate-y-1"
                loading="lazy"
                width={1024}
                height={1280}
              />
            </Reveal>
            <Reveal delay={100} className="group sm:col-span-2">
              <img
                src={galleryCrew}
                alt="Film crew with cameras and lighting set up around the haveli's marble fountain courtyard"
                className="aspect-[16/9] w-full rounded-2xl object-cover transition-transform duration-500 ease-out group-hover:-translate-y-1"
                loading="lazy"
                width={1600}
                height={900}
              />
            </Reveal>
            <Reveal delay={200} className="group">
              <img
                src={galleryJali}
                alt="Carved marble jali screen casting patterned shadows on the sandstone floor"
                className="aspect-[4/3] w-full rounded-2xl object-cover transition-transform duration-500 ease-out group-hover:-translate-y-1"
                loading="lazy"
                width={1024}
                height={768}
              />
            </Reveal>
          </div>
        </div>
      </section>

      {/* SHOOT TYPES */}
      <section id="types" className="border-b border-border bg-secondary/60">
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-24">
          <SectionLabel>Shoot Types</SectionLabel>
          <h2 className="mt-3 max-w-[20ch] font-display text-4xl font-semibold tracking-tight text-balance md:text-5xl">
            Built for three kinds of frame
          </h2>
          <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-3">
            {shootTypes.map((t, i) => (
              <Reveal key={t.title} delay={i * 120}>
                <div className="h-full rounded-2xl border border-border bg-card p-7 ring-1 ring-foreground/5 transition-transform duration-300 ease-out hover:-translate-y-1">
                  <div className="flex items-center justify-between">
                    <t.icon className="size-6 text-primary" />
                    <span className="font-mono text-xs text-terra-soft">({t.num})</span>
                  </div>
                  <h3 className="mt-4 font-display text-2xl font-semibold tracking-tight">
                    {t.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-pretty text-muted-foreground">
                    {t.desc}
                  </p>
                  <p className="mt-5 border-t border-border pt-4 text-xs uppercase tracking-wider text-accent">
                    {t.best}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* RATES */}
      <section id="rates" className="border-b border-border">
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-24">
          <SectionLabel>Rates</SectionLabel>
          <h2 className="mt-3 max-w-[20ch] font-display text-4xl font-semibold tracking-tight text-balance md:text-5xl">
            Clear tiers, honest pricing
          </h2>
          <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-3">
            {rates.map((r, i) => (
              <Reveal key={r.name} delay={i * 120}>
                <div
                  className={`flex h-full flex-col rounded-2xl p-8 ring-1 transition-transform duration-300 ease-out hover:-translate-y-1 ${
                    r.featured
                      ? "bg-accent text-accent-foreground ring-foreground/10"
                      : "border border-border bg-card ring-foreground/5"
                  }`}
                >
                  {r.featured && (
                    <span className="font-mono text-xs uppercase tracking-[0.2em] text-terra-soft">
                      Most booked
                    </span>
                  )}
                  <h3 className="mt-3 font-display text-2xl font-semibold tracking-tight">
                    {r.name}
                  </h3>
                  <div className="mt-4 flex items-baseline gap-2">
                    <span
                      className={`font-display text-4xl font-semibold ${
                        r.featured ? "text-terra-soft" : "text-primary"
                      }`}
                    >
                      {r.price}
                    </span>
                    <span
                      className={`text-sm ${r.featured ? "text-accent-foreground/70" : "text-muted-foreground"}`}
                    >
                      {r.unit}
                    </span>
                  </div>
                  <ul
                    className={`mt-6 space-y-3 text-sm ${
                      r.featured ? "text-accent-foreground/85" : "text-muted-foreground"
                    }`}
                  >
                    {r.features.map((f) => (
                      <li key={f} className="flex gap-2">
                        <span className={r.featured ? "text-terra-soft" : "text-primary"}>·</span>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <a
                    href="#booking"
                    className={`mt-8 rounded-full px-5 py-2.5 text-center text-sm font-medium transition-colors ${
                      r.featured
                        ? "bg-primary text-primary-foreground hover:bg-terra-soft"
                        : "border border-foreground/20 hover:bg-foreground hover:text-background"
                    }`}
                  >
                    Book a Slot
                  </a>
                </div>
              </Reveal>
            ))}
          </div>
          <p className="mt-6 text-xs text-muted-foreground">
            All rates include setup, teardown, and a walkthrough with our on-site coordinator.
            Multi-day and recurring bookings available on request.
          </p>
        </div>
      </section>

      {/* BOOKING */}
      <section id="booking" className="bg-accent text-accent-foreground">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 py-20 md:grid-cols-12 md:py-28">
          <div className="md:col-span-4">
            <SectionLabel light>Booking &amp; Inquiry</SectionLabel>
            <h2 className="mt-4 max-w-[16ch] font-display text-4xl font-semibold leading-tight tracking-tight text-balance md:text-5xl">
              Reserve your dates
            </h2>
            <p className="mt-5 max-w-[40ch] text-sm leading-relaxed text-pretty text-accent-foreground/80">
              Tell us your shoot type and preferred dates. Our coordinator replies within one
              working day with availability and a walkthrough slot.
            </p>
            <div className="mt-8 space-y-4 text-sm text-accent-foreground/75">
              <p className="flex items-center gap-3">
                <MapPin className="size-4 text-terra-soft" />
                Heritage Haveli, Bedian Road, Lahore
              </p>
              <p className="flex items-center gap-3">
                <Phone className="size-4 text-terra-soft" />
                +92 300 0000000
              </p>
              <p className="flex items-center gap-3">
                <Clock className="size-4 text-terra-soft" />
                Recce visits by appointment, 10am – 6pm
              </p>
            </div>
          </div>
          <div className="md:col-span-8">
            <div className="rounded-3xl bg-background p-7 text-foreground ring-1 ring-foreground/5 md:p-9">
              {sent ? (
                <div className="flex min-h-[320px] flex-col items-center justify-center text-center">
                  <CalendarCheck className="size-10 text-primary" />
                  <h3 className="mt-4 font-display text-3xl font-semibold tracking-tight">
                    Enquiry received
                  </h3>
                  <p className="mt-3 max-w-[40ch] text-sm text-muted-foreground">
                    Thank you — our coordinator will get back to you within one working day with
                    availability and next steps.
                  </p>
                  <button
                    onClick={() => setSent(false)}
                    className="mt-6 rounded-full border border-foreground/20 px-5 py-2 text-sm font-medium transition-colors hover:bg-foreground hover:text-background"
                  >
                    Send another enquiry
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setSent(true);
                  }}
                >
                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor="name" className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-muted-foreground">
                        Full name
                      </label>
                      <input
                        id="name"
                        required
                        type="text"
                        placeholder="Your name"
                        className="w-full rounded-lg border border-input bg-background px-3 py-2.5 text-sm outline-none transition-colors focus:border-primary"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-muted-foreground">
                        Email
                      </label>
                      <input
                        id="email"
                        required
                        type="email"
                        placeholder="you@studio.com"
                        className="w-full rounded-lg border border-input bg-background px-3 py-2.5 text-sm outline-none transition-colors focus:border-primary"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-muted-foreground">
                        Phone / WhatsApp
                      </label>
                      <input
                        id="phone"
                        required
                        type="tel"
                        placeholder="+92 3XX XXXXXXX"
                        className="w-full rounded-lg border border-input bg-background px-3 py-2.5 text-sm outline-none transition-colors focus:border-primary"
                      />
                    </div>
                    <div>
                      <label htmlFor="shoot-type" className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-muted-foreground">
                        Shoot type
                      </label>
                      <select
                        id="shoot-type"
                        className="w-full rounded-lg border border-input bg-background px-3 py-2.5 text-sm outline-none transition-colors focus:border-primary"
                      >
                        <option>Pre-wedding</option>
                        <option>Fashion / editorial</option>
                        <option>Music video</option>
                        <option>Other production</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="date" className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-muted-foreground">
                        Preferred date
                      </label>
                      <input
                        id="date"
                        type="date"
                        className="w-full rounded-lg border border-input bg-background px-3 py-2.5 text-sm outline-none transition-colors focus:border-primary"
                      />
                    </div>
                    <div>
                      <label htmlFor="crew" className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-muted-foreground">
                        Crew size
                      </label>
                      <input
                        id="crew"
                        type="text"
                        placeholder="e.g. 25"
                        className="w-full rounded-lg border border-input bg-background px-3 py-2.5 text-sm outline-none transition-colors focus:border-primary"
                      />
                    </div>
                  </div>
                  <div className="mt-5">
                    <label htmlFor="notes" className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-muted-foreground">
                      Tell us about the shoot
                    </label>
                    <textarea
                      id="notes"
                      rows={3}
                      placeholder="Concept, mood, timings, and any special requirements…"
                      className="w-full rounded-lg border border-input bg-background px-3 py-2.5 text-sm outline-none transition-colors focus:border-primary"
                    />
                  </div>
                  <button
                    type="submit"
                    className="mt-6 w-full rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-accent"
                  >
                    Book a Slot
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-foreground text-background">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 py-12 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="font-display text-2xl font-semibold tracking-tight">Heritage Haveli</p>
            <p className="mt-1 text-sm text-background/60">
              A Mughal-era shoot location · Bedian Road, Lahore
            </p>
          </div>
          <nav className="flex flex-wrap gap-6 text-sm text-background/70">
            <a href="#about" className="transition-colors hover:text-terra-soft">About</a>
            <a href="#gallery" className="transition-colors hover:text-terra-soft">Gallery</a>
            <a href="#types" className="transition-colors hover:text-terra-soft">Shoot Types</a>
            <a href="#rates" className="transition-colors hover:text-terra-soft">Rates</a>
            <a href="#booking" className="transition-colors hover:text-terra-soft">Book a Slot</a>
          </nav>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-background/40">
            © 2026 Heritage Haveli
          </p>
        </div>
      </footer>
    </div>
  );
}
