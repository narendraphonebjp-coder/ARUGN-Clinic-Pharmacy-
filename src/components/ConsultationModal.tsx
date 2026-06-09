import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';
import { CLINIC_METADATA, SERVICES } from '../data';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ConsultationModal({ isOpen, onClose }: ConsultationModalProps) {
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
      alert("Please fill in required fields (Patient Name and Mobile Number).");
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
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
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-xs"
          />

          {/* Modal content body */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ duration: 0.3 }}
            className="relative w-full max-w-2xl bg-[#FAF1EB] border border-stone-200 p-6 sm:p-10 text-stone-900 shadow-2xl z-10 max-h-[90vh] overflow-y-auto no-scrollbar rounded-none font-sans"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute right-4 top-4 text-stone-500 hover:text-stone-900 transition-colors p-2"
              aria-label="Close modal"
            >
              <X className="w-5 h-5 pointer-events-none" />
            </button>

            {/* Success State */}
            {isSubmitted ? (
              <div className="py-12 text-center space-y-6">
                <div className="w-16 h-16 rounded-full bg-emerald-50 border border-emerald-100 flex items-center justify-center mx-auto animate-pulse">
                  <span className="text-emerald-800 text-xl font-bold font-serif">✓</span>
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-serif font-light text-stone-900">Appointment Registered</h3>
                  <p className="text-xs sm:text-sm text-stone-600 font-light max-w-md mx-auto leading-relaxed">
                    Your request was recorded on active clinic logs. Dr. Soni or our clinical administrator will reach out to you directly on <span className="font-semibold text-stone-900">{CLINIC_METADATA.phone}</span> to confirm your evening OPD slot.
                  </p>
                </div>
                <button
                  onClick={onClose}
                  className="px-6 py-3 bg-[#141414] text-white text-xs tracking-widest uppercase hover:bg-stone-800 transition-colors font-medium rounded-none"
                >
                  Close Window
                </button>
              </div>
            ) : (
              <div className="space-y-8">
                {/* Header info */}
                <div>
                  <p className="text-[10px] tracking-widest uppercase font-mono text-emerald-800 font-semibold mb-1">
                    {CLINIC_METADATA.name} · OPD & DAY CARE ENQUIRY
                  </p>
                  <h2 className="text-2xl sm:text-3xl font-serif font-light text-stone-900">
                    Request an Appointment
                  </h2>
                </div>

                {/* Form layout */}
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Full Name */}
                    <div className="flex flex-col gap-1 sm:col-span-2">
                      <label className="text-[9px] tracking-widest uppercase font-mono text-stone-500 font-semibold">
                        Patient's Full Name *
                      </label>
                      <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        required
                        className="w-full bg-transparent border-b border-stone-300 focus:border-stone-900 outline-none pb-2 text-stone-800 font-light text-sm"
                        placeholder="Enter patient full name"
                      />
                    </div>

                    {/* Telephone */}
                    <div className="flex flex-col gap-1">
                      <label className="text-[9px] tracking-widest uppercase font-mono text-stone-950 font-bold">
                        Mobile Number *
                      </label>
                      <input
                        type="tel"
                        name="telephone"
                        value={formData.telephone}
                        onChange={handleChange}
                        required
                        className="w-full bg-transparent border-b border-stone-300 focus:border-stone-900 outline-none pb-2 text-stone-900 font-medium text-sm"
                        placeholder="e.g. 089629 18193"
                      />
                    </div>

                    {/* Email */}
                    <div className="flex flex-col gap-1">
                      <label className="text-[9px] tracking-widest uppercase font-mono text-stone-500 font-semibold">
                        Email Address (Optional)
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full bg-transparent border-b border-stone-300 focus:border-stone-900 outline-none pb-2 text-stone-800 font-light text-sm"
                        placeholder="Enter email if preferred"
                      />
                    </div>

                    {/* Service select */}
                    <div className="flex flex-col gap-1 sm:col-span-2">
                      <label className="text-[9px] tracking-widest uppercase font-mono text-stone-500 font-semibold">
                        Clinical Interest / Primary Symptom
                      </label>
                      <div className="relative">
                        <select
                          name="serviceOfInterest"
                          value={formData.serviceOfInterest}
                          onChange={handleChange}
                          className="w-full bg-transparent border-b border-stone-300 focus:border-stone-900 outline-none pb-2 text-stone-800 font-light text-sm appearance-none cursor-pointer"
                        >
                          <option value="">Select consultation type...</option>
                          <option value="general-opd">General OPD Consultation (Evening)</option>
                          <option value="chronic-care">Chronic Disease Management (Diabetes, HTN)</option>
                          <option value="day-care-nebulization">Day Care (Nebulization, IV/IM, Dressing)</option>
                          <option value="blood-tests">Dr Lal PathLabs collection on premises</option>
                          {SERVICES.map((serv) => (
                            <option key={serv.id} value={serv.id}>{serv.title} - {serv.category}</option>
                          ))}
                        </select>
                        <div className="absolute right-2 top-1.5 pointer-events-none text-stone-400 text-[10px]">
                          ▼
                        </div>
                      </div>
                    </div>

                    {/* Message */}
                    <div className="flex flex-col gap-1 sm:col-span-2">
                      <label className="text-[9px] tracking-widest uppercase font-mono text-stone-500 font-semibold">
                        Symptoms / Brief History
                      </label>
                      <textarea
                        name="message"
                        rows={3}
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full bg-transparent border-b border-stone-300 focus:border-stone-900 outline-none pb-2 text-stone-800 font-light text-sm resize-none"
                        placeholder="Please describe symptoms, ongoing medical therapies or parameters (optional)."
                      />
                    </div>
                  </div>

                  {/* Submission line */}
                  <div className="flex justify-between items-center pt-4">
                    <p className="text-[9px] text-stone-500 italic max-w-xs">
                      * OPD Timings are strictly 6:30 PM to 10:00 PM (Monday — Saturday).
                    </p>
                    <button
                      type="submit"
                      className="px-6 py-3.5 bg-[#141414] text-white text-xs tracking-widest uppercase hover:bg-stone-800 transition-colors disabled:opacity-50 font-medium rounded-none inline-flex items-center gap-2"
                    >
                      {isSubmitting ? "Submitting..." : "Send Request →"}
                    </button>
                  </div>
                </form>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
