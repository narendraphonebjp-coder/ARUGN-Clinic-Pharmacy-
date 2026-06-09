import { motion } from 'motion/react';
import { PORTRAIT_IMAGE, TIMELINE_ITEMS, CLINIC_METADATA } from '../data';

export default function BiographyView() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
      className="space-y-24 md:space-y-36 pb-20 text-stone-900"
    >
      {/* Header & Bio Section */}
      <section className="space-y-12">
        <div className="space-y-6">
          <p className="text-[10px] sm:text-xs tracking-widest uppercase font-mono text-stone-400">BIOGRAPHY</p>
          <h1 className="text-4xl sm:text-6xl font-light tracking-tight font-serif text-stone-900 leading-tight">
            A physician's <br className="sm:hidden" />
            <span className="italic font-light text-stone-600">first duty</span> <br className="hidden sm:block" />
            is clinical diligence.
          </h1>
        </div>

        {/* Bio Portrait */}
        <div className="w-full">
          <img
            src={PORTRAIT_IMAGE}
            alt="Dr. Abhinay Krishna Soni portrait"
            className="w-full aspect-[4/3] sm:aspect-[16/10] object-cover border border-stone-200"
            referrerPolicy="no-referrer"
          />
        </div>

        {/* Narrative Description with elegant drop cap */}
        <div className="max-w-2xl text-stone-800 text-sm sm:text-base font-sans font-light leading-relaxed space-y-6 pt-6">
          <p className="relative pl-0 sm:pl-4">
            <span className="float-left text-7xl font-serif font-light text-stone-900 leading-[0.8] mr-3 mt-1 cursor-default select-none">
              D
            </span>
            r. Abhinay Krishna Soni, MBBS, MD (Medicine), is a dedicated consultant physician based in Bhopal, Madhya Pradesh. Known for his comprehensive clinical understanding and meticulous diagnosis, Dr. Soni founded ARUGN Clinic & Pharmacy to offer a compassionate, evidence-based healthcare solution for families in Bhopal.
          </p>
          <p>
            With formal medical registrations and certifications (Reg. No. 18991), Dr. Soni specializes in internal medicine and chronic care. He has years of clinical practice handling diverse health disorders ranging from general ailments—such as viral fevers, body pain, and diarrhoea—to highly critical chronic diseases including Diabetes, Hypertension, Coronary Artery Diseases, and Stroke.
          </p>
          <p>
            ARUGN Clinic & day-care ward is situated at Raj Avenue, Minal Residency Mall on J.K. Road. Designed as a community health anchor, the clinic integrates an authorized collection center for Dr. Lal Pathlabs, providing accurate diagnostic processing alongside its physical practitioner services.
          </p>
          <p>
            Dr. Soni's focus lies strictly on personalized disease management and preventative care. He believes that primary health care should be accessible, high-fidelity, and strictly honest, which is why the clinic has expanded to feature continuous oxygen assistance, nebulization arrays, custom Day-care observation beds, and genuine medications through ARUGN's in-house pharmacy with authentic discount dispatch.
          </p>
        </div>
      </section>

      {/* Section 03 - Training chronologies */}
      <section className="border-t border-stone-200 pt-16 space-y-12">
        <div>
          <p className="text-[10px] sm:text-xs tracking-widest uppercase font-mono text-stone-400 mb-2">CREDENTIALS</p>
          <h2 className="text-3xl sm:text-4xl font-serif font-light text-stone-900 leading-tight">
            Education & Licensing.
          </h2>
        </div>

        {/* Timeline Rows */}
        <div className="divide-y divide-stone-200 border-t border-b border-stone-200">
          {TIMELINE_ITEMS.map((item, idx) => (
            <div key={idx} className="grid grid-cols-12 py-6 gap-4 text-xs sm:text-sm">
              {/* Year column */}
              <div className="col-span-3 sm:col-span-2 font-serif text-emerald-800 text-lg leading-none">
                {item.year}
              </div>
              {/* Details column */}
              <div className="col-span-9 sm:col-span-10 space-y-1">
                <h4 className="font-semibold text-stone-900">{item.title}</h4>
                <p className="text-stone-500 font-light flex flex-col sm:flex-row sm:items-center sm:gap-2">
                  <span>{item.institution}</span>
                  {item.location && (
                    <>
                      <span className="hidden sm:inline text-stone-300">—</span>
                      <span className="italic text-stone-400">{item.location}</span>
                    </>
                  )}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Trust & Accolades Section */}
      <section className="border-t border-stone-200 pt-16 space-y-8">
        <div>
          <p className="text-[10px] sm:text-xs tracking-widest uppercase font-mono text-stone-400 mb-2">COMMITMENT TO QUALITY</p>
          <h2 className="text-3xl sm:text-4xl font-serif font-light text-stone-900 leading-tight">
            Pristine patient care.
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm text-stone-700 leading-relaxed font-light">
          <div className="space-y-4">
            <h4 className="font-serif text-lg font-medium text-stone-900">Patient-Centric Treatment</h4>
            <p>
              Every consulting session under Dr. Soni is built on patient-first diagnostics. We avoid over-prescription of pharmaceutical agents, preferring strategic lifestyle interventions supported by accurate clinical chemistry profiling.
            </p>
          </div>
          <div className="space-y-4">
            <h4 className="font-serif text-lg font-medium text-stone-900">Bhopal Community Pillar</h4>
            <p>
              By offering extended OPD hours from 6:30 PM to 10:00 PM and functioning with Dr. Lal Pathlabs collection systems, we provide dependable, after-office clinical support to working professionals and residents of Bhopal.
            </p>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
