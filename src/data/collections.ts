import { IMG } from "./images";

export type Collection = {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  story: string;
  materials: string[];
  occasions: string[];
  image: string;
  designs: string[]; // design slugs
};

export const COLLECTIONS: Collection[] = [
  {
    slug: "bridal-radiance",
    title: "Bridal Radiance",
    tagline: "Statement pieces for the moment you become a memory.",
    description: "A curation of bridal necklaces, jhumkas and bangles conceived for the once-in-a-lifetime chapter.",
    story: "Bridal Radiance began in the notebooks of our senior karigars — sketches of temple silhouettes softened by contemporary line. Every piece is thought of as an heirloom, weighted with intention, ready to travel through generations.",
    materials: ["Gold", "Kundan", "Pearl"],
    occasions: ["Wedding", "Reception", "Engagement"],
    image: IMG.collection.bridal,
    designs: ["heritage-choker", "kundan-jhumka", "bridal-haar"],
  },
  {
    slug: "everyday-glow",
    title: "Everyday Glow",
    tagline: "Quiet luxury for the ordinary miracles.",
    description: "Delicate chains, minimal pendants and stackable rings designed to layer with your everyday.",
    story: "The unshowy pieces — a pendant that catches the morning window, a ring that slips beneath a shirt cuff. Everyday Glow lives at the intersection of comfort and craft.",
    materials: ["Gold", "Rose Gold"],
    occasions: ["Daily Wear", "Office Wear", "Gifting"],
    image: IMG.collection.everyday,
    designs: ["luna-pendant", "coin-necklace"],
  },
  {
    slug: "couple-promise",
    title: "Couple Promise Rings",
    tagline: "Two rings, one story.",
    description: "Matched bands in gold, rose gold and platinum — for the vow before the ceremony.",
    story: "Promise is the word we return to. Couple Promise pairs are designed as intimate objects — a subtle groove, a shared engraving line, a language only two people read.",
    materials: ["Platinum", "Rose Gold", "Gold"],
    occasions: ["Engagement", "Anniversary"],
    image: IMG.collection.couple,
    designs: ["twin-band", "solitaire-halo"],
  },
  {
    slug: "temple-heritage",
    title: "Temple Heritage",
    tagline: "Antique motifs, awake in the present.",
    description: "Southern temple silhouettes — goddess pendants, kasu haram, jadau jhumkas — reimagined for today.",
    story: "Drawn from Chola bronzes and Vijayanagara reliefs, Temple Heritage is our love letter to a tradition that refuses to age.",
    materials: ["Antique Gold", "Ruby Inspired", "Pearl"],
    occasions: ["Wedding", "Traditional", "Festive"],
    image: IMG.collection.temple,
    designs: ["goddess-haram", "kasu-mala"],
  },
  {
    slug: "modern-minimal",
    title: "Modern Minimal",
    tagline: "Geometry, quiet and gold.",
    description: "Architectural pendants and clean lines for the modern wardrobe.",
    story: "A dialogue between our karigars and a Bauhaus vocabulary. Modern Minimal is confident enough to whisper.",
    materials: ["Gold", "Platinum"],
    occasions: ["Daily Wear", "Office Wear"],
    image: IMG.collection.modern,
    designs: ["arc-pendant", "linear-cuff"],
  },
  {
    slug: "mens-signature",
    title: "Men's Signature",
    tagline: "Weight, texture, restraint.",
    description: "Cuban chains, sculpted bands and signet rings — refined masculinity in gold and platinum.",
    story: "For the man who edits rather than accumulates. Men's Signature holds three principles: weight in hand, texture on the eye, restraint in silhouette.",
    materials: ["Gold", "Platinum"],
    occasions: ["Daily Wear", "Festive"],
    image: IMG.collection.mens,
    designs: ["cuban-chain", "signet-ring"],
  },
];
