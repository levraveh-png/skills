import { Seo } from "@/components/seo/Seo";
import { localBusinessSchema } from "@/lib/structured-data";
import { business } from "@/data/business";

import { Hero } from "@/components/home/Hero";
import { TrustBar } from "@/components/TrustBar";
import { ServicesOverview } from "@/components/home/ServicesOverview";
import { FeaturedProjects } from "@/components/home/FeaturedProjects";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { ProcessSteps } from "@/components/home/ProcessSteps";
import { GoodToKnow } from "@/components/home/GoodToKnow";
import { ReviewsSection } from "@/components/ReviewsSection";
import { ServiceArea } from "@/components/home/ServiceArea";
import { EstimateCta } from "@/components/EstimateCta";

export default function Home() {
  return (
    <>
      <Seo
        title="24-Hour Glass Repair & Board-Up in Los Angeles"
        description={`${business.name} provides 24-hour board-up, glass replacement, storefront glass, and frameless shower installation across ${business.serviceArea.region}. Call ${business.phone.display}.`}
        path="/"
        image="/images/glass-hero.jpg"
        jsonLd={localBusinessSchema()}
      />
      <Hero />
      <TrustBar />
      <ServicesOverview />
      <FeaturedProjects />
      <WhyChooseUs />
      <ProcessSteps />
      <GoodToKnow />
      <ReviewsSection />
      <ServiceArea />
      <EstimateCta
        eyebrow="Free estimate"
        title="Broken glass or storefront damage? Let's fix it."
        description="Reach out any time — day or night. We'll confirm what's needed and get you scheduled or dispatched."
      />
    </>
  );
}
