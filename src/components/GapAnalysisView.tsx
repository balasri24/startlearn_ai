import React from 'react';
import { Competency, ViewState } from '../types';
import {
  Brain,
  TrendingDown,
  Sparkles,
  ArrowRight,
  AlertOctagon,
  CheckCircle2,
  AlertTriangle,
  Flame,
  Layers,
  FileCheck
} from 'lucide-react';

interface GapAnalysisViewProps {
  competencies: Competency[];
  onNavigate: (view: ViewState) => void;
}

export const GapAnalysisView: React.FC<GapAnalysisViewProps> = ({
  competencies,
  onNavigate,
}) => {
  return (
    <div className="max-w-6xl mx-auto space-y-6">
      {/* Header Banner */}
      <div className="bg-[#0F172A] rounded-xl p-6 text-white border border-slate-800 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="space-y-1.5 max-w-2xl">
          <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-rose-500/20 text-rose-300 text-[11px] font-bold border border-rose-500/30 uppercase tracking-wider">
            <AlertOctagon className="w-3 h-3" />
            <span>AI Diagnostic Engine • Cadre Benchmark</span>
          </div>
          <h1 className="text-xl sm:text-2xl font-bold tracking-tight text-white">
            AI Competency <span className="text-blue-400">Gap Analysis</span>
          </h1>
          <p className="text-xs text-slate-300 leading-relaxed">
            Multi-dimensional evaluation against the MoSPI Cadre Benchmark for Statistical Officers. Automated synthesis reveals target areas requiring capacity building.
          </p>
        </div>

        <button
          onClick={() => onNavigate('recommendations')}
          className="bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs px-5 py-2.5 rounded-lg shadow-xs transition-colors flex items-center gap-1.5 shrink-0 self-start md:self-center cursor-pointer"
        >
          <span>Get AI Recommendations</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* Critical Highlight Metric Banner */}
      <div className="bg-rose-50/80 border border-rose-200 rounded-xl p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex items-center gap-3.5">
          <div className="w-12 h-12 rounded-lg bg-rose-100 border border-rose-200 text-rose-700 flex items-center justify-center font-bold text-lg shrink-0">
            42%
          </div>
          <div className="space-y-0.5">
            <div className="flex items-center gap-2">
              <h2 className="text-sm font-bold text-slate-900">
                Sampling Methods: 42%
              </h2>
              <span className="text-[10px] font-bold text-rose-700 bg-rose-100 px-2 py-0.5 rounded uppercase">
                Critical Gap
              </span>
            </div>
            <p className="text-xs text-slate-600">
              Required benchmark: <strong className="text-slate-900 font-semibold">75%</strong> • Gap: <strong className="text-rose-700 font-semibold">-33%</strong> deficit
            </p>
          </div>
        </div>

        <button
          onClick={() => onNavigate('recommendations')}
          className="bg-rose-600 hover:bg-rose-700 text-white text-xs font-semibold px-4 py-2 rounded-lg shadow-xs transition-colors flex items-center justify-center gap-1.5 shrink-0 self-start sm:self-auto cursor-pointer"
        >
          <span>Get AI Recommendations</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* AI Explanation Box directly matching the prompt */}
      <div className="bg-blue-50 border border-blue-100 rounded-xl p-5 space-y-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Brain className="w-4 h-4 text-blue-700" />
            <span className="text-[11px] font-bold text-blue-800 uppercase tracking-wider">
              AI Diagnostic Explanation
            </span>
          </div>
          <span className="text-[10px] text-blue-600 bg-blue-100/60 px-2 py-0.5 rounded font-medium">
            NLP Rule-Based &amp; Parametric Diagnostic
          </span>
        </div>

        <p className="text-xs sm:text-sm text-slate-800 leading-relaxed font-medium">
          &ldquo;The officer demonstrates high competency in Data Visualization (88%), but requires targeted capacity building in Sampling Methods to meet official statistical standards.&rdquo;
        </p>

        <div className="pt-2 border-t border-blue-100/80 flex flex-wrap items-center gap-4 text-[11px] text-slate-600">
          <span className="flex items-center gap-1">
            <Flame className="w-3.5 h-3.5 text-rose-500" />
            Primary Deficit: Multi-stage Neyman allocation &amp; variance estimation
          </span>
          <span className="flex items-center gap-1">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
            Cadre Strength: Data Visualization &amp; Official Dissemination (88%)
          </span>
        </div>
      </div>

      {/* Visual Competency Chart & Detailed Cards Grid */}
      <div className="grid lg:grid-cols-12 gap-6">
        {/* Left: Visual Competency Comparison Chart */}
        <div className="lg:col-span-5 bg-white rounded-xl p-5 border border-slate-200 shadow-xs space-y-5">
          <div>
            <h3 className="text-sm font-bold text-slate-900 flex items-center justify-between">
              <span>Competency vs Cadre Benchmark</span>
              <span className="text-xs font-normal text-slate-500">Target: 75–80%</span>
            </h3>
            <p className="text-[11px] text-slate-500 mt-0.5">
              Comparison between current officer score and required MoSPI benchmark.
            </p>
          </div>

          {/* Bar Comparison Chart */}
          <div className="space-y-4 pt-1">
            {competencies.map((c) => {
              const gap = c.benchmarkScore - c.score;
              return (
                <div key={c.id} className="p-3 bg-slate-50 rounded-lg border border-slate-100 space-y-1.5">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-semibold text-slate-800">{c.name}</span>
                    <div className="flex items-center gap-1.5">
                      <span className="font-bold text-slate-900">{c.score}%</span>
                      <span className="text-slate-400">/</span>
                      <span className="text-slate-500 text-[11px]">Target {c.benchmarkScore}%</span>
                    </div>
                  </div>

                  {/* Dual Bar Track */}
                  <div className="relative w-full bg-slate-200 rounded-full h-3.5 overflow-hidden">
                    {/* Benchmark marker */}
                    <div
                      className="absolute top-0 bottom-0 w-0.5 bg-slate-500 z-10"
                      style={{ left: `${c.benchmarkScore}%` }}
                      title={`Cadre Benchmark: ${c.benchmarkScore}%`}
                    />
                    <div
                      className={`h-3.5 rounded-full transition-all duration-500 ${
                        c.status === 'Strong'
                          ? 'bg-emerald-600'
                          : c.status === 'Needs Improvement'
                          ? 'bg-amber-500'
                          : 'bg-rose-500'
                      }`}
                      style={{ width: `${c.score}%` }}
                    />
                  </div>

                  <div className="flex items-center justify-between text-[10px]">
                    <span
                      className={`font-semibold ${
                        gap > 0 ? 'text-rose-600' : 'text-emerald-600'
                      }`}
                    >
                      {gap > 0 ? `Gap: -${gap}% deficit` : `Exceeds target by +${Math.abs(gap)}%`}
                    </span>
                    <span className="text-slate-400">
                      Cadre Priority: {c.priority}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="p-3 bg-slate-50 rounded-lg border border-slate-100 text-xs text-slate-600 space-y-1">
            <div className="font-semibold text-slate-800 flex items-center gap-1">
              <FileCheck className="w-3.5 h-3.5 text-blue-600" />
              <span>National Statistical Training Guideline</span>
            </div>
            <p className="text-[11px] text-slate-500 leading-normal">
              Officers below 50% in Sampling Methods must complete an accredited iGOT refresher module prior to official field survey deployment.
            </p>
          </div>
        </div>

        {/* Right: Detailed Competency Diagnosis Cards */}
        <div className="lg:col-span-7 space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-bold text-slate-900">
              Diagnostic Breakdown by Knowledge Domain
            </h3>
            <span className="text-[11px] text-slate-400">
              4 Evaluated Competencies
            </span>
          </div>

          <div className="space-y-3">
            {competencies.map((c) => {
              const isGap = c.status === 'Major Gap';
              const isModerate = c.status === 'Needs Improvement';

              return (
                <div
                  key={c.id}
                  className={`bg-white rounded-xl p-5 border transition-all ${
                    isGap
                      ? 'border-rose-300 shadow-xs'
                      : isModerate
                      ? 'border-amber-200'
                      : 'border-slate-200'
                  }`}
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                    <div className="flex items-center gap-2">
                      <h4 className="text-sm font-bold text-slate-900">
                        {c.name}
                      </h4>
                      {isGap ? (
                        <span className="text-[10px] font-bold text-rose-700 bg-rose-100 px-2 py-0.5 rounded uppercase">
                          Major Gap
                        </span>
                      ) : isModerate ? (
                        <span className="text-[10px] font-bold text-amber-700 bg-amber-100 px-2 py-0.5 rounded uppercase">
                          Needs Review
                        </span>
                      ) : (
                        <span className="text-[10px] font-bold text-green-700 bg-green-100 px-2 py-0.5 rounded uppercase">
                          Target Achieved
                        </span>
                      )}
                    </div>

                    <div className="text-xs">
                      <span className="text-slate-500">Cadre Priority: </span>
                      <strong
                        className={`font-semibold ${
                          c.priority === 'High'
                            ? 'text-rose-600'
                            : c.priority === 'Medium'
                            ? 'text-amber-600'
                            : 'text-emerald-600'
                        }`}
                      >
                        {c.priority}
                      </strong>
                    </div>
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed mb-3">
                    {c.description}
                  </p>

                  <div className="p-3 bg-slate-50 rounded-lg border border-slate-100 space-y-1 mb-3">
                    <div className="text-[11px] font-semibold text-slate-700 uppercase tracking-wide">
                      AI Diagnostic Details:
                    </div>
                    <p className="text-xs text-slate-600 leading-normal">
                      {c.gapAnalysis}
                    </p>
                  </div>

                  <div className="flex items-center justify-between pt-2 border-t border-slate-100 text-xs">
                    <span className="text-slate-500 text-[11px]">
                      Recommended: <strong className="text-slate-700">{c.recommendedAction}</strong>
                    </span>

                    {isGap ? (
                      <button
                        onClick={() => onNavigate('recommendations')}
                        className="bg-rose-600 hover:bg-rose-700 text-white font-semibold text-xs px-3 py-1.5 rounded transition-colors flex items-center gap-1 shadow-xs"
                      >
                        <span>Fix This Gap</span>
                        <ArrowRight className="w-3 h-3" />
                      </button>
                    ) : (
                      <button
                        onClick={() => onNavigate('recommendations')}
                        className="text-blue-600 hover:text-blue-700 font-semibold text-xs flex items-center gap-1"
                      >
                        <span>Explore Courses &rarr;</span>
                      </button>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
