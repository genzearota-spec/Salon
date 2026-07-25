import React from 'react';

interface LuxuryButtonProps {
  children: React.ReactNode;
  variant?: 'gold' | 'outline' | 'black' | 'subtle';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
  icon?: React.ReactNode;
  target?: string;
  rel?: string;
  disabled?: boolean;
}

export function LuxuryButton({
  children,
  variant = 'gold',
  size = 'md',
  href,
  onClick,
  type = 'button',
  className = '',
  icon,
  target,
  rel,
  disabled = false,
}: LuxuryButtonProps) {
  const sizeClasses = {
    sm: 'px-4 py-2.5 text-[10px] tracking-[0.2em]',
    md: 'px-6 py-3.5 text-[11px] tracking-[0.22em]',
    lg: 'px-8 py-4 text-xs tracking-[0.25em]',
  };

  const baseClasses =
    'relative inline-flex items-center justify-center font-bold uppercase transition-all duration-500 rounded-sm overflow-hidden group select-none';

  let variantClasses = '';

  if (variant === 'gold') {
    variantClasses =
      'bg-gradient-to-r from-[#F5E6CA] via-[#D4AF37] to-[#C5A059] text-[#08080A] shadow-[0_4px_25px_rgba(212,175,55,0.28)] hover:shadow-[0_8px_35px_rgba(212,175,55,0.48)] hover:scale-[1.02] active:scale-[0.98]';
  } else if (variant === 'outline') {
    variantClasses =
      'bg-[#08080A]/80 text-[#F5E6CA] border border-[#D4AF37]/40 hover:border-[#F5E6CA] hover:bg-[#D4AF37]/15 hover:text-[#FFFFFF] shadow-[0_4px_20px_rgba(0,0,0,0.5)] hover:shadow-[0_0_25px_rgba(212,175,55,0.3)] hover:scale-[1.01] active:scale-[0.98] backdrop-blur-md';
  } else if (variant === 'black') {
    variantClasses =
      'bg-[#121216] text-[#F5E6CA] border border-[#D4AF37]/30 hover:border-[#D4AF37] hover:bg-[#1A1A22] hover:text-[#FFFFFF] shadow-[0_10px_30px_rgba(0,0,0,0.8)] hover:shadow-[0_0_20px_rgba(212,175,55,0.25)] hover:scale-[1.01] active:scale-[0.98]';
  } else if (variant === 'subtle') {
    variantClasses =
      'bg-transparent text-[#F5E6CA] hover:text-[#FFFFFF] hover:scale-[1.02] active:scale-[0.98]';
  }

  const content = (
    <>
      {/* Corner Brackets Accents for luxury look (except subtle variant) */}
      {variant !== 'subtle' && (
        <>
          <span className="absolute top-0 left-0 w-1.5 h-1.5 border-t border-l border-[#D4AF37] opacity-60 group-hover:opacity-100 transition-opacity" />
          <span className="absolute bottom-0 right-0 w-1.5 h-1.5 border-b border-r border-[#D4AF37] opacity-60 group-hover:opacity-100 transition-opacity" />
        </>
      )}

      {/* Shimmer Light Beam Effect */}
      <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out pointer-events-none" />

      {/* Button Content */}
      <span className="relative z-10 flex items-center gap-2">
        {icon && <span className="shrink-0 transition-transform duration-300 group-hover:scale-110">{icon}</span>}
        <span>{children}</span>
      </span>

      {/* Animated Underline for subtle variant */}
      {variant === 'subtle' && (
        <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#D4AF37] group-hover:w-full transition-all duration-300" />
      )}
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        target={target}
        rel={rel}
        className={`${baseClasses} ${sizeClasses[size]} ${variantClasses} ${className}`}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseClasses} ${sizeClasses[size]} ${variantClasses} ${className}`}
    >
      {content}
    </button>
  );
}
