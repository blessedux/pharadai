"use client"

import { Bot, Brain, Code, Database, Network, Lock } from "lucide-react"
import { BentoGrid, BentoCard } from "@/components/ui/bento-grid"

export default function ServicesSection() {
  return (
    <section 
      className="w-full pb-32"
      id="services"
      style={{ 
        contain: 'content',
        backgroundColor: '#020617',
        marginTop: "0",
        position: "relative",
        zIndex: 20,
        paddingTop: "50px",
        borderTop: "none"
      }}
    >
      <div 
        className="absolute top-0 left-0 right-0 h-20" 
        style={{ 
          backgroundColor: "#020617",
          zIndex: 1
        }}
      ></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Pharadai</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Transformamos ideas en soluciones inteligentes. Usamos IA y software a medida para optimizar tu negocio, hacerlo más eficiente y ayudarte a crecer.
          </p>
        </div>

        <BentoGrid className="grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <BentoCard
            name="Agentes de IA Corporativos"
            className="sm:col-span-1 lg:col-span-2 bg-slate-900/50"
            background={
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-blue-500/10" />
            }
            Icon={Brain}
            description="Desarrollamos asistentes de IA personalizados que automatizan procesos complejos, mejoran la toma de decisiones y aumentan la productividad de tu equipo."
            href="#contact"
            cta="Descubre más"
            meta="Solución empresarial"
            status="Destacado"
            tags={["IA", "Automatización", "Productividad"]}
          />
          <BentoCard
            name="Automatización Inteligente"
            className="bg-slate-900/50"
            background={
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10" />
            }
            Icon={Bot}
            description="Optimizamos tus flujos de trabajo con soluciones de automatización avanzada que integran IA para reducir tareas repetitivas y minimizar errores."
            href="#contact"
            cta="Explora soluciones"
            meta="Optimización"
            tags={["Automatización", "IA", "Eficiencia"]}
          />
          <BentoCard
            name="Desarrollo Web 3.0"
            className="bg-slate-900/50"
            background={
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-emerald-500/10" />
            }
            Icon={Code}
            description="Creamos aplicaciones web modernas y descentralizadas utilizando las últimas tecnologías y frameworks para una experiencia de usuario excepcional."
            href="#contact"
            cta="Ver detalles"
            meta="Desarrollo"
            status="Nuevo"
            tags={["Web 3.0", "Desarrollo", "UI/UX"]}
          />
          <BentoCard
            name="Infraestructura Cloud & DevOps"
            className="sm:col-span-1 lg:col-span-2 bg-slate-900/50"
            background={
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-red-500/10" />
            }
            Icon={Network}
            description="Diseñamos y gestionamos infraestructuras cloud escalables y seguras, implementando las mejores prácticas de DevOps para un desarrollo continuo y eficiente."
            href="#contact"
            cta="Conoce más"
            meta="Infraestructura"
            tags={["Cloud", "DevOps", "Escalabilidad"]}
          />
          <BentoCard
            name="Soluciones de Big Data"
            className="bg-slate-900/50"
            background={
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-indigo-500/10" />
            }
            Icon={Database}
            description="Implementamos soluciones de análisis de datos a gran escala, ayudándote a extraer insights valiosos para tu negocio mediante IA y aprendizaje automático."
            href="#contact"
            cta="Descubre cómo"
            meta="Análisis"
            tags={["Big Data", "IA", "Insights"]}
          />
          <BentoCard
            name="Ciberseguridad Avanzada"
            className="bg-slate-900/50"
            background={
              <div className="absolute inset-0 bg-gradient-to-br from-slate-500/10 to-zinc-500/10" />
            }
            Icon={Lock}
            description="Protegemos tu infraestructura digital con soluciones de seguridad de última generación, incluyendo análisis de vulnerabilidades, monitoreo continuo y respuesta a incidentes."
            href="#contact"
            cta="Protege tu negocio"
            meta="Seguridad"
            status="Esencial"
            tags={["Ciberseguridad", "Protección", "Monitoreo"]}
          />
        </BentoGrid>
      </div>
    </section>
  )
} 