"use client";

import { useEffect, useRef, useState } from "react";

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [hasTouched, setHasTouched] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener("resize", checkMobile);
    
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Autoplay on larger screens
    if (!isMobile) {
      video.play().catch(() => {
        // Handle autoplay restrictions
      });
    }
  }, [isMobile]);

  const handleTouchStart = () => {
    if (isMobile && !hasTouched && videoRef.current) {
      videoRef.current.play();
      setHasTouched(true);
    }
  };

  return (
    <section 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      onTouchStart={handleTouchStart}
    >
      {/* Video Background */}
      <video
        ref={videoRef}
        autoPlay={!isMobile}
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/assets/video.mp4" type="video/mp4" />
      </video>
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/70"></div>
      
      {/* Content */}
      <div className="relative z-10 w-full flex items-center justify-center min-h-screen pt-24">
        <div className="max-w-4xl px-6 flex flex-col items-center justify-center text-center">
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-8 leading-[1.1] tracking-tight">
            Protect Your Investment
          </h1>
          <p className="text-2xl md:text-3xl lg:text-4xl text-white mb-6 font-light">
            Professional Weatherproofing That Lasts
          </p>
          <p className="text-lg md:text-xl text-white/80 leading-relaxed max-w-2xl">
            15+ years of expertise. Premium materials. 10-year warranty on every job.
          </p>
        </div>
      </div>
    </section>
  );
}
