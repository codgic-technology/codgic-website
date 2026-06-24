import React, { useState } from 'react';
import { 
  Send, 
  MapPin, 
  Mail, 
  Phone,
  FileCheck2, 
  RefreshCw,
  Sparkles,
  Info
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
  service?: string;
}

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [service, setService] = useState('Web');
  const [message, setMessage] = useState('');

  // Validation state
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [submitting, setSubmitting] = useState(false);
  const [ticket, setTicket] = useState<any>(null);

  // Validate single field helper
  const validateField = (field: string, val: string) => {
    const newErrors = { ...errors };
    if (field === 'name') {
      if (!val.trim()) {
        newErrors.name = 'Identity Name is required';
      } else if (val.trim().length < 2) {
        newErrors.name = 'Name must be at least 2 characters';
      } else {
        delete newErrors.name;
      }
    }
    if (field === 'email') {
      const emailRegex = /^\S+@\S+\.\S+$/;
      if (!val.trim()) {
        newErrors.email = 'Email address is required';
      } else if (!emailRegex.test(val)) {
        newErrors.email = 'Provide a valid email format';
      } else {
        delete newErrors.email;
      }
    }
    if (field === 'phone') {
      const phoneRegex = /^[0-9+\s-]{8,15}$/;
      if (!val.trim()) {
        newErrors.phone = 'Phone number is required';
      } else if (!phoneRegex.test(val)) {
        newErrors.phone = 'Format: at least 8-15 digits';
      } else {
        delete newErrors.phone;
      }
    }
    if (field === 'message') {
      if (!val.trim()) {
        newErrors.message = 'Inquiry details are required';
      } else if (val.trim().length < 10) {
        newErrors.message = 'Brief your requirements in at least 10 chars';
      } else {
        delete newErrors.message;
      }
    }
    setErrors(newErrors);
  };

  const handleInputChange = (field: string, value: string) => {
    if (field === 'name') setName(value);
    if (field === 'email') setEmail(value);
    if (field === 'phone') setPhone(value);
    if (field === 'service') setService(value);
    if (field === 'message') setMessage(value);
    
    if (touched[field]) {
      validateField(field, value);
    }
  };

  const handleBlur = (field: string) => {
    setTouched(prev => ({ ...prev, [field]: true }));
    let val = '';
    if (field === 'name') val = name;
    if (field === 'email') val = email;
    if (field === 'phone') val = phone;
    if (field === 'message') val = message;
    validateField(field, val);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Mark all as touched
    const allTouched = { name: true, email: true, phone: true, message: true, service: true };
    setTouched(allTouched);

    // Validate all
    const tempErrors: FormErrors = {};
    if (!name.trim() || name.trim().length < 2) tempErrors.name = 'Name must be at least 2 characters';
    const emailRegex = /^\S+@\S+\.\S+$/;
    if (!email.trim() || !emailRegex.test(email)) tempErrors.email = 'Provide a valid email format';
    const phoneRegex = /^[0-9+\s-]{8,15}$/;
    if (!phone.trim() || !phoneRegex.test(phone)) tempErrors.phone = 'Format: 8-15 digits';
    if (!message.trim() || message.trim().length < 10) tempErrors.message = 'Brief your requirements in at least 10 chars';

    if (Object.keys(tempErrors).length > 0) {
      setErrors(tempErrors);
      return;
    }

    setSubmitting(true);
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, phone, service, message }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to transmit parameters to the backend.');
      }

      setTicket(data.ticket);

      // Reset Form fields
      setName('');
      setEmail('');
      setPhone('');
      setMessage('');
      setErrors({});
      setTouched({});
    } catch (err: any) {
      console.error('[Contact Form] Submission failed:', err);
      setErrors({
        message: err.message || 'Transmission failed. Under active maintenance. Please contact info@codgic.in directly.',
      });
    } finally {
      setSubmitting(false);
    }
  };



  return (
    <section id="contact" className="py-24 relative bg-brand-black overflow-hidden border-t border-white/[0.02]">
      {/* Absolute Backdrop ambient layers */}
      <div className="absolute top-[35%] left-[-10%] w-[380px] h-[380px] bg-brand-blue/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[10%] right-[-10%] w-[380px] h-[380px] bg-brand-purple/5 rounded-full blur-[110px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Form & Title heading */}
          <div className="lg:col-span-6 w-full">
            <div className="mb-10 text-left">
              <div className="flex items-center gap-2 mb-3 bg-white/[0.02] border border-white/[0.05] w-fit px-3 py-1 rounded-full backdrop-blur-md">
                <span className="h-1.5 w-1.5 bg-brand-blue rounded-full animate-pulse" />
                <span className="text-xs font-mono tracking-widest text-brand-blue uppercase font-bold">TRANSMIT BRIEF</span>
              </div>
              <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl text-white tracking-tight leading-none">
                Let's Formulate <br />
                <span className="gradient-text-blue-purple">Your System Blueprint.</span>
              </h2>
              <p className="mt-4 text-gray-400 font-sans text-sm leading-relaxed max-w-lg">
                Submit your tech parameters below. Aarav will establish direct communication with a conceptual technical analysis blueprint within 12 Core working hours.
              </p>
            </div>

            <AnimatePresence mode="wait">
              {!ticket ? (
                <motion.div
                  key="contact-form-case"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.3 }}
                  className="bg-brand-card/40 border border-white/[0.05] p-6 sm:p-8 rounded-3xl backdrop-blur-md"
                >
                  <form onSubmit={handleSubmit} className="flex flex-col gap-5 sm:gap-6 text-left">
                    
                    {/* Name input */}
                    <div className="flex flex-col">
                      <label htmlFor="contact-name" className="text-[10px] font-mono text-gray-400 uppercase tracking-widest mb-1.5 font-bold flex justify-between">
                        <span>Identity Name *</span>
                        {touched.name && errors.name && <span className="text-red-400 font-mono tracking-normal text-[9px] uppercase">{errors.name}</span>}
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        value={name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        onBlur={() => handleBlur('name')}
                        placeholder="e.g., Aarav Patel"
                        className={`w-full bg-white/[0.02] border focus:bg-white/[0.04] outline-none rounded-xl px-4 py-3 text-xs sm:text-sm text-white transition-all font-sans ${
                          touched.name && errors.name 
                            ? 'border-red-500/50 shadow-[0_0_10px_rgba(239,68,68,0.15)] bg-red-500/[0.01]' 
                            : 'border-white/[0.06] focus:border-brand-blue focus:shadow-[0_0_15px_rgba(59,130,246,0.3)]'
                        }`}
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      {/* Email input */}
                      <div className="flex flex-col">
                        <label htmlFor="contact-email" className="text-[10px] font-mono text-gray-400 uppercase tracking-widest mb-1.5 font-bold flex justify-between">
                          <span>Secure Email *</span>
                          {touched.email && errors.email && <span className="text-red-400 font-mono tracking-normal text-[9px] uppercase">{errors.email}</span>}
                        </label>
                        <input
                          id="contact-email"
                          type="text"
                          value={email}
                          onChange={(e) => handleInputChange('email', e.target.value)}
                          onBlur={() => handleBlur('email')}
                          placeholder="partner@organization.com"
                          className={`w-full bg-white/[0.02] border focus:bg-white/[0.04] outline-none rounded-xl px-4 py-3 text-xs sm:text-sm text-white transition-all font-sans ${
                            touched.email && errors.email 
                              ? 'border-red-500/50 shadow-[0_0_10px_rgba(239,68,68,0.15)] bg-red-500/[0.01]' 
                              : 'border-white/[0.06] focus:border-brand-blue focus:shadow-[0_0_15px_rgba(59,130,246,0.3)]'
                          }`}
                        />
                      </div>

                      {/* Phone Input */}
                      <div className="flex flex-col">
                        <label htmlFor="contact-phone" className="text-[10px] font-mono text-gray-400 uppercase tracking-widest mb-1.5 font-bold flex justify-between">
                          <span>Phone Number *</span>
                          {touched.phone && errors.phone && <span className="text-red-400 font-mono tracking-normal text-[9px] uppercase">{errors.phone}</span>}
                        </label>
                        <input
                          id="contact-phone"
                          type="text"
                          value={phone}
                          onChange={(e) => handleInputChange('phone', e.target.value)}
                          onBlur={() => handleBlur('phone')}
                          placeholder="0123456789"
                          className={`w-full bg-white/[0.02] border focus:bg-white/[0.04] outline-none rounded-xl px-4 py-3 text-xs sm:text-sm text-white transition-all font-sans ${
                            touched.phone && errors.phone 
                              ? 'border-red-500/50 shadow-[0_0_10px_rgba(239,68,68,0.15)] bg-red-500/[0.01]' 
                              : 'border-white/[0.06] focus:border-brand-blue focus:shadow-[0_0_15px_rgba(59,130,246,0.3)]'
                          }`}
                        />
                      </div>
                    </div>

                    {/* Service required selection drop */}
                    <div className="flex flex-col">
                      <label htmlFor="contact-service" className="text-[10px] font-mono text-gray-400 uppercase tracking-widest mb-1.5 font-bold">
                        Service Required
                      </label>
                      <div className="relative">
                        <select
                          id="contact-service"
                          value={service}
                          onChange={(e) => handleInputChange('service', e.target.value)}
                          className="w-full bg-brand-black border border-white/[0.06] focus:border-brand-blue focus:shadow-[0_0_15px_rgba(59,130,246,0.2)] outline-none rounded-xl px-4 py-3 text-xs sm:text-sm text-white transition-all font-mono appearance-none cursor-pointer"
                        >
                          <option value="Web">Web Development (React / Next.js)</option>
                          <option value="App">App Development (React Native / Flutter)</option>
                          <option value="Video">Video Editing (Post-Production & Motion)</option>
                          <option value="Other">Other Integration Consultation</option>
                        </select>
                        <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-500 text-xs">
                          ▼
                        </div>
                      </div>
                    </div>

                    {/* Detailed message area */}
                    <div className="flex flex-col">
                      <label htmlFor="contact-message" className="text-[10px] font-mono text-gray-400 uppercase tracking-widest mb-1.5 font-bold flex justify-between">
                        <span>Project Parameters & Brief *</span>
                        {touched.message && errors.message && <span className="text-red-400 font-mono tracking-normal text-[9px] uppercase">{errors.message}</span>}
                      </label>
                      <textarea
                        id="contact-message"
                        value={message}
                        onChange={(e) => handleInputChange('message', e.target.value)}
                        onBlur={() => handleBlur('message')}
                        placeholder="Tell Aarav about the core parameters, required tools, screens needed, or timeline restrictions..."
                        rows={5}
                        className={`w-full bg-white/[0.02] border focus:bg-white/[0.04] outline-none rounded-2xl px-4 py-3.5 text-xs sm:text-sm text-white transition-all font-sans resize-none leading-relaxed ${
                          touched.message && errors.message 
                            ? 'border-red-500/50 shadow-[0_0_10px_rgba(239,68,68,0.15)] bg-red-500/[0.01]' 
                            : 'border-white/[0.06] focus:border-brand-blue focus:shadow-[0_0_15px_rgba(59,130,246,0.3)]'
                        }`}
                      />
                    </div>

                    {/* Submission button */}
                    <button
                      type="submit"
                      disabled={submitting}
                      className="w-full group font-display font-bold text-xs tracking-wider bg-white hover:bg-gray-200 text-brand-black py-4 rounded-xl transition-all shadow-xl shadow-white/5 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                    >
                      {submitting ? (
                        <>
                          <RefreshCw className="h-4 w-4 animate-spin text-brand-black" />
                          <span>Establishing Secure Transmission...</span>
                        </>
                      ) : (
                        <>
                          <Send className="h-3.5 w-3.5 text-brand-black" />
                          <span>Submit Inquiry Parameters</span>
                        </>
                      )}
                    </button>
                  </form>
                </motion.div>
              ) : (
                /* Ticket Receipt terminal Confirmation */
                <motion.div
                  key="contact-receipt"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ type: 'spring', damping: 25, stiffness: 350 }}
                  className="bg-brand-card border border-brand-indigo/30 p-6 sm:p-8 rounded-3xl relative overflow-hidden shadow-2xl text-left font-mono text-xs"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-brand-blue/15 rounded-full blur-2xl pointer-events-none" />
                  
                  <div className="flex items-center justify-between border-b border-dashed border-white/[0.12] pb-4 mb-5">
                    <div className="flex items-center gap-2 text-brand-blue font-bold text-[11px] uppercase tracking-widest">
                      <FileCheck2 className="h-4 w-4 text-emerald-400" />
                      <span>SECURE TRANSMISSION COMPLETE</span>
                    </div>
                    <span className="text-[10px] text-gray-500">MK_363020</span>
                  </div>

                  <div className="bg-brand-black/95 rounded-2xl p-4 sm:p-5 border border-white/[0.04] text-xs leading-relaxed space-y-3.5 relative">
                    <div className="absolute left-1/2 -top-[6px] -translate-x-1/2 text-gray-700 text-[10px] tracking-[6px]">
                      •••••••••••••••••••••
                    </div>
                    
                    <div className="flex justify-between border-b border-white/[0.05] pb-2 text-[11px]">
                      <span className="text-gray-500 uppercase">TICKET NUMBER</span>
                      <span className="text-white text-brand-blue font-bold">{ticket.id}</span>
                    </div>

                    <div className="flex justify-between text-[11px]">
                      <span className="text-gray-500 uppercase font-semibold">PARTNER</span>
                      <span className="text-gray-300 font-sans">{ticket.name}</span>
                    </div>

                    <div className="flex justify-between text-[11px]">
                      <span className="text-gray-500 uppercase font-semibold">COMMUNICATION</span>
                      <span className="text-gray-300">{ticket.email}</span>
                    </div>

                    <div className="flex justify-between text-[11px]">
                      <span className="text-gray-500 uppercase font-semibold">TELEPHONE</span>
                      <span className="text-gray-300">{ticket.phone}</span>
                    </div>

                    <div className="flex justify-between text-[11px]">
                      <span className="text-gray-500 uppercase font-semibold">SERVICE DEPLOY</span>
                      <span className="text-brand-purple uppercase">{ticket.service} DEVELOPMENT</span>
                    </div>

                    <div className="pt-3 border-t border-dashed border-white/[0.08] text-[11px]">
                      <span className="text-gray-500 uppercase block mb-1">RECORDED PARAMETERS:</span>
                      <div className="max-h-[120px] overflow-y-auto bg-brand-dark/50 p-2.5 rounded border border-white/[0.02] font-sans text-gray-400">
                        {ticket.message}
                      </div>
                    </div>
                  </div>

                  <div className="mt-5 p-4 bg-brand-blue/10 border border-brand-blue/20 rounded-2xl flex gap-3 text-[11px] font-sans text-gray-300 leading-relaxed">
                    <Info className="h-5 w-5 text-brand-blue flex-shrink-0 mt-0.5" />
                    <span>Your request ticket was archived directly into Aarav's developer workspace. Expect customized solution parameters sent to your email contact shortly.</span>
                  </div>

                  <button
                    onClick={() => setTicket(null)}
                    className="w-full mt-5 py-3 rounded-xl border border-white/[0.08] hover:bg-white/[0.02] text-gray-400 hover:text-white font-display text-[11px] font-bold tracking-wider uppercase transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <RefreshCw className="h-3.5 w-3.5" />
                    Reset & Transmit Another Brief
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Right Column: Contact details & Service Guarantees Card */}
          <div className="lg:col-span-5 w-full flex flex-col gap-6 self-stretch">
            
            {/* Contact Details Frame */}
            <div className="bg-brand-card/40 border border-white/[0.05] p-6 rounded-3xl backdrop-blur-md text-left">
              <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest block mb-4">
                Operational Coordinates
              </span>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-xl bg-brand-blue/10 border border-brand-blue/20 flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-5 w-5 text-brand-blue" />
                  </div>
                  <div>
                    <h4 className="text-[10px] font-mono text-gray-500 uppercase">Primary Office Address</h4>
                    <p className="text-xs sm:text-sm font-sans text-gray-200 font-bold mt-1 leading-snug">
                      Near Bus Stop, Surendranagar, <br />
                      Gujarat — 363001
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-6">
                  <div className="flex items-start gap-4">
                    <div className="h-10 w-10 rounded-xl bg-brand-purple/10 border border-brand-purple/20 flex items-center justify-center flex-shrink-0">
                      <Mail className="h-5 w-5 text-brand-purple" />
                    </div>
                    <div>
                      <h4 className="text-[10px] font-mono text-gray-500 uppercase font-semibold">Direct Email</h4>
                      <a href="mailto:info@codgic.in" className="text-xs sm:text-sm font-mono text-brand-blue hover:underline break-all mt-1 block">
                        info@codgic.in
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="h-10 w-10 rounded-xl bg-brand-blue/10 border border-brand-blue/20 flex items-center justify-center flex-shrink-0">
                      <Phone className="h-5 w-5 text-brand-blue animate-pulse" />
                    </div>
                    <div>
                      <h4 className="text-[10px] font-mono text-gray-500 uppercase font-semibold">Mobile & WhatsApp</h4>
                      <a href="https://wa.me/917041844553" target="_blank" rel="noopener noreferrer" className="text-xs sm:text-sm font-mono text-slate-300 hover:text-white mt-1 block">
                        +91 70418 44553
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Service Guarantee Card */}
            <div className="bg-brand-card/40 border border-white/[0.05] p-6 rounded-3xl backdrop-blur-md text-left">
              <span className="text-[10px] font-mono text-brand-purple uppercase tracking-widest block mb-4 font-bold flex items-center gap-1.5">
                <Sparkles className="h-3.5 w-3.5 text-brand-purple" />
                SERVICE TRANSMISSION GUARANTEES
              </span>
              
              <div className="space-y-4 text-xs font-sans text-gray-400">
                <div className="border-l-2 border-brand-blue pl-3 py-0.5">
                  <h4 className="font-mono text-white text-[10px] uppercase font-bold tracking-wider">Parameters Audit</h4>
                  <p className="mt-1 text-gray-400 leading-relaxed">
                    Aarav personally reviews all custom briefs and formulates a preliminary codebase architecture proposal within 12 Core business hours.
                  </p>
                </div>

                <div className="border-l-2 border-brand-purple pl-3 py-0.5">
                  <h4 className="font-mono text-white text-[10px] uppercase font-bold tracking-wider">Pragmatic Quality</h4>
                  <p className="mt-1 text-gray-400 leading-relaxed">
                    Every solution aligns with native standards—structured state trees, fully audited UI responsiveness, and strict performance metrics.
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
