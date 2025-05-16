// src/components/DetailsSection.tsx
"use client";

import React from "react";
import { motion } from "framer-motion";

const DetailsSection = () => {
  return (
    // Added bg-indigo-50 for a soft pastel background
    <section className="py-12 md:py-20 bg-indigo-50 px-4 md:px-8 lg:px-16"> {/* Added padding directly */}
      <div className="max-w-4xl mx-auto"> {/* Kept max-width for content centering */}
        <motion.h2
          className="text-3xl md:text-4xl font-serif text-center mb-10 md:mb-16 text-indigo-800" // Adjusted text color
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Important Details
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {/* Get In Touch */}
          <motion.div
            className="bg-white p-6 rounded-lg shadow-md"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="text-2xl font-semibold mb-4 text-indigo-700">Get In Touch</h3>
            <p className="font-medium text-gray-800">Monika & Adrison</p>
            <p className="text-gray-600">Phone: <a href="tel:+447825069139" className="hover:text-indigo-600">+44 7825 069139</a> (Adrison)</p>
            <p className="text-gray-600">Email: <a href="mailto:adrison.cardozo6943@gmail.com" className="hover:text-indigo-600">adrison.cardozo6943@gmail.com</a> (Adrison)</p>
          </motion.div>

          {/* Venue Locations */}
          <motion.div
            className="bg-white p-6 rounded-lg shadow-md"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-semibold mb-4 text-indigo-700">Venue Locations</h3>
            <div className="space-y-2">
              <div>
                <p className="font-medium text-gray-800">Goa Events</p>
                <p className="text-gray-600">Lourdes Chapel & Perpetual Garden</p>
              </div>
              <div>
                <p className="font-medium text-gray-800">Delhi Events (Sahibabad)</p>
                <p className="text-gray-600">Radisson Country Inn</p>
              </div>
              <div>
                <p className="font-medium text-gray-800">Delhi Events (Karnal)</p>
                <p className="text-gray-600">Noor Mahal</p>
              </div>
            </div>
             {/* Transportation Note */}
            <div className="mt-6 border-t pt-4 border-indigo-100">
                 <h4 className="text-lg font-semibold mb-2 text-indigo-700">Transportation Note</h4>
                 <p className="text-gray-600 text-sm">For guests attending events in the Delhi area (Sahibabad/Karnal), private taxis can be arranged. Further details will follow.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DetailsSection;

