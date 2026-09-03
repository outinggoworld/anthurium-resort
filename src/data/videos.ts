// Background video paths, one per themed section.
//
// These files don't exist yet — drop real Anthurium footage into
// /public/videos/ using these exact filenames and each section will pick
// it up automatically. Until then, every section falls back to its
// existing poster image / gradient, so nothing breaks.
//
// Recommended specs: mp4 (H.264), 1080p or less, 6-15s loop, ~3-6 Mbps,
// no audio needed (it's muted anyway).
export const videos = {
  hero: "/videos/hero.mp4",
  activities: "/videos/activities.mp4",
  accommodation: "/videos/accommodation.mp4",
  weddings: "/videos/weddings.mp4",
  corporate: "/videos/corporate.mp4",
  finalCta: "/videos/sunset.mp4",
};
