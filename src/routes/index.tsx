import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState, type ReactNode } from "react";
import {
  ArrowLeft,
  Bell,
  CalendarCheck,
  Camera,
  Check,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Clock,
  Copy,
  ExternalLink,
  Folder,
  FolderOpen,
  Heart,
  Inbox,
  Link2,
  Loader2,
  Mail,
  MapPin,
  Maximize2,
  Menu,
  MessageSquare,
  Phone,
  Plus,
  ShieldCheck,
  Sparkles,
  Trash2,
  Upload,
  X,
} from "lucide-react";

import haveliCover from "@/assets/images/haveli_facade_cover_1790779329796.jpg";
import heroCourtyard from "@/assets/hero-courtyard.jpg";
import veranda from "@/assets/veranda.jpg";
import verandaArches from "@/assets/veranda-arches.jpg";
import galleryPrewedding from "@/assets/gallery-prewedding.jpg";
import galleryFashion from "@/assets/gallery-fashion.jpg";
import galleryMusicvideo from "@/assets/gallery-musicvideo.jpg";
import galleryCrew from "@/assets/gallery-crew.jpg";
import indoorStairArch from "@/assets/images/indoor-stair-arch.jpg";
import indoorLanding from "@/assets/images/indoor-landing.jpg";
import indoorStaircase from "@/assets/images/indoor-staircase.jpg";
import indoorCorridor from "@/assets/images/indoor-corridor.jpg";
import rooftopSunset from "@/assets/images/rooftop_sunset_1790608458646.jpg";
import outdoorGarden from "@/assets/images/outdoor_garden_1790608487512.jpg";
import celebrityShoot from "@/assets/images/celebrity_shoot_1790608499756.jpg";
import bridalPortrait from "@/assets/images/bridal_portrait_1790608513432.jpg";

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

interface GalleryItem {
  id: string;
  title: string;
  category: "indoor" | "courtyard" | "rooftop" | "outdoor" | "celebrities" | "brands" | "bridal";
  categoryLabel: string;
  src: string;
  alt: string;
  description: string;
}

const galleryFolders = [
  {
    id: "indoor",
    name: "Indoor",
    cover: indoorStairArch,
    desc: "Arched stairway hall, marble landings & carved wooden railings",
  },
  {
    id: "courtyard",
    name: "Courtyard",
    cover: heroCourtyard,
    desc: "Central marble fountain & scalloped arches under natural sky",
  },
  {
    id: "rooftop",
    name: "Haveli Rooftop",
    cover: rooftopSunset,
    desc: "Terracotta dome, sandstone chhatri pavilion & panoramic sunset view",
  },
  {
    id: "outdoor",
    name: "Outdoor Spots",
    cover: outdoorGarden,
    desc: "Lush green lawns, brick pathways & garden courtyards",
  },
  {
    id: "celebrities",
    name: "Celebrities Shoot",
    cover: celebrityShoot,
    desc: "A-list film units, video village monitors & commercial cinema sets",
  },
  {
    id: "brands",
    name: "Famous Brands",
    cover: galleryFashion,
    desc: "High-fashion lookbooks, bridal campaigns & wardrobe productions",
  },
  {
    id: "bridal",
    name: "Bridal Shoots",
    cover: bridalPortrait,
    desc: "Opulent bridal couture, regal heirloom jewelry & couple portraits",
  },
];

const galleryItems: GalleryItem[] = [
  {
    id: "indoor-1",
    title: "Arched Stairway Hall",
    category: "indoor",
    categoryLabel: "Indoor",
    src: indoorStairArch,
    alt: "Scalloped Mughal arch framing twin wooden staircases in the haveli's marble stairway hall",
    description:
      "A grand scalloped arch framing twin wooden staircases over polished grey marble — a natural portrait backdrop.",
  },
  {
    id: "indoor-2",
    title: "Upper Landing Arches",
    category: "indoor",
    categoryLabel: "Indoor",
    src: indoorLanding,
    alt: "Upper landing with two cream arches, exposed brick ceiling vault and chevron marble inlay",
    description:
      "Double cream arches, an exposed brick vault and chevron marble inlay bathed in soft stairwell light.",
  },
  {
    id: "indoor-3",
    title: "Sculptural Staircase",
    category: "indoor",
    categoryLabel: "Indoor",
    src: indoorStaircase,
    alt: "Dark wooden balustrade winding beneath an exposed brick ceiling vault inside the haveli",
    description:
      "A dark wooden balustrade winding beneath the exposed brick vault — dramatic lines for editorial frames.",
  },
  {
    id: "indoor-4",
    title: "Marble Landing & Lattice Window",
    category: "indoor",
    categoryLabel: "Indoor",
    src: indoorCorridor,
    alt: "Landing with twin arches, carved wooden railing and a lattice window overlooking the grounds",
    description:
      "Twin arches, carved wooden railing and lattice-window light overlooking the haveli grounds.",
  },
  {
    id: "courtyard-1",
    title: "Central Fountain Courtyard",
    category: "courtyard",
    categoryLabel: "Courtyard",
    src: heroCourtyard,
    alt: "Golden-hour Mughal courtyard of Heritage Haveli with scalloped arches and fountain",
    description:
      "Open-sky central courtyard framed by scalloped Mughal arches and serene water fountain.",
  },
  {
    id: "courtyard-2",
    title: "Dusk Courtyard Illumination",
    category: "courtyard",
    categoryLabel: "Courtyard",
    src: galleryMusicvideo,
    alt: "Courtyard at dusk under warm string lights with silhouette of dancer",
    description:
      "Warm festive fairy lights and brass floor lanterns transforming the central courtyard for evening shoots.",
  },
  {
    id: "rooftop-1",
    title: "Sunset Rooftop Pavilion",
    category: "rooftop",
    categoryLabel: "Haveli Rooftop",
    src: rooftopSunset,
    alt: "Scenic haveli rooftop terrace in Lahore at golden hour sunset with terracotta dome and chhatri",
    description:
      "Terracotta Mughal dome and carved stone chhatri pavilion offering 360-degree golden hour sunset horizons.",
  },
  {
    id: "outdoor-1",
    title: "Bougainvillea Garden Lawn",
    category: "outdoor",
    categoryLabel: "Outdoor Spots",
    src: outdoorGarden,
    alt: "Lush manicured heritage haveli garden lawn with blooming bougainvillea and brick pathway",
    description:
      "Manicured green lawn surrounded by mature trees, vintage stone fountain, and vibrant pink bougainvillea.",
  },
  {
    id: "outdoor-2",
    title: "Veranda Garden Walkway",
    category: "outdoor",
    categoryLabel: "Outdoor Spots",
    src: veranda,
    alt: "Arched sandstone corridor overlooking the outer grounds",
    description:
      "Veranda arches leading out to open brick courtyards with dappled natural sunlight throughout the day.",
  },
  {
    id: "celebrities-1",
    title: "Director's Monitor & Cinema Unit",
    category: "celebrities",
    categoryLabel: "Celebrities Shoot",
    src: celebrityShoot,
    alt: "Cinema production set with director at camera monitor and actress under softbox lighting",
    description:
      "Full-scale commercial cinema setup with video village monitors and professional softbox diffusion.",
  },
  {
    id: "celebrities-2",
    title: "Main Courtyard Film Crew",
    category: "celebrities",
    categoryLabel: "Celebrities Shoot",
    src: galleryCrew,
    alt: "Film crew with cameras and lighting set up around the haveli's marble fountain courtyard",
    description:
      "Feature film and television drama crew staging multi-camera scenes in the haveli courtyard.",
  },
  {
    id: "brands-1",
    title: "Couture Campaign Lookbook",
    category: "brands",
    categoryLabel: "Famous Brands",
    src: galleryFashion,
    alt: "Fashion editorial model in deep red couture gown framed by a frescoed arch",
    description:
      "High-end luxury bridal fashion campaign framed inside hand-painted Mughal fresco archways.",
  },
  {
    id: "brands-2",
    title: "Commercial Fashion Unit",
    category: "brands",
    categoryLabel: "Famous Brands",
    src: galleryCrew,
    alt: "Fashion production crew with wardrobe and cinema cameras",
    description:
      "Turnkey production space accommodating large stylist wardrobes, hair & makeup setups, and heavy lighting gear.",
  },
  {
    id: "bridal-1",
    title: "Royal Crimson Bridal Portrait",
    category: "bridal",
    categoryLabel: "Bridal Shoots",
    src: bridalPortrait,
    alt: "Regal Pakistani bride in opulent crimson and gold hand-embroidered lehenga with traditional jewelry",
    description:
      "Hand-crafted zardozi bridal lehenga and heirloom jewelry captured against historic Mughal stonework.",
  },
  {
    id: "bridal-2",
    title: "Pre-Wedding Ivory & Gold Couple",
    category: "bridal",
    categoryLabel: "Bridal Shoots",
    src: galleryPrewedding,
    alt: "Pre-wedding couple in ivory and gold attire beneath a Mughal archway",
    description:
      "Romantic couple portrait under sandstone arches with warm late-afternoon natural ambient light.",
  },
];

interface BookingRecord {
  id: string;
  reference: string;
  createdAt: string;
  name: string;
  email: string;
  phone: string;
  shootType: string;
  date: string;
  duration: string;
  crew: string;
  generator: string;
  notes: string;
  status: "New" | "Contacted" | "Confirmed";
}

const formatPhoneForWhatsApp = (raw: string) => {
  let cleaned = raw.replace(/\D/g, "");
  if (cleaned.startsWith("0")) cleaned = "92" + cleaned.slice(1);
  if (!cleaned.startsWith("92") && cleaned.length === 10) cleaned = "92" + cleaned;
  return cleaned;
};

/* ---------------- page ---------------- */
export function Index() {
  const [sent, setSent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [lastBookingRef, setLastBookingRef] = useState<string>("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openedFolderId, setOpenedFolderId] = useState<string | null>(null);
  const [lightboxImageIndex, setLightboxImageIndex] = useState<number | null>(null);
  const [customPhotos, setCustomPhotos] = useState<Record<string, GalleryItem[]>>({});
  const [showStaffDesk, setShowStaffDesk] = useState(false);
  const uploadInputRef = useRef<HTMLInputElement>(null);

  // Cover image with persistent custom upload and Google Drive link support
  const [coverImage, setCoverImage] = useState<string>(() => {
    if (typeof window !== "undefined") {
      try {
        const saved = localStorage.getItem("haveli_cover_image");
        if (saved) return saved;
      } catch {
        // ignore
      }
    }
    return haveliCover;
  });

  const [showCoverModal, setShowCoverModal] = useState(false);
  const [coverUrlInput, setCoverUrlInput] = useState("");
  const [coverUrlError, setCoverUrlError] = useState("");
  const [isCoverUpdated, setIsCoverUpdated] = useState(false);

  // Converts any Google Drive share link (drive.google.com/file/d/...) or open?id=... into direct viewable image stream
  const formatGoogleDriveUrl = (input: string): string => {
    const trimmed = input.trim();
    // Standard Google Drive file URL: /file/d/{id}/view
    const fileIdMatch = trimmed.match(/\/file\/d\/([a-zA-Z0-9_-]+)/);
    if (fileIdMatch && fileIdMatch[1]) {
      return `https://lh3.googleusercontent.com/d/${fileIdMatch[1]}`;
    }
    // Alternate format: id={id}
    const idParamMatch = trimmed.match(/[?&]id=([a-zA-Z0-9_-]+)/);
    if (idParamMatch && idParamMatch[1]) {
      return `https://lh3.googleusercontent.com/d/${idParamMatch[1]}`;
    }
    return trimmed;
  };

  const handleApplyCoverUrl = (urlToApply?: string) => {
    const target = (urlToApply ?? coverUrlInput).trim();
    if (!target) {
      setCoverUrlError("Please paste a valid Google Drive link or image URL.");
      return;
    }
    const directUrl = formatGoogleDriveUrl(target);
    setCoverImage(directUrl);
    try {
      localStorage.setItem("haveli_cover_image", directUrl);
    } catch {
      // ignore
    }
    setCoverUrlError("");
    setIsCoverUpdated(true);
    setTimeout(() => {
      setShowCoverModal(false);
      setIsCoverUpdated(false);
      setCoverUrlInput("");
    }, 1000);
  };

  const handleCoverImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (event) => {
      const dataUrl = event.target?.result as string;
      if (dataUrl) {
        setCoverImage(dataUrl);
        try {
          localStorage.setItem("haveli_cover_image", dataUrl);
        } catch {
          // ignore
        }
        setIsCoverUpdated(true);
        setTimeout(() => {
          setShowCoverModal(false);
          setIsCoverUpdated(false);
        }, 1000);
      }
    };
    reader.readAsDataURL(file);
  };

  const handleResetCoverImage = () => {
    setCoverImage(haveliCover);
    try {
      localStorage.removeItem("haveli_cover_image");
    } catch {
      // ignore
    }
  };

  // Stored bookings
  const [bookings, setBookings] = useState<BookingRecord[]>(() => {
    if (typeof window === "undefined") return [];
    try {
      const saved = localStorage.getItem("haveli_bookings");
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const getFolderPhotos = (folderId: string) => {
    const base = galleryItems.filter((item) => item.category === folderId);
    const added = customPhotos[folderId] || [];
    return [...base, ...added];
  };

  const currentFolderPhotos = openedFolderId ? getFolderPhotos(openedFolderId) : [];

  const handleUploadPhotos = (folderId: string, files: FileList | null) => {
    if (!files || files.length === 0) return;
    const newItems: GalleryItem[] = Array.from(files).map((file, idx) => ({
      id: `${folderId}-custom-${Date.now()}-${idx}`,
      title: file.name.replace(/\.[^/.]+$/, ""),
      category: folderId as GalleryItem["category"],
      categoryLabel: galleryFolders.find((f) => f.id === folderId)?.name || folderId,
      src: URL.createObjectURL(file),
      alt: file.name,
      description: "Added to " + (galleryFolders.find((f) => f.id === folderId)?.name || folderId),
    }));
    setCustomPhotos((prev) => ({
      ...prev,
      [folderId]: [...(prev[folderId] || []), ...newItems],
    }));
  };

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    shootType: "Wedding couple shoot",
    date: "",
    duration: "1 Hour",
    crew: "",
    generator: "No (Natural light / haveli house power)",
    notes: "",
  });

  const handleBookingSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const refNumber = `HH-${Math.floor(1000 + Math.random() * 9000)}`;
    const newBooking: BookingRecord = {
      id: `booking-${Date.now()}`,
      reference: refNumber,
      createdAt: new Date().toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      }),
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      shootType: formData.shootType,
      date: formData.date || "To be confirmed",
      duration: formData.duration,
      crew: formData.crew || "Standard",
      generator: formData.generator,
      notes: formData.notes,
      status: "New",
    };

    // 1. Immediately store in local database for the Haveli Management Desk
    const updated = [newBooking, ...bookings];
    setBookings(updated);
    try {
      localStorage.setItem("haveli_bookings", JSON.stringify(updated));
    } catch (err) {
      console.error("Local storage error:", err);
    }

    // 2. Prepare formatted message for notifications
    const details = [
      `*New Shoot Booking Enquiry - Heritage Haveli*`,
      `*Booking Ref:* #${refNumber}`,
      ``,
      `*Full Name:* ${formData.name}`,
      `*Email:* ${formData.email}`,
      `*Phone / WhatsApp:* ${formData.phone}`,
      `*Shoot Type:* ${formData.shootType}`,
      `*Preferred Date:* ${formData.date || "To be discussed"}`,
      `*Duration:* ${formData.duration}`,
      `*Crew Size:* ${formData.crew || "Standard"}`,
      `*Generator:* ${formData.generator}`,
      formData.notes ? `*Shoot Details / Notes:* ${formData.notes}` : "",
    ]
      .filter(Boolean)
      .join("\n");

    // 3. Automated dispatch directly to heritage.haveliii@gmail.com via FormSubmit
    try {
      fetch("https://formsubmit.co/ajax/heritage.haveliii@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          _subject: `New Haveli Shoot Booking #${refNumber} - ${formData.name} (${formData.shootType})`,
          _replyto: formData.email,
          _template: "table",
          _captcha: "false",
          "Booking Reference": `#${refNumber}`,
          "Client Name": formData.name,
          "Client Phone / WhatsApp": formData.phone,
          "Client Email": formData.email,
          "Shoot Category": formData.shootType,
          "Requested Date": formData.date || "To be confirmed",
          Duration: formData.duration,
          "Crew / Team Size": formData.crew || "Standard",
          "Generator Requirement": formData.generator,
          "Shoot Details & Concept": formData.notes || "None provided",
          "Submitted On": new Date().toLocaleString("en-US", {
            dateStyle: "full",
            timeStyle: "short",
          }),
        }),
      }).catch((err) => {
        console.debug("FormSubmit dispatch note:", err);
      });
    } catch (err) {
      console.debug("FormSubmit error:", err);
    }

    // 4. Redundant automated dispatch to heritage.haveliii@gmail.com via Web3Forms
    try {
      fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: "heritage-haveli-booking-notifications",
          to: "heritage.haveliii@gmail.com",
          subject: `New Shoot Booking Request #${refNumber} - ${formData.name} (${formData.shootType})`,
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          shoot_type: formData.shootType,
          preferred_date: formData.date,
          duration: formData.duration,
          crew_size: formData.crew,
          generator: formData.generator,
          notes: formData.notes,
          message: details,
        }),
      }).catch((err) => {
        console.debug("Backup notification dispatch note:", err);
      });
    } catch (err) {
      console.debug("Email notification skipped:", err);
    }

    // Subtle simulated processing delay
    await new Promise((r) => setTimeout(r, 650));

    setLastBookingRef(refNumber);
    setIsSubmitting(false);
    setSent(true);
  };

  const handleDeleteBooking = (id: string) => {
    const updated = bookings.filter((b) => b.id !== id);
    setBookings(updated);
    try {
      localStorage.setItem("haveli_bookings", JSON.stringify(updated));
    } catch (err) {
      console.debug("Delete error:", err);
    }
  };

  useEffect(() => {
    if (lightboxImageIndex === null) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightboxImageIndex(null);
      if (e.key === "ArrowLeft") {
        setLightboxImageIndex((prev) =>
          prev !== null
            ? (prev - 1 + currentFolderPhotos.length) % currentFolderPhotos.length
            : null,
        );
      }
      if (e.key === "ArrowRight") {
        setLightboxImageIndex((prev) =>
          prev !== null ? (prev + 1) % currentFolderPhotos.length : null,
        );
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxImageIndex, currentFolderPhotos.length]);

  return (
    <div className="min-h-screen bg-background text-foreground antialiased">
      {/* NAV */}
      <header className="sticky top-0 z-40 border-b border-border bg-background/90 backdrop-blur-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="#top" className="flex items-baseline gap-2">
            <span className="font-display text-2xl font-semibold tracking-tight">
              Heritage Haveli
            </span>
          </a>
          <nav className="hidden items-center gap-8 text-sm text-muted-foreground md:flex">
            <a href="#about" className="transition-colors hover:text-primary">
              About Us
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
          <div className="flex items-center gap-3">
            <a
              href="#booking"
              className="rounded-full bg-primary px-5 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-accent"
            >
              Book a Slot
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex items-center justify-center rounded-lg p-2 text-muted-foreground transition-colors hover:bg-muted md:hidden"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="border-t border-border bg-background px-6 py-4 md:hidden">
            <nav className="flex flex-col gap-3 text-sm">
              <a
                href="#about"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1 text-muted-foreground transition-colors hover:text-primary"
              >
                About Us
              </a>
              <a
                href="#gallery"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1 text-muted-foreground transition-colors hover:text-primary"
              >
                Gallery
              </a>
              <a
                href="#types"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1 text-muted-foreground transition-colors hover:text-primary"
              >
                Shoot Types
              </a>
              <a
                href="#rates"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1 text-muted-foreground transition-colors hover:text-primary"
              >
                Rates
              </a>
            </nav>
          </div>
        )}
      </header>

      {/* HERO */}
      <section id="top" className="relative">
        <img
          src={coverImage}
          alt="Heritage Haveli authentic Mughal scalloped arches and courtyard facade on Bedian Road Lahore"
          className="h-[86vh] min-h-[560px] w-full object-cover"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/25 to-foreground/10" />

        {/* Cover Photo Controls */}
        <div className="absolute right-5 top-5 z-20 flex items-center gap-2">
          {coverImage !== haveliCover && (
            <span className="hidden items-center gap-1.5 rounded-full border border-emerald-500/30 bg-black/60 px-3 py-1 text-[11px] font-medium text-emerald-300 backdrop-blur-md sm:inline-flex">
              <Check className="size-3 text-emerald-400" />
              Custom Cover Live
            </span>
          )}
          <button
            type="button"
            onClick={() => setShowCoverModal(true)}
            className="flex items-center gap-2 rounded-full border border-white/20 bg-black/60 px-3.5 py-1.5 text-xs font-medium text-white shadow-lg backdrop-blur-md transition-all hover:border-white/40 hover:bg-black/80"
            title="Set exact cover image via Google Drive link or file upload"
          >
            <Camera className="size-3.5 text-primary" />
            <span>Update Cover Image</span>
          </button>
        </div>
        <div className="absolute inset-0 flex items-end">
          <div className="mx-auto w-full max-w-7xl px-6 pb-16">
            <h1 className="max-w-[22ch] animate-fade-up font-display text-5xl font-semibold leading-[1.02] tracking-tight text-balance text-background [animation-delay:200ms] md:text-7xl">
              Where Mughal grandeur meets <span className="italic text-terra-soft">your</span> next
              frame
            </h1>
            <p className="mt-5 max-w-[52ch] animate-fade-up text-base text-pretty text-background/85 [animation-delay:350ms]">
              A heritage haveli of courtyards, scalloped arches, and carved verandas — opened for
              pre-wedding shoots, fashion editorials, and music videos. The set is already dressed.
            </p>
            <div className="mt-8 flex animate-fade-up flex-wrap gap-4 [animation-delay:500ms]">
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
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 py-20 md:grid-cols-12 md:py-28">
          <div className="md:col-span-5">
            <Reveal delay={100}>
              <h2 className="mb-4 font-display text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
                Your one-stop spot for shoots!
              </h2>
              <p className="max-w-[52ch] text-base leading-relaxed text-pretty text-muted-foreground md:text-lg">
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
                src={verandaArches}
                alt="Mughal scalloped arch corridor of the haveli veranda lined with potted plants"
                className="h-full min-h-[360px] w-full rounded-2xl object-cover"
                loading="lazy"
                width={1500}
                height={2000}
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
        <div className="mx-auto max-w-7xl px-6 py-16 md:py-20">
          {openedFolderId === null ? (
            /* FOLDER HEADINGS OVERVIEW (ONLY THE 7 HEADINGS ON THE PAGE) */
            <>
              <Reveal className="mb-10">
                <h2 className="font-display text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
                  Explore Heritage Haveli
                </h2>
                <p className="mt-2 text-sm text-muted-foreground md:text-base">
                  Click any section below to open its dedicated photo folder and view all pictures.
                </p>
              </Reveal>

              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {galleryFolders.map((folder, idx) => {
                  const photosCount = getFolderPhotos(folder.id).length;
                  return (
                    <Reveal key={folder.id} delay={idx * 60}>
                      <div
                        onClick={() => {
                          setOpenedFolderId(folder.id);
                          const el = document.getElementById("gallery");
                          if (el) el.scrollIntoView({ behavior: "smooth" });
                        }}
                        onKeyDown={(e) => {
                          if (e.key === "Enter" || e.key === " ") {
                            e.preventDefault();
                            setOpenedFolderId(folder.id);
                          }
                        }}
                        role="button"
                        tabIndex={0}
                        className="group relative flex h-full cursor-pointer flex-col overflow-hidden rounded-2xl border border-border/80 bg-card ring-1 ring-foreground/5 transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/40 hover:shadow-xl"
                      >
                        {/* Cover Image */}
                        <div className="relative aspect-[16/10] w-full overflow-hidden bg-muted">
                          <img
                            src={folder.cover}
                            alt={folder.name}
                            referrerPolicy="no-referrer"
                            className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                            loading="lazy"
                            width={1024}
                            height={640}
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-black/10" />

                          {/* Top Tag */}
                          <div className="absolute left-4 top-4">
                            <span className="inline-flex items-center gap-1.5 rounded-full bg-background/90 px-3 py-1 text-xs font-medium text-foreground shadow-sm backdrop-blur-sm">
                              <Folder className="size-3.5 text-primary" />
                              Section
                            </span>
                          </div>

                          {/* Photos Count Badge */}
                          <div className="absolute right-4 top-4">
                            <span className="rounded-full bg-black/60 px-2.5 py-1 font-mono text-[11px] font-medium text-white backdrop-blur-sm">
                              {photosCount} {photosCount === 1 ? "Picture" : "Pictures"}
                            </span>
                          </div>

                          {/* Cover Overlay Info */}
                          <div className="absolute inset-x-0 bottom-0 p-5 text-white">
                            <h3 className="font-display text-2xl font-semibold tracking-tight text-white drop-shadow-sm transition-colors group-hover:text-terra-soft">
                              {folder.name}
                            </h3>
                          </div>
                        </div>

                        {/* Card Body */}
                        <div className="flex flex-1 flex-col justify-between p-5">
                          <p className="text-xs leading-relaxed text-muted-foreground sm:text-sm">
                            {folder.desc}
                          </p>

                          <div className="mt-5 flex items-center justify-between border-t border-border/60 pt-4">
                            <span className="text-xs font-medium text-primary transition-colors group-hover:text-accent">
                              Click to view images →
                            </span>
                            <span className="rounded-full bg-secondary px-2.5 py-1 text-[11px] text-muted-foreground">
                              Open folder
                            </span>
                          </div>
                        </div>
                      </div>
                    </Reveal>
                  );
                })}
              </div>
            </>
          ) : (
            /* OPENED FOLDER VIEW (WHEN USER CLICKS ON INDOOR OR ANY OTHER HEADING) */
            (() => {
              const activeFolder = galleryFolders.find((f) => f.id === openedFolderId);
              const photos = getFolderPhotos(openedFolderId);

              return (
                <div className="animate-fade-in">
                  {/* Top Bar Navigation */}
                  <div className="flex flex-col gap-4 border-b border-border/70 pb-6 sm:flex-row sm:items-center sm:justify-between">
                    <button
                      type="button"
                      onClick={() => setOpenedFolderId(null)}
                      className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-xs font-medium text-foreground shadow-sm transition-all hover:border-primary hover:bg-secondary sm:text-sm"
                    >
                      <ArrowLeft className="size-4" />
                      Back to All Sections
                    </button>

                    {/* Quick switcher between folders */}
                    <div className="flex flex-wrap items-center gap-1.5 overflow-x-auto pb-1 text-xs">
                      {galleryFolders.map((f) => (
                        <button
                          key={f.id}
                          type="button"
                          onClick={() => setOpenedFolderId(f.id)}
                          className={`rounded-lg px-2.5 py-1.5 transition-all ${
                            f.id === openedFolderId
                              ? "bg-primary font-medium text-primary-foreground"
                              : "bg-secondary/60 text-muted-foreground hover:bg-secondary hover:text-foreground"
                          }`}
                        >
                          {f.name}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Folder Title & Header */}
                  <div className="my-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
                    <div>
                      <div className="flex items-center gap-2.5">
                        <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1 font-mono text-xs font-semibold text-primary">
                          <FolderOpen className="size-3.5" />
                          Section: {activeFolder?.name}
                        </span>
                        <span className="font-mono text-xs text-muted-foreground">
                          {photos.length} {photos.length === 1 ? "picture" : "pictures"}
                        </span>
                      </div>
                      <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
                        {activeFolder?.name}
                      </h2>
                      <p className="mt-2 max-w-[65ch] text-sm text-muted-foreground md:text-base">
                        {activeFolder?.desc}
                      </p>
                    </div>

                    <div className="flex items-center gap-3">
                      <input
                        ref={uploadInputRef}
                        type="file"
                        multiple
                        accept="image/*"
                        className="hidden"
                        onChange={(e) => {
                          if (openedFolderId) {
                            handleUploadPhotos(openedFolderId, e.target.files);
                            e.target.value = "";
                          }
                        }}
                      />
                      <button
                        type="button"
                        onClick={() => uploadInputRef.current?.click()}
                        className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-xs font-medium text-primary-foreground shadow-sm transition-colors hover:bg-accent sm:text-sm"
                      >
                        <Upload className="size-4" />
                        Add Pictures to {activeFolder?.name}
                      </button>
                    </div>
                  </div>

                  {/* Pictures Grid inside the folder */}
                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                    {photos.map((item, idx) => (
                      <div
                        key={item.id}
                        className="group relative cursor-pointer overflow-hidden rounded-2xl border border-border/80 bg-card ring-1 ring-foreground/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                        onClick={() => setLightboxImageIndex(idx)}
                        role="button"
                        tabIndex={0}
                        onKeyDown={(e) => {
                          if (e.key === "Enter" || e.key === " ") {
                            e.preventDefault();
                            setLightboxImageIndex(idx);
                          }
                        }}
                      >
                        <div className="relative aspect-[3/4] w-full overflow-hidden bg-muted">
                          <img
                            src={item.src}
                            alt={item.alt}
                            referrerPolicy="no-referrer"
                            className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                            loading="lazy"
                            width={768}
                            height={1024}
                          />

                          {/* Expand Icon */}
                          <div className="absolute right-3.5 top-3.5 rounded-full bg-background/80 p-1.5 text-foreground opacity-0 backdrop-blur-sm transition-opacity group-hover:opacity-100">
                            <Maximize2 className="size-3.5" />
                          </div>
                        </div>
                      </div>
                    ))}

                    {/* Add More Photos Upload Card */}
                    <div
                      onClick={() => uploadInputRef.current?.click()}
                      className="group flex aspect-[3/4] cursor-pointer flex-col items-center justify-center rounded-2xl border-2 border-dashed border-border/80 bg-secondary/30 p-6 text-center transition-all hover:border-primary hover:bg-secondary/60"
                      role="button"
                      tabIndex={0}
                      onKeyDown={(e) => {
                        if (e.key === "Enter" || e.key === " ") {
                          e.preventDefault();
                          uploadInputRef.current?.click();
                        }
                      }}
                    >
                      <div className="rounded-full bg-primary/10 p-3 text-primary transition-transform group-hover:scale-110">
                        <Plus className="size-6" />
                      </div>
                      <h4 className="mt-3 font-display text-base font-semibold text-foreground">
                        Add Pictures to {activeFolder?.name}
                      </h4>
                      <p className="mt-1 text-xs text-muted-foreground">
                        Click to select images from your device
                      </p>
                    </div>
                  </div>
                </div>
              );
            })()
          )}

          {/* LIGHTBOX MODAL */}
          {lightboxImageIndex !== null && currentFolderPhotos[lightboxImageIndex] && (
            <div
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-md"
              onClick={() => setLightboxImageIndex(null)}
              role="dialog"
              aria-modal="true"
            >
              <div
                className="relative max-h-[92vh] w-auto max-w-[92vw] overflow-hidden rounded-2xl border border-border/80 bg-card shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Header bar */}
                <div className="flex items-center justify-between border-b border-border px-5 py-3.5">
                  <div className="flex items-center gap-2.5">
                    <span className="rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
                      {currentFolderPhotos[lightboxImageIndex].categoryLabel}
                    </span>
                    <span className="text-xs text-muted-foreground">
                      {lightboxImageIndex + 1} of {currentFolderPhotos.length}
                    </span>
                  </div>
                  <button
                    type="button"
                    onClick={() => setLightboxImageIndex(null)}
                    className="rounded-full p-1.5 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                    aria-label="Close dialog"
                  >
                    <X className="size-5" />
                  </button>
                </div>

                {/* Main image */}
                <div className="relative flex items-center justify-center">
                  <img
                    src={currentFolderPhotos[lightboxImageIndex].src}
                    alt={currentFolderPhotos[lightboxImageIndex].alt}
                    referrerPolicy="no-referrer"
                    className="max-h-[72vh] w-auto max-w-full object-contain"
                  />

                  {/* Previous */}
                  {currentFolderPhotos.length > 1 && (
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        setLightboxImageIndex((prev) =>
                          prev !== null
                            ? (prev - 1 + currentFolderPhotos.length) % currentFolderPhotos.length
                            : null,
                        );
                      }}
                      className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-background/80 p-2 text-foreground shadow-md backdrop-blur-sm transition-all hover:bg-background"
                      aria-label="Previous image"
                    >
                      <ChevronLeft className="size-5" />
                    </button>
                  )}

                  {/* Next */}
                  {currentFolderPhotos.length > 1 && (
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        setLightboxImageIndex((prev) =>
                          prev !== null ? (prev + 1) % currentFolderPhotos.length : null,
                        );
                      }}
                      className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-background/80 p-2 text-foreground shadow-md backdrop-blur-sm transition-all hover:bg-background"
                      aria-label="Next image"
                    >
                      <ChevronRight className="size-5" />
                    </button>
                  )}
                </div>

                {/* Footer details */}
                <div className="flex justify-center border-t border-border bg-card p-4">
                  <a
                    href="#booking"
                    onClick={() => setLightboxImageIndex(null)}
                    className="inline-flex shrink-0 items-center justify-center rounded-full bg-primary px-5 py-2.5 text-xs font-medium text-primary-foreground transition-colors hover:bg-accent sm:text-sm"
                  >
                    Book This Space
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* SHOOT TYPES */}
      <section id="types" className="border-b border-border bg-secondary/60">
        <div className="mx-auto max-w-7xl px-6 py-16 md:py-20">
          <Reveal className="mb-10">
            <h2 className="font-display text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
              Spaces for every kind of shoot
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
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
        <div className="mx-auto max-w-7xl px-6 py-16 md:py-20">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
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
            <h2 className="font-display text-4xl font-semibold leading-tight tracking-tight text-balance md:text-5xl">
              Reserve your dates
            </h2>
            <p className="mt-5 max-w-[40ch] text-sm leading-relaxed text-pretty text-accent-foreground/80">
              Tell us your shoot type and preferred dates. Our coordinator replies promptly on
              WhatsApp with availability and next steps.
            </p>
            <div className="mt-8 space-y-4 text-sm text-accent-foreground/85">
              <p className="flex items-center gap-3">
                <MapPin className="size-4 shrink-0 text-terra-soft" />
                <span>Heritage Haveli, Bedian Road, Lahore</span>
              </p>
              <a
                href="https://wa.me/923324565035"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 transition-colors hover:text-white"
              >
                <Phone className="size-4 shrink-0 text-terra-soft" />
                <span>WhatsApp: 0332 4565035</span>
              </a>
              <a
                href="mailto:heritage.haveliii@gmail.com"
                className="flex items-center gap-3 transition-colors hover:text-white"
              >
                <Mail className="size-4 shrink-0 text-terra-soft" />
                <span>heritage.haveliii@gmail.com</span>
              </a>
            </div>
          </div>
          <div className="md:col-span-8">
            <div className="rounded-3xl bg-background p-7 text-foreground ring-1 ring-foreground/5 md:p-9">
              {sent ? (
                <div className="flex flex-col items-center text-center">
                  <div className="flex size-14 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-600 ring-1 ring-emerald-500/20">
                    <CheckCircle2 className="size-8 stroke-[2.2]" />
                  </div>
                  <div className="mt-4 inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 px-3.5 py-1 text-xs font-semibold text-emerald-700">
                    <ShieldCheck className="size-3.5" />
                    Booking Reference #{lastBookingRef}
                  </div>
                  <h3 className="mt-3 font-display text-2xl font-semibold tracking-tight md:text-3xl">
                    Booking Request Received!
                  </h3>
                  <p className="mt-2.5 max-w-[54ch] text-sm text-muted-foreground">
                    Thank you, <strong className="text-foreground">{formData.name}</strong>! Your
                    shoot booking has been automatically registered and dispatched to Heritage
                    Haveli management (
                    <strong className="text-foreground">heritage.haveliii@gmail.com</strong>).
                  </p>
                  <div className="mt-4 rounded-xl border border-emerald-500/20 bg-emerald-500/5 p-4 text-xs text-emerald-800">
                    <p className="font-semibold text-emerald-900">
                      ✓ Details sent to heritage.haveliii@gmail.com
                    </p>
                    <p className="mt-1 text-emerald-700/90">
                      All your shoot requirements have been delivered to our management inbox. Our
                      reservations coordinator will review availability and contact you directly at{" "}
                      <strong className="text-emerald-900">{formData.phone}</strong> or via email to
                      confirm your booking.
                    </p>
                  </div>

                  {/* Booking Receipt Summary Box */}
                  <div className="mt-6 w-full rounded-2xl border border-border/80 bg-muted/30 p-4 text-left text-xs sm:p-5">
                    <div className="flex items-center justify-between border-b border-border/60 pb-3">
                      <span className="font-semibold uppercase tracking-wider text-muted-foreground">
                        Booking Summary
                      </span>
                      <span className="rounded-full bg-primary/10 px-2.5 py-0.5 font-mono text-[11px] font-medium text-primary">
                        Status: Received
                      </span>
                    </div>
                    <div className="mt-3 grid grid-cols-1 gap-2.5 text-foreground sm:grid-cols-2">
                      <div>
                        <span className="text-muted-foreground">Name: </span>
                        <strong>{formData.name}</strong>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Phone / WhatsApp: </span>
                        <strong>{formData.phone}</strong>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Email: </span>
                        <span>{formData.email}</span>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Shoot Type: </span>
                        <strong className="text-primary">{formData.shootType}</strong>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Preferred Date: </span>
                        <span>{formData.date || "To be discussed"}</span>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Duration: </span>
                        <span>{formData.duration}</span>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Crew Size: </span>
                        <span>{formData.crew || "Standard"}</span>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Generator: </span>
                        <span>{formData.generator}</span>
                      </div>
                    </div>
                    {formData.notes && (
                      <div className="mt-2.5 border-t border-border/60 pt-2 text-foreground">
                        <span className="text-muted-foreground">Shoot Notes: </span>
                        <span>{formData.notes}</span>
                      </div>
                    )}
                  </div>

                  <div className="mt-6 flex flex-col items-center gap-3 sm:flex-row">
                    <button
                      type="button"
                      onClick={() => {
                        setSent(false);
                        setFormData({
                          name: "",
                          email: "",
                          phone: "",
                          shootType: "Wedding couple shoot",
                          date: "",
                          duration: "1 Hour",
                          crew: "",
                          generator: "No (Natural light / haveli house power)",
                          notes: "",
                        });
                      }}
                      className="rounded-full bg-foreground px-6 py-2.5 text-xs font-semibold text-background transition-colors hover:bg-foreground/85"
                    >
                      Book Another Slot
                    </button>

                    <a
                      href="https://wa.me/923324565035"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs text-muted-foreground underline underline-offset-4 transition-colors hover:text-foreground"
                    >
                      <MessageSquare className="size-3.5 text-emerald-600" />
                      <span>Need instant reply? Message desk on WhatsApp (0332 4565035)</span>
                      <ExternalLink className="size-3 opacity-70" />
                    </a>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleBookingSubmit}>
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
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
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
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
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
                        placeholder="03XX XXXXXXX"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
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
                        value={formData.shootType}
                        onChange={(e) => setFormData({ ...formData, shootType: e.target.value })}
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
                        value={formData.date}
                        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
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
                        value={formData.duration}
                        onChange={(e) => setFormData({ ...formData, duration: e.target.value })}
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
                        value={formData.crew}
                        onChange={(e) => setFormData({ ...formData, crew: e.target.value })}
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
                        value={formData.generator}
                        onChange={(e) => setFormData({ ...formData, generator: e.target.value })}
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
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      className="w-full rounded-lg border border-input bg-background px-3 py-2.5 text-sm outline-none transition-colors focus:border-primary"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="mt-6 flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-medium text-primary-foreground shadow-md transition-colors hover:bg-accent disabled:opacity-75 sm:text-base"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="size-4 animate-spin" />
                        Confirming &amp; Registering your slot…
                      </>
                    ) : (
                      <>
                        <CalendarCheck className="size-4" />
                        Book a Slot
                      </>
                    )}
                  </button>
                  <p className="mt-2.5 text-center text-xs text-muted-foreground">
                    Instant automated submission • Direct dispatch to Heritage Haveli management
                    desk (0332 4565035).
                  </p>
                </form>
              )}
            </div>

            {/* Haveli Staff & Management Desk Toggle */}
            <div className="mt-6">
              <button
                type="button"
                onClick={() => setShowStaffDesk(!showStaffDesk)}
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-2 text-xs font-medium text-accent-foreground/80 backdrop-blur-sm transition-colors hover:bg-white/10 hover:text-white"
              >
                <Inbox className="size-3.5" />
                <span>Haveli Management Desk</span>
                <span className="rounded-full bg-primary px-2 py-0.5 font-mono text-[10px] font-semibold text-primary-foreground">
                  {bookings.length} {bookings.length === 1 ? "Inquiry" : "Inquiries"}
                </span>
                <span className="text-[10px] text-accent-foreground/60">
                  {showStaffDesk ? "▲ Hide" : "▼ View"}
                </span>
              </button>

              {showStaffDesk && (
                <div className="mt-3 rounded-2xl border border-white/15 bg-background/95 p-5 text-foreground shadow-xl backdrop-blur-md">
                  <div className="flex items-center justify-between border-b border-border pb-3">
                    <div>
                      <h4 className="font-display text-base font-semibold">
                        Incoming Shoot Inquiries ({bookings.length})
                      </h4>
                      <p className="text-xs text-muted-foreground">
                        Customer inquiries submitted through this website. Click to directly message
                        the client on WhatsApp!
                      </p>
                    </div>
                  </div>

                  {/* Cover Photo Manager */}
                  <div className="mt-3.5 flex flex-col justify-between gap-3 rounded-xl border border-primary/20 bg-primary/5 p-3.5 sm:flex-row sm:items-center">
                    <div className="flex items-center gap-3">
                      <div className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                        <Camera className="size-4" />
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-foreground">
                          Homepage Cover Photo
                        </p>
                        <p className="text-[11px] text-muted-foreground">
                          Set via Google Drive share link or direct photo upload (IMG_7430.jpeg)
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={() => setShowCoverModal(true)}
                        className="inline-flex items-center gap-1.5 rounded-lg bg-primary px-3 py-1.5 text-xs font-semibold text-primary-foreground shadow-sm transition-all hover:bg-accent"
                      >
                        <Camera className="size-3" />
                        Update Cover
                      </button>
                      {coverImage !== haveliCover && (
                        <button
                          type="button"
                          onClick={handleResetCoverImage}
                          className="rounded-lg border border-border bg-card px-2.5 py-1.5 text-xs text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                        >
                          Reset Default
                        </button>
                      )}
                    </div>
                  </div>

                  {bookings.length === 0 ? (
                    <div className="py-8 text-center text-xs text-muted-foreground">
                      No shoot bookings received yet. When visitors submit the booking form, they
                      will show up here instantly.
                    </div>
                  ) : (
                    <div className="mt-4 space-y-3">
                      {bookings.map((b) => (
                        <div
                          key={b.id}
                          className="rounded-xl border border-border bg-card p-4 text-xs transition-colors"
                        >
                          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-border/60 pb-2">
                            <div className="flex items-center gap-2">
                              <span className="font-mono font-bold text-primary">
                                #{b.reference}
                              </span>
                              <span className="text-muted-foreground">·</span>
                              <span className="font-semibold text-foreground">{b.name}</span>
                              <span className="text-muted-foreground">({b.createdAt})</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <a
                                href={`https://wa.me/${formatPhoneForWhatsApp(b.phone)}?text=${encodeURIComponent(
                                  `Hi ${b.name}, this is Heritage Haveli management regarding your shoot booking enquiry (#${b.reference}) for ${b.shootType} on ${b.date}. We'd love to confirm your slot!`,
                                )}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1.5 rounded-full bg-[#25D366] px-3 py-1 font-semibold text-white shadow-sm transition-all hover:bg-[#20ba59]"
                              >
                                <MessageSquare className="size-3" />
                                Chat with {b.name.split(" ")[0]} on WhatsApp
                              </a>
                              <button
                                type="button"
                                onClick={() => handleDeleteBooking(b.id)}
                                title="Delete inquiry"
                                className="rounded p-1 text-muted-foreground hover:bg-muted hover:text-destructive"
                              >
                                <Trash2 className="size-3.5" />
                              </button>
                            </div>
                          </div>
                          <div className="mt-2.5 grid grid-cols-2 gap-2 text-muted-foreground sm:grid-cols-4">
                            <div>
                              <span className="block text-[10px] uppercase tracking-wider text-muted-foreground/70">
                                Shoot Type
                              </span>
                              <strong className="text-foreground">{b.shootType}</strong>
                            </div>
                            <div>
                              <span className="block text-[10px] uppercase tracking-wider text-muted-foreground/70">
                                Preferred Date
                              </span>
                              <strong className="text-foreground">{b.date}</strong>
                            </div>
                            <div>
                              <span className="block text-[10px] uppercase tracking-wider text-muted-foreground/70">
                                Duration / Crew
                              </span>
                              <span className="text-foreground">
                                {b.duration} · {b.crew}
                              </span>
                            </div>
                            <div>
                              <span className="block text-[10px] uppercase tracking-wider text-muted-foreground/70">
                                Client Phone / Email
                              </span>
                              <span className="text-foreground">
                                {b.phone}
                                {b.email ? ` · ${b.email}` : ""}
                              </span>
                            </div>
                          </div>
                          {b.notes && (
                            <p className="mt-2 rounded bg-muted/50 p-2 text-[11px] text-foreground">
                              <span className="font-semibold text-muted-foreground">Notes: </span>
                              {b.notes}
                            </p>
                          )}
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Live Email Delivery Status */}
                  <div className="mt-5 border-t border-border pt-4">
                    <div className="flex flex-col justify-between gap-3 rounded-xl border border-emerald-500/25 bg-emerald-500/10 p-4 sm:flex-row sm:items-center">
                      <div className="flex items-start gap-3 sm:items-center">
                        <div className="flex size-9 shrink-0 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-700">
                          <Mail className="size-4" />
                        </div>
                        <div>
                          <p className="text-xs font-semibold text-foreground">
                            Automated Email Delivery Active:{" "}
                            <span className="font-mono font-bold text-primary">
                              heritage.haveliii@gmail.com
                            </span>
                          </p>
                          <p className="mt-0.5 text-[11px] text-muted-foreground">
                            Every client shoot booking submitted on this website is instantly
                            formatted and delivered straight to your inbox with all client details
                            and notes.
                          </p>
                        </div>
                      </div>
                      <span className="inline-flex items-center gap-1 self-start rounded-full bg-emerald-500/20 px-3 py-1 font-mono text-[10px] font-semibold text-emerald-800 sm:self-auto">
                        <Check className="size-3" /> Connected
                      </span>
                    </div>
                  </div>
                </div>
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
            <div className="mt-2 flex flex-wrap items-center gap-4 text-xs text-background/70">
              <a
                href="https://wa.me/923324565035"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-terra-soft"
              >
                WhatsApp: 0332 4565035
              </a>
              <span>·</span>
              <a
                href="mailto:heritage.haveliii@gmail.com"
                className="transition-colors hover:text-terra-soft"
              >
                heritage.haveliii@gmail.com
              </a>
            </div>
          </div>
          <nav className="flex flex-wrap gap-6 text-sm text-background/70">
            <a href="#about" className="transition-colors hover:text-terra-soft">
              About Us
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

      {/* Cover Photo Modal */}
      {showCoverModal && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-4 backdrop-blur-sm animate-fade-in"
          onClick={() => setShowCoverModal(false)}
        >
          <div
            className="relative w-full max-w-lg rounded-2xl border border-border bg-card p-6 shadow-2xl transition-all"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-start justify-between border-b border-border pb-4">
              <div className="flex items-center gap-3">
                <div className="flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Camera className="size-5" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold text-foreground">
                    Update Homepage Cover
                  </h3>
                  <p className="text-xs text-muted-foreground">
                    Use your exact original photograph for the cover section
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setShowCoverModal(false)}
                className="rounded-lg p-1.5 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              >
                <X className="size-4" />
              </button>
            </div>

            {/* Current preview */}
            <div className="mt-4 overflow-hidden rounded-xl border border-border bg-muted/40">
              <div className="relative h-36 w-full">
                <img
                  src={coverImage}
                  alt="Current cover preview"
                  className="size-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <span className="absolute bottom-2 left-3 text-[11px] font-medium text-white/90">
                  {coverImage === haveliCover
                    ? "Current: Default Haveli Facade"
                    : "Current: Custom Cover Active"}
                </span>
              </div>
            </div>

            {/* Options */}
            <div className="mt-5 space-y-4">
              {/* Option 1: Google Drive Link */}
              <div>
                <label className="flex items-center gap-1.5 text-xs font-semibold text-foreground">
                  <Link2 className="size-3.5 text-primary" />
                  <span>Option 1: Paste Google Drive Share Link</span>
                </label>
                <p className="mt-0.5 text-[11px] text-muted-foreground">
                  Make sure permissions are set to{" "}
                  <strong className="text-foreground">"Anyone with the link can view"</strong>.
                </p>
                <div className="mt-2 flex gap-2">
                  <input
                    type="url"
                    placeholder="https://drive.google.com/file/d/..."
                    value={coverUrlInput}
                    onChange={(e) => {
                      setCoverUrlInput(e.target.value);
                      setCoverUrlError("");
                    }}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        e.preventDefault();
                        handleApplyCoverUrl();
                      }
                    }}
                    className="flex-1 rounded-lg border border-input bg-background px-3 py-2 text-xs text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                  />
                  <button
                    type="button"
                    onClick={() => handleApplyCoverUrl()}
                    className="inline-flex items-center gap-1.5 rounded-lg bg-primary px-4 py-2 text-xs font-semibold text-primary-foreground shadow-sm transition-all hover:bg-accent"
                  >
                    Apply Link
                  </button>
                </div>
                {coverUrlError && (
                  <p className="mt-1 text-[11px] text-destructive">{coverUrlError}</p>
                )}
              </div>

              {/* Divider */}
              <div className="relative py-1 text-center">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-border" />
                </div>
                <span className="relative bg-card px-2 text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
                  or choose from device
                </span>
              </div>

              {/* Option 2: Direct File Upload */}
              <div>
                <label className="flex items-center gap-1.5 text-xs font-semibold text-foreground">
                  <Upload className="size-3.5 text-primary" />
                  <span>Option 2: Choose Original Image (IMG_7430.jpeg)</span>
                </label>
                <p className="mt-0.5 text-[11px] text-muted-foreground">
                  Select the image file directly from your phone or computer.
                </p>
                <div className="mt-2">
                  <label className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-xl border-2 border-dashed border-border py-4 text-xs font-medium text-foreground transition-colors hover:border-primary hover:bg-primary/5">
                    <Upload className="size-4 text-primary" />
                    <span>Click to browse and choose your exact image</span>
                    <input
                      type="file"
                      accept="image/*"
                      className="hidden"
                      onChange={handleCoverImageUpload}
                    />
                  </label>
                </div>
              </div>
            </div>

            {/* Confirmation indicator */}
            {isCoverUpdated && (
              <div className="mt-4 flex items-center gap-2 rounded-lg bg-emerald-500/10 p-2.5 text-xs text-emerald-800">
                <Check className="size-4 text-emerald-600" />
                <span className="font-medium">Cover photo successfully updated!</span>
              </div>
            )}

            {/* Footer actions */}
            <div className="mt-5 flex items-center justify-between border-t border-border pt-4">
              {coverImage !== haveliCover ? (
                <button
                  type="button"
                  onClick={handleResetCoverImage}
                  className="text-xs text-muted-foreground underline transition-colors hover:text-foreground"
                >
                  Reset to default haveli cover
                </button>
              ) : (
                <div />
              )}
              <button
                type="button"
                onClick={() => setShowCoverModal(false)}
                className="rounded-lg border border-border px-3.5 py-1.5 text-xs font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
