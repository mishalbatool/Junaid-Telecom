import React from 'react';
import { Smartphone, BatteryCharging, Cpu, CheckCircle2, MessageCircle, AlertCircle } from 'lucide-react';
import { REPAIR_SERVICES, createWhatsAppUrl } from '../data/storeData';

export const RepairServices: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Smartphone':
        return <Smartphone className="w-6 h-6 text-[#20C4D8]" />;
      case 'BatteryCharging':
        return <BatteryCharging className="w-6 h-6 text-[#20C4D8]" />;
      case 'Cpu':
        return <Cpu className="w-6 h-6 text-[#20C4D8]" />;
      default:
        return <Smartphone className="w-6 h-6 text-[#20C4D8]" />;
    }
  };

  return (
    <section id="repair" className="py-16 sm:py-24 bg-[#F5F7FB] border-b border-[#E5E9F2] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="text-xs font-semibold tracking-wider text-[#2457D6] uppercase mb-2 flex items-center justify-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#20C4D8]" />
            <span>Technical Assistance & Diagnostics</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#202938] tracking-tight">
            Mobile Repair Services
          </h2>
          <p className="mt-2 text-[#687386] text-base">
            Having trouble with your smartphone? Bring your device to our Chiniot store or consult our team over WhatsApp for advice and repair feasibility.
          </p>

          {/* Verification Disclaimer */}
          <div className="mt-4 flex items-center justify-center gap-1.5 text-xs text-[#687386]">
            <AlertCircle className="w-4 h-4 text-amber-500 shrink-0" />
            <span>Demonstration list of services — exact repair feasibility & parts availability verified in-store.</span>
          </div>
        </div>

        {/* 3 Service Cards in Pure White with Soft Borders */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {REPAIR_SERVICES.map((service) => (
            <div
              key={service.id}
              className="card-premium flex flex-col justify-between rounded-2xl p-7 bg-white border border-[#E5E9F2] shadow-sm hover:shadow-lg transition-all duration-300"
            >
              <div>
                {/* Icon Header in Deep Navy with Cyan Accent */}
                <div className="w-13 h-13 rounded-xl bg-[#101B35] flex items-center justify-center mb-6 shadow-xs border border-white/10">
                  {getIcon(service.icon)}
                </div>

                <h3 className="font-display text-xl font-bold text-[#202938]">
                  {service.title}
                </h3>

                <p className="mt-2.5 text-sm text-[#687386] leading-relaxed">
                  {service.description}
                </p>

                {/* Feature checklist with Cyan checkmarks */}
                <div className="mt-6 space-y-2.5">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-[#202938]">
                      <CheckCircle2 className="w-4 h-4 text-[#20C4D8] shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="mt-8 pt-6 border-t border-[#F0F3F8] flex flex-col gap-2">
                <span className="text-[11px] text-[#687386] font-medium">
                  {service.turnaround}
                </span>
                <a
                  href={createWhatsAppUrl(`Hello Junaid Telecom, I need assistance regarding ${service.title} for my smartphone.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 rounded-xl bg-[#2457D6] hover:bg-[#1d47b5] text-white font-semibold text-xs flex items-center justify-center gap-2 transition-all shadow-xs hover:shadow-md border border-blue-400/20"
                >
                  <MessageCircle className="w-3.5 h-3.5 fill-current text-[#20C4D8]" />
                  <span>Contact for Assistance</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
