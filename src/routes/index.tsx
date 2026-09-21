import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState, type ReactNode } from "react";
import {
  CalendarCheck,
  Camera,
  Clock,
  Film,
  Heart,
  MapPin,
  Phone,
  Sparkles,
  Users,
} from "lucide-react";

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
      {
        property: "og:title",
        content: "Heritage Haveli — Mughal Shoot Location, Bedian Road Lahore",
      },
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
    desc: "Timeless architecture and beautiful outdoor spaces for your special moments.",
    best: "Best for · Couple portraits & stories",
  },
  {
    icon: Camera,
    num: "02",
    title: "Fashion & Editorial",
    desc: "Distinctive backdrops to bring creative concepts to life.",
    best: "Best for · Campaigns & lookbooks",
  },
  {
    icon: Sparkles,
    num: "03",
    title: "Personal Shoots",
    desc: "A beautiful setting for portraits, milestones and moments worth capturing.",
    best: "Best for · Portraits & milestones",
  },
];

const weddingRates = [
  { duration: "1 Hour", price: "PKR 35,000" },
  { duration: "1.5 Hours", price: "PKR 40,000" },
  { duration: "2 Hours", price: "PKR 45,000" },
];

const fashionQuoteQuestions = [
  "Preferred date & timings",
  "Shoot duration (hours / half-day / full-day)",
  "Approximate number of people / crew size",
  "Scale of art direction & set styling",
  "Whether you will bring a generator for lights",
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
export function Index() {
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
            <a href="#about" className="transition-colors hover:text-primary">
              About
            </a>
            <a href="#gallery" className="transition-colors hover:text-primary">
              Gallery
            </a>
            <a href="#types" className="transition-colors hover:text-primary">
              Shoot Types
            </a>
            <a href="#rates" className="transition-colors hover:text-primary">
              Rates
            </a>
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
              Where Mughal grandeur meets <span className="italic text-terra-soft">your</span> next
              frame
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
              <SectionLabel>About Us</SectionLabel>
            </Reveal>
            <Reveal delay={120}>
              <h2 className="mt-4 max-w-[20ch] font-display text-4xl font-semibold leading-tight tracking-tight text-balance md:text-5xl">
                Your one-stop spot for shoots!
              </h2>
            </Reveal>
            <Reveal delay={220}>
              <p className="mt-6 max-w-[52ch] text-base leading-relaxed text-pretty text-muted-foreground">
                Heritage Haveli is a unique shoot location in Lahore, designed by its architecture
                and surroundings to offer a variety of beautiful backdrops for photography and video
                productions. From open courtyard to verandas, each space offers a distinct backdrop
                with beautiful natural architectural detail.
              </p>
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
              fashion labels, Heritage Haveli has quietly starred in productions you've already
              seen.
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
                Explore Heritage Haveli
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
            Spaces for every kind of shoot
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
            Clear rates, tailored options
          </h2>
          <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-3">
            {/* Card 1: Wedding Couple Shoots */}
            <Reveal delay={0}>
              <div className="flex h-full flex-col justify-between rounded-2xl border border-border bg-card p-8 ring-1 ring-foreground/5 transition-transform duration-300 ease-out hover:-translate-y-1">
                <div>
                  <span className="font-mono text-xs uppercase tracking-[0.2em] text-primary">
                    Most Booked
                  </span>
                  <h3 className="mt-2 font-display text-2xl font-semibold tracking-tight">
                    Wedding Couple Shoots
                  </h3>
                  <p className="mt-2 text-xs text-muted-foreground">
                    Timeless architecture and romantic courtyards for pre-wedding and bridal
                    portraits.
                  </p>

                  <div className="mt-6 divide-y divide-border/60 rounded-xl border border-border/50 bg-secondary/50 p-4">
                    {weddingRates.map((tier) => (
                      <div
                        key={tier.duration}
                        className="flex items-center justify-between py-2.5 first:pt-0 last:pb-0"
                      >
                        <span className="text-sm font-medium">{tier.duration}</span>
                        <span className="font-display text-lg font-semibold text-primary">
                          {tier.price}
                        </span>
                      </div>
                    ))}
                  </div>

                  <ul className="mt-6 space-y-2.5 text-xs text-muted-foreground">
                    <li className="flex gap-2">
                      <span className="font-bold text-primary">·</span>
                      Full access to open courtyards, arches &amp; verandas
                    </li>
                    <li className="flex gap-2">
                      <span className="font-bold text-primary">·</span>
                      Private bridal dressing room &amp; makeup vanity
                    </li>
                    <li className="flex gap-2">
                      <span className="font-bold text-primary">·</span>
                      Dedicated on-site shoot coordinator
                    </li>
                  </ul>
                </div>

                <a
                  href="#booking"
                  className="mt-8 rounded-full bg-primary px-5 py-2.5 text-center text-sm font-medium text-primary-foreground transition-colors hover:bg-accent"
                >
                  Book Wedding Shoot
                </a>
              </div>
            </Reveal>

            {/* Card 2: Personal Shoots */}
            <Reveal delay={120}>
              <div className="flex h-full flex-col justify-between rounded-2xl border border-border bg-card p-8 ring-1 ring-foreground/5 transition-transform duration-300 ease-out hover:-translate-y-1">
                <div>
                  <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
                    Portraits &amp; Milestones
                  </span>
                  <h3 className="mt-2 font-display text-2xl font-semibold tracking-tight">
                    Personal Shoots
                  </h3>
                  <p className="mt-2 text-xs text-muted-foreground">
                    A beautiful setting for individual portraits, milestones, and moments worth
                    capturing.
                  </p>

                  <div className="mt-6 rounded-xl border border-border/50 bg-secondary/50 p-4">
                    <div className="flex items-baseline gap-2">
                      <span className="font-display text-4xl font-semibold text-primary">
                        PKR 10,000
                      </span>
                      <span className="text-xs text-muted-foreground">/ 1 hour</span>
                    </div>
                    <p className="mt-1.5 text-[11px] text-muted-foreground">
                      Additional hours or custom arrangements available on advance request.
                    </p>
                  </div>

                  <ul className="mt-6 space-y-2.5 text-xs text-muted-foreground">
                    <li className="flex gap-2">
                      <span className="font-bold text-primary">·</span>
                      Solo, family &amp; birthday portrait sessions
                    </li>
                    <li className="flex gap-2">
                      <span className="font-bold text-primary">·</span>
                      Access to scenic courtyards and verandas
                    </li>
                    <li className="flex gap-2">
                      <span className="font-bold text-primary">·</span>
                      Private changing space provided
                    </li>
                    <li className="flex gap-2">
                      <span className="font-bold text-primary">·</span>
                      Natural architectural light &amp; calm setting
                    </li>
                  </ul>
                </div>

                <a
                  href="#booking"
                  className="mt-8 rounded-full border border-foreground/20 px-5 py-2.5 text-center text-sm font-medium transition-colors hover:bg-foreground hover:text-background"
                >
                  Book Personal Shoot
                </a>
              </div>
            </Reveal>

            {/* Card 3: Fashion Shoot */}
            <Reveal delay={240}>
              <div className="flex h-full flex-col justify-between rounded-2xl border border-border bg-accent p-8 text-accent-foreground ring-1 ring-foreground/10 transition-transform duration-300 ease-out hover:-translate-y-1">
                <div>
                  <span className="font-mono text-xs uppercase tracking-[0.2em] text-terra-soft">
                    Editorial &amp; Campaigns
                  </span>
                  <h3 className="mt-2 font-display text-2xl font-semibold tracking-tight">
                    Fashion Shoot
                  </h3>
                  <p className="mt-2 text-xs text-accent-foreground/80">
                    For a price estimate, answer a few quick details below and our team will contact
                    you with a tailored quote:
                  </p>

                  <div className="mt-6 rounded-xl border border-accent-foreground/15 bg-background/10 p-4">
                    <div className="font-display text-xl font-semibold text-terra-soft">
                      Custom Price Estimate
                    </div>
                    <p className="mt-1 text-[11px] text-accent-foreground/75">
                      Tell us these few details to calculate your rate:
                    </p>
                  </div>

                  <ul className="mt-5 space-y-2 text-xs text-accent-foreground/90">
                    {fashionQuoteQuestions.map((q, idx) => (
                      <li key={q} className="flex items-start gap-2.5">
                        <span className="font-mono text-xs font-semibold text-terra-soft">
                          0{idx + 1}.
                        </span>
                        <span>{q}</span>
                      </li>
                    ))}
                  </ul>

                  <p className="mt-4 text-[11px] leading-relaxed text-accent-foreground/75">
                    Fill in these answers in our booking inquiry form and our coordinator will get
                    in touch with your custom estimate.
                  </p>
                </div>

                <a
                  href="#booking"
                  className="mt-8 rounded-full bg-primary px-5 py-2.5 text-center text-sm font-medium text-primary-foreground transition-colors hover:bg-terra-soft"
                >
                  Request a Price Estimate
                </a>
              </div>
            </Reveal>
          </div>

          <p className="mt-6 text-xs text-muted-foreground">
            All shoots include on-site coordinator support and access to preparation areas. For
            multi-day shoots, reach out directly.
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
                      <label
                        htmlFor="name"
                        className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-muted-foreground"
                      >
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
                      <label
                        htmlFor="email"
                        className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-muted-foreground"
                      >
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
                      <label
                        htmlFor="phone"
                        className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-muted-foreground"
                      >
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
                      <label
                        htmlFor="shoot-type"
                        className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-muted-foreground"
                      >
                        Shoot type
                      </label>
                      <select
                        id="shoot-type"
                        className="w-full rounded-lg border border-input bg-background px-3 py-2.5 text-sm outline-none transition-colors focus:border-primary"
                      >
                        <option>Wedding couple shoot</option>
                        <option>Personal shoot</option>
                        <option>Fashion shoot (Price estimate)</option>
                        <option>Music video / Other production</option>
                      </select>
                    </div>
                    <div>
                      <label
                        htmlFor="date"
                        className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-muted-foreground"
                      >
                        Preferred date
                      </label>
                      <input
                        id="date"
                        type="date"
                        className="w-full rounded-lg border border-input bg-background px-3 py-2.5 text-sm outline-none transition-colors focus:border-primary"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="duration"
                        className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-muted-foreground"
                      >
                        Duration
                      </label>
                      <select
                        id="duration"
                        className="w-full rounded-lg border border-input bg-background px-3 py-2.5 text-sm outline-none transition-colors focus:border-primary"
                      >
                        <option>1 Hour</option>
                        <option>1.5 Hours</option>
                        <option>2 Hours</option>
                        <option>Half Day (5 Hours)</option>
                        <option>Full Day (10 Hours)</option>
                        <option>Custom duration</option>
                      </select>
                    </div>
                    <div>
                      <label
                        htmlFor="crew"
                        className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-muted-foreground"
                      >
                        Approx. number of people / Crew
                      </label>
                      <input
                        id="crew"
                        type="text"
                        placeholder="e.g. 10–15 people"
                        className="w-full rounded-lg border border-input bg-background px-3 py-2.5 text-sm outline-none transition-colors focus:border-primary"
                      />
                    </div>
                    <div className="sm:col-span-2">
                      <label
                        htmlFor="generator"
                        className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-muted-foreground"
                      >
                        Bringing a generator for lights?
                      </label>
                      <select
                        id="generator"
                        className="w-full rounded-lg border border-input bg-background px-3 py-2.5 text-sm outline-none transition-colors focus:border-primary"
                      >
                        <option>No (Natural light / haveli house power)</option>
                        <option>Yes (Bringing our own generator for lights)</option>
                        <option>Need on-site generator arrangement assistance</option>
                      </select>
                    </div>
                  </div>
                  <div className="mt-5">
                    <label
                      htmlFor="notes"
                      className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-muted-foreground"
                    >
                      Scale of art direction &amp; shoot details
                    </label>
                    <textarea
                      id="notes"
                      rows={3}
                      placeholder="Share details on art direction scale, concept, specific backdrops, or special requirements for your estimate…"
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
            <a href="#about" className="transition-colors hover:text-terra-soft">
              About
            </a>
            <a href="#gallery" className="transition-colors hover:text-terra-soft">
              Gallery
            </a>
            <a href="#types" className="transition-colors hover:text-terra-soft">
              Shoot Types
            </a>
            <a href="#rates" className="transition-colors hover:text-terra-soft">
              Rates
            </a>
            <a href="#booking" className="transition-colors hover:text-terra-soft">
              Book a Slot
            </a>
          </nav>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-background/40">
            © 2026 Heritage Haveli
          </p>
        </div>
      </footer>
    </div>
  );
}
