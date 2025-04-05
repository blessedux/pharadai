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
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Pharadai</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Transformamos ideas en soluciones inteligentes. Usamos IA y software a medida para optimizar tu negocio, hacerlo más eficiente y ayudarte a crecer.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ServiceCard
            icon={<Bot className="h-10 w-10 text-cyan-400" />}
            title="Agentes de IA"
            description="Agentes inteligentes que automatizan tareas, proporcionan información y mejoran los procesos de toma de decisiones."
            delay={0}
          />
          <ServiceCard
            icon={<Zap className="h-10 w-10 text-cyan-400" />}
            title="Automatización"
            description="Optimice sus flujos de trabajo y operaciones con nuestras soluciones de automatización avanzadas."
            delay={0}
          />
          <ServiceCard
            icon={<Layers className="h-10 w-10 text-cyan-400" />}
            title="Soluciones Personalizadas"
            description="Desarrollo completo adaptado a las necesidades y desafíos específicos de su negocio."
            delay={0}
          />
        </div>
      </div>
    </section>
  )
} 