import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export function EntranceAnimation({ children }: { children: React.ReactNode }) {
  // Use a new session storage key so the user sees it immediately upon this update.
  const [isFirstVisit] = useState(() => {
    try {
      return !sessionStorage.getItem('hasSeenAppleEntrance_v7');
    } catch (e) {
      // In case sessionStorage is blocked by iframe policies
      return true;
    }
  });
  
  // Stages of animation:
  // 0: Doors closed
  // 1: Doors opening
  // 2: Text "Welcome to Apple Salon" fading in
  // 3: Text fading out, website fading in
  const [stage, setStage] = useState(0);

  useEffect(() => {
    if (isFirstVisit) {
      try {
        sessionStorage.setItem('hasSeenAppleEntrance_v7', 'true');
      } catch (e) {}
      
      // Wait half a second before opening doors
      const t1 = setTimeout(() => setStage(1), 500);

      // Show text after doors are mostly open
      const t2 = setTimeout(() => setStage(2), 1200);

      // Hide text and show website
      const t3 = setTimeout(() => setStage(3), 3500);

      return () => {
        clearTimeout(t1);
        clearTimeout(t2);
        clearTimeout(t3);
      };
    }
  }, [isFirstVisit]);

  if (!isFirstVisit) {
    return <>{children}</>;
  }

  return (
    <>
      {/* Solid black background hiding the website until stage 3 */}
      <div 
        className="fixed inset-0 z-[9998] bg-[#050505]"
        style={{ 
          opacity: stage === 3 ? 0 : 1, 
          transition: 'opacity 1.5s ease-in-out', 
          pointerEvents: stage === 3 ? 'none' : 'auto' 
        }}
      ></div>

      <motion.div 
        initial={{ opacity: 0, scale: 1.1, filter: 'blur(10px)' }}
        animate={stage === 3 ? { opacity: 1, scale: 1, filter: 'blur(0px)' } : { opacity: 0, scale: 1.1, filter: 'blur(10px)' }}
        transition={{ duration: 1.5, ease: [0.7, 0, 0.3, 1] }}
        className="origin-center min-h-screen"
      >
        {children}
      </motion.div>

      {/* Welcome Text Animation */}
      <AnimatePresence>
        {(stage === 1 || stage === 2) && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ 
              opacity: stage === 2 ? 1 : 0, 
              scale: stage === 2 ? 1 : 0.95,
              y: stage === 2 ? 0 : 10
            }}
            exit={{ opacity: 0, scale: 1.05, filter: 'blur(10px)' }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="fixed inset-0 z-[9999] flex flex-col items-center justify-center pointer-events-none"
          >
            <div className="absolute w-[60vw] h-[60vh] bg-[#d4af37]/15 blur-[120px] rounded-full"></div>
            <h1 className="font-display font-bold text-4xl md:text-6xl lg:text-7xl text-center tracking-wide text-transparent bg-clip-text bg-gradient-to-b from-[#ffdf00] via-[#d4af37] to-[#aa8323] drop-shadow-[0_0_20px_rgba(212,175,55,0.6)] px-4 pb-2" style={{ WebkitTextStroke: '1px rgba(255,223,0,0.2)' }}>
              Welcome to Apple Salon
            </h1>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {stage < 1 && (
          <motion.div 
            className="fixed inset-0 z-[10000] flex pointer-events-none perspective-[1200px]"
          >
            {/* Left Door */}
            <motion.div 
              initial={{ x: 0, rotateY: 0 }}
              exit={{ x: '-100%', rotateY: 10 }}
              transition={{ duration: 1.8, ease: [0.6, 0.05, 0.1, 1] }}
              className="relative w-1/2 h-full bg-[#0a0a0a] border-r-[3px] border-[#d4af37]/90 shadow-[30px_0_60px_rgba(0,0,0,1)] flex justify-end items-center overflow-hidden z-10 origin-left"
            >
               {/* Door Base Texture */}
               <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#1a1a1a] to-[#050505]"></div>
               
               {/* Elegant Door Panels */}
               <div className="absolute inset-y-12 md:inset-y-24 left-6 md:left-12 right-6 md:right-16 flex flex-col gap-8 md:gap-12">
                 <div className="w-full flex-1 border border-[#d4af37]/40 shadow-[inset_0_0_30px_rgba(0,0,0,0.8),0_0_15px_rgba(212,175,55,0.1)] rounded-sm relative">
                   <div className="absolute inset-2 border border-[#d4af37]/20"></div>
                 </div>
                 <div className="w-full flex-[1.5] border border-[#d4af37]/40 shadow-[inset_0_0_30px_rgba(0,0,0,0.8),0_0_15px_rgba(212,175,55,0.1)] rounded-sm relative">
                   <div className="absolute inset-2 border border-[#d4af37]/20"></div>
                 </div>
               </div>

               {/* Glossy reflection */}
               <div className="absolute inset-0 bg-gradient-to-tr from-white/5 via-transparent to-white/10 mix-blend-overlay"></div>
               
               {/* Vertical Gold Trim */}
               <div className="absolute inset-y-0 right-0 w-[6px] bg-gradient-to-l from-[#ffdf00]/90 to-[#aa8323]/40 shadow-[-2px_0_15px_rgba(212,175,55,0.6)]"></div>
               
               {/* Luxury Handle Mounts */}
               <div className="absolute right-4 sm:right-10 flex flex-col justify-between h-48 md:h-72 z-20">
                 <div className="w-6 h-4 bg-gradient-to-r from-[#8a6b1c] to-[#d4af37] shadow-[0_2px_4px_rgba(0,0,0,0.8)] border border-[#ffdf00]/30 rounded-l-sm translate-x-2"></div>
                 <div className="w-6 h-4 bg-gradient-to-r from-[#8a6b1c] to-[#d4af37] shadow-[0_2px_4px_rgba(0,0,0,0.8)] border border-[#ffdf00]/30 rounded-l-sm translate-x-2"></div>
               </div>

               {/* Premium Handle */}
               <div className="w-4 h-56 md:h-80 bg-gradient-to-b from-[#b58f26] via-[#ffdf00] to-[#b58f26] rounded-full mr-4 sm:mr-10 shadow-[0_10px_40px_rgba(212,175,55,0.7),inset_2px_2px_4px_rgba(255,255,255,0.9),inset_-2px_-2px_4px_rgba(0,0,0,0.4)] z-30 border border-[#fff2a8]/80 relative flex items-center justify-center">
                 <div className="absolute top-0 bottom-0 left-[2px] w-[1px] bg-white/60 rounded-full"></div>
                 {/* Diamond cut detail in center of handle */}
                 <div className="w-5 h-12 bg-gradient-to-b from-[#ffe75e] to-[#cfa92d] shadow-md border border-white/40 rounded-sm"></div>
               </div>
            </motion.div>
            
            {/* Right Door */}
            <motion.div 
              initial={{ x: 0, rotateY: 0 }}
              exit={{ x: '100%', rotateY: -10 }}
              transition={{ duration: 1.8, ease: [0.6, 0.05, 0.1, 1] }}
              className="relative w-1/2 h-full bg-[#0a0a0a] border-l-[3px] border-[#d4af37]/90 shadow-[-30px_0_60px_rgba(0,0,0,1)] flex justify-start items-center overflow-hidden z-10 origin-right"
            >
               {/* Door Base Texture */}
               <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#1a1a1a] to-[#050505]"></div>
               
               {/* Elegant Door Panels */}
               <div className="absolute inset-y-12 md:inset-y-24 left-6 md:left-16 right-6 md:right-12 flex flex-col gap-8 md:gap-12">
                 <div className="w-full flex-1 border border-[#d4af37]/40 shadow-[inset_0_0_30px_rgba(0,0,0,0.8),0_0_15px_rgba(212,175,55,0.1)] rounded-sm relative">
                   <div className="absolute inset-2 border border-[#d4af37]/20"></div>
                 </div>
                 <div className="w-full flex-[1.5] border border-[#d4af37]/40 shadow-[inset_0_0_30px_rgba(0,0,0,0.8),0_0_15px_rgba(212,175,55,0.1)] rounded-sm relative">
                   <div className="absolute inset-2 border border-[#d4af37]/20"></div>
                 </div>
               </div>

               {/* Glossy reflection */}
               <div className="absolute inset-0 bg-gradient-to-bl from-white/5 via-transparent to-white/10 mix-blend-overlay"></div>

               {/* Vertical Gold Trim */}
               <div className="absolute inset-y-0 left-0 w-[6px] bg-gradient-to-r from-[#ffdf00]/90 to-[#aa8323]/40 shadow-[2px_0_15px_rgba(212,175,55,0.6)]"></div>
               
               {/* Luxury Handle Mounts */}
               <div className="absolute left-4 sm:left-10 flex flex-col justify-between h-48 md:h-72 z-20">
                 <div className="w-6 h-4 bg-gradient-to-l from-[#8a6b1c] to-[#d4af37] shadow-[0_2px_4px_rgba(0,0,0,0.8)] border border-[#ffdf00]/30 rounded-r-sm -translate-x-2"></div>
                 <div className="w-6 h-4 bg-gradient-to-l from-[#8a6b1c] to-[#d4af37] shadow-[0_2px_4px_rgba(0,0,0,0.8)] border border-[#ffdf00]/30 rounded-r-sm -translate-x-2"></div>
               </div>

               {/* Premium Handle */}
               <div className="w-4 h-56 md:h-80 bg-gradient-to-b from-[#b58f26] via-[#ffdf00] to-[#b58f26] rounded-full ml-4 sm:ml-10 shadow-[0_10px_40px_rgba(212,175,55,0.7),inset_2px_2px_4px_rgba(255,255,255,0.9),inset_-2px_-2px_4px_rgba(0,0,0,0.4)] z-30 border border-[#fff2a8]/80 relative flex items-center justify-center">
                 <div className="absolute top-0 bottom-0 right-[2px] w-[1px] bg-white/60 rounded-full"></div>
                 {/* Diamond cut detail in center of handle */}
                 <div className="w-5 h-12 bg-gradient-to-b from-[#ffe75e] to-[#cfa92d] shadow-md border border-white/40 rounded-sm"></div>
               </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
