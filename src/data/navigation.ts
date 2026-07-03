import { IMG } from "./images";

export type MegaMenuItem = {
  label: string;
  href: string;
};

export type MegaMenuSection = {
  title: string;
  items: MegaMenuItem[];
};

export type MegaMenuFeature = {
  title: string;
  description: string;
  image: string;
  href: string;
};

export type MegaMenu = {
  key: string;
  label: string;
  href: string;
  sections: MegaMenuSection[];
  feature: MegaMenuFeature;
};

export const MEGA_MENUS: MegaMenu[] = [
  {
    key: "jewellery",
    label: "Jewellery",
    href: "/category/jewellery",
    sections: [
      {
        title: "Rings",
        items: [
          { label: "Engagement Rings", href: "/category/rings/engagement" },
          { label: "Couple Rings", href: "/category/rings/couple" },
          { label: "Cocktail Rings", href: "/category/rings/cocktail" },
          { label: "Men's Rings", href: "/category/rings/mens" },
          { label: "Daily Wear", href: "/category/rings/daily" },
        ],
      },
      {
        title: "Neckwear",
        items: [
          { label: "Necklaces", href: "/category/neckwear/necklaces" },
          { label: "Necklace Sets", href: "/category/neckwear/sets" },
          { label: "Chokers", href: "/category/neckwear/chokers" },
          { label: "Long Haram", href: "/category/neckwear/haram" },
          { label: "Mangalsutra", href: "/category/neckwear/mangalsutra" },
        ],
      },
      {
        title: "Earrings & More",
        items: [
          { label: "Jhumkas", href: "/category/earrings/jhumkas" },
          { label: "Studs", href: "/category/earrings/studs" },
          { label: "Bangles", href: "/category/bangles" },
          { label: "Nose Pins", href: "/category/nosepins" },
          { label: "Anklets", href: "/category/anklets" },
        ],
      },
    ],
    feature: {
      title: "Bridal Radiance",
      description: "Statement necklaces crafted for once-in-a-lifetime moments.",
      image: IMG.collection.bridal,
      href: "/collections/bridal-radiance",
    },
  },
  {
    key: "materials",
    label: "Materials",
    href: "/category/materials",
    sections: [
      {
        title: "Metals",
        items: [
          { label: "Gold", href: "/category/material/gold" },
          { label: "Silver", href: "/category/material/silver" },
          { label: "Rose Gold", href: "/category/material/rose-gold" },
          { label: "Platinum", href: "/category/material/platinum" },
        ],
      },
      {
        title: "Stones",
        items: [
          { label: "Diamond Inspired", href: "/category/material/diamond" },
          { label: "Gemstone Inspired", href: "/category/material/gemstone" },
          { label: "Pearl Accents", href: "/category/material/pearl" },
          { label: "Kundan & Polki", href: "/category/material/kundan" },
        ],
      },
      {
        title: "Finish",
        items: [
          { label: "Antique", href: "/category/finish/antique" },
          { label: "High Polish", href: "/category/finish/polish" },
          { label: "Matte", href: "/category/finish/matte" },
          { label: "Textured", href: "/category/finish/textured" },
        ],
      },
    ],
    feature: {
      title: "Gold, unhurried",
      description: "A study in warmth — pieces to hold and be held.",
      image: IMG.material.gold,
      href: "/category/material/gold",
    },
  },
  {
    key: "occasions",
    label: "Occasions",
    href: "/category/occasions",
    sections: [
      {
        title: "Weddings",
        items: [
          { label: "Bridal", href: "/bridal" },
          { label: "Engagement", href: "/category/occasion/engagement" },
          { label: "Reception", href: "/category/occasion/reception" },
          { label: "Mehendi", href: "/category/occasion/mehendi" },
          { label: "Haldi", href: "/category/occasion/haldi" },
        ],
      },
      {
        title: "Celebrations",
        items: [
          { label: "Festive", href: "/category/occasion/festive" },
          { label: "Anniversary", href: "/category/occasion/anniversary" },
          { label: "Birthday", href: "/category/occasion/birthday" },
          { label: "Gifting", href: "/category/occasion/gifting" },
        ],
      },
      {
        title: "Everyday",
        items: [
          { label: "Daily Wear", href: "/category/occasion/daily" },
          { label: "Office Wear", href: "/category/occasion/office" },
          { label: "Traditional", href: "/category/occasion/traditional" },
        ],
      },
    ],
    feature: {
      title: "The Bridal Chapters",
      description: "A journey from engagement through anniversary.",
      image: IMG.bridalHero,
      href: "/bridal",
    },
  },
  {
    key: "collections",
    label: "Collections",
    href: "/collections",
    sections: [
      {
        title: "Editorial",
        items: [
          { label: "Bridal Radiance", href: "/collections/bridal-radiance" },
          { label: "Everyday Glow", href: "/collections/everyday-glow" },
          { label: "Temple Heritage", href: "/collections/temple-heritage" },
          { label: "Modern Minimal", href: "/collections/modern-minimal" },
        ],
      },
      {
        title: "For Two",
        items: [
          { label: "Couple Promise Rings", href: "/collections/couple-promise" },
          { label: "Anniversary Edit", href: "/collections/anniversary" },
        ],
      },
      {
        title: "By Audience",
        items: [
          { label: "Men's Signature", href: "/collections/mens-signature" },
          { label: "Kids & Teens", href: "/collections/kids" },
          { label: "Festive Gold Edit", href: "/collections/festive-gold" },
        ],
      },
    ],
    feature: {
      title: "Modern Minimal",
      description: "Everyday geometry, sculpted in gold.",
      image: IMG.collection.modern,
      href: "/collections/modern-minimal",
    },
  },
];

export const TOP_LINKS = [
  { label: "Bridal", href: "/bridal" },
  { label: "Craftsmanship", href: "/craftsmanship" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];
