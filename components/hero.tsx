"use client"

import { useRef, useEffect } from "react"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Hero() {
  const targetRef = useRef<HTMLDivElement>(null)

  // Prefetch the next section on idle
  useEffect(() => {
    // Wait until the main thread is idle
    if ('requestIdleCallback' in window) {
      // @ts-ignore - requestIdleCallback exists in browsers
      window.requestIdleCallback(() => {
        // Prefetch the next sections
        const prefetchLinks = [
          '/images/team/team-1.jpg',
          '/images/team/team-2.jpg',
          '/images/team/team-3.jpg',
          '/images/team/team-4.jpg'
        ];
        
        prefetchLinks.forEach(url => {
          const link = document.createElement('link');
          link.rel = 'prefetch';
          link.href = url;
          document.head.appendChild(link);
        });
      });
    }
  }, []);

  return (
    <section 
      ref={targetRef} 
      id="home"
      className="w-full h-screen relative overflow-hidden bg-gradient-to-b from-slate-900 to-slate-950"
      style={{ contain: 'content' }}
    >
      {/* Static background elements */}
      <div className="absolute inset-0 w-full h-full">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-900/95 to-slate-950"></div>
        
        {/* Background dots pattern */}
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle, rgba(25, 118, 210, 0.1) 1px, transparent 1px)',
          backgroundSize: '30px 30px'
        }}></div>
        
        {/* Glowing orb effect */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-cyan-500/10 blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-64 h-64 rounded-full bg-blue-600/10 blur-3xl"></div>
      </div>

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 z-10">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
          The Future of <span className="text-cyan-400">AI Solutions</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mb-8">
          Transforming businesses through automation, AI agents, and custom end-to-end solutions
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button size="lg" className="bg-cyan-500 hover:bg-cyan-600 text-white">
            Get Started <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
            Learn More
          </Button>
        </div>
      </div>
    </section>
  )
} 