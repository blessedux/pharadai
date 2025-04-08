"use client";

import React, { useEffect, useState, useRef } from "react";
import { cn } from "@/lib/utils";
import gsap from "gsap";

interface CursorSplashProps {
  className?: string;
  color?: string;
  size?: number;
  opacity?: number;
  duration?: number;
}

export function CursorSplash({
  className,
  color = "rgba(6, 182, 212, 0.5)", // Default color (cyan)
  size = 300,
  opacity = 0.3,
  duration = 1.2,
}: CursorSplashProps) {
  const [splashes, setSplashes] = useState<Array<{
    id: number;
    x: number;
    y: number;
    size: number;
    color: string;
  }>>([]);
  
  const splashCounter = useRef(0);
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!containerRef.current) return;
    
    const container = containerRef.current;
    const parent = container.parentElement;
    
    if (!parent) return;
    
    // Set container dimensions
    const updateContainerSize = () => {
      container.style.width = `${parent.offsetWidth}px`;
      container.style.height = `${parent.offsetHeight}px`;
    };
    
    updateContainerSize();
    window.addEventListener('resize', updateContainerSize);
    
    // Create splash on mouse move
    const handleMouseMove = (e: MouseEvent) => {
      // Get mouse position relative to the container
      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      // Only create splash every 100ms to avoid too many elements
      if (splashCounter.current % 5 === 0) {
        const id = Date.now();
        setSplashes(prev => [
          ...prev.slice(-10), // Keep only the last 10 splashes for performance
          { id, x, y, size, color }
        ]);
      }
      
      splashCounter.current += 1;
    };
    
    container.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('resize', updateContainerSize);
      container.removeEventListener('mousemove', handleMouseMove);
    };
  }, [size, color]);
  
  // Animate and remove splashes
  useEffect(() => {
    splashes.forEach(splash => {
      const element = document.getElementById(`splash-${splash.id}`);
      if (!element) return;
      
      gsap.fromTo(
        element,
        { 
          scale: 0, 
          opacity: opacity 
        },
        { 
          scale: 1, 
          opacity: 0,
          duration: duration,
          ease: "power2.out",
          onComplete: () => {
            setSplashes(prev => prev.filter(s => s.id !== splash.id));
          }
        }
      );
    });
  }, [splashes, opacity, duration]);
  
  return (
    <div 
      ref={containerRef}
      className={cn(
        "absolute inset-0 overflow-hidden pointer-events-none z-10",
        className
      )}
    >
      {splashes.map(splash => (
        <div
          key={splash.id}
          id={`splash-${splash.id}`}
          className="absolute rounded-full transform -translate-x-1/2 -translate-y-1/2"
          style={{
            left: `${splash.x}px`,
            top: `${splash.y}px`,
            width: `${splash.size}px`,
            height: `${splash.size}px`,
            backgroundColor: splash.color,
            willChange: "transform, opacity",
          }}
        />
      ))}
    </div>
  );
} 