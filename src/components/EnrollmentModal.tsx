import React, { useState } from 'react';
import { Course, EnrollmentFormState } from '../types';
import { useLanguage } from '../context/LanguageContext';
import { usePortal } from '../context/PortalContext';
import { 
  X, 
  CreditCard, 
  QrCode, 
  Building, 
  CheckCircle2, 
  Sparkles, 
  ShieldCheck, 
  ArrowRight, 
  Tag, 
  DollarSign, 
  Calendar,
  Layers,
  FileCheck
} from 'lucide-react';
import confetti from 'canvas-confetti';

interface EnrollmentModalProps {
  course: Course | null;
  onClose: () => void;
  onSuccessOpenPortal?: () => void;
}

export const EnrollmentModal: React.FC<EnrollmentModalProps> = ({
  course,
  onClose,
  onSuccessOpenPortal
}) => {
  const { lang, t } = useLanguage();
  const { enrollInCourse } = usePortal();

  const [form, setForm] = useState<EnrollmentFormState>({
    courseId: course?.id || '',
    scheduleId: course?.upcomingDates[0]?.id || '',
    studentName: '陳志豪 (Chan Chi Ho)',
    email: 'chiho.chan@example.hk',
    phone: '+852 9123 4567',
    organization: '香港恒生商業銀行',
    role: '高級副總裁 (Senior Vice President)',
    numberOfSeats: 1,
    paymentMethod: 'fps',
    needOfficialInvoice: true,
    couponCode: '',
    remarks: ''
  });

  const [appliedCoupon, setAppliedCoupon] = useState<{ code: string; discount: number } | null>(null);
  const [couponError, setCouponError] = useState<string>('');
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [createdEnrollmentId, setCreatedEnrollmentId] = useState<string>('');

  if (!course) return null;

  const basePricePerSeat = course.earlyBirdPrice || course.price;
  let totalGross = basePricePerSeat * form.numberOfSeats;
  let discountAmount = appliedCoupon ? appliedCoupon.discount : 0;
  if (form.numberOfSeats >= 3) {
    // Additional 10% group discount
    discountAmount += totalGross * 0.1;
  }
  const finalPayable = Math.max(0, totalGross - discountAmount);

  const handleApplyCoupon = () => {
    setCouponError('');
    const code = form.couponCode?.trim().toUpperCase();
    if (code === 'EARLYBIRD' || code === 'IDEA2026') {
      setAppliedCoupon({ code: code, discount: 500 });
    } else if (code === 'NGO500') {
      setAppliedCoupon({ code: code, discount: 800 });
    } else if (code) {
      setCouponError(t('優惠代碼無效或已過期', 'Invalid or expired coupon code'));
    }
  };

  const handleConfirmEnrollment = (e: React.FormEvent) => {
    e.preventDefault();
    const selectedBatch = course.upcomingDates.find(b => b.id === form.scheduleId) || course.upcomingDates[0];
    const scheduleDateStr = selectedBatch ? `${selectedBatch.dateStr} (${selectedBatch.timeStr})` : '彈性自訂班期';

    const res = enrollInCourse(form, course, scheduleDateStr, finalPayable);
    setCreatedEnrollmentId(res.enrollmentId);
    setIsSuccess(true);

    confetti({
      particleCount: 100,
      spread: 80,
      origin: { y: 0.55 }
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md overflow-y-auto">
      <div 
        className="relative w-full max-w-2xl bg-slate-900 border border-slate-700 rounded-2xl shadow-2xl overflow-hidden my-8 max-h-[92vh] flex flex-col"
        onClick={e => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-6 bg-slate-950 border-b border-slate-800 flex items-center justify-between">
          <div>
            <span className="text-xs font-mono font-semibold text-indigo-400">IDEA ACADEMY ENROLLMENT</span>
            <h3 className="text-xl font-bold text-white mt-0.5">
              {t('線上課程報名與名額確認', 'Course Registration & Seat Reservation')}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        {!isSuccess ? (
          <form onSubmit={handleConfirmEnrollment} className="p-6 overflow-y-auto space-y-6 flex-1">
            {/* Course Summary Box */}
            <div className="p-4 rounded-xl bg-indigo-950/30 border border-indigo-500/20 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <span className="text-[11px] font-mono text-indigo-300 font-bold">{course.code}</span>
                <h4 className="text-sm font-bold text-white">{t(course.title.zh, course.title.en)}</h4>
                <div className="text-xs text-slate-400 mt-1 flex items-center gap-2">
                  <Calendar className="w-3.5 h-3.5 text-slate-400" />
                  <span>{t(course.duration.zh, course.duration.en)}</span>
                </div>
              </div>
              <div className="text-right sm:border-l sm:border-slate-800 sm:pl-4">
                <div className="text-[11px] text-slate-400">{t('學費 (每席)', 'Tuition (Per Pax)')}</div>
                <div className="text-base font-bold text-white font-mono">HK$ {basePricePerSeat.toLocaleString()}</div>
              </div>
            </div>

            {/* Schedule Picker */}
            <div>
              <label className="text-xs font-semibold text-slate-300 block mb-2">
                {t('選擇開課班期 (Select Cohort Date)', 'Select Cohort Date')}
              </label>
              <div className="space-y-2">
                {course.upcomingDates.map(b => (
                  <label
                    key={b.id}
                    className={`flex items-center justify-between p-3 rounded-xl border cursor-pointer transition-all ${
                      form.scheduleId === b.id
                        ? 'bg-indigo-600/20 border-indigo-500 text-white'
                        : 'bg-slate-950 border-slate-800 text-slate-400 hover:border-slate-700'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <input
                        type="radio"
                        name="schedule"
                        value={b.id}
                        checked={form.scheduleId === b.id}
                        onChange={() => setForm({ ...form, scheduleId: b.id })}
                        className="accent-indigo-500"
                      />
                      <div>
                        <div className="text-xs font-bold text-white">{b.dateStr}</div>
                        <div className="text-[11px] text-slate-400">{b.timeStr} • {b.mode}</div>
                      </div>
                    </div>
                    <span className="text-[11px] font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded">
                      {t(`餘 ${b.seatsAvailable} 席`, `${b.seatsAvailable} seats`)}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            {/* Student Information Fields */}
            <div className="space-y-3">
              <label className="text-xs font-semibold text-slate-300 block">
                {t('學員資料與聯絡方式 (Trainee Information)', 'Trainee Contact Information')}
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <span className="text-[11px] text-slate-400 block mb-1">{t('學員中文/英文全名', 'Full Name')}</span>
                  <input
                    type="text"
                    required
                    value={form.studentName}
                    onChange={e => setForm({ ...form, studentName: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-indigo-500"
                  />
                </div>
                <div>
                  <span className="text-[11px] text-slate-400 block mb-1">{t('電郵 (用於接收 LMS 帳號與證書)', 'Email Address')}</span>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={e => setForm({ ...form, email: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-indigo-500"
                  />
                </div>
                <div>
                  <span className="text-[11px] text-slate-400 block mb-1">{t('聯絡電話 / WhatsApp', 'Phone / WhatsApp')}</span>
                  <input
                    type="tel"
                    required
                    value={form.phone}
                    onChange={e => setForm({ ...form, phone: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-indigo-500"
                  />
                </div>
                <div>
                  <span className="text-[11px] text-slate-400 block mb-1">{t('所屬公司 / 學校 / 機構 (選填)', 'Organization (Optional)')}</span>
                  <input
                    type="text"
                    value={form.organization || ''}
                    onChange={e => setForm({ ...form, organization: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-indigo-500"
                  />
                </div>
              </div>
            </div>

            {/* Seats & Coupon */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <span className="text-[11px] text-slate-400 block mb-1">{t('報名席位人數', 'Number of Seats')}</span>
                <select
                  value={form.numberOfSeats}
                  onChange={e => setForm({ ...form, numberOfSeats: Number(e.target.value) })}
                  className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-indigo-500"
                >
                  <option value={1}>1 {t('席 (個人報名)', 'Seat (Individual)')}</option>
                  <option value={2}>2 {t('席 (雙人同行)', 'Seats (Pair)')}</option>
                  <option value={3}>3 {t('席 (團隊報名 - 享 9 折)', 'Seats (Team - 10% OFF)')}</option>
                  <option value={5}>5 {t('席 (小組特惠 - 享 9 折)', 'Seats (Group - 10% OFF)')}</option>
                </select>
              </div>

              <div>
                <span className="text-[11px] text-slate-400 block mb-1">{t('優惠代碼 (如: EARLYBIRD / IDEA2026)', 'Promo Code')}</span>
                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder="EARLYBIRD"
                    value={form.couponCode || ''}
                    onChange={e => setForm({ ...form, couponCode: e.target.value })}
                    className="flex-1 bg-slate-950 border border-slate-700 rounded-lg px-3 py-2 text-xs text-white uppercase focus:outline-none focus:border-indigo-500"
                  />
                  <button
                    type="button"
                    onClick={handleApplyCoupon}
                    className="px-3 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs text-slate-200 border border-slate-700 transition-colors"
                  >
                    {t('套用', 'Apply')}
                  </button>
                </div>
                {couponError && <p className="text-[10px] text-rose-400 mt-1">{couponError}</p>}
                {appliedCoupon && <p className="text-[10px] text-emerald-400 mt-1">{t(`已折抵 HK$ ${appliedCoupon.discount}`, `Saved HK$ ${appliedCoupon.discount}`)}</p>}
              </div>
            </div>

            {/* Payment Method */}
            <div>
              <label className="text-xs font-semibold text-slate-300 block mb-2">
                {t('付款與結算方式 (Payment Method)', 'Payment Method')}
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {[
                  { id: 'fps', icon: QrCode, label: t('FPS 轉數快', 'FPS QR') },
                  { id: 'credit_card', icon: CreditCard, label: t('信用卡 / Stripe', 'Credit Card') },
                  { id: 'bank_transfer', icon: Building, label: t('銀行轉帳', 'Bank Wire') },
                  { id: 'invoice_cheque', icon: FileCheck, label: t('機構發票/支票', 'Org Invoice') }
                ].map(pm => (
                  <button
                    key={pm.id}
                    type="button"
                    onClick={() => setForm({ ...form, paymentMethod: pm.id as any })}
                    className={`flex flex-col items-center p-2.5 rounded-xl border text-center transition-all ${
                      form.paymentMethod === pm.id
                        ? 'bg-indigo-600/30 border-indigo-500 text-white'
                        : 'bg-slate-950 border-slate-800 text-slate-400 hover:border-slate-700'
                    }`}
                  >
                    <pm.icon className="w-4 h-4 mb-1 text-indigo-400" />
                    <span className="text-[11px] font-medium">{pm.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Price Total Summary Bar */}
            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
              <div className="flex justify-between text-xs text-slate-400">
                <span>{t('標準總計：', 'Subtotal:')}</span>
                <span className="font-mono text-slate-300">HK$ {totalGross.toLocaleString()}</span>
              </div>
              {discountAmount > 0 && (
                <div className="flex justify-between text-xs text-emerald-400">
                  <span>{t('優惠折抵：', 'Discounts:')}</span>
                  <span className="font-mono">- HK$ {discountAmount.toLocaleString()}</span>
                </div>
              )}
              <div className="flex justify-between text-sm font-bold text-white pt-2 border-t border-slate-800">
                <span>{t('應付實額 (Total Net):', 'Total Amount Due:')}</span>
                <span className="text-indigo-400 font-mono text-base">HK$ {finalPayable.toLocaleString()}</span>
              </div>
            </div>

            <div className="flex items-center justify-between gap-4 pt-2">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2.5 rounded-xl border border-slate-700 text-xs text-slate-300 hover:bg-slate-800 cursor-pointer"
              >
                {t('取消', 'Cancel')}
              </button>
              <button
                type="submit"
                className="flex-1 py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-cyan-600 hover:from-indigo-500 hover:to-cyan-500 text-white text-xs font-bold transition-all shadow-lg shadow-indigo-600/30 flex items-center justify-center gap-2 cursor-pointer active:scale-98"
              >
                <ShieldCheck className="w-4 h-4" />
                <span>{t('確認並完成預留 (立即開通學習權限)', 'Confirm & Instant LMS Access')}</span>
              </button>
            </div>
          </form>
        ) : (
          /* Success Screen */
          <div className="p-8 text-center space-y-5">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center mx-auto animate-bounce">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div className="space-y-1">
              <span className="text-xs font-mono text-indigo-400">ENROLLMENT CONFIRMED #{createdEnrollmentId}</span>
              <h3 className="text-2xl font-bold text-white">
                {t('報名成功！歡迎加入 IDEA AI Academy', 'Registration Successful! Welcome to IDEA AI Academy')}
              </h3>
              <p className="text-xs text-slate-300 max-w-md mx-auto leading-relaxed mt-2">
                {t('確認通知書與 LMS 登入憑證已發送至', 'Confirmation & LMS login credentials have been sent to ')}
                <span className="text-cyan-400 font-mono font-semibold">{form.email}</span>
                {t('。您現在已可在「學員管理系統」中查看課程進度與課堂講義。', '. You can now manage your courses in the Learner Portal.')}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 max-w-md mx-auto text-left text-xs space-y-2">
              <div className="flex justify-between">
                <span className="text-slate-400">{t('學員姓名', 'Student')}:</span>
                <span className="text-white font-medium">{form.studentName}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">{t('報名課程', 'Course')}:</span>
                <span className="text-white font-medium">{t(course.title.zh, course.title.en)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">{t('實付金額', 'Amount Paid')}:</span>
                <span className="text-emerald-400 font-bold font-mono">HK$ {finalPayable.toLocaleString()}</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4">
              <button
                onClick={() => {
                  onClose();
                  if (onSuccessOpenPortal) onSuccessOpenPortal();
                }}
                className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold transition-all shadow-lg shadow-indigo-600/30 flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>{t('進入我的學員管理中心 (LMS)', 'Open My Student LMS Portal')}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={onClose}
                className="w-full sm:w-auto px-5 py-2.5 rounded-xl border border-slate-700 text-slate-300 hover:bg-slate-800 text-xs font-medium cursor-pointer"
              >
                {t('返回主頁', 'Return to Home')}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
