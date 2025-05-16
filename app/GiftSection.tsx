// src/components/GiftSection.tsx
"use client";

import React from "react";
import { motion } from "framer-motion";

const GiftSection = () => {
  return (
    // Added bg-teal-50 for a soft pastel background
    <section className="py-12 md:py-20 bg-teal-50 px-4 md:px-8 lg:px-16"> {/* Added padding directly */}
      <div className="max-w-3xl mx-auto text-center"> {/* Kept max-width for content centering */}
        <motion.h2
          className="text-3xl md:text-4xl font-serif text-center mb-6 text-teal-800" // Adjusted text color
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          A Note on Gifts 🎁
        </motion.h2>
        <motion.p
          className="text-lg text-gray-700 mb-8 leading-relaxed" // Adjusted text color
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Your presence at our wedding is honestly the best gift we could ask for! Seriously, just you being there means the world. But... if you happen to be feeling extra generous (or just want to help fund our questionable life choices and future cat sanctuary), a contribution towards our adventures would be incredibly appreciated. No pressure, though!
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <button
            disabled // Keep disabled as it's a placeholder
            className="inline-flex justify-center py-2 px-6 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-gray-400 cursor-not-allowed"
          >
            Contribute to the Adventure Fund (Coming Soon!)
          </button>
          <p className="text-xs text-gray-500 mt-2">(We promise we're working on the tech... or maybe just procrastinating.)</p>
        </motion.div>
      </div>
    </section>
  );
};

export default GiftSection;

