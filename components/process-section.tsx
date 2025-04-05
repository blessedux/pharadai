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
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Process</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We follow a proven methodology to deliver exceptional results
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {[
            { number: "01", title: "Discovery", description: "We analyze your business needs and challenges" },
            { number: "02", title: "Strategy", description: "We develop a tailored solution strategy" },
            { number: "03", title: "Development", description: "Our experts build your custom solution" },
            { number: "04", title: "Deployment", description: "We implement and optimize your solution" },
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