import { useState } from 'react';
import { Star, ThumbsUp, CheckCircle, ExternalLink, MessageSquare, Filter, ShieldCheck } from 'lucide-react';
import { CUSTOMER_REVIEWS, BUSINESS_INFO, CustomerReview } from '../types';
import { ThreeDCard } from './ThreeDCard';
import { LuxuryButton } from './LuxuryButton';

export function ReviewsSection() {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [likedReviews, setLikedReviews] = useState<Record<string, boolean>>({});

  const categories = [
    { id: 'all', label: 'All Reviews' },
    { id: 'hair', label: 'Hair Styling' },
    { id: 'beauty', label: 'Facials & Skin' },
    { id: 'spa', label: 'Spa & Massage' },
    { id: 'grooming', label: 'Beard & Grooming' },
  ];

  const filteredReviews = activeCategory === 'all'
    ? CUSTOMER_REVIEWS
    : CUSTOMER_REVIEWS.filter(rev => rev.serviceCategory === activeCategory);

  const toggleLike = (id: string) => {
    setLikedReviews(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <section id="reviews" className="py-24 bg-[#FAFAFA] text-[#4A4A4A] relative overflow-hidden border-t border-[#F4C2C2]/20">
      
      {/* Ambient background aura */}
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(244,194,194,0.07)_0%,transparent_70%)] pointer-events-none blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(244,194,194,0.05)_0%,transparent_70%)] pointer-events-none blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 pb-8 border-b border-[#F4C2C2]/20 gap-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFFFFF] border border-[#F4C2C2]/30 text-xs font-bold text-[#333333] mb-3">
              <ShieldCheck className="w-4 h-4 text-[#F4C2C2]" />
              <span className="tracking-[0.2em] uppercase">VERIFIED GOOGLE REVIEWS</span>
            </div>
            <h2 className="font-serif-display text-4xl sm:text-5xl md:text-6xl font-bold text-[#333333] tracking-tight">
              CUSTOMER EXPERIENCES
            </h2>
            <p className="text-sm text-[#333333] font-bold mt-2 max-w-xl">
              Authentic feedback from visitors at <strong className="text-[#333333]">Aura Unisex Salon</strong> at Baner - Pashan Link Road, Pashan, Pune.
            </p>
          </div>

          {/* Rating Summary Header Box */}
          <div className="bg-[#FFFFFF] p-6 rounded-sm border border-[#F4C2C2]/30 shadow-xl flex items-center gap-6 shrink-0">
            <div className="text-center border-r border-[#F4C2C2]/20 pr-6">
              <span className="font-serif-display text-4xl sm:text-5xl font-bold text-gold-gradient block">
                {BUSINESS_INFO.rating}
              </span>
              <div className="flex items-center gap-1 mt-1 justify-center">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star key={s} className="w-3.5 h-3.5 fill-[#F4C2C2] text-[#F4C2C2]" />
                ))}
              </div>
              <span className="text-[10px] tracking-wider text-[#F4C2C2] uppercase font-bold mt-1 block">
                OUT OF 5.0
              </span>
            </div>

            <div className="space-y-1">
              <span className="text-xs uppercase tracking-wider text-[#333333] font-bold block">
                Google Business Rating
              </span>
              <p className="text-xs text-[#4A4A4A]/80">
                {BUSINESS_INFO.reviewCount}+ Verified Ratings & Reviews
              </p>
              <a
                href={BUSINESS_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-[#F4C2C2] hover:text-[#333333] font-bold mt-1 transition-colors"
              >
                <span>Read on Google Maps</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-10">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs text-[#F4C2C2] uppercase tracking-wider font-bold mr-2 flex items-center gap-1">
              <Filter className="w-3.5 h-3.5 text-[#F4C2C2]" />
              Filter:
            </span>
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 text-xs uppercase tracking-[0.18em] font-bold rounded-sm transition-all backdrop-blur-md ${
                  activeCategory === cat.id
                    ? 'bg-gradient-to-r from-[#F4C2C2] via-[#F4C2C2] to-[#E8B4B8] text-[#FAFAFA] shadow-[0_4px_15px_rgba(244,194,194,0.3)]'
                    : 'bg-[#FFFFFF]/90 text-[#4A4A4A] hover:text-[#333333] border border-[#F4C2C2]/25 hover:border-[#F4C2C2]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <LuxuryButton
            href={BUSINESS_INFO.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            variant="outline"
            size="sm"
            icon={<ExternalLink className="w-3.5 h-3.5 text-[#F4C2C2]" />}
          >
            Review Us on Google
          </LuxuryButton>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredReviews.map((rev) => {
            const isLiked = likedReviews[rev.id];
            const currentLikes = rev.likes + (isLiked ? 1 : 0);

            return (
              <ThreeDCard key={rev.id} depth={15} className="h-full">
                <div className="bg-[#FFFFFF] border border-[#F4C2C2]/25 hover:border-[#F4C2C2] transition-all duration-500 rounded-sm p-6 h-full flex flex-col justify-between shadow-[0_15px_40px_rgba(0,0,0,0.8)] hover:shadow-[0_20px_50px_rgba(244,194,194,0.15)] group">
                  
                  {/* Top Author Row */}
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm border border-[#F4C2C2]/40 shadow-inner ${rev.avatarBg}`}>
                          {rev.author.charAt(0)}
                        </div>
                        <div>
                          <div className="flex items-center gap-1.5">
                            <h4 className="text-sm font-bold text-[#333333] group-hover:text-[#333333] transition-colors">
                              {rev.author}
                            </h4>
                            {rev.verified && (
                              <CheckCircle className="w-3.5 h-3.5 text-[#F4C2C2]" aria-label="Verified Google Review" />
                            )}
                          </div>
                          <span className="text-[11px] text-[#F4C2C2]/80 font-bold">
                            {rev.date} • Google Review
                          </span>
                        </div>
                      </div>

                      <div className="flex items-center gap-0.5">
                        {[...Array(rev.rating)].map((_, i) => (
                          <Star key={i} className="w-3.5 h-3.5 fill-[#F4C2C2] text-[#F4C2C2]" />
                        ))}
                      </div>
                    </div>

                    {/* Service Tag */}
                    <div className="mb-3 inline-block bg-[#FAFAFA] px-2.5 py-1 rounded-sm border border-[#F4C2C2]/20 text-[10px] uppercase tracking-wider text-[#F4C2C2] font-bold">
                      Service: {rev.serviceName}
                    </div>

                    {/* Comment Body */}
                    <p className="text-xs text-[#4A4A4A]/90 leading-relaxed font-bold italic">
                      "{rev.comment}"
                    </p>
                  </div>

                  {/* Bottom Helpful / Like Row */}
                  <div className="mt-6 pt-4 border-t border-[#F4C2C2]/15 flex items-center justify-between">
                    <button
                      type="button"
                      onClick={() => toggleLike(rev.id)}
                      className={`inline-flex items-center gap-1.5 text-xs transition-colors px-2 py-1 rounded-sm ${
                        isLiked
                          ? 'text-[#F4C2C2] bg-[#F4C2C2]/10 font-bold'
                          : 'text-[#4A4A4A]/70 hover:text-[#333333]'
                      }`}
                    >
                      <ThumbsUp className={`w-3.5 h-3.5 ${isLiked ? 'fill-[#F4C2C2] text-[#F4C2C2]' : ''}`} />
                      <span>Helpful ({currentLikes})</span>
                    </button>

                    <span className="text-[10px] uppercase tracking-widest text-[#F4C2C2]/60 font-bold">
                      Pashan Location
                    </span>
                  </div>

                </div>
              </ThreeDCard>
            );
          })}
        </div>

        {/* Bottom Google Maps Direct Callout */}
        <div className="mt-16 bg-[#FFFFFF] border border-[#F4C2C2]/30 rounded-sm p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="space-y-1 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 text-xs uppercase tracking-widest text-[#F4C2C2] font-bold">
              <MessageSquare className="w-4 h-4 text-[#F4C2C2]" />
              <span>Visited Aura Unisex Salon?</span>
            </div>
            <h3 className="font-serif-display text-2xl sm:text-3xl text-[#333333] font-bold">
              Share your experience with our Pune community
            </h3>
            <p className="text-xs text-[#4A4A4A]/80 max-w-xl">
              Your valuable review helps others discover our personalized styling, hygiene, and beauty services near Mont Vert Finesse, Pashan.
            </p>
          </div>

          <LuxuryButton
            href={BUSINESS_INFO.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            variant="gold"
            size="md"
            icon={<ExternalLink className="w-4 h-4 text-[#FAFAFA]" />}
            className="shrink-0"
          >
            Leave Google Review
          </LuxuryButton>
        </div>

      </div>
    </section>
  );
}
