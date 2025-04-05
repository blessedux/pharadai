"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: JSX.Element;
  }[];
  className?: string;
}) => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const controlNavbar = () => {
      if (typeof window !== "undefined") {
        // If scrolling down and past a threshold (100px), hide the navbar
        if (window.scrollY > lastScrollY && window.scrollY > 100) {
          setIsVisible(false);
        } 
        // If scrolling up or at the top, show the navbar
        else {
          setIsVisible(true);
        }
        setLastScrollY(window.scrollY);
      }
    };

    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavbar);
      
      // Cleanup function
      return () => {
        window.removeEventListener("scroll", controlNavbar);
      };
    }
  }, [lastScrollY]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{
        opacity: isVisible ? 1 : 0,
        y: isVisible ? 0 : 50,
      }}
      transition={{
        duration: 0.3,
      }}
      className={cn(
        "fixed bottom-6 inset-x-0 mx-auto w-fit px-8 py-3 backdrop-blur-sm rounded-full border border-white/10 bg-black/60 shadow-lg z-[5000]",
        className
      )}
    >
      <div className="flex items-center justify-center space-x-8">
        {navItems.map((item, idx) => (
          <a
            key={idx}
            href={item.link}
            className="relative flex flex-col items-center justify-center"
          >
            <span className="text-white">{item.icon}</span>
            <span className="text-white/80 text-xs mt-1">{item.name}</span>
          </a>
        ))}
      </div>
    </motion.div>
  );
}; 