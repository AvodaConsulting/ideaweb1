import React, { useState, useRef } from 'react';
import { Course, CourseCategory } from '../types';
import { COURSES } from '../data/courses';
import { useLanguage } from '../context/LanguageContext';
import { 
  Search, 
  Clock, 
  Award, 
  Users, 
  Sparkles, 
  ChevronRight,
  BookOpen
} from 'lucide-react';

interface CourseCatalogProps {
  onSelectCourse: (course: Course) => void;
  onEnrollCourse: (course: Course) => void;
}

// 3D Perspective Tilt Card with Dynamic Specular Glare
const TiltCard: React.FC<{
  course: Course;
  onSelect: (course: Course) => void;
  onEnroll: (course: Course) => void;
}> = ({ course, onSelect, onEnroll }) => {
  const { lang, t } = useLanguage();
  const cardRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0, glareX: 50, glareY: 50, opacity: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -7;
    const rotateY = ((x - centerX) / centerX) * 7;
    const glareX = (x / rect.width) * 100;
    const glareY = (y / rect.height) * 100;

    setTilt({ x: rotateX, y: rotateY, glareX, glareY, opacity: 1 });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0, glareX: 50, glareY: 50, opacity: 0 });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="group relative rounded-2xl bg-slate-900/80 border border-slate-800/90 transition-all duration-200 ease-out flex flex-col justify-between overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-indigo-500/10 hover:border-indigo-500/40"
      style={{
        transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
        transformStyle: 'preserve-3d'
      }}
    >
      {/* Specular Radial Glare */}
      <div
        className="pointer-events-none absolute inset-0 transition-opacity duration-300 z-10"
        style={{
          background: `radial-gradient(circle 250px at ${tilt.glareX}% ${tilt.glareY}%, rgba(255, 255, 255, 0.08), transparent 80%)`,
          opacity: tilt.opacity
        }}
      />

      {/* Card Top / Header */}
      <div className="p-6 space-y-3 relative z-0">
        <div className="flex items-center justify-between gap-2">
          <span className="px-2.5 py-0.5 rounded text-[10px] font-mono font-bold bg-slate-800 text-slate-300 border border-slate-700">
            {course.code}
          </span>
          <span className="px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
            {t(course.badge.zh, course.badge.en)}
          </span>
        </div>

        <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors leading-snug line-clamp-2">
          {t(course.title.zh, course.title.en)}
        </h3>

        <p className="text-xs text-slate-400 leading-relaxed line-clamp-3">
          {t(course.shortDesc.zh, course.shortDesc.en)}
        </p>

        {/* Highlights */}
        <div className="pt-2 border-t border-slate-800/80 space-y-1.5 text-xs text-slate-300">
          <div className="flex items-center gap-2">
            <Clock className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
            <span className="text-[11px] text-slate-300">{t(course.duration.zh, course.duration.en)}</span>
          </div>
          <div className="flex items-center gap-2">
            <Users className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
            <span className="text-[11px] text-slate-400 truncate">{t(course.targetAudience.zh, course.targetAudience.en)}</span>
          </div>
          {course.certBadge && (
            <div className="flex items-center gap-2">
              <Award className="w-3.5 h-3.5 text-amber-400 shrink-0" />
              <span className="text-[11px] text-amber-300 truncate">{course.certBadge}</span>
            </div>
          )}
        </div>
      </div>

      {/* Card Bottom / Action Bar */}
      <div className="p-6 pt-4 bg-slate-950/80 border-t border-slate-800 flex items-center justify-between gap-2 relative z-0">
        <div>
          <div className="text-[10px] text-slate-500 uppercase">{t('學費 (早鳥/特惠)', 'Tuition')}</div>
          <div className="flex items-baseline gap-1.5">
            <span className="text-lg font-bold text-white font-mono">
              HK$ {(course.earlyBirdPrice || course.price).toLocaleString()}
            </span>
            {course.earlyBirdPrice && (
              <span className="text-[10px] text-slate-500 line-through font-mono">
                HK$ {course.price.toLocaleString()}
              </span>
            )}
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => onSelect(course)}
            className="px-3 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold transition-colors flex items-center gap-1 cursor-pointer"
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span>{t('課綱', 'Details')}</span>
          </button>
          <button
            onClick={() => onEnroll(course)}
            className="px-3.5 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold transition-all shadow-md shadow-indigo-600/20 flex items-center gap-1 cursor-pointer active:scale-95"
          >
            <span>{t('報名', 'Enroll')}</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export const CourseCatalog: React.FC<CourseCatalogProps> = ({
  onSelectCourse,
  onEnrollCourse
}) => {
  const { lang, t } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<CourseCategory>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories: { id: CourseCategory; label: { zh: string; en: string } }[] = [
    { id: 'all', label: { zh: '全部課程系列', en: 'All Programs' } },
    { id: 'enterprise', label: { zh: '企業與高管內訓', en: 'Enterprise & Leaders' } },
    { id: 'professional_dl', label: { zh: '專業深度學習 & PyTorch', en: 'Deep Learning & PyTorch' } },
    { id: 'certification', label: { zh: '國際官方認證考證', en: 'Global Certifications' } },
    { id: 'ngo', label: { zh: '社福機構與 NGO', en: 'NGO & Social Welfare' } },
    { id: 'k12', label: { zh: '中小學 STEAM (K-12)', en: 'K-12 School STEAM' } },
    { id: 'kindergarten', label: { zh: '幼兒 AI 音樂與啟蒙', en: 'Kindergarten Music AI' } },
    { id: 'university', label: { zh: '大專院校科研與專題', en: 'University Capstone' } }
  ];

  const filteredCourses = COURSES.filter(course => {
    if (selectedCategory !== 'all' && course.category !== selectedCategory) {
      return false;
    }
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      const titleZh = course.title.zh.toLowerCase();
      const titleEn = course.title.en.toLowerCase();
      const descZh = course.shortDesc.zh.toLowerCase();
      const code = course.code.toLowerCase();
      return titleZh.includes(q) || titleEn.includes(q) || descZh.includes(q) || code.includes(q);
    }
    return true;
  });

  return (
    <section id="courses-section" className="py-16 lg:py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-cyan-500/10 text-cyan-300 border border-cyan-500/20 mb-3">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
              <span>{t('全面覆蓋 全齡教育・企業轉型・專業科研', 'Full Spectrum AI Education & Enterprise Mastery')}</span>
            </div>
            <h2 className="text-3xl lg:text-5xl font-extrabold text-white tracking-tight">
              {t('精選 AI 專業課程與培訓方案', 'Explore Specialized AI Curricula')}
            </h2>
            <p className="text-slate-400 text-sm lg:text-base mt-2 max-w-2xl">
              {t('由學術界博士、微軟及 AWS 官方授權講師主理，從零基礎素養、國際認證至高階深度學習，結合雲端沙盒與自主研發工具。', 'Taught by Ph.D. researchers and certified enterprise architects. From digital literacy to global certification and neural architecture.')}
            </p>
          </div>

          {/* Search bar */}
          <div className="relative min-w-[280px]">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              placeholder={t('搜尋課程名稱、關鍵字或代碼...', 'Search courses, keywords, codes...')}
              className="w-full bg-slate-900/90 border border-slate-800 rounded-xl pl-10 pr-4 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition-colors"
            />
          </div>
        </div>

        {/* Category Pill Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs font-medium whitespace-nowrap transition-all cursor-pointer ${
                selectedCategory === cat.id
                  ? 'bg-indigo-600 text-white font-semibold shadow-lg shadow-indigo-600/30'
                  : 'bg-slate-900/80 text-slate-400 hover:text-slate-200 hover:bg-slate-800 border border-slate-800'
              }`}
            >
              {t(cat.label.zh, cat.label.en)}
            </button>
          ))}
        </div>

        {/* Course Cards Grid with 3D Tilt Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCourses.map(course => (
            <TiltCard
              key={course.id}
              course={course}
              onSelect={onSelectCourse}
              onEnroll={onEnrollCourse}
            />
          ))}
        </div>

        {/* Empty Search Fallback */}
        {filteredCourses.length === 0 && (
          <div className="text-center py-16 text-slate-400">
            <p className="text-sm font-medium">{t('未找到相符的課程，請調整搜尋關鍵字或分類。', 'No courses found matching your criteria.')}</p>
            <button
              onClick={() => {
                setSelectedCategory('all');
                setSearchQuery('');
              }}
              className="mt-3 text-xs text-indigo-400 hover:underline cursor-pointer"
            >
              {t('重設所有篩選條件', 'Reset Filters')}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
