export type Language = 'zh' | 'en';

export type CourseCategory = 
  | 'all'
  | 'enterprise'
  | 'university'
  | 'k12'
  | 'kindergarten'
  | 'ngo'
  | 'certification'
  | 'professional_dl';

export type CourseLevel = 'beginner' | 'intermediate' | 'advanced' | 'certification';

export interface SyllabusModule {
  moduleNumber: number;
  title: { zh: string; en: string };
  topics: { zh: string[]; en: string[] };
  handsOnProject: { zh: string; en: string };
  durationHours: number;
}

export interface Course {
  id: string;
  code: string;
  title: { zh: string; en: string };
  badge: { zh: string; en: string };
  shortDesc: { zh: string; en: string };
  fullDesc: { zh: string; en: string };
  category: CourseCategory;
  level: CourseLevel;
  targetAudience: { zh: string; en: string };
  duration: { zh: string; en: string };
  hours: number;
  format: { zh: string; en: string }; // e.g. 實體/線上/混合 (Face-to-face / Live Online / Hybrid)
  classType: 'public' | 'small_group' | 'enterprise_inhouse';
  price: number; // HKD
  earlyBirdPrice?: number;
  certBadge?: string;
  prerequisites: { zh: string; en: string };
  equipmentProvided: { zh: string; en: string };
  keyOutcomes: { zh: string[]; en: string[] };
  syllabus: SyllabusModule[];
  upcomingDates: { id: string; dateStr: string; timeStr: string; mode: string; seatsAvailable: number }[];
  instructors: string[];
  featured?: boolean;
}

export interface EnrollmentFormState {
  courseId: string;
  scheduleId: string;
  studentName: string;
  email: string;
  phone: string;
  organization?: string;
  role?: string;
  numberOfSeats: number;
  paymentMethod: 'fps' | 'credit_card' | 'bank_transfer' | 'invoice_cheque';
  needOfficialInvoice: boolean;
  couponCode?: string;
  remarks?: string;
}

export interface CertificateRecord {
  certId: string;
  studentName: string;
  studentEmail: string;
  organization?: string;
  courseId: string;
  courseTitle: { zh: string; en: string };
  issueDate: string;
  expiryDate?: string;
  grade: 'Distinction' | 'Pass with Merit' | 'Certified Practitioner' | 'Completed';
  skillsVerified: string[];
  instructorSignature: string;
  qrCodeMock: string;
  verificationCode: string;
}

export interface ClientCase {
  id: string;
  clientName: { zh: string; en: string };
  category: 'enterprise' | 'university' | 'k12' | 'kindergarten' | 'ngo';
  badge: { zh: string; en: string };
  headline: { zh: string; en: string };
  description: { zh: string; en: string };
  metrics: { value: string; label: { zh: string; en: string } }[];
  toolsUtilized: string[];
  year: string;
}

export interface QuotationConfig {
  institutionType: 'enterprise' | 'university' | 'secondary' | 'primary' | 'kindergarten' | 'ngo' | 'individual';
  organizationName: string;
  contactPerson: string;
  email: string;
  phone: string;
  trainingMode: 'onsite' | 'online_live' | 'hybrid' | 'campus_lab';
  traineeCount: number;
  targetLevel: 'foundation' | 'practical_applied' | 'cert_exam' | 'deep_learning';
  selectedModules: string[];
  durationDays: number;
  needsCloudGPU: boolean;
  subsidyAssistance: boolean; // e.g. QEF / TVP / Continuing Education Fund
}
