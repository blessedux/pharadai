"use client"

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { cn } from "@/lib/utils";

const logos = [
  { id: 1, src: "/logos/logo1.svg", alt: "React" },
  { id: 2, src: "/logos/logo2.svg", alt: "Python" },
  { id: 3, src: "/logos/logo3.svg", alt: "Django" },
  { id: 4, src: "/logos/logo4.svg", alt: "Tailwind CSS" },
  { id: 5, src: "/logos/logo5.svg", alt: "Next.js" },
  { id: 6, src: "/logos/logo6.svg", alt: "TypeScript" },
];

export default function PartnerLogoCarousel() {
  return (
    <section className="w-full py-8 bg-slate-900/90 backdrop-blur-sm border-y border-slate-800/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-4">
          <h3 className="text-lg md:text-xl font-medium text-gray-400">
            Tecnologías que utilizamos
          </h3>
        </div>
        
        <div className="w-full overflow-hidden">
          <motion.div
            className="flex gap-16 py-4"
            animate={{
              x: [0, -1500],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 40,
                ease: "linear",
              },
            }}
          >
            {/* First set of logos */}
            {logos.map((logo) => (
              <div key={logo.id} className="flex-shrink-0">
                <div 
                  className={cn(
                    "w-24 h-16 relative flex items-center justify-center",
                    "grayscale opacity-50 hover:grayscale-0 hover:opacity-100 hover:scale-110 transition-all duration-300"
                  )}
                >
                  <Image 
                    src={logo.src} 
                    alt={logo.alt}
                    width={50} 
                    height={50}
                    className="w-auto h-10 object-contain invert"
                  />
                </div>
              </div>
            ))}
            
            {/* Duplicate logos for seamless looping */}
            {logos.map((logo) => (
              <div key={`duplicate-${logo.id}`} className="flex-shrink-0">
                <div 
                  className={cn(
                    "w-24 h-16 relative flex items-center justify-center",
                    "grayscale opacity-50 hover:grayscale-0 hover:opacity-100 hover:scale-110 transition-all duration-300"
                  )}
                >
                  <Image 
                    src={logo.src} 
                    alt={logo.alt}
                    width={50} 
                    height={50}
                    className="w-auto h-10 object-contain invert"
                  />
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
} 