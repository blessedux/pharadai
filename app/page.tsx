"use client"

import ServicesSection from "@/components/services-section"
import ProcessSection from "@/components/process-section"
import TeamSection from "@/components/team-section"
import ProjectSection from "@/components/project-section"
import Footer from "@/components/footer"
import ScrollSections from "@/components/scroll-sections"
import PartnerLogoCarousel from "@/components/logo-carousel"
import GeminiEffectWrapper from "@/components/gemini-effect-wrapper"

export default function Home() {
  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-between relative z-10" style={{ marginBottom: "calc(16rem - 100px)" }}>
        {/* Hero section */}
        <div className="relative w-full">
          <ScrollSections />
        </div>
        
        {/* Logo carousel and services section in a single container */}
        <div className="w-full relative">
          {/* Logo carousel */}
          <div className="w-full" style={{ 
            height: "30vh", 
            position: "relative",
            zIndex: 20,
            backgroundColor: "#020617"
          }}>
            <PartnerLogoCarousel />
          </div>
          
          {/* Services section positioned directly after logo carousel */}
          <div className="w-full" style={{ 
            position: "relative",
            zIndex: 10,
            backgroundColor: "#020617"
          }}>
            <ServicesSection />
          </div>
          
          {/* Other sections */}
          <div className="w-full relative">
            <ProcessSection />
            <TeamSection />
            <ProjectSection />
            <GeminiEffectWrapper />
            
            {/* Spacer to ensure footer is revealed gradually as you scroll */}
            <div className="h-[300px] bg-transparent"></div>
          </div>
        </div>
      </main>
      
      {/* Footer is now fixed at bottom with z-index of 0 */}
      <Footer />
    </>
  )
}

