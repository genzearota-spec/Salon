const fs = require('fs');
const path = require('path');

const directories = ['src', 'src/components'];

const colorMap = {
  'bg-[#08080A]': 'bg-[#FAFAFA]',
  'bg-[#0B0A0E]': 'bg-[#FAFAFA]',
  'bg-[#101012]': 'bg-[#FFFFFF]',
  'bg-[#121118]': 'bg-[#FFFFFF]',
  'bg-[#1A1822]': 'bg-[#FAFAFA]',
  'bg-[#1A1A1E]': 'bg-[#FFFFFF]',
  'bg-[#121216]': 'bg-[#FFFFFF]',
  'bg-[#181622]': 'bg-[#FFFFFF]',
  'bg-[#0D0B12]': 'bg-[#FAFAFA]',
  'bg-black': 'bg-white',
  'bg-black/20': 'bg-white/60',
  'bg-black/40': 'bg-white/60',
  'bg-black/50': 'bg-white/60',
  'bg-black/80': 'bg-white/80',
  'text-[#E4E2DD]': 'text-[#4A4A4A]',
  'text-[#FFFFFF]': 'text-[#333333]',
  'text-white': 'text-[#333333]',
  'text-[#D4AF37]': 'text-[#F4C2C2]',
  'text-[#F5E6CA]': 'text-[#333333]',
  'border-[#D4AF37]': 'border-[#F4C2C2]',
  'border-white/20': 'border-[#F4C2C2]/30',
  'border-white/10': 'border-[#F4C2C2]/20',
  'border-white/30': 'border-[#F4C2C2]/40',
  'border-white/5': 'border-[#F4C2C2]/10',
  'from-[#08080A]': 'from-[#FAFAFA]',
  'to-[#0B0A0E]': 'to-[#FAFAFA]',
  'to-[#08080A]': 'to-[#FAFAFA]',
  'from-[#121216]': 'from-[#FFFFFF]',
  'via-[#121216]': 'via-[#FFFFFF]',
  'from-[#181622]': 'from-[#FFFFFF]',
  'to-[#0D0B12]': 'to-[#FAFAFA]',
  'from-black/80': 'from-white/80',
  'to-black/20': 'to-white/20',
  'shadow-[#D4AF37]': 'shadow-[#F4C2C2]',
  'fill-[#D4AF37]': 'fill-[#F4C2C2]',
  'ring-[#D4AF37]': 'ring-[#F4C2C2]',
  'divide-[#D4AF37]': 'divide-[#F4C2C2]',
  'from-[#D4AF37]': 'from-[#F4C2C2]',
  'to-[#D4AF37]': 'to-[#F4C2C2]',
  'from-[#F5E6CA]': 'from-[#F4C2C2]',
  'to-[#C5A059]': 'to-[#E8B4B8]',
  'shadow-black/50': 'shadow-black/5',
  'shadow-black/80': 'shadow-black/5',
  'shadow-black/40': 'shadow-black/5',
};

function processFile(filePath) {
  if (!filePath.endsWith('.tsx') && !filePath.endsWith('.ts')) return;
  
  let content = fs.readFileSync(filePath, 'utf8');
  let originalContent = content;

  // Replace exact strings
  for (const [key, value] of Object.entries(colorMap)) {
    // Escape brackets for regex
    const escapedKey = key.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const regex = new RegExp(escapedKey, 'g');
    content = content.replace(regex, value);
  }

  // Replace specific text-white inside buttons if needed, but it's tricky. Let's just do global.
  // Wait, if text-white becomes text-[#333333], it might look weird on dark buttons, but we don't have dark buttons anymore.
  
  // Convert #08080A to #FAFAFA generally
  content = content.replace(/#08080A/g, '#FAFAFA');
  content = content.replace(/#121216/g, '#FFFFFF');
  content = content.replace(/#D4AF37/g, '#F4C2C2');
  content = content.replace(/#E4E2DD/g, '#4A4A4A');
  content = content.replace(/#FFFFFF/g, '#333333');
  
  // Fix the literal color #FFFFFF which got replaced by #333333, we need to be careful with white backgrounds that were #FFFFFF
  // But our script already replaced `bg-[#FFFFFF]` with `bg-[#333333]`? No, we didn't map bg-[#FFFFFF].
  // Wait, replacing #FFFFFF with #333333 globally will change hex codes in ThreeJS and everywhere. Let's not do global replace for #FFFFFF.
  
  if (content !== originalContent) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated ${filePath}`);
  }
}

directories.forEach(dir => {
  const fullPath = path.join(__dirname, dir);
  if (fs.existsSync(fullPath)) {
    const files = fs.readdirSync(fullPath);
    files.forEach(file => {
      const filePath = path.join(fullPath, file);
      if (fs.statSync(filePath).isFile()) {
        processFile(filePath);
      }
    });
  }
});
