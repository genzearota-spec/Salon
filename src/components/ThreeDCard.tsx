import React, { useState, useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';

interface ThreeDCardProps {
  children: React.ReactNode;
  className?: string;
  depth?: number;
  glowColor?: string;
  key?: React.Key;
}

export function ThreeDCard({
  children,
  className = '',
  depth = 20,
  glowColor = 'rgba(183, 154, 103, 0.25)',
}: ThreeDCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  // Raw mouse coordinates relative to card center (-0.5 to 0.5)
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Smooth springs for fluid 3D movement
  const mouseXSpring = useSpring(x, { stiffness: 180, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 180, damping: 20 });

  // Map to rotations
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], [depth, -depth]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], [-depth, depth]);

  // Specular sheen light source position
  const sheenX = useTransform(mouseXSpring, [-0.5, 0.5], ['0%', '100%']);
  const sheenY = useTransform(mouseYSpring, [-0.5, 0.5], ['0%', '100%']);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        perspective: 1200,
        transformStyle: 'preserve-3d',
      }}
      className={`relative group ${className}`}
    >
      <motion.div
        style={{
          rotateX: isHovered ? rotateX : 0,
          rotateY: isHovered ? rotateY : 0,
          transformStyle: 'preserve-3d',
        }}
        transition={{ type: 'spring', stiffness: 200, damping: 25 }}
        className="w-full h-full relative transition-shadow duration-500 rounded-sm"
      >
        {/* Dynamic 3D ambient aura glow behind card */}
        <div
          className="absolute -inset-1 rounded-sm blur-xl transition-opacity duration-500 pointer-events-none opacity-0 group-hover:opacity-100"
          style={{
            background: `radial-gradient(circle at 50% 50%, ${glowColor}, transparent 70%)`,
          }}
        />

        {/* Outer metallic border frame with 3D shadow */}
        <div className="relative w-full h-full rounded-sm border border-[#B79A67]/20 group-hover:border-[#B79A67]/70 transition-colors duration-500 bg-[#171717] shadow-[0_10px_30px_rgba(0,0,0,0.5)] group-hover:shadow-[0_25px_60px_rgba(183,154,103,0.18)] overflow-hidden">
          
          {/* Light Sheen layer following mouse */}
          {isHovered && (
            <motion.div
              className="absolute inset-0 pointer-events-none z-20 transition-opacity duration-300"
              style={{
                background: `radial-gradient(circle at ${sheenX} ${sheenY}, rgba(255, 255, 255, 0.12) 0%, transparent 60%)`,
              }}
            />
          )}

          {/* Card Child Content with depth */}
          <div style={{ transform: 'translateZ(30px)' }} className="w-full h-full">
            {children}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
