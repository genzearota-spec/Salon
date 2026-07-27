import React, { useEffect, useRef, useState } from 'react';

interface TubesBackgroundProps {
  children?: React.ReactNode;
  className?: string;
  enableClickInteraction?: boolean;
  tubeColors?: string[];
  lightColors?: string[];
}

const DEFAULT_TUBE_COLORS = ["#F5E6CA", "#F4C2C2", "#C5A059"];
const DEFAULT_LIGHT_COLORS = ["#FFF6E5", "#F5E6CA", "#F4C2C2", "#1A1612"];

export function TubesBackground({ 
  children, 
  className = '',
  enableClickInteraction = true,
  tubeColors = DEFAULT_TUBE_COLORS,
  lightColors = DEFAULT_LIGHT_COLORS
}: TubesBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [useFallback2D, setUseFallback2D] = useState(false);
  const tubesRef = useRef<any>(null);

  // 2D Ambient Fallback Animation if WebGPU/WebGL fails or device is lost
  useEffect(() => {
    if (!useFallback2D || !canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    let width = (canvas.width = canvas.offsetWidth || window.innerWidth);
    let height = (canvas.height = canvas.offsetHeight || window.innerHeight);

    let mouseX = width / 2;
    let mouseY = height / 2;

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.offsetWidth || window.innerWidth;
      height = canvas.height = canvas.offsetHeight || window.innerHeight;
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);

    // Glowing ambient light particles
    const particles = Array.from({ length: 30 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      radius: Math.random() * 80 + 40,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      color: lightColors[Math.floor(Math.random() * lightColors.length)] || '#E2D4C3',
      alpha: Math.random() * 0.15 + 0.05,
    }));

    let time = 0;
    const render = () => {
      time += 0.01;
      ctx.clearRect(0, 0, width, height);

      // Base background color
      ctx.fillStyle = '#0C0C0E';
      ctx.fillRect(0, 0, width, height);

      // Draw floating ambient glow orbs
      particles.forEach((p) => {
        p.x += p.vx + (mouseX - width / 2) * 0.0001;
        p.y += p.vy + (mouseY - height / 2) * 0.0001;

        if (p.x < -100) p.x = width + 100;
        if (p.x > width + 100) p.x = -100;
        if (p.y < -100) p.y = height + 100;
        if (p.y > height + 100) p.y = -100;

        const grad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.radius);
        grad.addColorStop(0, p.color);
        grad.addColorStop(1, 'transparent');

        ctx.globalAlpha = p.alpha;
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fill();
      });

      // Subtle metallic ambient curves
      ctx.globalAlpha = 0.08;
      ctx.strokeStyle = tubeColors[0] || '#E2D4C3';
      ctx.lineWidth = 2;

      for (let i = 0; i < 3; i++) {
        ctx.beginPath();
        const offset = i * 150;
        for (let x = 0; x <= width; x += 30) {
          const y =
            height / 2 +
            Math.sin(x * 0.003 + time + i) * 60 +
            Math.cos(x * 0.001 + time * 0.5) * 40 +
            (mouseY - height / 2) * 0.05 +
            offset -
            150;
          if (x === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.stroke();
      }

      ctx.globalAlpha = 1.0;
      animId = requestAnimationFrame(render);
    };

    setIsLoaded(true);
    render();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [useFallback2D, tubeColors, lightColors]);

  // Try 3D WebGL / WebGPU Tubes setup
  useEffect(() => {
    let mounted = true;
    let cleanup: (() => void) | undefined;

    // Trap WebGPU device loss / WebGL context errors globally during init
    const handleGlobalError = (event: ErrorEvent | PromiseRejectionEvent) => {
      const msg = ('reason' in event ? event.reason?.message : event.message) || '';
      if (
        msg.includes('WebGPU') ||
        msg.includes('Device Lost') ||
        msg.includes('THREE') ||
        msg.includes('WebGL')
      ) {
        if (mounted) {
          setUseFallback2D(true);
        }
      }
    };

    window.addEventListener('error', handleGlobalError as any);
    window.addEventListener('unhandledrejection', handleGlobalError as any);

    const initTubes = async () => {
      if (!canvasRef.current) return;

      const canvas = canvasRef.current;

      const handleContextLost = (e: Event) => {
        e.preventDefault();
        if (mounted) {
          setUseFallback2D(true);
        }
      };

      canvas.addEventListener('webglcontextlost', handleContextLost);
      canvas.addEventListener('webgpucontextlost' as any, handleContextLost);

      try {
        // @ts-ignore
        const module = await import(/* @vite-ignore */ 'https://cdn.jsdelivr.net/npm/threejs-components@0.0.19/build/cursors/tubes1.min.js');
        const TubesCursor = module.default;

        if (!mounted || !canvasRef.current) return;

        const app = TubesCursor(canvasRef.current, {
          tubes: {
            colors: tubeColors,
            lights: {
              intensity: 180,
              colors: lightColors
            }
          }
        });

        tubesRef.current = app;
        setIsLoaded(true);

        const handleResize = () => {
          if (app && app.resize) {
            try {
              app.resize();
            } catch {
              if (mounted) setUseFallback2D(true);
            }
          }
        };

        window.addEventListener('resize', handleResize);

        cleanup = () => {
          window.removeEventListener('resize', handleResize);
          canvas.removeEventListener('webglcontextlost', handleContextLost);
          canvas.removeEventListener('webgpucontextlost' as any, handleContextLost);
          if (app && app.destroy) {
            try {
              app.destroy();
            } catch {
              // Ignore destroy error
            }
          }
        };

      } catch (error) {
        console.warn("3D Tubes context unavailable, using high-performance 2D luxury glow fallback:", error);
        if (mounted) {
          setUseFallback2D(true);
        }
      }
    };

    initTubes();

    return () => {
      mounted = false;
      window.removeEventListener('error', handleGlobalError as any);
      window.removeEventListener('unhandledrejection', handleGlobalError as any);
      if (cleanup) cleanup();
    };
  }, []);

  const handleClick = () => {
    if (!enableClickInteraction) return;

    if (useFallback2D || !tubesRef.current) return;

    const palettes = [
      { tubes: ["#E2D4C3", "#C4B098", "#8A735C"], lights: ["#F4EBE1", "#D1C0AC", "#A38F7A", "#735E4B"] },
      { tubes: ["#D1A7CD", "#9E6B99", "#5A3A57"], lights: ["#F2D5EF", "#C492BE", "#875381", "#522C4E"] },
      { tubes: ["#94A89A", "#5E7A66", "#354A3B"], lights: ["#C2D4C7", "#8AA692", "#506B57", "#2D4233"] },
      { tubes: ["#C9A083", "#9C6E51", "#613D26"], lights: ["#EDD1BD", "#BD9173", "#82583C", "#4C2E19"] },
    ];

    const randomPalette = palettes[Math.floor(Math.random() * palettes.length)];

    try {
      if (tubesRef.current.tubes?.setColors) {
        tubesRef.current.tubes.setColors(randomPalette.tubes);
        tubesRef.current.tubes.setLightsColors(randomPalette.lights);
      }
    } catch (e) {
      console.warn("Could not update tube colors, falling back to 2D ambient rendering:", e);
      setUseFallback2D(true);
    }
  };

  return (
    <div 
      className={`relative w-full h-full min-h-[400px] overflow-hidden bg-[#0C0C0E] ${className}`}
      onClick={handleClick}
    >
      <canvas 
        ref={canvasRef} 
        className={`absolute inset-0 w-full h-full block transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
        style={{ touchAction: 'none' }}
      />
      
      {/* Content Overlay */}
      <div className="relative z-10 w-full h-full pointer-events-none">
        {children}
      </div>
    </div>
  );
}

export default TubesBackground;

