import { motion } from 'motion/react';
import { MessageCircle, ArrowDown, MapPin, Clock, Star, Sparkles, ShieldCheck, MousePointer2 } from 'lucide-react';
import { BUSINESS_INFO, createWhatsAppUrl } from '../types';
import { TubesBackground } from './TubesBackground';
import { LuxuryButton } from './LuxuryButton';

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center bg-[#08080A] overflow-hidden text-[#E4E2DD] pt-28 pb-16"
    >
      {/* 3D Interactive WebGL Tubes Canvas Background */}
      <div className="absolute inset-0 z-0">
        <TubesBackground 
          enableClickInteraction={true}
          tubeColors={["#F5E6CA", "#D4AF37", "#C5A059"]}
          lightColors={["#FFF6E5", "#F5E6CA", "#D4AF37", "#1A1612"]}
        />
        {/* Subtle vignette overlay over canvas to keep typography ultra-legible */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#08080A] via-[#08080A]/60 to-transparent pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-[#08080A]/50 to-[#08080A] pointer-events-none" />
      </div>

      {/* Floating 3D Accent Badges (Left & Right) */}
      <motion.div
        animate={{ y: [0, -12, 0], rotate: [0, 2, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
        className="hidden lg:flex absolute left-8 top-1/3 z-20 bg-[#121216]/90 backdrop-blur-md p-4 rounded-sm border border-[#D4AF37]/30 shadow-[0_10px_30px_rgba(0,0,0,0.8)] flex-col gap-2 max-w-[210px]"
        style={{ perspective: 1000, transformStyle: 'preserve-3d' }}
      >
        <div className="flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-[#D4AF37]" />
          <span className="text-[10px] uppercase tracking-[0.25em] text-[#D4AF37] font-bold">
            HAUTE UNISEX CARE
          </span>
        </div>
        <p className="text-[11px] text-[#E4E2DD]/90 font-light leading-snug">
          Bespoke styling & spa treatments tailored for you.
        </p>
      </motion.div>

      <motion.div
        animate={{ y: [0, 12, 0], rotate: [0, -2, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        className="hidden lg:flex absolute right-8 bottom-1/3 z-20 bg-[#121216]/90 backdrop-blur-md p-4 rounded-sm border border-[#D4AF37]/30 shadow-[0_10px_30px_rgba(0,0,0,0.8)] flex-col gap-2 max-w-[220px]"
        style={{ perspective: 1000, transformStyle: 'preserve-3d' }}
      >
        <div className="flex items-center gap-2">
          <ShieldCheck className="w-4 h-4 text-[#D4AF37]" />
          <span className="text-[10px] uppercase tracking-[0.25em] text-[#D4AF37] font-bold">
            PASHAN, PUNE
          </span>
        </div>
        <p className="text-[11px] text-[#E4E2DD]/90 font-light leading-snug">
          4.8 / 5 Rated Luxury Sanctuary on Baner - Pashan Link Road.
        </p>
      </motion.div>

      {/* Hero Core Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center pointer-events-auto">
        
        {/* Eyebrow badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full bg-[#121216]/90 border border-[#D4AF37]/35 backdrop-blur-md mb-8 shadow-[0_4px_20px_rgba(212,175,55,0.15)]"
        >
          <span className="w-2 h-2 rounded-full bg-[#D4AF37] animate-pulse" />
          <span className="text-[11px] sm:text-xs tracking-[0.3em] text-[#F5E6CA] uppercase font-bold">
            {BUSINESS_INFO.wordmarkName} • {BUSINESS_INFO.wordmarkTagline}
          </span>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="font-serif-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-normal tracking-tight leading-[1.05] max-w-4xl text-[#FFFFFF]"
        >
          YOUR STYLE.<br />
          <span className="italic font-light text-gold-gradient">YOUR SPACE.</span>
        </motion.h1>

        {/* Supporting Line & Paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.35 }}
          className="mt-6 text-base sm:text-lg md:text-xl text-[#E4E2DD]/90 max-w-2xl font-light leading-relaxed"
        >
          An elevated unisex salon sanctuary in Pashan, Pune. Dedicated to individual care, personal style, and total well-being.
        </motion.p>

        {/* 3D Tubes Cursor Prompt */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="mt-4 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#121216]/80 border border-[#D4AF37]/25 text-[10px] uppercase tracking-[0.2em] text-[#F5E6CA] backdrop-blur-md shadow-sm"
        >
          <MousePointer2 className="w-3 h-3 text-[#D4AF37] animate-pulse" />
          <span>Move cursor to interact with 3D gold tubes • Click to randomize glow</span>
        </motion.div>

        {/* Location & Rating quick floating pill tags */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-3 sm:gap-4 text-xs text-[#E4E2DD]"
        >
          <span className="flex items-center gap-2 bg-[#121216]/90 backdrop-blur-md px-4 py-2 rounded-full border border-[#D4AF37]/25 shadow-sm">
            <MapPin className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span className="text-[#E4E2DD] font-medium">Pashan, Pune</span>
          </span>

          <span className="flex items-center gap-2 bg-[#121216]/90 backdrop-blur-md px-4 py-2 rounded-full border border-[#D4AF37]/25 shadow-sm">
            <Clock className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span className="text-[#E4E2DD] font-medium">Open Daily: 8:00 AM – 10:30 PM</span>
          </span>

          <span className="flex items-center gap-2 bg-[#121216]/90 backdrop-blur-md px-4 py-2 rounded-full border border-[#D4AF37]/30 text-[#E4E2DD] shadow-sm">
            <Star className="w-3.5 h-3.5 fill-[#D4AF37] text-[#D4AF37]" />
            <span className="font-bold text-[#FFFFFF]">4.8 / 5</span>
            <span className="text-[10px] text-[#F5E6CA]">(35 Public Reviews)</span>
          </span>
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.55 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-5 w-full sm:w-auto"
        >
          <LuxuryButton
            href={createWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            variant="gold"
            size="lg"
            icon={<MessageCircle className="w-4 h-4 text-[#08080A]" />}
            className="w-full sm:w-auto"
          >
            Book Appointment
          </LuxuryButton>

          <LuxuryButton
            href="#services"
            variant="outline"
            size="lg"
            className="w-full sm:w-auto"
          >
            Explore Services
          </LuxuryButton>
        </motion.div>
      </div>

      {/* Down arrow scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-[#F5E6CA]/60 hover:text-[#FFFFFF] transition-colors pointer-events-auto"
      >
        <a href="#intro" className="flex flex-col items-center gap-1 group" aria-label="Scroll down">
          <span className="text-[10px] tracking-[0.25em] uppercase font-light text-[#D4AF37] group-hover:text-[#F5E6CA] transition-colors">
            Discover
          </span>
          <ArrowDown className="w-4 h-4 animate-bounce text-[#D4AF37]" />
        </a>
      </motion.div>

      {/* Subtle fine border bottom with gold sheen */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/40 to-transparent z-10" />
    </section>
  );
}


