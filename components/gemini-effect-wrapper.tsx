"use client";

import { useScroll, useTransform } from "framer-motion";
import React from "react";
import { GeminiEffect } from "@/components/gemini-effect";

export default function GeminiEffectWrapper() {
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end start"],
  });

  // Show paths progressively from the start (0.2 initial value)
  const pathLengthFirst = useTransform(scrollYProgress, [0, 0.8], [0.2, 1.0]);
  const pathLengthSecond = useTransform(scrollYProgress, [0, 0.8], [0.15, 1.0]);
  const pathLengthThird = useTransform(scrollYProgress, [0, 0.8], [0.1, 1.0]);
  const pathLengthFourth = useTransform(scrollYProgress, [0, 0.8], [0.05, 1.0]);
  const pathLengthFifth = useTransform(scrollYProgress, [0, 0.8], [0, 1.0]);

  return (
    <div
      id="gemini"
      className="h-[110vh] w-full bg-black relative z-10"
      ref={ref}
    >
      <div className="sticky top-1/2 -translate-y-1/2 left-0 w-full flex items-center justify-center">
        <GeminiEffect
          pathLengths={[
            pathLengthFirst,
            pathLengthSecond,
            pathLengthThird,
            pathLengthFourth,
            pathLengthFifth,
          ]}
          title="Transformando Ideas en Realidad"
          description="Nuestras soluciones de inteligencia artificial te permiten alcanzar nuevas fronteras"
        />
      </div>
    </div>
  );
} 