// src/app/page.tsx
import React from "react";
import Hero from "@/components/Hero";
import EventsSection from "@/components/EventsSection";
import ImageCarousel from "@/components/ImageCarousel";
import RsvpSection from "@/components/RsvpSection";
import GiftSection from "@/components/GiftSection";
import DetailsSection from "@/components/DetailsSection";
// import SheSaidYes from "@/components/SheSaidYes"; // Removed import

export default function Home() {
  // Define image paths for the carousel
  const images = [
    "/images/IMG_0670.jpeg",
    "/images/IMG_0115 (2).jpeg",
    "/images/0c61b511-4456-4a99-b792-be148a334b56 (2).jpeg",
    "/images/IMG_2210 (3).jpeg",
    "/images/IMG_9924 (2).jpeg",
    "/images/IMG_8385 (3).jpeg",
    "/images/IMG_8339 (5).jpeg",
    "/images/IMG_2101 (3).jpeg",
    "/images/IMG_2661 (1).jpeg",
    "/images/IMG_3474.jpeg",
    "/images/IMG_1065 (4).jpeg",
    "/images/IMG_0977 (3).jpeg",
    "/images/IMG_0170 (1).jpeg",
    "/images/IMG_7651.jpeg",
    "/images/IMG_3947 (2).jpeg",
    "/images/IMG_3810 (2).jpeg",
    "/images/3840414f-bfce-4776-9e73-61e2494cab84 (3).jpeg",
  ];

  return (
    <main className="flex min-h-screen flex-col justify-between w-full">
      <Hero />
      <EventsSection />
      <ImageCarousel images={images} />
      <RsvpSection />
      <GiftSection />
      <DetailsSection />
      {/* <SheSaidYes /> */}{/* Removed component usage */}

      {/* Simple Footer */}

    </main>
  );
}

