import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { usePortal } from '../context/PortalContext';
import { COURSES } from '../data/courses';
import { 
  GraduationCap, 
  Award, 
  BookOpen, 
  CheckCircle, 
  Clock, 
  Search, 
  Download, 
  QrCode, 
  ShieldCheck, 
  Building2, 
  Users, 
  BarChart3, 
  FileText, 
  PlayCircle, 
  Sparkles,
  ExternalLink,
  ChevronRight,
  TrendingUp
} from 'lucide-react';
import confetti from 'canvas-confetti';

export const StudentPortal: React.FC = () => {
  const { lang, t } = useLanguage();
  const { 
    enrollments, 
    certificates, 
    activeUser, 
    verifyCertificate, 
    updateCourseProgress, 
    claimCertificate 
  } = usePortal();

  const [activeTab, setActiveTab] = useState<'my_courses' | 'certificates' | 'verifier' | 'org_admin'>('my_courses');
  const [certSearchQuery, setCertSearchQuery] = useState<string>('IDEA-2025-AI9821');
  const [searchedCert, setSearchedCert] = useState<any>(certificates[0]);
  const [hasSearched, setHasSearched] = useState<boolean>(true);
  const [selectedCertToView, setSelectedCertToView] = useState<any>(certificates[0]);

  const handleSearchCert = (e: React.FormEvent) => {
    e.preventDefault();
    const result = verifyCertificate(certSearchQuery);
    setSearchedCert(result);
    setHasSearched(true);
  };

  const handleClaim = (enrollmentId: string) => {
    const cert = claimCertificate(enrollmentId);
    if (cert) {
      setSelectedCertToView(cert);
      setActiveTab('certificates');
      confetti({
        particleCount: 90,
        spread: 75,
        origin: { y: 0.5 }
      });
    }
  };

  return (
    <div id="student-portal" className="glass-panel rounded-3xl p-6 lg:p-10 border border-slate-800 shadow-2xl relative overflow-hidden">
      {/* Top Banner with User Greeting & Role Badge */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-800">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-indigo-600 to-cyan-500 flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-indigo-600/30">
            {activeUser.name.slice(0, 1)}
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-xl lg:text-2xl font-bold text-white">
                {activeUser.name}
              </h2>
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                {t('已認證學員 & 企業代表', 'Verified Trainee & Org Admin')}
              </span>
            </div>
            <p className="text-xs text-slate-400">
              {activeUser.organization} • {activeUser.email}
            </p>
          </div>
        </div>

        {/* Tab switchers */}
        <div className="flex flex-wrap gap-1 p-1 bg-slate-950/80 rounded-xl border border-slate-800">
          {[
            { id: 'my_courses', icon: BookOpen, label: t('我的學習課程', 'My Courses') },
            { id: 'certificates', icon: Award, label: t('已獲數碼證書', 'My Certificates') },
            { id: 'verifier', icon: ShieldCheck, label: t('全球證書防偽查驗', 'Certificate Verifier') },
            { id: 'org_admin', icon: Building2, label: t('機構/企業管理儀表板', 'Org LMS Dashboard') }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-medium transition-all ${
                activeTab === tab.id
                  ? 'bg-indigo-600 text-white font-semibold shadow-md shadow-indigo-600/30'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
              }`}
            >
              <tab.icon className="w-3.5 h-3.5" />
              <span>{tab.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* TAB 1: MY COURSES */}
      {activeTab === 'my_courses' && (
        <div className="mt-8 space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-indigo-400" />
              <span>{t('目前修讀中的課程與進度 (Enrolled Courses)', 'Currently Enrolled Courses')}</span>
            </h3>
            <span className="text-xs text-slate-400">
              {t(`共 ${enrollments.length} 門課程`, `${enrollments.length} Total Courses`)}
            </span>
          </div>

          <div className="grid grid-cols-1 gap-4">
            {enrollments.map(enr => {
              const course = COURSES.find(c => c.id === enr.courseId);
              if (!course) return null;

              return (
                <div key={enr.id} className="p-5 rounded-2xl bg-slate-950/70 border border-slate-800/80 hover:border-slate-700 transition-all flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                  {/* Course info */}
                  <div className="space-y-2 max-w-xl">
                    <div className="flex items-center gap-2">
                      <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-indigo-500/20 text-indigo-300">
                        {course.code}
                      </span>
                      <span className="text-xs text-slate-400">
                        {enr.scheduleDate}
                      </span>
                      <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                        {enr.paymentStatus === 'paid' ? t('學費已結清', 'Paid') : t('企業統籌帳單', 'Invoiced')}
                      </span>
                    </div>

                    <h4 className="text-base font-bold text-white">
                      {t(course.title.zh, course.title.en)}
                    </h4>

                    <p className="text-xs text-slate-400 line-clamp-1">
                      {t(course.shortDesc.zh, course.shortDesc.en)}
                    </p>

                    {/* Progress slider / bar */}
                    <div className="pt-2">
                      <div className="flex items-center justify-between text-xs mb-1.5">
                        <span className="text-slate-400 font-medium">{t('學習進度 (Course Progress):', 'Progress:')}</span>
                        <span className="font-mono font-bold text-indigo-400">{enr.progressPercentage}%</span>
                      </div>
                      <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-cyan-500 to-indigo-500 transition-all duration-500"
                          style={{ width: `${enr.progressPercentage}%` }}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Actions & Sandbox launch */}
                  <div className="flex flex-wrap lg:flex-col items-center lg:items-end justify-between gap-2.5 pt-4 lg:pt-0 border-t lg:border-t-0 border-slate-800">
                    <div className="flex items-center gap-2">
                      {enr.progressPercentage < 100 ? (
                        <button
                          onClick={() => updateCourseProgress(enr.id, Math.min(100, enr.progressPercentage + 35))}
                          className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium transition-colors cursor-pointer"
                        >
                          {t('完成下一單元實作 (+35%)', 'Complete Next Lab (+35%)')}
                        </button>
                      ) : (
                        <span className="flex items-center gap-1 text-xs text-emerald-400 font-bold bg-emerald-500/10 px-2.5 py-1 rounded-lg">
                          <CheckCircle className="w-3.5 h-3.5" />
                          {t('已達標結業 (Completed)', 'Completed')}
                        </span>
                      )}
                    </div>

                    {enr.progressPercentage >= 100 ? (
                      enr.certificateId ? (
                        <button
                          onClick={() => {
                            const cert = certificates.find(c => c.certId === enr.certificateId);
                            if (cert) {
                              setSelectedCertToView(cert);
                              setActiveTab('certificates');
                            }
                          }}
                          className="px-4 py-2 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 font-bold text-xs flex items-center gap-1.5 shadow-lg shadow-amber-500/20 cursor-pointer"
                        >
                          <Award className="w-4 h-4" />
                          <span>{t('查看我的數位證書', 'View Certificate')}</span>
                        </button>
                      ) : (
                        <button
                          onClick={() => handleClaim(enr.id)}
                          className="px-4 py-2 rounded-xl bg-gradient-to-r from-emerald-500 to-cyan-500 text-white font-bold text-xs flex items-center gap-1.5 shadow-lg shadow-emerald-500/20 cursor-pointer animate-pulse"
                        >
                          <Sparkles className="w-4 h-4" />
                          <span>{t('領取數碼畢業證書', 'Claim Official Certificate')}</span>
                        </button>
                      )
                    ) : (
                      <a
                        href="#course-sandbox"
                        className="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold flex items-center gap-1.5 transition-colors"
                      >
                        <PlayCircle className="w-4 h-4" />
                        <span>{t('進入 AI 實作雲端沙盒', 'Launch Cloud Lab')}</span>
                      </a>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* TAB 2: CERTIFICATES DISPLAY */}
      {activeTab === 'certificates' && (
        <div className="mt-8 space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <Award className="w-5 h-5 text-amber-400" />
              <span>{t('官方防偽數碼證書中心 (Official Digital Credentials)', 'Official Digital Credentials')}</span>
            </h3>
            <span className="text-xs text-slate-400">{t('支援 LinkedIn 分享與官方驗證', 'Sharable & Verifiable')}</span>
          </div>

          {/* Certificate Card Preview (Luxurious Certificate Template) */}
          {selectedCertToView ? (
            <div className="relative rounded-2xl bg-gradient-to-b from-slate-900 via-slate-950 to-indigo-950 p-8 border-2 border-amber-500/30 shadow-2xl text-center max-w-2xl mx-auto space-y-6">
              {/* Corner Watermarks */}
              <div className="absolute top-4 left-4 text-xs font-mono text-amber-400/60 flex items-center gap-1">
                <ShieldCheck className="w-4 h-4" />
                <span>IDEA AUTHENTIC CERTIFIED</span>
              </div>
              <div className="absolute top-4 right-4 text-xs font-mono text-slate-400">
                {selectedCertToView.certId}
              </div>

              {/* Seal / Emblem */}
              <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-amber-500 to-amber-200 text-slate-950 font-extrabold text-xl flex items-center justify-center mx-auto shadow-lg shadow-amber-500/20 border-2 border-amber-100">
                IDEA
              </div>

              <div>
                <h4 className="text-xs font-mono uppercase tracking-widest text-amber-400/90">
                  ACADEMY OF ARTIFICIAL INTELLIGENCE
                </h4>
                <h3 className="text-2xl font-serif font-bold text-white mt-1">
                  Certificate of Achievement
                </h3>
                <p className="text-xs text-slate-400 mt-1">
                  {t('本證書特此證明下列學員已圓滿修畢專業 AI 培訓課程並通過考核', 'This certifies that the recipient has successfully mastered')}
                </p>
              </div>

              <div className="py-2 border-y border-slate-800/80">
                <div className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-white font-serif">
                  {selectedCertToView.studentName}
                </div>
                {selectedCertToView.organization && (
                  <div className="text-xs text-slate-400 mt-0.5">{selectedCertToView.organization}</div>
                )}
              </div>

              <div className="space-y-1">
                <div className="text-xs text-slate-400">{t('修讀專題與領域：', 'Program of Study:')}</div>
                <div className="text-base font-bold text-white">
                  {typeof selectedCertToView.courseTitle === 'object' 
                    ? t(selectedCertToView.courseTitle.zh, selectedCertToView.courseTitle.en) 
                    : selectedCertToView.courseTitle}
                </div>
                <div className="inline-block px-3 py-0.5 rounded-full text-xs font-bold bg-amber-500/20 text-amber-300 border border-amber-500/30 mt-2">
                  Grade: {selectedCertToView.grade}
                </div>
              </div>

              {/* Verified Skills */}
              <div className="text-left bg-slate-950/80 p-4 rounded-xl border border-slate-800 text-xs space-y-1.5">
                <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block font-semibold">
                  {t('已核驗專業實戰技能 (Verified Skill Competencies):', 'Verified Skill Competencies:')}
                </span>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1 text-slate-300">
                  {selectedCertToView.skillsVerified?.map((sk: string, sidx: number) => (
                    <li key={sidx} className="flex items-center gap-1.5 text-[11px]">
                      <CheckCircle className="w-3 h-3 text-amber-400 shrink-0" />
                      <span>{sk}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Signatures & Hash */}
              <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
                <div className="text-left">
                  <div className="font-serif italic text-sm text-slate-200">{selectedCertToView.instructorSignature}</div>
                  <div className="text-[10px] text-slate-500">{t('核發日期', 'Issue Date')}: {selectedCertToView.issueDate}</div>
                </div>
                <div className="text-right font-mono text-[10px] text-indigo-400">
                  <div>SHA-256 HASH: {selectedCertToView.verificationCode}</div>
                  <div className="text-emerald-400">STATUS: ON-CHAIN VERIFIED ✓</div>
                </div>
              </div>
            </div>
          ) : (
            <div className="text-center py-12 text-slate-400 text-sm">
              {t('您尚未獲取證書，請先在「我的學習課程」中完成課程與專題實作！', 'No certificates claimed yet. Complete your courses to earn certifications!')}
            </div>
          )}
        </div>
      )}

      {/* TAB 3: CERTIFICATE VERIFIER */}
      {activeTab === 'verifier' && (
        <div className="mt-8 max-w-2xl mx-auto space-y-6">
          <div className="text-center space-y-2">
            <ShieldCheck className="w-10 h-10 text-cyan-400 mx-auto" />
            <h3 className="text-xl font-bold text-white">
              {t('全球學員證書防偽查驗系統', 'Global Digital Certificate Verification')}
            </h3>
            <p className="text-xs text-slate-400">
              {t('輸入證書編號（如 IDEA-2025-AI9821）或學員電郵，即時核查 IDEA 官方防偽發證紀錄。', 'Enter Certificate ID (e.g. IDEA-2025-AI9821) or email to verify credentials in real-time.')}
            </p>
          </div>

          {/* Search bar */}
          <form onSubmit={handleSearchCert} className="flex gap-2">
            <input
              type="text"
              value={certSearchQuery}
              onChange={e => setCertSearchQuery(e.target.value)}
              placeholder="IDEA-2025-AI9821"
              className="flex-1 bg-slate-950 border border-slate-700 rounded-xl px-4 py-2.5 text-xs text-white uppercase font-mono focus:outline-none focus:border-cyan-500"
            />
            <button
              type="submit"
              className="px-6 py-2.5 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white text-xs font-bold transition-all shadow-lg shadow-cyan-600/30 flex items-center gap-1.5 cursor-pointer"
            >
              <Search className="w-4 h-4" />
              <span>{t('查驗真偽', 'Verify')}</span>
            </button>
          </form>

          {/* Verification Result */}
          {hasSearched && (
            searchedCert ? (
              <div className="p-6 rounded-2xl bg-slate-950 border border-emerald-500/40 space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                  <span className="flex items-center gap-2 text-emerald-400 text-xs font-bold">
                    <CheckCircle className="w-4 h-4" />
                    {t('官方認證證書（真實有效）', 'Official Valid Credential Found')}
                  </span>
                  <span className="font-mono text-xs text-slate-400">{searchedCert.certId}</span>
                </div>

                <div className="space-y-2 text-xs">
                  <div className="flex justify-between">
                    <span className="text-slate-400">{t('學員姓名', 'Student')}:</span>
                    <span className="text-white font-bold">{searchedCert.studentName}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">{t('所屬機構', 'Organization')}:</span>
                    <span className="text-slate-200">{searchedCert.organization || t('個人進修', 'Independent')}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">{t('認證項目', 'Program')}:</span>
                    <span className="text-indigo-300 font-semibold">
                      {typeof searchedCert.courseTitle === 'object' ? t(searchedCert.courseTitle.zh, searchedCert.courseTitle.en) : searchedCert.courseTitle}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">{t('核發日期', 'Issued')}:</span>
                    <span className="text-slate-200 font-mono">{searchedCert.issueDate}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">{t('考核評級', 'Grade')}:</span>
                    <span className="text-amber-400 font-bold">{searchedCert.grade}</span>
                  </div>
                </div>

                <button
                  onClick={() => {
                    setSelectedCertToView(searchedCert);
                    setActiveTab('certificates');
                  }}
                  className="w-full py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium transition-colors text-center cursor-pointer block"
                >
                  {t('以高解析度預覽此證書全貌', 'Preview Full High-Res Certificate')}
                </button>
              </div>
            ) : (
              <div className="p-6 rounded-2xl bg-rose-950/20 border border-rose-800/40 text-center text-xs text-rose-300 space-y-1">
                <p className="font-bold">{t('未查找到匹配的證書紀錄', 'No Matching Certificate Found')}</p>
                <p className="text-slate-400 text-[11px]">{t('請確認證書編號無誤，或聯絡學院教務處核實。', 'Please verify the ID format or contact registrar support.')}</p>
              </div>
            )
          )}
        </div>
      )}

      {/* TAB 4: ORG & ENTERPRISE ADMIN LMS DASHBOARD */}
      {activeTab === 'org_admin' && (
        <div className="mt-8 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <Building2 className="w-5 h-5 text-indigo-400" />
                <span>{t('企業 / 學校 / 機構 培訓後台管理 (HR & Leader View)', 'Corporate & Institutional Training Dashboard')}</span>
              </h3>
              <p className="text-xs text-slate-400 mt-0.5">
                {t('監控機構全員受訓進度、出席率、課堂考核成績及 ROI 效益指標', 'Monitor employee/student completion, attendance rates, scores, and ROI.')}
              </p>
            </div>
            <span className="text-xs font-mono text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
              Active Cohort: Q1-2026 Batch
            </span>
          </div>

          {/* Metrics row */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800">
              <div className="text-xs text-slate-400">{t('受訓員工 / 學員總數', 'Total Enrolled')}</div>
              <div className="text-2xl font-bold text-white font-mono mt-1">42 {t('人', 'Pax')}</div>
              <div className="text-[11px] text-emerald-400 mt-1 flex items-center gap-1">
                <TrendingUp className="w-3 h-3" />
                <span>+12 {t('人 新加入', 'new this month')}</span>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800">
              <div className="text-xs text-slate-400">{t('總體課程完成率', 'Completion Rate')}</div>
              <div className="text-2xl font-bold text-cyan-400 font-mono mt-1">96.8%</div>
              <div className="text-[11px] text-slate-400 mt-1">{t('高於業界平均 35%', '35% above benchmark')}</div>
            </div>

            <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800">
              <div className="text-xs text-slate-400">{t('已核發認證證書', 'Certificates Issued')}</div>
              <div className="text-2xl font-bold text-amber-400 font-mono mt-1">38 {t('張', 'Certs')}</div>
              <div className="text-[11px] text-slate-400 mt-1">{t('通過率 90.4%', 'Pass Rate 90.4%')}</div>
            </div>

            <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800">
              <div className="text-xs text-slate-400">{t('預估每月工時節省', 'Est. Monthly Hours Saved')}</div>
              <div className="text-2xl font-bold text-emerald-400 font-mono mt-1">1,240 hrs</div>
              <div className="text-[11px] text-slate-400 mt-1">{t('相當於 7.5 位全職員工', 'Eq. to 7.5 FTE')}</div>
            </div>
          </div>

          {/* Roster table */}
          <div className="rounded-xl bg-slate-950/80 border border-slate-800 overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-900/80 text-slate-400 font-mono uppercase text-[11px]">
                <tr>
                  <th className="p-3.5">{t('學員姓名', 'Trainee')}</th>
                  <th className="p-3.5">{t('部門 / 職務', 'Dept / Role')}</th>
                  <th className="p-3.5">{t('培訓專題', 'Course')}</th>
                  <th className="p-3.5">{t('進度', 'Progress')}</th>
                  <th className="p-3.5">{t('考核狀態', 'Status')}</th>
                  <th className="p-3.5">{t('證書編號', 'Cert ID')}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60 text-slate-300">
                {[
                  { name: '陳志豪 (Chan Chi Ho)', dept: '私人銀行部 (Private Banking)', course: '企業級生成式 AI 落地', progress: '100%', status: '優等結業', cert: 'IDEA-2025-AI9821' },
                  { name: '何佩儀 (Ho Pui Yee, Janice)', dept: '風險合規部 (Risk & Compliance)', course: '企業級生成式 AI 落地', progress: '100%', status: '優等結業', cert: 'IDEA-2025-AI9822' },
                  { name: '梁家明 (Leung Ka Ming)', dept: '資訊科技部 (IT & Digital)', course: '專業級深度學習與 PyTorch', progress: '65%', status: '研習中', cert: '進行中' },
                  { name: '周曼玉 (Chow Man Yuk)', dept: '人力資源部 (HR Operations)', course: '企業級生成式 AI 落地', progress: '90%', status: '專題考核中', cert: '待審核' }
                ].map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-900/40 transition-colors">
                    <td className="p-3.5 font-medium text-white">{row.name}</td>
                    <td className="p-3.5 text-slate-400">{row.dept}</td>
                    <td className="p-3.5 text-indigo-300">{row.course}</td>
                    <td className="p-3.5 font-mono text-cyan-400 font-bold">{row.progress}</td>
                    <td className="p-3.5">
                      <span className={`px-2 py-0.5 rounded text-[10px] font-semibold ${
                        row.status === '優等結業' ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30' : 'bg-slate-800 text-slate-300'
                      }`}>
                        {row.status}
                      </span>
                    </td>
                    <td className="p-3.5 font-mono text-slate-400">{row.cert}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};
