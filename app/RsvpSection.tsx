"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";

const RsvpSection = () => {
  // Corrected Google Form URL for embedding
  const googleFormEmbedUrl = "https://docs.google.com/forms/d/e/1FAIpQLSfTsz8ZSpZnwPnx4igbes25bHExK_hGDzmRpcrl5VjfQC38EA/viewform?embedded=true";

  return (
    <section id="rsvp" className="py-16 bg-slate-100 px-4 md:px-8 lg:px-16 w-full">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto"
      >
        <Card className="shadow-lg w-full overflow-hidden"> 
          <CardHeader className="text-center">
            <CardTitle className="text-3xl md:text-4xl font-serif text-gray-800">RSVP 💌</CardTitle>
            <CardDescription className="pt-2 text-gray-600">
              Please let us know if you can make it by filling out the form below.
            </CardDescription>
          </CardHeader>
          <CardContent className="px-0 sm:px-0 pb-0 md:px-2 md:pb-2">
            {/* Responsive iframe container - Adjusted paddingBottom for a more compact form */}
            <div 
              className="w-full mx-auto"
              style={{ 
                position: 'relative', 
                paddingBottom: '100%', /* Reduced from 120% to make it less tall */ 
                height: 0, 
                overflow: 'hidden',
                maxWidth: '100%',
                maxHeight: '70vh', /* Added maxHeight to prevent it from being overly tall on large screens */
              }}
            >
              <iframe
                src={googleFormEmbedUrl}
                style={{ 
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  border: '0',
                  minHeight: '500px', /* Reduced minHeight slightly */
                }}
                frameBorder="0"
                marginHeight={0}
                marginWidth={0}
                title="RSVP Form"
              >
                Loading…
              </iframe>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </section>
  );
};

export default RsvpSection;

