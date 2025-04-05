"use client"

import React, { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import { cn } from "@/lib/utils";
import { useMediaQuery } from "@/hooks/use-media-query";
import { throttle } from 'lodash';

const allLogos = [
  { id: 1, src: "/logos/logo1.svg", alt: "React" },
  { id: 2, src: "/logos/logo2.svg", alt: "Python" },
  { id: 3, src: "/logos/logo3.svg", alt: "Django" },
  { id: 4, src: "/logos/logo4.svg", alt: "Tailwind CSS" },
  { id: 5, src: "/logos/logo5.svg", alt: "Next.js" },
  { id: 6, src: "/logos/logo6.svg", alt: "TypeScript" },
  { id: 7, src: "/logos/threejs.svg", alt: "Three.js" },
  { id: 8, src: "/logos/vercel.svg", alt: "Vercel" },
  { id: 9, src: "/logos/github.svg", alt: "GitHub" },
  { id: 10, src: "/logos/shadcn.svg", alt: "shadcn/ui" },
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

export default function PartnerLogoCarousel() {
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
          const entryProgress = (1 - (top / windowHeight)) * 1.5;
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
    opacity: scrollProgress <= 0.5 
      ? scrollProgress * 2 // Fade in (0 to 1) during first half of progress (0 to 0.5)
      : 1 - ((scrollProgress - 0.5) * 2), // Fade out (1 to 0) during second half (0.5 to 1)
    filter: scrollProgress <= 0.5 
      ? `blur(${10 - scrollProgress * 20}px)` // Reduce blur as we scroll in
      : `blur(${(scrollProgress - 0.5) * 20}px)`, // Increase blur as we scroll out
    transform: scrollProgress <= 0.5 
      ? `scale(${0.9 + scrollProgress * 0.2})` // Scale up as we scroll in
      : `scale(${1.1 - scrollProgress * 0.2})`, // Scale down as we scroll out
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
        className="w-full py-8 md:py-10 bg-slate-950 sticky-section"
        style={{ 
          opacity: 0,
          position: "sticky",
          top: 0,
          height: "60vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <div className="container mx-auto px-4">
          <div className="flex justify-center py-4">
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
    <section 
      ref={sectionRef}
      className="w-full py-8 md:py-10 bg-slate-950 sticky-section"
      style={{
        ...sectionStyle,
        position: "sticky",
        top: 0,
        height: "60vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        willChange: "opacity, filter, transform"
      }}
    >
      <div className="container mx-auto px-4">
        <div className="w-full overflow-hidden flex justify-center py-4">
          <div className={cn(
            "grid gap-x-8 gap-y-10 md:gap-x-16 md:gap-y-16 place-items-center",
            isMobile ? "grid-cols-3" : "grid-cols-6"
          )}>
            {logoSlots.map((slot) => (
              <div 
                key={`slot-${slot.id}`} 
                className="relative h-16 w-16 md:h-20 md:w-20 flex items-center justify-center"
              >
                <div 
                  className={cn(
                    "absolute inset-0 flex items-center justify-center",
                    "transition-all duration-400 ease-in-out",
                    slot.isVisible 
                      ? "opacity-100 blur-0 scale-100 translate-y-0" 
                      : "opacity-0 blur-md scale-90 translate-y-2"
                  )}
                >
                  <div 
                    className={cn(
                      "w-full h-full relative flex items-center justify-center",
                      "grayscale opacity-60 hover:grayscale-0 hover:opacity-100 hover:scale-110",
                      "transition-all duration-500 ease-out"
                    )}
                  >
                    <Image 
                      src={slot.logo.src} 
                      alt={slot.logo.alt}
                      width={60} 
                      height={60}
                      className="w-auto h-12 md:h-14 object-contain drop-shadow-lg"
                      priority
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 