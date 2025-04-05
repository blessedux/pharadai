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
  
  // Apply scroll effects to hero text
  useEffect(() => {
    const heroTextElement = document.querySelector('.hero-text') as HTMLElement;
    if (heroTextElement) {
      heroTextElement.style.opacity = `${1 - scrollProgress * 1.5}`;
      heroTextElement.style.filter = `blur(${scrollProgress * 5}px)`;
      heroTextElement.style.transform = `scale(${1 - scrollProgress * 0.05})`;
      heroTextElement.style.transition = 'opacity 0.2s, filter 0.2s, transform 0.2s';
    }
  }, [scrollProgress]);
  
  return (
    <div 
      ref={sectionRef} 
      className="scroll-section"
      style={{ 
        minHeight: "70vh" // Further reduced height
      }}
    >
      {/* Hero Section - only text will be affected by scroll */}
      <div 
        className="sticky-section z-10"
        ref={heroRef}
      >
        <Hero />
      </div>
    </div>
  );
} 