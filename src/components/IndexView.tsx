import { motion } from 'motion/react';
import { 
  PORTRAIT_IMAGE, 
  CLINIC_ENTRANCE_IMAGE, 
  CLINIC_WARD_IMAGE, 
  CLINIC_METADATA, 
  FACILITIES 
} from '../data';

interface IndexViewProps {
  key?: string;
  onSetTab: (tab: 'index' | 'biography' | 'works' | 'contact') => void;
  openConsultation: () => void;
}

export default function IndexView({ onSetTab, openConsultation }: IndexViewProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
      className="space-y-24 md:space-y-36 pb-20 text-stone-900"
    >
      {/* Hero Section */}
      <section className="pt-8 md:pt-12 text-stone-900">
        <div className="max-w-4xl space-y-8">
          <p className="text-[10px] md:text-[11px] font-mono tracking-widest text-emerald-700 font-semibold uppercase">
            {CLINIC_METADATA.registration} · GENERAL MEDICINE & DAY CARE
          </p>
          <h1 className="text-5xl sm:text-7xl font-light tracking-tight font-serif text-stone-900 leading-[1.05] selection:bg-stone-200">
            Compassionate <br />
            <span className="italic font-light text-stone-600">evidence-based</span> <br />
            medical care.
          </h1>
          <p className="text-base sm:text-lg font-sans font-light text-stone-700 max-w-xl leading-relaxed">
            Welcome to <span className="font-semibold">{CLINIC_METADATA.name}</span>, directed by <span className="font-semibold">{CLINIC_METADATA.doctorName}</span>, {CLINIC_METADATA.qualification}. We provide comprehensive, patient-centered diagnosis, management, and treatment of acute and chronic health conditions.
          </p>
          
          <div className="flex items-center gap-8 pt-4 flex-wrap">
            <button 
              id="hero-request"
              onClick={openConsultation}
              className="px-6 py-4 bg-[#141414] text-white text-xs tracking-widest uppercase hover:bg-stone-800 transition-colors rounded-none font-medium flex items-center gap-2"
            >
              Book OPD Appointment <span className="text-[10px] font-sans">→</span>
            </button>
            <button 
              id="hero-portfolio"
              onClick={() => onSetTab('works')}
              className="text-xs text-stone-900 tracking-widest uppercase border-b border-stone-800 hover:border-transparent transition-all py-1 font-semibold"
            >
              View Our Services
            </button>
          </div>
        </div>

        {/* Hero Dr. Portrait */}
        <div className="mt-16 sm:mt-24 w-full">
          <img
            src={PORTRAIT_IMAGE}
            alt={CLINIC_METADATA.doctorName}
            className="w-full aspect-[4/3] sm:aspect-[16/10] object-cover rounded-none"
            referrerPolicy="no-referrer"
          />
          <div className="flex justify-between items-center text-[10px] sm:text-xs font-mono text-stone-500 mt-4 tracking-widest uppercase">
            <span>{CLINIC_METADATA.doctorName}, {CLINIC_METADATA.qualification}</span>
            <span>Bhopal, Madhya Pradesh</span>
          </div>
        </div>
      </section>

      {/* OPD Timings / Information Strip Col */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-stone-200 pt-16">
        <div className="space-y-2 p-6 bg-[#faf1eb] border border-stone-200/50">
          <div className="text-[10px] tracking-widest uppercase font-mono text-stone-500">OPD Timings</div>
          <div className="text-xl sm:text-2xl font-serif font-light text-stone-800">{CLINIC_METADATA.opdHours}</div>
          <p className="text-xs text-stone-500 font-light">Monday to Saturday evening consultations.</p>
        </div>
        <div className="space-y-2 p-6 bg-[#faf1eb] border border-stone-200/50">
          <div className="text-[10px] tracking-widest uppercase font-mono text-stone-500">Day Care Facilities</div>
          <div className="text-xl sm:text-2xl font-serif font-light text-stone-800">{CLINIC_METADATA.daycareHours}</div>
          <p className="text-xs text-stone-500 font-light">Available for observational, fluid & injection care.</p>
        </div>
        <div className="space-y-2 p-6 bg-[#faf1eb] border border-stone-200/50">
          <div className="text-[10px] tracking-widest uppercase font-mono text-stone-500">Lab Diagnostic Partner</div>
          <div className="text-xl sm:text-2xl font-serif font-light text-stone-800">Dr. Lal Pathlabs</div>
          <p className="text-xs text-stone-500 font-light">Authorised collection centre on premises for tests.</p>
        </div>
      </section>

      {/* Section 01 — Philosophy */}
      <section className="border-t border-stone-200 pt-16">
        <p className="text-[10px] sm:text-xs tracking-widest uppercase font-mono text-stone-400 mb-8">01 — CLINICAL PHILOSOPHY</p>
        <div className="max-w-4xl space-y-6">
          <blockquote className="text-2xl sm:text-4xl font-serif font-light text-stone-800 leading-snug">
            "We believe that healing begins with <span className="italic text-emerald-800">diligent listening</span> and accurate clinical diagnostics. Our clinic aims to bridge critical emergency, chronic management, and day-care support for families."
          </blockquote>
          <cite className="block text-xs sm:text-sm font-sans font-light tracking-wide text-stone-500 not-italic">
            — {CLINIC_METADATA.doctorName}
          </cite>
        </div>
      </section>

      {/* Section 02 — Highlighted Facilities */}
      <section className="border-t border-stone-200 pt-16 space-y-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
          <div className="space-y-4 max-w-2xl">
            <p className="text-[10px] sm:text-xs tracking-widest uppercase font-mono text-stone-400">02 — FEATURED FACILITIES</p>
            <h2 className="text-3xl sm:text-4xl font-serif font-light text-stone-900 leading-tight">
              Day Care Clinic & <br />
              Authorized Pathlabs.
            </h2>
            <p className="text-xs sm:text-sm font-light text-stone-600 leading-relaxed">
              We offer modern medical treatment equipment including ECG, nebulization systems, IV therapy, custom treatment wards, and genuine discounted medications through ARUGN pharmacy.
            </p>
          </div>
          <button 
            id="view-portfolio-index"
            onClick={() => onSetTab('works')}
            className="text-xs text-emerald-800 tracking-widest uppercase border-b border-emerald-800 hover:border-transparent transition-all py-1 font-semibold whitespace-nowrap"
          >
            Explore Services
          </button>
        </div>

        {/* Custom Ward Image Gallery preview */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-3">
            <img
              src={CLINIC_WARD_IMAGE}
              alt="Clinical Observation Beds Setup"
              className="w-full aspect-[4/3] object-cover border border-stone-200"
              referrerPolicy="no-referrer"
            />
            <p className="text-[11px] font-mono uppercase tracking-widest text-stone-500">Day Care Ward Beds Setup</p>
          </div>
          <div className="space-y-3">
            <img
              src={CLINIC_ENTRANCE_IMAGE}
              alt="Arugn Clinic & Pharmacy Shopfront"
              className="w-full aspect-[4/3] object-cover border border-stone-200"
              referrerPolicy="no-referrer"
            />
            <p className="text-[11px] font-mono uppercase tracking-widest text-stone-500">Clinic Frontage & Pharmacy Shop</p>
          </div>
        </div>
      </section>

      {/* Quick visual checklist of clinical facilities */}
      <section className="border-t border-stone-200 pt-16 space-y-8">
        <p className="text-[10px] sm:text-xs tracking-widest uppercase font-mono text-stone-400">03 — FULL CLINICAL CAPABILITIES</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {FACILITIES.map((fac, idx) => (
            <div key={idx} className="p-6 bg-stone-50 border border-stone-200/50 hover:border-stone-400 transition-all duration-300">
              <span className="text-stone-300 text-xs font-mono block mb-2">0{idx + 1}.</span>
              <h4 className="font-serif text-lg font-medium text-stone-900 mb-1">{fac.title}</h4>
              <p className="text-xs text-stone-600 font-light leading-relaxed">{fac.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Clinic Location Profile */}
      <section className="border-t border-stone-200 pt-16 space-y-12">
        <div className="max-w-2xl space-y-4">
          <p className="text-[10px] sm:text-xs tracking-widest uppercase font-mono text-stone-400">THE PRACTICE</p>
          <h2 className="text-3xl sm:text-4xl font-serif font-light text-stone-900 leading-tight">
            Minal Residency, Bhopal.
          </h2>
          <p className="text-xs sm:text-sm font-light text-stone-600 leading-relaxed">
            Located conveniently on J.K. Road near the main shopping street. Dr. Soni provides physical clinical care and consultations from late evenings, plus whole day-care facilities.
          </p>
        </div>

        {/* Location profile box */}
        <div className="p-8 bg-stone-50 border border-stone-200/50 space-y-4">
          <p className="text-xs font-mono uppercase text-stone-400 tracking-widest">Clinic Address</p>
          <p className="text-lg sm:text-xl font-serif text-stone-800 max-w-xl leading-relaxed">
            {CLINIC_METADATA.address}
          </p>
          <div className="pt-4 border-t border-stone-200 flex flex-col sm:flex-row sm:items-center gap-6 justify-between">
            <div>
              <p className="text-[9px] font-mono uppercase text-stone-400">Direct Mobile No.</p>
              <p className="text-lg font-mono font-medium text-stone-900">{CLINIC_METADATA.phone}</p>
            </div>
            <button
              onClick={() => onSetTab('contact')}
              className="px-6 py-3 bg-[#141414] text-white text-xs uppercase tracking-widest font-mono hover:bg-stone-800 transition-all"
            >
              Get Directions & Hours →
            </button>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
