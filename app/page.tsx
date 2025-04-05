"use client"

import Hero from "@/components/hero"
import Navbar from "@/components/navbar"
import ServicesSection from "@/components/services-section"
import ProcessSection from "@/components/process-section"
import TeamSection from "@/components/team-section"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Hero />
      <ServicesSection />
      <ProcessSection />
      <TeamSection />
      <Footer />
      <Navbar />
    </main>
  )
}

