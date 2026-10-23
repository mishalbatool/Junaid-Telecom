import React from 'react';
import { Layers, ShieldCheck, Headphones, MapPin } from 'lucide-react';
import { WHY_CHOOSE_US } from '../data/storeData';

export const WhyChooseUs: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Layers':
        return <Layers className="w-6 h-6 text-[#2457D6]" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-6 h-6 text-[#2457D6]" />;
      case 'Headphones':
        return <Headphones className="w-6 h-6 text-[#2457D6]" />;
      case 'MapPin':
        return <MapPin className="w-6 h-6 text-[#2457D6]" />;
      default:
        return <ShieldCheck className="w-6 h-6 text-[#2457D6]" />;
    }
  };

  return (
    <section id="why-us" className="py-16 sm:py-24 bg-[#F5F7FB] border-b border-[#E5E9F2] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <div className="text-xs font-semibold tracking-wider text-[#2457D6] uppercase mb-2 flex items-center justify-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#20C4D8]" />
            <span>Local Commitment</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#202938] tracking-tight">
            Why Choose Junaid Telecom
          </h2>
          <p className="mt-2 text-[#687386] text-base">
            Providing Chiniot residents with reliable smartphone accessories, dependable guidance, and responsive local support.
          </p>
        </div>

        {/* 4 Items Grid with Pure White Cards and Soft Borders */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {WHY_CHOOSE_US.map((item, index) => (
            <div
              key={index}
              className="card-premium flex flex-col items-start p-6 rounded-2xl bg-white border border-[#E5E9F2] shadow-sm hover:shadow-lg transition-all"
            >
              <div className="relative w-12 h-12 rounded-xl bg-[#EDF2FA] border border-[#D5DDEB] flex items-center justify-center mb-5">
                {getIcon(item.icon)}
                <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-[#20C4D8]" />
              </div>
              <h3 className="font-display text-lg font-bold text-[#202938]">
                {item.title}
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-[#687386] leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
