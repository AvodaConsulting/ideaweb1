import { ClientCase } from '../types';

export const CLIENT_CASES: ClientCase[] = [
  {
    id: 'case-hosp-ngo',
    clientName: {
      zh: '全港大型社福慈善總會（旗下 32 間社區中心）',
      en: 'Major Social Service Federation (32 Community Centers)'
    },
    category: 'ngo',
    badge: {
      zh: '社福賦能標竿',
      en: 'NGO Benchmark'
    },
    headline: {
      zh: '為 450+ 位前線註冊社工培訓 AI 個案紀錄與活動企劃自動化',
      en: 'Trained 450+ Frontline Social Workers in AI Case Documentation'
    },
    description: {
      zh: '針對社工日常龐大的個案摘要與進度報告負擔，IDEA 為機構定制安全去識別化個案摘要系統及專屬培訓，社工每月省下超過 28 小時文書工作時間，能將更多心力投入直接個案關懷。',
      en: 'Implemented compliant AI de-identification & documentation workflows. Saved 28+ hours per caseworker monthly, redirecting time back to direct beneficiary care.'
    },
    metrics: [
      { value: '450+', label: { zh: '社工同工受訓', en: 'Caseworkers Trained' } },
      { value: '72%', label: { zh: '文書時間縮減', en: 'Doc Time Reduced' } },
      { value: '99.4%', label: { zh: '個案隱私合規率', en: 'Privacy Compliance' } }
    ],
    toolsUtilized: ['IDEA CaseNotes AI', 'Claude Enterprise RAG', 'Whisper De-ID'],
    year: '2025 - 2026'
  },
  {
    id: 'case-university-hk',
    clientName: {
      zh: '香港頂尖研究型公立大學（工程學院 & 創業中心）',
      en: 'Leading HK Research University (Faculty of Engineering & Incubation)'
    },
    category: 'university',
    badge: {
      zh: '高校科研與專題',
      en: 'Tertiary Innovation'
    },
    headline: {
      zh: '開辦 3 期深度學習與大模型微調實戰研習營，助 28 個科研團隊獲獎',
      en: '3 Cohorts of Deep Learning & LLM Fine-Tuning Bootcamp for 28 Research Teams'
    },
    description: {
      zh: '為碩博研究生及本科科研生提供從 Transformer 底層至高效 LoRA 微調之高強度訓練，80% 學員成功將成果發表於頂級國際期刊，多支學生團隊獲得數碼港創意微型基金（CCMF）資助。',
      en: 'Provided deep hands-on training from GPU memory optimization to multimodal architectures. 80% of cohorts published papers or secured incubation grants.'
    },
    metrics: [
      { value: '380+', label: { zh: '大專師生完成考核', en: 'Students & Faculty' } },
      { value: '14 篇', label: { zh: '國際頂會論文產出', en: 'Top-tier Papers' } },
      { value: 'HK$2.4M', label: { zh: '學生團隊獲創科資助', en: 'Startup Grants Won' } }
    ],
    toolsUtilized: ['PyTorch Distributed', 'vLLM Server', 'NVIDIA A100 GPU Cluster'],
    year: '2024 - 2026'
  },
  {
    id: 'case-k12-group',
    clientName: {
      zh: '大型辦學團體旗下 18 所中小學（STEAM 骨幹教師與資優生）',
      en: 'Leading School Sponsoring Body (18 Primary & Secondary Schools)'
    },
    category: 'k12',
    badge: {
      zh: 'QEF 優質教育全額資助',
      en: 'QEF Funded Program'
    },
    headline: {
      zh: '全港首個校本生成式 AI 創客課程體系，全體學生獲發認證證書',
      en: 'First School-based Generative AI Maker Curriculum with Universal Certification'
    },
    description: {
      zh: '結合教育局 STEAM 指引，IDEA 團隊入校為教師開辦師資培訓，並引導 1,200+ 位學生透過電腦視覺、AI 繪本與 Python 程式自主研發智慧校園專題，於全港學界創科大賽勇奪金獎。',
      en: 'Rolled out teacher training and direct student curriculum for 1,200+ students, winning gold in the Hong Kong Inter-School Science & Tech Expo.'
    },
    metrics: [
      { value: '1,200+', label: { zh: '中小學學生受益', en: 'Students Certified' } },
      { value: '95 位', label: { zh: '骨幹教師取得認證', en: 'Teachers Trained' } },
      { value: '4 座', label: { zh: '學界創科金獎', en: 'In-School Gold Awards' } }
    ],
    toolsUtilized: ['Teachable Machine', 'Python Vision AI', 'IDEA Kids StoryLab'],
    year: '2025'
  },
  {
    id: 'case-kindergarten-music',
    clientName: {
      zh: '著名幼兒教育機構（旗下 8 所幼兒園 & 親子學堂）',
      en: 'Premier Early Childhood Education Network (8 Kindergartens)'
    },
    category: 'kindergarten',
    badge: {
      zh: '幼兒 AI 音樂美育',
      en: 'Early Childhood Music'
    },
    headline: {
      zh: '導入 MelodyCraft AI 兒童音樂創作工具，啟發 600+ 幼兒原創童謠',
      en: 'Deployed MelodyCraft AI Music Creator across 600+ Kindergarteners'
    },
    description: {
      zh: '幼童透過直覺式情緒色彩面板與節奏積木，在無需五線譜的前提下與 AI 協同創作原創音樂作品，家長回饋滿意度達 99.2%，成功舉辦「小小 AI 音樂家線上音樂發布會」。',
      en: 'Empowered children aged 4-6 to generate custom nursery melodies through emotion-driven visual interfaces, concluding with a celebrated Little Maestro Concert.'
    },
    metrics: [
      { value: '600+', label: { zh: '幼兒創作獨立樂曲', en: 'Original Tracks Made' } },
      { value: '99.2%', label: { zh: '家長極高滿意度', en: 'Parent Satisfaction' } },
      { value: '8 所', label: { zh: '幼兒園全面導入', en: 'Preschools Adopted' } }
    ],
    toolsUtilized: ['MelodyCraft AI Studio', 'Web Audio Synth', 'Visual Emotion Canvas'],
    year: '2025 - 2026'
  },
  {
    id: 'case-enterprise-finance',
    clientName: {
      zh: '跨國金融保險集團（香港及大灣區總部）',
      en: 'Multinational Financial & Insurance Conglomerate'
    },
    category: 'enterprise',
    badge: {
      zh: '企業 AI 轉型包班',
      en: 'Corporate Transformation'
    },
    headline: {
      zh: '為 220+ 位理財顧問與核保團隊搭建 RAG 智慧合規核保助手',
      en: 'Engineered Enterprise RAG Underwriting & Advisory Assistant for 220+ Pros'
    },
    description: {
      zh: '以 3 天密集高管研習結合實戰包班，協助集團將逾 10,000 份保險條款與合規政策向量化，顧問查詢條款時間從 45 分鐘驟降至 10 秒，顯著提升簽單率與客戶信賴度。',
      en: 'Digitized and vectorized 10,000+ policy clauses, dropping compliance lookup times from 45 minutes to 10 seconds with enterprise-grade data isolation.'
    },
    metrics: [
      { value: '220+', label: { zh: '金融專業人員結業', en: 'Pros Certified' } },
      { value: '99.8%', label: { zh: '合規精準檢索率', en: 'Retrieval Precision' } },
      { value: '4.8x', label: { zh: '客戶諮詢回應速度', en: 'Response Acceleration' } }
    ],
    toolsUtilized: ['Enterprise Azure OpenAI', 'LlamaIndex RAG', 'Data Privacy Vault'],
    year: '2025'
  }
];

export const CLIENT_LOGOS = [
  { name: '香港科技大學 (HKUST)', category: 'University', code: 'HKUST' },
  { name: '香港理工大學 (PolyU)', category: 'University', code: 'PolyU' },
  { name: '東華三院 (TWGHs)', category: 'Social Welfare', code: 'TWGHs' },
  { name: '保良局 (Po Leung Kuk)', category: 'K-12 & Welfare', code: 'PLK' },
  { name: '香港聖公會福利協會 (SKH)', category: 'Social Welfare', code: 'SKH' },
  { name: '數碼港社群夥伴 (Cyberport)', category: 'Tech Partner', code: 'Cyberport' },
  { name: '微軟教育夥伴 (Microsoft Education)', category: 'Global Partner', code: 'Microsoft' },
  { name: 'NVIDIA 深度學習機構 (DLI)', category: 'Global Partner', code: 'NVIDIA' },
  { name: 'AWS 學院 (AWS Academy)', category: 'Cloud Partner', code: 'AWS' },
  { name: '香港基督教服務處 (HKCS)', category: 'Social Welfare', code: 'HKCS' }
];
