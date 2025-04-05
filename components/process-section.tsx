"use client"

export default function ProcessSection() {
  return (
    <section 
      className="w-full py-24 pb-32 bg-slate-800"
      id="process"
      style={{ contain: 'content' }}
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Nuestro Proceso</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Seguimos una metodología probada para entregar resultados excepcionales
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {[
            { number: "01", title: "Descubrimiento", description: "Analizamos las necesidades y desafíos de su negocio" },
            { number: "02", title: "Estrategia", description: "Desarrollamos una estrategia de solución personalizada" },
            { number: "03", title: "Desarrollo", description: "Nuestros expertos construyen su solución personalizada" },
            { number: "04", title: "Implementación", description: "Implementamos y optimizamos su solución" },
          ].map((step) => (
            <div
              key={step.number}
              className="relative"
            >
              <div className="bg-slate-700 rounded-lg p-8 h-full">
                <div className="text-5xl font-bold text-cyan-400 mb-4">{step.number}</div>
                <h3 className="text-2xl font-bold text-white mb-3">{step.title}</h3>
                <p className="text-gray-300">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 