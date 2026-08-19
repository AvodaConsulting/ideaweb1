import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { 
  Terminal, 
  Sparkles, 
  ShieldCheck, 
  Copy, 
  Check, 
  Play, 
  FileText, 
  Cpu, 
  Layers, 
  Building2, 
  HeartHandshake, 
  GraduationCap 
} from 'lucide-react';

type SandboxTab = 'ngo' | 'k12' | 'enterprise' | 'dl';

export const PromptSandboxDemo: React.FC = () => {
  const { lang, t } = useLanguage();
  const [activeTab, setActiveTab] = useState<SandboxTab>('ngo');
  const [isProcessing, setIsProcessing] = useState<boolean>(false);
  const [copied, setCopied] = useState<boolean>(false);
  const [resultOutput, setResultOutput] = useState<string>('');

  const sampleInputs: Record<SandboxTab, { title: string; rawInput: string; output: string }> = {
    ngo: {
      title: t('社福個案去識別化與 SOAP 結構化整理', 'NGO Case De-identification & SOAP Record'),
      rawInput: `【社工訪談錄音摘要 - 2026/02/12】
個案姓名：陳大明 (身份證號碼: A123456(7)，住址: 觀塘順天邨天樂樓1402室)
受訪者為68歲獨居長者，表示近月膝關節痛加劇，下樓買餸困難，每日僅食麵包充飢。情緒顯得沮喪低落，自述子女長居英國很少通話。希望申請送飯服務及長者復康輔具。曾提及上週差點在浴室滑倒。社工已檢查其家居環境，發現浴室未裝設扶手。`,
      output: `【IDEA 智能社福系統 - 去識別化合規 SOAP 個案進度紀錄】
■ 檔案編號：CASE-KT-2026-*** (個人隱私資料已自動過濾脫敏)
■ 服務對象：個案長者 (68歲，獨居)
■ 評估日期：2026年02月12日

[S - 主訴 Subjective]
1. 身體功能：自述雙膝關節退化疼痛加劇，嚴重影響社區活動與自理採買。
2. 營養狀況：因行動不便飲食質素低落，頻繁以麵包代餐。
3. 心理情緒：呈現孤獨感與憂鬱傾向，子女移居海外缺乏情感支持。
4. 家居安全：曾於浴室發生跌倒險境（Near-miss incident）。

[O - 客觀觀察 Objective]
1. 步態蹣跚，關節活動度受限。
2. 居住環境評估：浴室地面潮濕且缺乏防滑及安全扶手。

[A - 專業評估 Assessment]
1. 具高度跌倒風險（Fall Risk Level: High）與營養不良風險。
2. 社交孤立及家庭支援網絡薄弱，需急需社區照護介入。

[P - 處遇計畫與行動清單 Plan & Actions]
✓ 1. 加急轉介社會福利署「改善家居及社區照顧服務」(IHCS) - 申請午晚送飯服務。
✓ 2. 聯絡職業治療師安排上門評估，申請基金資助加裝浴室安全扶手與防滑墊。
✓ 3. 安排本中心「樂齡銀髮義工隊」每週兩次致電問候及每月探訪。
✓ 4. 排期於兩週後（02/26）進行個案覆檢。`
    },
    enterprise: {
      title: t('企業 RAG 智慧條款檢索與核保分析', 'Enterprise RAG Policy Assistant'),
      rawInput: `【查詢場景】客戶年齡 42 歲，在 3 年前曾接受甲狀腺結節微創切除手術，目前已完全康復且無惡性病變病理報告。現申請「卓越醫療終身保險」，詢問核保條款是否需要加費或批單不保？`,
      output: `【IDEA 企業 RAG 檢索增強系統 - 智慧核保助理】
■ 檢索知識庫：《2026 醫療核保手冊 v4.2》Section 18.3.2 內分泌系統條款
■ 檢索匹配度：98.7% (Citation: Policy_Underwriting_2026_Sec18.pdf#page=142)

■ 核保審查結論：
依據內部規章，符合以下三項標準時可予以【標準費率正常承保（Standard Rates）】：
1. 結節切除已逾 24 個月且術後超音波無復發跡象（已滿36個月，符合）
2. 組織病理學切片確認為良性結節（符合）
3. 最新甲狀腺功能指數（TSH, Free T4）維持在正常參考區間內

■ 建議前線顧問處理方案：
1. 建議客戶隨申請表附上 3 年前的出院病理化驗報告（Histology Report）及近 6 個月內之甲狀腺功能驗血報告。
2. 系統已自動填寫核保預審備忘錄（Underwriting Pre-memo #UW88219），預計核保時效由 5 工作天縮短至 2 小時。`
    },
    k12: {
      title: t('中小學 STEAM「電腦視覺與手勢互動」教案', 'K-12 STEAM Vision AI Lesson Plan'),
      rawInput: `【教案需求】對象：中二學生 (30人)，課時：70分鐘。主題：用 AI 視覺手勢控制智慧小車前進後退。需包含引導問題、動手實驗、AI 倫理討論及評估規準。`,
      output: `【IDEA STEAM 骨幹教案庫 - 生成式教案】
■ 課題：AI 視覺之眼——Teachable Machine 與手勢體感控制
■ 適用年級：中二 (Grade 8) | 課時：70 分鐘 | 跨學科：資訊科技 + 物理力學

一、 學習目標 (Learning Objectives)：
1. 認知：理解神經網絡如何透過卷積特徵識別手部骨架（MediaPipe Keypoints）。
2. 技能：能自主收集 100+ 張手勢樣本並訓練準確率 >90% 的手勢分類模型。
3. 態度：體會科技無障礙（Assistive Tech）對肢體障礙人士之重大助益。

二、 課堂節奏設計 (70 Mins Breakdown)：
• [0-10m] 破冰引導：為什麼無人駕駛能看懂手勢？介紹影像特徵提取。
• [10-35m] 動手實驗：使用 IDEA 雲端沙盒訓練「掌心(前進)」、「拳頭(停止)」、「比耶(轉彎)」。
• [35-55m] 專案連線：將模型 API Key 導入校內 Micro:bit 智慧小車進行路障挑戰賽。
• [55-70m] 倫理深思與評鑑：當光線昏暗或膚色差異導致誤判時，AI 工程師該如何改進？

三、 成效評估規準 (Assessment Rubric)：
• 優秀 (Level 4)：手勢模型泛化能力強（不同角度皆能識別），且能精確闡述混淆矩陣原理。`
    },
    dl: {
      title: t('PyTorch 深度學習訓練顯存優化與加速', 'PyTorch DL Training Optimization'),
      rawInput: `【代碼診斷】在單張 RTX 4090 (24GB) 上訓練 7B 模型時發生 CUDA Out of Memory (OOM)，Batch Size 設為 1 仍然報錯。請給出完整的 LoRA 與 FlashAttention 顯存優化方案。`,
      output: `【IDEA 深度學習工程師實驗室 - 性能診斷與重構】
■ 診斷原因：7B 全參數全精度 (FP32) 權重佔 28GB，即便 Batch Size=1 加上激活值與梯度亦必然 OOM。

■ 推薦優化架構方案（節省 75%+ 顯存，訓練速度提升 2.8x）：
1. 採用 QLoRA 4-bit NormalFloat (NF4) 量化底座權重 (顯存降至 ~5.2GB)。
2. 啟用 FlashAttention-2 消除 Attention 矩陣中間顯存開銷。
3. 開啟 Gradient Checkpointing 與混合精度 (bfloat16)。

【重構後 PyTorch 關鍵訓練腳本】：
import torch
from transformers import AutoModelForCausalLM, BitsAndBytesConfig
from peft import LoraConfig, get_peft_model, prepare_model_for_kbit_training

bnb_config = BitsAndBytesConfig(
    load_in_4bit=True,
    bnb_4bit_quant_type="nf4",
    bnb_4bit_compute_dtype=torch.bfloat16,
    bnb_4bit_use_double_quant=True
)

model = AutoModelForCausalLM.from_pretrained(
    "model_name",
    quantization_config=bnb_config,
    attn_implementation="flash_attention_2",
    device_map="auto"
)

peft_config = LoraConfig(
    r=16, lora_alpha=32,
    target_modules=["q_proj", "v_proj", "k_proj", "o_proj"],
    lora_dropout=0.05, bias="none", task_type="CAUSAL_LM"
)
model = get_peft_model(model, peft_config)
# 顯存佔用已成功壓制在 7.8 GB，可支援 Batch Size = 8！`
    }
  };

  const handleRunSimulation = () => {
    setIsProcessing(true);
    setResultOutput('');
    setTimeout(() => {
      setResultOutput(sampleInputs[activeTab].output);
      setIsProcessing(false);
    }, 600);
  };

  // Initial load
  React.useEffect(() => {
    setResultOutput(sampleInputs[activeTab].output);
  }, [activeTab]);

  const handleCopy = () => {
    if (!resultOutput) return;
    navigator.clipboard.writeText(resultOutput);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="glass-panel rounded-2xl p-6 lg:p-8 border border-slate-800 relative overflow-hidden">
      {/* Title */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-800">
        <div>
          <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 flex items-center gap-1 w-fit mb-2">
            <Sparkles className="w-3 h-3 text-cyan-400" />
            {t('課程配套實戰沙盒', 'Hands-on Course Sandbox Simulator')}
          </span>
          <h3 className="text-2xl font-bold text-white flex items-center gap-2">
            <span>{t('IDEA AI 跨領域應用與智能體測試台', 'IDEA AI Multi-Domain Workflow Sandbox')}</span>
          </h3>
          <p className="text-sm text-slate-400 mt-1">
            {t('體驗 IDEA 課程中各學員在社福、學校、企業與深度學習研發中的真實實作成果', 'Simulate real workflows created by our students across NGOs, schools, enterprise, and deep learning.')}
          </p>
        </div>

        {/* Tab switchers */}
        <div className="flex flex-wrap gap-1.5 p-1 bg-slate-950/80 rounded-xl border border-slate-800">
          {[
            { id: 'ngo', icon: HeartHandshake, label: t('社福個案 (NGO)', 'NGO Case') },
            { id: 'enterprise', icon: Building2, label: t('企業核保 (Corp)', 'Enterprise') },
            { id: 'k12', icon: GraduationCap, label: t('學校 STEAM (K-12)', 'K-12 School') },
            { id: 'dl', icon: Cpu, label: t('深度學習 (PyTorch)', 'Deep Learning') }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as SandboxTab)}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
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

      {/* Main Interactive Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mt-6">
        {/* Left: Input source simulation */}
        <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
          <div className="space-y-2">
            <div className="flex items-center justify-between text-xs text-slate-400">
              <span className="flex items-center gap-1.5 font-medium text-slate-300">
                <FileText className="w-4 h-4 text-cyan-400" />
                {t('原始輸入 (Raw Input / Prompt)', 'Raw Input / Scenario')}
              </span>
              <span className="px-2 py-0.5 rounded bg-slate-800 text-[10px] text-slate-400 font-mono">
                {activeTab.toUpperCase()}_PIPELINE
              </span>
            </div>
            <textarea
              readOnly
              value={sampleInputs[activeTab].rawInput}
              rows={9}
              className="w-full rounded-xl bg-slate-950/90 border border-slate-800 p-3.5 text-xs font-mono text-slate-300 focus:outline-none resize-none leading-relaxed selection:bg-indigo-500/30"
            />
          </div>

          <div className="flex items-center justify-between gap-3 pt-2">
            <div className="flex items-center gap-2 text-xs text-slate-400">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>{t('已載入企業/社福私隱安全過濾器', 'Privacy Sandbox Active')}</span>
            </div>
            <button
              onClick={handleRunSimulation}
              disabled={isProcessing}
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold transition-all shadow-lg shadow-indigo-600/30 active:scale-95 disabled:opacity-50"
            >
              <Play className={`w-3.5 h-3.5 fill-white ${isProcessing ? 'animate-pulse' : ''}`} />
              <span>{isProcessing ? t('AI 智能流運行中...', 'Running Pipeline...') : t('執行 AI 智能流', 'Execute Workflow')}</span>
            </button>
          </div>
        </div>

        {/* Right: Output terminal */}
        <div className="lg:col-span-7 flex flex-col space-y-2">
          <div className="flex items-center justify-between text-xs text-slate-400">
            <div className="flex items-center gap-1.5 font-medium text-slate-300">
              <Terminal className="w-4 h-4 text-indigo-400" />
              <span>{t('AI 輸出與結構化產出 (Structured Result)', 'AI Output & Artifact')}</span>
            </div>
            <button
              onClick={handleCopy}
              className="flex items-center gap-1 px-2.5 py-1 rounded bg-slate-800 hover:bg-slate-700 text-[11px] text-slate-300 transition-colors"
            >
              {copied ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
              <span>{copied ? t('已複製', 'Copied') : t('複製全文', 'Copy All')}</span>
            </button>
          </div>

          <div className="relative rounded-xl bg-slate-950 border border-indigo-900/40 p-4 h-[310px] overflow-y-auto font-mono text-xs text-indigo-200/90 leading-relaxed shadow-inner">
            {isProcessing ? (
              <div className="h-full flex flex-col items-center justify-center space-y-3 text-slate-400">
                <div className="w-8 h-8 border-2 border-indigo-500 border-t-transparent rounded-full animate-spin" />
                <span className="text-xs font-mono">{t('正在透過神經模型進行推論與結構化排版...', 'Inference running across neural layers...')}</span>
              </div>
            ) : (
              <pre className="whitespace-pre-wrap font-sans text-xs text-slate-200 leading-relaxed">
                {resultOutput}
              </pre>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
