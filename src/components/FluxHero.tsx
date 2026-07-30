import React, { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';

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
        className="absolute top-0 left-0 w-full h-full object-cover z-0 saturate-[1.06] scale-[1.06] blur-[2px] pointer-events-none"
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
              rgba(255,255,255,0.94) 0%, 
              rgba(255,255,255,0.80) 30%, 
              rgba(255,255,255,0.46) 58%, 
              rgba(255,255,255,0.20) 100%
            ),
            linear-gradient(to bottom, 
              rgba(255,255,255,0.85) 0%, 
              transparent 18%, 
              transparent 82%, 
              rgba(255,255,255,0.90) 100%
            )
          `
        }}
      >
        {/* Accent bloom */}
        <div 
          className="absolute top-1/2 left-1/2 w-[100vw] h-[100vh] -translate-x-1/2 -translate-y-1/2 -z-10 blur-[40px]"
          style={{ background: 'radial-gradient(circle at 50% 46%, rgba(181,152,90,0.12) 0%, transparent 62%)' }}
        />
      </div>

      {/* Content Wrapper */}
      <div className="relative z-20 flex flex-col w-full h-full px-[clamp(28px,4vw,60px)] pt-[26px] pb-[28px]">
        
        {/* Navbar */}
        <nav className="flex justify-between items-center w-full">
          <div className="flex items-center gap-3">
            <div className="w-[15px] h-[15px] rounded-[4px] bg-gradient-to-br from-[#d4bc8b] to-accent shadow-[0_4px_12px_rgba(181,152,90,0.3)] rise" style={{ animationDelay: '0ms' }}></div>
            <a href="#" className="font-display font-extrabold text-[21px] tracking-[-0.01em] text-ink rise" style={{ animationDelay: '0ms' }}>HAIRPORT</a>
          </div>
          
          <div className="hidden md:flex gap-8 absolute left-1/2 -translate-x-1/2">
            <a href="#services" className="font-medium text-[14px] text-muted hover:text-ink transition-colors rise" style={{ animationDelay: '70ms' }}>Services</a>
            <a href="#gallery" className="font-medium text-[14px] text-muted hover:text-ink transition-colors rise" style={{ animationDelay: '120ms' }}>Gallery</a>
            <a href="#contact" className="font-medium text-[14px] text-muted hover:text-ink transition-colors rise" style={{ animationDelay: '170ms' }}>Contact</a>
          </div>
          
          <a href="#book" className="bg-ink text-white font-display font-semibold text-[11px] py-[11px] px-[20px] rounded-full hover:-translate-y-[1px] hover:shadow-[0_4px_12px_rgba(23,21,31,0.15)] transition-all rise" style={{ animationDelay: '220ms' }}>Book an appointment</a>
        </nav>

        {/* Hero */}
        <main className="flex-1 flex flex-col justify-center items-center text-center">
          <div className="flex items-center gap-3 mb-[30px] rise" style={{ animationDelay: '300ms' }}>
            <div className="w-[26px] h-[1px] bg-accent"></div>
            <div className="font-mono font-medium text-[12px] uppercase tracking-[0.30em] text-muted">LUXURY SALON & SPA</div>
            <div className="w-[26px] h-[1px] bg-accent"></div>
          </div>
          
          <h1 className="font-display font-bold text-[clamp(50px,8vw,100px)] leading-[1.05] tracking-[-0.01em] text-ink mb-[24px] rise" style={{ animationDelay: '380ms' }}>
            Elevate your style<span className="text-accent">.</span>
          </h1>
          
          <p className="font-normal text-[clamp(16px,1.8vw,19px)] text-muted max-w-[480px] mb-[40px] leading-relaxed rise" style={{ animationDelay: '490ms' }}>
            A premium salon in Kondhwa, Pune for those who refuse to compromise on their beauty and wellness.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center gap-[20px] sm:gap-[26px] rise" style={{ animationDelay: '600ms' }}>
            <a href="#services" className="group flex items-center gap-2 bg-ink text-white font-display font-semibold text-[15px] py-[15px] px-[30px] rounded-full shadow-[0_8px_24px_rgba(23,21,31,0.12),0_2px_8px_rgba(23,21,31,0.08)] hover:-translate-y-[2px] hover:shadow-[0_12px_32px_rgba(23,21,31,0.16),0_4px_12px_rgba(23,21,31,0.1)] transition-all duration-200">
              Explore services
              <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
            </a>
            <a href="#contact" className="group flex items-center gap-1.5 font-display font-semibold text-[15px] text-ink hover:text-accent transition-colors">
              Get in touch
              <span className="inline-block w-[6px] h-[6px] border-r-2 border-b-2 border-accent -rotate-45 -translate-y-[1px] ml-[2px] transition-transform group-hover:translate-x-[2px] group-hover:translate-y-[1px]"></span>
            </a>
          </div>
        </main>

        {/* Footer Meta Row */}
        <div className="flex flex-wrap justify-center items-center gap-[8px] sm:gap-[16px] rise" style={{ animationDelay: '720ms' }}>
          <span className="font-mono font-normal text-[11.5px] uppercase tracking-[0.16em] text-faint">Hair Care</span>
          <div className="w-[4px] h-[4px] rounded-full bg-accent"></div>
          <span className="font-mono font-normal text-[11.5px] uppercase tracking-[0.16em] text-faint">Skin Treatments</span>
          <div className="w-[4px] h-[4px] rounded-full bg-accent"></div>
          <span className="font-mono font-normal text-[11.5px] uppercase tracking-[0.16em] text-faint">Bridal Makeup</span>
        </div>

      </div>
    </div>
  );
}
