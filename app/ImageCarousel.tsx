// src/components/ImageCarousel.tsx
"use client";

import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Image from "next/image";

// Import Swiper styles (ensure these are loaded globally or here)
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// List all the image filenames provided by the user
const imageFiles = [
  "IMG_0670.jpeg",
  "IMG_0115 (2).jpeg",
  "0c61b511-4456-4a99-b792-be148a334b56 (2).jpeg",
  "IMG_2210 (3).jpeg",
  "IMG_9924 (2).jpeg",
  "IMG_8385 (3).jpeg",
  "IMG_8339 (5).jpeg",
  "IMG_2101 (3).jpeg",
  "IMG_2661 (1).jpeg",
  "IMG_3474.jpeg",
  "IMG_1065 (4).jpeg",
  "IMG_0977 (3).jpeg",
  "IMG_0170 (1).jpeg",
  "IMG_7651.jpeg",
  "IMG_3947 (2).jpeg",
  "IMG_3810 (2).jpeg",
  "3840414f-bfce-4776-9e73-61e2494cab84 (3).jpeg",
];

const ImageCarousel = () => {
  // Reinitialize Swiper on window resize might help some edge cases, but often not needed
  // useEffect(() => {
  //   const handleResize = () => {
  //     // Find swiper instance and update?
  //   };
  //   window.addEventListener("resize", handleResize);
  //   return () => window.removeEventListener("resize", handleResize);
  // }, []);

  return (
    <section className="py-12 md:py-20 bg-gray-50 px-4 md:px-8 lg:px-16"> {/* Added padding directly */}
      <div> {/* Removed container mx-auto px-4 */}
        {/* Title remains the same for now, emoji added in step 5 */}
        <h2 className="text-3xl md:text-4xl font-serif text-center mb-8 md:mb-12 text-gray-800">Our Moments</h2>
        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          loop={true}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true, // Good practice for usability
          }}
          pagination={{
            clickable: true,
            dynamicBullets: true, // Can look nicer on mobile
          }}
          navigation={true} // Consider hiding navigation on smallest screens if cluttered
          spaceBetween={15} // Reduced space for mobile
          slidesPerView={1} // Default for mobile
          breakpoints={{
            // when window width is >= 640px (sm)
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            // when window width is >= 1024px (lg)
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
          className="mySwiper w-full rounded-lg pb-8" // Added padding-bottom for pagination dots
          observer={true} // Re-init Swiper on component/parent changes
          observeParents={true} // Re-init Swiper on component/parent changes
        >
          {imageFiles.map((filename, index) => (
            <SwiperSlide key={index} className="overflow-hidden rounded-lg shadow-md bg-gray-200"> {/* Added placeholder bg */}
              {/* Ensure the container div has a defined aspect ratio or height */}
              <div className="relative w-full aspect-video md:aspect-[4/3] lg:aspect-video"> {/* Use aspect ratio for consistency */}
                <Image
                  src={`/images/${filename}`}
                  alt={`Slide ${index + 1}`}
                  fill // Use fill instead of layout="fill"
                  style={{ objectFit: "cover" }} // Use style objectFit
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" // Optimize image loading
                  quality={80} // Adjusted quality
                  className="block w-full h-full"
                  loading="lazy" // Lazy load images outside initial view
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default ImageCarousel;

