import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { 
  Calculator, 
  Building, 
  GraduationCap, 
  School, 
  HeartHandshake, 
  Baby, 
  Download, 
  CheckCircle, 
  DollarSign, 
  ShieldAlert, 
  Sparkles,
  ArrowRight,
  FileCheck2
} from 'lucide-react';
import confetti from 'canvas-confetti';

export const QuotationCalculator: React.FC = () => {
  const { lang, t } = useLanguage();

  const [institutionType, setInstitutionType] = useState<string>('enterprise');
  const [traineeCount, setTraineeCount] = useState<number>(15);
  const [level, setLevel] = useState<string>('practical');
  const [mode, setMode] = useState<string>('onsite');
  const [durationHours, setDurationHours] = useState<number>(12);
  const [needCloudGPU, setNeedCloudGPU] = useState<boolean>(true);
  const [needSubsidyAssistance, setNeedSubsidyAssistance] = useState<boolean>(true);

  // Form contact info
  const [orgName, setOrgName] = useState<string>('');
  const [contactName, setContactName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [submitted, setSubmitted] = useState<boolean>(false);

  // Calculation logic
  const calculatePricing = () => {
    let baseRatePerHour = 1800; // base instructor hourly rate for group

    if (institutionType === 'ngo') {
      baseRatePerHour = 1200; // subsidized rate for NGOs
    } else if (institutionType === 'kindergarten') {
      baseRatePerHour = 1350;
    } else if (institutionType === 'k12') {
      baseRatePerHour = 1450;
    } else if (institutionType === 'university') {
      baseRatePerHour = 1600;
    } else {
      baseRatePerHour = 2200; // corporate enterprise
    }

    if (level === 'deep_learning') baseRatePerHour *= 1.4;
    else if (level === 'cert') baseRatePerHour *= 1.25;

    let totalTuition = baseRatePerHour * durationHours;

    // Per-trainee material & Cloud sandbox cost
    let perTraineeSandboxCost = needCloudGPU ? 380 : 150;
    if (institutionType === 'kindergarten') perTraineeSandboxCost = 120; // MelodyCraft license

    const totalMaterialsCost = traineeCount * perTraineeSandboxCost;
    const grossTotal = totalTuition + totalMaterialsCost;

    // Volume discount
    let discountPercent = 0;
    if (traineeCount >= 25) discountPercent = 0.20;
    else if (traineeCount >= 15) discountPercent = 0.12;
    else if (traineeCount >= 8) discountPercent = 0.05;

    const discountAmount = grossTotal * discountPercent;
    const netTotal = Math.round(grossTotal - discountAmount);
    const perPaxAverage = Math.round(netTotal / (traineeCount || 1));

    return {
      grossTotal,
      discountAmount,
      discountPercent: discountPercent * 100,
      netTotal,
      perPaxAverage,
      applicableSubsidy: getSubsidyAdvice(institutionType)
    };
  };

  const getSubsidyAdvice = (type: string) => {
    if (type === 'ngo') return t('適用社會福利署資訊科技資助 (SWD IT Scheme) 或 賽馬會慈善信託基金', 'Eligible for SWD IT Grants & HKJC Charities Trust');
    if (type === 'k12') return t('適用教育局「優質教育基金」(QEF) 及 STEAM 校本全方位學習津貼', 'Eligible for EDB Quality Education Fund (QEF) & STEAM Subsidy');
    if (type === 'kindergarten') return t('適用幼兒園教育計劃環境與活動專案津貼', 'Eligible for Kindergarten Education Scheme Project Subsidies');
    if (type === 'university') return t('適用數碼港創意微型基金 (CCMF) 或 大學創科培育基金', 'Eligible for Cyberport CCMF & University Innovation Funds');
    return t('適用創新科技署「科技券」(TVP 獲批最高 75% 資助) 或 智慧培訓專項', 'Eligible for Technology Voucher Program (TVP up to 75% Funding)');
  };

  const pricing = calculatePricing();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 }
    });
  };

  return (
    <div id="quotation-calculator" className="glass-panel rounded-3xl p-6 lg:p-10 border border-indigo-500/20 shadow-2xl relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="max-w-3xl mb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 mb-3">
          <Calculator className="w-3.5 h-3.5" />
          <span>{t('機構/學校/企業 即時客製化報價與課綱預算方案', 'Instant Institutional & Enterprise Quotation Engine')}</span>
        </div>
        <h2 className="text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
          {t('透明化 AI 培訓方案試算', 'Calculate Your Tailored AI Training Program')}
        </h2>
        <p className="text-slate-400 text-sm lg:text-base mt-2">
          {t('無論是數十人至千人規模的企業包班、大中小學及幼稚園 STEAM 課程，或社福機構同工賦能，即時獲取精準預算與資助申請指南。', 'From corporate cohorts to school STEAM curriculums and NGO empowerments, get instant transparent estimates with funding guides.')}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Configuration Column */}
        <div className="lg:col-span-7 space-y-6">
          {/* Step 1: Institution Type */}
          <div>
            <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider block mb-3">
              {t('1. 選擇機構類別', '1. Select Institution Type')}
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
              {[
                { id: 'enterprise', icon: Building, label: t('企業 / 跨國公司', 'Enterprise / Corporate') },
                { id: 'ngo', icon: HeartHandshake, label: t('社福機構 / NGO', 'NGO / Social Welfare') },
                { id: 'university', icon: GraduationCap, label: t('大專院校 / 研究所', 'University / Tertiary') },
                { id: 'k12', icon: School, label: t('中學 / 小學', 'Secondary / Primary (K-12)') },
                { id: 'kindergarten', icon: Baby, label: t('幼稚園 / 幼兒學堂', 'Kindergarten / Preschool') }
              ].map(type => (
                <button
                  key={type.id}
                  type="button"
                  onClick={() => setInstitutionType(type.id)}
                  className={`flex flex-col items-center text-center p-3 rounded-xl border transition-all ${
                    institutionType === type.id
                      ? 'bg-indigo-600/30 border-indigo-500 text-white shadow-lg shadow-indigo-500/10'
                      : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:border-slate-700 hover:text-slate-200'
                  }`}
                >
                  <type.icon className="w-5 h-5 mb-1.5 text-indigo-400" />
                  <span className="text-xs font-medium">{type.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Step 2: Course Level & Duration */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider block mb-2">
                {t('2. 培訓課程深度級別', '2. Course Depth Level')}
              </label>
              <select
                value={level}
                onChange={e => setLevel(e.target.value)}
                className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3 py-2.5 text-xs text-white focus:outline-none focus:border-indigo-500"
              >
                <option value="beginner">{t('初階入門 / 全員 AI 素養啟蒙', 'Beginner / AI Literacy')}</option>
                <option value="practical">{t('實務應用 / 工作流自動化與 RAG', 'Practical / Workflows & RAG')}</option>
                <option value="cert">{t('國際官方認證預備 (Microsoft/AWS)', 'Global Certification Prep')}</option>
                <option value="deep_learning">{t('高階深度學習 / PyTorch / 模型微調', 'Advanced Deep Learning / PyTorch')}</option>
              </select>
            </div>

            <div>
              <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider block mb-2">
                {t('3. 預計授課總時數', '3. Total Training Hours')}
              </label>
              <select
                value={durationHours}
                onChange={e => setDurationHours(Number(e.target.value))}
                className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3 py-2.5 text-xs text-white focus:outline-none focus:border-indigo-500"
              >
                <option value={4}>4 {t('小時 (半天精華工作坊)', 'Hours (Half-day Workshop)')}</option>
                <option value={8}>8 {t('小時 (1 全天密集實戰營)', 'Hours (1-Day Intensive)')}</option>
                <option value={12}>12 {t('小時 (2 全天 / 4 堂課)', 'Hours (2-Day Bootcamp)')}</option>
                <option value={16}>16 {t('小時 (企業旗艦包班方案)', 'Hours (Flagship Cohort)')}</option>
                <option value={24}>24 {t('小時 (深入專題與科研輔導)', 'Hours (Research Capstone)')}</option>
                <option value={30}>30 {t('小時 (高階工程師架構特訓)', 'Hours (Advanced Specialization)')}</option>
              </select>
            </div>
          </div>

          {/* Step 3: Trainee Count Slider */}
          <div className="bg-slate-900/60 rounded-xl p-4 border border-slate-800">
            <div className="flex items-center justify-between text-xs font-semibold text-slate-300 mb-2">
              <span>{t('4. 培訓學員人數', '4. Number of Trainees')}</span>
              <span className="text-indigo-400 font-mono text-base font-bold">{traineeCount} {t('人', 'Pax')}</span>
            </div>
            <input
              type="range"
              min="5"
              max="100"
              step="5"
              value={traineeCount}
              onChange={e => setTraineeCount(Number(e.target.value))}
              className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-indigo-500"
            />
            <div className="flex justify-between text-[11px] text-slate-500 font-mono mt-1">
              <span>5 {t('人 (小組精品)', 'pax')}</span>
              <span>25 {t('人 (標準班級)', 'pax')}</span>
              <span>50 {t('人 (跨部門)', 'pax')}</span>
              <span>100+ {t('人 (全員)', 'pax')}</span>
            </div>
          </div>

          {/* Step 4: Mode & Add-ons */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider block mb-2">
                {t('5. 上課形式', '5. Delivery Mode')}
              </label>
              <select
                value={mode}
                onChange={e => setMode(e.target.value)}
                className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3 py-2.5 text-xs text-white focus:outline-none focus:border-indigo-500"
              >
                <option value="onsite">{t('機構/校內到場上門包班 (On-site)', 'On-site at Client Venue')}</option>
                <option value="campus_lab">{t('IDEA 專屬科技教室 (九龍塘/尖沙咀)', 'IDEA Innovation Lab (Kowloon)')}</option>
                <option value="online_live">{t('互動線上實時直播 (Interactive Live Zoom)', 'Interactive Live Online')}</option>
                <option value="hybrid">{t('線上線下混合模式 (Hybrid)', 'Hybrid (In-person + Online)')}</option>
              </select>
            </div>

            <div className="flex flex-col justify-end space-y-2">
              <label className="flex items-center gap-2 cursor-pointer text-xs text-slate-300">
                <input
                  type="checkbox"
                  checked={needCloudGPU}
                  onChange={e => setNeedCloudGPU(e.target.checked)}
                  className="rounded border-slate-700 text-indigo-600 focus:ring-indigo-500 bg-slate-900"
                />
                <span>{t('包含雲端 GPU 算力沙盒 / 軟體授權', 'Include Cloud GPU & Software licenses')}</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer text-xs text-slate-300">
                <input
                  type="checkbox"
                  checked={needSubsidyAssistance}
                  onChange={e => setNeedSubsidyAssistance(e.target.checked)}
                  className="rounded border-slate-700 text-indigo-600 focus:ring-indigo-500 bg-slate-900"
                />
                <span>{t('需要專人協助政府資助/QEF申請文件', 'Assist with Govt/QEF Funding Paperwork')}</span>
              </label>
            </div>
          </div>
        </div>

        {/* Real-time Quotation Breakdown Column */}
        <div className="lg:col-span-5 flex flex-col justify-between bg-slate-950/80 rounded-2xl p-6 border border-indigo-500/30 relative">
          <div>
            <div className="flex items-center justify-between pb-4 border-b border-slate-800">
              <span className="text-xs font-mono uppercase text-slate-400">{t('即時預算估算明細', 'Live Quotation Summary')}</span>
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                {t('團體優惠已套用', 'Volume Discount Applied')}
              </span>
            </div>

            {/* Price highlight */}
            <div className="my-6">
              <div className="text-xs text-slate-400 mb-1">{t('預估客製方案總費用 (HKD)', 'Estimated Total Net Budget (HKD)')}</div>
              <div className="flex items-baseline gap-2">
                <span className="text-3xl lg:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400 font-mono">
                  HK$ {pricing.netTotal.toLocaleString()}
                </span>
                {pricing.discountAmount > 0 && (
                  <span className="text-xs text-slate-500 line-through font-mono">
                    HK$ {pricing.grossTotal.toLocaleString()}
                  </span>
                )}
              </div>
              <div className="text-xs text-slate-400 mt-1 flex items-center gap-2">
                <span>{t('每位學員平均：', 'Average per trainee:')}</span>
                <span className="text-indigo-300 font-bold font-mono">HK$ {pricing.perPaxAverage.toLocaleString()} / 人</span>
                {pricing.discountPercent > 0 && (
                  <span className="text-emerald-400 font-semibold text-[11px]">(-{pricing.discountPercent}% OFF)</span>
                )}
              </div>
            </div>

            {/* Details breakdown */}
            <div className="space-y-2.5 text-xs text-slate-300 border-t border-slate-800/80 pt-4 mb-4">
              <div className="flex justify-between">
                <span className="text-slate-400">{t('專業講師授課時數', 'Instructor Teaching Hours')}:</span>
                <span className="font-medium text-white">{durationHours} {t('小時', 'Hours')}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">{t('受訓人數規模', 'Cohort Size')}:</span>
                <span className="font-medium text-white">{traineeCount} {t('位學員', 'Trainees')}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">{t('數位證書與考核', 'Certification & Assessment')}:</span>
                <span className="font-medium text-emerald-400">{t('全額包含 (具防偽核驗碼)', 'Included (Verifiable ID)')}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">{t('雲端沙盒與講義授權', 'Cloud Sandbox & Materials')}:</span>
                <span className="font-medium text-white">{needCloudGPU ? t('高階 GPU 實例', 'A100/L40S GPU') : t('標準雲端沙盒', 'Standard Sandbox')}</span>
              </div>
            </div>

            {/* Subsidy notice */}
            <div className="p-3 rounded-xl bg-indigo-950/40 border border-indigo-800/40 text-xs space-y-1">
              <div className="flex items-center gap-1.5 text-indigo-300 font-semibold">
                <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
                <span>{t('政府資助建議', 'Applicable Subsidy Guide')}:</span>
              </div>
              <p className="text-slate-300 text-[11px] leading-relaxed">
                {pricing.applicableSubsidy}
              </p>
            </div>
          </div>

          {/* Quick submission form */}
          {!submitted ? (
            <form onSubmit={handleSubmit} className="mt-6 pt-4 border-t border-slate-800 space-y-3">
              <div className="grid grid-cols-2 gap-2">
                <input
                  type="text"
                  required
                  placeholder={t('機構/學校/公司名稱', 'Organization Name')}
                  value={orgName}
                  onChange={e => setOrgName(e.target.value)}
                  className="bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500"
                />
                <input
                  type="text"
                  required
                  placeholder={t('聯絡人姓名與職銜', 'Contact Name & Role')}
                  value={contactName}
                  onChange={e => setContactName(e.target.value)}
                  className="bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500"
                />
              </div>
              <div className="grid grid-cols-2 gap-2">
                <input
                  type="email"
                  required
                  placeholder={t('公務電郵 (Email)', 'Work Email')}
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  className="bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500"
                />
                <input
                  type="tel"
                  required
                  placeholder={t('聯絡電話 / WhatsApp', 'Phone / WhatsApp')}
                  value={phone}
                  onChange={e => setPhone(e.target.value)}
                  className="bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500"
                />
              </div>
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-cyan-600 hover:from-indigo-500 hover:to-cyan-500 text-white font-bold text-xs transition-all shadow-lg shadow-indigo-600/30 active:scale-98 cursor-pointer"
              >
                <FileCheck2 className="w-4 h-4" />
                <span>{t('獲取完整客製化課綱提案書 (PDF) 與專人跟進', 'Request Full Custom Proposal & PDF Syllabus')}</span>
              </button>
            </form>
          ) : (
            <div className="mt-6 pt-4 border-t border-slate-800 text-center space-y-2">
              <div className="w-10 h-10 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto border border-emerald-500/30">
                <CheckCircle className="w-5 h-5" />
              </div>
              <h4 className="text-sm font-bold text-white">
                {t('報價需求已成功送出！', 'Quotation Request Sent Successfully!')}
              </h4>
              <p className="text-xs text-slate-300">
                {t('IDEA 企業與教育顧問將於 24 小時內聯絡', 'Our Senior AI Consultant will contact ')}
                <span className="text-cyan-400 font-semibold">{contactName || '貴機構代表'}</span>
                {t('，並電郵發送正式報價單與客製課綱。', ' with the formal proposal and syllabus.')}
              </p>
              <button
                type="button"
                onClick={() => setSubmitted(false)}
                className="text-xs text-indigo-400 hover:underline pt-2 inline-block cursor-pointer"
              >
                {t('重新試算其他方案', 'Calculate Another Program')}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
