"use client";

import React, { useEffect, useRef, useState } from "react";
import { GeminiEffect } from "@/components/gemini-effect";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function GeminiEffectWrapper() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [pathValues, setPathValues] = useState([0.0, 0.0, 0.0, 0.0, 0.0]);
  const animationRef = useRef<gsap.core.Timeline | null>(null);
  
  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    // Register ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);
    
    // Clear any existing ScrollTriggers to prevent duplicates
    ScrollTrigger.getAll().forEach(trigger => {
      if (trigger.vars.id?.toString()?.includes("gemini")) {
        trigger.kill();
      }
    });
    
    // Initialize path values to ensure they're hidden at start
    setPathValues([0.0, 0.0, 0.0, 0.0, 0.0]);
    
    // Create scroll animation
    const animation = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
        end: "bottom 20%",
        scrub: 0.8,
        id: "gemini-scroll",
        onUpdate: self => {
          const progress = self.progress;
          
          // Calculate path values with staggered timing
          // Each path needs more scroll progress to become fully visible
          const newValues = [
            Math.min(1, progress * 2),                    // First path appears quickly
            Math.min(1, Math.max(0, progress * 2 - 0.2)), // Second path starts at 10% scroll
            Math.min(1, Math.max(0, progress * 2 - 0.4)), // Third path starts at 20% scroll
            Math.min(1, Math.max(0, progress * 2 - 0.6)), // Fourth path starts at 30% scroll
            Math.min(1, Math.max(0, progress * 2 - 0.8))  // Fifth path starts at 40% scroll
          ];
          
          setPathValues(newValues);
        }
      }
    });
    
    // Additional animation for the title and content
    gsap.fromTo(
      "#gemini-title",
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          id: "gemini-title-reveal",
          toggleActions: "play none none reverse"
        }
      }
    );
    
    // Store the animation for cleanup
    animationRef.current = animation;
    
    // Force refresh ScrollTrigger
    ScrollTrigger.refresh();
    
    return () => {
      // Clean up animation and ScrollTrigger instances
      if (animationRef.current) {
        animationRef.current.kill();
      }
      ScrollTrigger.getAll().forEach(trigger => {
        if (trigger.vars.id?.toString()?.includes("gemini")) {
          trigger.kill();
        }
      });
    };
  }, []);

  return (
    <section 
      ref={sectionRef}
      id="gemini"
      className="relative min-h-[150vh] w-full overflow-visible z-50"
      style={{
        background: "linear-gradient(to bottom, #1e293b, #0f172a)",
        marginTop: "-1px", // Prevent any pixel gaps between sections
        paddingTop: "100px", 
        paddingBottom: "200px"
      }}
    >
      {/* Pinned content */}
      <div className="sticky top-0 h-screen w-full flex flex-col justify-center items-center overflow-visible">
        {/* Title and description */}
        <div id="gemini-title" className="text-center mb-8 px-4 z-10">
          <h2 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-300">
            Transformando Ideas en Realidad
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mt-6">
            Nuestras soluciones de inteligencia artificial te permiten alcanzar nuevas fronteras
          </p>
        </div>
        
        {/* Gemini effect container */}
        <div className="w-full mx-auto h-96 md:h-[500px] relative">
          <GeminiEffect pathValues={pathValues} />
        </div>
      </div>
    </section>
  );
}