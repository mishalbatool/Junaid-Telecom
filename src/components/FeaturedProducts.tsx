import React, { useState } from 'react';
import { MessageCircle, HelpCircle, Sparkles, X, Search, RotateCcw } from 'lucide-react';
import { FEATURED_PRODUCTS, createWhatsAppUrl, BUSINESS_INFO } from '../data/storeData';
import { FeaturedProduct } from '../types';

interface FeaturedProductsProps {
  activeFilter: string;
  onFilterChange: (filter: string) => void;
}

export const FeaturedProducts: React.FC<FeaturedProductsProps> = ({
  activeFilter,
  onFilterChange,
}) => {
  const [selectedProduct, setSelectedProduct] = useState<FeaturedProduct | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const filterTabs = [
    { id: 'all', label: 'All Products' },
    { id: 'audio', label: 'Audio & Earbuds' },
    { id: 'chargers', label: 'Fast Chargers' },
    { id: 'power', label: 'Power Banks' },
    { id: 'accessories', label: 'Glass & Stands' },
    { id: 'cases', label: 'Phone Cases' },
  ];

  const filteredProducts = FEATURED_PRODUCTS.filter((item) => {
    const matchesCategory = activeFilter === 'all' || item.categoryFilter === activeFilter;
    const query = searchQuery.trim().toLowerCase();
    const matchesSearch =
      !query ||
      item.name.toLowerCase().includes(query) ||
      item.description.toLowerCase().includes(query) ||
      item.highlight.toLowerCase().includes(query) ||
      item.category.toLowerCase().includes(query);

    return matchesCategory && matchesSearch;
  });

  const handleResetFilters = () => {
    setSearchQuery('');
    onFilterChange('all');
  };

  return (
    <section id="products" className="py-16 sm:py-24 bg-[#F5F7FB] border-b border-[#E5E9F2] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-wider text-[#2457D6] uppercase mb-2">
            <Sparkles className="w-3.5 h-3.5 text-[#20C4D8]" />
            <span>Storefront Demonstration Collection</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#202938] tracking-tight">
            Featured Mobile Products
          </h2>
          <p className="mt-2 text-[#687386] text-base">
            Sample inventory showcasing the essential accessories and hardware we stock in Chiniot. Search below or tap any item to inquire over WhatsApp.
          </p>

          {/* Clean Demo Disclaimer */}
          <div className="mt-4 inline-block text-xs text-[#687386] bg-white px-4 py-2 rounded-xl border border-[#E5E9F2] shadow-xs">
            <span className="font-semibold text-[#101B35]">Demo Catalog Note:</span> Products are illustrative examples. Actual brand selections and live prices are confirmed directly with store staff.
          </div>
        </div>

        {/* Product Search Bar */}
        <div className="max-w-xl mx-auto mb-6">
          <div className="relative flex items-center">
            <Search className="absolute left-4 w-4 h-4 text-[#687386] pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search products by name, type, or model (e.g. Earbuds, GaN, Cable)..."
              className="w-full pl-11 pr-10 py-3 rounded-xl bg-white border border-[#E5E9F2] text-sm text-[#202938] placeholder:text-[#687386] shadow-xs focus:outline-none focus:border-[#2457D6] focus:ring-2 focus:ring-[#2457D6]/15 transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3.5 p-1 rounded-lg text-[#687386] hover:text-[#202938] hover:bg-slate-100 transition-colors"
                aria-label="Clear search"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Active Search / Match Count indicator */}
          {searchQuery && (
            <div className="flex items-center justify-between mt-2.5 px-1 text-xs text-[#687386]">
              <span>
                Found <strong className="text-[#202938]">{filteredProducts.length}</strong> {filteredProducts.length === 1 ? 'item' : 'items'} matching "<span className="text-[#2457D6]">{searchQuery}</span>"
              </span>
              <button
                onClick={() => setSearchQuery('')}
                className="text-[#2457D6] hover:underline font-medium"
              >
                Clear Search
              </button>
            </div>
          )}
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
          {filterTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => onFilterChange(tab.id)}
              className={`px-4 py-2 text-xs sm:text-sm font-medium rounded-xl whitespace-nowrap shrink-0 transition-all cursor-pointer ${
                activeFilter === tab.id
                  ? 'bg-[#2457D6] text-white shadow-sm'
                  : 'bg-white text-[#687386] hover:text-[#202938] hover:bg-slate-50 border border-[#E5E9F2]'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Products Grid or Empty State */}
        {filteredProducts.length === 0 ? (
          <div className="text-center py-12 px-6 rounded-2xl bg-white border border-[#E5E9F2] shadow-sm max-w-md mx-auto">
            <div className="w-12 h-12 rounded-xl bg-[#EDF2FA] text-[#2457D6] flex items-center justify-center mx-auto mb-3">
              <Search className="w-6 h-6" />
            </div>
            <h3 className="font-display text-lg font-bold text-[#202938]">
              No products found
            </h3>
            <p className="text-xs text-[#687386] mt-1 max-w-xs mx-auto leading-relaxed">
              We couldn't find any products matching <strong className="text-[#202938]">"{searchQuery}"</strong> in the selected category.
            </p>
            <div className="mt-5 flex justify-center">
              <button
                onClick={handleResetFilters}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#2457D6] hover:bg-[#1d47b5] text-white text-xs font-semibold shadow-xs transition-colors"
              >
                <RotateCcw className="w-3.5 h-3.5 text-[#20C4D8]" />
                <span>Reset Search & Filters</span>
              </button>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredProducts.map((product) => {
              const productWhatsAppLink = createWhatsAppUrl(product.whatsappMessage);

              return (
                <div
                  key={product.id}
                  className="card-premium group flex flex-col rounded-2xl overflow-hidden bg-white border border-[#E5E9F2] shadow-sm hover:shadow-lg transition-all duration-300 flex-1"
                >
                  {/* Product Image Box */}
                  <div className="aspect-[4/3] w-full overflow-hidden bg-slate-100 relative">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover object-center group-hover:scale-104 transition-transform duration-500 ease-out"
                      referrerPolicy="no-referrer"
                      loading="lazy"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                      }}
                    />

                    {/* Clean unboxed category badge */}
                    <div className="absolute bottom-2.5 left-2.5 text-[11px] font-medium text-[#101B35] bg-white/95 backdrop-blur-xs px-2.5 py-1 rounded-md border border-[#E5E9F2] shadow-xs flex items-center gap-1">
                      <span className="w-1 h-1 rounded-full bg-[#20C4D8]" />
                      <span>{product.category}</span>
                    </div>
                  </div>

                  {/* Content Box */}
                  <div className="p-5 flex flex-col flex-1 justify-between bg-white">
                    <div>
                      <h3 className="font-display text-base sm:text-lg font-bold text-[#202938] group-hover:text-[#2457D6] transition-colors">
                        {product.name}
                      </h3>
                      <p className="mt-2 text-xs sm:text-sm text-[#687386] line-clamp-2 leading-relaxed">
                        {product.description}
                      </p>
                      <div className="mt-3 text-[11px] font-medium text-[#2457D6] flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#20C4D8]" />
                        <span>{product.highlight}</span>
                      </div>
                    </div>

                    {/* Pricing status & Inquire buttons */}
                    <div className="mt-5 pt-4 border-t border-[#F0F3F8] flex flex-col gap-2">
                      <div className="flex items-center justify-between text-xs text-[#687386]">
                        <span>Rate:</span>
                        <span className="font-semibold text-[#101B35]">Inquire for Price</span>
                      </div>

                      <div className="grid grid-cols-2 gap-2 mt-1">
                        <button
                          onClick={() => setSelectedProduct(product)}
                          className="py-2.5 px-3 rounded-xl bg-white hover:bg-slate-50 text-[#101B35] text-xs font-semibold border border-[#D5DDEB] transition-colors flex items-center justify-center gap-1.5 whitespace-nowrap shrink-0 shadow-2xs"
                        >
                          <HelpCircle className="w-3.5 h-3.5 text-[#2457D6]" />
                          <span>Ask Details</span>
                        </button>

                        <a
                          href={productWhatsAppLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="py-2.5 px-3 rounded-xl bg-[#2457D6] hover:bg-[#1d47b5] text-white text-xs font-semibold shadow-xs transition-colors flex items-center justify-center gap-1.5 whitespace-nowrap shrink-0 border border-blue-400/20"
                        >
                          <MessageCircle className="w-3.5 h-3.5 fill-current text-[#20C4D8]" />
                          <span>Inquire</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Modal for "Ask for Price" quick inquiry */}
        {selectedProduct && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#101B35]/70 backdrop-blur-xs animate-in fade-in duration-150">
            <div className="relative w-full max-w-lg bg-white border border-[#E5E9F2] rounded-2xl p-6 shadow-2xl overflow-hidden">
              <button
                onClick={() => setSelectedProduct(null)}
                className="absolute top-4 right-4 p-1.5 rounded-xl text-slate-400 hover:text-[#101B35] hover:bg-slate-100 transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex gap-4 items-start">
                <div className="w-20 h-20 rounded-xl overflow-hidden bg-slate-100 border border-[#E5E9F2] shrink-0">
                  <img
                    src={selectedProduct.image}
                    alt={selectedProduct.name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                </div>
                <div>
                  <span className="text-xs font-semibold text-[#2457D6] uppercase tracking-wider flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#20C4D8]" />
                    {selectedProduct.category}
                  </span>
                  <h4 className="font-display text-xl font-bold text-[#202938] mt-0.5">
                    {selectedProduct.name}
                  </h4>
                  <p className="text-xs text-[#687386] mt-1">
                    {selectedProduct.highlight}
                  </p>
                </div>
              </div>

              <div className="mt-5 p-4 rounded-xl bg-[#F5F7FB] border border-[#E5E9F2] text-xs text-[#202938] space-y-2">
                <div className="flex justify-between">
                  <span className="text-[#687386]">Store:</span>
                  <span className="font-semibold text-[#101B35]">{BUSINESS_INFO.name}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#687386]">Location:</span>
                  <span className="font-medium text-[#101B35]">{BUSINESS_INFO.city}, Pakistan</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#687386]">Stock Inquiry:</span>
                  <span className="font-semibold text-[#2457D6]">Immediate WhatsApp Reply</span>
                </div>
                <p className="text-[11px] text-[#687386] pt-2 border-t border-[#E5E9F2]">
                  Prices in Chiniot mobile market fluctuate with daily currency and brand distribution rates. Send a quick WhatsApp message to get the exact current price today.
                </p>
              </div>

              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <a
                  href={createWhatsAppUrl(selectedProduct.whatsappMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setSelectedProduct(null)}
                  className="flex-1 py-3 px-4 rounded-xl bg-[#2457D6] hover:bg-[#1d47b5] text-white font-semibold text-sm flex items-center justify-center gap-2 shadow-sm"
                >
                  <MessageCircle className="w-4 h-4 fill-current text-[#20C4D8]" />
                  <span>Send WhatsApp Message</span>
                </a>

                <a
                  href={BUSINESS_INFO.telUrl}
                  className="py-3 px-4 rounded-xl bg-white hover:bg-slate-50 text-[#101B35] font-medium text-sm flex items-center justify-center gap-2 border border-[#D5DDEB]"
                >
                  <span>Call Store</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
