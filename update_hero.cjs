const fs = require('fs');
const file = 'src/components/FluxHero.tsx';
let content = fs.readFileSync(file, 'utf8');

content = content.replace(
  "bg-gradient-to-br from-[#a99bff] to-accent shadow-[0_4px_12px_rgba(124,108,255,0.3)]",
  "bg-gradient-to-br from-[#d4bc8b] to-accent shadow-[0_4px_12px_rgba(181,152,90,0.3)]"
);

content = content.replace(
  "background: 'radial-gradient(circle at 50% 46%, rgba(124,108,255,0.10) 0%, transparent 62%)'",
  "background: 'radial-gradient(circle at 50% 46%, rgba(181,152,90,0.12) 0%, transparent 62%)'"
);

content = content.replace(
  "text-[clamp(50px,8vw,110px)] leading-[0.92] tracking-[-0.045em]",
  "text-[clamp(50px,8vw,100px)] leading-[1.05] tracking-[-0.01em]"
); // Tweak heading for serif

fs.writeFileSync(file, content);
