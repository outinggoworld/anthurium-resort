import type { Metadata } from "next";
import "@fontsource/playfair-display/500.css";
import "@fontsource/playfair-display/600.css";
import "@fontsource/playfair-display/700.css";
import "@fontsource/manrope/400.css";
import "@fontsource/manrope/500.css";
import "@fontsource/manrope/600.css";
import "@fontsource/manrope/700.css";
import "./globals.css";
import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";
import { WhatsAppButton } from "@/components/sections/WhatsAppButton";

export const metadata: Metadata = {
  title: "Anthurium Resort — Discover the Beauty of Serenity",
  description:
    "If you are looking for a perfect holiday experience with memories to cherish, you are at the right place. Activities, glamping pods, villas, weddings and corporate retreats at Anthurium Resort.",
  openGraph: {
    title: "Anthurium Resort — Discover the Beauty of Serenity",
    description:
      "A peaceful nature escape with adventure activities, glamping pods, villas, weddings and corporate events.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
