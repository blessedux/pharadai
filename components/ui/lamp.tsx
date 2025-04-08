"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { cn } from "@/lib/utils";

export function LampDemo() {
  const titleRef = useRef(null);
  const descriptionRef = useRef(null);

  useEffect(() => {
    // Create animation with GSAP
    const tl = gsap.timeline({ defaults: { ease: "power2.out" } });
    
    tl.fromTo(
      titleRef.current,
      { opacity: 0.5, y: 100 },
      { opacity: 1, y: 0, duration: 0.8, delay: 0.3 }
    ).fromTo(
      descriptionRef.current,
      { opacity: 0.5, y: 100 },
      { opacity: 1, y: 0, duration: 0.8 },
      "-=0.6" // Start slightly before the title animation finishes
    );

    return () => {
      tl.kill(); // Clean up animation
    };
  }, []);

  return (
    <LampContainer>
      <h1
        ref={titleRef}
        className="mt-8 py-4 text-center text-5xl md:text-7xl font-bold tracking-tight text-white"
      >
        El Futuro de <span className="text-cyan-400">Soluciones IA</span>
      </h1>
      
      <p
        ref={descriptionRef}
        className="text-xl md:text-2xl max-w-3xl mx-auto mt-4 text-gray-200"
      >
        Transformando empresas a través de automatización,<br></br> agentes de IA y soluciones personalizadas
      </p>
    </LampContainer>
  );
}

export const LampContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const leftGradientRef = useRef(null);
  const rightGradientRef = useRef(null);
  const glowRef = useRef(null);
  const lineRef = useRef(null);
  
  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power2.inOut" } });
    
    // Animate lamp components with enhanced contrast
    tl.fromTo(
      [leftGradientRef.current, rightGradientRef.current],
      { opacity: 0.5, width: "20rem" },
      { opacity: 1, width: "40rem", duration: 0.8, delay: 0.3 }
    ).fromTo(
      glowRef.current,
      { width: "10rem", opacity: 0.6 },
      { width: "20rem", opacity: 0.8, duration: 0.8 },
      "-=0.8" // Start at the same time as the gradients
    ).fromTo(
      lineRef.current,
      { width: "20rem", opacity: 0.7 },
      { width: "40rem", opacity: 1, duration: 0.8 },
      "-=0.8" // Start at the same time as the gradients
    );
    
    return () => {
      tl.kill(); // Clean up animation
    };
  }, []);

  return (
    <div
      className={cn(
        "relative flex min-h-screen flex-col items-center justify-center overflow-hidden w-full z-0",
        className
      )}
    >
      <div className="relative flex w-full flex-1 scale-y-125 items-center justify-center isolate z-0">
        {/* Dark background fill to prevent seeing through to stars */}
        <div className="absolute inset-0 bg-slate-950/95"></div>
        
        <div
          ref={leftGradientRef}
          style={{
            backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
            width: "40rem",
          }}
          className="absolute inset-auto right-1/2 h-64 overflow-visible bg-gradient-conic from-cyan-500 via-transparent to-transparent text-white [--conic-position:from_70deg_at_center_top]"
        >
          <div className="absolute w-[100%] left-0 bg-slate-950 h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
          <div className="absolute w-40 h-[100%] left-0 bg-slate-950 bottom-0 z-20 [mask-image:linear-gradient(to_right,white,transparent)]" />
        </div>
        <div
          ref={rightGradientRef}
          style={{
            backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
            width: "40rem",
          }}
          className="absolute inset-auto left-1/2 h-64 bg-gradient-conic from-transparent via-transparent to-cyan-500 text-white [--conic-position:from_290deg_at_center_top]"
        >
          <div className="absolute w-40 h-[100%] right-0 bg-slate-950 bottom-0 z-20 [mask-image:linear-gradient(to_left,white,transparent)]" />
          <div className="absolute w-[100%] right-0 bg-slate-950 h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
        </div>
        <div className="absolute top-1/2 h-48 w-full translate-y-12 scale-x-150 bg-slate-950 blur-2xl"></div>
        <div className="absolute top-1/2 z-50 h-64 w-full bg-transparent opacity-10 backdrop-blur-md"></div>
        <div className="absolute inset-auto z-50 h-48 w-[36rem] -translate-y-1/2 rounded-full bg-cyan-500 opacity-60 blur-3xl"></div>
        <div
          ref={glowRef}
          className="absolute inset-auto z-30 h-36 w-64 -translate-y-[6rem] rounded-full bg-cyan-400 blur-2xl"
          style={{ width: "20rem" }}
        ></div>
        <div
          ref={lineRef}
          className="absolute inset-auto z-50 h-0.5 w-[40rem] -translate-y-[7rem] bg-cyan-400"
          style={{ width: "40rem" }}
        ></div>

        <div className="absolute inset-auto z-40 h-44 w-full -translate-y-[12.5rem] bg-slate-950"></div>
      </div>

      <div className="relative z-50 flex -translate-y-80 flex-col items-center px-5">
        {children}
      </div>
    </div>
  );
};
