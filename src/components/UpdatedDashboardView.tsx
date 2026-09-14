import React from 'react';
import { UserProfile, ViewState } from '../types';
import {
  TrendingUp,
  Award,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  BookOpen,
  RotateCcw,
  Zap,
  Building2,
  ExternalLink
} from 'lucide-react';

interface UpdatedDashboardViewProps {
  user: UserProfile;
  onNavigate: (view: ViewState) => void;
  onResetJourney: () => void;
}

export const UpdatedDashboardView: React.FC<UpdatedDashboardViewProps> = ({
  user,
  onNavigate,
  onResetJourney,
}) => {
  return (
    <div className="max-w-6xl mx-auto space-y-6">
      {/* Learning Impact Hero Banner matching #0F172A theme */}
      <div className="bg-[#0F172A] rounded-xl p-6 text-white border border-slate-800 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="space-y-1.5 max-w-2xl">
          <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-blue-500/20 text-blue-400 border border-blue-500/30 text-[10px] font-bold uppercase tracking-wider">
            <Zap className="w-3 h-3 text-blue-400" />
            <span>Demonstration Flow: Step 10 of 10 Complete</span>
          </div>

          <h1 className="text-xl sm:text-2xl font-bold tracking-tight text-white">
            Adaptive Learning Cycle <span className="text-blue-400">Validated</span>
          </h1>

          <p className="text-xs text-slate-300 leading-relaxed">
            Congratulations, <strong className="text-white">{user.name}</strong>! By completing the targeted iGOT Karmayogi module and passing the AI-generated assessment, your competency gap in <strong>Sampling Methods</strong> has been successfully remediated.
          </p>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <button
            onClick={onResetJourney}
            className="bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white font-semibold text-xs px-3.5 py-2 rounded-lg border border-slate-700 transition-colors flex items-center gap-1.5"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Replay SIH Journey</span>
          </button>
        </div>
      </div>

      {/* Prompt Exact Success Message */}
      <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-5 flex items-start gap-3.5 shadow-xs">
        <div className="w-9 h-9 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
          <CheckCircle2 className="w-5 h-5" />
        </div>
        <div className="space-y-0.5">
          <div className="text-[11px] font-bold text-emerald-800 uppercase tracking-wider">
            Remediation Verified
          </div>
          <p className="text-sm sm:text-base font-bold text-emerald-950">
            &ldquo;Competency gap successfully addressed through targeted learning and assessment.&rdquo;
          </p>
          <p className="text-xs text-emerald-800">
            Official benchmark of 75% achieved. Centralized iGOT Karmayogi CBC profile synchronized.
          </p>
        </div>
      </div>

      {/* Improved Stats Overview Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-xs">
          <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block">
            Sampling Methods
          </span>
          <div className="flex items-baseline gap-2 mt-1">
            <span className="text-2xl sm:text-3xl font-bold text-emerald-600">
              42% &rarr; 78%
            </span>
          </div>
          <span className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded mt-2 border border-emerald-100">
            <TrendingUp className="w-3 h-3" />
            Competency improved (+36%)
          </span>
        </div>

        <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-xs">
          <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block">
            Overall Score
          </span>
          <div className="flex items-baseline gap-2 mt-1">
            <span className="text-2xl sm:text-3xl font-bold text-blue-600">
              63% &rarr; 73%
            </span>
          </div>
          <span className="inline-flex items-center gap-1 text-[11px] font-bold text-blue-700 bg-blue-50 px-2 py-0.5 rounded mt-2 border border-blue-100">
            <Sparkles className="w-3 h-3" />
            Cadre Index elevated (+10%)
          </span>
        </div>

        <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-xs">
          <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block">
            Completed Learning Modules
          </span>
          <div className="flex items-baseline gap-2 mt-1">
            <span className="text-2xl sm:text-3xl font-bold text-slate-900">
              4 / 8
            </span>
          </div>
          <span className="inline-flex items-center gap-1 text-[11px] font-bold text-slate-700 bg-slate-100 px-2 py-0.5 rounded mt-2">
            <BookOpen className="w-3 h-3" />
            50% Curriculum completed
          </span>
        </div>
      </div>

      {/* Updated Competency Status Cards (Exact Prompt Requirement) */}
      <div className="bg-white rounded-xl border border-slate-200 shadow-xs p-6 space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-base font-bold text-slate-900">
              Updated Competency Status
            </h2>
            <p className="text-xs text-slate-500">
              Current official standing across core statistical domains
            </p>
          </div>
          <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded border border-emerald-100">
            0 Critical Gaps Remaining
          </span>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3.5 pt-1">
          {/* Statistical Analysis */}
          <div className="p-4 rounded-lg bg-slate-50 border border-slate-200 space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-slate-800">Statistical Analysis</span>
              <span className="text-[10px] font-bold uppercase px-1.5 py-0.5 rounded bg-amber-100 text-amber-800">
                Moderate
              </span>
            </div>
            <div className="text-2xl font-bold text-slate-900">60%</div>
            <div className="w-full bg-slate-200 rounded-full h-2 overflow-hidden">
              <div className="bg-amber-500 h-2 rounded-full w-[60%]" />
            </div>
            <p className="text-[10px] text-slate-400">Target benchmark: 75%</p>
          </div>

          {/* Data Visualization */}
          <div className="p-4 rounded-lg bg-slate-50 border border-slate-200 space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-slate-800">Data Visualization</span>
              <span className="text-[10px] font-bold uppercase px-1.5 py-0.5 rounded bg-emerald-100 text-emerald-800">
                Strong
              </span>
            </div>
            <div className="text-2xl font-bold text-slate-900">88%</div>
            <div className="w-full bg-slate-200 rounded-full h-2 overflow-hidden">
              <div className="bg-emerald-600 h-2 rounded-full w-[88%]" />
            </div>
            <p className="text-[10px] text-slate-400">Exceeds benchmark by +13%</p>
          </div>

          {/* Survey Design */}
          <div className="p-4 rounded-lg bg-slate-50 border border-slate-200 space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-slate-800">Survey Design</span>
              <span className="text-[10px] font-bold uppercase px-1.5 py-0.5 rounded bg-amber-100 text-amber-800">
                Moderate
              </span>
            </div>
            <div className="text-2xl font-bold text-slate-900">65%</div>
            <div className="w-full bg-slate-200 rounded-full h-2 overflow-hidden">
              <div className="bg-amber-500 h-2 rounded-full w-[65%]" />
            </div>
            <p className="text-[10px] text-slate-400">Target benchmark: 80%</p>
          </div>

          {/* Sampling Methods (Upgraded) */}
          <div className="p-4 rounded-lg bg-emerald-50/80 border-2 border-emerald-500 space-y-2 relative">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-slate-900">Sampling Methods</span>
              <span className="text-[10px] font-bold uppercase px-2 py-0.5 rounded bg-emerald-600 text-white shadow-2xs">
                Upgraded
              </span>
            </div>
            <div className="text-2xl font-bold text-emerald-700 flex items-center gap-1.5">
              <span>78%</span>
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            </div>
            <div className="w-full bg-emerald-200 rounded-full h-2 overflow-hidden">
              <div className="bg-emerald-600 h-2 rounded-full w-[78%]" />
            </div>
            <p className="text-[10px] text-emerald-700 font-semibold">Exceeds 75% Cadre benchmark</p>
          </div>
        </div>
      </div>

      {/* BEFORE / AFTER LEARNING IMPACT CARD (Prompt Explicit Requirement) */}
      <div className="bg-white rounded-xl border border-slate-200 shadow-xs p-6 space-y-5">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <h2 className="text-base font-bold text-slate-900">
              Sampling Methods — Learning Impact
            </h2>
            <p className="text-xs text-slate-500">
              Pre-training diagnostic baseline vs post-assessment verified score
            </p>
          </div>

          {/* Prompt mandated "+36% improvement" badge matching Design HTML */}
          <div className="bg-green-100 text-green-700 font-bold text-xs sm:text-sm px-3 py-1.5 rounded uppercase tracking-wider flex items-center gap-1.5 self-start sm:self-center">
            <TrendingUp className="w-4 h-4" />
            <span>+36% improvement</span>
          </div>
        </div>

        {/* Before vs After Visual Comparison Grid */}
        <div className="grid md:grid-cols-2 gap-5 pt-1">
          {/* Before Box */}
          <div className="bg-slate-50 rounded-lg p-5 border border-slate-200 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
                Before Assessment &amp; Training
              </span>
              <span className="bg-rose-100 text-rose-700 font-bold text-[10px] px-2 py-0.5 rounded uppercase">
                Major Gap
              </span>
            </div>

            <div className="text-2xl font-bold text-rose-600">
              42% Competency
            </div>

            {/* Progress track */}
            <div className="w-full bg-slate-200 rounded-full h-3 overflow-hidden">
              <div className="bg-rose-500 h-3 rounded-full w-[42%]" />
            </div>

            <p className="text-[11px] text-slate-500 leading-relaxed">
              Diagnostic identified severe gaps in stratified sampling criteria and Neyman allocation calculations.
            </p>
          </div>

          {/* After Box */}
          <div className="bg-emerald-50/70 rounded-lg p-5 border border-emerald-200 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-800">
                After Targeted Learning &amp; AI Quiz
              </span>
              <span className="bg-emerald-200/80 text-emerald-900 font-bold text-[10px] px-2 py-0.5 rounded uppercase">
                Target Achieved
              </span>
            </div>

            <div className="text-2xl font-bold text-emerald-700 flex items-center gap-2">
              <span>78% Competency</span>
              <CheckCircle2 className="w-5 h-5 text-emerald-600" />
            </div>

            {/* Progress track */}
            <div className="w-full bg-slate-200 rounded-full h-3 overflow-hidden relative">
              <div className="absolute top-0 bottom-0 w-0.5 bg-slate-400 z-10" style={{ left: '75%' }} title="Benchmark: 75%" />
              <div className="bg-emerald-600 h-3 rounded-full w-[78%]" />
            </div>

            <p className="text-[11px] text-emerald-800 leading-relaxed">
              Exceeds the 75% MoSPI cadre benchmark for Subordinate Statistical Service deployment.
            </p>
          </div>
        </div>

        {/* AI Competency Synthesis Quote */}
        <div className="p-4 bg-blue-50 border border-blue-100 rounded-lg">
          <p className="text-[11px] font-bold text-blue-800 uppercase mb-1">
            Official Competency Audit Status
          </p>
          <p className="text-xs text-slate-600 italic leading-relaxed">
            &ldquo;StatLearn AI has updated Ravi&apos;s centralized competency passport on the iGOT Karmayogi CBC integration layer. Overall officer competency index elevated from 64% to 73%.&rdquo;
          </p>
        </div>
      </div>

      {/* NEXT RECOMMENDED COURSE (Prompt Explicit Requirement) */}
      <div className="bg-white rounded-xl border border-slate-200 shadow-xs p-6 space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <span className="text-[10px] font-bold text-blue-600 uppercase tracking-widest block mb-1">
              Adaptive Next Milestone
            </span>
            {/* Prompt exact title requirement */}
            <h3 className="text-base font-bold text-slate-900">
              Next Recommended Course: Advanced Sampling Techniques
            </h3>
          </div>

          <span className="text-[10px] font-semibold text-slate-400 uppercase hidden sm:inline">
            Curriculum Unlocked
          </span>
        </div>

        <div className="bg-slate-50 rounded-lg p-4 border border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-slate-800">
                NSSTA Module 204: Advanced Sampling &amp; Estimation
              </span>
              <span className="text-[10px] bg-blue-100 text-blue-700 px-2 py-0.5 rounded font-semibold">
                3.5 Hours
              </span>
            </div>
            <p className="text-xs text-slate-500 leading-relaxed">
              Now that you have mastered basic Stratified Sampling and Neyman allocation, advance to multi-stage cluster sampling, variance estimation under complex designs, and post-stratification weighting for national surveys.
            </p>
          </div>

          <button
            onClick={() => onNavigate('learning-catalog')}
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs px-4 py-2 rounded-lg shadow-xs transition-colors shrink-0 flex items-center gap-1.5"
          >
            <span>Begin Next Course</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-3 pt-2 text-xs">
          <button
            onClick={() => onNavigate('dashboard')}
            className="text-slate-600 hover:text-slate-900 font-semibold flex items-center gap-1"
          >
            &larr; Return to Main Learner Dashboard
          </button>

          <button
            onClick={() => onNavigate('progress')}
            className="text-blue-600 hover:text-blue-700 font-semibold flex items-center gap-1"
          >
            <span>View Complete Competency Audit</span>
            <ExternalLink className="w-3 h-3" />
          </button>
        </div>
      </div>
    </div>
  );
};
