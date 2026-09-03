import { Hero } from "@/components/sections/Hero";
import { IntroCards } from "@/components/sections/IntroCards";
import { Testimonials } from "@/components/sections/Testimonials";
import { FinalCta } from "@/components/sections/FinalCta";

export default function Home() {
  return (
    <>
      <Hero />
      <IntroCards />
      <Testimonials />
      <FinalCta />
    </>
  );
}
