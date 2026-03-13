import { HeroSection } from "@/app/components/hero";
import { ServicesPreviewSection } from "@/app/sections/services-preview";
import { WhyChooseSection } from "@/app/sections/why-choose";
import { ProcessSection } from "@/app/sections/process";
import { GalleryPreviewSection } from "@/app/sections/gallery-preview";
import { TestimonialsSection } from "@/app/sections/testimonials";
import { AboutPreviewSection } from "@/app/sections/about-preview";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ServicesPreviewSection />
      <WhyChooseSection />
      <ProcessSection />
      <GalleryPreviewSection />
      <TestimonialsSection />
      <AboutPreviewSection />
    </>
  );
}

