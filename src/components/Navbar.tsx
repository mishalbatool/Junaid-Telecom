import React, { useState, useEffect } from 'react';
import { MessageCircle, Menu, X, Phone, Smartphone, ChevronRight } from 'lucide-react';
import { BUSINESS_INFO, createWhatsAppUrl } from '../data/storeData';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['home', 'categories', 'products', 'repair', 'why-us', 'contact'];
      const scrollPos = window.scrollY + 100;
      for (const sec of sections) {
        const el = document.getElementById(sec);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sec);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'home', label: 'Home', href: '#home' },
    { id: 'categories', label: 'Accessories', href: '#categories' },
    { id: 'products', label: 'Mobile Phones', href: '#products' },
    { id: 'repair', label: 'Repair Services', href: '#repair' },
    { id: 'why-us', label: 'Why Us', href: '#why-us' },
    { id: 'contact', label: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-200 bg-[#101B35] ${
        isScrolled
          ? 'shadow-lg shadow-black/20 border-b border-white/10'
          : 'border-b border-white/10'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8 h-18 sm:h-20">
          {/* Zone 1: Brand Wordmark & Improved Telecom Logo */}
          <a
            href="#home"
            className="flex items-center gap-3 text-white hover:text-white transition-opacity whitespace-nowrap shrink-0 group"
          >
            <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-[#2457D6] to-[#153a99] flex items-center justify-center text-white shadow-md shadow-blue-900/40 border border-white/10 group-hover:scale-105 transition-transform">
              <Smartphone className="w-5 h-5 text-white" />
              {/* Subtle Cyan Indicator Dot for Telecom signal aesthetic */}
              <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-[#20C4D8] ring-2 ring-[#101B35]" />
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-lg sm:text-xl tracking-tight text-white leading-none">
                Junaid Telecom
              </span>
              <span className="text-[11px] font-medium text-[#20C4D8] tracking-wider uppercase mt-1">
                Mobile & Repair · Chiniot
              </span>
            </div>
          </a>

          {/* Zone 2: Navigation Links (Desktop) */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2 text-sm font-medium">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-all whitespace-nowrap shrink-0 relative ${
                    isActive
                      ? 'text-white bg-white/10 font-semibold'
                      : 'text-slate-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0.5 left-3 right-3 h-0.5 bg-[#20C4D8] rounded-full" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Zone 3: Primary Action (Royal Blue WhatsApp Button) */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            <a
              href={createWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#2457D6] hover:bg-[#1d47b5] text-white text-sm font-semibold shadow-md shadow-blue-950/40 hover:shadow-lg transition-all transform active:scale-95 whitespace-nowrap shrink-0 border border-blue-400/20"
              aria-label="Chat on WhatsApp"
            >
              <MessageCircle className="w-4 h-4 fill-current text-[#20C4D8]" />
              <span>WhatsApp Us</span>
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href={createWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="sm:hidden p-2.5 rounded-xl bg-[#2457D6] text-white border border-blue-400/20"
              aria-label="WhatsApp"
            >
              <MessageCircle className="w-4 h-4 fill-current text-[#20C4D8]" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl bg-white/10 border border-white/10 text-white hover:bg-white/15 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer (Deep Navy Background) */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0D162C] border-b border-white/10 px-4 pt-3 pb-6 shadow-2xl animate-in slide-in-from-top duration-200">
          <nav className="flex flex-col space-y-1">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center justify-between px-4 py-3 rounded-xl text-base font-medium transition-colors ${
                    isActive
                      ? 'bg-white/10 text-white font-semibold'
                      : 'text-slate-300 hover:bg-white/5 hover:text-white'
                  }`}
                >
                  <span>{link.label}</span>
                  {isActive ? (
                    <span className="w-2 h-2 rounded-full bg-[#20C4D8]" />
                  ) : (
                    <ChevronRight className="w-4 h-4 text-slate-500" />
                  )}
                </a>
              );
            })}
          </nav>
          <div className="mt-4 pt-4 border-t border-white/10 flex flex-col gap-2.5">
            <a
              href={createWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-[#2457D6] hover:bg-[#1d47b5] text-white font-semibold text-sm shadow-md"
            >
              <MessageCircle className="w-4 h-4 fill-current text-[#20C4D8]" />
              <span>Chat on WhatsApp</span>
            </a>
            <a
              href={BUSINESS_INFO.telUrl}
              className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-white/10 hover:bg-white/15 text-white font-medium text-sm border border-white/10"
            >
              <Phone className="w-4 h-4 text-[#20C4D8]" />
              <span>Call Store</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
