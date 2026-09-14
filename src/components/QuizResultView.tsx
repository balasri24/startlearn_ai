import React, { useEffect } from 'react';
import { ViewState } from '../types';
import confetti from 'canvas-confetti';
import {
  Award,
  CheckCircle2,
  Brain,
  ArrowRight,
  RotateCcw,
  Check,
  X
} from 'lucide-react';

interface QuizResultViewProps {
  score: number;
  totalQuestions: number;
  onNavigate: (view: ViewState) => void;
  onUpdateCompetency: () => void;
}

export const QuizResultView: React.FC<QuizResultViewProps> = ({
  score = 8,
  totalQuestions = 10,
  onNavigate,
  onUpdateCompetency,
}) => {
  useEffect(() => {
    try {
      confetti({
        particleCount: 50,
        spread: 50,
        origin: { y: 0.6 },
        colors: ['#2563eb', '#10b981', '#f59e0b'],
      });
    } catch {
      // Ignore if iframe canvas blocked
    }
  }, []);

  const percentage = Math.round((score / totalQuestions) * 100);
  const correctCount = score;
  const incorrectCount = totalQuestions - score;

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Quiz Completed Header matching #0F172A theme */}
      <div className="bg-[#0F172A] text-white rounded-xl p-6 sm:p-7 shadow-xs border border-slate-800 text-center relative overflow-hidden">
        <div className="space-y-4 max-w-md mx-auto">
          <div className="w-12 h-12 rounded-lg bg-blue-500/20 text-blue-400 border border-blue-500/30 mx-auto flex items-center justify-center shadow-inner">
            <Award className="w-6 h-6" />
          </div>

          <div className="space-y-1">
            <span className="text-[10px] font-bold text-blue-400 uppercase tracking-widest">
              Assessment Completed
            </span>
            <h1 className="text-xl sm:text-2xl font-bold tracking-tight text-white">
              Assessment Diagnostic Results
            </h1>
            <p className="text-xs text-slate-400">
              Module: Sampling Methods &amp; Survey Frameworks
            </p>
          </div>

          {/* Clean Score Card */}
          <div className="bg-slate-800/80 rounded-lg p-5 border border-slate-700 shadow-inner">
            <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
              Diagnostic Score
            </div>
            <div className="text-3xl sm:text-4xl font-black text-white my-1">
              {score} / {totalQuestions}
            </div>
            <div className="text-lg font-bold text-emerald-400">
              {percentage}% Proficiency
            </div>
            <p className="text-[11px] text-slate-400 mt-1.5">
              Cadre Threshold (75%) Met • Verified for Field Survey Operations
            </p>
          </div>
        </div>
      </div>

      {/* Breakdown Grid matching prompt */}
      <div className="grid sm:grid-cols-2 gap-5">
        {/* Strong topics */}
        <div className="bg-white rounded-xl p-5 border border-slate-200 shadow-xs space-y-3">
          <div className="flex items-center justify-between">
            <h3 className="text-xs font-bold text-slate-800 uppercase tracking-wider">
              Strong
            </h3>
            <span className="text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-100">
              Mastered
            </span>
          </div>

          <div className="space-y-2 pt-1">
            <div className="p-3 bg-emerald-50/70 rounded-lg border border-emerald-100 flex items-center gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <div>
                <div className="text-xs font-bold text-slate-900">Cluster Sampling</div>
                <div className="text-[11px] text-slate-500">100% accuracy on PSU selection formulas</div>
              </div>
            </div>

            <div className="p-3 bg-emerald-50/70 rounded-lg border border-emerald-100 flex items-center gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <div>
                <div className="text-xs font-bold text-slate-900">Population Concepts</div>
                <div className="text-[11px] text-slate-500">Mastery of finite population correction &amp; frames</div>
              </div>
            </div>
          </div>
        </div>

        {/* Needs Improvement */}
        <div className="bg-white rounded-xl p-5 border border-slate-200 shadow-xs space-y-3">
          <div className="flex items-center justify-between">
            <h3 className="text-xs font-bold text-slate-800 uppercase tracking-wider">
              Needs Improvement
            </h3>
            <span className="text-[11px] font-bold text-amber-700 bg-amber-50 px-2 py-0.5 rounded border border-amber-100">
              Target Area
            </span>
          </div>

          <div className="space-y-2 pt-1">
            <div className="p-3 bg-amber-50/70 rounded-lg border border-amber-200 flex items-center gap-2.5">
              <div className="w-5 h-5 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center text-xs font-bold shrink-0">
                ⚠
              </div>
              <div>
                <div className="text-xs font-bold text-slate-900">Stratified Sampling</div>
                <div className="text-[11px] text-slate-600">Disproportionate allocation and strata variance calculations</div>
              </div>
            </div>
          </div>

          <div className="p-2.5 bg-slate-50 rounded-lg text-[11px] text-slate-500 border border-slate-100">
            Official MoSPI NSSO benchmark recommends targeted micro-learning in stratified variance calculations.
          </div>
        </div>
      </div>

      {/* AI Learning Analysis Callout (Exact prompt quote) */}
      <div className="p-4 sm:p-5 bg-blue-50 border border-blue-100 rounded-xl space-y-1.5">
        <div className="flex items-center gap-1.5 text-xs font-bold text-blue-800 uppercase tracking-wider">
          <Brain className="w-4 h-4 text-blue-700" />
          <span>AI Learning Analysis</span>
        </div>
        <p className="text-xs sm:text-sm text-slate-800 leading-relaxed font-medium">
          &ldquo;Additional practice in Stratified Sampling is recommended.&rdquo;
        </p>
        <p className="text-[11px] text-slate-600 mt-1">
          Based on this assessment score of 80%, Ravi&apos;s competency score in <strong>Sampling Methods</strong> will be upgraded from 42% (Critical Gap) to 78% (Proficient/Target Achieved).
        </p>
      </div>

      {/* Actions matching prompt */}
      <div className="bg-white rounded-xl p-5 border border-slate-200 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <button
          onClick={() => {
            onUpdateCompetency();
            onNavigate('recommendations');
          }}
          className="bg-white hover:bg-slate-50 text-blue-700 border border-blue-200 font-semibold text-xs px-4 py-2.5 rounded-lg shadow-2xs transition-colors flex items-center justify-center gap-2 cursor-pointer"
        >
          <span>View New Recommendations</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>

        <button
          onClick={onUpdateCompetency}
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs px-5 py-2.5 rounded-lg shadow-xs transition-colors flex items-center justify-center gap-2 cursor-pointer"
        >
          <span>Update Competency Profile &rarr; View New Dashboard</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};
