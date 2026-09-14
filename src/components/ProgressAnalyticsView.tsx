import React from 'react';
import { Competency, UserProfile, ViewState } from '../types';
import {
  TrendingUp,
  Award,
  CheckCircle2,
  FileCheck
} from 'lucide-react';

interface ProgressAnalyticsViewProps {
  user: UserProfile;
  competencies: Competency[];
  onNavigate: (view: ViewState) => void;
}

export const ProgressAnalyticsView: React.FC<ProgressAnalyticsViewProps> = ({
  user,
  competencies,
  onNavigate,
}) => {
  return (
    <div className="max-w-6xl mx-auto space-y-6">
      {/* Header */}
      <div>
        <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-blue-50 text-blue-700 text-xs font-semibold border border-blue-100 mb-1.5">
          <TrendingUp className="w-3.5 h-3.5 text-blue-600" />
          <span>Cadre Competency Analytics &amp; Audit Trail</span>
        </div>
        <h1 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
          Learning &amp; Competency Progress
        </h1>
        <p className="text-xs text-slate-500 mt-0.5">
          Historical growth trajectory, assessment records, and official certification milestones.
        </p>
      </div>

      {/* Stats row */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white rounded-xl p-4 border border-slate-200 shadow-xs">
          <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block">
            Overall Readiness
          </span>
          <div className="text-2xl sm:text-3xl font-bold text-slate-900 mt-0.5">
            {user.overallScore}%
          </div>
          <span className="text-[11px] font-semibold text-green-700 mt-0.5 block">
            +9% growth this cycle
          </span>
        </div>

        <div className="bg-white rounded-xl p-4 border border-slate-200 shadow-xs">
          <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block">
            Assessments Taken
          </span>
          <div className="text-2xl sm:text-3xl font-bold text-slate-900 mt-0.5">
            4
          </div>
          <span className="text-[11px] text-slate-400 mt-0.5 block">
            Last evaluated today
          </span>
        </div>

        <div className="bg-white rounded-xl p-4 border border-slate-200 shadow-xs">
          <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block">
            iGOT Modules Done
          </span>
          <div className="text-2xl sm:text-3xl font-bold text-blue-600 mt-0.5">
            {user.modulesCompleted} / {user.totalModules}
          </div>
          <span className="text-[11px] text-blue-600 mt-0.5 block">
            Sampling Methods verified
          </span>
        </div>

        <div className="bg-white rounded-xl p-4 border border-slate-200 shadow-xs">
          <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block">
            Cadre Rating
          </span>
          <div className="text-2xl sm:text-3xl font-bold text-amber-600 mt-0.5">
            Grade A
          </div>
          <span className="text-[11px] text-slate-400 mt-0.5 block">
            Field Supervisory Qualified
          </span>
        </div>
      </div>

      {/* Competency Trajectory Table */}
      <div className="bg-white rounded-xl border border-slate-200 shadow-xs overflow-hidden">
        <div className="p-4 border-b border-slate-200 flex items-center justify-between">
          <h3 className="text-sm font-bold text-slate-900">
            Competency Milestone Log
          </h3>
          <span className="text-xs text-slate-500">
            Synchronized with NSSTA database
          </span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-50 border-b border-slate-200 text-slate-600 font-semibold uppercase text-[10px] tracking-wider">
              <tr>
                <th className="py-3 px-4">Competency Domain</th>
                <th className="py-3 px-4">Initial Diagnostic</th>
                <th className="py-3 px-4">Current Score</th>
                <th className="py-3 px-4">Cadre Target</th>
                <th className="py-3 px-4">Status</th>
                <th className="py-3 px-4">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {competencies.map((c) => (
                <tr key={c.id} className="hover:bg-slate-50/60 transition-colors">
                  <td className="py-3.5 px-4 font-semibold text-slate-900">
                    {c.name}
                  </td>
                  <td className="py-3.5 px-4 text-slate-500">
                    {c.id === 'comp-sampling' ? '42%' : `${c.score - 5}%`}
                  </td>
                  <td className="py-3.5 px-4 font-bold text-slate-900">
                    {c.score}%
                  </td>
                  <td className="py-3.5 px-4 text-slate-500">
                    {c.benchmarkScore}%
                  </td>
                  <td className="py-3.5 px-4">
                    {c.status === 'Strong' ? (
                      <span className="text-[10px] font-bold text-green-700 bg-green-100 px-2 py-0.5 rounded uppercase">
                        Achieved
                      </span>
                    ) : c.status === 'Needs Improvement' ? (
                      <span className="text-[10px] font-bold text-amber-700 bg-amber-100 px-2 py-0.5 rounded uppercase">
                        On Track
                      </span>
                    ) : (
                      <span className="text-[10px] font-bold text-rose-700 bg-rose-100 px-2 py-0.5 rounded uppercase">
                        Deficit
                      </span>
                    )}
                  </td>
                  <td className="py-3.5 px-4">
                    <button
                      onClick={() => onNavigate('recommendations')}
                      className="text-blue-600 hover:text-blue-700 font-semibold text-xs"
                    >
                      View Modules &rarr;
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Activity Timeline Card */}
      <div className="bg-white rounded-xl border border-slate-200 shadow-xs p-5 space-y-4">
        <h3 className="text-sm font-bold text-slate-900">
          Recent Audit Trail
        </h3>

        <div className="space-y-3">
          <div className="flex items-start gap-3 p-3 bg-slate-50 rounded-lg border border-slate-100">
            <div className="w-7 h-7 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
              <CheckCircle2 className="w-4 h-4" />
            </div>
            <div>
              <p className="text-xs font-semibold text-slate-800">
                Sampling Methods AI Quiz Completed (Score: 8/10)
              </p>
              <p className="text-[11px] text-slate-500 mt-0.5">
                Competency rating adjusted from 42% to 78%. iGOT record updated.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3 p-3 bg-slate-50 rounded-lg border border-slate-100">
            <div className="w-7 h-7 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center shrink-0">
              <FileCheck className="w-4 h-4" />
            </div>
            <div>
              <p className="text-xs font-semibold text-slate-800">
                Official Baseline Competency Diagnostic Assessment
              </p>
              <p className="text-[11px] text-slate-500 mt-0.5">
                Evaluated 4 core domains against MoSPI Cadre Benchmark.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
