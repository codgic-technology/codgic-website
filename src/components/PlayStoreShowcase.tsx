import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Smartphone, 
  Sparkles, 
  Apple,
  Clock,
  Play,
  Gamepad2,
  ExternalLink,
  Star,
  Download,
  CheckCircle2,
  ChevronRight
} from 'lucide-react';
import PrivacyPolicy from './PrivacyPolicy';
import icIcon from '@/assets/ic_icon.png';

interface MobileApp {
  title: string;
  packageName: string;
  description: string;
  isLive: boolean;
  platform: string;
  stage: string;
  defaultIcon: string;
  category: string;
  rating?: number;
  downloads?: string;
  appUrl?: string;
  privacyPolicyUrl?: string;
}

interface PlayStoreShowcaseProps {
  onOpenLegal?: (tab: 'privacy' | 'app-privacy' | 'terms' | 'refund' | 'contact') => void;
}

export default function PlayStoreShowcase({ onOpenLegal }: PlayStoreShowcaseProps) {
  const [showPrivacy, setShowPrivacy] = React.useState(false);

  React.useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash === '#privacy-policy') {
        setShowPrivacy(true);
      } else {
        setShowPrivacy(false);
      }
    };
    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  const apps: MobileApp[] = [
    {
      title: 'Crosword Master : Word Puzzle',
      packageName: 'com.codgic.wordgame',
      description: 'Challenge your brain with 1000+ crossword puzzles. Improve your vocabulary daily',
      isLive: true,
      platform: 'Android Production',
      stage: 'Live in Production',
      defaultIcon: '🔠',
      category: 'Brain & Word Games',
      rating: 4.8,
      downloads: '5K+',
      appUrl: 'https://play.google.com/store/apps/details?id=com.codgic.wordgame',
      privacyPolicyUrl: 'https://wordpuzzle.codgic.online/privacy-policy/'
    },
    {
      title: 'Snapsave',
      packageName: 'com.codgic.snapsave',
      description: 'The ultimate WhatsApp Status Saver. Download and save statuses, videos, and photos seamlessly.',
      isLive: false,
      platform: 'Android App',
      stage: 'Coming Soon',
      defaultIcon: '💾',
      category: 'Utilities & Downloaders'
    },
    {
      title: 'Codgic TaskMate Organizer',
      packageName: 'com.codgic.taskmate',
      description: 'A modular, high-caliber task layout planner supporting seamless scheduling streams and customizable status dashboards.',
      isLive: false,
      platform: 'Android / iOS',
      stage: 'Closed Alpha Testing',
      defaultIcon: '🎯',
      category: 'Productivity Systems'
    }
  ];

  const renderAppIcon = (app: MobileApp) => {
    if (app.packageName === 'com.codgic.wordgame') {
      return (
        <img 
          src={icIcon} 
          alt="Crossword Master: Word Puzzle Logo" 
          className="w-full h-full object-cover rounded-xl select-none"
          referrerPolicy="no-referrer"
        />
      );
    }
    return (
      <span className="text-2xl select-none" role="img" aria-label="App Icon">{app.defaultIcon}</span>
    );
  };

  return (
    <section id="play-store-apps" className="py-24 relative bg-brand-dark overflow-hidden border-t border-white/[0.02]">
      {/* Decorative Blur Layers */}
      <div className="absolute top-[20%] left-[-15%] w-[450px] h-[450px] bg-brand-purple/5 rounded-full blur-[110px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[-15%] w-[450px] h-[450px] bg-brand-blue/5 rounded-full blur-[110px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 mb-3 bg-white/[0.02] border border-white/[0.05] w-fit px-3 py-1 rounded-full backdrop-blur-md">
            <span className="h-1.5 w-1.5 bg-emerald-500 rounded-full animate-pulse" />
            <span className="text-xs font-mono tracking-widest text-emerald-400 uppercase font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-brand-blue">
              OUR LIVE PRODUCTION APPS
            </span>
          </div>
          <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl text-white tracking-tight leading-none">
            Engineered to Scale. <br />
            <span className="gradient-text-blue-purple">Our Live Mobile Apps.</span>
          </h2>
          <p className="mt-4 text-gray-400 font-sans text-sm sm:text-base leading-relaxed">
            We build state-of-the-art native mobile experiences. Explore our published applications and active roadmap designed for peak platform efficiency.
          </p>
        </div>

        {/* Live and Upcoming Apps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {apps.map((app, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className={`glass-panel backdrop-blur-md rounded-3xl p-6 sm:p-7 border transition-all flex flex-col justify-between group h-full relative ${
                app.isLive 
                  ? 'border-brand-blue/15 hover:border-brand-blue/30 bg-brand-card/50 shadow-lg shadow-brand-blue/[0.02]' 
                  : 'border-white/[0.05] bg-brand-card/30 hover:border-white/[0.1]'
              }`}
            >
              {/* Dynamic Status Badges */}
              <div className="absolute top-0 right-0 p-4 flex items-center gap-1.5 z-10">
                {app.isLive ? (
                  <>
                    <span className="flex h-2 w-2 relative">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
                    </span>
                    <span className="text-[9px] font-mono tracking-wider text-emerald-400 uppercase font-bold">LIVE ONLINE</span>
                  </>
                ) : (
                  <>
                    <span className="flex h-2 w-2 relative">
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-purple" />
                    </span>
                    <span className="text-[9px] font-mono tracking-wider text-brand-purple uppercase font-bold">COMING SOON</span>
                  </>
                )}
              </div>

              <div>
                {/* Category tag */}
                <span className="text-[9px] font-mono tracking-widest text-gray-500 uppercase font-semibold">
                  {app.category}
                </span>

                {/* Identity Header */}
                <div className="flex items-center gap-4 mt-3">
                  <div className={`h-14 w-14 rounded-2xl flex items-center justify-center shadow-lg border relative flex-shrink-0 ${
                    app.packageName === 'com.codgic.wordgame'
                      ? 'border-none bg-transparent'
                      : app.isLive 
                        ? 'bg-brand-blue/10 border-brand-blue/20 text-brand-blue' 
                        : 'bg-brand-black/40 border-white/[0.08] text-gray-400'
                  }`}>
                    {renderAppIcon(app)}
                  </div>

                  <div className="flex flex-col">
                    <h3 className="font-display font-extrabold text-sm sm:text-base text-white tracking-tight leading-none group-hover:text-brand-blue transition-colors">
                      {app.title}
                    </h3>
                    <span className="text-[10px] font-mono text-gray-500 truncate max-w-[155px] mt-1.5">
                      {app.packageName}
                    </span>
                  </div>
                </div>

                {/* Description */}
                <p className="mt-4 text-xs text-slate-400 font-sans leading-relaxed min-h-[48px]">
                  {app.description}
                </p>

                {app.privacyPolicyUrl && (
                  <div className="mt-2.5 flex items-center">
                    <button
                      onClick={() => {
                        window.location.hash = '#privacy-policy';
                        setShowPrivacy(true);
                      }}
                      className="inline-flex items-center gap-1.5 text-[11px] font-mono font-medium text-brand-blue/80 hover:text-brand-blue hover:border-brand-blue/30 transition-colors bg-brand-blue/[0.04] border border-brand-blue/10 px-2.5 py-1 rounded-lg cursor-pointer"
                      id="open-privacy-policy-btn"
                    >
                      <ExternalLink className="h-3 w-3 text-brand-blue" />
                      <span>Privacy Policy</span>
                    </button>
                  </div>
                )}

                {/* Metrics / Metadata Segment */}
                <div className="grid grid-cols-2 gap-2 mt-5">
                  {app.isLive ? (
                    <>
                      <div className="bg-brand-blue/5 border border-brand-blue/10 p-3 rounded-xl flex items-center justify-between">
                        <div className="flex flex-col">
                          <span className="text-[8px] font-mono text-gray-400 tracking-wider uppercase font-semibold">Rating</span>
                          <span className="text-xs font-mono text-brand-blue mt-0.5 font-bold">
                            {app.rating} ★
                          </span>
                        </div>
                        <Star className="h-4 w-4 text-amber-500 fill-amber-500/30" />
                      </div>

                      <div className="bg-brand-blue/5 border border-brand-blue/10 p-3 rounded-xl flex items-center justify-between">
                        <div className="flex flex-col">
                          <span className="text-[8px] font-mono text-gray-400 tracking-wider uppercase font-semibold">Installs</span>
                          <span className="text-xs font-mono text-brand-blue mt-0.5 font-bold">
                            {app.downloads}
                          </span>
                        </div>
                        <Download className="h-3.5 w-3.5 text-brand-blue" />
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="bg-white/[0.02] border border-white/[0.04] p-3 rounded-xl flex items-center justify-between">
                        <div className="flex flex-col">
                          <span className="text-[8px] font-mono text-gray-500 tracking-wider uppercase font-semibold">Target</span>
                          <span className="text-[10px] font-mono text-gray-300 mt-0.5 font-bold truncate max-w-[85px]">
                            {app.platform}
                          </span>
                        </div>
                        <Smartphone className="h-3.5 w-3.5 text-brand-purple" />
                      </div>

                      <div className="bg-white/[0.02] border border-white/[0.04] p-3 rounded-xl flex items-center justify-between">
                        <div className="flex flex-col">
                          <span className="text-[8px] font-mono text-gray-500 tracking-wider uppercase font-semibold">Stage</span>
                          <span className="text-[10px] font-mono text-emerald-400 font-bold mt-0.5 truncate max-w-[85px]">
                            {app.stage}
                          </span>
                        </div>
                        <Clock className="h-3.5 w-3.5 text-emerald-400" />
                      </div>
                    </>
                  )}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-6 pt-5 border-t border-white/[0.04] flex flex-col sm:flex-row gap-3 items-center w-full">
                {app.isLive && app.appUrl ? (
                  <a
                    href={app.appUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 w-full inline-flex items-center gap-3 bg-zinc-950 hover:bg-black border border-white/[0.08] hover:border-white/[0.15] text-white py-2 px-4 rounded-xl transition-all active:scale-[0.98] group/btn cursor-pointer shadow-md shadow-black/40"
                  >
                    <svg viewBox="0 0 512 512" className="h-4.5 w-4.5 flex-shrink-0 fill-[#4ade80] transition-transform group-hover/btn:scale-105 duration-350">
                      <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58 33.3-60.1-60.1 60.1-60.1 58 33.3c17.5 10 27.8 28.2 27.8 46.8s-10.3 36.8-27.8 46.8zM385.4 337.8L104.6 499l220.7-126.5 60.1-60.1-60.1 1.4z"/>
                    </svg>
                    <div className="flex flex-col items-start leading-tight">
                      <span className="text-[7px] uppercase font-bold tracking-widest text-[#4ade80]/90 font-sans">GET IT ON</span>
                      <span className="text-xs font-extrabold text-white font-sans mt-0.5">Google Play</span>
                    </div>
                  </a>
                ) : (
                  <div
                    className="flex-1 w-full inline-flex items-center gap-3 bg-zinc-950/40 border border-white/[0.03] text-gray-600 py-2 px-4 rounded-xl select-none cursor-not-allowed"
                    title="Android release coming soon"
                  >
                    <svg viewBox="0 0 512 512" className="h-4.5 w-4.5 flex-shrink-0 fill-gray-700">
                      <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58 33.3-60.1-60.1 60.1-60.1 58 33.3c17.5 10 27.8 28.2 27.8 46.8s-10.3 36.8-27.8 46.8zM385.4 337.8L104.6 499l220.7-126.5 60.1-60.1-60.1 1.4z"/>
                    </svg>
                    <div className="flex flex-col items-start leading-tight">
                      <span className="text-[7px] uppercase font-bold tracking-widest text-gray-600 font-sans">GET IT ON</span>
                      <span className="text-xs font-bold text-gray-500 font-sans mt-0.5">Google Play</span>
                    </div>
                  </div>
                )}

                <div
                  className="flex-1 w-full inline-flex items-center gap-3 bg-zinc-950/40 border border-white/[0.03] text-gray-600 py-2 px-4 rounded-xl select-none cursor-not-allowed"
                  title="iOS version under active development - Coming Soon"
                >
                  <Apple className="h-4.5 w-4.5 text-gray-600 flex-shrink-0" />
                  <div className="flex flex-col items-start leading-tight">
                    <span className="text-[7px] uppercase font-bold tracking-widest text-gray-600 font-sans">Download on the</span>
                    <span className="text-xs font-bold text-gray-500 font-sans mt-0.5">App Store</span>
                  </div>
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>

      <AnimatePresence>
        {showPrivacy && (
          <PrivacyPolicy 
            onClose={() => {
              window.location.hash = '#play-store-apps';
              setShowPrivacy(false);
            }} 
          />
        )}
      </AnimatePresence>
    </section>
  );
}
