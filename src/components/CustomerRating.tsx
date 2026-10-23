import React from 'react';
import { Star, ExternalLink, CheckCircle } from 'lucide-react';
import { BUSINESS_INFO } from '../data/storeData';

export const CustomerRating: React.FC = () => {
  return (
    <section className="py-10 bg-[#F5F7FB] border-b border-[#E5E9F2]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 p-6 sm:p-7 rounded-2xl bg-white border border-[#E5E9F2] shadow-sm">
          {/* Left: Star rating and score */}
          <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-4">
            <div className="flex flex-col items-center justify-center p-3 sm:p-4 rounded-xl bg-[#F5F7FB] border border-[#E5E9F2] shrink-0">
              <span className="font-display text-3xl font-extrabold text-[#202938] tabular-nums leading-none">
                {BUSINESS_INFO.rating.score}
              </span>
              <div className="flex items-center gap-1 mt-1 text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-current" />
                ))}
              </div>
            </div>

            <div>
              <div className="flex items-center justify-center sm:justify-start gap-1.5 text-xs font-semibold text-[#101B35] uppercase tracking-wider">
                <CheckCircle className="w-4 h-4 text-[#20C4D8]" />
                <span>Verified Google Business Profile</span>
              </div>
              <h3 className="font-display text-xl sm:text-2xl font-bold text-[#202938] mt-1">
                Rated {BUSINESS_INFO.rating.score}/5 — {BUSINESS_INFO.rating.totalReviews} Google Reviews
              </h3>
              <p className="text-xs text-[#687386] mt-0.5 max-w-md">
                Reflecting genuine customer feedback for Junaid Telecom / Mobile on Jhang–Chiniot Road, Chiniot.
              </p>
            </div>
          </div>

          {/* Right: Direct Google Maps link */}
          <div className="shrink-0">
            <a
              href={BUSINESS_INFO.mapsSearchUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#101B35] hover:bg-[#1a2b54] text-white font-semibold text-xs sm:text-sm shadow-xs transition-all border border-white/10 hover:border-[#20C4D8]/50"
            >
              <span>View Google Reviews</span>
              <ExternalLink className="w-4 h-4 text-[#20C4D8]" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
