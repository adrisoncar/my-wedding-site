// src/components/Hero.tsx
"use client";

import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Countdown from "@/components/Countdown"; // Import Countdown

const Hero = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]); 
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 1.05]);

  return (
    <section
      className="relative h-screen flex items-center justify-center overflow-hidden text-white bg-black"
    >
      {/* Parallax Background Image */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.div
          className="absolute inset-0 h-[130vh] -top-[15vh] md:h-[110vh] md:-top-[5vh]" 
          style={{ y, scale }}
        >
          <Image
            src="/images/0T6A7551 (1).jpeg"
            alt="Monika and Adrison"
            fill
            // Using objectFit: "cover" to fill the screen.
            // Mobile: object-[center_25%] (keeps it as is, which is perfect)
            // Desktop: trying object-[center_50%] to balance faces and ring
            className="object-cover object-[center_25%] md:object-[center_50%]" 
            quality={90} 
            priority
          />
          {/* Overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent"></div>
        </motion.div>
      </div>

      {/* Content - Adjusting margin-top for desktop */}
      <motion.div
        className="relative z-10 text-center mt-[-5vh] md:mt-[5vh] px-4" // Adjusted desktop margin slightly up from 10vh to 5vh
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.3, delay: 0.5, ease: "easeOut" }}
      >
        <h1 className="text-5xl md:text-6xl font-elegant font-medium mb-3 tracking-tight text-shadow-md">
          Monika & Adrison
        </h1>
        <h2 className="text-2xl md:text-4xl font-sans font-light mb-6 tracking-wide opacity-95 text-shadow-sm">
          Are Getting Married!
        </h2>
        <div className="text-md md:text-lg font-sans font-light opacity-85 text-shadow-sm">
          <span className="line-through mr-2 opacity-70">Save the Date</span> Save the Dates!
        </div>
      </motion.div>

      {/* Countdown Timer at the bottom */}
      <div className="absolute bottom-0 left-0 right-0 z-10 pb-6 md:pb-10">
        <Countdown isInHero={true} />
      </div>

      <style jsx global>{`
        .text-shadow-md {
          text-shadow: 0px 2px 4px rgba(0, 0, 0, 0.5);
        }
        .text-shadow-sm {
          text-shadow: 0px 1px 3px rgba(0, 0, 0, 0.4);
        }
        .font-elegant { font-family: serif; } /* Fallback */
      `}</style>
    </section>
  );
};

export default Hero;

