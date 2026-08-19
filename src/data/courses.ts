import { Course } from '../types';

export const COURSES: Course[] = [
  {
    id: 'course-enterprise-genai',
    code: 'IDEA-ENT-501',
    title: {
      zh: '企業級生成式 AI 落地與全員工作流自動化實戰',
      en: 'Enterprise Generative AI Transformation & Workflow Automation Masterclass'
    },
    badge: {
      zh: '企業熱門包班',
      en: 'Enterprise Bestseller'
    },
    shortDesc: {
      zh: '專為企業管理層、營運、行銷及IT團隊設計，結合私有化 LLM、RAG 知識庫與自動化 Agent 實作，提升 300%+ 業務效率。',
      en: 'Tailored for corporate leaders, operations, marketing & IT. Covers private LLMs, RAG knowledge bases, and custom AI Agents for 300%+ operational uplift.'
    },
    fullDesc: {
      zh: '本課程專為希望將 AI 真正融入商業流程的企業打造。不講空洞理論，直接手把手教授企業級 Prompt Engineering、自建內部知識庫（RAG 架構）、多智能體協同（AI Agents）以及如何確保企業數據私隱與合規性。學員將於課堂內完成所屬部門的專屬 AI 自動化工作流原型。',
      en: 'Built specifically for businesses aiming to embed AI into real operational workflows. Hands-on training on enterprise prompt engineering, RAG proprietary knowledge bases, multi-agent workflows, data privacy, and governance.'
    },
    category: 'enterprise',
    level: 'intermediate',
    targetAudience: {
      zh: '企業高管、部門主管、商業分析師、營運人員、HR及數位轉型推動者',
      en: 'C-Suite Executives, Department Heads, Business Analysts, Operations, HR & Digital Transformation Leaders'
    },
    duration: {
      zh: '共 16 小時（分 2 全天或 4 半天密集研習）',
      en: '16 Hours (2 Full Days or 4 Intensive Evening Sessions)'
    },
    hours: 16,
    format: {
      zh: '企業上門包班 / 數碼港實體教室 / 互動線上直播',
      en: 'On-site In-house / Tech Campus / Interactive Live Online'
    },
    classType: 'enterprise_inhouse',
    price: 6800,
    earlyBirdPrice: 5800,
    certBadge: 'IDEA Certified Enterprise AI Practitioner (CEAP)',
    prerequisites: {
      zh: '無程式設計背景要求，具備基本商業辦公軟體操作能力即可',
      en: 'No programming background required; basic office software proficiency.'
    },
    equipmentProvided: {
      zh: '提供雲端企業級 AI 沙盒環境與高階 API Token 額度',
      en: 'Full Cloud Enterprise AI Sandbox + High-tier API credits provided'
    },
    keyOutcomes: {
      zh: [
        '掌握企業級 Prompt 架構與進階 Reasoning 技巧',
        '親手搭建企業內部專屬 RAG 文件智能檢索系統',
        '設計無程式碼/低程式碼 AI 自動化 Agent 連接 CRM/ERP',
        '建立企業內部 AI 安全使用指引與資料合規框架'
      ],
      en: [
        'Master enterprise prompt architecture and chain-of-thought reasoning',
        'Build a proprietary corporate RAG document intelligence system',
        'Design no-code/low-code AI automation agents connected to CRM/ERP',
        'Establish enterprise AI security policies and data compliance frameworks'
      ]
    },
    syllabus: [
      {
        moduleNumber: 1,
        title: {
          zh: '單元一：企業 AI 戰略升級與提示詞架構工程',
          en: 'Module 1: Enterprise AI Strategy & Advanced Prompt Architecture'
        },
        topics: {
          zh: ['現代生成式 AI 演進與主流模型選型（Claude 3.7 / GPT-4o / Gemini 2.0 / DeepSeek）', '結構化 Prompt 設計模式（Role-Task-Context-Constraint-Format）', 'Few-shot Learning 與輸出一致性校準技巧'],
          en: ['Model benchmarking and selection', 'Structured prompt engineering frameworks', 'Few-shot calibration for consistent output']
        },
        handsOnProject: {
          zh: '實作：為公司構建標準化跨部門 Prompt 知識庫與工作流範本',
          en: 'Hands-on: Build a cross-department standardized prompt repository'
        },
        durationHours: 4
      },
      {
        moduleNumber: 2,
        title: {
          zh: '單元二：私有知識庫與企業級 RAG 檢索增強實戰',
          en: 'Module 2: Private Knowledge Bases & Enterprise RAG Implementation'
        },
        topics: {
          zh: ['企業非結構化文檔（PDF、Word、Notion）向量化與索引原理', 'Embedding 向量資料庫選型與語義檢索優化', '避免幻覺（Hallucination）的引用溯源機制'],
          en: ['Document vectorization and embedding pipelines', 'Vector database architecture & hybrid search', 'Hallucination mitigation and citation verification']
        },
        handsOnProject: {
          zh: '實作：上傳公司規章與產品手冊，即時建立 24/7 內部智慧問答助手',
          en: 'Hands-on: Deploy an internal 24/7 intelligent QA assistant on custom docs'
        },
        durationHours: 4
      },
      {
        moduleNumber: 3,
        title: {
          zh: '單元三：自主 AI 智能體（Agentic Workflows）與工具調用',
          en: 'Module 3: Autonomous AI Agents & API Function Calling'
        },
        topics: {
          zh: ['ReAct 智能體架構：思考（Thought）- 行動（Action）- 觀察（Observation）', '連接外部工具：網頁爬蟲、Email 發送、Google Sheets / Excel 數據庫', '多智能體（Multi-Agent）協同運作流程'],
          en: ['ReAct reasoning loops and decision trees', 'External tool integration (Email, Sheets, Web scrapers)', 'Multi-agent orchestration workflows']
        },
        handsOnProject: {
          zh: '實作：建立全自動化市場競品情報收集與報告生成 Agent',
          en: 'Hands-on: Build an automated market competitor intelligence agent'
        },
        durationHours: 4
      },
      {
        moduleNumber: 4,
        title: {
          zh: '單元四：企業級部署安全、成本管控與成果匯報',
          en: 'Module 4: Security, Cost Control, Governance & Final Showcase'
        },
        topics: {
          zh: ['企業數據防洩漏（Data Leakage Prevention）與隱私過濾器', 'Token 消耗監控與成本優化策略', '團隊專題成果演示與考核答辯'],
          en: ['Data loss prevention and PII sanitization', 'Token consumption monitoring & cost optimization', 'Capstone presentations and assessment']
        },
        handsOnProject: {
          zh: '專題發表：各組發表為所屬業務場景開發之 AI 解決方案',
          en: 'Capstone: Group showcase of custom business AI workflow'
        },
        durationHours: 4
      }
    ],
    upcomingDates: [
      { id: 'batch-ent-1', dateStr: '2026-09-12 (週六) & 09-19 (週六)', timeStr: '09:30 - 18:00', mode: '實體 (九龍塘創新中心) / 線上同步', seatsAvailable: 6 },
      { id: 'batch-ent-2', dateStr: '2026-10-08 (週四晚) 起每週兩晚', timeStr: '19:00 - 22:00', mode: '互動線上直播', seatsAvailable: 12 },
      { id: 'batch-ent-corp', dateStr: '可自訂企業專屬培訓日期', timeStr: '彈性協調', mode: '企業上門包班', seatsAvailable: 30 }
    ],
    instructors: ['Dr. Marcus Wong (前微軟 AI 架構師)', 'Kevin Chan (IDEA 首席 AI 諮詢顧問)'],
    featured: true
  },
  {
    id: 'course-deep-learning-pytorch',
    code: 'IDEA-PRO-801',
    title: {
      zh: '專業級深度學習、大模型微調與 PyTorch 實戰開發',
      en: 'Professional Deep Learning, LLM Fine-Tuning & PyTorch Mastery'
    },
    badge: {
      zh: '專業工程師首選',
      en: 'Advanced Engineering'
    },
    shortDesc: {
      zh: '從神經網絡底層數學到 Transformer、LoRA 微調、vLLM 推理加速與多模態模型開發，培養具備實戰能力的 AI 研發工程師。',
      en: 'From foundational neural math to Transformers, LoRA parameter-efficient fine-tuning, vLLM inference and multimodal vision-language architectures.'
    },
    fullDesc: {
      zh: '專為軟體工程師、資料科學家及大專院校 AI 研發者設計的高階深度學習進修課程。涵蓋 PyTorch 分散式訓練、Transformer 架構剖析、開源大模型（Llama 3 / DeepSeek / Mistral）的 LoRA / QLoRA 領域專用微調，以及量化推理加速部署（TensorRT-LLM, vLLM, Ollama）。',
      en: 'Designed for software engineers, data scientists, and university researchers. Covers PyTorch distributed training, Transformer architecture decomposition, LoRA/QLoRA domain fine-tuning on open-weights LLMs, and high-throughput inference deployment.'
    },
    category: 'professional_dl',
    level: 'advanced',
    targetAudience: {
      zh: '軟體開發者、資料科學家、大學電腦系學生、AI 研究人員及演算法工程師',
      en: 'Software Developers, Data Scientists, CS Undergrads/Grads, AI Researchers & Algorithm Engineers'
    },
    duration: {
      zh: '共 30 小時（10 節課，每節 3 小時）',
      en: '30 Hours (10 Sessions x 3 Hours)'
    },
    hours: 30,
    format: {
      zh: '實體 GPU 實驗室 / 線上雲端 Coding 沙盒',
      en: 'In-person GPU Lab / Cloud Interactive Coding Sandbox'
    },
    classType: 'public',
    price: 9800,
    earlyBirdPrice: 8200,
    certBadge: 'IDEA Certified Deep Learning Specialist (CDLS)',
    prerequisites: {
      zh: '需具備基礎 Python 語法基礎及微積分/線性代數基本概念',
      en: 'Proficiency in Python syntax and foundational linear algebra/calculus.'
    },
    equipmentProvided: {
      zh: '每位學員配置專屬 NVIDIA A100 / L40S 雲端 GPU 實例',
      en: 'Dedicated NVIDIA A100 / L40S Cloud GPU instance per student'
    },
    keyOutcomes: {
      zh: [
        '深入理解 Transformer Self-Attention 機制與梯度反向傳播底層',
        '掌握 Hugging Face 生態與 PyTorch 深度神經網路客製化訓練',
        '獨立完成開源 8B/14B 大模型之 LoRA / DPO 領域對齊微調',
        '運用 TensorRT / vLLM 構建高吞吐量、低延遲 API 服務'
      ],
      en: [
        'Deep understanding of Transformer self-attention and gradient propagation',
        'Master PyTorch & Hugging Face ecosystem for custom training loops',
        'Independently execute LoRA / DPO domain alignment on 8B/14B models',
        'Deploy production-ready high-throughput inference endpoints via vLLM'
      ]
    },
    syllabus: [
      {
        moduleNumber: 1,
        title: {
          zh: '單元一：PyTorch 核心機制與張量運算加速',
          en: 'Module 1: PyTorch Core Internals & Tensor Acceleration'
        },
        topics: {
          zh: ['Autograd 動態計算圖與 GPU 記憶體優化', '自定義 Dataset、DataLoader 與分散式平行採樣', '自建 ResNet 與多層感知機（MLP）分類器'],
          en: ['Autograd computation graph & CUDA memory management', 'Custom Datasets, DataLoaders, and distributed samplers', 'Building CNNs and MLPs from scratch']
        },
        handsOnProject: {
          zh: '實作：用 PyTorch 訓練高精度工業瑕疵影像識別模型',
          en: 'Hands-on: Train high-precision visual defect classifier'
        },
        durationHours: 6
      },
      {
        moduleNumber: 2,
        title: {
          zh: '單元二：Transformer 架構剖析與 Attention 機制實作',
          en: 'Module 2: Transformer Anatomy & Attention Implementation'
        },
        topics: {
          zh: ['Scaled Dot-Product Attention 與 Multi-Head Attention 手寫實作', 'Positional Encoding（RoPE 旋轉位置編碼與 ALiBi）', 'KV Cache 機制與生成解碼優化原理'],
          en: ['Hand-coding Scaled Dot-Product & Multi-Head Attention', 'Rotary Positional Embeddings (RoPE) & ALiBi', 'KV Cache mechanism and autoregressive decoding']
        },
        handsOnProject: {
          zh: '實作：從零刻劃 mini-GPT 模型並訓練中文文本生成',
          en: 'Hands-on: Code a mini-GPT model from scratch'
        },
        durationHours: 8
      },
      {
        moduleNumber: 3,
        title: {
          zh: '單元三：大語言模型參數高效微調（PEFT / LoRA / QLoRA）',
          en: 'Module 3: Parameter-Efficient Fine-Tuning (PEFT / LoRA / QLoRA)'
        },
        topics: {
          zh: ['LoRA 低秩分解矩陣數學本質與參數凍結', '4-bit / 8-bit 量化技術（BitsAndBytes 與 AWQ）', 'SFT 監督微調數據集清洗與 DPO 人類偏好對齊'],
          en: ['LoRA low-rank mathematical theory', '4-bit/8-bit quantization with BitsAndBytes & AWQ', 'Supervised Fine-Tuning dataset curation & DPO alignment']
        },
        handsOnProject: {
          zh: '實作：在 GPU 上微調開源模型以精通繁體中文香港法律/醫療術語',
          en: 'Hands-on: Fine-tune an LLM on Hong Kong legal/medical corpora'
        },
        durationHours: 8
      },
      {
        moduleNumber: 4,
        title: {
          zh: '單元四：生產環境量化、vLLM 推理加速與 API 部署',
          en: 'Module 4: Model Quantization, vLLM High-Performance Serving'
        },
        topics: {
          zh: ['PagedAttention 與連續批處理（Continuous Batching）', 'OpenAI 相容的高並發 API Server 架構搭建', 'Docker 容器化與 Kubernetes 部署實務'],
          en: ['PagedAttention & continuous batching with vLLM', 'Building OpenAI-compatible high-concurrency endpoints', 'Containerization and Kubernetes scaling']
        },
        handsOnProject: {
          zh: '實作：發布自己微調的專屬大模型為百人並發 API 服務',
          en: 'Hands-on: Deploy custom fine-tuned model for concurrent API traffic'
        },
        durationHours: 8
      }
    ],
    upcomingDates: [
      { id: 'batch-dl-1', dateStr: '2026-09-05 起每週二、四晚', timeStr: '19:30 - 22:30', mode: '實體 GPU 教室 + 線上沙盒', seatsAvailable: 4 },
      { id: 'batch-dl-2', dateStr: '2026-10-17 起每週六下午', timeStr: '14:00 - 20:00', mode: '實體 / 線上同步', seatsAvailable: 9 }
    ],
    instructors: ['Prof. Alan Tsui (香港知名大學 AI 研究中心主任)', 'Dr. Edison Zhang (前科技巨頭算法科學家)'],
    featured: true
  },
  {
    id: 'course-global-cert-prep',
    code: 'IDEA-CERT-300',
    title: {
      zh: '國際主流 AI 專業認證考試預備班（Microsoft / Google Cloud / AWS）',
      en: 'Global Professional AI Certification Bootcamp (Microsoft AI-900/102 & AWS/GCP)'
    },
    badge: {
      zh: '官方考證 99% 通過率',
      en: '99% Exam Pass Rate'
    },
    shortDesc: {
      zh: '專為欲獲取微軟 Azure AI、Google Cloud GenAI 及 AWS Machine Learning 官方證書者打造，包含全真模擬題庫與名師拆解。',
      en: 'Comprehensive exam preparation for Microsoft Azure AI Fundamentals/Engineer, Google Cloud GenAI & AWS ML certifications with full mock exams.'
    },
    fullDesc: {
      zh: '為有意取得國際認可雲端與 AI 認證的專業人士、學生及在職進修者設計。課程系統化覆蓋 Microsoft Azure AI Engineer Associate (AI-102)、AI Fundamentals (AI-900)、AWS Certified AI Practitioner 及 Google Cloud Associate Cloud Engineer 之考綱，配合獨家研發之 AI 智能刷題系統與一對一答疑，歷屆考試合格率達 99.2%。',
      en: 'Structured exam accelerator for Microsoft Azure AI-102/AI-900, AWS Certified AI Practitioner, and Google Cloud GenAI exams. Includes smart mock exam sandbox, scenario questions analysis, and official exam vouchers.'
    },
    category: 'certification',
    level: 'certification',
    targetAudience: {
      zh: 'IT 技術人員、雲端工程師、大學生、欲轉職 AI 領域之在職人士',
      en: 'IT Professionals, Cloud Engineers, University Students, Career Changers to AI'
    },
    duration: {
      zh: '共 18 小時（6 節課，每節 3 小時 + 無限次線上模擬測驗）',
      en: '18 Hours (6 Sessions x 3 Hours + Unlimited AI Mock Exam Access)'
    },
    hours: 18,
    format: {
      zh: '線上直播 + 錄影永久回放 + 智能刷題系統',
      en: 'Interactive Live + Lifetime Replays + Smart Exam Simulator'
    },
    classType: 'public',
    price: 4980,
    earlyBirdPrice: 4200,
    certBadge: 'Microsoft & AWS Exam Ready + IDEA Honors Certificate',
    prerequisites: {
      zh: '具備基本電腦概念與雲端基礎知識者佳',
      en: 'Basic IT and cloud computing familiarity recommended.'
    },
    equipmentProvided: {
      zh: '附贈官方認證模擬題庫題解、雲端實驗環境點數及考試報名折價券',
      en: 'Official exam mock test bank + Cloud lab credits + Exam voucher assistance'
    },
    keyOutcomes: {
      zh: [
        '全方位掌握微軟 Azure AI 服務（Cognitive Services, OpenAI, Vision）',
        '精熟 AWS Bedrock, SageMaker 及 Google Vertex AI 架構考點',
        '透過 500+ 道高頻情境考題解析，快速鎖定題眼破題',
        '順利考取具國際認受性之專業 AI 證書，提升求職競爭力'
      ],
      en: [
        'Master Azure AI Services (Cognitive, Azure OpenAI, Custom Vision)',
        'Understand AWS Bedrock, SageMaker & Google Vertex AI architectures',
        'Analyze 500+ scenario exam questions to guarantee first-time pass',
        'Obtain globally recognized industry AI credentials for career growth'
      ]
    },
    syllabus: [
      {
        moduleNumber: 1,
        title: {
          zh: '單元一：雲端 AI 核心架構與計算視覺/語音服務考點',
          en: 'Module 1: Cloud AI Architecture & Cognitive Services'
        },
        topics: {
          zh: ['Azure AI Services 與 AWS Rekognition/Transcribe 核心對比', '計算機視覺（OCR, 臉部辨識, 影像分類）API 調用實例', '語音識別、文字轉語音（TTS）與自訂神經語音考綱解析'],
          en: ['Azure vs AWS cognitive service comparison', 'Computer vision APIs (OCR, spatial analysis)', 'Speech recognition and neural TTS']
        },
        handsOnProject: {
          zh: '實作：完成官方 Cloud Lab 多模態認知服務實戰配置',
          en: 'Hands-on: Complete official multi-modal cognitive lab exercises'
        },
        durationHours: 6
      },
      {
        moduleNumber: 2,
        title: {
          zh: '單元二：自然語言處理、Azure OpenAI 與知識探勘',
          en: 'Module 2: NLP, Azure OpenAI & Knowledge Mining'
        },
        topics: {
          zh: ['Language Studio 自訂實體辨識（NER）與情緒分析', 'Azure OpenAI 服務配額管理、內容過濾（Content Safety）與安全', 'Azure AI Search（前稱 Cognitive Search）向量索引整合'],
          en: ['Custom NER and sentiment analysis in Language Studio', 'Azure OpenAI content safety & enterprise deployment', 'Azure AI Search hybrid vector indexing']
        },
        handsOnProject: {
          zh: '實作：部署 Azure AI Search 與 OpenAI 聯動之合規問答系統',
          en: 'Hands-on: Deploy secure Azure AI Search + OpenAI endpoint'
        },
        durationHours: 6
      },
      {
        moduleNumber: 3,
        title: {
          zh: '單元三：真題衝刺、情境題拆解與實戰全真模擬考',
          en: 'Module 3: Mock Exam Sprint, Scenario Deconstruction & Review'
        },
        topics: {
          zh: ['歷屆真實考題深度複盤（Case Study 題型快速解題公式）', 'AI 倫理、負責任 AI 準則與常見陷阱題排查', '即時線上模擬考與一對一錯題弱點診斷'],
          en: ['In-depth review of actual past scenario questions', 'Responsible AI principles and common exam traps', 'Timed AI mock exam with personalized weakness diagnostics']
        },
        handsOnProject: {
          zh: '考核：完成全真限時模擬考（需達 850/1000 分以上）',
          en: 'Assessment: Complete timed full mock exam (850/1000 target)'
        },
        durationHours: 6
      }
    ],
    upcomingDates: [
      { id: 'batch-cert-1', dateStr: '2026-09-08 起每週二、五晚', timeStr: '19:30 - 22:30', mode: '互動線上直播 + 刷題系統', seatsAvailable: 15 },
      { id: 'batch-cert-2', dateStr: '2026-10-11 (週日全天班)', timeStr: '10:00 - 18:00', mode: '實體 (尖沙咀培訓中心) / 線上', seatsAvailable: 8 }
    ],
    instructors: ['Vincent Lau (微軟 MVP & 官方認證講師 MCT)', 'Sarah Ng (AWS 授權講師)'],
    featured: false
  },
  {
    id: 'course-ngo-social-work',
    code: 'IDEA-NGO-201',
    title: {
      zh: '社福機構與非牟利組織（NGO）AI 個案管理與行政增效工作坊',
      en: 'AI for NGOs & Social Welfare: Case Note Automation & Administrative Empowerment'
    },
    badge: {
      zh: '社福專屬資助適用',
      en: 'Social Welfare Special'
    },
    shortDesc: {
      zh: '專為社工、非牟利團體同工及社福行政人員設計，運用 AI 快速生成標準個案紀錄、活動企劃與籌款倡議文案，保障隱私。',
      en: 'Tailored for social workers and NGO personnel. Automates case summaries, event proposals, and fundraising campaigns while ensuring strict client confidentiality.'
    },
    fullDesc: {
      zh: '社福前線社工與行政同工常面臨繁重個案紀錄、評估報告與活動籌劃壓力。本工作坊針對香港社福機構日常運作，教授如何使用安全合規的 AI 工具將冗長的個案晤談錄音/筆記轉化為專業結構化紀錄（SOAP / DAP 格式），並自動化產出活動宣傳圖文、資助申請書（QEF / 賽馬會慈善信託基金企劃）等。',
      en: 'Addresses high administrative workload for social workers. Covers compliant AI workflows for converting case interviews into SOAP/DAP clinical records, generating funding proposals (Jockey Club / QEF / SWD grants), and producing outreach materials.'
    },
    category: 'ngo',
    level: 'beginner',
    targetAudience: {
      zh: '註冊社工、社福機構主管、NGO 行政人員、社區幹事及輔導員',
      en: 'Registered Social Workers, NGO Directors, Administrative Officers, Community Workers & Counselors'
    },
    duration: {
      zh: '共 8 小時（2 個半天或 1 全天密集實操）',
      en: '8 Hours (1 Full Day or 2 Half-day Workshops)'
    },
    hours: 8,
    format: {
      zh: '社福機構機構包班 / 實體互動研討會 / Zoom 實時工作坊',
      en: 'NGO In-house / Interactive Seminar / Live Zoom Workshop'
    },
    classType: 'small_group',
    price: 2680,
    earlyBirdPrice: 2280,
    certBadge: 'IDEA Social Impact AI Certified Practitioner',
    prerequisites: {
      zh: '無任何技術背景要求，具備基本中文打字與網絡操作能力即可',
      en: 'No technical background required. Basic computer literacy.'
    },
    equipmentProvided: {
      zh: '提供社福專屬 Prompt 工具包與合規去識別化軟體範本',
      en: 'Social work prompt templates + PII de-identification sandbox provided'
    },
    keyOutcomes: {
      zh: [
        '個案晤談紀錄撰寫時間縮減 70%（符合社會福利署規範格式）',
        '掌握長者/青少年/家庭服務活動企劃書 AI 一鍵產出技巧',
        '學會個人私隱資料去識別化（De-identification）合規安全流程',
        '運用 AI 設計生動的社區宣傳海報、社媒貼文與短片腳本'
      ],
      en: [
        'Reduce case documentation time by 70% following standard clinical formats',
        'One-click generation of community service event proposals and activity plans',
        'Master privacy-compliant de-identification workflows for client confidentiality',
        'Create community outreach posters, social posts, and video scripts with AI'
      ]
    },
    syllabus: [
      {
        moduleNumber: 1,
        title: {
          zh: '單元一：社福個案紀錄 AI 化與個人資料私隱防護',
          en: 'Module 1: Case Documentation & Client Privacy Protection'
        },
        topics: {
          zh: ['個案資料去識別化（消隱姓名、身份證、地址等敏感欄位）', 'SOAP / DAP 臨床個案紀錄自動結構化 Prompt 精準調校', '錄音檔即時轉逐字稿並提煉核心問題與介入行動清單'],
          en: ['PII de-identification and data protection', 'Structured SOAP/DAP clinical prompt crafting', 'Audio interview transcription and action item extraction']
        },
        handsOnProject: {
          zh: '實作：將一段模擬個案晤談文字在 2 分鐘內整理為標準社福進度報告',
          en: 'Hands-on: Transform simulated client interview into standard progress report'
        },
        durationHours: 4
      },
      {
        moduleNumber: 2,
        title: {
          zh: '單元二：活動企劃、基金申請書與社區宣傳全自動化',
          en: 'Module 2: Grant Proposals, Event Planning & Community Outreach'
        },
        topics: {
          zh: ['慈善基金/政府資助申請書架構生成（目標、成效指標、預算表）', '生成式視覺工具（Midjourney/Canva AI）快速製作長幼友善宣傳海報', '多語言（中/英/少數族裔語言）社區服務資訊一鍵翻譯轉換'],
          en: ['Funding grant proposal formulation (Objectives, KPIs, Budgets)', 'Generative visual design for community-friendly event posters', 'Multilingual translation for ethnic minority community outreach']
        },
        handsOnProject: {
          zh: '實作：為機構即將舉辦的社區關懷日產出全套宣傳品與企劃書',
          en: 'Hands-on: Generate complete campaign package for a community event'
        },
        durationHours: 4
      }
    ],
    upcomingDates: [
      { id: 'batch-ngo-1', dateStr: '2026-09-16 (週三全天)', timeStr: '09:30 - 17:30', mode: '實體 (灣仔社聯溫馨教室) / 線上', seatsAvailable: 10 },
      { id: 'batch-ngo-2', dateStr: '2026-10-24 (週六全天)', timeStr: '09:30 - 17:30', mode: '實體 / 線上同步', seatsAvailable: 14 }
    ],
    instructors: ['Esther Cheung (前資深社工督導 & AI 應用專員)', 'Tommy Ho (IDEA NGO 專案總監)'],
    featured: true
  },
  {
    id: 'course-k12-stem-genai',
    code: 'IDEA-EDU-102',
    title: {
      zh: '中小學生成式 AI 創意思維、視覺科技與 Python 智慧專題課程',
      en: 'K-12 Generative AI Innovation, Creative Coding & Computer Vision for Schools'
    },
    badge: {
      zh: 'QEF 優質教育基金適用',
      en: 'K-12 School Proven'
    },
    shortDesc: {
      zh: '為中小學教師與學生量身定制，結合 AI 圖像生成、語音合成與簡易 Python/Scratch AI 擴展，激發學生計算思維與跨學科創新。',
      en: 'Customized for primary and secondary schools. Combines AI visual arts, speech synthesis, and block-based/Python coding for STEAM curriculum.'
    },
    fullDesc: {
      zh: '已在全港數十所中學及小學成功推行。本課程符合教育局 STEAM 課程指引，引導學生從消費者轉化為「AI 創造者」。內容涵蓋生成式圖像創作、AI 故事繪本製作、Teachable Machine 機器學習圖像/姿勢分類，以及中學階段的 Python 人臉識別與智慧小車專題，並注重培養 AI 倫理與素養。',
      en: 'Implemented in dozens of secondary and primary schools across HK. Aligns with EDB STEAM curriculum guidelines, transforming students into AI creators through storybook generation, Teachable Machine vision models, and Python AI projects.'
    },
    category: 'k12',
    level: 'beginner',
    targetAudience: {
      zh: '中小學資訊科技/STEAM 教師、中小學生（小四至中六）、學校課後創客小組',
      en: 'Primary & Secondary STEAM Teachers, Students (P4-S6), School Coding Clubs'
    },
    duration: {
      zh: '共 12 小時（可分 6 次課堂或學校暑期/創客營）',
      en: '12 Hours (6 Sessions x 2 Hours or 2-Day School Maker Camp)'
    },
    hours: 12,
    format: {
      zh: '學校到校授課 / 校內電腦室工作坊 / 創科展演',
      en: 'School In-Campus Teaching / Computer Lab Workshops'
    },
    classType: 'small_group',
    price: 3200,
    earlyBirdPrice: 2800,
    certBadge: 'IDEA Junior AI Creator & Innovator Certificate',
    prerequisites: {
      zh: '對科技與創意有興趣即可，中學組建議有基礎電腦操作知識',
      en: 'Curiosity in creative tech; basic computer operation.'
    },
    equipmentProvided: {
      zh: '提供專屬學童安全 AI 創作平台帳號與實體 AI 視覺套件',
      en: 'Child-safe AI sandbox accounts + Vision AI hardware kits provided'
    },
    keyOutcomes: {
      zh: [
        '學會使用 AI 協同創作一本有聲數位繪本（結合圖像、文字與配音）',
        '訓練自己的第一個 AI 視覺識別模型（手勢/物體分類）',
        '建立健康的 AI 素養觀念（識別 Deepfake 假新聞、版權與倫理）',
        '具備參加學界 STEAM / AI 創新科技大賽的專案作品'
      ],
      en: [
        'Co-create an interactive digital audiobook with AI images and voice',
        'Train custom vision classification models (gesture & object detection)',
        'Develop critical AI literacy (Deepfake detection, ethics, copyright)',
        'Complete a capstone project ready for inter-school STEAM competitions'
      ]
    },
    syllabus: [
      {
        moduleNumber: 1,
        title: {
          zh: '單元一：探索 AI 的魔法世界與視覺藝術創作',
          en: 'Module 1: Exploring AI Magic & Generative Visual Art'
        },
        topics: {
          zh: ['AI 是如何「看」和「畫」的？擴散模型（Diffusion）趣味解密', '安全兒童友善 Prompt 關鍵字魔法（風格、光影、視角、角色設定）', '創作屬於自己的原創漫畫角色與世界觀設定'],
          en: ['How AI sees and creates images', 'Child-safe prompt crafting (styles, lighting, characters)', 'Designing original comic characters and storytelling']
        },
        handsOnProject: {
          zh: '實作：為自己的故事主角生成一系列生動的表情與場景圖',
          en: 'Hands-on: Generate a multi-scene comic strip series'
        },
        durationHours: 4
      },
      {
        moduleNumber: 2,
        title: {
          zh: '單元二：動手訓練機器大腦（Teachable Machine 與視覺識別）',
          en: 'Module 2: Training a Machine Brain (Teachable Machine & Vision)'
        },
        topics: {
          zh: ['資料收集、標記與模型訓練體驗（鏡頭捕捉表情與姿勢）', '過擬合（Overfitting）與資料偏差的有趣實驗', '將訓練好的 AI 模型導入 Scratch / Python 製作互動遊戲'],
          en: ['Data collection, labeling, and training via webcam', 'Hands-on experiments with data bias and overfitting', 'Exporting models to Scratch/Python for interactive games']
        },
        handsOnProject: {
          zh: '實作：製作一個用「剪刀石頭布」或「身體姿勢」控制的體感小遊戲',
          en: 'Hands-on: Build a body-gesture controlled interactive arcade game'
        },
        durationHours: 4
      },
      {
        moduleNumber: 3,
        title: {
          zh: '單元三：AI 倫理大冒險與學界專題成果發表',
          en: 'Module 3: AI Ethics, Deepfake Defense & Showcase'
        },
        topics: {
          zh: ['如何分辨 Deepfake 虛假影像與詐騙防範', 'AI 的版權、偏見與負責任使用準則', '分組專題展示與成果證書頒發'],
          en: ['Identifying Deepfake video/audio artifacts and scams', 'AI copyright, bias, and responsible digital citizenship', 'Final team presentation and certificate ceremony']
        },
        handsOnProject: {
          zh: '成果發表：學生獨立演示個人 AI STEAM 專題並接受點評',
          en: 'Showcase: Student pitch of their AI STEAM innovation project'
        },
        durationHours: 4
      }
    ],
    upcomingDates: [
      { id: 'batch-k12-1', dateStr: '2026-09-19 起每週六上午', timeStr: '10:00 - 12:00', mode: '實體 (學校科技教室) / 創客空間', seatsAvailable: 8 },
      { id: 'batch-k12-2', dateStr: '2026-10-03 起每週六下午', timeStr: '14:30 - 16:30', mode: '實體小組', seatsAvailable: 10 }
    ],
    instructors: ['Ken Sir (資深 STEAM 創客導師 & 全港科展評審)', 'Jenny Lee (兒童教育科技專案經理)'],
    featured: false
  },
  {
    id: 'course-early-childhood-music-ai',
    code: 'IDEA-KID-050',
    title: {
      zh: '幼兒園與初小 AI 音樂創作、感官啟蒙與律動探索課程（MelodyCraft AI）',
      en: 'Early Childhood AI Music Creation, Sensory Awakening & MelodyCraft AI Studio'
    },
    badge: {
      zh: '自主研發工具配套',
      en: 'Proprietary AI Tool Powered'
    },
    shortDesc: {
      zh: '使用 IDEA 自主研發之 MelodyCraft AI 兒童音樂工具，透過情緒感知、色彩聯覺與積木化旋律生成，啟發幼兒音樂天賦與科技想像力。',
      en: 'Powered by IDEA proprietary MelodyCraft AI Kids Studio. Explores emotional expression, color-synesthesia, and algorithmic melody generation for early childhood.'
    },
    fullDesc: {
      zh: '專為幼稚園（K2-K3）及初小學生（P1-P3）設計的沉浸式 AI 音樂美育課程。結合視覺、聽覺與觸覺，孩子無需具備五線譜基礎，只需透過選擇心情、大自然聲音或故事情境，即可在 MelodyCraft AI 的輔助下創作屬於自己的童謠與交響樂章，同時培養幼兒對新興科技的友好親近感。',
      en: 'An immersive musical aesthetic education designed for Kindergarten (K2-K3) and early Primary (P1-P3). Kids craft custom nursery rhymes, orchestral tracks, and nature soundscapes using emotions and intuitive visual synth controls.'
    },
    category: 'kindergarten',
    level: 'beginner',
    targetAudience: {
      zh: '幼稚園學生（K2-K3）、初小學生（P1-P3）、幼兒教育工作者及家長',
      en: 'Kindergarteners (K2-K3), Early Primary (P1-P3), Early Childhood Educators & Parents'
    },
    duration: {
      zh: '共 6 小時（4 節課，每節 1.5 小時）',
      en: '6 Hours (4 Sessions x 1.5 Hours)'
    },
    hours: 6,
    format: {
      zh: '幼稚園到校幼兒活動 / 週末親子互動工作坊 / 體驗中心',
      en: 'Kindergarten In-school Activity / Weekend Parent-Child Studio'
    },
    classType: 'small_group',
    price: 1880,
    earlyBirdPrice: 1580,
    certBadge: 'IDEA Little Maestro AI Music Certificate',
    prerequisites: {
      zh: '無任何音樂或電腦基礎要求，適合 4-8 歲幼童',
      en: 'No prior music or computer skills needed; designed for ages 4-8.'
    },
    equipmentProvided: {
      zh: '提供 MelodyCraft AI 專屬平板軟體授權與專屬兒童音樂創作紀念音檔',
      en: 'MelodyCraft AI Studio tablet access + Mastered digital audio download card'
    },
    keyOutcomes: {
      zh: [
        '透過 MelodyCraft AI 將情緒（開心、好奇、平靜、勇敢）轉化為音樂旋律',
        '認識常見樂器聲色（鋼琴、木琴、弦樂、八音盒、電子鼓）',
        '獨立完成一首 30 秒原創童謠並帶回高音質音檔與樂譜海報',
        '建立跨學科（音樂 + 視覺藝術 + AI 科技）的美感鑑賞力'
      ],
      en: [
        'Transform emotions into musical motifs using MelodyCraft AI',
        'Identify instrument timbres (Piano, Marimba, Strings, Music Box, Synth Drums)',
        'Complete an original 30-second nursery melody with collectible sheet poster',
        'Foster interdisciplinary appreciation across music, art, and emerging tech'
      ]
    },
    syllabus: [
      {
        moduleNumber: 1,
        title: {
          zh: '單元一：聽見心情的顏色——AI 音樂精靈初相遇',
          en: 'Module 1: The Colors of Sound & Meeting the AI Melody Sprite'
        },
        topics: {
          zh: ['聲音是什麼？快節奏與慢節奏的身體律動遊戲', '情緒與音階的奇妙關聯（大調與小調的色彩感知）', '初次操作 MelodyCraft AI：點選心情精靈生成第一道旋律'],
          en: ['What is sound? Fast vs slow rhythmic body games', 'Emotions & scales: happy major and gentle minor modes', 'First touch with MelodyCraft AI Sprite interface']
        },
        handsOnProject: {
          zh: '實作：為「森林裡的小松鼠」創作一段歡樂的跳躍主題曲',
          en: 'Hands-on: Generate a cheerful skipping melody for Forest Animals'
        },
        durationHours: 3
      },
      {
        moduleNumber: 2,
        title: {
          zh: '單元二：小小小小作曲家——我的原創 AI 音樂會',
          en: 'Module 2: Little AI Maestro Concert & Music Masterpiece'
        },
        topics: {
          zh: ['加入樂器配器：鋼琴、魔法八音盒與打擊樂', '錄製自己的童聲歌聲並與 AI 旋律融合', '小小音樂家成果分享會與專屬音樂證書頒發'],
          en: ['Adding instrumentation: Piano, magic music box, and percussion', 'Recording voice prompts and blending with AI arrangements', 'Mini-Concert showcase and Little Maestro Certificate award']
        },
        handsOnProject: {
          zh: '發表：每位小朋友在班上播放自己的 AI 音樂作品並獲得實體紀念卡',
          en: 'Showcase: Kids play their AI-created music track to the class'
        },
        durationHours: 3
      }
    ],
    upcomingDates: [
      { id: 'batch-kid-1', dateStr: '2026-09-13 起每週日上午', timeStr: '10:30 - 12:00', mode: '實體 (尖沙咀/九龍塘美育中心)', seatsAvailable: 6 },
      { id: 'batch-kid-2', dateStr: '2026-10-18 起每週日上午', timeStr: '10:30 - 12:00', mode: '實體親子班', seatsAvailable: 8 }
    ],
    instructors: ['Clara Lam (幼兒音樂美育碩士 & MelodyCraft 產品設計師)', 'Alex Tang (AI 音訊演算法工程師)'],
    featured: true
  },
  {
    id: 'course-university-applied-ai',
    code: 'IDEA-UNI-401',
    title: {
      zh: '大專院校 AI 專題實戰、研究方法論與產業創新應用研習營',
      en: 'University Applied AI Project Accelerator, Research Methodology & Industry Capstone'
    },
    badge: {
      zh: '大學生專屬學分級',
      en: 'University Capstone Grade'
    },
    shortDesc: {
      zh: '針對大專院校學生與青年研發者，結合學術研究論文復現（ArXiv）、Kaggle 競賽技巧、商業 AI 產品 MVP 快速原型開發。',
      en: 'Designed for tertiary students and young researchers. Covers paper reproduction (ArXiv), Kaggle competition tactics, and rapid commercial AI MVP prototyping.'
    },
    fullDesc: {
      zh: '已獲香港多所大學學生會、工程學系及商學院選為課外科創研習項目。課程銜接學術前沿與業界真實需求，引導大學生利用最新多模態模型（Vision-Language Models）、圖神經網絡（GNN）或強化學習（RL）解決具體的產業問題（如金融量化風控、智慧醫療影像分析、智慧城市物流優化）。',
      en: 'Adopted by engineering and business student bodies across HK universities. Bridges academia and industry, equipping undergraduates with multimodal VLM methods, Kaggle-winning techniques, and VC-ready AI startup prototyping.'
    },
    category: 'university',
    level: 'advanced',
    targetAudience: {
      zh: '大專院校在校生、研究生、Final Year Project (FYP) 學生、欲投身 AI 領域之青年',
      en: 'Undergraduates, Postgraduates, Final Year Project (FYP) Students, Tech Enthusiasts'
    },
    duration: {
      zh: '共 24 小時（8 節課，每節 3 小時）',
      en: '24 Hours (8 Sessions x 3 Hours)'
    },
    hours: 24,
    format: {
      zh: '實體工作坊 + 雲端 GPU 實時編程 + 企業導師一對一定導',
      en: 'In-person Workshop + Cloud GPU Lab + 1-on-1 Industry Mentorship'
    },
    classType: 'public',
    price: 5200,
    earlyBirdPrice: 4300,
    certBadge: 'IDEA University AI Research & Innovation Fellow',
    prerequisites: {
      zh: '具備基本 Python 及大學一年級數學基礎',
      en: 'Basic Python programming and introductory college mathematics.'
    },
    equipmentProvided: {
      zh: '提供雲端 JupyterLab GPU 算力及 GitHub 專案導師 Code Review',
      en: 'Dedicated JupyterLab GPU environment + GitHub PR Code Reviews'
    },
    keyOutcomes: {
      zh: [
        '能獨立閱讀並復現 Top-tier AI 頂會（NeurIPS / CVPR / ACL）論文核心演算法',
        '掌握 Kaggle / 天池競賽之特徵工程與模型集成（Ensemble）衝榜實戰',
        '打造可直接展示於求職履歷或 FYP 的 Full-stack AI 商業專題原型',
        '獲得頂尖科技公司（Big Tech & AI Startups）內推機會與推薦信'
      ],
      en: [
        'Read and reproduce algorithms from top conferences (NeurIPS, CVPR, ACL)',
        'Master feature engineering and model ensembling for Kaggle competitions',
        'Build a deployable full-stack AI portfolio piece for resumes and FYPs',
        'Access referral opportunities and mentor recommendation letters'
      ]
    },
    syllabus: [
      {
        moduleNumber: 1,
        title: {
          zh: '單元一：現代 AI 研究方法論與開源生態速通',
          en: 'Module 1: AI Research Methodology & Open Source Ecosystem'
        },
        topics: {
          zh: ['論文檢索（ArXiv, Papers with Code）與架構解構', 'Hugging Face Transformers / Diffusers / TRL 生態庫深度使用', '實驗追蹤與視覺化（Weights & Biases, MLflow）'],
          en: ['Research literature mapping and paper decomposition', 'Deep dive into Hugging Face Transformers/Diffusers/TRL', 'Experiment tracking with Weights & Biases']
        },
        handsOnProject: {
          zh: '實作：搭建標準化 AI 實驗流水線並復現一篇經典注意力機制論文',
          en: 'Hands-on: Build reproducible ML pipeline and replicate an attention paper'
        },
        durationHours: 6
      },
      {
        moduleNumber: 2,
        title: {
          zh: '單元二：多模態視覺語言模型（VLM）與實戰應用',
          en: 'Module 2: Multimodal Vision-Language Models & Applications'
        },
        topics: {
          zh: ['CLIP 與 SigLIP 跨模態對齊表徵原理', 'Qwen-VL / LLaVA 開源多模態模型架構與推論優化', '高精度 OCR、圖表解析與複雜視覺問答（VQA）'],
          en: ['CLIP and SigLIP cross-modal alignment representations', 'Open multimodal VLM architectures (LLaVA/Qwen-VL)', 'Document intelligence, chart analysis, and Visual QA']
        },
        handsOnProject: {
          zh: '實作：建立全自動醫療/財務圖表解析與洞察生成系統',
          en: 'Hands-on: Build automated financial chart diagnostic assistant'
        },
        durationHours: 6
      },
      {
        moduleNumber: 3,
        title: {
          zh: '單元三：產業 Capstone 專案實作與 Demo Day 答辯',
          en: 'Module 3: Industry Capstone Project & Demo Day Pitch'
        },
        topics: {
          zh: ['FastAPI + React 打造現代 AI 產品前端與後端', '系統延遲調優、快取（Semantic Caching）與成本控制', '向業界評審與投資人進行 Demo Day 項目路演'],
          en: ['FastAPI + React full-stack AI product architecture', 'Latency profiling, semantic caching, and token budgeting', 'Industry pitch and live prototype demonstration']
        },
        handsOnProject: {
          zh: '專案發表：分組向業界 AI 評審展示具商業價值之 AI 專題',
          en: 'Showcase: Live Demo Day presentation to industry panel'
        },
        durationHours: 12
      }
    ],
    upcomingDates: [
      { id: 'batch-uni-1', dateStr: '2026-09-20 起每週日下午', timeStr: '14:00 - 17:00', mode: '實體 (香港科技大學/城市大學周邊創新基地)', seatsAvailable: 11 },
      { id: 'batch-uni-2', dateStr: '2026-10-10 起每週六晚', timeStr: '19:00 - 22:00', mode: '互動線上研習', seatsAvailable: 14 }
    ],
    instructors: ['Dr. Jason Cheng (AI 博士 & 前大廠資深研究員)', 'Cynthia Wong (Kaggle Grandmaster)'],
    featured: false
  }
];
