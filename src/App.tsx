import React, { useState } from 'react';
import { LanguageProvider, useLanguage } from './context/LanguageContext';
import { PortalProvider } from './context/PortalContext';
import { ThreeNeuralBackground } from './components/ThreeNeuralBackground';
import { CustomCursor } from './components/CustomCursor';
import { ScrollProgressHUD } from './components/ScrollProgressHUD';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { CourseCatalog } from './components/CourseCatalog';
import { ProprietaryAITools } from './components/ProprietaryAITools';
import { StudentPortal } from './components/StudentPortal';
import { QuotationCalculator } from './components/QuotationCalculator';
import { ClientCases } from './components/ClientCases';
import { AboutSection } from './components/AboutSection';
import { CourseDetailModal } from './components/CourseDetailModal';
import { EnrollmentModal } from './components/EnrollmentModal';
import { ConsultationModal } from './components/ConsultationModal';
import { Footer } from './components/Footer';
import { Course } from './types';

const MainContent: React.FC = () => {
  const { lang, t } = useLanguage();

  const [selectedCourseForDetail, setSelectedCourseForDetail] = useState<Course | null>(null);
  const [selectedCourseForEnroll, setSelectedCourseForEnroll] = useState<Course | null>(null);
  const [isConsultationOpen, setIsConsultationOpen] = useState<boolean>(false);

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#07080c] text-slate-100 relative selection:bg-indigo-500/30 selection:text-indigo-200">
      {/* Silky Fluid Liquid WebGL Organic Background */}
      <ThreeNeuralBackground />

      {/* Interactive Agency Dynamic Cursor */}
      <CustomCursor />

      {/* Scroll Progress & Telemetry HUD */}
      <ScrollProgressHUD />

      {/* Top Navbar */}
      <Navbar
        onOpenPortal={() => scrollToSection('student-portal')}
        onOpenQuotation={() => scrollToSection('quotation-calculator')}
      />

      <main className="relative z-10">
        {/* Hero Section with 3D Parallax & Kinetic Editorial Typography */}
        <Hero
          onExploreCourses={() => scrollToSection('courses-section')}
          onOpenCalculator={() => scrollToSection('quotation-calculator')}
          onTryMusicTool={() => scrollToSection('ai-tools-section')}
        />

        {/* Course Catalog & Filterable Explorer */}
        <CourseCatalog
          onSelectCourse={(course) => setSelectedCourseForDetail(course)}
          onEnrollCourse={(course) => setSelectedCourseForEnroll(course)}
        />

        {/* Proprietary AI Tools Hub (MelodyCraft AI & Multi-domain Sandbox) */}
        <ProprietaryAITools />

        {/* Student & Org LMS Management Dashboard & Digital Certificate Center */}
        <section className="py-16 lg:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10 space-y-2">
            <span className="text-xs font-mono text-indigo-400 font-bold uppercase tracking-wider">
              {t('整合線上報名與學員管理系統', 'Integrated LMS & Student Management')}
            </span>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-white">
              {t('學員學習後台與防偽證書中心', 'Learner Management & Credential Center')}
            </h2>
            <p className="text-xs sm:text-sm text-slate-400">
              {t('即時查閱報名進度、雲端沙盒登入、下載數碼證書及企業培訓出席率管理。', 'Track course progress, access cloud GPU labs, verify certifications, and export corporate ROI analytics.')}
            </p>
          </div>
          <StudentPortal />
        </section>

        {/* Custom Quotation & Subsidy Proposal Generator */}
        <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <QuotationCalculator />
        </section>

        {/* Client Cases & Institutional Track Record */}
        <ClientCases />

        {/* About Section & Faculty */}
        <AboutSection />
      </main>

      {/* Footer */}
      <Footer
        onOpenPortal={() => scrollToSection('student-portal')}
        onOpenConsultation={() => setIsConsultationOpen(true)}
      />

      {/* Modals */}
      <CourseDetailModal
        course={selectedCourseForDetail}
        onClose={() => setSelectedCourseForDetail(null)}
        onEnroll={(course) => setSelectedCourseForEnroll(course)}
      />

      <EnrollmentModal
        course={selectedCourseForEnroll}
        onClose={() => setSelectedCourseForEnroll(null)}
        onSuccessOpenPortal={() => scrollToSection('student-portal')}
      />

      <ConsultationModal
        isOpen={isConsultationOpen}
        onClose={() => setIsConsultationOpen(false)}
      />
    </div>
  );
};

export default function App() {
  return (
    <LanguageProvider>
      <PortalProvider>
        <MainContent />
      </PortalProvider>
    </LanguageProvider>
  );
}
