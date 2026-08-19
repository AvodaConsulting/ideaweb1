import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { INSTRUCTORS } from '../data/instructors';
import { 
  Sparkles, 
  Lightbulb, 
  Code2, 
  ShieldCheck, 
  Rocket, 
  Award, 
  CheckCircle2, 
  Compass, 
  Cpu 
} from 'lucide-react';

export const AboutSection: React.FC = () => {
  const { lang, t } = useLanguage();

  const pillars = [
    {
      letter: 'I',
      word: 'Inspire',
      title: t('啟發想像・全齡啟蒙', 'Inspire Curiosity & Creativity'),
      desc: t('從幼稚園的感官 AI 音樂美育，到中小學 STEAM 創客，讓科技成為孩子表達創意的魔杖。', 'From preschool AI music aesthetics to K-12 STEAM, turning emerging tech into a creative medium for youth.')
    },
    {
      letter: 'D',
      word: 'Develop',
      title: t('自研工具・前沿科研', 'Develop Proprietary EdTech & AI'),
      desc: t('具備自主研發團隊，打造 MelodyCraft AI 音樂創作、社福去識別化助理與高階分散式訓練沙盒。', 'In-house R&D team engineering custom tools like MelodyCraft AI, clinical privacy filters, and GPU sandboxes.')
    },
    {
      letter: 'E',
      word: 'Empower',
      title: t('賦能落地・合規實務', 'Empower Compliant Workflows'),
      desc: t('深入社福機構個案管理、學校校本課程與企業合規核保，實現 300%+ 可量化的生產力躍升。', 'Empowering NGOs, schools, and enterprises with data-compliant, highly practical automation solutions.')
    },
    {
      letter: 'A',
      word: 'Accelerate',
      title: t('加速認證・產業對接', 'Accelerate Certs & Growth'),
      desc: t('對標微軟、Google Cloud、AWS、NVIDIA 國際認證考綱，助力青年與在職專業人士升級。', 'Aligned with top global certification syllabi (Microsoft/AWS/NVIDIA) to fast-track career mobility.')
    }
  ];

  return (
    <section id="about-section" className="py-16 lg:py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* About Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-indigo-500/10 text-indigo-300 border border-indigo-500/20">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{t('關於 IDEA AI Academy 辦學理念', 'Our Mission & Pedagogical Philosophy')}</span>
          </div>
          <h2 className="text-3xl lg:text-5xl font-extrabold text-white tracking-tight">
            {t('以科技啟迪智慧，以實戰重構未來', 'Inspiring Minds, Engineering AI Excellence')}
          </h2>
          <p className="text-slate-400 text-sm lg:text-base">
            {t('我們深信 AI 不應只是少數演算法工程師的專利，而是每一位社工、教師、幼童、大學生及企業決策者都能靈活駕馭的思維工具。', 'We believe AI should empower everyone — from caseworkers and teachers to young creators and enterprise leaders.')}
          </p>
        </div>

        {/* 4 Pillars Grid (I.D.E.A.) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {pillars.map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-indigo-500/30 transition-all space-y-3 relative overflow-hidden group shadow-xl"
            >
              <div className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-br from-indigo-400 to-cyan-400 font-mono">
                {item.letter}
              </div>
              <div className="text-xs font-mono font-bold uppercase text-indigo-300">
                {item.word}
              </div>
              <h3 className="text-base font-bold text-white">
                {item.title}
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Teaching Methodology Feature Strip */}
        <div className="glass-panel rounded-3xl p-8 lg:p-10 border border-slate-800 mb-20 grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          <div className="space-y-2">
            <span className="text-xs font-mono text-cyan-400 font-bold uppercase tracking-wider">{t('獨創教學法', 'Pedagogy')}</span>
            <h3 className="text-2xl font-bold text-white">
              {t('20-40-40 實戰化研習模型', 'The 20-40-40 Applied Learning Matrix')}
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              {t('拒絕枯燥填鴨理論，每門課程均配置雲端沙盒與 Capstone 原型實作，確保學員即學即用。', 'No rote lectures. Every course integrates cloud GPU sandboxes and real-world capstone deliverables.')}
            </p>
          </div>

          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 text-center">
              <div className="text-2xl font-bold text-indigo-400 font-mono">20%</div>
              <div className="text-xs font-semibold text-white mt-1">{t('底層核心原理剖析', 'Core Principles')}</div>
              <div className="text-[11px] text-slate-400 mt-1">{t('神經架構・數學思維', 'Neural Math & Logic')}</div>
            </div>

            <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 text-center">
              <div className="text-2xl font-bold text-cyan-400 font-mono">40%</div>
              <div className="text-xs font-semibold text-white mt-1">{t('雲端沙盒即時實操', 'Cloud GPU Labs')}</div>
              <div className="text-[11px] text-slate-400 mt-1">{t('高階算力・代碼除錯', 'Live Sandbox & Debug')}</div>
            </div>

            <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 text-center">
              <div className="text-2xl font-bold text-emerald-400 font-mono">40%</div>
              <div className="text-xs font-semibold text-white mt-1">{t('Capstone 專案落地', 'Capstone Projects')}</div>
              <div className="text-[11px] text-slate-400 mt-1">{t('解決真實業務問題', 'Real-world Deployment')}</div>
            </div>
          </div>
        </div>

        {/* Faculty & Instructors Showcase */}
        <div>
          <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
            <h3 className="text-2xl lg:text-3xl font-bold text-white">
              {t('頂尖跨領域師資與教研團隊', 'Our Esteemed Faculty & Mentors')}
            </h3>
            <p className="text-xs text-slate-400">
              {t('匯聚世界名校博士、微軟/AWS 授權講師、資深社工督導及幼兒教育專家。', 'Comprising Ivy/Imperial Ph.D. scholars, Microsoft MCTs, registered social workers, and music ed experts.')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {INSTRUCTORS.map(inst => (
              <div
                key={inst.id}
                className="rounded-2xl bg-slate-900/60 border border-slate-800 p-6 flex flex-col justify-between hover:border-indigo-500/30 transition-all"
              >
                <div className="space-y-3">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-tr ${inst.gradient} flex items-center justify-center text-white font-extrabold text-lg shadow-lg`}>
                    {inst.avatarInitial}
                  </div>

                  <div>
                    <h4 className="text-base font-bold text-white">{t(inst.name.zh, inst.name.en)}</h4>
                    <p className="text-[11px] text-indigo-300 font-medium mt-0.5">{t(inst.title.zh, inst.title.en)}</p>
                    <p className="text-[10px] text-slate-500 font-mono mt-0.5">{t(inst.role.zh, inst.role.en)}</p>
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed pt-2 border-t border-slate-800/80">
                    {t(inst.bio.zh, inst.bio.en)}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-800/60 space-y-1">
                  {inst.credentials.map((c, cidx) => (
                    <div key={cidx} className="flex items-center gap-1.5 text-[10px] text-slate-400">
                      <CheckCircle2 className="w-3 h-3 text-emerald-400 shrink-0" />
                      <span className="truncate">{c}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
