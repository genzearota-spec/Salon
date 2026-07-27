import React, { useState } from 'react';
import { Sparkles, Link as LinkIcon, Copy, Check } from 'lucide-react';

export function Generator() {
  const [productName, setProductName] = useState('');
  const [price, setPrice] = useState('');
  const [generatedLink, setGeneratedLink] = useState('');
  const [copied, setCopied] = useState(false);

  const handleGenerate = (e: React.FormEvent) => {
    e.preventDefault();
    const baseUrl = window.location.origin;
    const params = new URLSearchParams({
      product: productName,
      price: price
    });
    setGeneratedLink(`${baseUrl}/order?${params.toString()}`);
    setCopied(false);
  };

  const handleCopy = () => {
    if (generatedLink) {
      navigator.clipboard.writeText(generatedLink);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="min-h-screen bg-[#FDFBFB] flex items-center justify-center p-6 font-sans text-[#4A4A4A]">
      <div className="w-full max-w-md bg-white/60 backdrop-blur-md border border-white/20 rounded-3xl p-8 sm:p-10 shadow-xl relative overflow-hidden">
        {/* Subtle decorative glow */}
        <div className="absolute -top-20 -right-20 w-40 h-40 bg-[#E8B4B8]/30 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-[#E8B4B8]/20 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10">
          <div className="text-center mb-10">
            <h1 className="font-serif text-3xl sm:text-4xl font-bold mb-3 tracking-tight text-[#1A1A1A]">
              Link Generator
            </h1>
            <p className="text-sm text-[#4A4A4A]/70 font-bold tracking-wide">
              Create a bespoke order link for your clients.
            </p>
          </div>

          <form onSubmit={handleGenerate} className="space-y-8">
            <div className="space-y-2">
              <label htmlFor="productName" className="block text-xs uppercase tracking-widest font-bold text-[#4A4A4A]">
                Service / Product Name
              </label>
              <input
                id="productName"
                type="text"
                value={productName}
                onChange={(e) => setProductName(e.target.value)}
                required
                className="w-full bg-transparent border-0 border-b border-[#E8B4B8]/50 py-3 px-1 text-[#1A1A1A] placeholder:text-[#4A4A4A]/30 focus:ring-0 focus:border-[#B8860B] transition-colors outline-none font-bold"
                placeholder="e.g. Keratin Treatment"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="price" className="block text-xs uppercase tracking-widest font-bold text-[#4A4A4A]">
                Price Amount
              </label>
              <input
                id="price"
                type="text"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                required
                className="w-full bg-transparent border-0 border-b border-[#E8B4B8]/50 py-3 px-1 text-[#1A1A1A] placeholder:text-[#4A4A4A]/30 focus:ring-0 focus:border-[#B8860B] transition-colors outline-none font-bold"
                placeholder="e.g. $150.00"
              />
            </div>

            <button
              type="submit"
              className="w-full py-4 px-6 mt-4 rounded-xl font-bold tracking-wide text-white bg-gradient-to-r from-[#F4C2C2] to-[#E8B4B8] hover:shadow-lg hover:shadow-[#E8B4B8]/30 hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2 group"
            >
              <Sparkles className="w-4 h-4 text-white group-hover:scale-110 transition-transform" />
              <span>Generate Link</span>
            </button>
          </form>

          {generatedLink && (
            <div className="mt-10 p-5 rounded-2xl bg-white/40 border border-[#B8860B]/20 backdrop-blur-sm animate-in fade-in slide-in-from-bottom-4 duration-500">
              <p className="text-[10px] uppercase tracking-widest font-bold text-[#B8860B] mb-2">
                Generated Link
              </p>
              <div className="flex items-center gap-3">
                <div className="flex-1 truncate text-sm text-[#4A4A4A] bg-white/50 py-2 px-3 rounded-lg border border-white/50">
                  {generatedLink}
                </div>
                <button
                  onClick={handleCopy}
                  className="shrink-0 p-2.5 rounded-lg bg-white/80 hover:bg-white text-[#B8860B] shadow-sm hover:shadow transition-all border border-[#B8860B]/10"
                  title="Copy link"
                >
                  {copied ? <Check className="w-4 h-4 text-[#10B981]" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
