"use client"

export default function Footer() {
  return (
    <footer className="w-full py-12 bg-slate-900 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <p className="text-gray-400 mt-2">Empresa líder en soluciones de IA en Chile y Estados Unidos</p>
          </div>
          <div className="flex flex-col md:flex-row gap-8">
            <div>
              <h3 className="text-white font-bold mb-3">Servicios</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Agentes de IA</li>
                <li>Automatización</li>
                <li>Soluciones Personalizadas</li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-bold mb-3">Empresa</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Sobre Nosotros</li>
                <li>Carreras</li>
                <li>Contacto</li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-bold mb-3">Legal</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Política de Privacidad</li>
                <li>Términos de Servicio</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="border-t border-slate-800 mt-12 pt-8 text-center text-gray-500">
          <p>© {new Date().getFullYear()} Pharad.AI. Todos los derechos reservados.</p>
          <p className="mt-2 text-sm">Liderando innovación en IA desde Santiago, Chile y San Francisco, Estados Unidos.</p>
        </div>
      </div>

      {/* Half-visible title at the bottom */}
      <div className="absolute bottom-0 left-0 right-0 flex justify-center transform translate-y-1/2 overflow-hidden">
        <h2 
          className="text-8xl md:text-9xl font-bold text-gray-500/30 tracking-[0.5em] font-favorite whitespace-nowrap"
          style={{ fontFamily: "var(--font-favorite)" }}
        >
          PHARAD.AI
        </h2>
      </div>
    </footer>
  )
} 