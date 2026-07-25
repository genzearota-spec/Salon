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
    <section id="reviews" className="py-24 bg-[#08080A] text-[#E4E2DD] relative overflow-hidden border-t border-[#D4AF37]/20">
      
      {/* Ambient background aura */}
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(212,175,55,0.07)_0%,transparent_70%)] pointer-events-none blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(212,175,55,0.05)_0%,transparent_70%)] pointer-events-none blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 pb-8 border-b border-[#D4AF37]/20 gap-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#121216] border border-[#D4AF37]/30 text-xs font-bold text-[#F5E6CA] mb-3">
              <ShieldCheck className="w-4 h-4 text-[#D4AF37]" />
              <span className="tracking-[0.2em] uppercase">VERIFIED GOOGLE REVIEWS</span>
            </div>
            <h2 className="font-serif-display text-4xl sm:text-5xl md:text-6xl font-normal text-[#FFFFFF] tracking-tight">
              CUSTOMER EXPERIENCES
            </h2>
            <p className="text-sm text-[#F5E6CA] font-normal mt-2 max-w-xl">
              Authentic feedback from visitors at <strong className="text-[#FFFFFF]">Aura Unisex Salon</strong> at Baner - Pashan Link Road, Pashan, Pune.
            </p>
          </div>

          {/* Rating Summary Header Box */}
          <div className="bg-[#121216] p-6 rounded-sm border border-[#D4AF37]/30 shadow-xl flex items-center gap-6 shrink-0">
            <div className="text-center border-r border-[#D4AF37]/20 pr-6">
              <span className="font-serif-display text-4xl sm:text-5xl font-bold text-gold-gradient block">
                {BUSINESS_INFO.rating}
              </span>
              <div className="flex items-center gap-1 mt-1 justify-center">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star key={s} className="w-3.5 h-3.5 fill-[#D4AF37] text-[#D4AF37]" />
                ))}
              </div>
              <span className="text-[10px] tracking-wider text-[#D4AF37] uppercase font-bold mt-1 block">
                OUT OF 5.0
              </span>
            </div>

            <div className="space-y-1">
              <span className="text-xs uppercase tracking-wider text-[#FFFFFF] font-bold block">
                Google Business Rating
              </span>
              <p className="text-xs text-[#E4E2DD]/80">
                {BUSINESS_INFO.reviewCount}+ Verified Ratings & Reviews
              </p>
              <a
                href={BUSINESS_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-[#D4AF37] hover:text-[#F5E6CA] font-semibold mt-1 transition-colors"
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
            <span className="text-xs text-[#D4AF37] uppercase tracking-wider font-bold mr-2 flex items-center gap-1">
              <Filter className="w-3.5 h-3.5 text-[#D4AF37]" />
              Filter:
            </span>
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 text-xs uppercase tracking-[0.18em] font-bold rounded-sm transition-all backdrop-blur-md ${
                  activeCategory === cat.id
                    ? 'bg-gradient-to-r from-[#F5E6CA] via-[#D4AF37] to-[#C5A059] text-[#08080A] shadow-[0_4px_15px_rgba(212,175,55,0.3)]'
                    : 'bg-[#121216]/90 text-[#E4E2DD] hover:text-[#FFFFFF] border border-[#D4AF37]/25 hover:border-[#D4AF37]'
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
            icon={<ExternalLink className="w-3.5 h-3.5 text-[#D4AF37]" />}
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
                <div className="bg-[#121216] border border-[#D4AF37]/25 hover:border-[#D4AF37] transition-all duration-500 rounded-sm p-6 h-full flex flex-col justify-between shadow-[0_15px_40px_rgba(0,0,0,0.8)] hover:shadow-[0_20px_50px_rgba(212,175,55,0.15)] group">
                  
                  {/* Top Author Row */}
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm border border-[#D4AF37]/40 shadow-inner ${rev.avatarBg}`}>
                          {rev.author.charAt(0)}
                        </div>
                        <div>
                          <div className="flex items-center gap-1.5">
                            <h4 className="text-sm font-semibold text-[#FFFFFF] group-hover:text-[#F5E6CA] transition-colors">
                              {rev.author}
                            </h4>
                            {rev.verified && (
                              <CheckCircle className="w-3.5 h-3.5 text-[#D4AF37]" title="Verified Google Review" />
                            )}
                          </div>
                          <span className="text-[11px] text-[#D4AF37]/80 font-normal">
                            {rev.date} • Google Review
                          </span>
                        </div>
                      </div>

                      <div className="flex items-center gap-0.5">
                        {[...Array(rev.rating)].map((_, i) => (
                          <Star key={i} className="w-3.5 h-3.5 fill-[#D4AF37] text-[#D4AF37]" />
                        ))}
                      </div>
                    </div>

                    {/* Service Tag */}
                    <div className="mb-3 inline-block bg-[#08080A] px-2.5 py-1 rounded-sm border border-[#D4AF37]/20 text-[10px] uppercase tracking-wider text-[#D4AF37] font-semibold">
                      Service: {rev.serviceName}
                    </div>

                    {/* Comment Body */}
                    <p className="text-xs text-[#E4E2DD]/90 leading-relaxed font-normal italic">
                      "{rev.comment}"
                    </p>
                  </div>

                  {/* Bottom Helpful / Like Row */}
                  <div className="mt-6 pt-4 border-t border-[#D4AF37]/15 flex items-center justify-between">
                    <button
                      type="button"
                      onClick={() => toggleLike(rev.id)}
                      className={`inline-flex items-center gap-1.5 text-xs transition-colors px-2 py-1 rounded-sm ${
                        isLiked
                          ? 'text-[#D4AF37] bg-[#D4AF37]/10 font-bold'
                          : 'text-[#E4E2DD]/70 hover:text-[#F5E6CA]'
                      }`}
                    >
                      <ThumbsUp className={`w-3.5 h-3.5 ${isLiked ? 'fill-[#D4AF37] text-[#D4AF37]' : ''}`} />
                      <span>Helpful ({currentLikes})</span>
                    </button>

                    <span className="text-[10px] uppercase tracking-widest text-[#D4AF37]/60 font-semibold">
                      Pashan Location
                    </span>
                  </div>

                </div>
              </ThreeDCard>
            );
          })}
        </div>

        {/* Bottom Google Maps Direct Callout */}
        <div className="mt-16 bg-[#121216] border border-[#D4AF37]/30 rounded-sm p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="space-y-1 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 text-xs uppercase tracking-widest text-[#D4AF37] font-bold">
              <MessageSquare className="w-4 h-4 text-[#D4AF37]" />
              <span>Visited Aura Unisex Salon?</span>
            </div>
            <h3 className="font-serif-display text-2xl sm:text-3xl text-[#FFFFFF] font-normal">
              Share your experience with our Pune community
            </h3>
            <p className="text-xs text-[#E4E2DD]/80 max-w-xl">
              Your valuable review helps others discover our personalized styling, hygiene, and beauty services near Mont Vert Finesse, Pashan.
            </p>
          </div>

          <LuxuryButton
            href={BUSINESS_INFO.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            variant="gold"
            size="md"
            icon={<ExternalLink className="w-4 h-4 text-[#08080A]" />}
            className="shrink-0"
          >
            Leave Google Review
          </LuxuryButton>
        </div>

      </div>
    </section>
  );
}
