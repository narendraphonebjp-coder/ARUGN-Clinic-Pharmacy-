import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import IndexView from './components/IndexView';
import BiographyView from './components/BiographyView';
import WorksView from './components/WorksView';
import ContactView from './components/ContactView';
import ConsultationModal from './components/ConsultationModal';
import { CLINIC_METADATA } from './data';

type TabType = 'index' | 'biography' | 'works' | 'contact';

export default function App() {
  const [activeTab, setActiveTab] = useState<TabType>('index');
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Scroll to top on tab swap
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
  }, [activeTab]);

  return (
    <div id="app-container" className="min-h-screen bg-[#FAF1EB] text-stone-900 flex flex-col font-sans relative antialiased selection:bg-stone-200">
      
      {/* Grid Pattern / Subtle vertical guide-lines for high-end architecture feel */}
      <div className="absolute inset-y-0 left-6 sm:left-12 md:left-24 lg:left-36 w-[1px] bg-stone-200/45 pointer-events-none -z-10" />
      <div className="absolute inset-y-0 right-6 sm:right-12 md:right-24 lg:right-36 w-[1px] bg-stone-200/45 pointer-events-none -z-10" />

      {/* Navigation header */}
      <nav className="sticky top-0 z-40 w-full bg-[#FAF1EB]/80 backdrop-blur-md border-b border-stone-200/50">
        <div className="max-w-7xl mx-auto px-6 sm:px-12 md:px-24 py-5 flex items-center justify-between">
          {/* Logo / Brand Name */}
          <div 
            id="brand-logo"
            className="cursor-pointer"
            onClick={() => setActiveTab('index')}
          >
            <span className="text-xl sm:text-2xl font-serif font-light text-stone-900 tracking-tight flex items-center gap-2">
              ARUGN <span className="italic text-emerald-800 font-semibold">CLINIC & PHARMACY</span>
            </span>
          </div>

          {/* Desktop Nav Items */}
          <div className="hidden sm:flex items-center gap-6 md:gap-10 text-[10px] md:text-xs font-mono tracking-widest text-stone-500 uppercase">
            <button
              id="nav-index"
              onClick={() => setActiveTab('index')}
              className={`hover:text-stone-900 transition-colors py-2 cursor-pointer relative ${activeTab === 'index' ? 'text-stone-900 font-semibold' : ''}`}
            >
              Home
              {activeTab === 'index' && (
                <motion.div layoutId="nav-line" className="absolute bottom-0 left-0 right-0 h-[1px] bg-[#141414]" />
              )}
            </button>
            <button
              id="nav-biography"
              onClick={() => setActiveTab('biography')}
              className={`hover:text-stone-900 transition-colors py-2 cursor-pointer relative ${activeTab === 'biography' ? 'text-stone-900 font-semibold' : ''}`}
            >
              Dr. Soni
              {activeTab === 'biography' && (
                <motion.div layoutId="nav-line" className="absolute bottom-0 left-0 right-0 h-[1px] bg-[#141414]" />
              )}
            </button>
            <button
              id="nav-works"
              onClick={() => setActiveTab('works')}
              className={`hover:text-stone-900 transition-colors py-2 cursor-pointer relative ${activeTab === 'works' ? 'text-stone-900 font-semibold' : ''}`}
            >
              Services
              {activeTab === 'works' && (
                <motion.div layoutId="nav-line" className="absolute bottom-0 left-0 right-0 h-[1px] bg-[#141414]" />
              )}
            </button>
            <button
              id="nav-contact"
              onClick={() => setActiveTab('contact')}
              className={`hover:text-stone-900 transition-colors py-2 cursor-pointer relative ${activeTab === 'contact' ? 'text-stone-900 font-semibold' : ''}`}
            >
              Contact
              {activeTab === 'contact' && (
                <motion.div layoutId="nav-line" className="absolute bottom-0 left-0 right-0 h-[1px] bg-[#141414]" />
              )}
            </button>

            {/* Accent consultation trigger */}
            <button
              id="nav-consultation"
              onClick={() => setIsConsultationOpen(true)}
              className="border-b border-stone-800 pb-1 text-emerald-800 font-bold cursor-pointer hover:text-stone-500 transition-colors uppercase"
            >
              OPD Booking
            </button>
          </div>

          {/* Mobile hamburger menu */}
          <div className="sm:hidden flex items-center col-span-2">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-1 text-stone-600 hover:text-stone-900 focus:outline-none"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu panel */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="absolute top-full left-0 right-0 bg-[#FAF1EB] border-b border-stone-200 shadow-lg px-6 py-8 flex flex-col gap-6 text-xs font-mono tracking-widest text-stone-500 uppercase sm:hidden"
            >
              <button
                id="mob-nav-index"
                onClick={() => {
                  setActiveTab('index');
                  setIsMobileMenuOpen(false);
                }}
                className={`text-left py-1 hover:text-stone-900 transition-colors ${activeTab === 'index' ? 'text-stone-900 font-bold border-l-2 border-stone-900 pl-3' : 'pl-3'}`}
              >
                Home
              </button>
              <button
                id="mob-nav-biography"
                onClick={() => {
                  setActiveTab('biography');
                  setIsMobileMenuOpen(false);
                }}
                className={`text-left py-1 hover:text-stone-900 transition-colors ${activeTab === 'biography' ? 'text-stone-900 font-bold border-l-2 border-stone-900 pl-3' : 'pl-3'}`}
              >
                Dr. Soni (Bio)
              </button>
              <button
                id="mob-nav-works"
                onClick={() => {
                  setActiveTab('works');
                  setIsMobileMenuOpen(false);
                }}
                className={`text-left py-1 hover:text-stone-900 transition-colors ${activeTab === 'works' ? 'text-stone-900 font-bold border-l-2 border-stone-900 pl-3' : 'pl-3'}`}
              >
                Services
              </button>
              <button
                id="mob-nav-contact"
                onClick={() => {
                  setActiveTab('contact');
                  setIsMobileMenuOpen(false);
                }}
                className={`text-left py-1 hover:text-stone-900 transition-colors ${activeTab === 'contact' ? 'text-stone-900 font-bold border-l-2 border-stone-900 pl-3' : 'pl-3'}`}
              >
                Contact & Find Us
              </button>
              <button
                id="mob-nav-consultation"
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  setIsConsultationOpen(true);
                }}
                className="text-left py-1 text-emerald-800 font-bold border-b border-stone-300 w-fit pb-1 ml-3 hover:text-stone-500 transition-colors"
              >
                OPD OPD Appointment Booking
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Main Workspace Canvas */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-6 sm:px-12 md:px-24 py-12 md:py-20 z-10">
        <AnimatePresence mode="wait">
          {activeTab === 'index' && (
            <IndexView 
              key="index"
              onSetTab={setActiveTab} 
              openConsultation={() => setIsConsultationOpen(true)} 
            />
          )}
          {activeTab === 'biography' && (
            <BiographyView key="biography" />
          )}
          {activeTab === 'works' && (
            <WorksView 
              key="works"
              openConsultation={() => setIsConsultationOpen(true)} 
            />
          )}
          {activeTab === 'contact' && (
            <ContactView key="contact" />
          )}
        </AnimatePresence>
      </main>

      {/* Persistent General Footer */}
      <footer className="w-full bg-[#FAF1EB] border-t border-stone-200/70 z-10 font-sans">
        <div className="max-w-7xl mx-auto px-6 sm:px-12 md:px-24 py-16 grid grid-cols-1 md:grid-cols-12 gap-12 text-stone-800">
          {/* Practice title/creds column */}
          <div className="md:col-span-6 space-y-4">
            <h5 className="font-serif text-lg text-stone-900 font-light flex flex-col">
              <span className="font-semibold">{CLINIC_METADATA.name}</span>
              <span className="text-sm text-stone-500">{CLINIC_METADATA.doctorName}</span>
            </h5>
            <p className="text-xs font-sans font-light text-stone-500 leading-relaxed max-w-sm">
              {CLINIC_METADATA.qualification} · General Medicine, Day Care and Diagnostics collection centre. Bhopal, Madhya Pradesh.
            </p>
          </div>

          {/* Bhopal Primary clinic Column */}
          <div className="md:col-span-6 space-y-3">
            <h6 className="text-[10px] tracking-widest font-mono uppercase text-emerald-800 font-semibold">ARUGN CLINIC BHOPAL</h6>
            <p className="text-xs text-stone-600 font-sans font-light leading-relaxed">
              {CLINIC_METADATA.address} <br />
              <span className="font-mono mt-2 block font-medium text-stone-900">Direct Mob: {CLINIC_METADATA.phone}</span>
              <span className="text-[11px] text-stone-400 font-mono block mt-1">OPD: {CLINIC_METADATA.opdHours} | Mon - Sat</span>
            </p>
          </div>
        </div>

        {/* Deep bottom licensing credits */}
        <div className="border-t border-stone-200/50 py-6 text-stone-400">
          <div className="max-w-7xl mx-auto px-6 sm:px-12 md:px-24 flex flex-col sm:flex-row justify-between items-center gap-4 text-[10px] font-mono tracking-widest uppercase">
            <span>© 2026 ARUGN CLINIC & PHARMACY. All rights reserved.</span>
            <span className="text-emerald-800 font-semibold">{CLINIC_METADATA.registration}</span>
          </div>
        </div>
      </footer>

      {/* General Floating Consultation Appointment Sheet overlay */}
      <ConsultationModal 
        isOpen={isConsultationOpen} 
        onClose={() => setIsConsultationOpen(false)} 
      />

    </div>
  );
}
