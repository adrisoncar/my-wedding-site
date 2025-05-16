// src/components/EventsSection.tsx
"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const events = [
  {
    name: "Christian Wedding",
    date: "December 16th, 2025",
    ceremonyTime: "3:30 PM",
    ceremonyVenue: "Lourdes Chapel, Ambelim, Goa",
    receptionTime: "6:30 PM",
    receptionVenue: "Perpetual Garden, Majorda, Goa",
    bgColor: "bg-green-50", // Light sage green background for card
    textColor: "text-green-800",
    image: "/images/IMG_0018 (1).jpeg",
  },
  {
    name: "Engagement",
    date: "December 19th, 2025",
    time: "7:30 PM",
    venue: "Radisson Country Inn, Sahibabad",
    locationLabel: "Delhi Events",
    bgColor: "bg-gray-100", // Neutral sophisticated background for card
    textColor: "text-gray-800",
    image: "/images/IMG_0027.jpeg",
  },
  {
    name: "Haldi & Mehendi",
    date: "December 20th, 2025",
    time: "10:00 AM onwards",
    venue: "Radisson Country Inn, Sahibabad",
    locationLabel: "Delhi Events",
    bgColor: "bg-yellow-50", // Light yellow background for card
    textColor: "text-yellow-800",
    image: "/images/IMG_0026.jpeg",
  },
  {
    name: "Hindu Wedding",
    date: "December 21st, 2025",
    time: "2:30 PM",
    venue: "Noor Mahal, Karnal",
    locationLabel: "Delhi Events",
    bgColor: "bg-pink-50", // Light pastel pink background for card
    textColor: "text-pink-800",
    image: "/images/IMG_0021 (1).jpeg",
  },
];

const EventsSection = () => {
  return (
    // Changed section background from bg-white to bg-amber-50
    <section className="py-12 md:py-20 bg-amber-50 px-4 md:px-8 lg:px-16"> {/* Added padding directly to section */}
      <div> {/* Removed container mx-auto px-4 */}
        <motion.h2
          className="text-3xl md:text-4xl font-serif text-center mb-10 md:mb-16 text-gray-800"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Our Wedding Events 🎉
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {events.map((event, index) => (
            <motion.div
              key={index}
              // Card background color is set individually per event
              className={`rounded-lg shadow-lg overflow-hidden ${event.bgColor}`}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="relative h-48 md:h-64 w-full">
                <Image
                  src={event.image}
                  alt={event.name}
                  fill
                  style={{ objectFit: "cover" }}
                  quality={85}
                />
              </div>
              <div className={`p-6 ${event.textColor}`}>
                <h3 className="text-2xl font-semibold mb-2">{event.name}</h3>
                {event.locationLabel && <p className="text-sm font-medium text-gray-500 mb-1">({event.locationLabel})</p>}
                <p className="font-medium mb-1">{event.date}</p>
                {event.ceremonyTime && (
                  <p>Ceremony: {event.ceremonyTime} @ {event.ceremonyVenue}</p>
                )}
                {event.receptionTime && (
                  <p>Reception: {event.receptionTime} @ {event.receptionVenue}</p>
                )}
                {event.time && !event.ceremonyTime && (
                   <p>{event.time} @ {event.venue}</p>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventsSection;

