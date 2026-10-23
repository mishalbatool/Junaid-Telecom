import React from 'react';
import { Smartphone, Phone, MessageCircle, MapPin, ExternalLink, ArrowUp } from 'lucide-react';
import { BUSINESS_INFO, createWhatsAppUrl } from '../data/storeData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#101B35] border-t border-white/10 text-slate-300 text-xs sm:text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          {/* Brand & Description (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-[#2457D6] flex items-center justify-center text-white shadow-xs border border-white/10">
                <Smartphone className="w-5 h-5 text-white" />
              </div>
              <span className="font-display font-bold text-xl text-white">
                {BUSINESS_INFO.name}
              </span>
            </div>

            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed max-w-sm">
              Your trusted mobile and smartphone accessories destination on Madrasa Banat Road, Chiniot. Providing essential phone accessories, fast chargers, audio gear, and local diagnostic guidance.
            </p>

            <div className="pt-1">
              <span className="text-[11px] text-slate-400 block">
                Professional Online Showcase for Business Presentation.
              </span>
            </div>
          </div>

          {/* Quick Navigation (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-semibold text-white uppercase tracking-wider flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#20C4D8]" />
              <span>Quick Links</span>
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <a href="#home" className="text-slate-300 hover:text-[#20C4D8] transition-colors">
                  Home Overview
                </a>
              </li>
              <li>
                <a href="#categories" className="text-slate-300 hover:text-[#20C4D8] transition-colors">
                  Product Categories
                </a>
              </li>
              <li>
                <a href="#products" className="text-slate-300 hover:text-[#20C4D8] transition-colors">
                  Featured Products
                </a>
              </li>
              <li>
                <a href="#repair" className="text-slate-300 hover:text-[#20C4D8] transition-colors">
                  Repair Services
                </a>
              </li>
              <li>
                <a href="#why-us" className="text-slate-300 hover:text-[#20C4D8] transition-colors">
                  Why Choose Us
                </a>
              </li>
              <li>
                <a href="#contact" className="text-slate-300 hover:text-[#20C4D8] transition-colors">
                  Contact & Location
                </a>
              </li>
            </ul>
          </div>

          {/* Direct Contact (4 cols) */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs font-semibold text-white uppercase tracking-wider flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#20C4D8]" />
              <span>Chiniot Storefront</span>
            </h4>
            <div className="space-y-2.5 text-xs sm:text-sm">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#20C4D8] shrink-0 mt-0.5" />
                <span className="text-slate-300">
                  {BUSINESS_INFO.address}
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#20C4D8] shrink-0" />
                <a href={BUSINESS_INFO.telUrl} className="text-white hover:text-[#20C4D8] transition-colors font-medium">
                  Direct Voice Helpline
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <MessageCircle className="w-4 h-4 text-[#20C4D8] shrink-0 fill-current" />
                <a
                  href={createWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-[#20C4D8] transition-colors font-medium"
                >
                  Direct WhatsApp Chat
                </a>
              </div>
            </div>

            <div className="pt-2">
              <a
                href={BUSINESS_INFO.mapsSearchUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-[#20C4D8] hover:underline font-medium"
              >
                <span>Find Us on Google Maps</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            © {new Date().getFullYear()} {BUSINESS_INFO.name}. All rights reserved.
          </div>

          <div className="flex items-center gap-4">
            <span>Chiniot, Punjab, Pakistan</span>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1 text-slate-300 hover:text-white transition-colors cursor-pointer"
              aria-label="Back to top"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5 text-[#20C4D8]" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
