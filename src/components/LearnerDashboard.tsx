import React from 'react';
import { Competency, UserProfile, ViewState } from '../types';
import {
  ClipboardCheck,
  TrendingDown,
  Sparkles,
  FileQuestion,
  CheckCircle,
  AlertTriangle,
  Flame,
  ArrowUpRight,
  ShieldCheck,
  Calendar,
  Building2,
  BookOpen,
  ArrowRight
} from 'lucide-react';

interface LearnerDashboardProps {
  user: UserProfile;
  competencies: Competency[];
  onNavigate: (view: ViewState) => void;
}

export const LearnerDashboard: React.FC<LearnerDashboardProps> = ({
  user,
  competencies,
  onNavigate,
}) => {
  const getStatusBadge = (status: Competency['status']) => {
    switch (status) {
      case 'Strong':
        return (
          <span className="text-[11px] font-bold text-green-700 bg-green-100 px-2 py-0.5 rounded uppercase">
            Strong
          </span>
        );
      case 'Needs Improvement':
        return (
          <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2 py-0.5 rounded uppercase">
            Moderate
          </span>
        );
      case 'Major Gap':
        return (
          <span className="text-[11px] font-bold text-rose-700 bg-rose-100 px-2 py-0.5 rounded uppercase">
            Gap
          </span>
        );
    }
  };

  const samplingComp = competencies.find((c) => c.id === 'comp-sampling') || competencies[3];
  const isRemediated = (samplingComp?.score ?? 42) >= 70;

  return (
    <div className="max-w-7xl mx-auto space-y-6">
      {/* Officer Welcome & Key Metric Overview */}
      <div className="bg-white rounded-xl shadow-xs border border-slate-200 p-6">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-[10px] text-blue-600 bg-blue-50 border border-blue-100 font-bold px-2 py-0.5 rounded uppercase tracking-wider flex items-center gap-1">
                <Building2 className="w-3 h-3 text-blue-600" />
                Subordinate Statistical Service (SSS)
              </span>
              <span className="text-slate-400 text-xs">• ID: {user.employeeId}</span>
            </div>

            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
              Welcome back, <span className="text-blue-600">{user.name}</span>
            </h2>
            <p className="text-xs text-slate-500 max-w-2xl leading-relaxed">
              Role: <strong className="text-slate-700 font-semibold">{user.role}</strong> (Field Operations Division, MoSPI). Your official competency index tracks compliance with Capacity Building Commission (CBC) standards.
            </p>
          </div>

          {/* Clean Metric Counters */}
          <div className="grid grid-cols-3 gap-3 shrink-0">
            <div className="p-3 sm:p-4 bg-slate-50 rounded-lg border border-slate-100 text-center min-w-[105px]">
              <span className="text-[10px] text-slate-500 font-semibold uppercase tracking-wider block">
                Overall Score
              </span>
              <span className="text-2xl sm:text-3xl font-bold text-slate-900 mt-0.5 block">
                {user.overallScore}%
              </span>
            </div>

            <div className="p-3 sm:p-4 bg-slate-50 rounded-lg border border-slate-100 text-center min-w-[105px]">
              <span className="text-[10px] text-slate-500 font-semibold uppercase tracking-wider block">
                Modules Done
              </span>
              <span className="text-2xl sm:text-3xl font-bold text-blue-600 mt-0.5 block">
                {user.modulesCompleted}/{user.totalModules}
              </span>
            </div>

            <div className="p-3 sm:p-4 bg-slate-50 rounded-lg border border-slate-100 text-center min-w-[105px]">
              <span className="text-[10px] text-slate-500 font-semibold uppercase tracking-wider block">
                iGOT Queued
              </span>
              <span className="text-2xl sm:text-3xl font-bold text-amber-600 mt-0.5 block">
                {user.recommendationsCount}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Action Navigation Bar */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        <button
          onClick={() => onNavigate('assessment')}
          className="flex items-center justify-center space-x-2 p-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold text-xs transition-colors shadow-xs"
        >
          <ClipboardCheck className="w-4 h-4" />
          <span>Take Assessment</span>
        </button>

        <button
          onClick={() => onNavigate('gap-analysis')}
          className="flex items-center justify-center space-x-2 p-3 bg-white hover:bg-slate-50 text-slate-700 rounded-lg font-semibold text-xs border border-slate-300 transition-colors shadow-xs"
        >
          <TrendingDown className="w-4 h-4 text-rose-600" />
          <span>View Gaps</span>
        </button>

        <button
          onClick={() => onNavigate('recommendations')}
          className="flex items-center justify-center space-x-2 p-3 bg-white hover:bg-slate-50 text-slate-700 rounded-lg font-semibold text-xs border border-slate-300 transition-colors shadow-xs"
        >
          <Sparkles className="w-4 h-4 text-blue-600" />
          <span>Recommendations</span>
        </button>

        <button
          onClick={() => onNavigate('quiz-generator')}
          className="flex items-center justify-center space-x-2 p-3 bg-white hover:bg-slate-50 text-slate-700 rounded-lg font-semibold text-xs border border-slate-300 transition-colors shadow-xs"
        >
          <FileQuestion className="w-4 h-4 text-amber-600" />
          <span>Generate Quiz</span>
        </button>
      </div>

      {/* Main Grid: Clean Utility Bento Layout matching Design HTML */}
      <div className="grid grid-cols-12 gap-6">
        {/* Left Column: Competency Profile Improvement with Clean Dual Progress Bars */}
        <div className="col-span-12 lg:col-span-8 space-y-6">
          <div className="bg-white rounded-xl shadow-xs border border-slate-200 p-6 flex flex-col">
            <div className="flex justify-between items-start mb-5">
              <div>
                <h3 className="text-base font-bold text-slate-800">
                  Competency Profile Improvement
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">
                  Real-time tracking of official MoSPI capacity building milestones
                </p>
              </div>
              <span className="text-[10px] text-blue-600 font-bold tracking-widest uppercase bg-blue-50 px-2 py-0.5 rounded border border-blue-100">
                Adaptive Cycle
              </span>
            </div>

            {/* 2x2 Clean Progress Tiles matching Design HTML */}
            <div className="grid sm:grid-cols-2 gap-4 mb-5">
              {/* Sampling Methods (Focus Area) */}
              <div className="p-4 bg-slate-50 rounded-lg border border-slate-100">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs font-semibold uppercase text-slate-800">
                    Sampling Methods
                  </span>
                  {isRemediated ? (
                    <span className="text-xs font-bold text-green-600">
                      +36% Improved
                    </span>
                  ) : (
                    <span className="text-xs font-bold text-rose-600">
                      Major Gap (42%)
                    </span>
                  )}
                </div>

                <div className="h-4 bg-slate-200 rounded-full overflow-hidden relative">
                  {isRemediated ? (
                    <>
                      <div className="absolute h-full bg-blue-300 w-[42%]" />
                      <div className="absolute h-full bg-blue-600 w-[78%] transition-all duration-1000" />
                    </>
                  ) : (
                    <div className="absolute h-full bg-rose-500 w-[42%]" />
                  )}
                </div>

                <div className="flex justify-between mt-1 text-[10px] text-slate-500">
                  <span>Base: 42%</span>
                  <span>{isRemediated ? 'Current: 78%' : 'Target: 75%'}</span>
                </div>
              </div>

              {/* Statistical Analysis */}
              <div className="p-4 bg-slate-50 rounded-lg border border-slate-100">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs font-semibold uppercase text-slate-800">
                    Statistical Analysis
                  </span>
                  <span className="text-xs font-bold text-slate-400">Stable</span>
                </div>
                <div className="h-4 bg-slate-200 rounded-full overflow-hidden">
                  <div className="h-full bg-blue-500 w-[60%]" />
                </div>
                <div className="flex justify-between mt-1 text-[10px] text-slate-500">
                  <span>Current: 60%</span>
                  <span>Target: 75%</span>
                </div>
              </div>

              {/* Data Visualization */}
              <div className="p-4 bg-slate-50 rounded-lg border border-slate-100">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs font-semibold uppercase text-slate-800">
                    Data Visualization
                  </span>
                  <span className="text-xs font-bold text-green-600">Strong</span>
                </div>
                <div className="h-4 bg-slate-200 rounded-full overflow-hidden">
                  <div className="h-full bg-green-600 w-[88%]" />
                </div>
                <div className="flex justify-between mt-1 text-[10px] text-slate-500">
                  <span>Current: 88%</span>
                  <span>Target: 75%</span>
                </div>
              </div>

              {/* Survey Design */}
              <div className="p-4 bg-slate-50 rounded-lg border border-slate-100">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs font-semibold uppercase text-slate-800">
                    Survey Design
                  </span>
                  <span className="text-xs font-bold text-slate-400">Stable</span>
                </div>
                <div className="h-4 bg-slate-200 rounded-full overflow-hidden">
                  <div className="h-full bg-blue-500 w-[65%]" />
                </div>
                <div className="flex justify-between mt-1 text-[10px] text-slate-500">
                  <span>Current: 65%</span>
                  <span>Target: 80%</span>
                </div>
              </div>
            </div>

            {/* AI Impact Analysis Box directly from Design HTML */}
            <div className="p-4 bg-blue-50 border border-blue-100 rounded-lg">
              <p className="text-[11px] font-bold text-blue-800 uppercase mb-1.5">
                AI Impact Analysis
              </p>
              <p className="text-xs text-slate-600 leading-relaxed italic">
                {isRemediated
                  ? '"Ravi has successfully closed the \'Major Gap\' in Sampling Methods. The transition from 42% to 78% signifies strong understanding of stratified sampling concepts following the AI-generated quiz intervention."'
                  : '"Ravi\'s diagnostic profile indicates a critical deficit in Sampling Methods (42%). Targeted remediation via iGOT Karmayogi Module 102 and custom MCQ quiz generation is recommended to achieve the 75% cadre benchmark."'}
              </p>
            </div>
          </div>

          {/* iGOT Karmayogi Learning Pathway matching Design HTML */}
          <div className="bg-white rounded-xl shadow-xs border border-slate-200 p-6 flex flex-col">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-sm font-bold text-slate-800">
                  iGOT Karmayogi Learning Pathway
                </h3>
                <p className="text-xs text-slate-500">
                  Capacity Building Commission (CBC) Aligned Modules
                </p>
              </div>
              <span className="text-[10px] font-semibold text-slate-400">
                Curated by AI for {user.name}
              </span>
            </div>

            <div className="grid sm:grid-cols-2 gap-4 flex-1">
              <div className="bg-slate-50 p-4 rounded-lg border border-slate-100 flex flex-col justify-between space-y-3">
                <div className="space-y-1.5">
                  <div className="flex justify-between items-start">
                    <span className="text-[10px] font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded uppercase border border-blue-100">
                      Next Step
                    </span>
                    <span className="text-[10px] text-slate-400">2.5 Hours</span>
                  </div>
                  <h4 className="text-xs font-bold text-slate-800 leading-tight">
                    Basics of Sampling Methods &amp; Neyman Allocation
                  </h4>
                  <p className="text-[11px] text-slate-500 leading-normal">
                    Bridge the gap from theory to large-scale NSSO survey frameworks.
                  </p>
                </div>
                <button
                  onClick={() => onNavigate('quiz-generator')}
                  className="w-full py-2 bg-white border border-slate-300 rounded text-[11px] font-semibold text-slate-700 hover:bg-slate-50 transition-colors text-center"
                >
                  Launch iGOT Course Material
                </button>
              </div>

              <div className="bg-slate-50 p-4 rounded-lg border border-slate-100 flex flex-col justify-between space-y-3 opacity-70">
                <div className="space-y-1.5">
                  <div className="flex justify-between items-start">
                    <span className="text-[10px] font-bold text-slate-400 bg-slate-100 px-2 py-0.5 rounded uppercase">
                      Locked
                    </span>
                    <span className="text-[10px] text-slate-400">4.0 Hours</span>
                  </div>
                  <h4 className="text-xs font-bold text-slate-800 leading-tight">
                    Applied Econometrics for Statistical Officers
                  </h4>
                  <p className="text-[11px] text-slate-500 leading-normal">
                    Prerequisite: Score &gt; 75% in Sampling Methods Assessment.
                  </p>
                </div>
                <button
                  disabled
                  className="w-full py-2 bg-slate-200 text-slate-400 rounded text-[11px] font-semibold cursor-not-allowed text-center"
                >
                  Complete Prerequisite
                </button>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400">
              <div className="flex items-center space-x-1.5">
                <div className="w-2 h-2 bg-green-500 rounded-full" />
                <span>Integrated with iGOT Hub</span>
              </div>
              <button
                onClick={() => onNavigate('learning-catalog')}
                className="text-blue-600 hover:text-blue-700 font-semibold"
              >
                Browse Full Catalog &rarr;
              </button>
            </div>
          </div>
        </div>

        {/* Right Column: AI Quiz Generator & Assessment Tile directly matching Design HTML */}
        <div className="col-span-12 lg:col-span-4 space-y-6">
          {/* AI Quiz Generator Card matching Design HTML */}
          <div className="bg-white rounded-xl shadow-xs border border-slate-200 p-5">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-bold text-slate-800">
                AI Quiz Generator
              </h3>
              <span className="text-[10px] text-slate-400 uppercase font-bold">
                NLP Parser
              </span>
            </div>

            <div
              onClick={() => onNavigate('quiz-generator')}
              className="border-2 border-dashed border-slate-200 hover:border-blue-400 rounded-lg p-4 flex flex-col items-center justify-center bg-slate-50 mb-4 cursor-pointer transition-colors"
            >
              <div className="w-10 h-10 bg-red-100 text-red-600 rounded flex items-center justify-center font-bold text-xs mb-2">
                PDF
              </div>
              <p className="text-[11px] font-medium text-slate-800">
                Sampling_Methods.pdf
              </p>
              <p className="text-[10px] text-slate-400">
                1.2 MB • Uploaded &amp; Verified
              </p>
            </div>

            <div className="space-y-3">
              <div className="flex justify-between items-center text-xs">
                <span className="text-slate-500">Generated MCQs:</span>
                <span className="font-semibold text-slate-800">10 Questions</span>
              </div>
              <div className="flex justify-between items-center text-xs">
                <span className="text-slate-500">Avg. Difficulty:</span>
                <span className="font-bold text-amber-600">Medium</span>
              </div>
              <button
                onClick={() => onNavigate('quiz-generator')}
                className="w-full h-10 bg-blue-600 hover:bg-blue-700 text-white rounded-lg flex items-center justify-center text-xs font-semibold transition-colors shadow-xs"
              >
                Generate Assessment
              </button>
            </div>
          </div>

          {/* Current Assessment Card matching Design HTML */}
          <div className="bg-[#0F172A] rounded-xl shadow-xs border border-slate-800 p-5 text-white">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-sm font-bold">Current Assessment</h3>
              <span className="text-[10px] bg-blue-500/20 text-blue-400 px-2 py-0.5 rounded font-bold uppercase">
                Active
              </span>
            </div>

            <div className="mb-4">
              <p className="text-[11px] text-blue-400 mb-1 font-bold tracking-widest uppercase">
                Question 4 of 10
              </p>
              <p className="text-xs font-medium leading-relaxed text-slate-200">
                What is the primary purpose of stratified sampling in national statistical surveys?
              </p>
            </div>

            <div className="space-y-2">
              <div className="p-2.5 bg-slate-800/80 rounded border border-slate-700 text-xs flex items-center text-slate-300">
                <span className="w-5 h-5 bg-slate-700 rounded mr-2.5 flex items-center justify-center text-[10px] font-bold text-white shrink-0">
                  A
                </span>
                <span>To increase sample size randomly</span>
              </div>

              <div className="p-2.5 bg-blue-600 rounded border border-blue-400 text-xs flex items-center text-white font-medium">
                <span className="w-5 h-5 bg-blue-500 rounded mr-2.5 flex items-center justify-center text-[10px] font-bold text-white shrink-0">
                  B
                </span>
                <span>To ensure homogeneous subgroups</span>
              </div>

              <div className="p-2.5 bg-slate-800/80 rounded border border-slate-700 text-xs flex items-center text-slate-300">
                <span className="w-5 h-5 bg-slate-700 rounded mr-2.5 flex items-center justify-center text-[10px] font-bold text-white shrink-0">
                  C
                </span>
                <span>To eliminate the need for survey weights</span>
              </div>
            </div>

            <div className="mt-5 pt-3 border-t border-slate-800 flex justify-between items-center">
              <span className="text-[10px] text-slate-500 italic">
                AI Generated Content
              </span>
              <button
                onClick={() => onNavigate('quiz')}
                className="px-3 py-1 bg-blue-500 hover:bg-blue-400 text-white rounded text-[11px] font-semibold transition-colors"
              >
                Launch Assessment &rarr;
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
