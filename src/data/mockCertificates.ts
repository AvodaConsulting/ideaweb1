import { CertificateRecord } from '../types';

export const INITIAL_CERTIFICATES: CertificateRecord[] = [
  {
    certId: 'IDEA-2025-AI9821',
    studentName: '陳志豪 (Chan Chi Ho)',
    studentEmail: 'chiho.chan@example.hk',
    organization: '香港恒生商業銀行 (Hang Seng Bank)',
    courseId: 'course-enterprise-genai',
    courseTitle: {
      zh: '企業級生成式 AI 落地與全員工作流自動化實戰',
      en: 'Enterprise Generative AI Transformation & Workflow Automation'
    },
    issueDate: '2025-11-28',
    grade: 'Distinction',
    skillsVerified: [
      'Enterprise Prompt Engineering (Chain-of-Thought & Tree-of-Thoughts)',
      'Enterprise RAG Knowledge Architecture & Vector Databases',
      'Autonomous Multi-Agent Workflow Orchestration',
      'Corporate AI Data Governance & Privacy Sandboxing'
    ],
    instructorSignature: 'Dr. Marcus Wong, Academic Dean',
    qrCodeMock: 'https://idea-academy.ai/verify/IDEA-2025-AI9821',
    verificationCode: 'VERIFIED-HASH-8A99B12E'
  },
  {
    certId: 'IDEA-2025-DL4402',
    studentName: '李嘉欣 (Lee Ka Yan, Joyce)',
    studentEmail: 'joyce.lee@hkust.edu.hk',
    organization: '香港科技大學工程學院 (HKUST Engineering)',
    courseId: 'course-deep-learning-pytorch',
    courseTitle: {
      zh: '專業級深度學習、大模型微調與 PyTorch 實戰開發',
      en: 'Professional Deep Learning, LLM Fine-Tuning & PyTorch Mastery'
    },
    issueDate: '2025-12-15',
    grade: 'Pass with Merit',
    skillsVerified: [
      'PyTorch Distributed GPU Computation & CUDA Optimization',
      'Transformer Architecture & FlashAttention Implementation',
      'LoRA/QLoRA Fine-tuning on Open-Weights LLMs',
      'High-Throughput Serving with vLLM & TensorRT'
    ],
    instructorSignature: 'Prof. Alan Tsui, Deep Learning Lab Director',
    qrCodeMock: 'https://idea-academy.ai/verify/IDEA-2025-DL4402',
    verificationCode: 'VERIFIED-HASH-3F77D901'
  },
  {
    certId: 'IDEA-2026-NGO1189',
    studentName: '黃秀媚 (Wong Sau Mei, Amy)',
    studentEmail: 'amy.wong@twghs.org.hk',
    organization: '東華三院社會服務科 (TWGHs Community Service)',
    courseId: 'course-ngo-social-work',
    courseTitle: {
      zh: '社福機構與非牟利組織（NGO）AI 個案管理與行政增效工作坊',
      en: 'AI for NGOs: Case Note Automation & Administrative Empowerment'
    },
    issueDate: '2026-01-20',
    grade: 'Certified Practitioner',
    skillsVerified: [
      'Social Work Clinical Case De-identification & Privacy Compliance',
      'SOAP / DAP Automated Documentation Workflows',
      'Funding Grant Proposal AI Structuring (QEF / Jockey Club)',
      'Community Outreach Multilingual Content Generation'
    ],
    instructorSignature: 'Esther Cheung, RSW & Social Tech Lead',
    qrCodeMock: 'https://idea-academy.ai/verify/IDEA-2026-NGO1189',
    verificationCode: 'VERIFIED-HASH-1C22E407'
  },
  {
    certId: 'IDEA-2026-KID0073',
    studentName: '張子謙 (Cheung Tsz Him, Lucas)',
    studentEmail: 'parent.cheung@gmail.com',
    organization: '維多利亞國際幼稚園 (Victoria Kindergarten)',
    courseId: 'course-early-childhood-music-ai',
    courseTitle: {
      zh: '幼兒園與初小 AI 音樂創作、感官啟蒙與律動探索課程（MelodyCraft AI）',
      en: 'Early Childhood AI Music Creation & MelodyCraft AI Studio'
    },
    issueDate: '2026-02-14',
    grade: 'Distinction',
    skillsVerified: [
      'Emotional Expression into Algorithmic Musical Motifs',
      'Instrumental Timbre Recognition (Piano, Marimba, Strings)',
      'MelodyCraft AI Music Track Composition',
      'Creative Synesthetic Audio-Visual Association'
    ],
    instructorSignature: 'Clara Lam, MelodyCraft AI Inventor',
    qrCodeMock: 'https://idea-academy.ai/verify/IDEA-2026-KID0073',
    verificationCode: 'VERIFIED-HASH-99BB2380'
  }
];
