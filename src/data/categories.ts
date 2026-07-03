import { IMG } from "./images";

export type Category = {
  slug: string;
  title: string;
  description: string;
  image: string;
};

export const BROWSE_CATEGORIES: Category[] = [
  { slug: "rings", title: "Rings", description: "Solitaires, bands, cocktail", image: IMG.design.ring },
  { slug: "engagement-rings", title: "Engagement Rings", description: "The forever silhouette", image: IMG.collection.couple },
  { slug: "couple-rings", title: "Couple Rings", description: "For two", image: IMG.collection.couple },
  { slug: "necklaces", title: "Necklaces", description: "Everyday to statement", image: IMG.design.necklace },
  { slug: "necklace-sets", title: "Necklace Sets", description: "Complete the look", image: IMG.collection.bridal },
  { slug: "earrings", title: "Earrings", description: "Studs to jhumkas", image: IMG.design.earrings },
  { slug: "bangles", title: "Bangles", description: "Stacked traditions", image: IMG.design.bangles },
  { slug: "bracelets", title: "Bracelets", description: "Wrist stories", image: IMG.design.bangles },
  { slug: "chains", title: "Chains", description: "Weight & drape", image: IMG.collection.mens },
  { slug: "pendants", title: "Pendants", description: "Small statements", image: IMG.design.pendant },
  { slug: "mangalsutra", title: "Mangalsutra", description: "Sacred symbol", image: IMG.design.mangalsutra },
  { slug: "nose-pins", title: "Nose Pins", description: "Delicate accents", image: IMG.design.nosepin },
  { slug: "kadas", title: "Kadas", description: "Bold cuffs", image: IMG.design.bangles },
  { slug: "anklets", title: "Anklets", description: "Ankle music", image: IMG.design.bangles },
  { slug: "toe-rings", title: "Toe Rings", description: "Tradition anew", image: IMG.design.nosepin },
  { slug: "pendant-earring-sets", title: "Pendant & Earring Sets", description: "Perfectly matched", image: IMG.collection.everyday },
  { slug: "silver-idols", title: "Silver Idols", description: "Sacred gifts", image: IMG.material.silver },
];

export const MATERIALS = [
  { slug: "gold", title: "Gold", description: "The timeless warmth of 22kt and 18kt gold — worked into everything from filigree jhumkas to sculptural cuffs.", image: IMG.material.gold, accent: "var(--color-gold)" },
  { slug: "silver", title: "Silver", description: "Cool sterling. Softer than gold, sharper than moonlight — for pieces you rediscover often.", image: IMG.material.silver, accent: "var(--color-platinum)" },
  { slug: "rose-gold", title: "Rose Gold", description: "A warm blush of copper and gold. Romantic without excess.", image: IMG.material.rose, accent: "var(--color-rose)" },
  { slug: "platinum", title: "Platinum", description: "Dense, quiet, permanent. Platinum is the metal that keeps a secret.", image: IMG.material.platinum, accent: "var(--color-platinum)" },
];
