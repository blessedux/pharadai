"use client"

import Hero from "@/components/hero"
import Navbar from "@/components/navbar"
import ServicesSection from "@/components/services-section"
import ProcessSection from "@/components/process-section"
import TeamSection from "@/components/team-section"
import ProjectSection from "@/components/project-section"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex min-h-screen flex-col items-center justify-between pb-24">
        <Hero />
        <ServicesSection />
        <ProcessSection />
        <TeamSection />
        <ProjectSection />
        <Footer />
      </main>
    </>
  )
}

