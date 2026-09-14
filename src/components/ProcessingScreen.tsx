import React, { useEffect, useState } from 'react';
import {
  UploadCloud,
  FileText,
  Brain,
  Sparkles,
  CheckCircle2,
  Cpu,
  ShieldCheck
} from 'lucide-react';

interface ProcessingScreenProps {
  onComplete: () => void;
  fileName?: string;
}

interface StepInfo {
  id: number;
  label: string;
  detail: string;
  icon: React.ElementType;
}

const pipelineSteps: StepInfo[] = [
  {
    id: 1,
    label: 'Parsing PDF',
    detail: 'Optical layout analysis and text chunking from PDF sections...',
    icon: FileText,
  },
  {
    id: 2,
    label: 'Extracting Statistical Concepts',
    detail: 'Semantic embeddings mapped to MoSPI statistical ontology...',
    icon: Sparkles,
  },
  {
    id: 3,
    label: 'Identifying Competency Gaps',
    detail: 'Cross-referencing learner profile: Sampling Methods (42% critical gap)...',
    icon: Brain,
  },
  {
    id: 4,
    label: 'Formulating Questions',
    detail: 'Synthesizing 4-option MCQs calibrated for Statistical Officers...',
    icon: Cpu,
  },
  {
    id: 5,
    label: 'Generating Distractors',
    detail: 'Crafting plausible statistical distractors and boundary condition cases...',
    icon: UploadCloud,
  },
  {
    id: 6,
    label: 'Finalizing Quiz',
    detail: 'Verifying single-key correctness, distractors, and official explanations...',
    icon: ShieldCheck,
  },
];

const extractedConcepts = [
  'Stratified Sampling',
  'Homogeneous Strata',
  'Neyman Optimum Allocation',
  'First Stage Units (FSUs)',
  'Finite Population Correction',
  'Design Effect (Deff)',
  'Non-Sampling Errors',
  'Cluster Sampling Variance'
];

export const ProcessingScreen: React.FC<ProcessingScreenProps> = ({
  onComplete,
  fileName = 'Sampling_Methods.pdf',
}) => {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [revealedConcepts, setRevealedConcepts] = useState<string[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStepIndex((prev) => {
        if (prev < pipelineSteps.length - 1) {
          return prev + 1;
        } else {
          clearInterval(interval);
          setTimeout(() => {
            onComplete();
          }, 700);
          return prev;
        }
      });
    }, 650);

    return () => clearInterval(interval);
  }, [onComplete]);

  useEffect(() => {
    if (currentStepIndex >= 3) {
      setRevealedConcepts(extractedConcepts.slice(0, (currentStepIndex - 2) * 3));
    }
  }, [currentStepIndex]);

  const progressPercent = Math.round(
    ((currentStepIndex + 1) / pipelineSteps.length) * 100
  );

  return (
    <div className="max-w-3xl mx-auto space-y-6 py-6">
      {/* Container Header */}
      <div className="bg-white rounded-xl border border-slate-200 shadow-xs p-6 sm:p-7 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="flex items-center space-x-2">
              <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
              <span className="text-[10px] text-blue-600 font-bold uppercase tracking-widest">
                Real-Time AI Pipeline
              </span>
            </div>
            <h1 className="text-xl font-bold text-slate-900 tracking-tight">
              Synthesizing Learning Material
            </h1>
            <p className="text-xs text-slate-500">
              Source: <strong className="text-slate-800">{fileName}</strong> • Aligned to MoSPI SSS Cadre
            </p>
          </div>

          <div className="sm:text-right space-y-1 shrink-0">
            <span className="text-xs font-bold text-slate-800">
              {progressPercent}% Completed
            </span>
            <div className="w-36 bg-slate-100 rounded-full h-2 overflow-hidden">
              <div
                className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          </div>
        </div>

        {/* 6 Steps List */}
        <div className="space-y-2.5 pt-2">
          {pipelineSteps.map((step, idx) => {
            const isCompleted = idx < currentStepIndex;
            const isCurrent = idx === currentStepIndex;
            const Icon = step.icon;

            return (
              <div
                key={step.id}
                className={`p-3 rounded-lg border text-xs flex items-center justify-between transition-all ${
                  isCurrent
                    ? 'bg-blue-50/70 border-blue-200 text-blue-950 font-medium'
                    : isCompleted
                    ? 'bg-slate-50 border-slate-200 text-slate-800'
                    : 'bg-slate-50/40 border-slate-100 text-slate-400'
                }`}
              >
                <div className="flex items-center space-x-3 min-w-0">
                  <div
                    className={`w-7 h-7 rounded flex items-center justify-center font-bold text-xs shrink-0 ${
                      isCurrent
                        ? 'bg-blue-600 text-white'
                        : isCompleted
                        ? 'bg-emerald-600 text-white'
                        : 'bg-slate-200 text-slate-500'
                    }`}
                  >
                    {isCompleted ? (
                      <CheckCircle2 className="w-4 h-4" />
                    ) : (
                      <Icon className="w-3.5 h-3.5" />
                    )}
                  </div>
                  <div className="truncate">
                    <span className="font-semibold block truncate">{step.label}</span>
                    <span className="text-[11px] text-slate-500 block truncate">{step.detail}</span>
                  </div>
                </div>

                <div className="shrink-0 text-right pl-2">
                  {isCompleted && (
                    <span className="text-[10px] font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded uppercase">
                      Done
                    </span>
                  )}
                  {isCurrent && (
                    <span className="inline-block w-4 h-4 border-2 border-blue-600 border-t-transparent rounded-full animate-spin" />
                  )}
                  {!isCompleted && !isCurrent && (
                    <span className="text-[10px] text-slate-400 uppercase">
                      Queued
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Extracted Concepts Stream */}
        {revealedConcepts.length > 0 && (
          <div className="pt-4 border-t border-slate-100 space-y-2">
            <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block">
              Extracted Statistical Entities
            </span>
            <div className="flex flex-wrap gap-1.5">
              {revealedConcepts.map((concept, idx) => (
                <span
                  key={idx}
                  className="text-[11px] bg-slate-100 text-slate-700 px-2.5 py-1 rounded border border-slate-200 font-medium"
                >
                  {concept}
                </span>
              ))}
            </div>
          </div>
        )}

        <div className="pt-2 text-center">
          <button
            onClick={onComplete}
            className="text-xs text-blue-600 hover:underline font-semibold"
          >
            Skip Animation &rarr; Launch Quiz Directly
          </button>
        </div>
      </div>
    </div>
  );
};
