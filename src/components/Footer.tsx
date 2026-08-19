import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { 
  Sparkles, 
  MapPin, 
  Phone, 
  Mail, 
  ShieldCheck, 
  ExternalLink,
  Award,
  Globe
} from 'lucide-react';

interface FooterProps {
  onOpenPortal: () => void;
  onOpenConsultation: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenPortal, onOpenConsultation }) => {
  const { lang, t } = useLanguage();

  return (
    <footer className="bg-[#050609] border-t border-slate-800 text-slate-400 text-xs relative z-10 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 pb-12 border-b border-slate-800/80">
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-indigo-500 to-cyan-400 flex items-center justify-center text-white font-extrabold text-sm shadow-md shadow-indigo-500/20">
                ID
              </div>
              <span className="font-bold text-lg text-white tracking-tight">
                IDEA AI Academy
              </span>
            </div>

            <p className="text-slate-400 leading-relaxed max-w-sm text-xs">
              {t(
                'IDEA 人工智能學院 —— 專注於公開課程、小組研習及企業深度 AI 包班，覆蓋社福、大學、中小幼及企業，賦能全齡科技素養與專業研發。',
                'IDEA AI Academy empowers NGOs, universities, K-12 schools, kindergartens, and enterprises with practical AI training, LMS management, and proprietary EdTech.'
              )}
            </p>

            <div className="flex items-center gap-2 pt-2">
              <button
                onClick={onOpenConsultation}
                className="px-4 py-2 rounded-xl bg-indigo-600/30 hover:bg-indigo-600 text-indigo-300 hover:text-white border border-indigo-500/30 font-semibold transition-all cursor-pointer text-xs"
              >
                {t('預約 1 對 1 專家諮詢', 'Book 1-on-1 Consultation')}
              </button>
            </div>
          </div>

          {/* Quick links: Programs */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase text-white tracking-wider">
              {t('課程體系', 'Training Programs')}
            </h4>
            <ul className="space-y-2">
              <li><a href="#courses-section" className="hover:text-cyan-400 transition-colors">{t('企業級生成式 AI 落地', 'Enterprise GenAI')}</a></li>
              <li><a href="#courses-section" className="hover:text-cyan-400 transition-colors">{t('專業級深度學習與 PyTorch', 'Deep Learning & PyTorch')}</a></li>
              <li><a href="#courses-section" className="hover:text-cyan-400 transition-colors">{t('微軟 & AWS 國際官方考證', 'Global Exam Bootcamps')}</a></li>
              <li><a href="#courses-section" className="hover:text-cyan-400 transition-colors">{t('社福機構 (NGO) 個案增效', 'NGO & Social Welfare')}</a></li>
              <li><a href="#courses-section" className="hover:text-cyan-400 transition-colors">{t('中小學 STEAM 創客專題', 'K-12 STEAM Lab')}</a></li>
              <li><a href="#courses-section" className="hover:text-cyan-400 transition-colors">{t('幼兒 AI 音樂與感官啟蒙', 'Preschool Music AI')}</a></li>
            </ul>
          </div>

          {/* Proprietary Tools & LMS */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase text-white tracking-wider">
              {t('系統與工具', 'Systems & Tools')}
            </h4>
            <ul className="space-y-2">
              <li><a href="#ai-tools-section" className="hover:text-cyan-400 transition-colors">MelodyCraft AI ({t('兒童音樂', 'Kids Music')})</a></li>
              <li><a href="#ai-tools-section" className="hover:text-cyan-400 transition-colors">{t('AI 脫敏與工作流沙盒', 'Privacy Sandbox')}</a></li>
              <li><button onClick={onOpenPortal} className="hover:text-indigo-400 transition-colors text-left cursor-pointer">{t('學員管理後台 (LMS)', 'Learner LMS Portal')}</button></li>
              <li><button onClick={onOpenPortal} className="hover:text-indigo-400 transition-colors text-left cursor-pointer">{t('全球證書防偽查驗', 'Certificate Verifier')}</button></li>
              <li><a href="#quotation-calculator" className="hover:text-cyan-400 transition-colors">{t('機構即時報價生成器', 'Quotation Engine')}</a></li>
            </ul>
          </div>

          {/* Contact & Campus */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase text-white tracking-wider">
              {t('校區中心與聯絡', 'Campuses & Contact')}
            </h4>
            <ul className="space-y-2 text-slate-400 text-xs">
              <li className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-indigo-400 shrink-0 mt-0.5" />
                <span>{t('九龍塘達之路 72 號創新科技中心 / 尖沙咀分校', 'Tat Chee Ave, Kowloon Tong / TST Campus')}</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                <span>+852 3955 8820 / WhatsApp: +852 9123 4567</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>admissions@idea-academy.ai</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-500 gap-4">
          <div>
            © 2026 IDEA AI Academy Ltd. All rights reserved. 創新教育科技・全球認證夥伴
          </div>
          <div className="flex items-center gap-4">
            <span>{t('資料私隱安全條款', 'Privacy Policy')}</span>
            <span>•</span>
            <span>{t('防偽證書公鑰協議', 'Certificate Verification Protocol')}</span>
            <span>•</span>
            <span>{t('政府資助顧問指引', 'Subsidy Assistance')}</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
