/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Categories } from './components/Categories';
import { FeaturedProducts } from './components/FeaturedProducts';
import { CustomerRating } from './components/CustomerRating';
import { RepairServices } from './components/RepairServices';
import { WhyChooseUs } from './components/WhyChooseUs';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export default function App() {
  const [activeProductFilter, setActiveProductFilter] = useState('all');

  const handleSelectCategoryFilter = (filter: string) => {
    setActiveProductFilter(filter);
    const targetElement = document.getElementById('products');
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#F5F7FB] text-[#202938] flex flex-col font-sans selection:bg-[#2457D6] selection:text-white">
      {/* Main Navigation - Deep Navy with clear white text and Cyan active state */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Section 4: Hero */}
        <Hero />

        {/* Section 9: Customer Rating Trust Strip */}
        <CustomerRating />

        {/* Section 5: Product Categories */}
        <Categories onSelectCategoryFilter={handleSelectCategoryFilter} />

        {/* Section 6: Featured Demonstration Products */}
        <FeaturedProducts
          activeFilter={activeProductFilter}
          onFilterChange={setActiveProductFilter}
        />

        {/* Section 7: Mobile Repair Services */}
        <RepairServices />

        {/* Section 8: Why Choose Us */}
        <WhyChooseUs />

        {/* Section 10: Contact Section */}
        <ContactSection />
      </main>

      {/* Section 11: Footer - Deep Navy */}
      <Footer />

      {/* Quick Access Floating WhatsApp */}
      <FloatingWhatsApp />
    </div>
  );
}
