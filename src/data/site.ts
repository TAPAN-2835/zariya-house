// Centralized site configuration. Update once, reflects everywhere.
export const SITE = {
  name: "Zariya House",
  tagline: "Designs to Adorn Every Story",
  url: "https://zariyahouse.example",
  email: "hello@zariyahouse.example",
  phoneDisplay: "+91 90000 00000",
  phoneE164: "+919000000000",
  whatsappNumber: "919000000000", // no + or spaces, wa.me format
  address: {
    line1: "The Zariya Studio",
    line2: "By appointment only",
    city: "Mumbai",
    country: "India",
  },
  social: {
    instagram: "https://instagram.com/zariyahouse",
    facebook: "https://facebook.com/zariyahouse",
    youtube: "https://youtube.com/@zariyahouse",
    pinterest: "https://pinterest.com/zariyahouse",
  },
};

export const waLink = (message?: string) =>
  `https://wa.me/${SITE.whatsappNumber}${
    message ? `?text=${encodeURIComponent(message)}` : ""
  }`;
