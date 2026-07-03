// Centralized image references. Swap any URL here to update site-wide.
import hero from "@/assets/hero-necklace.jpg";
import materialGold from "@/assets/material-gold.jpg";
import materialSilver from "@/assets/material-silver.jpg";
import materialRose from "@/assets/material-rose-gold.jpg";
import materialPlatinum from "@/assets/material-platinum.jpg";
import bridalHero from "@/assets/bridal-hero.jpg";
import craftsmanship from "@/assets/craftsmanship.jpg";
import collectionBridal from "@/assets/collection-bridal.jpg";
import collectionEveryday from "@/assets/collection-everyday.jpg";
import collectionCouple from "@/assets/collection-couple.jpg";
import collectionTemple from "@/assets/collection-temple.jpg";
import collectionModern from "@/assets/collection-modern.jpg";
import collectionMens from "@/assets/collection-mens.jpg";
import designEarrings from "@/assets/design-earrings.jpg";
import designBangles from "@/assets/design-bangles.jpg";
import designMangalsutra from "@/assets/design-mangalsutra.jpg";
import designPendant from "@/assets/design-pendant.jpg";
import designNosepin from "@/assets/design-nosepin.jpg";

export const IMG = {
  hero,
  material: {
    gold: materialGold,
    silver: materialSilver,
    rose: materialRose,
    platinum: materialPlatinum,
  },
  bridalHero,
  craftsmanship,
  collection: {
    bridal: collectionBridal,
    everyday: collectionEveryday,
    couple: collectionCouple,
    temple: collectionTemple,
    modern: collectionModern,
    mens: collectionMens,
  },
  design: {
    earrings: designEarrings,
    ring: collectionCouple, // fallback
    bangles: designBangles,
    mangalsutra: designMangalsutra,
    pendant: designPendant,
    nosepin: designNosepin,
    necklace: hero,
  },
};
