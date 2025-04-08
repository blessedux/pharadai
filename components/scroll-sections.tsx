"use client"

import React, { useEffect, useState, useRef } from 'react';
import { cn } from "@/lib/utils";
import { throttle } from 'lodash';
import Hero from './hero';

export default function ScrollSections() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  
  // Calculate scroll progress relative to this section
  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    const handleScroll = throttle(() => {
      if (!sectionRef.current) return;
      
      const { top, height } = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Calculate scroll progress (0 to 1)
      let progress = 0;
      
      // When the section is at the top of the viewport
      if (top <= 0) {
        // Calculate how far we've scrolled through the section
        // Account for navbar at bottom by using a slightly larger denominator
        progress = Math.min(Math.abs(top) / (height - windowHeight + 80), 1);
      }
      
      setScrollProgress(progress);
    }, 50);
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initialize on mount
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  // Apply scroll effects to hero content
  useEffect(() => {
    const heroContent = document.querySelector('.lamp-content') as HTMLElement;
    if (heroContent) {
      // Improved fade out calculation for better visibility
      // Only start fading when we're actually scrolling down a bit
      const fadeStartThreshold = 0.1; // Start fading after 10% scroll
      const fadeOutFactor = scrollProgress < fadeStartThreshold 
        ? 1 // Keep fully visible until threshold
        : 1 - ((scrollProgress - fadeStartThreshold) / (1 - fadeStartThreshold)) * 1.5;
      
      // Ensure opacity doesn't go below 0
      const calculatedOpacity = Math.max(0, fadeOutFactor);
      
      heroContent.style.opacity = `${calculatedOpacity}`;
      heroContent.style.filter = `blur(${scrollProgress > fadeStartThreshold ? (scrollProgress - fadeStartThreshold) * 5 : 0}px)`;
      heroContent.style.transform = `scale(${1 - scrollProgress * 0.05})`;
      heroContent.style.transition = 'opacity 0.2s, filter 0.2s, transform 0.2s';
    }
  }, [scrollProgress]);
  
  return (
    <div 
      ref={sectionRef} 
      className="scroll-section"
      style={{ 
        minHeight: "100vh", // Full viewport height
        paddingTop: 0,
        marginTop: 0,
        position: "relative", // Ensure proper positioning
        zIndex: 1
      }}
    >
      {/* Hero Section - only text will be affected by scroll */}
      <div 
        className="sticky-section z-[2]"
        ref={heroRef}
        style={{
          position: "sticky", // Ensure sticky positioning
          top: 0,
          paddingTop: 0,
          marginTop: 0,
          height: "100vh", // Full viewport height
          zIndex: 2
        }}
      >
        <Hero />
      </div>
    </div>
  );
} 