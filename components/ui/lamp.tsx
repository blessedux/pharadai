"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

export function LampDemo({
  onDarkModeChange
}: {
  onDarkModeChange?: (isDarkMode: boolean) => void
}) {
  const [lightOn, setLightOn] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLightOn(true);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);

  // Call the onDarkModeChange callback with true to ensure dark mode is always on
  useEffect(() => {
    if (onDarkModeChange) {
      onDarkModeChange(true);
    }
  }, [onDarkModeChange]);

  const textVariants = {
    hidden: { opacity: 0.1, y: 10 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1 + (lightOn ? 0.2 : 0),
        duration: 0.8,
        ease: "easeInOut"
      }
    })
  };

  return (
    <LampContainer lightOn={lightOn}>
      <div className="text-center">
        <motion.h1
          custom={0}
          initial="hidden"
          animate={lightOn ? "visible" : "hidden"}
          variants={textVariants}
          className={cn(
            "mt-8 py-4 text-center text-5xl md:text-7xl font-bold tracking-tight",
            lightOn 
              ? "text-white transition-colors duration-500"
              : "text-slate-600 transition-colors duration-300"
          )}
        >
          El Futuro de <span className="text-cyan-400">Soluciones IA</span>
        </motion.h1>
        
        <motion.p
          custom={1}
          initial="hidden"
          animate={lightOn ? "visible" : "hidden"}
          variants={textVariants}
          className={cn(
            "text-xl md:text-2xl max-w-3xl mx-auto mt-4",
            lightOn
              ? "text-gray-200 transition-colors duration-500"
              : "text-slate-600 transition-colors duration-300"
          )}
        >
          Transformando empresas a través de automatización,<br></br> agentes de IA y soluciones personalizadas
        </motion.p>
      </div>
    </LampContainer>
  );
}

export const LampContainer = ({
  children,
  className,
  lightOn = false,
}: {
  children: React.ReactNode;
  className?: string;
  lightOn?: boolean;
}) => {
  return (
    <div
      className={cn(
        "relative flex min-h-screen flex-col items-center justify-center overflow-hidden w-full rounded-md z-0 transition-colors duration-500 bg-slate-950",
        className
      )}
    >
      <div className="relative flex w-full flex-1 scale-y-125 items-center justify-center isolate z-0">
        <AnimatePresence>
          {lightOn && (
            <>
              <motion.div
                initial={{ opacity: 0, width: "0rem" }}
                animate={{ opacity: 1, width: "30rem" }}
                transition={{
                  duration: 0.8,
                  ease: "easeInOut",
                }}
                style={{
                  backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
                }}
                className="absolute inset-auto right-1/2 h-56 overflow-visible w-[30rem] bg-gradient-conic from-cyan-500 via-transparent to-transparent text-white [--conic-position:from_70deg_at_center_top]"
              >
                <div className="absolute w-[100%] left-0 bg-slate-950 h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
                <div className="absolute w-40 h-[100%] left-0 bg-slate-950 bottom-0 z-20 [mask-image:linear-gradient(to_right,white,transparent)]" />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, width: "0rem" }}
                animate={{ opacity: 1, width: "30rem" }}
                transition={{
                  duration: 0.8,
                  ease: "easeInOut",
                }}
                style={{
                  backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
                }}
                className="absolute inset-auto left-1/2 h-56 w-[30rem] bg-gradient-conic from-transparent via-transparent to-cyan-500 text-white [--conic-position:from_290deg_at_center_top]"
              >
                <div className="absolute w-40 h-[100%] right-0 bg-slate-950 bottom-0 z-20 [mask-image:linear-gradient(to_left,white,transparent)]" />
                <div className="absolute w-[100%] right-0 bg-slate-950 h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="absolute top-1/2 h-48 w-full translate-y-12 scale-x-150 bg-slate-950 blur-2xl"
              ></motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.1 }}
                className="absolute top-1/2 z-50 h-48 w-full bg-transparent backdrop-blur-md"
              ></motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.5 }}
                className="absolute inset-auto z-50 h-36 w-[28rem] -translate-y-1/2 rounded-full bg-cyan-500 blur-3xl"
              ></motion.div>
              <motion.div
                initial={{ opacity: 0, width: "0rem" }}
                animate={{ opacity: 1, width: "16rem" }}
                transition={{
                  duration: 0.8,
                  ease: "easeInOut",
                }}
                className="absolute inset-auto z-30 h-36 w-64 -translate-y-[6rem] rounded-full bg-cyan-400 blur-2xl"
              ></motion.div>
              <motion.div
                initial={{ opacity: 0, width: "0rem" }}
                animate={{ opacity: 1, width: "30rem" }}
                transition={{
                  duration: 0.8,
                  ease: "easeInOut",
                }}
                className="absolute inset-auto z-50 h-0.5 w-[30rem] -translate-y-[7rem] bg-cyan-400"
              ></motion.div>
            </>
          )}
        </AnimatePresence>

        <div className="absolute inset-auto z-40 h-44 w-full -translate-y-[12.5rem] bg-slate-950"></div>
      </div>

      <div className="relative z-50 flex -translate-y-80 flex-col items-center px-5">
        {children}
      </div>
    </div>
  );
};
