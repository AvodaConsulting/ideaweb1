import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Globe, Menu, X, Sparkles, UserCheck } from 'lucide-react';

interface NavbarProps {
  onOpenPortal: () => void;
  onOpenQuotation: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenPortal, onOpenQuotation }) => {
  const { lang, setLang, t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-[#07080c]/90 backdrop-blur-md border-b border-slate-800/80 shadow-xl'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
        {/* Zone 1: Single-line Brand Title */}
        <a href="#" className="flex items-center gap-2 whitespace-nowrap shrink-0">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-indigo-500 to-cyan-400 flex items-center justify-center text-white font-extrabold text-sm shadow-md shadow-indigo-500/20">
            ID
          </div>
          <span className="font-bold text-lg sm:text-xl text-white tracking-tight">
            IDEA AI Academy
          </span>
        </a>

        {/* Zone 2: 4-5 single-line nav links */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8 text-xs lg:text-sm font-medium text-slate-300">
          <a
            href="#courses-section"
            className="hover:text-cyan-400 transition-colors whitespace-nowrap shrink-0"
          >
            {t('課程系列', 'Courses')}
          </a>
          <a
            href="#ai-tools-section"
            className="hover:text-cyan-400 transition-colors whitespace-nowrap shrink-0"
          >
            {t('自研工具', 'AI Tools')}
          </a>
          <a
            href="#cases-section"
            className="hover:text-cyan-400 transition-colors whitespace-nowrap shrink-0"
          >
            {t('機構實績', 'Cases')}
          </a>
          <a
            href="#about-section"
            className="hover:text-cyan-400 transition-colors whitespace-nowrap shrink-0"
          >
            {t('學院理念', 'About')}
          </a>
          <button
            onClick={onOpenPortal}
            className="hover:text-indigo-400 transition-colors whitespace-nowrap shrink-0 flex items-center gap-1 cursor-pointer"
          >
            <UserCheck className="w-3.5 h-3.5" />
            <span>{t('學員管理後台', 'LMS Portal')}</span>
          </button>
        </nav>

        {/* Zone 3: 1-2 primary actions */}
        <div className="flex items-center gap-3 whitespace-nowrap shrink-0">
          {/* Language Toggle */}
          <button
            onClick={() => setLang(lang === 'zh' ? 'en' : 'zh')}
            className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-slate-900/80 hover:bg-slate-800 text-slate-300 border border-slate-800 text-xs font-semibold transition-all cursor-pointer whitespace-nowrap shrink-0"
            title={lang === 'zh' ? 'Switch to English' : '切換至繁體中文'}
          >
            <Globe className="w-3.5 h-3.5 text-indigo-400" />
            <span>{lang === 'zh' ? 'EN' : '繁中'}</span>
          </button>

          {/* Primary Action */}
          <a
            href="#quotation-calculator"
            className="hidden sm:inline-flex px-4 py-2 rounded-xl bg-gradient-to-r from-indigo-600 to-cyan-600 hover:from-indigo-500 hover:to-cyan-500 text-white font-bold text-xs shadow-md shadow-indigo-600/20 transition-all active:scale-95 whitespace-nowrap shrink-0"
          >
            {t('機構報價試算', 'Get Proposal')}
          </a>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg bg-slate-900 text-slate-300 border border-slate-800 cursor-pointer"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-slate-950 border-b border-slate-800 px-4 py-6 space-y-4">
          <nav className="flex flex-col space-y-3 text-sm font-medium text-slate-300">
            <a
              href="#courses-section"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-cyan-400"
            >
              {t('課程系列 (Courses)', 'Courses')}
            </a>
            <a
              href="#ai-tools-section"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-cyan-400"
            >
              {t('自研 AI 工具 (AI Tools)', 'Proprietary AI Tools')}
            </a>
            <a
              href="#cases-section"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-cyan-400"
            >
              {t('機構案例實績 (Case Studies)', 'Institutional Cases')}
            </a>
            <a
              href="#about-section"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-cyan-400"
            >
              {t('學院辦學理念 (About IDEA)', 'About Academy')}
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenPortal();
              }}
              className="text-left py-1 text-indigo-400 font-semibold flex items-center gap-2"
            >
              <UserCheck className="w-4 h-4" />
              <span>{t('學員管理後台 (LMS Portal)', 'Learner LMS Portal')}</span>
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenQuotation();
              }}
              className="text-left py-1 text-cyan-400 font-semibold"
            >
              {t('機構/學校/企業 即時報價生成器', 'Instant Quotation Calculator')}
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};
