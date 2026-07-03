import { IMG } from "./images";

export type Design = {
  slug: string;
  name: string;
  material: string;
  category: string;
  occasion: string[];
  style: string[];
  image: string;
  story: string;
  details: { label: string; value: string }[];
  collectionSlug?: string;
};

export const DESIGNS: Design[] = [
  {
    slug: "heritage-choker",
    name: "Aabhaa Heritage Choker",
    material: "22kt Gold with Kundan",
    category: "Necklaces",
    occasion: ["Wedding", "Reception"],
    style: ["Traditional", "Statement"],
    image: IMG.collection.bridal,
    story: "A choker inspired by the temple corridors of Madurai — nine tiers of kundan setting, each stone hand-fixed by a single karigar over seventeen days.",
    details: [
      { label: "Metal", value: "22kt yellow gold" },
      { label: "Stone Setting", value: "Uncut kundan, closed setting" },
      { label: "Finish", value: "Antique matte" },
      { label: "Origin", value: "Handcrafted in Jaipur" },
    ],
    collectionSlug: "bridal-radiance",
  },
  {
    slug: "kundan-jhumka",
    name: "Rani Kundan Jhumka",
    material: "22kt Gold with Pearls",
    category: "Earrings",
    occasion: ["Wedding", "Festive"],
    style: ["Traditional"],
    image: IMG.design.earrings,
    story: "A pair of jhumkas that carry the weight of an evening — cupped domes strung with river pearls, lit at the center by an uncut ruby.",
    details: [
      { label: "Metal", value: "22kt yellow gold" },
      { label: "Accents", value: "River pearls, ruby inspired stone" },
      { label: "Finish", value: "Antique" },
      { label: "Weight", value: "Light to medium" },
    ],
    collectionSlug: "bridal-radiance",
  },
  {
    slug: "bridal-haar",
    name: "Vasanti Bridal Haar",
    material: "22kt Gold, Polki, Pearl",
    category: "Necklace Sets",
    occasion: ["Wedding"],
    style: ["Traditional", "Heritage"],
    image: IMG.hero,
    story: "A long haar with a floral pendant, meant to rest against the sternum — the piece your grand-daughter will one day fasten for her own beginning.",
    details: [
      { label: "Length", value: "Adjustable — 22 to 26 inches" },
      { label: "Stones", value: "Polki, Kundan, Pearl" },
      { label: "Origin", value: "Karigar studio, Jaipur" },
    ],
    collectionSlug: "bridal-radiance",
  },
  {
    slug: "luna-pendant",
    name: "Luna Everyday Pendant",
    material: "18kt Gold",
    category: "Pendants",
    occasion: ["Daily Wear", "Gifting"],
    style: ["Minimal"],
    image: IMG.design.pendant,
    story: "The pendant you never take off. A single warm gold disc, brushed to catch light softly, on a chain sized to sit at the collarbone.",
    details: [
      { label: "Metal", value: "18kt yellow gold" },
      { label: "Finish", value: "Brushed matte" },
      { label: "Chain", value: "Adjustable rolo, 16-18 inches" },
    ],
    collectionSlug: "everyday-glow",
  },
  {
    slug: "coin-necklace",
    name: "Everyday Coin Necklace",
    material: "18kt Gold",
    category: "Necklaces",
    occasion: ["Daily Wear", "Office Wear"],
    style: ["Minimal"],
    image: IMG.collection.everyday,
    story: "A weightless chain punctuated by a single gold coin — a modern take on the traditional kasu.",
    details: [
      { label: "Metal", value: "18kt gold" },
      { label: "Style", value: "Minimal, everyday" },
    ],
    collectionSlug: "everyday-glow",
  },
  {
    slug: "twin-band",
    name: "Twin Promise Bands",
    material: "Platinum",
    category: "Rings",
    occasion: ["Engagement", "Anniversary"],
    style: ["Minimal", "Couple"],
    image: IMG.collection.couple,
    story: "Two bands that share a single engraved line — visible only when placed side by side.",
    details: [
      { label: "Metal", value: "950 Platinum" },
      { label: "Finish", value: "High polish" },
      { label: "Sold as", value: "Matched pair" },
    ],
    collectionSlug: "couple-promise",
  },
  {
    slug: "solitaire-halo",
    name: "Amaya Solitaire Halo",
    material: "Platinum with Diamond",
    category: "Rings",
    occasion: ["Engagement"],
    style: ["Solitaire", "Statement"],
    image: IMG.collection.couple,
    story: "A round solitaire inspired stone crowned by a halo of pavé — timeless, forward-set, ready.",
    details: [
      { label: "Metal", value: "Platinum" },
      { label: "Center", value: "Round solitaire inspired stone" },
      { label: "Setting", value: "Six-prong halo" },
    ],
    collectionSlug: "couple-promise",
  },
  {
    slug: "goddess-haram",
    name: "Devi Goddess Haram",
    material: "Antique Gold",
    category: "Long Necklaces",
    occasion: ["Wedding", "Traditional"],
    style: ["Temple", "Heritage"],
    image: IMG.collection.temple,
    story: "A long temple haram with a central Lakshmi motif, framed by kasu coins and antique gold beads.",
    details: [
      { label: "Metal", value: "22kt antique gold" },
      { label: "Motif", value: "Lakshmi pendant" },
    ],
    collectionSlug: "temple-heritage",
  },
  {
    slug: "kasu-mala",
    name: "Kasu Mala",
    material: "Antique Gold",
    category: "Long Necklaces",
    occasion: ["Wedding", "Festive"],
    style: ["Temple"],
    image: IMG.collection.temple,
    story: "Rows of tiny gold coins, each stamped in the old workshops of Kanchipuram.",
    details: [
      { label: "Metal", value: "22kt antique gold" },
      { label: "Length", value: "24 inches" },
    ],
    collectionSlug: "temple-heritage",
  },
  {
    slug: "arc-pendant",
    name: "Arc Pendant",
    material: "18kt Gold",
    category: "Pendants",
    occasion: ["Daily Wear", "Office Wear"],
    style: ["Modern", "Minimal"],
    image: IMG.collection.modern,
    story: "A single asymmetric arc — mathematics as adornment.",
    details: [
      { label: "Metal", value: "18kt yellow gold" },
      { label: "Style", value: "Architectural" },
    ],
    collectionSlug: "modern-minimal",
  },
  {
    slug: "linear-cuff",
    name: "Linear Cuff",
    material: "18kt Gold",
    category: "Bracelets",
    occasion: ["Daily Wear", "Office Wear"],
    style: ["Modern"],
    image: IMG.collection.modern,
    story: "An open cuff drawn as a single line, meant to rest at the wrist without ceremony.",
    details: [
      { label: "Metal", value: "18kt gold" },
      { label: "Size", value: "Adjustable" },
    ],
    collectionSlug: "modern-minimal",
  },
  {
    slug: "cuban-chain",
    name: "Cuban Signature Chain",
    material: "22kt Gold",
    category: "Chains",
    occasion: ["Daily Wear", "Festive"],
    style: ["Men's", "Statement"],
    image: IMG.collection.mens,
    story: "A weighted cuban chain — the pause in a well-cut collar.",
    details: [
      { label: "Metal", value: "22kt gold" },
      { label: "Width", value: "6mm" },
    ],
    collectionSlug: "mens-signature",
  },
  {
    slug: "signet-ring",
    name: "Signet Ring",
    material: "Gold with Onyx",
    category: "Rings",
    occasion: ["Daily Wear"],
    style: ["Men's"],
    image: IMG.collection.mens,
    story: "A classic signet — flat oval face, ready for the monogram you choose.",
    details: [
      { label: "Metal", value: "18kt gold" },
      { label: "Face", value: "Black onyx" },
    ],
    collectionSlug: "mens-signature",
  },
];

export const findDesign = (slug: string) => DESIGNS.find((d) => d.slug === slug);
