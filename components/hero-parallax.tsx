"use client"

import { useRef, useEffect, useState } from "react"

export default function HeroParallax() {
  const containerRef = useRef<HTMLDivElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)
  const [videoLoaded, setVideoLoaded] = useState(false)

  useEffect(() => {
    // Preload the video
    const videoSrc = "https://websites.godaddy.com/categories/v4/videos/raw/video/uA41GmyyG8IMaxXdb";
    const preloadLink = document.createElement('link');
    preloadLink.rel = 'preload';
    preloadLink.href = videoSrc;
    preloadLink.as = 'video';
    document.head.appendChild(preloadLink);

    // Handle video loaded state
    if (videoRef.current) {
      const handleLoadedData = () => {
        setVideoLoaded(true);
      };
      
      // Try to play the video as soon as possible
      const playVideo = () => {
        if (videoRef.current) {
          videoRef.current.play().catch(() => {
            // Auto-play might be blocked, try again on user interaction
            document.addEventListener('click', () => {
              videoRef.current?.play();
            }, { once: true });
          });
        }
      };
      
      videoRef.current.addEventListener('loadeddata', handleLoadedData);
      videoRef.current.addEventListener('canplaythrough', playVideo);
      
      // If video is already loaded, set state
      if (videoRef.current.readyState >= 3) {
        setVideoLoaded(true);
        playVideo();
      }
      
      return () => {
        if (videoRef.current) {
          videoRef.current.removeEventListener('loadeddata', handleLoadedData);
          videoRef.current.removeEventListener('canplaythrough', playVideo);
        }
        document.head.removeChild(preloadLink);
      };
    }
  }, []);

  return (
    <div ref={containerRef} className="w-full h-screen relative overflow-hidden bg-slate-950">
      {/* Background Video */}
      <div className="absolute inset-0 w-full h-full z-0">
        <video
          ref={videoRef}
          className="absolute w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster="/placeholder.svg?height=1080&width=1920" // Add a poster for immediate display
        >
          <source src="https://websites.godaddy.com/categories/v4/videos/raw/video/uA41GmyyG8IMaxXdb" type="video/mp4" />
        </video>
        
        {/* Fallback background until video loads */}
        {!videoLoaded && (
          <div className="absolute inset-0 bg-slate-950"></div>
        )}
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/70 via-slate-950/60 to-slate-950 z-10"></div>

      {/* Stars background - reduced opacity with video background */}
      <div className="absolute inset-0 bg-[url('/placeholder.svg?height=2000&width=2000')] bg-repeat opacity-20 z-[1]"></div>

      {/* Static mountains */}
      <div className="absolute bottom-0 left-0 right-0 h-[60vh] z-[3]">
        <div className="absolute inset-0 bg-slate-900 opacity-50"></div>
        <div className="w-full h-full bg-[url('/placeholder.svg?height=600&width=2000')] bg-cover bg-bottom"></div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-[50vh] z-[2]">
        <div className="absolute inset-0 bg-slate-800 opacity-40"></div>
        <div className="w-full h-full bg-[url('/placeholder.svg?height=500&width=2000')] bg-cover bg-bottom"></div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-[40vh] z-[1]">
        <div className="absolute inset-0 bg-slate-700 opacity-30"></div>
        <div className="w-full h-full bg-[url('/placeholder.svg?height=400&width=2000')] bg-cover bg-bottom"></div>
      </div>

      {/* Static particles */}
      <StaticParticleEffect />
    </div>
  )
}

function StaticParticleEffect() {
  return (
    <div className="absolute inset-0 z-0">
      {Array.from({ length: 50 }).map((_, index) => {
        const size = Math.floor(Math.random() * 4) + 2;
        const left = `${Math.random() * 100}%`;
        const top = `${Math.random() * 100}%`;
        const opacity = Math.random() * 0.5 + 0.2;
        
        return (
          <div 
            key={index}
            className="absolute rounded-full bg-cyan-400"
            style={{
              width: `${size}px`,
              height: `${size}px`,
              left,
              top,
              opacity
            }}
          />
        );
      })}
    </div>
  );
}

