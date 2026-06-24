import React from 'react';
import { motion } from 'motion/react';
import { 
  ArrowLeft, 
  ShieldCheck, 
  Mail, 
  Clock, 
  Copy, 
  Sparkles,
  Server,
  Lock,
  Globe,
  HelpCircle,
  EyeOff
} from 'lucide-react';

interface PrivacyPolicyProps {
  onClose: () => void;
}

export default function PrivacyPolicy({ onClose }: PrivacyPolicyProps) {
  const [copied, setCopied] = React.useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 bg-brand-black/98 overflow-y-auto backdrop-blur-xl selection:bg-brand-blue/35 selection:text-white"
    >
      {/* Decorative gradients */}
      <div className="absolute top-[10%] left-[-20%] w-[600px] h-[600px] bg-brand-blue/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-[10%] right-[-20%] w-[600px] h-[600px] bg-brand-purple/5 rounded-full blur-[140px] pointer-events-none" />

      {/* Floating Action Header Bar */}
      <nav className="sticky top-0 z-50 border-b border-white/[0.05] bg-brand-black/80 backdrop-blur-lg px-4 sm:px-8 py-4">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <button
            onClick={onClose}
            className="group flex items-center gap-2 px-4 py-2 rounded-xl bg-white/[0.02] border border-white/[0.05] text-gray-400 hover:text-white hover:bg-white/[0.06] transition-all cursor-pointer text-xs font-mono font-medium"
            id="back-to-showcase"
          >
            <ArrowLeft className="h-3.5 w-3.5 group-hover:-translate-x-0.5 transition-transform" />
            <span>BACK TO SHOWCASE</span>
          </button>

          <div className="flex items-center gap-3">
            <button
              onClick={handleCopy}
              className="p-2 rounded-lg bg-white/[0.02] border border-white/[0.05] text-gray-400 hover:text-white hover:bg-white/[0.06] transition-all cursor-pointer relative"
              title="Copy page link"
              id="copy-policy-link"
            >
              <Copy className="h-3.5 w-3.5" />
              {copied && (
                <span className="absolute -bottom-8 right-0 bg-brand-blue text-brand-black font-mono font-bold text-[9px] px-2 py-0.5 rounded shadow-lg whitespace-nowrap">
                  COPIED LINK!
                </span>
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Article Inner Area */}
      <div className="max-w-4xl mx-auto px-4 sm:px-8 py-16 sm:py-24 relative z-10">
        
        {/* Policy Document Title Block */}
        <div className="border-b border-white/[0.06] pb-10 mb-12">
          <div className="flex items-center gap-2 mb-4 bg-brand-blue/10 border border-brand-blue/20 w-fit px-3 py-1 rounded-full">
            <ShieldCheck className="h-3.5 w-3.5 text-brand-blue" />
            <span className="text-[10px] font-mono tracking-widest text-brand-blue uppercase font-bold">
              POLISHED LEGAL STANDARD
            </span>
          </div>

          <h1 className="font-display font-black text-3xl sm:text-4xl md:text-5xl text-white tracking-tight leading-tight">
            Privacy Policy <br />
            <span className="gradient-text-blue-purple text-2xl sm:text-3xl font-extrabold block mt-2">
              Crossword Master: Word Puzzle
            </span>
          </h1>

          <div className="flex flex-wrap items-center gap-4 mt-6 text-gray-500 text-xs font-mono">
            <div className="flex items-center gap-1.5 bg-white/[0.02] px-3 py-1.5 rounded-lg border border-white/[0.04]">
              <Clock className="h-3.5 w-3.5 text-brand-purple" />
              <span>Last Updated: <strong className="text-gray-300">June 2026</strong></span>
            </div>
            <div className="flex items-center gap-1.5 bg-white/[0.02] px-3 py-1.5 rounded-lg border border-white/[0.04]">
              <Globe className="h-3.5 w-3.5 text-brand-blue" />
              <span>Publisher: <strong className="text-gray-300">Codgic technology services</strong></span>
            </div>
          </div>
        </div>

        {/* Content Body Layout */}
        <div className="prose prose-invert max-w-none text-gray-300 font-sans text-[15px] sm:text-base leading-relaxed space-y-10">
          
          {/* Introductory Abstract block */}
          <div className="p-6 rounded-2xl bg-white/[0.01] border border-white/[0.03] text-gray-400 font-medium italic text-sm">
            Codgic technology services operates the Crossword Master: Word Puzzle mobile and PC application (hereinafter referred to as the "Service"). This page informs you of our policies regarding the collection, use, and disclosure of personal data when you use our Service.
          </div>

          {/* Section 1: Account & Deletion */}
          <section className="bg-brand-card/25 border border-white/[0.03] rounded-3xl p-6 sm:p-8 space-y-4">
            <div className="flex items-center gap-2.5">
              <span className="flex h-7 w-7 rounded-lg bg-brand-blue/10 border border-brand-blue/20 text-brand-blue items-center justify-center font-mono font-bold text-xs select-none">
                1
              </span>
              <h2 className="font-display font-bold text-lg sm:text-xl text-white tracking-tight m-0">
                Account Creation & Data Retention
              </h2>
            </div>
            <div className="pl-0 sm:pl-9 space-y-3 font-sans text-sm sm:text-base text-gray-400">
              <div className="flex items-start gap-2.5">
                <div className="h-1.5 w-1.5 bg-brand-blue rounded-full mt-2.5 flex-shrink-0" />
                <p className="m-0">
                  <strong className="text-white">No Account Required:</strong> Our Service does not allow or require users to create an account to play the game.
                </p>
              </div>
              <div className="flex items-start gap-2.5">
                <div className="h-1.5 w-1.5 bg-brand-blue rounded-full mt-2.5 flex-shrink-0" />
                <p className="m-0">
                  <strong className="text-white">Automatic Deletion:</strong> We do not permanently store personal data. Any temporary user data or gameplay identifiers collected automatically for performance tracking are systematically deleted within 90 days.
                </p>
              </div>
            </div>
          </section>

          {/* Section 2: Info collection */}
          <section className="bg-brand-card/25 border border-white/[0.03] rounded-3xl p-6 sm:p-8 space-y-4">
            <div className="flex items-center gap-2.5">
              <span className="flex h-7 w-7 rounded-lg bg-brand-purple/10 border border-brand-purple/20 text-brand-purple items-center justify-center font-mono font-bold text-xs select-none">
                2
              </span>
              <h2 className="font-display font-bold text-lg sm:text-xl text-white tracking-tight m-0">
                Information Collection and Use
              </h2>
            </div>
            <p className="pl-0 sm:pl-9 font-sans text-sm sm:text-base text-gray-400 m-0">
              We do not collect any personally identifiable information unless provided voluntarily (such as via email support). However, the app uses third-party services that may collect information used to identify your device for advertising and analytics.
            </p>
          </section>

          {/* Section 3: Diagnostic logs */}
          <section className="bg-brand-card/25 border border-white/[0.03] rounded-3xl p-6 sm:p-8 space-y-4">
            <div className="flex items-center gap-2.5">
              <span className="flex h-7 w-7 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 items-center justify-center font-mono font-bold text-xs select-none">
                3
              </span>
              <h2 className="font-display font-bold text-lg sm:text-xl text-white tracking-tight m-0">
                Log Data & Diagnostics
              </h2>
            </div>
            <p className="pl-0 sm:pl-9 font-sans text-sm sm:text-base text-gray-400 m-0">
              In case of an error or crash in the game (on Android or Google Play Games on PC), we collect data and information (through third-party products) called Log Data. This may include your device Internet Protocol (“IP”) address, device name, operating system version, app configuration, and crash diagnostics.
            </p>
          </section>

          {/* Section 4: Platforms & Services */}
          <section className="bg-brand-card/25 border border-white/[0.03] rounded-3xl p-6 sm:p-8 space-y-4">
            <div className="flex items-center gap-2.5">
              <span className="flex h-7 w-7 rounded-lg bg-orange-400/10 border border-orange-400/20 text-orange-400 items-center justify-center font-mono font-bold text-xs select-none">
                4
              </span>
              <h2 className="font-display font-bold text-lg sm:text-xl text-white tracking-tight m-0">
                Third-Party Services & Cross-Platform Tracking
              </h2>
            </div>
            <div className="pl-0 sm:pl-9 space-y-4">
              <p className="font-sans text-sm sm:text-base text-gray-400 m-0">
                Our game utilizes standard mobile and PC gaming services to deliver ads and monitor stability. These third parties have their own Privacy Policies:
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.04]">
                  <span className="text-xs font-mono text-brand-blue font-semibold block mb-1">STABILITY & CORE</span>
                  <span className="text-sm font-bold text-white block">Google Play Services</span>
                  <span className="text-[10px] text-gray-500">Google Play Games on PC integration</span>
                </div>
                
                <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.04]">
                  <span className="text-xs font-mono text-[#ff8c00] font-semibold block mb-1">MONETIZATION NETWORK</span>
                  <span className="text-sm font-bold text-white block">Google AdMob</span>
                  <span className="text-[10px] text-gray-500">Personalized and non-personalized advertising ads</span>
                </div>

                <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.04] sm:col-span-2">
                  <span className="text-xs font-mono text-emerald-400 font-semibold block mb-1">STABILITY LOGS</span>
                  <span className="text-sm font-bold text-white block">Firebase Analytics / Crashlytics</span>
                  <span className="text-[10px] text-gray-500">Stability audits, frame drop analytics, and diagnostics monitors</span>
                </div>
              </div>
            </div>
          </section>

          {/* Section 5: Location Services */}
          <section className="bg-brand-card/25 border border-white/[0.03] rounded-3xl p-6 sm:p-8 space-y-4">
            <div className="flex items-center gap-2.5">
              <span className="flex h-7 w-7 rounded-lg bg-pink-500/10 border border-pink-500/20 text-pink-400 items-center justify-center font-mono font-bold text-xs select-none">
                5
              </span>
              <h2 className="font-display font-bold text-lg sm:text-xl text-white tracking-tight m-0">
                Location Data
              </h2>
            </div>
            <p className="pl-0 sm:pl-9 font-sans text-sm sm:text-base text-gray-400 m-0">
              The Service may access approximate location data solely to allow third-party advertising networks (like Google AdMob) to serve relevant, localized advertisements to you.
            </p>
          </section>

          {/* Section 6: Children info */}
          <section className="bg-brand-card/25 border border-white/[0.03] rounded-3xl p-6 sm:p-8 space-y-4">
            <div className="flex items-center gap-2.5">
              <span className="flex h-7 w-7 rounded-lg bg-amber-400/10 border border-amber-400/20 text-amber-400 items-center justify-center font-mono font-bold text-xs select-none">
                6
              </span>
              <h2 className="font-display font-bold text-lg sm:text-xl text-white tracking-tight m-0">
                Children’s Privacy
              </h2>
            </div>
            <p className="pl-0 sm:pl-9 font-sans text-sm sm:text-base text-gray-400 m-0 leading-relaxed">
              These Services do not address anyone under the age of 13. We do not knowingly collect personally identifiable information from children under 13. If we discover that a child under 13 has provided us with personal information, we immediately delete this from our servers.
            </p>
          </section>

          {/* Section 7: Amendments */}
          <section className="bg-brand-card/25 border border-white/[0.03] rounded-3xl p-6 sm:p-8 space-y-4">
            <div className="flex items-center gap-2.5">
              <span className="flex h-7 w-7 rounded-lg bg-violet-500/10 border border-violet-500/20 text-violet-400 items-center justify-center font-mono font-bold text-xs select-none">
                7
              </span>
              <h2 className="font-display font-bold text-lg sm:text-xl text-white tracking-tight m-0">
                Changes to This Privacy Policy
              </h2>
            </div>
            <p className="pl-0 sm:pl-9 font-sans text-sm sm:text-base text-gray-400 m-0">
              We may update our Privacy Policy from time to time. You are advised to review this page periodically for any changes. We will notify you of any changes by posting the new Privacy Policy on this page.
            </p>
          </section>

          {/* Section 8: Support channels */}
          <section className="relative overflow-hidden border border-brand-blue/20 bg-brand-blue/[0.02] rounded-3xl p-6 sm:p-8 space-y-6">
            <div className="absolute top-[20%] right-[-20%] w-[200px] h-[200px] bg-brand-blue/5 rounded-full blur-[40px] pointer-events-none" />
            
            <div className="flex items-center gap-2.5">
              <span className="flex h-7 w-7 rounded-lg bg-brand-blue/10 border border-brand-blue/20 text-brand-blue items-center justify-center font-mono font-bold text-xs select-none">
                8
              </span>
              <h2 className="font-display font-bold text-lg sm:text-xl text-white tracking-tight m-0">
                Contact Us
              </h2>
            </div>

            <div className="pl-0 sm:pl-9 space-y-4">
              <p className="font-sans text-sm sm:text-base text-gray-400 m-0">
                If you have any questions or suggestions about our Privacy Policy, do not hesitate to contact us at our dedicated word game channel:
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <a 
                  href="mailto:info@codgic.in"
                  className="inline-flex items-center gap-3 px-5 py-3 rounded-2xl bg-brand-blue hover:bg-brand-blue/90 border border-brand-blue/30 text-brand-black transition-all font-mono font-bold text-xs hover:-translate-y-0.5"
                  id="email-contact-link"
                >
                  <Mail className="h-4 w-4" />
                  <span>info@codgic.in</span>
                </a>
                <div className="flex items-center px-4 py-3 rounded-2xl bg-white/[0.02] border border-white/[0.05] text-[11px] font-mono text-gray-400">
                  <Server className="h-4 w-4 text-brand-blue mr-2" />
                  <span>Verified Security Host</span>
                </div>
              </div>
            </div>
          </section>

        </div>

        {/* Footer info stamp */}
        <div className="mt-16 pt-8 border-t border-white/[0.04] text-center text-[11px] font-mono text-gray-600">
          <span>This legal instrument has been generated with verified identity controls for user consent security compliance.</span>
        </div>

      </div>
    </motion.div>
  );
}
