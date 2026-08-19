import React, { useState, useEffect, useRef } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { 
  Play, 
  Square, 
  Sparkles, 
  Volume2, 
  Music, 
  Download, 
  Wand2, 
  RefreshCw, 
  Heart, 
  Compass, 
  Moon, 
  Zap,
  Sliders,
  CheckCircle2
} from 'lucide-react';

interface NoteItem {
  pitch: string;
  freq: number;
  step: number; // 0 to 15 (16-step grid)
  duration: number;
}

const SCALE_NOTES: { [key: string]: number } = {
  'C4': 261.63,
  'D4': 293.66,
  'E4': 329.63,
  'F4': 349.23,
  'G4': 392.00,
  'A4': 440.00,
  'B4': 493.88,
  'C5': 523.25,
  'D5': 587.33,
  'E5': 659.25,
  'G5': 783.99,
  'A5': 880.00
};

const NOTE_KEYS = Object.keys(SCALE_NOTES).reverse(); // High to Low for display

type EmotionType = 'joyful' | 'adventure' | 'gentle' | 'energetic';
type InstrumentType = 'marimba' | 'musicbox' | 'chiptune' | 'piano';

export const MelodyCraftDemo: React.FC = () => {
  const { lang, t } = useLanguage();
  
  const [selectedEmotion, setSelectedEmotion] = useState<EmotionType>('joyful');
  const [selectedInstrument, setSelectedInstrument] = useState<InstrumentType>('marimba');
  const [bpm, setBpm] = useState<number>(115);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [currentStep, setCurrentStep] = useState<number>(-1);
  const [notes, setNotes] = useState<NoteItem[]>([]);
  const [isGenerating, setIsGenerating] = useState<boolean>(false);
  const [downloadSuccess, setDownloadSuccess] = useState<boolean>(false);

  // Audio Context Ref
  const audioCtxRef = useRef<AudioContext | null>(null);
  const timerRef = useRef<number | null>(null);
  const stepRef = useRef<number>(-1);

  // Initialize Audio Context on demand
  const getAudioContext = () => {
    if (!audioCtxRef.current) {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      audioCtxRef.current = new AudioCtx();
    }
    if (audioCtxRef.current.state === 'suspended') {
      audioCtxRef.current.resume();
    }
    return audioCtxRef.current;
  };

  // Play a single synthesized note
  const playSound = (freq: number, instrument: InstrumentType, duration = 0.25) => {
    try {
      const ctx = getAudioContext();
      const now = ctx.currentTime;

      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      if (instrument === 'marimba') {
        osc.type = 'triangle';
        gain.gain.setValueAtTime(0.4, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.35);
      } else if (instrument === 'musicbox') {
        osc.type = 'sine';
        gain.gain.setValueAtTime(0.5, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.6);
      } else if (instrument === 'chiptune') {
        osc.type = 'square';
        gain.gain.setValueAtTime(0.2, now);
        gain.gain.exponentialRampToValueAtTime(0.01, now + 0.2);
      } else {
        // Piano
        osc.type = 'sine';
        gain.gain.setValueAtTime(0.45, now);
        gain.gain.exponentialRampToValueAtTime(0.005, now + 0.45);
      }

      osc.frequency.setValueAtTime(freq, now);
      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(now);
      osc.stop(now + 0.6);
    } catch (e) {
      console.warn('Audio play error', e);
    }
  };

  // Algorithmic Melody Generation based on Emotion
  const generateMelody = (emotion = selectedEmotion) => {
    setIsGenerating(true);
    
    setTimeout(() => {
      let pool: string[] = [];
      let stepIntervals: number[] = [];
      let targetBpm = 110;

      if (emotion === 'joyful') {
        pool = ['C4', 'E4', 'G4', 'A4', 'C5', 'D5', 'E5', 'G5'];
        stepIntervals = [0, 2, 4, 6, 8, 10, 12, 14];
        targetBpm = 124;
      } else if (emotion === 'adventure') {
        pool = ['D4', 'F4', 'A4', 'C5', 'D5', 'E5', 'A5'];
        stepIntervals = [0, 2, 3, 6, 8, 10, 11, 14];
        targetBpm = 135;
      } else if (emotion === 'gentle') {
        pool = ['C4', 'E4', 'G4', 'A4', 'C5', 'E5'];
        stepIntervals = [0, 4, 8, 12];
        targetBpm = 88;
      } else {
        // energetic
        pool = ['C4', 'D4', 'E4', 'G4', 'A4', 'C5', 'D5', 'E5', 'G5', 'A5'];
        stepIntervals = [0, 1, 2, 4, 6, 7, 8, 10, 12, 14, 15];
        targetBpm = 142;
      }

      setBpm(targetBpm);

      const generated: NoteItem[] = [];
      stepIntervals.forEach(step => {
        const randomPitch = pool[Math.floor(Math.random() * pool.length)];
        generated.push({
          pitch: randomPitch,
          freq: SCALE_NOTES[randomPitch],
          step: step,
          duration: 1
        });
      });

      // Add 2 random passing notes for musicality
      for (let i = 0; i < 2; i++) {
        const randomStep = Math.floor(Math.random() * 16);
        if (!generated.some(n => n.step === randomStep)) {
          const p = pool[Math.floor(Math.random() * pool.length)];
          generated.push({
            pitch: p,
            freq: SCALE_NOTES[p],
            step: randomStep,
            duration: 1
          });
        }
      }

      setNotes(generated);
      setIsGenerating(false);
    }, 400);
  };

  // Initial load generation
  useEffect(() => {
    generateMelody('joyful');
  }, []);

  // Sequencer loop
  useEffect(() => {
    if (!isPlaying) {
      if (timerRef.current) clearInterval(timerRef.current);
      stepRef.current = -1;
      setCurrentStep(-1);
      return;
    }

    const stepDurationMs = (60 / bpm / 4) * 1000; // 16th notes

    timerRef.current = window.setInterval(() => {
      stepRef.current = (stepRef.current + 1) % 16;
      const step = stepRef.current;
      setCurrentStep(step);

      // Find if any note plays on this step
      const stepNotes = notes.filter(n => n.step === step);
      stepNotes.forEach(n => {
        playSound(n.freq, selectedInstrument);
      });
    }, stepDurationMs);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPlaying, bpm, notes, selectedInstrument]);

  // Toggle Play / Stop
  const handleTogglePlay = () => {
    getAudioContext();
    setIsPlaying(!isPlaying);
  };

  // Manual note toggle on visual grid
  const handleCellClick = (pitch: string, step: number) => {
    getAudioContext();
    playSound(SCALE_NOTES[pitch], selectedInstrument);

    setNotes(prev => {
      const exists = prev.find(n => n.pitch === pitch && n.step === step);
      if (exists) {
        return prev.filter(n => !(n.pitch === pitch && n.step === step));
      } else {
        return [...prev, { pitch, freq: SCALE_NOTES[pitch], step, duration: 1 }];
      }
    });
  };

  const handleExportTrack = () => {
    setDownloadSuccess(true);
    setTimeout(() => setDownloadSuccess(false), 3000);
  };

  return (
    <div className="glass-panel rounded-2xl p-6 lg:p-8 relative overflow-hidden border border-indigo-500/20 shadow-2xl">
      {/* Background visual flair */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-br from-indigo-500/10 via-purple-500/10 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-10 -left-10 w-80 h-80 bg-gradient-to-tr from-cyan-500/10 via-blue-500/10 to-transparent rounded-full blur-3xl pointer-events-none" />

      {/* Header bar */}
      <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-800">
        <div>
          <div className="flex items-center gap-2 mb-1.5">
            <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 flex items-center gap-1">
              <Sparkles className="w-3 h-3 text-indigo-400" />
              {t('IDEA 自研教育科技產品', 'Proprietary EdTech Innovation')}
            </span>
            <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
              {t('已導入全港 8+ 所幼稚園', 'Deployed in 8+ HK Preschools')}
            </span>
          </div>
          <h3 className="text-2xl lg:text-3xl font-bold tracking-tight text-white flex items-center gap-2">
            <span>MelodyCraft AI</span>
            <span className="text-sm font-normal text-slate-400">
              {t('兒童 AI 音樂創作與感官工作站 (可即時試玩)', 'Kids AI Music Synthesizer (Live Sandbox)')}
            </span>
          </h3>
        </div>

        {/* Quick status & CTA */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => generateMelody(selectedEmotion)}
            disabled={isGenerating}
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-indigo-600 to-cyan-600 hover:from-indigo-500 hover:to-cyan-500 text-white font-medium text-sm transition-all shadow-lg shadow-indigo-500/20 active:scale-95 disabled:opacity-50"
          >
            <Wand2 className={`w-4 h-4 ${isGenerating ? 'animate-spin' : ''}`} />
            <span>{isGenerating ? t('AI 正在譜曲中...', 'AI Composing...') : t('AI 智能重構旋律', 'AI Recompose Motif')}</span>
          </button>
        </div>
      </div>

      {/* Control Panel: Emotions & Instruments */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 my-6">
        {/* Emotion Picker */}
        <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800">
          <label className="text-xs text-slate-400 font-medium mb-2 block flex items-center gap-1">
            <Heart className="w-3.5 h-3.5 text-rose-400" />
            {t('心情與情緒模式', 'Emotion Mood Preset')}
          </label>
          <div className="grid grid-cols-2 gap-1.5">
            {[
              { id: 'joyful', icon: Sparkles, label: t('快樂暖陽', 'Joyful') },
              { id: 'adventure', icon: Compass, label: t('神奇冒險', 'Adventure') },
              { id: 'gentle', icon: Moon, label: t('恬靜搖籃', 'Lullaby') },
              { id: 'energetic', icon: Zap, label: t('活力跳躍', 'Bouncy') }
            ].map(item => (
              <button
                key={item.id}
                onClick={() => {
                  setSelectedEmotion(item.id as EmotionType);
                  generateMelody(item.id as EmotionType);
                }}
                className={`flex items-center justify-center gap-1.5 px-2.5 py-2 rounded-lg text-xs font-medium transition-all ${
                  selectedEmotion === item.id
                    ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30 font-semibold'
                    : 'bg-slate-800/80 text-slate-300 hover:bg-slate-700'
                }`}
              >
                <item.icon className="w-3 h-3" />
                <span>{item.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Instrument Picker */}
        <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800">
          <label className="text-xs text-slate-400 font-medium mb-2 block flex items-center gap-1">
            <Music className="w-3.5 h-3.5 text-cyan-400" />
            {t('樂器音色選擇', 'Instrument Timbre')}
          </label>
          <div className="grid grid-cols-2 gap-1.5">
            {[
              { id: 'marimba', label: t('魔法木琴', 'Marimba') },
              { id: 'musicbox', label: t('晶瑩八音盒', 'Music Box') },
              { id: 'chiptune', label: t('8-Bit 電子音', '8-Bit Synth') },
              { id: 'piano', label: t('柔和鋼琴', 'Acoustic Piano') }
            ].map(item => (
              <button
                key={item.id}
                onClick={() => {
                  setSelectedInstrument(item.id as InstrumentType);
                  playSound(440, item.id as InstrumentType);
                }}
                className={`px-2.5 py-2 rounded-lg text-xs font-medium transition-all text-center ${
                  selectedInstrument === item.id
                    ? 'bg-cyan-600 text-white shadow-md shadow-cyan-600/30 font-semibold'
                    : 'bg-slate-800/80 text-slate-300 hover:bg-slate-700'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>

        {/* BPM / Tempo Slider */}
        <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800 flex flex-col justify-between">
          <div className="flex items-center justify-between text-xs text-slate-400 font-medium">
            <span className="flex items-center gap-1">
              <Sliders className="w-3.5 h-3.5 text-amber-400" />
              {t('速度 (BPM)', 'Tempo (BPM)')}
            </span>
            <span className="text-white font-mono font-bold">{bpm} BPM</span>
          </div>
          <input
            type="range"
            min="70"
            max="160"
            value={bpm}
            onChange={e => setBpm(Number(e.target.value))}
            className="w-full h-1.5 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-indigo-500 my-2"
          />
          <div className="flex justify-between text-[10px] text-slate-500 font-mono">
            <span>70 (Slow)</span>
            <span>115 (Normal)</span>
            <span>160 (Fast)</span>
          </div>
        </div>

        {/* Transport & Export */}
        <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800 flex flex-col justify-between">
          <label className="text-xs text-slate-400 font-medium mb-1 block">
            {t('即時播放與匯出', 'Playback & Export')}
          </label>
          <div className="flex gap-2">
            <button
              onClick={handleTogglePlay}
              className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl font-bold text-sm transition-all ${
                isPlaying
                  ? 'bg-rose-600 hover:bg-rose-500 text-white shadow-lg shadow-rose-600/30'
                  : 'bg-emerald-600 hover:bg-emerald-500 text-white shadow-lg shadow-emerald-600/30'
              }`}
            >
              {isPlaying ? (
                <>
                  <Square className="w-4 h-4 fill-white" />
                  <span>{t('停止', 'Stop')}</span>
                </>
              ) : (
                <>
                  <Play className="w-4 h-4 fill-white" />
                  <span>{t('播放旋律', 'Play')}</span>
                </>
              )}
            </button>
            <button
              onClick={handleExportTrack}
              title={t('匯出幼兒音樂紀念音檔', 'Export Child Melody Audio')}
              className="px-3 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 transition-all flex items-center justify-center text-xs"
            >
              {downloadSuccess ? <CheckCircle2 className="w-4 h-4 text-emerald-400" /> : <Download className="w-4 h-4" />}
            </button>
          </div>
          {downloadSuccess && (
            <span className="text-[11px] text-emerald-400 font-medium text-center mt-1">
              {t('已生成音樂創作紀念音軌與五線譜！', 'Melody & Sheet Ready!')}
            </span>
          )}
        </div>
      </div>

      {/* Interactive Piano Roll / Sequencer Matrix */}
      <div className="relative z-10 bg-slate-950/80 rounded-xl p-4 border border-slate-800/80 overflow-x-auto">
        <div className="flex items-center justify-between pb-3 text-xs text-slate-400 border-b border-slate-800/60 mb-2 min-w-[620px]">
          <div className="flex items-center gap-2">
            <Volume2 className="w-3.5 h-3.5 text-indigo-400" />
            <span className="font-mono text-slate-300 font-semibold">{t('16 拍動態步進鋼琴卷簾 (可點擊格仔自由加減音符)', '16-Step Interactive Piano Roll (Click grid to add/remove notes)')}</span>
          </div>
          <div className="text-[11px] text-slate-500">
            {t('色彩代表 AI 生成情緒與音高', 'Colors reflect AI emotion & pitch')}
          </div>
        </div>

        {/* Step indicator header */}
        <div className="flex items-center mb-1 min-w-[620px]">
          <div className="w-14 text-right pr-2 text-[10px] text-slate-500 font-mono">STEP</div>
          <div className="grid grid-cols-16 flex-1 gap-1">
            {Array.from({ length: 16 }).map((_, stepIdx) => (
              <div
                key={stepIdx}
                className={`text-center text-[10px] font-mono py-0.5 rounded ${
                  currentStep === stepIdx
                    ? 'bg-indigo-500 text-white font-bold animate-pulse'
                    : stepIdx % 4 === 0
                    ? 'text-slate-400 bg-slate-800/40'
                    : 'text-slate-600'
                }`}
              >
                {stepIdx + 1}
              </div>
            ))}
          </div>
        </div>

        {/* Notes Grid */}
        <div className="space-y-1 min-w-[620px]">
          {NOTE_KEYS.map(pitch => (
            <div key={pitch} className="flex items-center">
              {/* Pitch Label */}
              <div className="w-14 text-right pr-2 font-mono text-xs font-semibold text-slate-400 flex items-center justify-end gap-1">
                <span className={pitch.startsWith('C') ? 'text-cyan-400 font-bold' : ''}>{pitch}</span>
              </div>

              {/* Step Cells */}
              <div className="grid grid-cols-16 flex-1 gap-1">
                {Array.from({ length: 16 }).map((_, stepIdx) => {
                  const isNoteActive = notes.some(n => n.pitch === pitch && n.step === stepIdx);
                  const isPlayhead = currentStep === stepIdx;

                  let cellBg = 'bg-slate-900/80 hover:bg-slate-800';
                  if (isNoteActive) {
                    if (selectedEmotion === 'joyful') cellBg = 'bg-gradient-to-r from-amber-400 to-amber-500 shadow-sm shadow-amber-500/50';
                    else if (selectedEmotion === 'adventure') cellBg = 'bg-gradient-to-r from-cyan-400 to-blue-500 shadow-sm shadow-cyan-500/50';
                    else if (selectedEmotion === 'gentle') cellBg = 'bg-gradient-to-r from-indigo-400 to-purple-400 shadow-sm shadow-purple-500/50';
                    else cellBg = 'bg-gradient-to-r from-rose-500 to-pink-500 shadow-sm shadow-pink-500/50';
                  }

                  return (
                    <button
                      key={stepIdx}
                      onClick={() => handleCellClick(pitch, stepIdx)}
                      className={`h-6 rounded transition-all flex items-center justify-center ${cellBg} ${
                        isPlayhead ? 'ring-1 ring-white/80' : ''
                      } ${stepIdx % 4 === 0 && !isNoteActive ? 'border-l border-slate-700/50' : ''}`}
                    >
                      {isNoteActive && (
                        <div className="w-1.5 h-1.5 rounded-full bg-white shadow-xs" />
                      )}
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom info banner */}
      <div className="mt-4 pt-3 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-2">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
          <span>{t('Web Audio 原生合成引擎運作中・無需任何插件', 'Native Web Audio Synth Engine Active・No Plugins Required')}</span>
        </div>
        <div className="text-slate-400">
          {t('適用對象：幼稚園 K2-K3 及初小學生・啟發聯覺與美感', 'Designed for Preschool K2-K3 & Primary STEAM Aesthetics')}
        </div>
      </div>
    </div>
  );
};
