import React, { useEffect, useRef } from "react";
import { ArrowRight } from "lucide-react";

export function FluxHero() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const playVideo = () => {
      if (videoRef.current) {
        videoRef.current.play().catch(() => {});
      }
    };
    playVideo();
  }, []);

  return (
    <div className="relative w-full h-[100vh] overflow-hidden flex flex-col font-sans">
      {/* Background Video */}
      <video
        ref={videoRef}
        className="absolute top-0 left-0 w-full h-full object-cover z-0 saturate-[1.3] scale-[1.06] pointer-events-none"
        src="https://zxdefgavgwfxastwmmjm.supabase.co/storage/v1/object/public/assets/flux.mp4"
        autoPlay
        muted
        loop
        playsInline
        onCanPlay={() => {
          if (videoRef.current) videoRef.current.play().catch(() => {});
        }}
      />

      {/* Scrim */}
      <div
        className="absolute top-0 left-0 w-full h-full z-10 pointer-events-none"
        style={{
          background: `
            radial-gradient(circle at 50% 44%, 
              rgba(255,255,255,0.60) 0%, 
              rgba(255,255,255,0.40) 30%, 
              rgba(255,255,255,0.15) 58%, 
              rgba(255,255,255,0.0) 100%
            ),
            linear-gradient(to bottom, 
              rgba(255,255,255,0.50) 0%, 
              transparent 25%, 
              transparent 75%, 
              rgba(255,255,255,0.60) 100%
            )
          `,
        }}
      >
        {/* Accent bloom */}
        <div
          className="absolute top-1/2 left-1/2 w-[100vw] h-[100vh] -translate-x-1/2 -translate-y-1/2 -z-10 blur-[40px]"
          style={{
            background:
              "radial-gradient(circle at 50% 46%, rgba(181,152,90,0.12) 0%, transparent 62%)",
          }}
        />
      </div>

      {/* Content Wrapper */}
      <div className="relative z-20 flex flex-col w-full h-full px-[clamp(28px,4vw,60px)] pt-[26px] pb-[28px]">
        {/* Navbar */}
        <nav className="flex justify-between items-center w-full">
          <a href="#" className="flex items-center gap-5 py-2 px-1 group">
            {/* Elegant Gold Emblem */}
            <div className="relative flex items-center justify-center w-[46px] h-[46px] rounded-full border border-[#d4af37]/30 bg-gradient-to-br from-[#ffffff] to-[#f9f6ef] shadow-[0_4px_20px_rgba(212,175,55,0.12)] transition-transform duration-700 ease-out group-hover:rotate-[360deg]">
              <div className="absolute inset-[3px] rounded-full border-[0.5px] border-[#d4af37]/40 border-dashed opacity-50"></div>
              <div className="absolute inset-[5px] rounded-full border-[0.5px] border-[#d4af37]/30"></div>
              <span className="font-display text-[24px] text-transparent bg-clip-text bg-gradient-to-b from-[#d4af37] via-[#c29b26] to-[#8a6b1c] font-light ml-[1px]">
                A
              </span>
            </div>
            
            {/* Typographic Identity */}
            <div className="flex flex-col justify-center translate-y-[2px]">
              <span className="font-display text-[28px] text-ink font-light uppercase tracking-[0.2em] leading-[1.1]">
                Apple
              </span>
              <span className="font-sans text-[10px] text-muted font-medium uppercase tracking-[0.45em] leading-none pl-[2px] mt-[1px]">
                Salon
              </span>
            </div>
          </a>

          <div className="hidden md:flex gap-8 absolute left-1/2 -translate-x-1/2">
            <a
              href="#services"
              className="font-medium text-[14px] text-muted hover:text-ink transition-colors"
            >
              Services
            </a>
            <a
              href="#gallery"
              className="font-medium text-[14px] text-muted hover:text-ink transition-colors"
            >
              Gallery
            </a>
            <a
              href="#contact"
              className="font-medium text-[14px] text-muted hover:text-ink transition-colors"
            >
              Contact
            </a>
          </div>

          <a
            href="#book"
            className="bg-ink text-white font-display font-semibold text-[11px] py-[11px] px-[20px] rounded-full hover:-translate-y-[1px] hover:shadow-[0_4px_12px_rgba(23,21,31,0.15)] transition-all"
          >
            Book an appointment
          </a>
        </nav>

        {/* Hero */}
        <main className="flex-1 flex flex-col justify-center items-center text-center">
          <div className="flex items-center gap-3 mb-[30px]">
            <div className="w-[26px] h-[1px] bg-accent"></div>
            <div className="font-mono font-medium text-[12px] uppercase tracking-[0.30em] text-muted">
              UNISEX SALON & BEAUTY PARLOUR
            </div>
            <div className="w-[26px] h-[1px] bg-accent"></div>
          </div>

          <h1 className="font-display font-bold text-[clamp(40px,7vw,80px)] leading-[1.05] tracking-[-0.01em] text-ink mb-[24px] max-w-5xl">
            Experience Spectacular
            <br className="hidden md:block" /> Beauty Services
            <span className="text-accent">.</span>
          </h1>

          <p className="font-normal text-[clamp(16px,1.8vw,19px)] text-muted max-w-[600px] mb-[40px] leading-relaxed">
            Transform your look with expert hairstyling, skincare, beauty
            treatments, and professional grooming. Visit Apple Salon [Unisex]
            Fatimanagar and experience premium salon services in a relaxing
            environment.
          </p>
        </main>
      </div>
    </div>
  );
}
