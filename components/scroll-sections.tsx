"use client"

import React, { useEffect, useState, useRef } from 'react';
import { cn } from "@/lib/utils";
import { throttle } from 'lodash';
import Hero from './hero';

export default function ScrollSections() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  
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
        progress = Math.min(Math.abs(top) / (height - windowHeight), 1);
      }
      
      setScrollProgress(progress);
    }, 50);
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initialize on mount
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  // Calculate styles based on scroll progress
  const heroStyle = {
    opacity: 1 - scrollProgress * 1.5, // Fade out faster
    filter: `blur(${scrollProgress * 10}px)`,
    transform: `scale(${1 - scrollProgress * 0.05})`,
  };
  
  return (
    <div 
      ref={sectionRef} 
      className="scroll-section"
      style={{ minHeight: "95vh" }} // Further reduced height to bring logos closer
    >
      {/* Hero Section with blur effect */}
      <div 
        className="sticky-section z-10"
        style={heroStyle}
      >
        <Hero />
      </div>
    </div>
  );
} 