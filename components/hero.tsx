"use client"

import React from "react"
import { LampContainer } from "@/components/ui/lamp"
import { motion } from "framer-motion"

export default function Hero() {
  return (
    <div 
      id="home" 
      className="w-full min-h-screen bg-slate-950 pt-20 md:pt-24 relative"
    >
      {/* Lamp with no text content */}
      <div className="lamp-container">
        <LampContainer lightOn={true} />
      </div>
      
      {/* Text content that can be faded/blurred separately */}
      <div className="hero-text absolute inset-0 flex items-center justify-center z-30 mt-[12rem]">
        <div className="text-center">
          <motion.h1
            className="mt-8 pt-10 py-4 text-center text-5xl md:text-7xl font-bold tracking-tight text-white"
          >
            El Futuro de <span className="text-cyan-400">Soluciones IA</span>
          </motion.h1>
          
          <motion.p
            className="text-xl md:text-2xl max-w-3xl mx-auto mt-4 text-gray-200"
          >
            Transformando empresas a través de automatización,<br></br> agentes de IA y soluciones personalizadas
          </motion.p>
        </div>
      </div>
    </div>
  )
} 