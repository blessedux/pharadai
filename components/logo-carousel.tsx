"use client"

import React, { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import { cn } from "@/lib/utils";
import { useMediaQuery } from "@/hooks/use-media-query";
import { throttle } from 'lodash';

const allLogos = [
  { id: 1, src: "/logos/react.svg", alt: "React" },
  { id: 2, src: "/logos/python.svg", alt: "Python" },
  { id: 3, src: "/logos/dj.svg", alt: "Django" },
  { id: 4, src: "/logos/tailwind.svg", alt: "Tailwind CSS" },
  { id: 5, src: "/logos/nextjs.svg", alt: "Next.js" },
  { id: 6, src: "/logos/typescript.svg", alt: "TypeScript" },
  { id: 7, src: "/logos/threejs.svg", alt: "Three.js" },
  { id: 8, src: "/logos/vercel.svg", alt: "Vercel" },
  { id: 9, src: "/logos/github.svg", alt: "GitHub" },
  { id: 10, src: "/logos/shadcnui.svg", alt: "shadcn/ui" },
  { id: 11, src: "/logos/openai.svg", alt: "OpenAI" },
  { id: 12, src: "/logos/eliza.svg", alt: "ELIZA" },
];

// Helper function to get a random logo not currently displayed
const getRandomAvailableLogo = (currentLogoIds: number[]): typeof allLogos[0] => {
  // Get all logos not currently displayed
  const availableLogos = allLogos.filter(l => !currentLogoIds.includes(l.id));
  
  // If we have available logos, return a random one
  if (availableLogos.length > 0) {
    return availableLogos[Math.floor(Math.random() * availableLogos.length)];
  }
  
  // Fallback (should never happen with our number of logos)
  return allLogos[Math.floor(Math.random() * allLogos.length)];
};

// Shuffle an array (Fisher-Yates algorithm)
const shuffleArray = <T,>(array: T[]): T[] => {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
};

export default function LogoCarousel() {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const logoCount = isMobile ? 3 : 6;
  const [mounted, setMounted] = useState(false);
  const [logoSlots, setLogoSlots] = useState<Array<{id: number, logo: typeof allLogos[0], isVisible: boolean}>>([]);
  const [scrollProgress, setScrollProgress] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  
  // Safe timeout reference
  const timeoutRefs = useRef<number[]>([]);
  
  // Calculate scroll progress relative to this section
  useEffect(() => {
    if (typeof window === 'undefined' || !mounted) return;
    
    const handleScroll = throttle(() => {
      if (!sectionRef.current) return;
      
      const { top, height, bottom } = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Calculate how far we've scrolled through the section
      // When top of section first enters viewport from bottom
      if (top < windowHeight && bottom > 0) {
        // First part of animation - fade in (0 to 0.5 progress)
        // When the section is entering viewport from bottom
        if (top > 0) {
          // Make fade-in happen more quickly (in less scroll distance)
          const entryProgress = (1 - (top / windowHeight)) * 2;
          setScrollProgress(Math.min(entryProgress * 0.5, 0.5)); // Cap at 0.5 for entry phase
        } 
        // Second part of animation - fade out (0.5 to 1 progress)
        // When the section is leaving viewport from top
        else if (bottom < windowHeight) {
          const exitProgress = 1 - (bottom / windowHeight);
          setScrollProgress(0.5 + (exitProgress * 0.5)); // 0.5 to 1 for exit phase
        }
        // Middle part - fully visible (0.5 progress)
        else {
          setScrollProgress(0.5);
        }
      } else {
        // Either not in view yet or already scrolled past
        setScrollProgress(top > windowHeight ? 0 : 1);
      }
    }, 50);
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initialize on mount
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [mounted]);
  
  // Calculate styles based on scroll progress
  const sectionStyle = {
    opacity: 1, // Force full opacity
    filter: "blur(0px)", // Remove blur
    transform: "scale(1)", // Normal scale
  };
  
  // Cleanup function for all timeouts
  const clearAllTimeouts = () => {
    timeoutRefs.current.forEach(timeoutId => window.clearTimeout(timeoutId));
    timeoutRefs.current = [];
  };

  // Initialize logo slots once on mount
  useEffect(() => {
    setMounted(true);
    
    // Create initial logo slots with unique logos
    // Shuffle the logos array first to get a random selection
    const shuffled = shuffleArray(allLogos).slice(0, logoCount);
    
    const initialSlots = Array.from({ length: logoCount }, (_, index) => {
      return {
        id: index,
        logo: shuffled[index],
        isVisible: false
      };
    });
    
    setLogoSlots(initialSlots);
    
    return () => clearAllTimeouts();
  }, [logoCount]);
  
  // Fade in logos with staggered timing
  useEffect(() => {
    if (!mounted || logoSlots.length === 0) return;
    
    // Initial fade in of all logos
    logoSlots.forEach((slot, index) => {
      const timeoutId = window.setTimeout(() => {
        setLogoSlots(prev => 
          prev.map(s => s.id === index ? { ...s, isVisible: true } : s)
        );
      }, index * 150);
      timeoutRefs.current.push(timeoutId);
    });
    
    // Setup ongoing animation after initial reveal
    const startTime = 1500; // Wait for initial reveal to complete
    
    const setupLogoChange = (slotIndex: number, delay: number) => {
      const timeoutId = window.setTimeout(() => {
        // Hide the current logo
        setLogoSlots(prev => 
          prev.map(s => s.id === slotIndex ? { ...s, isVisible: false } : s)
        );
        
        // Show new logo after fade out
        const fadeOutTimeoutId = window.setTimeout(() => {
          setLogoSlots(prev => {
            // Get all current logos in use to avoid duplicates
            const currentLogoIds = prev.map(s => s.logo.id);
            
            // Remove this slot's logo ID since it's being replaced
            const currentSlotLogoId = prev.find(s => s.id === slotIndex)?.logo.id;
            if (currentSlotLogoId) {
              const idx = currentLogoIds.indexOf(currentSlotLogoId);
              if (idx > -1) currentLogoIds.splice(idx, 1);
            }
            
            // Get a new random logo not currently displayed
            const newLogo = getRandomAvailableLogo(currentLogoIds);
              
            return prev.map(s => s.id === slotIndex 
              ? { ...s, logo: newLogo, isVisible: true } 
              : s
            );
          });
          
          // Schedule next change for this slot
          const nextDelay = 2000 + Math.random() * 2000; // 2-4 seconds
          setupLogoChange(slotIndex, nextDelay);
        }, 400); // Wait for fade out to complete
        
        timeoutRefs.current.push(fadeOutTimeoutId);
      }, delay);
      
      timeoutRefs.current.push(timeoutId);
    };
    
    // Start the ongoing changes with staggered timing
    logoSlots.forEach((slot, index) => {
      const initialDelay = startTime + index * 500 + Math.random() * 500;
      setupLogoChange(index, initialDelay);
    });
    
    return () => clearAllTimeouts();
  }, [mounted, logoSlots.length]);
  
  // If not mounted yet, render placeholder
  if (!mounted) {
    return (
      <section 
        ref={sectionRef}
        className="w-full sticky-section"
        style={{ 
          opacity: 1,
          position: "relative",
          height: "30vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: 0,
          marginBottom: 0,
          backgroundColor: "#020617"
        }}
      >
        <div className="container mx-auto px-4">
          <div className="flex justify-center pt-0 pb-0">
            {/* Empty placeholders */}
            <div className={cn(
              "grid gap-x-8 gap-y-8 md:gap-x-12 md:gap-y-12 place-items-center",
              isMobile ? "grid-cols-3" : "grid-cols-6"
            )}>
              {Array.from({ length: logoCount }).map((_, i) => (
                <div key={i} className="h-16 w-16 md:w-20" />
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }
  
  return (
    <div 
      ref={sectionRef} 
      className="relative w-full overflow-hidden" 
      style={{
        background: "transparent", // Ensure no background
        backdropFilter: "none"     // Disable any backdrop filter
      }}
    >
      <div 
        className="container mx-auto px-4 py-6 flex flex-col items-center justify-center"
        style={sectionStyle}
      >
        <h3 className="text-lg md:text-xl text-center font-medium text-white/70 mb-6">
          Tecnologías que usamos
        </h3>
        <div className="w-full max-w-4xl flex justify-around flex-wrap gap-y-8">
          {logoSlots.map((slot) => (
            <div
              key={slot.id}
              className={cn(
                "transition-all duration-500 ease-in-out flex items-center justify-center",
                "w-1/3 sm:w-1/4 md:w-1/6 px-3 opacity-0"
              )}
              style={{
                opacity: slot.isVisible ? 0.7 : 0,
                transform: `translateY(${slot.isVisible ? '0' : '20px'})`,
                filter: `blur(${slot.isVisible ? '0' : '10px'})`,
              }}
            >
              <Image
                src={slot.logo.src}
                alt={slot.logo.alt}
                width={80}
                height={40}
                className="w-auto h-8 md:h-10"
                style={{ maxWidth: "100%", height: "auto" }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 