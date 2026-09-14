import React, { useState } from 'react';
import { AssessmentQuestion, ViewState } from '../types';
import { assessmentQuestions } from '../data/mockData';
import {
  ChevronRight,
  Clock,
  ArrowLeft,
  CheckCircle2
} from 'lucide-react';

interface CompetencyAssessmentProps {
  onComplete: () => void;
  onNavigate: (view: ViewState) => void;
}

export const CompetencyAssessment: React.FC<CompetencyAssessmentProps> = ({
  onComplete,
  onNavigate,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, number>>({});
  const [submitted, setSubmitted] = useState(false);

  const currentQ: AssessmentQuestion = assessmentQuestions[currentIndex];
  const totalQuestions = assessmentQuestions.length;
  const progressPercent = Math.round(((currentIndex + 1) / totalQuestions) * 100);
  const selectedOption = selectedAnswers[currentQ.id];

  const handleSelect = (index: number) => {
    setSelectedAnswers((prev) => ({
      ...prev,
      [currentQ.id]: index,
    }));
  };

  const handleNext = () => {
    if (currentIndex < totalQuestions - 1) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      setSubmitted(true);
      setTimeout(() => {
        onComplete();
      }, 750);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Header bar */}
      <div className="flex items-center justify-between">
        <button
          onClick={() => onNavigate('dashboard')}
          className="text-xs font-semibold text-slate-500 hover:text-slate-800 flex items-center gap-1 transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Exit to Dashboard</span>
        </button>

        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded bg-blue-50 text-blue-700 text-xs font-semibold border border-blue-100">
            <Clock className="w-3 h-3 text-blue-600" />
            <span>Official Statistical Assessment 2024</span>
          </span>
        </div>
      </div>

      {/* Main Assessment Container */}
      <div className="bg-white rounded-xl border border-slate-200 shadow-xs overflow-hidden">
        {/* Progress & Domain Header matching #0F172A theme */}
        <div className="bg-[#0F172A] text-white p-5 sm:px-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-bold text-blue-400 uppercase tracking-widest">
                Competency Domain
              </span>
              <span className="text-slate-500 text-xs">•</span>
              <span className="text-[11px] font-medium text-slate-400">
                Difficulty: {currentQ.difficulty}
              </span>
            </div>
            <h2 className="text-lg font-bold tracking-tight text-white mt-0.5">
              {currentQ.domain}
            </h2>
          </div>

          <div className="sm:text-right space-y-1 shrink-0">
            <div className="text-xs font-medium text-slate-400">
              Question <span className="text-white font-bold">{currentIndex + 1}</span> of{' '}
              <span className="text-white">{totalQuestions}</span>
            </div>
            <div className="w-36 sm:w-44 bg-slate-800 rounded-full h-2 overflow-hidden">
              <div
                className="bg-blue-500 h-2 rounded-full transition-all duration-300"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          </div>
        </div>

        {/* Question Area */}
        <div className="p-6 sm:p-7 space-y-5">
          <div className="space-y-1.5">
            <span className="text-[11px] font-bold text-blue-600 uppercase tracking-wide">
              Question Prompt
            </span>
            <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-snug">
              {currentQ.question}
            </h3>
          </div>

          {/* Options matching Clean Utility styling */}
          <div className="space-y-2.5 pt-1">
            {currentQ.options.map((option, idx) => {
              const isSelected = selectedOption === idx;
              const optionLetters = ['A', 'B', 'C', 'D'];

              return (
                <div
                  key={idx}
                  onClick={() => handleSelect(idx)}
                  className={`p-3 rounded-lg border text-xs flex items-center cursor-pointer transition-all ${
                    isSelected
                      ? 'bg-blue-50/70 border-2 border-blue-600 text-blue-950 font-medium'
                      : 'bg-slate-50 hover:bg-slate-100 border-slate-200 text-slate-800'
                  }`}
                >
                  <span
                    className={`w-5 h-5 rounded mr-3 flex items-center justify-center font-bold text-[11px] shrink-0 ${
                      isSelected
                        ? 'bg-blue-600 text-white'
                        : 'bg-slate-200 text-slate-700'
                    }`}
                  >
                    {optionLetters[idx]}
                  </span>
                  <span className="flex-1 leading-relaxed">{option}</span>
                </div>
              );
            })}
          </div>

          {/* Quick Notice */}
          <div className="p-3 bg-slate-50 border border-slate-100 rounded-lg text-[11px] text-slate-500 flex items-center justify-between">
            <span>Official NSSO assessment criteria applies. Your score influences your individualized learning path.</span>
            <span className="font-semibold text-slate-700">{progressPercent}% complete</span>
          </div>
        </div>

        {/* Actions Footer */}
        <div className="p-4 sm:px-6 bg-slate-50 border-t border-slate-200 flex items-center justify-between">
          <button
            onClick={handlePrevious}
            disabled={currentIndex === 0}
            className="px-3 py-1.5 rounded-lg border border-slate-300 text-slate-700 font-semibold text-xs hover:bg-slate-100 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
          >
            Previous
          </button>

          <div className="flex items-center space-x-2">
            {submitted ? (
              <div className="flex items-center space-x-2 text-xs font-semibold text-blue-600">
                <span className="inline-block w-4 h-4 border-2 border-blue-600 border-t-transparent rounded-full animate-spin" />
                <span>Synthesizing Competency Gaps...</span>
              </div>
            ) : (
              <button
                onClick={handleNext}
                disabled={selectedOption === undefined}
                className="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 disabled:bg-slate-300 text-white font-semibold text-xs transition-colors flex items-center space-x-1 shadow-xs"
              >
                <span>{currentIndex === totalQuestions - 1 ? 'Submit & Analyze Gaps' : 'Next Question'}</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
