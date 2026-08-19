import React from 'react';
import { Course } from '../types';
import { useLanguage } from '../context/LanguageContext';
import { 
  X, 
  Clock, 
  Calendar, 
  Award, 
  Layers, 
  CheckCircle2, 
  Users, 
  Laptop, 
  ArrowRight, 
  ShieldCheck, 
  BookOpen, 
  Sparkles 
} from 'lucide-react';

interface CourseDetailModalProps {
  course: Course | null;
  onClose: () => void;
  onEnroll: (course: Course) => void;
}

export const CourseDetailModal: React.FC<CourseDetailModalProps> = ({
  course,
  onClose,
  onEnroll
}) => {
  const { lang, t } = useLanguage();

  if (!course) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md overflow-y-auto">
      <div 
        className="relative w-full max-w-4xl bg-slate-900 border border-slate-700 rounded-2xl shadow-2xl overflow-hidden my-8 max-h-[90vh] flex flex-col"
        onClick={e => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="relative p-6 lg:p-8 bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-950 border-b border-slate-700/80">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-slate-800/80 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-bold bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
              {course.code}
            </span>
            <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
              {t(course.badge.zh, course.badge.en)}
            </span>
            <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-slate-800 text-slate-300 border border-slate-700">
              {course.level === 'beginner' ? t('初階入門', 'Beginner') :
               course.level === 'intermediate' ? t('進階實戰', 'Intermediate') :
               course.level === 'certification' ? t('官方考證', 'Certification') : t('專業研發', 'Advanced Specialist')}
            </span>
          </div>

          <h2 className="text-2xl lg:text-3xl font-extrabold text-white leading-tight">
            {t(course.title.zh, course.title.en)}
          </h2>

          <p className="mt-2.5 text-slate-300 text-sm leading-relaxed max-w-3xl">
            {t(course.fullDesc.zh, course.fullDesc.en)}
          </p>

          {/* Quick Metrics Strip */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-6 pt-4 border-t border-slate-700/60 text-xs">
            <div className="flex items-center gap-2 text-slate-300">
              <Clock className="w-4 h-4 text-indigo-400 shrink-0" />
              <span>{t(course.duration.zh, course.duration.en)}</span>
            </div>
            <div className="flex items-center gap-2 text-slate-300">
              <Laptop className="w-4 h-4 text-cyan-400 shrink-0" />
              <span>{t(course.format.zh, course.format.en)}</span>
            </div>
            <div className="flex items-center gap-2 text-slate-300">
              <Award className="w-4 h-4 text-amber-400 shrink-0" />
              <span className="truncate">{course.certBadge || t('IDEA 認證證書', 'IDEA Certification')}</span>
            </div>
            <div className="flex items-center gap-2 text-slate-300">
              <Users className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>{course.instructors[0]}</span>
            </div>
          </div>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 lg:p-8 overflow-y-auto space-y-8 divide-y divide-slate-800 flex-1">
          {/* Key Outcomes */}
          <div className="space-y-3">
            <h3 className="text-sm font-bold uppercase tracking-wider text-indigo-400 flex items-center gap-2">
              <Sparkles className="w-4 h-4" />
              <span>{t('核心學習成效 (Key Learning Outcomes)', 'Key Learning Outcomes')}</span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {(lang === 'zh' ? course.keyOutcomes.zh : course.keyOutcomes.en).map((outcome, idx) => (
                <div key={idx} className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-800/40 border border-slate-800">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span className="text-xs text-slate-200 leading-normal">{outcome}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Detailed Syllabus Modules */}
          <div className="pt-6 space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-cyan-400 flex items-center gap-2">
              <BookOpen className="w-4 h-4" />
              <span>{t('詳細課綱單元 (Curriculum Breakdown)', 'Detailed Syllabus Breakdown')}</span>
            </h3>

            <div className="space-y-4">
              {course.syllabus.map(mod => (
                <div key={mod.moduleNumber} className="rounded-xl bg-slate-950/60 border border-slate-800 p-4">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-2 border-b border-slate-800/80 gap-1">
                    <h4 className="text-sm font-bold text-white">
                      {t(mod.title.zh, mod.title.en)}
                    </h4>
                    <span className="text-xs text-indigo-400 font-mono">
                      {mod.durationHours} {t('小時', 'Hours')}
                    </span>
                  </div>

                  <ul className="mt-3 space-y-1.5 text-xs text-slate-300 list-disc list-inside">
                    {(lang === 'zh' ? mod.topics.zh : mod.topics.en).map((topic, tidx) => (
                      <li key={tidx} className="text-slate-300">{topic}</li>
                    ))}
                  </ul>

                  <div className="mt-3 pt-2.5 border-t border-slate-800/60 flex items-center gap-2 text-xs">
                    <span className="px-2 py-0.5 rounded bg-indigo-950 text-indigo-300 font-medium text-[11px] border border-indigo-800/50">
                      {t('實作專案', 'Hands-on Lab')}
                    </span>
                    <span className="text-slate-300 font-medium">{t(mod.handsOnProject.zh, mod.handsOnProject.en)}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Prerequisites & Equipment */}
          <div className="pt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-slate-800/30 border border-slate-800 space-y-1.5">
              <span className="text-xs font-semibold text-slate-400">{t('先備知識要求', 'Prerequisites')}</span>
              <p className="text-xs text-slate-200">{t(course.prerequisites.zh, course.prerequisites.en)}</p>
            </div>
            <div className="p-4 rounded-xl bg-slate-800/30 border border-slate-800 space-y-1.5">
              <span className="text-xs font-semibold text-slate-400">{t('硬體與環境配套', 'Equipment & Sandbox Provided')}</span>
              <p className="text-xs text-slate-200">{t(course.equipmentProvided.zh, course.equipmentProvided.en)}</p>
            </div>
          </div>

          {/* Upcoming Batches */}
          <div className="pt-6 space-y-3">
            <h3 className="text-sm font-bold uppercase tracking-wider text-amber-400 flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>{t('即將開課班期與名額 (Upcoming Cohort Dates)', 'Upcoming Cohorts & Availability')}</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {course.upcomingDates.map(batch => (
                <div key={batch.id} className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800 flex items-center justify-between">
                  <div>
                    <div className="text-xs font-bold text-white">{batch.dateStr}</div>
                    <div className="text-[11px] text-slate-400">{batch.timeStr} • {batch.mode}</div>
                  </div>
                  <div className="text-right">
                    <span className="inline-block px-2 py-0.5 rounded text-[11px] font-bold bg-amber-500/20 text-amber-300 border border-amber-500/30">
                      {t(`餘 ${batch.seatsAvailable} 席`, `${batch.seatsAvailable} Left`)}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer Bar */}
        <div className="p-4 lg:px-8 lg:py-5 bg-slate-950 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <div className="text-xs text-slate-400">{t('標準學費 / 早鳥優惠', 'Standard / Early Bird Price')}</div>
            <div className="flex items-baseline gap-2">
              <span className="text-2xl font-bold text-white font-mono">
                HK$ {(course.earlyBirdPrice || course.price).toLocaleString()}
              </span>
              {course.earlyBirdPrice && (
                <span className="text-xs text-slate-500 line-through font-mono">
                  HK$ {course.price.toLocaleString()}
                </span>
              )}
            </div>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="flex-1 sm:flex-none px-4 py-2.5 rounded-xl border border-slate-700 text-slate-300 hover:bg-slate-800 text-xs font-semibold transition-colors cursor-pointer"
            >
              {t('關閉', 'Close')}
            </button>
            <button
              onClick={() => {
                onClose();
                onEnroll(course);
              }}
              className="flex-1 sm:flex-none px-6 py-2.5 rounded-xl bg-gradient-to-r from-indigo-600 to-cyan-600 hover:from-indigo-500 hover:to-cyan-500 text-white text-xs font-bold transition-all shadow-lg shadow-indigo-600/30 flex items-center justify-center gap-2 active:scale-95 cursor-pointer"
            >
              <span>{t('立即預留名額報名', 'Enroll & Book Seat')}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
