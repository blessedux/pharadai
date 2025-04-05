"use client"

import { motion } from "framer-motion"
import TeamMember from "@/components/team-member"

export default function TeamSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section 
      className="w-full py-24 pb-32 bg-slate-900"
      id="team"
      style={{ contain: 'content' }}
    >
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Nuestro Equipo</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Un equipo multidisciplinario de expertos en tecnología, negocios y normativa urbana
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div variants={itemVariants}>
            <TeamMember
              name="Álvaro Acevedo"
              role="CTO y Founder"
              image="/PFP/AlvaroPFP.png"
              delay={0}
              bio="Ingeniero en Administración de Empresas con diplomados en Marketing Digital, Comercio Internacional y Gestión Financiera. Ha liderado proyectos de transformación digital como Product Owner en Unired y Cencosud, desarrollando plataformas orientadas al usuario, sistemas de pago y marketplaces."
              socialLinks={{
                linkedin: "https://linkedin.com",
                github: "https://github.com"
              }}
            />
          </motion.div>
          <motion.div variants={itemVariants}>
            <TeamMember
              name="Franco Enrique Parra Campos"
              role="Back Office Engineer"
              image="/PFP/FrancoPFP.png"
              delay={0}
              bio="Ingeniero Civil Informático por la Universidad Técnica Federico Santa María. Ha liderado la automatización de procesos críticos y la implementación de soluciones inteligentes basadas en datos, incluyendo proyectos para el Ministerio de Vivienda y Urbanismo."
              socialLinks={{
                twitter: "https://twitter.com",
                github: "https://github.com"
              }}
            />
          </motion.div>
          <motion.div variants={itemVariants}>
            <TeamMember
              name="Simon Espínola Marín"
              role="Director Comercial y Co-Founder"
              image="/PFP/SimonPFP.png"
              delay={0}
              bio="Economista de la Universidad de Chile, con estudios en innovación social en Aalto University (Finlandia) y certificación en Project Management (MIT xPro). Ex CEO de Naturland, donde lideró un proceso de expansión y transformación digital."
              socialLinks={{
                linkedin: "https://linkedin.com",
                github: "https://github.com"
              }}
            />
          </motion.div>
          <motion.div variants={itemVariants}>
            <TeamMember
              name="Joaquín Farfán Torres"
              role="Desarrollador Front-end"
              image="/PFP/JoaquinPFP.png"
              delay={0}
              bio="Desarrollador con formación técnica en desarrollo web y diseño UX, con estudios en Front-End Engineering y diseño de experiencia de usuario. Cuenta con experiencia en la creación de interfaces digitales centradas en el usuario, especialmente en plataformas Web3."
              socialLinks={{
                twitter: "https://twitter.com",
                github: "https://github.com"
              }}
            />
          </motion.div>
          <motion.div variants={itemVariants}>
            <TeamMember
              name="Francisca Salazar Herrera"
              role="Analista de Proyectos Urbanos"
              image="/PFP/FranPFP.png"
              delay={0}
              bio="Arquitecta titulada de la Universidad de Santiago de Chile (USACH), Máster en Estudios Territoriales y Planificación. Posee más de 7 años de experiencia en el sector público, con 4 años como Arquitecta Revisora en distintas Direcciones de Obras (DOM)."
              socialLinks={{
                linkedin: "https://linkedin.com"
              }}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
} 