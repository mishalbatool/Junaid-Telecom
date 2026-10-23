import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { PRODUCT_CATEGORIES, createWhatsAppUrl } from '../data/storeData';

interface CategoriesProps {
  onSelectCategoryFilter?: (categoryFilter: string) => void;
}

export const Categories: React.FC<CategoriesProps> = ({ onSelectCategoryFilter }) => {
  return (
    <section id="categories" className="py-16 sm:py-20 bg-[#F5F7FB] border-b border-[#E5E9F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="text-xs font-semibold tracking-wider text-[#2457D6] uppercase mb-2 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#20C4D8]" />
              <span>Browse Store Departments</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#202938] tracking-tight">
              Product Categories
            </h2>
            <p className="mt-2 text-[#687386] text-base max-w-xl">
              Explore essential smartphone hardware, tested power accessories, and everyday mobile gear available at our Chiniot store.
            </p>
          </div>

          <a
            href={createWhatsAppUrl('Hello Junaid Telecom, I would like to ask about your available mobile phone categories.')}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#2457D6] hover:text-[#1d47b5] transition-colors whitespace-nowrap self-start md:self-end group"
          >
            <span>Inquire for specific brand</span>
            <ArrowUpRight className="w-4 h-4 text-[#20C4D8] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>

        {/* 4 Category Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PRODUCT_CATEGORIES.map((category) => (
            <div
              key={category.id}
              className="card-premium group relative flex flex-col rounded-2xl overflow-hidden bg-white border border-[#E5E9F2] shadow-sm hover:shadow-lg transition-all duration-300"
            >
              {/* Category Image */}
              <div className="aspect-[4/3] w-full overflow-hidden bg-slate-100 relative">
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-full object-cover object-center transform group-hover:scale-104 transition-transform duration-500 ease-out"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />

                {/* Subtitle tag overlay */}
                <div className="absolute top-3 right-3 text-[11px] font-medium tracking-wide text-[#101B35] bg-white/95 backdrop-blur-xs px-2.5 py-1 rounded-md border border-[#E5E9F2] shadow-2xs flex items-center gap-1">
                  <span className="w-1 h-1 rounded-full bg-[#20C4D8]" />
                  <span>{category.badge}</span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 flex flex-col flex-1 justify-between bg-white">
                <div>
                  <h3 className="font-display text-lg font-bold text-[#202938] group-hover:text-[#2457D6] transition-colors">
                    {category.title}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-[#687386] leading-relaxed">
                    {category.description}
                  </p>
                </div>

                {/* Action links inside card */}
                <div className="mt-5 pt-4 border-t border-[#F0F3F8] flex items-center justify-between">
                  <a
                    href="#products"
                    onClick={() => {
                      if (onSelectCategoryFilter) {
                        const map: Record<string, string> = {
                          smartphones: 'all',
                          accessories: 'accessories',
                          chargers: 'chargers',
                          audio: 'audio'
                        };
                        onSelectCategoryFilter(map[category.id] || 'all');
                      }
                    }}
                    className="text-xs font-semibold text-[#101B35] hover:text-[#2457D6] transition-colors"
                  >
                    View Products &rarr;
                  </a>

                  <a
                    href={createWhatsAppUrl(`Hello Junaid Telecom, I would like to inquire about items in the ${category.title} category.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-medium text-[#2457D6] hover:text-[#1d47b5] underline underline-offset-4"
                  >
                    WhatsApp Inquire
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
