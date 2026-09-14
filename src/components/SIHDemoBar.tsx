import React from 'react';
import { ViewState } from '../types';
import { demoSteps } from '../data/mockData';
import { ChevronRight, Check, Play } from 'lucide-react';

interface SIHDemoBarProps {
  currentView: ViewState;
  onNavigate: (view: ViewState) => void;
  onNextStep: () => void;
  onResetJourney: () => void;
}

export const SIHDemoBar: React.FC<SIHDemoBarProps> = ({
  currentView,
  onNavigate,
  onNextStep,
}) => {
  const currentStepIndex = demoSteps.findIndex((s) => s.id === currentView);
  const currentStep = demoSteps[currentStepIndex] || demoSteps[0];
  const isLastStep = currentStepIndex === demoSteps.length - 1;

  return (
    <div className="bg-[#0F172A] border-b border-slate-800 text-white px-4 sm:px-8 py-2.5 select-none">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-2.5">
        {/* Left Indicator */}
        <div className="flex items-center space-x-2 shrink-0">
          <span className="text-[10px] text-blue-400 font-bold uppercase tracking-widest bg-blue-600/10 px-2 py-0.5 rounded border border-blue-500/30">
            SIH Walkthrough
          </span>
          <span className="text-xs text-slate-300">
            Step {currentStep.stepNumber} of 10: <strong className="text-white font-semibold">{currentStep.label}</strong>
          </span>
        </div>

        {/* Step Buttons & Next CTA */}
        <div className="flex items-center space-x-1.5 overflow-x-auto py-0.5 scrollbar-none">
          <div className="flex items-center space-x-1">
            {demoSteps.map((step, idx) => {
              const isCurrent = step.id === currentView;
              const isPassed = idx < currentStepIndex;

              return (
                <button
                  key={step.id}
                  onClick={() => onNavigate(step.id)}
                  title={`${step.stepNumber}. ${step.label} — ${step.description}`}
                  className={`text-[11px] font-medium px-2 py-1 rounded transition-colors flex items-center space-x-1 whitespace-nowrap ${
                    isCurrent
                      ? 'bg-blue-600 text-white font-semibold shadow-xs'
                      : isPassed
                      ? 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                      : 'bg-slate-900/80 text-slate-500 hover:bg-slate-800 hover:text-slate-300'
                  }`}
                >
                  {isPassed ? (
                    <Check className="w-3 h-3 text-emerald-400" />
                  ) : (
                    <span className="w-3.5 h-3.5 rounded-full bg-slate-700/60 text-[9px] flex items-center justify-center font-bold">
                      {step.stepNumber}
                    </span>
                  )}
                  <span className="hidden xl:inline">{step.label}</span>
                </button>
              );
            })}
          </div>

          {!isLastStep ? (
            <button
              onClick={onNextStep}
              className="ml-2 bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold px-3 py-1 rounded shadow-xs transition-colors flex items-center space-x-1 shrink-0"
            >
              <span>Next</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          ) : (
            <button
              onClick={() => onNavigate('dashboard')}
              className="ml-2 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold px-3 py-1 rounded shadow-xs flex items-center space-x-1 shrink-0"
            >
              <Play className="w-3.5 h-3.5" />
              <span>Explore Dashboard</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
