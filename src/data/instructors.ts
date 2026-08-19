export interface Instructor {
  id: string;
  name: { zh: string; en: string };
  title: { zh: string; en: string };
  role: { zh: string; en: string };
  bio: { zh: string; en: string };
  credentials: string[];
  avatarInitial: string;
  gradient: string;
}

export const INSTRUCTORS: Instructor[] = [
  {
    id: 'inst-marcus',
    name: { zh: '黃維倫 博士 (Dr. Marcus Wong)', en: 'Dr. Marcus Wong' },
    title: { zh: 'IDEA AI 首席學術院長 / 前微軟資深 AI 架構師', en: 'Dean of Academic Affairs / Ex-Microsoft Senior AI Architect' },
    role: { zh: '大模型微調、企業架構與 AI 戰略', en: 'LLM Fine-Tuning & Enterprise AI Strategy' },
    bio: {
      zh: '畢業於帝國理工學院計算機科學博士，專攻分佈式深度學習與神經語言模型。曾主導亞太區多家 Fortune 500 企業之 AI 轉型，具備超過 12 年頂級實戰與教學經驗。',
      en: 'Ph.D. in Computer Science from Imperial College London. Led AI modernization for Fortune 500 firms across APAC.'
    },
    credentials: ['Microsoft Certified AI Engineer', 'NVIDIA DLI Certified Instructor', 'Google Cloud Certified Professional'],
    avatarInitial: 'MW',
    gradient: 'from-blue-600 to-indigo-600'
  },
  {
    id: 'inst-alan',
    name: { zh: '徐浩然 教授 (Prof. Alan Tsui)', en: 'Prof. Alan Tsui' },
    title: { zh: '大學人工智能客座教授 / 深度學習實驗室主任', en: 'Visiting Professor in AI / Director of Deep Learning Lab' },
    role: { zh: 'PyTorch 核心、Transformer 底層與多模態研究', en: 'PyTorch Internals & Multimodal Research' },
    bio: {
      zh: '在 NeurIPS、CVPR、ICLR 等頂會發表超過 30 篇論文。熱衷於將前沿科研轉化為工程師能直接吸收應用的實戰架構。',
      en: 'Author of 30+ papers in top-tier conferences (NeurIPS/CVPR). Dedicated to bridging academic rigor with production engineering.'
    },
    credentials: ['IEEE Senior Member', 'Kaggle Competition Master', 'PyTorch Contributor'],
    avatarInitial: 'AT',
    gradient: 'from-purple-600 to-pink-600'
  },
  {
    id: 'inst-esther',
    name: { zh: '張詠恩 (Esther Cheung)', en: 'Esther Cheung, RSW' },
    title: { zh: '社福科技轉型總監 / 香港註冊社工', en: 'Social Tech Director / Registered Social Worker' },
    role: { zh: '社福 AI 應用、個案紀錄去識別化與非牟利組織治理', en: 'NGO AI Applications & Clinical Privacy' },
    bio: {
      zh: '資深社會工作督導與科技賦能顧問，曾為全港超過 40 間社福機構設計符合社署私隱指引的 AI 個案及行政自動化方案。',
      en: 'Senior social work supervisor who has guided 40+ NGOs in implementing compliant, privacy-preserving AI case management.'
    },
    credentials: ['Hong Kong Registered Social Worker (RSW)', 'IAPP Certified Information Privacy Professional', 'IDEA Social Impact Lead'],
    avatarInitial: 'EC',
    gradient: 'from-emerald-600 to-teal-600'
  },
  {
    id: 'inst-clara',
    name: { zh: '林樂兒 (Clara Lam)', en: 'Clara Lam, MA' },
    title: { zh: 'MelodyCraft AI 產品總監 / 兒童音樂教育專家', en: 'Product Lead, MelodyCraft AI / Music Ed Specialist' },
    role: { zh: '幼兒音樂啟蒙、AI 聯覺創作與教育科技研發', en: 'Early Childhood Music, Synesthesia & EdTech' },
    bio: {
      zh: '倫敦大學皇家音樂學院教育碩士，曾任多所知名國際幼兒園音樂藝術顧問，主導研發 MelodyCraft 兒童 AI 音樂創作系統。',
      en: 'MA in Music Education from Royal Academy of Music. Pioneered the MelodyCraft AI studio for preschool and primary students.'
    },
    credentials: ['MA Music Education (London)', 'MelodyCraft Lead Inventor', 'Kodály & Orff Certified Specialist'],
    avatarInitial: 'CL',
    gradient: 'from-amber-500 to-rose-500'
  }
];
