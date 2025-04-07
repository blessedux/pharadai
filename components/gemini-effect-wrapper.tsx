"use client";

import React, { useEffect, useRef } from "react";
import { GeminiEffect } from "@/components/gemini-effect";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function GeminiEffectWrapper() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const pathsRef = useRef<HTMLDivElement>(null);
  const pathValues = useRef<number[]>([0.2, 0.15, 0.1, 0.05, 0]);
  
  useEffect(() => {
    // Register ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);
    
    // Create a timeline for the animation
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 20%", // Start when the top of the section reaches 20% from the top of viewport
        end: "bottom top", // End when the bottom of the section reaches the top of viewport
        scrub: 1, // Smooth scrubbing
        pin: true, // Pin the section during animation
        pinSpacing: false, // Don't add extra space for pinning
        markers: false,
        onUpdate: (self) => {
          // Update path values based on scroll progress
          const progress = self.progress;
          pathValues.current = [
            0.2 + progress * 1,
            0.15 + progress * 1.05,
            0.1 + progress * 1.1,
            0.05 + progress * 1.15,
            0 + progress * 1.2,
          ];
          
          // Force component to update
          if (pathsRef.current) {
            pathsRef.current.setAttribute('data-progress', progress.toString());
          }
        }
      }
    });

    return () => {
      // Clean up by killing the ScrollTrigger
      if (tl.scrollTrigger) {
        tl.scrollTrigger.kill();
      }
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      id="gemini"
      className="h-screen w-full bg-black relative z-10 overflow-hidden"
    >
      <div 
        ref={pathsRef}
        className="absolute bottom-0 left-0 w-full h-screen"
        data-progress="0"
      >
        <GeminiEffect
          pathValues={pathValues.current}
          title="Transformando Ideas en Realidad"
          description="Nuestras soluciones de inteligencia artificial te permiten alcanzar nuevas fronteras"
        />
      </div>
    </div>
  );
} 