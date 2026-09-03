export type GalleryCategory = "Resort" | "Activities" | "Accommodation" | "Weddings" | "Events";

export type GalleryImage = {
  src: string;
  alt: string;
  category: GalleryCategory;
};

// Real Anthurium photography, supplied by the client.
export const galleryImages: GalleryImage[] = [
  { src: "/images/gallery/resort-1.jpg", alt: "Anthurium Resort pool grounds", category: "Resort" },
  { src: "/images/gallery/activities-1.jpg", alt: "Burma Bridge activity at Anthurium", category: "Activities" },
  { src: "/images/gallery/accommodation-1.jpg", alt: "Room interior at Anthurium", category: "Accommodation" },
  { src: "/images/gallery/weddings-1.jpg", alt: "Haldi ceremony at Anthurium", category: "Weddings" },
  { src: "/images/gallery/events-1.jpg", alt: "Banquet hall set up for an event", category: "Events" },
  { src: "/images/gallery/resort-2.jpg", alt: "Anthurium Resort entrance with hanging umbrellas", category: "Resort" },
];

// [CONTENT REQUIRED] — replace with real, verified guest reviews only. Do not fabricate.
export const testimonials: { quote: string; name: string; source?: string }[] = [];
