import React, { useState } from 'react';
import { Phone, MessageCircle, MapPin, Clock, Navigation, Send } from 'lucide-react';
import { BUSINESS_INFO, createWhatsAppUrl } from '../data/storeData';

export const ContactSection: React.FC = () => {
  const [selectedTopic, setSelectedTopic] = useState('General');
  const [customQuery, setCustomQuery] = useState('');

  const topicOptions = [
    { id: 'General', label: 'General Inquiry' },
    { id: 'Smartphones', label: 'Phone Availability' },
    { id: 'Repair', label: 'Repair Assistance' },
    { id: 'Accessories', label: 'Accessories & Chargers' },
  ];

  const getCustomWhatsAppUrl = () => {
    let msg = `Hello Junaid Telecom, I have an inquiry about [${selectedTopic}].`;
    if (customQuery.trim()) {
      msg += ` Specifically: "${customQuery.trim()}"`;
    } else {
      msg = BUSINESS_INFO.defaultWhatsappMsg;
    }
    return createWhatsAppUrl(msg);
  };

  return (
    <section id="contact" className="py-16 sm:py-24 bg-[#F5F7FB] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <div className="text-xs font-semibold tracking-wider text-[#2457D6] uppercase mb-2 flex items-center justify-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#20C4D8]" />
            <span>Visit Our Store or Message Online</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#202938] tracking-tight">
            Contact Junaid Telecom
          </h2>
          <p className="mt-2 text-[#687386] text-base">
            Reach out directly by phone or WhatsApp for quick product availability, mobile repair diagnostics, and directions to our shop in Chiniot.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Direct Action & Store Details */}
          <div className="lg:col-span-6 space-y-6">
            {/* Primary Action Buttons Bar */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {/* Call Now Button */}
              <a
                href={BUSINESS_INFO.telUrl}
                className="card-premium flex flex-col items-center justify-center p-4 rounded-xl bg-white border border-[#E5E9F2] hover:border-[#2457D6] transition-all text-center group shadow-xs"
              >
                <div className="w-10 h-10 rounded-lg bg-[#EDF2FA] text-[#2457D6] flex items-center justify-center mb-2 group-hover:scale-105 transition-transform">
                  <Phone className="w-5 h-5" />
                </div>
                <span className="text-xs font-semibold text-[#202938]">Call Now</span>
                <span className="text-[11px] text-[#687386] mt-0.5">Direct Voice Call</span>
              </a>

              {/* WhatsApp Us Button */}
              <a
                href={createWhatsAppUrl(BUSINESS_INFO.defaultWhatsappMsg)}
                target="_blank"
                rel="noopener noreferrer"
                className="card-premium flex flex-col items-center justify-center p-4 rounded-xl bg-white border border-[#E5E9F2] hover:border-[#20C4D8] transition-all text-center group shadow-xs"
              >
                <div className="w-10 h-10 rounded-lg bg-[#101B35] text-[#20C4D8] flex items-center justify-center mb-2 group-hover:scale-105 transition-transform shadow-xs">
                  <MessageCircle className="w-5 h-5 fill-current" />
                </div>
                <span className="text-xs font-semibold text-[#101B35]">WhatsApp Us</span>
                <span className="text-[11px] text-[#2457D6] font-medium mt-0.5">Instant Reply</span>
              </a>

              {/* Get Directions Button */}
              <a
                href={BUSINESS_INFO.mapsSearchUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="card-premium flex flex-col items-center justify-center p-4 rounded-xl bg-white border border-[#E5E9F2] hover:border-[#2457D6] transition-all text-center group shadow-xs"
              >
                <div className="w-10 h-10 rounded-lg bg-[#EDF2FA] text-[#2457D6] flex items-center justify-center mb-2 group-hover:scale-105 transition-transform">
                  <Navigation className="w-5 h-5" />
                </div>
                <span className="text-xs font-semibold text-[#202938]">Get Directions</span>
                <span className="text-[11px] text-[#687386] mt-0.5">Google Maps</span>
              </a>
            </div>

            {/* Store Information Card */}
            <div className="p-6 sm:p-7 rounded-2xl bg-white border border-[#E5E9F2] shadow-sm space-y-5">
              <h3 className="font-display text-xl font-bold text-[#202938] flex items-center gap-2">
                <span>{BUSINESS_INFO.name}</span>
              </h3>

              <div className="space-y-4 text-sm">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#2457D6] shrink-0 mt-0.5" />
                  <div>
                    <span className="block font-semibold text-[#202938]">Physical Address</span>
                    <span className="text-[#687386] leading-relaxed block mt-0.5">
                      {BUSINESS_INFO.address}
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-[#2457D6] shrink-0 mt-0.5" />
                  <div className="flex items-center justify-between w-full">
                    <div>
                      <span className="block font-semibold text-[#202938]">Voice Helpline</span>
                      <span className="text-[#687386] block mt-0.5">
                        Direct call to store staff
                      </span>
                    </div>
                    <a
                      href={BUSINESS_INFO.telUrl}
                      className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-[#2457D6] hover:bg-[#1d47b5] text-white transition-colors shadow-2xs"
                    >
                      Call Now
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-[#2457D6] shrink-0 mt-0.5" />
                  <div>
                    <span className="block font-semibold text-[#202938]">Operating Hours</span>
                    <span className="text-[#687386] block mt-0.5">
                      {BUSINESS_INFO.openingHours}
                    </span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-[#F0F3F8] flex flex-col sm:flex-row gap-3">
                <a
                  href={BUSINESS_INFO.mapsSearchUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2.5 px-4 rounded-xl bg-white hover:bg-slate-50 text-[#101B35] text-xs font-semibold text-center border border-[#D5DDEB] transition-colors shadow-2xs"
                >
                  Open in Google Maps
                </a>
                <a
                  href={BUSINESS_INFO.telUrl}
                  className="flex-1 py-2.5 px-4 rounded-xl bg-[#2457D6] hover:bg-[#1d47b5] text-white text-xs font-semibold text-center transition-colors shadow-2xs"
                >
                  Call Store Support
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive WhatsApp Inquiry Generator in Pure White Card */}
          <div className="lg:col-span-6">
            <div className="p-6 sm:p-7 rounded-2xl bg-white border border-[#E5E9F2] shadow-sm">
              <div className="flex items-center gap-1.5 text-xs font-semibold text-[#2457D6] uppercase tracking-wider mb-1.5">
                <MessageCircle className="w-4 h-4 text-[#20C4D8]" />
                <span>Instant Message Generator</span>
              </div>
              <h3 className="font-display text-xl sm:text-2xl font-bold text-[#202938]">
                Start a WhatsApp Chat
              </h3>
              <p className="text-xs sm:text-sm text-[#687386] mt-1">
                Choose a topic below or type your device model to prepare a pre-filled WhatsApp message for Junaid Telecom.
              </p>

              {/* Topic Selector */}
              <div className="mt-5">
                <label className="text-xs font-semibold text-[#202938] block mb-2">
                  Select Topic:
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {topicOptions.map((topic) => (
                    <button
                      key={topic.id}
                      onClick={() => setSelectedTopic(topic.id)}
                      className={`py-2 px-3 rounded-xl text-xs font-medium text-left transition-all ${
                        selectedTopic === topic.id
                          ? 'bg-[#2457D6] text-white shadow-2xs'
                          : 'bg-[#F5F7FB] text-[#687386] hover:text-[#202938] hover:bg-slate-100 border border-[#E5E9F2]'
                      }`}
                    >
                      {topic.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Custom Note Input */}
              <div className="mt-4">
                <label className="text-xs font-semibold text-[#202938] block mb-2">
                  Your Specific Question or Device Model (Optional):
                </label>
                <textarea
                  value={customQuery}
                  onChange={(e) => setCustomQuery(e.target.value)}
                  placeholder="e.g., Do you have fast chargers for Samsung? Or: How much for screen change on Infinix Note 30?"
                  rows={3}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#F5F7FB] border border-[#D5DDEB] text-[#202938] text-xs sm:text-sm placeholder:text-slate-400 focus:outline-none focus:border-[#2457D6] focus:ring-1 focus:ring-[#2457D6] transition-colors resize-none shadow-2xs"
                />
              </div>

              {/* Preview of pre-filled text */}
              <div className="mt-4 p-3 rounded-xl bg-[#F5F7FB] border border-[#E5E9F2] text-[11px] text-[#687386]">
                <span className="font-semibold text-[#101B35] block mb-1">WhatsApp message preview:</span>
                <p className="italic text-[#202938]">
                  "{customQuery.trim() ? `Hello Junaid Telecom, I have an inquiry about [${selectedTopic}]. Specifically: "${customQuery.trim()}"` : BUSINESS_INFO.defaultWhatsappMsg}"
                </p>
              </div>

              {/* Send Button in Royal Blue with Cyan Icon */}
              <div className="mt-5">
                <a
                  href={getCustomWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 px-4 rounded-xl bg-[#2457D6] hover:bg-[#1d47b5] text-white font-semibold text-sm flex items-center justify-center gap-2 shadow-sm transition-all transform active:scale-98"
                >
                  <Send className="w-4 h-4 text-[#20C4D8]" />
                  <span>Open Chat on WhatsApp</span>
                </a>
                <p className="text-[11px] text-center text-[#687386] mt-2">
                  Connects directly to our store team without automated bot loops.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
