import React from 'react';
import { MessageCircle } from 'lucide-react';
import { createWhatsAppUrl } from '../data/storeData';

export const FloatingWhatsApp: React.FC = () => {
  return (
    <aside aria-label="Quick contact" className="fixed bottom-5 right-5 z-40">
      <a
        href={createWhatsAppUrl()}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2.5 px-4 py-3 rounded-full bg-[#2457D6] hover:bg-[#1d47b5] text-white font-semibold text-xs sm:text-sm shadow-xl shadow-blue-950/30 transition-all transform hover:scale-105 active:scale-95 border border-white/20 group"
        aria-label="Direct WhatsApp chat"
      >
        <MessageCircle className="w-5 h-5 fill-current text-[#20C4D8]" />
        <span className="hidden sm:inline">WhatsApp Junaid Telecom</span>
        <span className="sm:hidden font-medium">WhatsApp</span>
      </a>
    </aside>
  );
};
