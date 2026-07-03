import { IMG } from "./images";

export type Design = {
  slug: string;
  name: string;
  material: string;
  category: string;
  occasion: string[];
  style: string[];
  image: string;
  gallery?: string[];
  story: string;
  details: { label: string; value: string }[];
  collectionSlug?: string;
};

export const DESIGNS: Design[] = [
  // ============================== GOLD ==============================
  {
    slug: "heritage-choker",
    name: "Aabhaa Heritage Choker",
    material: "22kt Gold with Kundan",
    category: "Necklaces",
    occasion: ["Wedding", "Reception"],
    style: ["Traditional", "Statement"],
    image: IMG.collection.bridal,
    gallery: [IMG.collection.bridal, IMG.design.necklaceMacro, IMG.hero],
    story:
      "A choker inspired by the temple corridors of Madurai — nine tiers of kundan setting, each stone hand-fixed by a single karigar over seventeen days.",
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
    story:
      "A pair of jhumkas that carry the weight of an evening — cupped domes strung with river pearls, lit at the center by an uncut ruby.",
    details: [
      { label: "Metal", value: "22kt yellow gold" },
      { label: "Accents", value: "River pearls, ruby-inspired stone" },
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
    gallery: [IMG.hero, IMG.design.necklaceMacro, IMG.collection.bridal],
    story:
      "A long haar with a floral pendant, meant to rest against the sternum — the piece your grand-daughter will one day fasten for her own beginning.",
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
    story:
      "The pendant you never take off. A single warm gold disc, brushed to catch light softly, on a chain sized to sit at the collarbone.",
    details: [
      { label: "Metal", value: "18kt yellow gold" },
      { label: "Finish", value: "Brushed matte" },
      { label: "Chain", value: "Adjustable rolo, 16–18 inches" },
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
    slug: "gold-classic-band",
    name: "Aurum Classic Gold Band",
    material: "22kt Gold",
    category: "Rings",
    occasion: ["Daily Wear", "Anniversary"],
    style: ["Minimal", "Traditional"],
    image: IMG.design.ringMacro,
    story: "A single warm curve of 22kt gold — the ring worn every day, a thousand quiet mornings deep.",
    details: [
      { label: "Metal", value: "22kt yellow gold" },
      { label: "Width", value: "3.5mm" },
      { label: "Finish", value: "High polish" },
    ],
  },
  {
    slug: "gold-heritage-bangle",
    name: "Meenakari Heritage Bangle",
    material: "22kt Gold with Meenakari",
    category: "Bangles",
    occasion: ["Wedding", "Festive"],
    style: ["Traditional", "Heritage"],
    image: IMG.design.bangles,
    story: "Hand-painted meenakari on the reverse — a private colour hidden beneath the wrist.",
    details: [
      { label: "Metal", value: "22kt gold" },
      { label: "Work", value: "Jaipur meenakari" },
    ],
  },
  {
    slug: "gold-mens-signet",
    name: "Rajvir Men's Signet",
    material: "22kt Gold with Onyx",
    category: "Rings",
    occasion: ["Daily Wear"],
    style: ["Men's", "Statement"],
    image: IMG.collection.mens,
    story: "A weighted signet, faced in black onyx — for hands that speak before words do.",
    details: [
      { label: "Metal", value: "22kt gold" },
      { label: "Face", value: "Black onyx" },
    ],
    collectionSlug: "mens-signature",
  },

  // ============================== TEMPLE ==============================
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

  // ============================== MODERN ==============================
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

  // ============================== MEN'S ==============================
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

  // ============================== SILVER ==============================
  {
    slug: "silver-bell-anklet",
    name: "Payal Silver Bell Anklet",
    material: "925 Sterling Silver",
    category: "Anklets",
    occasion: ["Festive", "Traditional", "Daily Wear"],
    style: ["Traditional", "Minimal"],
    image: IMG.design.silverAnklet,
    story: "Tiny bells strung on a soft silver chain — the sound of an old summer courtyard.",
    details: [
      { label: "Metal", value: "925 sterling silver" },
      { label: "Length", value: "9 to 10 inches, adjustable" },
      { label: "Finish", value: "High polish" },
    ],
  },
  {
    slug: "silver-solitaire-ring",
    name: "Chandni Silver Solitaire",
    material: "925 Silver with Zircon",
    category: "Rings",
    occasion: ["Engagement", "Daily Wear"],
    style: ["Minimal", "Solitaire"],
    image: IMG.design.platinumBands,
    story: "A single stone rising from a slim silver band — a soft, moonlit answer to the classic solitaire.",
    details: [
      { label: "Metal", value: "925 sterling silver, rhodium finished" },
      { label: "Centre", value: "Round zircon" },
    ],
  },
  {
    slug: "silver-classic-band",
    name: "Neel Silver Classic Band",
    material: "925 Sterling Silver",
    category: "Rings",
    occasion: ["Daily Wear", "Gifting"],
    style: ["Minimal", "Couple"],
    image: IMG.design.platinumBands,
    story: "A quiet silver band with a brushed centre channel — meant to weather with you.",
    details: [
      { label: "Metal", value: "925 silver" },
      { label: "Width", value: "4mm" },
    ],
  },
  {
    slug: "silver-hoop-earring",
    name: "Silver Whisper Hoops",
    material: "925 Silver",
    category: "Earrings",
    occasion: ["Daily Wear", "Office Wear"],
    style: ["Minimal", "Modern"],
    image: IMG.design.earrings,
    story: "A pair of thin polished hoops. Enough. Never too much.",
    details: [
      { label: "Metal", value: "925 silver" },
      { label: "Diameter", value: "22mm" },
    ],
  },
  {
    slug: "silver-krishna-idol",
    name: "Bal Krishna Silver Idol",
    material: "999 Silver",
    category: "Silver Idols",
    occasion: ["Gifting", "Traditional", "Festive"],
    style: ["Heritage"],
    image: IMG.material.silver,
    story: "A hand-cast Bal Krishna in 999 fine silver — for the mandir at home and for gifts that carry weight.",
    details: [
      { label: "Metal", value: "999 fine silver" },
      { label: "Height", value: "2 to 4 inches" },
    ],
  },
  {
    slug: "silver-stud-pearl",
    name: "Silver Pearl Studs",
    material: "925 Silver with Pearl",
    category: "Earrings",
    occasion: ["Office Wear", "Daily Wear", "Gifting"],
    style: ["Minimal"],
    image: IMG.design.earrings,
    story: "A single round pearl set in silver — the earring that goes with everything.",
    details: [
      { label: "Metal", value: "925 silver" },
      { label: "Pearl", value: "Freshwater, 6mm" },
    ],
  },

  // ============================== ROSE GOLD ==============================
  {
    slug: "rose-halo-pendant",
    name: "Blush Halo Pendant",
    material: "18kt Rose Gold with Diamond",
    category: "Pendants",
    occasion: ["Gifting", "Anniversary", "Daily Wear"],
    style: ["Modern", "Minimal"],
    image: IMG.design.rosePendant,
    gallery: [IMG.design.rosePendant, IMG.collection.modern, IMG.design.pendant],
    story: "A soft rose-gold halo holding a single round stone — the pendant that reads as a whisper, not a shout.",
    details: [
      { label: "Metal", value: "18kt rose gold" },
      { label: "Centre", value: "Round diamond-inspired stone" },
      { label: "Chain", value: "Adjustable, 16–18 inches" },
    ],
  },
  {
    slug: "rose-twist-band",
    name: "Rosa Twist Rose Gold Band",
    material: "18kt Rose Gold",
    category: "Rings",
    occasion: ["Anniversary", "Daily Wear"],
    style: ["Modern", "Couple"],
    image: IMG.design.rosePendant,
    story: "Two soft rose-gold strands cross once and stay — a quiet promise you can wear.",
    details: [
      { label: "Metal", value: "18kt rose gold" },
      { label: "Width", value: "3mm" },
    ],
  },
  {
    slug: "rose-hoop-earring",
    name: "Rose Gold Petite Hoops",
    material: "18kt Rose Gold",
    category: "Earrings",
    occasion: ["Daily Wear", "Office Wear"],
    style: ["Minimal"],
    image: IMG.design.earrings,
    story: "Warm, small, unbothered — hoops sized for constant wear.",
    details: [
      { label: "Metal", value: "18kt rose gold" },
      { label: "Diameter", value: "14mm" },
    ],
  },
  {
    slug: "rose-link-bracelet",
    name: "Rose Gold Link Bracelet",
    material: "18kt Rose Gold",
    category: "Bracelets",
    occasion: ["Gifting", "Daily Wear"],
    style: ["Modern", "Minimal"],
    image: IMG.design.rosePendant,
    story: "Fine oval links, catching light through a shirt cuff.",
    details: [
      { label: "Metal", value: "18kt rose gold" },
      { label: "Length", value: "6.5 to 7 inches" },
    ],
  },
  {
    slug: "rose-solitaire-stud",
    name: "Rose Gold Solitaire Studs",
    material: "18kt Rose Gold with Diamond",
    category: "Earrings",
    occasion: ["Anniversary", "Gifting", "Engagement"],
    style: ["Solitaire", "Minimal"],
    image: IMG.design.rosePendant,
    story: "A pair of round stones set in warm rose gold — the ear-fixture you'll forget you are wearing.",
    details: [
      { label: "Metal", value: "18kt rose gold" },
      { label: "Stones", value: "Round brilliant, diamond-inspired" },
    ],
  },

  // ============================== PLATINUM ==============================
  {
    slug: "twin-band",
    name: "Twin Promise Bands",
    material: "Platinum",
    category: "Rings",
    occasion: ["Engagement", "Anniversary"],
    style: ["Minimal", "Couple"],
    image: IMG.design.platinumBands,
    gallery: [IMG.design.platinumBands, IMG.collection.couple, IMG.design.ringMacro],
    story: "Two bands that share a single engraved line — visible only when placed side by side.",
    details: [
      { label: "Metal", value: "950 Platinum" },
      { label: "Finish", value: "High polish and brushed pair" },
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
    image: IMG.design.platinumBands,
    story: "A round solitaire-inspired stone crowned by a halo of pavé — timeless, forward-set, ready.",
    details: [
      { label: "Metal", value: "Platinum" },
      { label: "Centre", value: "Round solitaire-inspired stone" },
      { label: "Setting", value: "Six-prong halo" },
    ],
    collectionSlug: "couple-promise",
  },
  {
    slug: "platinum-eternity",
    name: "Anantam Platinum Eternity",
    material: "950 Platinum with Diamond",
    category: "Rings",
    occasion: ["Anniversary", "Engagement"],
    style: ["Solitaire"],
    image: IMG.design.platinumBands,
    story: "A full circle of pavé stones set in platinum — no beginning, no ending.",
    details: [
      { label: "Metal", value: "950 platinum" },
      { label: "Stones", value: "Micro pavé all around" },
    ],
  },
  {
    slug: "platinum-mens-band",
    name: "Vir Platinum Men's Band",
    material: "950 Platinum",
    category: "Rings",
    occasion: ["Daily Wear", "Anniversary"],
    style: ["Men's", "Minimal"],
    image: IMG.design.platinumBands,
    story: "A wide, weighted platinum band with a matte centre and mirror edges.",
    details: [
      { label: "Metal", value: "950 platinum" },
      { label: "Width", value: "6mm" },
      { label: "Finish", value: "Matte centre, polished edges" },
    ],
    collectionSlug: "mens-signature",
  },
];

export const findDesign = (slug: string) => DESIGNS.find((d) => d.slug === slug);
