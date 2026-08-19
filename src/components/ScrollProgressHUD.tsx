import React, { useEffect, useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { ArrowUp, Compass, Activity } from 'lucide-react';

export const ScrollProgressHUD: React.FC = () => {
  const { lang, t } = useLanguage();
  const [scrollPercent, setScrollPercent] = useState(0);
  const [activeSection, setActiveSection] = useState('HERO');
  const [coords, setCoords] = useState({ y: 0 });

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const currentScroll = window.scrollY;
      const pct = Math.min(100, Math.max(0, Math.round((currentScroll / totalHeight) * 100)));
      setScrollPercent(pct);
      setCoords({ y: Math.round(currentScroll) });

      // Determine active section
      if (currentScroll < 500) setActiveSection('HERO');
      else if (currentScroll < 1600) setActiveSection('COURSES');
      else if (currentScroll < 2600) setActiveSection('AI_TOOLS');
      else if (currentScroll < 3700) setActiveSection('LMS_PORTAL');
      else if (currentScroll < 4700) setActiveSection('QUOTATION');
      else if (currentScroll < 5600) setActiveSection('CASES');
      else setActiveSection('ABOUT');
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Top Thin Cybernetic Scroll Progress Bar */}
      <div className="fixed top-0 left-0 right-0 h-[2.5px] bg-slate-900/60 z-50 pointer-events-none">
        <div
          className="h-full bg-gradient-to-r from-cyan-400 via-indigo-500 to-purple-500 transition-all duration-150 shadow-sm shadow-cyan-400/50"
          style={{ width: `${scrollPercent}%` }}
        />
      </div>

      {/* Floating Right HUD Indicator */}
      <div className="fixed right-6 bottom-8 z-40 hidden sm:flex flex-col items-center gap-3 select-none">
        {/* Quick Back to Top button */}
        {scrollPercent > 15 && (
          <button
            onClick={scrollToTop}
            className="w-10 h-10 rounded-2xl bg-slate-950/80 hover:bg-slate-900 text-slate-300 hover:text-cyan-400 border border-slate-800 hover:border-cyan-500/50 flex items-center justify-center transition-all shadow-xl backdrop-blur-md cursor-pointer hover:scale-105 active:scale-95 group"
            title={t('返回頂部', 'Scroll to Top')}
          >
            <ArrowUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        )}

        {/* Telemetry Pill */}
        <div className="px-3 py-2 rounded-2xl bg-slate-950/80 border border-slate-800/90 text-slate-300 font-mono text-[10px] shadow-xl backdrop-blur-md flex flex-col items-center gap-1">
          <div className="flex items-center gap-1.5 text-cyan-400 font-bold">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
            <span>{scrollPercent}%</span>
          </div>
          <div className="text-slate-400 uppercase tracking-wider text-[9px]">
            {activeSection}
          </div>
        </div>
      </div>
    </>
  );
};
