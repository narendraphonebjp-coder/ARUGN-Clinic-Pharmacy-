import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CLINIC_METADATA, SERVICES } from '../data';

export default function ContactView() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    telephone: '',
    serviceOfInterest: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.telephone) {
      alert("Please fill in the required fields (Full Name and Mobile/Telephone Number).");
      return;
    }

    setIsSubmitting(true);
    // Simulate API request
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      // Clear form
      setFormData({
        fullName: '',
        email: '',
        telephone: '',
        serviceOfInterest: '',
        message: ''
      });
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
      className="space-y-20 pb-20 text-stone-900 font-sans"
    >
      {/* Contact Head */}
      <section className="space-y-8 pt-6">
        <p className="text-[10px] sm:text-xs tracking-widest uppercase font-mono text-emerald-800 font-semibold">APPOINTMENTS & DIRECTIONS</p>
        <h1 className="text-4xl sm:text-6xl font-light tracking-tight font-serif text-stone-900 leading-tight">
          Consult with <br />
          <span className="italic font-light text-stone-600">Dr. Abhinay Soni</span>.
        </h1>
      </section>

      {/* Booking Form Card */}
      <section className="bg-stone-50 border border-stone-200/50 p-6 sm:p-12">
        <AnimatePresence mode="wait">
          {!isSubmitted ? (
            <motion.form 
              onSubmit={handleSubmit} 
              className="space-y-8"
              initial={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Full Name */}
                <div className="flex flex-col gap-1 md:col-span-2">
                  <label htmlFor="fullName" className="text-[9px] tracking-widest uppercase font-mono text-stone-500 font-semibold">
                    Full Patient Name *
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                    className="w-full bg-transparent border-b border-stone-300 focus:border-stone-900 outline-none py-2 text-stone-800 font-sans font-light text-sm transition-colors animate-none"
                    placeholder="Enter patient full name"
                  />
                </div>

                {/* Telephone */}
                <div className="flex flex-col gap-1">
                  <label htmlFor="telephone" className="text-[9px] tracking-widest uppercase font-mono text-[#141414]/90 font-bold">
                    Mobile / Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="telephone"
                    name="telephone"
                    value={formData.telephone}
                    onChange={handleChange}
                    required
                    className="w-full bg-transparent border-b border-stone-300 focus:border-stone-900 outline-none py-2 text-stone-900 font-sans font-medium text-sm transition-colors animate-none"
                    placeholder="e.g. 089629 18193"
                  />
                </div>

                {/* Email (Optional) */}
                <div className="flex flex-col gap-1">
                  <label htmlFor="email" className="text-[9px] tracking-widest uppercase font-mono text-stone-500 font-semibold">
                    Email Address (Optional)
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b border-stone-300 focus:border-stone-900 outline-none py-2 text-stone-800 font-sans font-light text-sm transition-colors animate-none"
                    placeholder="Enter email if preferred for newsletters/updates"
                  />
                </div>

                {/* Service Select */}
                <div className="flex flex-col gap-1 md:col-span-2">
                  <label htmlFor="serviceOfInterest" className="text-[9px] tracking-widest uppercase font-mono text-stone-500 font-semibold">
                    Clinical Interest / primary Symptom
                  </label>
                  <div className="relative">
                    <select
                      id="serviceOfInterest"
                      name="serviceOfInterest"
                      value={formData.serviceOfInterest}
                      onChange={handleChange}
                      className="w-full bg-transparent border-b border-stone-300 focus:border-stone-900 outline-none py-2.5 text-stone-800 font-sans font-light text-sm transition-colors appearance-none cursor-pointer"
                    >
                      <option value="">Select condition or consultation...</option>
                      <option value="general">General OPD Consultation</option>
                      <option value="diabetes-htn">Diabetes / Hypertension management</option>
                      <option value="daycare">Day Care Admission / Injection Procedure</option>
                      <option value="diagnostic">Dr Lal PathLabs blood collection diagnostics</option>
                      {SERVICES.map((serv) => (
                        <option key={serv.id} value={serv.id}>{serv.title} - {serv.category}</option>
                      ))}
                    </select>
                    <div className="absolute right-2 top-3 pointer-events-none text-stone-400 text-[10px]">
                      ▼
                    </div>
                  </div>
                </div>

                {/* Message */}
                <div className="flex flex-col gap-1 md:col-span-2">
                  <label htmlFor="message" className="text-[9px] tracking-widest uppercase font-mono text-stone-500 font-semibold">
                    Clinical Symptoms / Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b border-stone-300 focus:border-stone-900 outline-none py-2 text-stone-800 font-sans font-light text-sm transition-colors resize-none mt-2"
                    placeholder="Describe any previous clinical history, vital parameters or queries."
                  />
                </div>
              </div>

              {/* Submit */}
              <div className="pt-6">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-8 py-4 bg-[#141414] text-white text-xs tracking-widest uppercase hover:bg-stone-800 transition-colors disabled:opacity-50 font-medium rounded-none inline-flex items-center gap-2"
                >
                  {isSubmitting ? "Submitting Booking..." : "Request Appointment →"}
                </button>
              </div>
            </motion.form>
          ) : (
            <motion.div 
              key="success-message"
              className="py-12 text-center space-y-6"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <div className="w-16 h-16 rounded-full bg-[#faf1eb] border border-stone-200 flex items-center justify-center mx-auto">
                <span className="text-emerald-800 text-xl font-bold font-serif">✓</span>
              </div>
              <div className="space-y-2">
                <h3 className="text-2xl font-serif font-light text-stone-900">Appointment Registered</h3>
                <p className="text-xs sm:text-sm text-stone-600 font-light max-w-md mx-auto leading-relaxed">
                  Your details have been registered on active clinical logs. Dr. Soni's front-desk or clinical dispatch team will call you directly on <span className="font-semibold text-stone-900 font-mono text-sm">{CLINIC_METADATA.phone}</span> within working hours to confirm your evening OPD slot.
                </p>
              </div>
              <button 
                onClick={() => setIsSubmitted(false)}
                className="text-xs uppercase tracking-widest text-[#141414] font-medium border-b border-stone-300 hover:text-emerald-800"
              >
                Book another appointment
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      {/* Clinical Address and timings Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-12 border-t border-stone-200 pt-16">
        {/* Adress block */}
        <div className="space-y-4">
          <p className="text-[10px] tracking-widest uppercase font-mono text-stone-400 font-bold">CLINIC LOCATION</p>
          <div className="font-serif text-xl sm:text-2xl text-stone-800 leading-tight">
            {CLINIC_METADATA.name} <br />
            Shop No 10/11, Raj Avenue, <br />
            Minal Residency, Mall, 1, JK Rd, Bhopal, <br />
            Madhya Pradesh 462041
          </div>
          <div className="font-mono text-xs text-stone-500 space-y-1 pt-2">
            <p className="text-emerald-800 font-semibold text-sm">Mob: {CLINIC_METADATA.phone}</p>
            <p className="text-stone-400">Reg. Clinic Certification: {CLINIC_METADATA.registration}</p>
          </div>
        </div>

        {/* Timings summary */}
        <div className="space-y-4">
          <p className="text-[10px] tracking-widest uppercase font-mono text-stone-400 font-bold">OPERATING HOURS</p>
          <div className="divide-y divide-stone-200 border-t border-b border-stone-200 py-2 text-stone-800 text-xs sm:text-sm">
            <div className="flex justify-between py-2">
              <span className="font-medium text-stone-950">OPD Consultation Consultations</span>
              <span className="font-mono">{CLINIC_METADATA.opdHours} <span className="text-[11px] text-stone-400 font-sans block text-right">(Mon - Sat)</span></span>
            </div>
            <div className="flex justify-between py-2">
              <span className="font-medium text-stone-950">Day Care Emergency Facility</span>
              <span className="font-mono">{CLINIC_METADATA.daycareHours}</span>
            </div>
            <div className="flex justify-between py-2">
              <span className="font-medium text-stone-950">Dr Lal PathLabs collection center</span>
              <span className="font-mono">8:00 AM To 8:00 PM</span>
            </div>
          </div>
        </div>
      </section>

      {/* Disclaimers */}
      <footer className="border-t border-stone-200/50 pt-10 text-[11px] sm:text-xs text-stone-500 leading-relaxed font-light max-w-4xl">
        Arugn Clinic operates fully compliant clinical systems in Bhopal. In case of acute cardiac or neurological emergencies outside regular OPD hours, immediately dial central emergency lines or visit nearest tertiary intensive hospital facilities.
      </footer>
    </motion.div>
  );
}
