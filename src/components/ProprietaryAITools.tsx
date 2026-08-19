import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { MelodyCraftDemo } from './MelodyCraftDemo';
import { PromptSandboxDemo } from './PromptSandboxDemo';
import { 
  Sparkles, 
  Music, 
  Terminal, 
  Code2, 
  Lightbulb, 
  ShieldCheck, 
  CheckCircle2, 
  Cpu 
} from 'lucide-react';

export const ProprietaryAITools: React.FC = () => {
  const { lang, t } = useLanguage();
  const [activeTool, setActiveTool] = useState<'melody' | 'sandbox'>('melody');

  return (
    <section id="ai-tools-section" className="py-16 lg:py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
            <Cpu className="w-3.5 h-3.5" />
            <span>{t('IDEA 自研前沿教育科技與工具研發', 'In-house EdTech & AI Research Labs')}</span>
          </div>
          <h2 className="text-3xl lg:text-5xl font-extrabold text-white tracking-tight">
            {t('自主研發 AI 創新應用系統', 'Proprietary AI Tools & Creative Studios')}
          </h2>
          <p className="text-slate-400 text-sm lg:text-base">
            {t('我們不只講授開源技術，更自主研發多項專利與教育工具——涵蓋幼兒音樂啟蒙到企業級合規智能體。下方工具皆可在瀏覽器中即時試玩！', 'Beyond teaching, we engineer production AI software — from children audio synths to enterprise compliance agents.')}
          </p>
        </div>

        {/* Tool Switcher Tabs */}
        <div className="flex items-center justify-center gap-3 mb-8">
          <button
            onClick={() => setActiveTool('melody')}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
              activeTool === 'melody'
                ? 'bg-gradient-to-r from-indigo-600 to-cyan-600 text-white shadow-lg shadow-indigo-600/30'
                : 'bg-slate-900/80 text-slate-400 hover:text-white border border-slate-800'
            }`}
          >
            <Music className="w-4 h-4" />
            <span>{t('MelodyCraft AI 兒童音樂創作系統', 'MelodyCraft AI (Kids Music Studio)')}</span>
          </button>

          <button
            onClick={() => setActiveTool('sandbox')}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
              activeTool === 'sandbox'
                ? 'bg-gradient-to-r from-indigo-600 to-cyan-600 text-white shadow-lg shadow-indigo-600/30'
                : 'bg-slate-900/80 text-slate-400 hover:text-white border border-slate-800'
            }`}
          >
            <Terminal className="w-4 h-4" />
            <span>{t('跨領域 AI 工作流與脫敏測試台', 'Multi-Domain Workflow & Privacy Sandbox')}</span>
          </button>
        </div>

        {/* Dynamic Tool Display */}
        {activeTool === 'melody' ? (
          <MelodyCraftDemo />
        ) : (
          <PromptSandboxDemo />
        )}
      </div>
    </section>
  );
};
