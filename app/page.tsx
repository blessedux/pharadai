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
      <main className="flex min-h-screen flex-col items-center justify-between overflow-hidden relative z-10" style={{ marginBottom: "calc(16rem - 100px)" }}>
        <ScrollSections />
        
        {/* Logo carousel with proper spacing for scroll animation */}
        <div className="w-full" style={{ 
          minHeight: "60vh", 
          position: "relative"
        }}>
          <PartnerLogoCarousel />
        </div>
        
        <div className="w-full" style={{ marginTop: "-60vh" }}>
          <ServicesSection />
          <ProcessSection />
          <TeamSection />
          <ProjectSection />
          <GeminiEffectWrapper />
          
          {/* Spacer to ensure footer is revealed gradually as you scroll */}
          <div className="h-[300px] bg-transparent"></div>
        </div>
      </main>
      
      {/* Footer is now fixed at bottom with z-index of 0 */}
      <Footer />
    </>
  )
}

