import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { CLIENT_LOGOS } from '../data/clients';
import { 
  Sparkles, 
  ArrowRight, 
  ShieldCheck, 
  Play, 
  Award, 
  Users, 
  Building2, 
  Music, 
  Layers,
  ChevronDown,
  Cpu,
  Brain,
  Globe2
} from 'lucide-react';

interface HeroProps {
  onExploreCourses: () => void;
  onOpenCalculator: () => void;
  onTryMusicTool: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onExploreCourses,
  onOpenCalculator,
  onTryMusicTool
}) => {
  const { lang, t } = useLanguage();
  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX - innerWidth / 2) / (innerWidth / 2);
      const y = (e.clientY - innerHeight / 2) / (innerHeight / 2);
      setMouseOffset({ x: x * 15, y: y * 15 });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="relative pt-32 pb-16 lg:pt-44 lg:pb-28 overflow-hidden z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Floating 3D Micro Badges with Mouse Parallax */}
        <div 
          className="hidden lg:flex absolute -top-4 left-10 p-3 rounded-2xl bg-slate-900/70 border border-cyan-500/30 backdrop-blur-md shadow-2xl shadow-cyan-500/10 items-center gap-3 transition-transform duration-200 pointer-events-none"
          style={{ transform: `translate3d(${mouseOffset.x * -1.2}px, ${mouseOffset.y * -1.2}px, 0)` }}
        >
          <div className="w-8 h-8 rounded-xl bg-cyan-500/20 text-cyan-400 flex items-center justify-center font-mono text-xs font-bold border border-cyan-500/30">
            AI
          </div>
          <div className="text-left font-mono">
            <div className="text-[11px] text-slate-300 font-bold">NVIDIA & Microsoft</div>
            <div className="text-[9px] text-cyan-400 font-medium">Official Prep Standard</div>
          </div>
        </div>

        <div 
          className="hidden lg:flex absolute top-12 right-12 p-3 rounded-2xl bg-slate-900/70 border border-indigo-500/30 backdrop-blur-md shadow-2xl shadow-indigo-500/10 items-center gap-3 transition-transform duration-200 pointer-events-none"
          style={{ transform: `translate3d(${mouseOffset.x * 1.4}px, ${mouseOffset.y * 1.4}px, 0)` }}
        >
          <div className="w-8 h-8 rounded-xl bg-indigo-500/20 text-indigo-400 flex items-center justify-center font-mono text-xs font-bold border border-indigo-500/30">
            🎵
          </div>
          <div className="text-left font-mono">
            <div className="text-[11px] text-slate-300 font-bold">MelodyCraft Studio</div>
            <div className="text-[9px] text-indigo-400 font-medium">Patented Music AI</div>
          </div>
        </div>

        {/* Top Floating Telemetry Badge */}
        <div className="flex items-center justify-center mb-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold bg-indigo-500/15 text-indigo-200 border border-indigo-500/30 backdrop-blur-md shadow-xl shadow-indigo-500/10">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span className="font-mono">{t('2026 秋季新班期開放報名・全港社福 / 學校 / 企業 AI 賦能首選', 'Autumn 2026 Cohorts Open・Leading AI Training & EdTech Hub')}</span>
          </div>
        </div>

        {/* Hero Main Headline (Punchy, High-impact kinetic typography) */}
        <div className="text-center max-w-4xl mx-auto space-y-6">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-black text-white tracking-tight leading-[1.04]">
            <span>{t('重塑全齡智能時代', 'Engineering the Future of')}</span>
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-indigo-300 to-purple-400 filter drop-shadow-[0_10px_30px_rgba(99,102,241,0.25)]">
              {t('頂尖 AI 實戰培訓與自研科技', 'Real-World AI & EdTech')}
            </span>
          </h1>

          <p className="text-slate-300 text-base sm:text-lg lg:text-xl font-normal leading-relaxed max-w-2xl mx-auto">
            {t(
              'IDEA AI Academy 專注於公開課程、小組研習及企業深度包班。跨越社福機構、大學、中小學、幼稚園至跨國企業，結合線上即時報名、學員 LMS 系統與自主研發之兒童 AI 音樂創作工具。',
              'Specialized in enterprise in-house training, public certification bootcamps, and K-12/Kindergarten STEAM education. Powered by seamless online enrollment, student LMS, and proprietary AI tools.'
            )}
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-4">
            <button
              onClick={onExploreCourses}
              className="px-8 py-4 rounded-2xl bg-gradient-to-r from-indigo-600 via-indigo-500 to-cyan-500 hover:from-indigo-500 hover:to-cyan-400 text-white font-bold text-sm transition-all shadow-2xl shadow-indigo-600/40 flex items-center gap-2 active:scale-95 cursor-pointer hover:shadow-cyan-500/20"
            >
              <span>{t('瀏覽全系列課程與報名', 'Explore Courses & Enroll')}</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={onTryMusicTool}
              className="px-7 py-4 rounded-2xl bg-slate-900/90 hover:bg-slate-800 text-slate-100 border border-slate-700 hover:border-cyan-500/50 font-semibold text-sm transition-all flex items-center gap-2 cursor-pointer shadow-xl backdrop-blur-md"
            >
              <Music className="w-4 h-4 text-cyan-400" />
              <span>{t('自研 MelodyCraft 兒童 AI 音樂試玩', 'Try MelodyCraft AI Studio')}</span>
            </button>

            <button
              onClick={onOpenCalculator}
              className="px-7 py-4 rounded-2xl bg-indigo-950/50 hover:bg-indigo-900/60 text-indigo-200 border border-indigo-800/60 hover:border-indigo-600 font-semibold text-sm transition-all flex items-center gap-2 cursor-pointer backdrop-blur-md"
            >
              <Building2 className="w-4 h-4 text-indigo-400" />
              <span>{t('機構/學校即時報價試算', 'Corporate & School Quotation')}</span>
            </button>
          </div>
        </div>

        {/* Live Key Metrics Ribbon */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto mt-16 pt-8 border-t border-slate-800/80">
          <div className="p-5 rounded-2xl bg-slate-950/70 border border-slate-800/90 text-center hover:border-indigo-500/40 transition-colors shadow-lg">
            <div className="text-3xl sm:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400 font-mono">
              150+
            </div>
            <div className="text-xs text-slate-300 font-medium mt-1">
              {t('合作企業・大學及社福機構', 'Partner Institutions')}
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-slate-950/70 border border-slate-800/90 text-center hover:border-indigo-500/40 transition-colors shadow-lg">
            <div className="text-3xl sm:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400 font-mono">
              12,500+
            </div>
            <div className="text-xs text-slate-300 font-medium mt-1">
              {t('全齡受訓結業學員', 'Certified Graduates')}
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-slate-950/70 border border-slate-800/90 text-center hover:border-indigo-500/40 transition-colors shadow-lg">
            <div className="text-3xl sm:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400 font-mono">
              98.6%
            </div>
            <div className="text-xs text-slate-300 font-medium mt-1">
              {t('實戰應用滿意度', 'Practical Satisfaction')}
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-slate-950/70 border border-slate-800/90 text-center hover:border-indigo-500/40 transition-colors shadow-lg">
            <div className="text-3xl sm:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-400 font-mono">
              99.2%
            </div>
            <div className="text-xs text-slate-300 font-medium mt-1">
              {t('國際官方考證通過率', 'Official Exam Pass Rate')}
            </div>
          </div>
        </div>

        {/* Client & Accreditation Marquee Bar */}
        <div className="mt-14 pt-8 border-t border-slate-800/60">
          <p className="text-center text-xs font-mono uppercase text-slate-400 tracking-wider mb-6">
            {t('已獲全港大專院校、辦學團體、著名慈善社福及跨國企業廣泛採用', 'Trusted by Premier Universities, Sponsoring Bodies, NGOs & Global Enterprises')}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 max-w-4xl mx-auto">
            {CLIENT_LOGOS.map((logo, idx) => (
              <div
                key={idx}
                className="px-3.5 py-1.5 rounded-xl bg-slate-900/90 border border-slate-800 text-slate-300 text-xs font-medium hover:border-indigo-500/50 hover:text-white transition-all shadow-sm"
              >
                {logo.name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
