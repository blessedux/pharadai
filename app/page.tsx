"use client"

import React, { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Navbar from "../components/navbar"
import HeroSection from "../components/hero"
import LogoCarousel from "../components/logo-carousel"
import ServicesSection from "../components/services-section"
import ProcessSection from "../components/process-section"
import ProjectSection from "../components/project-section"
import TeamSection from "../components/team-section"
import GeminiEffectWrapper from "../components/gemini-effect-wrapper"
import Footer from "../components/footer"
import { CursorSplash } from "@/components/ui/cursor-splash"

export default function HomePage() {
  const starsContainerRef = useRef<HTMLDivElement>(null)
  
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    
    // Force refresh after component mount to ensure proper positioning
    const timeout = setTimeout(() => {
      ScrollTrigger.refresh(true)
    }, 500)
    
    return () => {
      clearTimeout(timeout)
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [])

  // Define a single background color for all top sections to ensure consistency
  const topSectionsStyle = {
    backgroundColor: "#030712", // Use a solid color value for better consistency
    backgroundImage: "none",    // No gradient to avoid rendering inconsistencies
    backdropFilter: "none"      // No blur to ensure exact match
  }

  return (
    <main className="relative w-full overflow-x-hidden bg-black min-h-screen">
      {/* CSS-based Stars Background */}
      <div className="stars-container">
        <div className="stars"></div>
        <div className="stars2"></div>
        <div className="stars3"></div>
      </div>
      
      {/* Dark gradient overlay to enhance stars visibility */}
      <div 
        className="fixed top-0 left-0 w-full h-full z-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at bottom, rgba(10,10,30,0.2) 0%, rgba(0,0,10,0.4) 100%)"
        }}
      />
      
      {/* Hero Section */}
      <section 
        className="relative h-[90vh] w-full z-20"
        style={topSectionsStyle}
      >
        <HeroSection />
        <CursorSplash color="rgba(100, 180, 255, 0.2)" size={250} />
      </section>
      
      {/* Logo Carousel Section */}
      <section 
        className="relative w-full py-12 z-20 mt-[-5vh]"
        style={topSectionsStyle}
      >
        <LogoCarousel />
      </section>
      
      {/* Services Section */}
      <section 
        className="relative w-full py-20 z-20"
        style={topSectionsStyle}
      >
        <ServicesSection />
      </section>
      
      {/* Process Section */}
      <section 
        className="relative w-full py-24 z-20"
        style={{ 
          background: "linear-gradient(to bottom, rgba(15, 23, 42, 0.95), rgba(30, 41, 59, 0.98))"
        }}
      >
        <ProcessSection />
      </section>
      
      {/* Projects Section */}
      <section 
        className="relative w-full py-24 z-20"
        style={{ 
          background: "linear-gradient(to bottom, rgba(30, 41, 59, 0.98), rgba(51, 65, 85, 0.95))"
        }}
      >
        <ProjectSection />
      </section>
      
      {/* Team Section */}
      <section 
        className="relative w-full py-24 z-20"
        style={{
          backgroundImage: "url('/patterns/grid.svg'), linear-gradient(to bottom, rgba(51, 65, 85, 0.95), rgba(71, 85, 105, 0.9))",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <TeamSection />
      </section>
      
      {/* Footer */}
      <Footer />
    </main>
  )
}

