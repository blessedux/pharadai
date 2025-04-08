"use client"

import React, { useEffect, useRef } from "react"
import gsap from "gsap"
import { LampContainer } from "@/components/ui/lamp"

export default function Hero() {
  const titleRef = useRef(null);
  const descriptionRef = useRef(null);
  
  useEffect(() => {
    // Create animation timeline with improved settings
    const tl = gsap.timeline({ defaults: { ease: "power2.out" } });
    
    // Reset initial state to ensure animation plays
    gsap.set([titleRef.current, descriptionRef.current], { 
      opacity: 0, 
      y: 100 
    });
    
    // Animate title and description with more pronounced effect
    tl.to(
      titleRef.current,
      { 
        opacity: 1, 
        y: 0, 
        duration: 1, 
        delay: 0.3,
        ease: "back.out(1.2)" 
      }
    ).to(
      descriptionRef.current,
      { 
        opacity: 1, 
        y: 0, 
        duration: 0.8,
        ease: "back.out(1)" 
      },
      "-=0.5" // Slightly overlap with title animation
    );
    
    return () => {
      tl.kill(); // Clean up animation
    };
  }, []);
  
  return (
    <div id="home" className="relative w-full h-full flex items-center justify-center overflow-hidden">
      {/* Remove local background overlay to allow parent section background to show through */}
      <LampContainer className="relative z-[3] bg-transparent">
        <div className="relative z-[4] pt-0 mt-0">
          <h1
            ref={titleRef}
            className="bg-gradient-to-br from-white to-gray-300 py-4 bg-clip-text text-center text-4xl font-bold tracking-tight text-transparent md:text-7xl drop-shadow-sm"
          >
            El Futuro de <br /> Soluciones IA
          </h1>
          <p
            ref={descriptionRef}
            className="mt-4 text-center text-lg text-white max-w-3xl font-medium drop-shadow-md"
          >
            Transformando empresas a través de automatización, 
            agentes de IA y soluciones personalizadas
          </p>
        </div>
      </LampContainer>
    </div>
  )
} 