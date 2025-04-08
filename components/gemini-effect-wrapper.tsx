"use client";

import React, { useEffect, useRef, useState } from "react";
import { GeminiEffect } from "@/components/gemini-effect";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function GeminiEffectWrapper() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [pathValues, setPathValues] = useState<number[]>([0.2, 0.15, 0.1, 0.05, 0]);
  
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
        end: "bottom 20%",
        scrub: 1,
        onUpdate: (self) => {
          const progress = self.progress;
          setPathValues([
            0.2 + progress * 0.8,
            0.15 + progress * 0.85,
            0.1 + progress * 0.9,
            0.05 + progress * 0.95,
            0 + progress * 1,
          ]);
        },
      },
    });

    return () => {
      timeline.kill();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="gemini"
      className="h-[60vh] w-full relative z-10"
      style={{ 
        background: "linear-gradient(to bottom, #334155, #0f172a)",
      }}
    >
      <div 
        ref={containerRef}
        className="flex items-center justify-center h-full w-full"
      >
        <GeminiEffect
          pathValues={pathValues}
          title="Transformando Ideas en Realidad"
          description="Nuestras soluciones de inteligencia artificial te permiten alcanzar nuevas fronteras"
        />
      </div>
    </section>
  );
} 