"use client";

/**
 * Full-bleed looping video background with an image/gradient fallback.
 *
 * Usage: drop a real video file at the given `src` path (e.g.
 * /public/videos/hero.mp4) and it plays automatically, muted and looped.
 * Until that file exists, the `poster` image (or the gradient behind it)
 * shows instead — so nothing breaks if the video hasn't been added yet.
 *
 * Keep source videos short (6–15s), compressed (H.264 mp4, ~3–6 Mbps),
 * and under ~1080p — long/heavy files will hurt load time and defeat the
 * "premium but fast" goal from the spec.
 */
export function SectionVideoBackground({
  src,
  poster,
  overlayClassName,
  className,
}: {
  /** Path to the mp4, e.g. "/videos/activities.mp4" */
  src?: string;
  /** Fallback/poster image shown before the video loads or if it's missing */
  poster?: string;
  /** Optional gradient/tint overlay classes, e.g. "bg-gradient-to-t from-forest/85 to-transparent" */
  overlayClassName?: string;
  className?: string;
}) {
  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className ?? ""}`} aria-hidden="true">
      {src ? (
        <video
          className="h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          poster={poster}
        >
          <source src={src} type="video/mp4" />
        </video>
      ) : poster ? (
        <div
          className="h-full w-full bg-cover bg-center"
          style={{ backgroundImage: `url('${poster}')` }}
        />
      ) : null}
      {overlayClassName && <div className={`absolute inset-0 ${overlayClassName}`} />}
    </div>
  );
}
