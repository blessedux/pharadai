"use client"

import { motion } from "framer-motion"

interface ProjectCardProps {
  title: string
  description: string
  image: string
  tags: string[]
  delay: number
}

const ProjectCard = ({ title, description, image, tags, delay }: ProjectCardProps) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        delay: delay * 0.1,
        duration: 0.8,
        ease: "easeOut"
      }}
      viewport={{ once: true }}
      className="group bg-slate-800 rounded-xl overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/10 hover:-translate-y-2"
    >
      <div className="relative h-64 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
          style={{ backgroundImage: `url(${image})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-60" />
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
        <p className="text-gray-300 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mt-4">
          {tags.map((tag, index) => (
            <span 
              key={index} 
              className="text-xs px-3 py-1 rounded-full bg-slate-700 text-cyan-400"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export default function ProjectSection() {
  const projects = [
    {
      title: "NeuralMind",
      description: "Sistema de procesamiento de lenguaje natural para automatizar atención al cliente en tiempo real.",
      image: "https://images.unsplash.com/photo-1593720213428-28a5b9e94613?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
      tags: ["NLP", "Machine Learning", "ChatOps"],
      delay: 0
    },
    {
      title: "AutoVision",
      description: "Plataforma de visión por computadora para automatizar inspecciones de control de calidad en líneas de producción.",
      image: "https://images.unsplash.com/photo-1581472723648-909f4851d4ae?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      tags: ["Computer Vision", "Edge AI", "IoT"],
      delay: 1
    },
    {
      title: "PredictSales",
      description: "Solución de análisis predictivo que optimiza estrategias de ventas y forecast con precisión del 95%.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      tags: ["Predictive Analytics", "ML", "Business Intelligence"],
      delay: 2
    },
    {
      title: "SynthVoice",
      description: "Tecnología avanzada de síntesis de voz para interfaces conversacionales en múltiples idiomas y dialectos.",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      tags: ["Speech Synthesis", "Voice AI", "NLP"],
      delay: 3
    }
  ]

  return (
    <section 
      id="projects" 
      className="w-full py-24 bg-slate-900"
      style={{ contain: 'content' }}
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Nuestros Proyectos
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
            Transformando empresas con soluciones de IA innovadoras y personalizadas
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  )
} 