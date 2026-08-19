import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { CLIENT_CASES } from '../data/clients';
import { 
  Building2, 
  GraduationCap, 
  School, 
  HeartHandshake, 
  Baby, 
  TrendingUp, 
  CheckCircle, 
  Sparkles,
  Layers
} from 'lucide-react';

export const ClientCases: React.FC = () => {
  const { lang, t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: t('全部機構實績', 'All Case Studies') },
    { id: 'ngo', label: t('社福機構 (NGO)', 'Social Welfare (NGO)') },
    { id: 'university', label: t('大專院校 (Tertiary)', 'Universities') },
    { id: 'k12', label: t('中學及小學 (K-12)', 'K-12 Schools') },
    { id: 'kindergarten', label: t('幼稚園 (Preschool)', 'Kindergarten') },
    { id: 'enterprise', label: t('跨國企業 (Enterprise)', 'Enterprises') }
  ];

  const filteredCases = activeCategory === 'all'
    ? CLIENT_CASES
    : CLIENT_CASES.filter(c => c.category === activeCategory);

  return (
    <section id="cases-section" className="py-16 lg:py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-indigo-500/10 text-indigo-300 border border-indigo-500/20">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{t('真實落地成果與業界口碑', 'Verified Institutional Impact')}</span>
          </div>
          <h2 className="text-3xl lg:text-5xl font-extrabold text-white tracking-tight">
            {t('跨界合作案例與實戰成效', 'Our Track Record Across Sectors')}
          </h2>
          <p className="text-slate-400 text-sm lg:text-base">
            {t('深入了解 IDEA 如何協助不同體量與屬性的機構，以合規、高效的 AI 方案創造可量化的真實價值。', 'Explore how we empower institutions with measurable efficiency, compliance, and pedagogical innovation.')}
          </p>
        </div>

        {/* Category switcher */}
        <div className="flex items-center justify-center gap-2 overflow-x-auto pb-4 mb-10">
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs font-medium whitespace-nowrap transition-all cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-indigo-600 text-white font-semibold shadow-lg shadow-indigo-600/30'
                  : 'bg-slate-900/80 text-slate-400 hover:text-white border border-slate-800'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Cases Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCases.map(item => (
            <div
              key={item.id}
              className="rounded-2xl bg-slate-900/70 border border-slate-800 p-6 flex flex-col justify-between hover:border-indigo-500/30 transition-all hover:-translate-y-1 shadow-xl"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                    {t(item.badge.zh, item.badge.en)}
                  </span>
                  <span className="text-[11px] font-mono text-slate-500">{item.year}</span>
                </div>

                <div>
                  <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                    {t(item.clientName.zh, item.clientName.en)}
                  </h4>
                  <h3 className="text-base font-bold text-white mt-1">
                    {t(item.headline.zh, item.headline.en)}
                  </h3>
                </div>

                <p className="text-xs text-slate-300 leading-relaxed">
                  {t(item.description.zh, item.description.en)}
                </p>

                {/* Metrics Grid */}
                <div className="grid grid-cols-3 gap-2 pt-3 border-t border-slate-800/80">
                  {item.metrics.map((m, midx) => (
                    <div key={midx} className="p-2 rounded-xl bg-slate-950/80 border border-slate-800 text-center">
                      <div className="text-sm font-bold text-cyan-400 font-mono">{m.value}</div>
                      <div className="text-[10px] text-slate-400 mt-0.5 leading-tight">{t(m.label.zh, m.label.en)}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tools Tags */}
              <div className="pt-4 mt-4 border-t border-slate-800/60 flex flex-wrap items-center gap-1.5">
                <span className="text-[10px] text-slate-500 font-mono mr-1">{t('運用技術:', 'Tech:')}</span>
                {item.toolsUtilized.map((tool, tidx) => (
                  <span
                    key={tidx}
                    className="px-2 py-0.5 rounded bg-slate-800 text-[10px] font-mono text-indigo-300"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
