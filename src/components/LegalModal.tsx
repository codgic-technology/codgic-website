import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ShieldCheck, FileText, Scale, Coins, Search } from 'lucide-react';

interface LegalModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultTab?: 'privacy' | 'terms' | 'refund' | 'contact';
}

export default function LegalModal({ isOpen, onClose, defaultTab = 'privacy' }: LegalModalProps) {
  const [activeTab, setActiveTab] = useState<'privacy' | 'terms' | 'refund' | 'contact'>(defaultTab);
  const [searchQuery, setSearchQuery] = useState('');

  // Sychronize tab selection if defaultTab changes when opened
  React.useEffect(() => {
    if (isOpen) {
      setActiveTab(defaultTab);
      setSearchQuery('');
    }
  }, [isOpen, defaultTab]);

  const tabs = [
    { id: 'privacy' as const, label: 'Website Privacy Policy', icon: ShieldCheck, category: 'Data & Security' },
    { id: 'terms' as const, label: 'Terms & Conditions', icon: FileText, category: 'Contracts' },
    { id: 'refund' as const, label: 'Refund Policy', icon: Coins, category: 'Financials' },
    { id: 'contact' as const, label: 'Legal Contact', icon: Scale, category: 'Assistance' },
  ];

  // Professional Legal Text Contents
  const content = {
    privacy: {
      title: 'Privacy Policy',
      lastUpdated: 'June 19, 2026',
      sections: [
        {
          heading: '1. Information We Collect',
          text: 'At CODGIC TECHNOLOGY SERVICES, we collect minimal personal data to provide premium reactive digital software and mobile/web development. The details we gather include names, organizational emails, phone numbers, and technical requirements provided voluntarily through our active Inquiry Terminals. We do not engage in silent telemetry logging or sell background customer data to brokers.'
        },
        {
          heading: '2. How We Utilize Collected Data',
          text: 'Information gained from our contact channels is used exclusively to formulate custom digital blueprints, establish consultation channels, deploy production sandboxes, and compile stable server-side configurations. We utilize secure Node.js servers to process queries, keeping all transactional records encrypted.',
        },
        {
          heading: '3. Data Security and Server Caching',
          text: 'We implement industry-standard secure cryptography across our backend systems. Our application structures are built to prevent local cache leakage, cross-site scripting (XSS), and unauthorized database access. While no remote system is entirely invulnerable, we run secure firewalls on all host containers to guard active workflows.',
        },
        {
          heading: '4. Third-Party Integrations and API Proxies',
          text: 'We use secure backend proxies for all third-party credentials (including Gemini API and SMTP mailing engines). Thus, secret tokens remain safely shielded from client browsers, fully eliminating exposure to untrusted third-party script tracking.'
        },
        {
          heading: '5. Dynamic Local Storage Statement',
          text: 'This site reserves the right to use browser-level Local Storage configurations specifically to optimize rendering speeds, retain state interactions, and avoid unnecessary layout shifting. No tracking cookies are injected onto your hardware.'
        }
      ]
    },
    terms: {
      title: 'Terms & Conditions',
      lastUpdated: 'June 19, 2026',
      sections: [
        {
          heading: '1. Intellectual Ownership of Blueprints',
          text: 'All custom software designs, interactive SVG architectures, and engineering layouts presented across codgic.com are owned by CODGIC TECHNOLOGY SERVICES. Any specific application prototypes produced for clients remain the intellectual estate of Codgic until agreed milestone fees are settled.'
        },
        {
          heading: '2. Sandbox Deployment Disclaimer',
          text: 'The development playbooks, reactive previews, and UI containers provided during active service cycles are hosted on temporary testing servers under strict non-disclosure permissions. Users may not clone, alter, or distributionally redeploy these environments without explicit authorization.'
        },
        {
          heading: '3. Development Consultation Scope',
          text: 'Consultation inquiries submitted through the ticket terminal do not mandate a contractual obligation. Binding commitments are only created upon both parties executing our standard master service agreements detailing operational parameters, APIs, and timeline frameworks.'
        },
        {
          heading: '4. Absolute Performance Clause',
          text: 'Our code structures are compiled aiming for maximal core speed, minimal layout transformations, and zero redundant re-renders. However, ultimate operational efficiency remains contingent on client servers, network constraints, and target host container configurations.'
        },
        {
          heading: '5. Governance & Legal Jurisdiction',
          text: 'These terms are governed by and constructed in structural compliance with corporate technology mandates. Any legal inquiries or contractual actions relating to our web systems will be resolved within legal frameworks authorized under registry guidelines.'
        }
      ]
    },
    refund: {
      title: 'Refund & Cancellation Policy',
      lastUpdated: 'June 19, 2026',
      sections: [
        {
          heading: '1. Pre-development Consultations',
          text: 'Initial consultations, software analysis sessions, and blueprint definitions offered through CODGIC TECHNOLOGY SERVICES are completely transparent. No billing is initiated without clear invoice parameters.'
        },
        {
          heading: '2. Project Milestones and Stage Verification',
          text: 'For custom React layouts and Flutter mobile applications, payments are divided into custom stage-wise milestones. Once a milestone is declared complete, tested in sandbox environments, and approved by the partner, related milestone disbursements are fully non-refundable.'
        },
        {
          heading: '3. Order Cancellations & Active Project Wind-down',
          text: 'Partners may initiate project wind-down or work suspension by offering a formal 7-day technical notice. Any work compiled, tested, and coded up to the formal cancellation date remains payable and will be billed linearly based on hourly developer metrics.'
        },
        {
          heading: '4. Third-Party License Reimbursements',
          text: 'Expenses generated by external SDK licensing, database servers (e.g. Firebase, Cloud SQL), or Google Developer credentials initiated on behalf of the client are not eligible for reimbursement or claim actions.'
        }
      ]
    },
    contact: {
      title: 'Legal Contact & Support',
      lastUpdated: 'June 19, 2026',
      sections: [
        {
          heading: 'Official Communications Registry',
          text: 'For any legal concerns, copyright clearances, privacy disclosures, data removal requests, or contractual queries, please reach out directly to our designated compliance channel.'
        },
        {
          heading: 'Digital Compliance Desk',
          text: 'Email: info@codgic.in | Support Desk: info@codgic.in'
        },
        {
          heading: 'Physical Technology Office',
          text: 'CODGIC TECHNOLOGY SERVICES, Gujarat, India.'
        },
        {
          heading: 'System ID Token',
          text: 'Register Entity ID: CODGIC-TS-2026-6115'
        }
      ]
    }
  };

  // Perform a case-insensitive search across headings and text
  const filteredSections = useMemo(() => {
    const currentDoc = content[activeTab];
    if (!searchQuery.trim()) return currentDoc.sections;
    
    return currentDoc.sections.filter(
      sec => 
        sec.heading.toLowerCase().includes(searchQuery.toLowerCase()) || 
        sec.text.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [activeTab, searchQuery]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
          
          {/* Backdrop Blur Overlays */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-brand-black/90 backdrop-blur-xl z-0"
          />

          {/* Modal Container Chassis */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
            className="bg-brand-dark border border-white/[0.08] w-full max-w-5xl rounded-3xl overflow-hidden shadow-2xl shadow-brand-blue/5 flex flex-col md:flex-row h-[85vh] md:h-[75vh] max-h-[850px] relative z-10"
          >
            
            {/* Mobile / Tablet Header bar (visible on small viewports only) */}
            <div className="md:hidden flex items-center justify-between border-b border-white/[0.06] p-4 bg-white/[0.01]">
              <div className="flex items-center gap-2">
                <div className="h-6 w-6 bg-gradient-to-tr from-brand-blue to-brand-purple rounded flex items-center justify-center font-display font-black text-[10px] text-white">
                  C
                </div>
                <span className="font-display font-bold text-xs text-white">Legal System</span>
              </div>
              <button 
                onClick={onClose} 
                className="p-1.5 rounded-lg bg-white/[0.04] text-gray-400 hover:text-white"
                aria-label="Close modal"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {/* Section A: Navigation Sidebar */}
            <div className="w-full md:w-80 bg-white/[0.01] border-b md:border-b-0 md:border-r border-white/[0.06] p-5 flex flex-col justify-between flex-shrink-0 select-none">
              <div>
                {/* Brand Header */}
                <div className="hidden md:flex items-center gap-2.5 mb-8">
                  <div className="h-8 w-8 bg-gradient-to-tr from-brand-blue to-brand-purple rounded-xl flex items-center justify-center font-display font-black text-xs text-white">
                    C
                  </div>
                  <div>
                    <h3 className="font-display font-extrabold text-xs tracking-wider text-white">
                      CODGIC LEGAL DESK
                    </h3>
                    <p className="text-[9px] font-mono text-gray-500 uppercase tracking-widest mt-0.5">
                      Standard Compliance Terminal
                    </p>
                  </div>
                </div>

                {/* Search Engine Field block */}
                <div className="relative mb-6">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <Search className="h-3.5 w-3.5 text-gray-400" />
                  </span>
                  <input
                    type="text"
                    placeholder="Search sections..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full bg-white/[0.02] hover:bg-white/[0.04] focus:bg-white/[0.06] text-xs font-sans text-white placeholder-gray-500 pl-9 pr-4 py-2.5 rounded-xl border border-white/[0.05] focus:border-brand-blue/40 focus:outline-none transition-all"
                  />
                  {searchQuery && (
                    <button
                      onClick={() => setSearchQuery('')}
                      className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400 hover:text-white"
                    >
                      <X className="h-3 w-3" />
                    </button>
                  )}
                </div>

                {/* Side Link Cards Tab selection */}
                <nav className="space-y-1.5 flex flex-row md:flex-col overflow-x-auto md:overflow-x-visible pb-3 md:pb-0 gap-2 md:gap-0 no-scrollbar">
                  {tabs.map(tab => {
                    const Icon = tab.icon;
                    const isActive = activeTab === tab.id;
                    return (
                      <button
                        key={tab.id}
                        onClick={() => {
                          setActiveTab(tab.id);
                          setSearchQuery('');
                        }}
                        className={`w-full text-left p-3 rounded-xl flex items-center gap-3.5 transition-all text-xs border cursor-pointer whitespace-nowrap md:whitespace-normal font-sans ${
                          isActive
                            ? 'bg-brand-blue/10 border-brand-blue/20 text-brand-blue font-semibold shadow-inner'
                            : 'bg-transparent border-transparent text-gray-400 hover:text-white hover:bg-white/[0.02]'
                        }`}
                      >
                        <div className={`p-1.5 rounded-lg transition-colors ${
                          isActive ? 'bg-brand-blue/15 text-brand-blue' : 'bg-white/[0.04] text-gray-400'
                        }`}>
                          <Icon className="h-4 w-4" />
                        </div>
                        <div className="flex flex-col">
                          <span className="text-xs">{tab.label}</span>
                          <span className="text-[9px] font-sans text-gray-500 font-normal hidden md:inline">{tab.category}</span>
                        </div>
                      </button>
                    );
                  })}
                </nav>
              </div>

              {/* Sidebar Action utilities */}
              <div className="hidden md:flex flex-col gap-2 pt-4 border-t border-white/[0.04] text-[9px] font-mono text-gray-500">
                <div className="flex items-center gap-1.5">
                  <div className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span>REGULAR COMPLIANCE v2.6</span>
                </div>
                <span>ALL DATA FULLY DECRPYTED</span>
              </div>
            </div>

            {/* Section B: content scrolling viewport */}
            <div className="flex-1 flex flex-col justify-between overflow-hidden bg-brand-black/40">
              
              {/* Document Header bar */}
              <div className="p-6 border-b border-white/[0.06] flex items-center justify-between flex-shrink-0">
                <div>
                  <h1 className="font-display font-extrabold text-lg sm:text-xl text-white tracking-tight">
                    {content[activeTab].title}
                  </h1>
                  <p className="text-[10px] font-mono text-gray-500 mt-1 uppercase tracking-wider">
                    Last Updated: {content[activeTab].lastUpdated}
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={onClose}
                    className="hidden md:flex p-2 rounded-xl bg-white/[0.03] border border-white/[0.06] text-gray-400 hover:text-white hover:bg-red-500/10 hover:border-red-500/20 transition-all cursor-pointer"
                    aria-label="Close modal"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>
              </div>

              {/* Scrollable Policy Body */}
              <div className="flex-1 overflow-y-auto p-6 md:p-8 space-y-6 scrollbar-thin scrollbar-thumb-white/10">
                
                {searchQuery && (
                  <div className="p-3 rounded-xl bg-brand-blue/5 border border-brand-blue/15 text-[11px] text-brand-blue font-sans">
                    Showing results matching &ldquo;{searchQuery}&rdquo; active in the current policy document.
                  </div>
                )}

                {filteredSections.length > 0 ? (
                  filteredSections.map((sec, idx) => (
                    <div key={idx} className="space-y-2 group">
                      <h4 className="font-display font-bold text-sm text-white group-hover:text-brand-blue transition-colors">
                        {sec.heading}
                      </h4>
                      <p className="text-xs text-gray-400 font-sans leading-relaxed">
                        {sec.text}
                      </p>
                    </div>
                  ))
                ) : (
                  <div className="py-16 text-center space-y-2">
                    <p className="text-gray-400 font-sans text-xs">No matching sections found for your search inquiry in this document.</p>
                    <button 
                      onClick={() => setSearchQuery('')}
                      className="text-xs text-brand-blue font-mono font-bold hover:underline"
                    >
                      Clear Search Query
                    </button>
                  </div>
                )}

                {/* Corporate Signature block */}
                <div className="pt-8 mt-8 border-t border-white/[0.04] flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-[10px] font-mono text-gray-500">
                  <div className="flex flex-col">
                    <span>CODGIC TECHNOLOGY SERVICES</span>
                    <span className="text-[9px] text-gray-600 mt-0.5">Gujarat, IN | info@codgic.in</span>
                  </div>
                  <div className="p-2.5 rounded-lg border border-dashed border-white/[0.06] max-w-[210px]">
                    <span className="block leading-snug">Verified and structurally compliant under legal digital standards of 2026.</span>
                  </div>
                </div>

              </div>

            </div>

          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
