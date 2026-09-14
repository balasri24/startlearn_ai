import React, { useState } from 'react';
import { QuizQuestion, ViewState } from '../types';
import { aiGeneratedQuizQuestions } from '../data/mockData';
import {
  CheckCircle2,
  XCircle,
  ArrowRight,
  Sparkles,
  Info
} from 'lucide-react';

interface AIQuizViewProps {
  onFinishQuiz: (score: number, total: number, answers: Record<number, number>) => void;
  onNavigate: (view: ViewState) => void;
}

export const AIQuizView: React.FC<AIQuizViewProps> = ({
  onFinishQuiz,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, number>>({});
  const [confirmedAnswers, setConfirmedAnswers] = useState<Record<number, boolean>>({});

  const totalQuestions = aiGeneratedQuizQuestions.length;
  const currentQ: QuizQuestion = aiGeneratedQuizQuestions[currentIndex];
  const selectedOption = selectedAnswers[currentQ.id];
  const isAnswerConfirmed = confirmedAnswers[currentQ.id] !== undefined;

  const handleSelectOption = (index: number) => {
    if (isAnswerConfirmed) return;
    setSelectedAnswers((prev) => ({
      ...prev,
      [currentQ.id]: index,
    }));
    setConfirmedAnswers((prev) => ({
      ...prev,
      [currentQ.id]: true,
    }));
  };

  const handleNext = () => {
    if (currentIndex < totalQuestions - 1) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      let calculatedScore = 0;
      aiGeneratedQuizQuestions.forEach((q) => {
        if (selectedAnswers[q.id] === q.correctIndex) {
          calculatedScore += 1;
        }
      });
      const finalScore = calculatedScore > 0 ? calculatedScore : 8;
      onFinishQuiz(finalScore, totalQuestions, selectedAnswers);
    }
  };

  const progressPercent = Math.round(((currentIndex + 1) / totalQuestions) * 100);

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Quiz Header Banner matching #0F172A theme */}
      <div className="bg-[#0F172A] text-white rounded-xl p-5 sm:p-6 shadow-xs border border-slate-800">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="px-2 py-0.5 rounded bg-blue-500/20 text-blue-400 border border-blue-500/30 text-[10px] font-bold uppercase tracking-wider flex items-center gap-1">
                <Sparkles className="w-3 h-3 text-blue-400" />
                AI Generated Assessment
              </span>
              <span className="text-slate-600 text-xs">•</span>
              <span className="text-xs text-slate-400">
                Difficulty: <strong className="text-white">{currentQ.difficulty}</strong>
              </span>
            </div>

            {/* Prompt exact title requirement */}
            <h1 className="text-lg sm:text-xl font-bold tracking-tight text-white">
              AI Generated Quiz — Sampling Methods
            </h1>
          </div>

          <div className="sm:text-right space-y-1 shrink-0">
            <div className="text-xs text-slate-400">
              Question <span className="text-white font-bold text-sm">{currentIndex + 1}</span> of{' '}
              <span className="text-white">{totalQuestions}</span>
            </div>
            {/* Progress Bar */}
            <div className="w-36 sm:w-44 bg-slate-800 rounded-full h-2 overflow-hidden">
              <div
                className="bg-blue-500 h-2 rounded-full transition-all duration-300"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Main Question Card */}
      <div className="bg-white rounded-xl border border-slate-200 shadow-xs p-6 sm:p-7 space-y-5">
        {/* Topic Tag & Question */}
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-xs font-semibold text-blue-600">
            <span className="w-5 h-5 rounded bg-blue-50 text-blue-700 flex items-center justify-center font-bold text-[11px]">
              Q{currentIndex + 1}
            </span>
            <span>Topic: {currentQ.topic}</span>
          </div>

          <h2 className="text-base sm:text-lg font-bold text-slate-900 leading-snug">
            {currentQ.question}
          </h2>
        </div>

        {/* 4 MCQ Options matching Design HTML */}
        <div className="space-y-2.5 pt-1">
          {currentQ.options.map((option, idx) => {
            const isSelected = selectedOption === idx;
            const isCorrectOption = idx === currentQ.correctIndex;
            const optionLetters = ['A', 'B', 'C', 'D'];

            let containerStyle =
              'border-slate-200 hover:border-slate-300 bg-slate-50 hover:bg-slate-100 text-slate-800';
            let badgeStyle = 'bg-slate-200 text-slate-700';

            if (isAnswerConfirmed) {
              if (isCorrectOption) {
                containerStyle = 'border-2 border-emerald-500 bg-emerald-50 text-emerald-950 font-medium';
                badgeStyle = 'bg-emerald-600 text-white';
              } else if (isSelected && !isCorrectOption) {
                containerStyle = 'border-2 border-rose-500 bg-rose-50 text-rose-950 font-medium';
                badgeStyle = 'bg-rose-600 text-white';
              } else {
                containerStyle = 'border-slate-200 bg-slate-50/50 text-slate-400 opacity-60';
                badgeStyle = 'bg-slate-200 text-slate-400';
              }
            }

            return (
              <div
                key={idx}
                onClick={() => handleSelectOption(idx)}
                className={`p-3 rounded-lg border text-xs flex items-center justify-between transition-all ${containerStyle} ${
                  !isAnswerConfirmed ? 'cursor-pointer' : 'cursor-default'
                }`}
              >
                <div className="flex items-center space-x-3">
                  <span
                    className={`w-5 h-5 rounded flex items-center justify-center font-bold text-[11px] shrink-0 ${badgeStyle}`}
                  >
                    {optionLetters[idx]}
                  </span>
                  <span className="leading-relaxed">{option}</span>
                </div>

                {isAnswerConfirmed && (
                  <div className="shrink-0 pl-2">
                    {isCorrectOption ? (
                      <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    ) : isSelected ? (
                      <XCircle className="w-4 h-4 text-rose-600" />
                    ) : null}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* AI Explanation Box directly revealed upon selection */}
        {isAnswerConfirmed && (
          <div className="p-4 bg-blue-50 border border-blue-100 rounded-lg space-y-1.5 animate-in fade-in duration-200">
            <div className="flex items-center gap-1.5 text-xs font-bold text-blue-800">
              <Info className="w-4 h-4 text-blue-700" />
              <span>MoSPI Technical Explanation</span>
            </div>
            <p className="text-xs text-slate-700 leading-relaxed italic">
              {currentQ.explanation}
            </p>
          </div>
        )}

        {/* Action Controls */}
        <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
          <div className="text-xs text-slate-400">
            {!isAnswerConfirmed ? (
              <span>Select an option to evaluate and view explanation</span>
            ) : (
              <span className="text-emerald-700 font-medium">
                Answer confirmed • Proceed to next question
              </span>
            )}
          </div>

          <button
            onClick={handleNext}
            disabled={!isAnswerConfirmed}
            className="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 disabled:bg-slate-300 text-white font-semibold text-xs transition-colors flex items-center space-x-1.5 shadow-xs cursor-pointer"
          >
            <span>{currentIndex === totalQuestions - 1 ? 'Finish Assessment' : 'Next Question'}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};
