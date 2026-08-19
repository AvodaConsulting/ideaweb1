import React, { createContext, useContext, useState, useEffect } from 'react';
import { CertificateRecord, Course, EnrollmentFormState } from '../types';
import { COURSES } from '../data/courses';
import { INITIAL_CERTIFICATES } from '../data/mockCertificates';

export interface UserEnrollment {
  id: string;
  courseId: string;
  studentName: string;
  email: string;
  phone: string;
  organization?: string;
  scheduleDate: string;
  amount: number;
  paymentStatus: 'paid' | 'pending_invoice' | 'company_sponsored';
  progressPercentage: number;
  completed: boolean;
  enrolledAt: string;
  certificateId?: string;
}

interface PortalContextType {
  enrollments: UserEnrollment[];
  certificates: CertificateRecord[];
  activeUser: { name: string; email: string; organization: string };
  enrollInCourse: (formData: EnrollmentFormState, course: Course, scheduleDate: string, finalPrice: number) => { enrollmentId: string; certId?: string };
  verifyCertificate: (code: string) => CertificateRecord | undefined;
  updateCourseProgress: (enrollmentId: string, newProgress: number) => void;
  claimCertificate: (enrollmentId: string) => CertificateRecord | undefined;
}

const PortalContext = createContext<PortalContextType | undefined>(undefined);

export const PortalProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [activeUser] = useState({
    name: '陳志豪 (Chan Chi Ho)',
    email: 'chiho.chan@example.hk',
    organization: '香港恒生商業銀行 (Hang Seng Bank)'
  });

  const [enrollments, setEnrollments] = useState<UserEnrollment[]>(() => {
    const saved = localStorage.getItem('idea_portal_enrollments');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        console.error(e);
      }
    }
    // Default mock enrollments for rich demonstration
    return [
      {
        id: 'ENR-2025-001',
        courseId: 'course-enterprise-genai',
        studentName: '陳志豪 (Chan Chi Ho)',
        email: 'chiho.chan@example.hk',
        phone: '+852 9123 4567',
        organization: '香港恒生商業銀行 (Hang Seng Bank)',
        scheduleDate: '2026-09-12 (週六) & 09-19 (週六)',
        amount: 5800,
        paymentStatus: 'paid',
        progressPercentage: 100,
        completed: true,
        enrolledAt: '2025-11-01',
        certificateId: 'IDEA-2025-AI9821'
      },
      {
        id: 'ENR-2026-002',
        courseId: 'course-deep-learning-pytorch',
        studentName: '陳志豪 (Chan Chi Ho)',
        email: 'chiho.chan@example.hk',
        phone: '+852 9123 4567',
        organization: '香港恒生商業銀行 (Hang Seng Bank)',
        scheduleDate: '2026-09-05 起每週二、四晚',
        amount: 8200,
        paymentStatus: 'paid',
        progressPercentage: 65,
        completed: false,
        enrolledAt: '2026-01-10'
      }
    ];
  });

  const [certificates, setCertificates] = useState<CertificateRecord[]>(() => {
    const saved = localStorage.getItem('idea_portal_certificates');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        console.error(e);
      }
    }
    return INITIAL_CERTIFICATES;
  });

  useEffect(() => {
    localStorage.setItem('idea_portal_enrollments', JSON.stringify(enrollments));
  }, [enrollments]);

  useEffect(() => {
    localStorage.setItem('idea_portal_certificates', JSON.stringify(certificates));
  }, [certificates]);

  const enrollInCourse = (
    formData: EnrollmentFormState,
    course: Course,
    scheduleDate: string,
    finalPrice: number
  ) => {
    const enrollmentId = `ENR-${Date.now().toString().slice(-6)}`;
    const newEnrollment: UserEnrollment = {
      id: enrollmentId,
      courseId: course.id,
      studentName: formData.studentName || activeUser.name,
      email: formData.email || activeUser.email,
      phone: formData.phone,
      organization: formData.organization || activeUser.organization,
      scheduleDate: scheduleDate,
      amount: finalPrice,
      paymentStatus: formData.paymentMethod === 'invoice_cheque' ? 'pending_invoice' : 'paid',
      progressPercentage: 0,
      completed: false,
      enrolledAt: new Date().toISOString().split('T')[0]
    };

    setEnrollments(prev => [newEnrollment, ...prev]);
    return { enrollmentId };
  };

  const updateCourseProgress = (enrollmentId: string, newProgress: number) => {
    setEnrollments(prev =>
      prev.map(enr => {
        if (enr.id === enrollmentId) {
          const completed = newProgress >= 100;
          return {
            ...enr,
            progressPercentage: Math.min(100, Math.max(0, newProgress)),
            completed
          };
        }
        return enr;
      })
    );
  };

  const claimCertificate = (enrollmentId: string) => {
    const targetEnr = enrollments.find(e => e.id === enrollmentId);
    if (!targetEnr) return undefined;

    const course = COURSES.find(c => c.id === targetEnr.courseId);
    if (!course) return undefined;

    const newCertId = `IDEA-${new Date().getFullYear()}-AI${Math.floor(1000 + Math.random() * 9000)}`;
    const newCert: CertificateRecord = {
      certId: newCertId,
      studentName: targetEnr.studentName,
      studentEmail: targetEnr.email,
      organization: targetEnr.organization,
      courseId: course.id,
      courseTitle: course.title,
      issueDate: new Date().toISOString().split('T')[0],
      grade: 'Distinction',
      skillsVerified: course.keyOutcomes.en,
      instructorSignature: course.instructors[0] || 'Dr. Marcus Wong, Academic Dean',
      qrCodeMock: `https://idea-academy.ai/verify/${newCertId}`,
      verificationCode: `VERIFIED-${Math.random().toString(36).substring(2, 9).toUpperCase()}`
    };

    setCertificates(prev => [newCert, ...prev]);
    setEnrollments(prev =>
      prev.map(e => (e.id === enrollmentId ? { ...e, certificateId: newCertId, completed: true, progressPercentage: 100 } : e))
    );

    return newCert;
  };

  const verifyCertificate = (query: string): CertificateRecord | undefined => {
    if (!query) return undefined;
    const clean = query.trim().toUpperCase();
    return certificates.find(
      c => c.certId.toUpperCase() === clean || 
           c.verificationCode.toUpperCase() === clean ||
           c.studentEmail.toUpperCase() === clean ||
           c.certId.toUpperCase().includes(clean)
    );
  };

  return (
    <PortalContext.Provider
      value={{
        enrollments,
        certificates,
        activeUser,
        enrollInCourse,
        verifyCertificate,
        updateCourseProgress,
        claimCertificate
      }}
    >
      {children}
    </PortalContext.Provider>
  );
};

export const usePortal = () => {
  const context = useContext(PortalContext);
  if (!context) {
    throw new Error('usePortal must be used within a PortalProvider');
  }
  return context;
};
