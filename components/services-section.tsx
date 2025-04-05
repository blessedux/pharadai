"use client"

import { Bot, Layers, Zap } from "lucide-react"
import ServiceCard from "@/components/service-card"

export default function ServicesSection() {
  return (
    <section 
      className="w-full py-24 pb-32 bg-slate-900"
      id="services"
      style={{ contain: 'content' }}
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Expertise</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We specialize in cutting-edge technologies to deliver exceptional solutions for your business
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ServiceCard
            icon={<Bot className="h-10 w-10 text-cyan-400" />}
            title="AI Agents"
            description="Intelligent agents that automate tasks, provide insights, and enhance decision-making processes."
            delay={0}
          />
          <ServiceCard
            icon={<Zap className="h-10 w-10 text-cyan-400" />}
            title="Automation"
            description="Streamline your workflows and operations with our advanced automation solutions."
            delay={0}
          />
          <ServiceCard
            icon={<Layers className="h-10 w-10 text-cyan-400" />}
            title="Custom Solutions"
            description="End-to-end development tailored to your specific business needs and challenges."
            delay={0}
          />
        </div>
      </div>
    </section>
  )
} 