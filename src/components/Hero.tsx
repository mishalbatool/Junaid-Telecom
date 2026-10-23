import React from 'react';
import { ArrowRight, PhoneCall, Sparkles } from 'lucide-react';
import { BUSINESS_INFO, HERO_IMAGE, createWhatsAppUrl } from '../data/storeData';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="relative pt-12 pb-16 lg:pt-20 lg:pb-24 bg-gradient-to-b from-[#EDF2FA] via-[#F5F7FB] to-[#F5F7FB] overflow-hidden border-b border-[#E5E9F2]">
      {/* Subtle, soft ambient tech background glow (gentle, not harsh neon) */}
      <div className="absolute top-0 right-1/4 w-[450px] h-[300px] bg-[#2457D6]/5 blur-[100px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Typography & CTAs */}
          <div className="lg:col-span-7 flex flex-col justify-center">

            {/* Main Headline */}
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#202938] leading-[1.14] max-w-2xl text-balance">
              Everything Your{' '}
              <span className="text-[#2457D6]">
                Smartphone
              </span>{' '}
              Needs.
            </h1>

            {/* Supporting Text */}
            <p className="mt-5 text-lg sm:text-xl text-[#687386] leading-relaxed max-w-xl font-normal">
              Discover mobile essentials, stylish accessories and helpful repair services — all in one place.
            </p>

            {/* Primary & Secondary Action Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#products"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-[#2457D6] hover:bg-[#1d47b5] text-white font-semibold text-base shadow-md shadow-blue-900/15 hover:shadow-lg transition-all transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>Explore Products</span>
                <ArrowRight className="w-4 h-4 text-[#20C4D8]" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-white hover:bg-slate-50 text-[#101B35] font-semibold text-base border border-[#D5DDEB] shadow-xs transition-all transform hover:-translate-y-0.5"
              >
                <PhoneCall className="w-4 h-4 text-[#2457D6]" />
                <span>Contact Us</span>
              </a>
            </div>

            {/* Trust Proof Metrics Strip */}
            <div className="mt-12 pt-8 border-t border-[#E5E9F2] grid grid-cols-2 sm:grid-cols-3 gap-6 text-left">
              <div>
                <div className="font-display text-2xl font-bold text-[#202938] tabular-nums">
                  5.0<span className="text-[#2457D6] text-lg font-bold">/5</span>
                </div>
                <div className="text-xs text-[#687386] mt-0.5">
                  172 Google Reviews
                </div>
              </div>

              <div>
                <div className="font-display text-2xl font-bold text-[#202938]">
                  Verified
                </div>
                <div className="text-xs text-[#687386] mt-0.5">
                  Chiniot Storefront
                </div>
              </div>

              <div className="col-span-2 sm:col-span-1">
                <div className="font-display text-2xl font-bold text-[#202938]">
                  Direct
                </div>
                <div className="text-xs text-[#687386] mt-0.5">
                  WhatsApp Support
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Hero High-Res Store Image in Pure White Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border border-[#E5E9F2] bg-white shadow-xl shadow-[#101B35]/5 group">
              {/* Image Frame */}
              <div className="aspect-[16/10] sm:aspect-[4/3] lg:aspect-[16/11] w-full overflow-hidden relative bg-slate-100">
                <img
                  src={HERO_IMAGE}
                  alt="Modern smartphones, fast chargers, wireless earbuds, and accessories at Junaid Telecom"
                  className="w-full h-full object-cover object-center transform group-hover:scale-103 transition-transform duration-500 ease-out"
                  referrerPolicy="no-referrer"
                  loading="eager"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
              </div>

              {/* Bottom Card Annotation */}
              <div className="p-4 sm:p-5 bg-white border-t border-[#E5E9F2] flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#101B35] text-[#20C4D8] flex items-center justify-center shrink-0 shadow-xs">
                    <Sparkles className="w-5 h-5 text-[#20C4D8]" />
                  </div>
                  <div>
                    <h2 className="text-sm font-semibold text-[#202938]">
                      Curated Tech Collection
                    </h2>
                    <p className="text-xs text-[#687386]">
                      Devices · Fast Chargers · Audio · Glass
                    </p>
                  </div>
                </div>

                <a
                  href={createWhatsAppUrl('Hello Junaid Telecom, I saw your online showroom and would like to ask about product availability.')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold text-[#2457D6] hover:text-[#1d47b5] underline underline-offset-4 whitespace-nowrap shrink-0"
                >
                  Inquire &rarr;
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
