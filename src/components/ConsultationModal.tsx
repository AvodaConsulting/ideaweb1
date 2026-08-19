import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { 
  X, 
  Calendar, 
  Clock, 
  Building2, 
  Send, 
  CheckCircle2, 
  Sparkles, 
  PhoneCall, 
  Mail, 
  MapPin 
} from 'lucide-react';
import confetti from 'canvas-confetti';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({
  isOpen,
  onClose
}) => {
  const { lang, t } = useLanguage();

  const [form, setForm] = useState({
    name: '',
    org: '',
    email: '',
    phone: '',
    sector: 'enterprise',
    preferredDate: '2026-09-15',
    preferredTime: '14:30',
    needsAssessment: true,
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    confetti({
      particleCount: 75,
      spread: 70,
      origin: { y: 0.6 }
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md overflow-y-auto">
      <div 
        className="relative w-full max-w-xl bg-slate-900 border border-slate-700 rounded-2xl shadow-2xl overflow-hidden my-8"
        onClick={e => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-6 bg-slate-950 border-b border-slate-800 flex items-center justify-between">
          <div>
            <span className="text-xs font-mono font-semibold text-cyan-400">EXPERT AI CONSULTATION</span>
            <h3 className="text-lg font-bold text-white mt-0.5">
              {t('預約 30 分鐘免費機構 AI 培訓評估與診斷', 'Book 30-min AI Training Consultation')}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {!submitted ? (
          <form onSubmit={handleSubmit} className="p-6 space-y-4 text-xs">
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="text-slate-400 font-medium block mb-1">{t('您的姓名', 'Your Name')}</label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={e => setForm({ ...form, name: e.target.value })}
                  placeholder={t('例如：陳先生 / Dr. Lee', 'e.g. Mr. Chan')}
                  className="w-full bg-slate-950 border border-slate-700 rounded-lg p-2.5 text-white focus:outline-none focus:border-indigo-500"
                />
              </div>
              <div>
                <label className="text-slate-400 font-medium block mb-1">{t('機構/學校/企業名稱', 'Organization')}</label>
                <input
                  type="text"
                  required
                  value={form.org}
                  onChange={e => setForm({ ...form, org: e.target.value })}
                  placeholder={t('例如：某某中學 / 跨國科技', 'e.g. Tech Corp / School')}
                  className="w-full bg-slate-950 border border-slate-700 rounded-lg p-2.5 text-white focus:outline-none focus:border-indigo-500"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="text-slate-400 font-medium block mb-1">{t('公務電郵 (Email)', 'Work Email')}</label>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={e => setForm({ ...form, email: e.target.value })}
                  className="w-full bg-slate-950 border border-slate-700 rounded-lg p-2.5 text-white focus:outline-none focus:border-indigo-500"
                />
              </div>
              <div>
                <label className="text-slate-400 font-medium block mb-1">{t('聯絡電話 / WhatsApp', 'Phone / WhatsApp')}</label>
                <input
                  type="tel"
                  required
                  value={form.phone}
                  onChange={e => setForm({ ...form, phone: e.target.value })}
                  className="w-full bg-slate-950 border border-slate-700 rounded-lg p-2.5 text-white focus:outline-none focus:border-indigo-500"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="text-slate-400 font-medium block mb-1">{t('預約希望日期', 'Preferred Date')}</label>
                <input
                  type="date"
                  value={form.preferredDate}
                  onChange={e => setForm({ ...form, preferredDate: e.target.value })}
                  className="w-full bg-slate-950 border border-slate-700 rounded-lg p-2.5 text-white focus:outline-none focus:border-indigo-500"
                />
              </div>
              <div>
                <label className="text-slate-400 font-medium block mb-1">{t('期望時間 (時段)', 'Preferred Time')}</label>
                <select
                  value={form.preferredTime}
                  onChange={e => setForm({ ...form, preferredTime: e.target.value })}
                  className="w-full bg-slate-950 border border-slate-700 rounded-lg p-2.5 text-white focus:outline-none focus:border-indigo-500"
                >
                  <option value="10:30">10:30 - 11:00 (上午)</option>
                  <option value="14:30">14:30 - 15:00 (下午)</option>
                  <option value="16:30">16:30 - 17:00 (下午)</option>
                  <option value="18:30">18:30 - 19:00 (傍晚)</option>
                </select>
              </div>
            </div>

            <div>
              <label className="text-slate-400 font-medium block mb-1">{t('具體培訓需求或痛點描述 (選填)', 'Specific Needs or Questions (Optional)')}</label>
              <textarea
                rows={3}
                value={form.message}
                onChange={e => setForm({ ...form, message: e.target.value })}
                placeholder={t('例如：欲為全校 30 位老師申請 QEF 資助開辦 AI 工作坊...', 'e.g. Looking to apply for QEF funding for teacher AI workshops...')}
                className="w-full bg-slate-950 border border-slate-700 rounded-lg p-2.5 text-white focus:outline-none focus:border-indigo-500 resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-cyan-600 hover:from-indigo-500 hover:to-cyan-500 text-white font-bold text-xs shadow-lg shadow-indigo-600/30 transition-all active:scale-98 cursor-pointer flex items-center justify-center gap-2"
            >
              <Send className="w-4 h-4" />
              <span>{t('確認預約專屬諮詢時間', 'Confirm Appointment')}</span>
            </button>
          </form>
        ) : (
          <div className="p-8 text-center space-y-4">
            <div className="w-14 h-14 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-7 h-7" />
            </div>
            <h4 className="text-lg font-bold text-white">
              {t('諮詢預約已成功登記！', 'Consultation Booked Successfully!')}
            </h4>
            <p className="text-xs text-slate-300 leading-relaxed max-w-sm mx-auto">
              {t('IDEA 資深教育與技術顧問將於 12 小時內透過電郵發送 Google Meet 會議連結與會前診斷問卷。', 'Our Senior Consultant will email the Google Meet invitation within 12 hours.')}
            </p>
            <button
              onClick={onClose}
              className="px-6 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold"
            >
              {t('關閉視窗', 'Close')}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
