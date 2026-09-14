import React, { useState } from 'react';
import { ViewState } from '../types';
import {
  BookOpen,
  FileQuestion,
  ChevronRight,
  CheckCircle2,
  AlertCircle,
  ArrowLeft,
  Sparkles,
  Download,
  Building2,
  FileText
} from 'lucide-react';

interface LearningViewProps {
  onNavigate: (view: ViewState) => void;
  onGenerateQuiz?: (topic: string) => void;
}

export const LearningView: React.FC<LearningViewProps> = ({
  onNavigate,
  onGenerateQuiz,
}) => {
  const [activeSection, setActiveSection] = useState<number>(5); // default to Section 5: Stratified Sampling (Primary Gap)

  const sections = [
    {
      id: 1,
      title: 'Introduction to Probability Sampling',
      status: 'Completed',
      duration: '35 mins',
      summary: 'Distinction between complete enumeration (Census) and sample surveys in official statistics. Probability theory foundation and calculation of sampling weights in large-scale socio-economic inquiries.',
    },
    {
      id: 2,
      title: 'Population vs Sample',
      status: 'Completed',
      duration: '40 mins',
      summary: 'Defining target population vs survey population. Understanding finite population parameters (mean, total, proportion) and their corresponding unbiased sample estimators.',
    },
    {
      id: 3,
      title: 'Sampling Frame',
      status: 'Completed',
      duration: '30 mins',
      summary: 'Construction and maintenance of sampling frames. Use of Census village lists for rural sectors and Urban Frame Survey (UFS) blocks for urban sectors in MoSPI operations.',
    },
    {
      id: 4,
      title: 'Simple Random Sampling',
      status: 'Completed',
      duration: '45 mins',
      summary: 'Mechanics of Simple Random Sampling with Replacement (SRSWR) and without Replacement (SRSWOR). Finite Population Correction (FPC) and sample variance derivations.',
    },
    {
      id: 5,
      title: 'Stratified Sampling (Primary Gap)',
      status: 'Active Remediation',
      duration: '50 mins',
      isGap: true,
      summary: 'Targeted remediation module addressing the 42% competency gap identified in the diagnostic assessment.',
    },
  ];

  const handleGenerateQuiz = () => {
    if (onGenerateQuiz) {
      onGenerateQuiz('Sampling_Methods.pdf');
    }
    onNavigate('quiz-generator');
  };

  const handleNextTopic = () => {
    if (activeSection < sections.length) {
      setActiveSection((prev) => prev + 1);
    } else {
      setActiveSection(1);
    }
  };

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      {/* Top Breadcrumb / Nav */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <button
          onClick={() => onNavigate('recommendations')}
          className="text-xs font-semibold text-slate-500 hover:text-slate-800 flex items-center gap-1 transition-colors self-start"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Recommendations</span>
        </button>

        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded bg-blue-50 text-blue-700 text-xs font-semibold border border-blue-100">
            <Building2 className="w-3 h-3 text-blue-600" />
            <span>iGOT Karmayogi Bharat Ecosystem</span>
          </span>
          <span className="text-[11px] text-slate-400">Course Code: MoSPI-STAT-201</span>
        </div>
      </div>

      {/* Course Header Banner */}
      <div className="bg-[#0F172A] rounded-xl p-6 text-white border border-slate-800 shadow-xs">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          <div className="space-y-1.5 max-w-2xl">
            <div className="flex items-center gap-2">
              <span className="px-2 py-0.5 rounded bg-blue-500/20 text-blue-400 border border-blue-500/30 text-[10px] font-bold uppercase tracking-wider">
                Interactive Learning Module
              </span>
              <span className="text-slate-500 text-xs">•</span>
              <span className="text-xs text-slate-300">
                Provider: <strong className="text-white">iGOT Karmayogi</strong>
              </span>
            </div>

            {/* Prompt exact Course title */}
            <h1 className="text-xl sm:text-2xl font-bold tracking-tight text-white">
              Basics of Sampling Methods
            </h1>
            <p className="text-xs text-slate-300 leading-relaxed">
              Capacity building module for Statistical Officers in the Subordinate Statistical Service (SSS). Curated by the National Statistical Systems Training Academy (NSSTA).
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={handleGenerateQuiz}
              className="bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs px-4 py-2.5 rounded-lg shadow-xs transition-colors flex items-center gap-1.5"
            >
              <FileQuestion className="w-4 h-4" />
              <span>Generate Quiz from Material</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Content Grid: Sections List (Left) and Study Material (Right) */}
      <div className="grid lg:grid-cols-12 gap-6">
        {/* Left Column: Sections list (1 to 5) */}
        <div className="lg:col-span-4 bg-white rounded-xl border border-slate-200 shadow-xs p-5 space-y-4">
          <div className="flex items-center justify-between pb-2 border-b border-slate-100">
            <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
              Course Sections
            </h3>
            <span className="text-[11px] text-slate-500">5 Modules</span>
          </div>

          <div className="space-y-2">
            {sections.map((section) => {
              const isActive = activeSection === section.id;
              const isGapSection = section.isGap;

              return (
                <div
                  key={section.id}
                  onClick={() => setActiveSection(section.id)}
                  className={`p-3 rounded-lg border text-xs cursor-pointer transition-all ${
                    isActive
                      ? 'bg-blue-50/80 border-2 border-blue-600 text-blue-950 font-semibold shadow-2xs'
                      : 'bg-slate-50 hover:bg-slate-100/80 border-slate-200 text-slate-700'
                  }`}
                >
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex items-start gap-2.5">
                      <span
                        className={`w-5 h-5 rounded flex items-center justify-center font-bold text-[11px] shrink-0 mt-0.5 ${
                          isActive
                            ? 'bg-blue-600 text-white'
                            : isGapSection
                            ? 'bg-rose-100 text-rose-700'
                            : 'bg-slate-200 text-slate-700'
                        }`}
                      >
                        {section.id}
                      </span>
                      <div>
                        <div className="flex items-center gap-1.5">
                          <h4 className="text-xs font-bold leading-snug">
                            {section.title}
                          </h4>
                        </div>
                        <span className="text-[10px] text-slate-400 mt-0.5 block">
                          Duration: {section.duration}
                        </span>
                      </div>
                    </div>

                    {isGapSection && (
                      <span className="text-[9px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded bg-rose-100 text-rose-700 shrink-0">
                        Gap
                      </span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="pt-3 border-t border-slate-100 text-[11px] text-slate-500 space-y-1">
            <p className="font-semibold text-slate-700">Official Curriculum Note:</p>
            <p className="leading-relaxed">
              Section 5 contains the core material extracted into <strong>Sampling_Methods.pdf</strong> for diagnostic MCQ synthesis.
            </p>
          </div>
        </div>

        {/* Right Column: Study Material / Summary for Stratified Sampling */}
        <div className="lg:col-span-8 space-y-5">
          {/* Main Study Material Card */}
          <div className="bg-white rounded-xl border border-slate-200 shadow-xs p-6 sm:p-7 space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-100">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-bold text-rose-700 bg-rose-50 border border-rose-200 px-2 py-0.5 rounded uppercase tracking-wider">
                    Section {activeSection} of 5 • Focus Remediation
                  </span>
                  <span className="text-[11px] text-slate-400">MoSPI NSSTA Handbook</span>
                </div>
                <h2 className="text-lg sm:text-xl font-bold text-slate-900">
                  {sections.find((s) => s.id === activeSection)?.title}
                </h2>
              </div>

              <div className="flex items-center gap-2 self-start sm:self-auto">
                <span className="text-xs text-slate-500 bg-slate-50 px-2.5 py-1 rounded border border-slate-200 font-medium">
                  Verified by CBC
                </span>
              </div>
            </div>

            {/* Prompt-mandated study material / summary for Stratified Sampling */}
            <div className="space-y-5 text-slate-700 text-xs sm:text-sm leading-relaxed">
              <div className="p-4 bg-blue-50 border border-blue-100 rounded-lg space-y-1.5">
                <div className="text-xs font-bold text-blue-900 uppercase tracking-wider flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-blue-600" />
                  <span>Key Study Material &amp; Summary</span>
                </div>
                <p className="text-xs text-blue-800">
                  Essential theoretical principles required for Indian Official Statistical surveys (NSS, PLFS, ASI):
                </p>
              </div>

              {/* Three Specific Prompt Requirements */}
              <div className="grid sm:grid-cols-3 gap-4">
                {/* 1. Purpose */}
                <div className="p-4 bg-slate-50 rounded-lg border border-slate-200 space-y-2">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-2 py-0.5 rounded border border-blue-100 block w-fit">
                    01 • Core Purpose
                  </span>
                  <h3 className="text-xs font-bold text-slate-900">
                    Divide population into homogeneous subgroups
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Partitions a heterogeneous population into mutually exclusive, internally homogeneous strata (e.g. agro-climatic zones, household enterprise income tiers).
                  </p>
                </div>

                {/* 2. Benefits */}
                <div className="p-4 bg-slate-50 rounded-lg border border-slate-200 space-y-2">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-100 block w-fit">
                    02 • Direct Benefits
                  </span>
                  <h3 className="text-xs font-bold text-slate-900">
                    Higher precision, reduced sample error
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Guarantees lower sampling variance than simple random sampling of identical size. Provides quantifiable bounds for sub-population parameters.
                  </p>
                </div>

                {/* 3. Official Application */}
                <div className="p-4 bg-slate-50 rounded-lg border border-slate-200 space-y-2">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-indigo-700 bg-indigo-50 px-2 py-0.5 rounded border border-indigo-100 block w-fit">
                    03 • MoSPI Application
                  </span>
                  <h3 className="text-xs font-bold text-slate-900">
                    Used in official surveys
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Applied nationwide in Periodic Labour Force Survey (PLFS), Annual Survey of Industries (ASI), and Consumer Expenditure Surveys.
                  </p>
                </div>
              </div>

              {/* Technical Detail Excerpt */}
              <div className="space-y-3 pt-2">
                <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                  Neyman Optimum Allocation Formula &amp; Mechanics
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  When stratum sampling costs are uniform, sample size for stratum <em>h</em> is chosen proportional to the product of stratum size <em>N<sub>h</sub></em> and stratum standard deviation <em>S<sub>h</sub></em>:
                </p>
                <div className="p-3 bg-slate-900 text-slate-100 rounded-lg font-mono text-xs overflow-x-auto">
                  <code>n_h = n * (N_h * S_h) / Σ(N_i * S_i)</code>
                </div>
                <p className="text-xs text-slate-500 italic">
                  This mathematical relationship ensures that strata with greater internal diversity receive a proportionately larger share of the sample, minimizing the variance of the estimated national total.
                </p>
              </div>

              {/* Linked Material Reference */}
              <div className="p-3.5 bg-slate-50 rounded-lg border border-slate-200 flex items-center justify-between gap-3 text-xs">
                <div className="flex items-center gap-2.5">
                  <FileText className="w-5 h-5 text-red-600 shrink-0" />
                  <div>
                    <span className="font-bold text-slate-800 block">
                      Sampling_Methods.pdf (Chapter 4)
                    </span>
                    <span className="text-[11px] text-slate-500">
                      MoSPI Training Compendium • Official Study Material
                    </span>
                  </div>
                </div>
                <span className="text-[11px] font-semibold text-blue-600 bg-blue-50 px-2 py-1 rounded border border-blue-100 shrink-0">
                  Ready for AI Quiz
                </span>
              </div>
            </div>

            {/* Prompt-mandated Action Buttons: Generate Quiz from Material | Next Topic */}
            <div className="pt-4 border-t border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <button
                type="button"
                onClick={handleGenerateQuiz}
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs px-5 py-2.5 rounded-lg shadow-xs transition-colors flex items-center justify-center gap-2"
              >
                <FileQuestion className="w-4 h-4" />
                <span>Generate Quiz from Material</span>
              </button>

              <button
                type="button"
                onClick={handleNextTopic}
                className="bg-white hover:bg-slate-50 text-slate-700 border border-slate-300 font-semibold text-xs px-4 py-2.5 rounded-lg shadow-xs transition-colors flex items-center justify-center gap-1.5"
              >
                <span>Next Topic</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
