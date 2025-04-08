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
    <main className="flex min-h-screen flex-col items-center justify-between bg-black text-white overflow-hidden">
      {/* Hero Section */}
      <section className="w-full min-h-screen flex flex-col items-center justify-center relative bg-black">
        <div className="relative w-full">
          <ScrollSections />
        </div>
      </section>

      {/* Logo Carousel Section */}
      <section className="w-full bg-black relative z-10">
        <div className="w-full" style={{ height: "30vh" }}>
          <PartnerLogoCarousel />
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="w-full bg-[#020617] relative z-10">
        <ServicesSection />
      </section>

      {/* Process Section */}
      <section id="process" className="w-full relative z-10" style={{
        background: "linear-gradient(to bottom, #020617, #0f172a)"
      }}>
        <ProcessSection />
      </section>

      {/* Project Section */}
      <section id="projects" className="w-full relative z-10" style={{
        background: "linear-gradient(to bottom, #0f172a, #1e293b)"
      }}>
        <ProjectSection />
      </section>

      {/* Team Section */}
      <section id="team" className="w-full relative z-10" style={{
        background: "linear-gradient(to bottom, #1e293b, #334155)",
        backgroundImage: "url('/patterns/grid.svg'), linear-gradient(to bottom, #1e293b, #334155)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}>
        <TeamSection />
      </section>

      {/* Gemini Effect Section */}
      <GeminiEffectWrapper />

      {/* Footer with Parallax Reveal */}
      <Footer />
    </main>
  )
}

