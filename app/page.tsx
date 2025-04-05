"use client"

import Navbar from "@/components/navbar"
import ServicesSection from "@/components/services-section"
import ProcessSection from "@/components/process-section"
import TeamSection from "@/components/team-section"
import ProjectSection from "@/components/project-section"
import Footer from "@/components/footer"
import ScrollSections from "@/components/scroll-sections"
import PartnerLogoCarousel from "@/components/logo-carousel"

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex min-h-screen flex-col items-center justify-between overflow-hidden">
        <ScrollSections />
        
        {/* Logo carousel with proper spacing for scroll animation */}
        <div className="w-full" style={{ minHeight: "60vh", position: "relative" }}>
          <PartnerLogoCarousel />
        </div>
        
        <div className="w-full" style={{ marginTop: "-20vh" }}>
          <ServicesSection />
          <ProcessSection />
          <TeamSection />
          <ProjectSection />
          <Footer />
        </div>
      </main>
    </>
  )
}

