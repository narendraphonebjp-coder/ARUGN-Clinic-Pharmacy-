import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { SERVICES, CLINIC_METADATA } from '../data';

const CATEGORIES_LIST = [
  "All", 
  "Chronic Care", 
  "Acute Diseases", 
  "Cardiovascular", 
  "Neurology", 
  "Liver & Gastrointestinal", 
  "Renal & Pulmonary", 
  "Endocrinology", 
  "Blood Disorders", 
  "Infections & Skin"
];

interface WorksViewProps {
  key?: string;
  openConsultation: () => void;
}

export default function WorksView({ openConsultation }: WorksViewProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  // Filter services based on query and category
  const filteredServices = SERVICES.filter(s => {
    const matchesSearch = s.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          s.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeCategory === 'All' || s.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
      className="space-y-16 md:space-y-24 pb-20 text-stone-900"
    >
      {/* Editorial Title Section */}
      <section className="space-y-6 pt-6">
        <p className="text-[10px] sm:text-xs tracking-widest uppercase font-mono text-stone-400">
          CLINICAL SERVICES & TREATMENTS
        </p>
        <h1 className="text-4xl sm:text-6xl font-light tracking-tight font-serif text-stone-900 leading-tight">
          Comprehensive <br />
          medical support. <br />
          <span className="italic font-light text-stone-600">The primary standard</span>.
        </h1>
        <p className="text-xs sm:text-sm font-light text-stone-600 max-w-xl leading-relaxed">
          Dr. Abhinay Krishna Soni provides physical clinical analysis, routine diagnostics, and immediate day care management for 21 core clinical syndromes. Use the search or category filters to discover detailed diagnostics and guidance.
        </p>
      </section>

      {/* Interactive Filter Grid & Search */}
      <section className="space-y-8 border-t border-stone-200 pt-10">
        <div className="flex flex-col md:flex-row justify-between gap-6 items-start md:items-center">
          {/* Search Input Bar */}
          <div className="w-full md:max-w-md relative">
            <input 
              id="service-search-input"
              type="text" 
              placeholder="Search services (e.g. Diabetes, Jaundice, Asthma)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white border border-stone-200 px-4 py-3 text-xs sm:text-sm tracking-wide text-stone-900 rounded-none placeholder-stone-400 focus:outline-none focus:border-stone-500 font-sans"
            />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery('')}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-stone-400 hover:text-stone-900 font-mono"
              >
                Clear
              </button>
            )}
          </div>

          {/* Result Counter */}
          <span className="text-xs font-mono text-stone-500 uppercase tracking-widest">
            Showing {filteredServices.length} of {SERVICES.length} Services
          </span>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap gap-2 pt-2 border-b border-stone-100 pb-6">
          {CATEGORIES_LIST.map((category) => (
            <button
              key={category}
              id={`filter-cat-${category.toLowerCase().replace(/\s+/g, '-')}`}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 text-xs font-sans tracking-wide transition-all border duration-250 ${
                activeCategory === category 
                  ? "bg-[#141414] text-white border-[#141414]" 
                  : "bg-white text-stone-600 border-stone-200 hover:border-stone-400"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Services Bento Grid or List */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredServices.map((service, idx) => (
              <motion.div 
                layout
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3, delay: Math.min(idx * 0.03, 0.3) }}
                key={service.id} 
                className="p-6 bg-[#faf1eb] border border-stone-200 hover:shadow-sm transition-all duration-300 flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  <div className="flex justify-between items-start">
                    <span className="text-[10px] font-mono tracking-widest text-[#141414]/60 bg-[#141414]/5 px-2 py-1 uppercase rounded-none">
                      {service.category}
                    </span>
                    <span className="text-[11px] font-mono text-stone-400">
                      0{idx + 1}
                    </span>
                  </div>
                  <h3 className="font-serif text-lg sm:text-xl font-medium text-stone-900 group-hover:text-emerald-800 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-stone-700 font-light leading-relaxed">
                    {service.description}
                  </p>
                </div>
                
                <div className="pt-6 border-t border-stone-200/50 mt-6 flex justify-between items-center">
                  <button 
                    onClick={openConsultation}
                    className="text-[10px] font-mono uppercase tracking-widest text-stone-800 group-hover:text-emerald-800 font-semibold flex items-center gap-1.5 transition-colors"
                  >
                    Discuss Case <span className="text-xs">→</span>
                  </button>
                  <span className="text-[9px] font-mono uppercase text-stone-400">REG: 18991 Support</span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>

          {filteredServices.length === 0 && (
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              className="col-span-full py-16 text-center text-stone-500 font-mono text-xs uppercase tracking-widest"
            >
              No services match your current query or category filter. <br />
              <button 
                onClick={() => { setSearchQuery(''); setActiveCategory('All'); }} 
                className="mt-4 px-4 py-2 text-xs border border-stone-900 text-stone-900 font-mono hover:bg-stone-900 hover:text-white transition-all uppercase"
              >
                Reset Search Filters
              </button>
            </motion.div>
          )}
        </div>
      </section>

      {/* Facilities highlights or note */}
      <section className="border-t border-stone-200 pt-16">
        <div className="max-w-4xl space-y-6">
          <p className="text-[10px] sm:text-xs tracking-widest uppercase font-mono text-stone-400">AUTHORIZED COLLECTION HUB</p>
          <h2 className="text-2xl sm:text-3xl font-serif font-light text-stone-900 leading-tight">
            Accurate Clinical Chemistry Partnership — {CLINIC_METADATA.labPartner}
          </h2>
          <p className="text-xs sm:text-sm font-light text-stone-600 leading-relaxed">
            In medical diagnostics, errors cannot exist. In association with Dr Lal Pathlabs, we curate standard whole blood chemistry screenings, thyroid panels, blood glucose tolerance assays, and routine fluid tests right within our physical premises, helping synchronize diagnosis with immediate consultation.
          </p>
        </div>
      </section>

      {/* Quote & CTA */}
      <section className="border-t border-stone-200 pt-20 text-center space-y-8">
        <h2 className="text-2xl sm:text-4xl font-serif font-light text-stone-800 max-w-2xl mx-auto leading-snug">
          "Accessible, ethical care for healthy communities."
        </h2>
        <div className="pt-4">
          <button
            id="works-request"
            onClick={openConsultation}
            className="px-8 py-4 bg-[#141414] text-white text-xs tracking-widest uppercase hover:bg-stone-800 transition-colors inline-flex items-center gap-2 rounded-none font-medium ml-auto"
          >
            Schedule Clinical Appointment <span>→</span>
          </button>
        </div>
      </section>
    </motion.div>
  );
}
