import React, { useState, useRef } from 'react';
import { ViewState } from '../types';
import { samplePdfText } from '../data/mockData';
import {
  UploadCloud,
  FileText,
  Sparkles,
  ArrowRight,
  Eye,
  CheckCircle2,
  Trash2
} from 'lucide-react';

interface QuizGeneratorViewProps {
  onStartProcessing: (config: {
    fileName: string;
    numQuestions: number;
    difficulty: 'Easy' | 'Medium' | 'Hard';
    questionType: string;
  }) => void;
  onNavigate: (view: ViewState) => void;
}

export const QuizGeneratorView: React.FC<QuizGeneratorViewProps> = ({
  onStartProcessing,
  onNavigate,
}) => {
  const [selectedFileName, setSelectedFileName] = useState('Sampling_Methods.pdf');
  const [fileSize, setFileSize] = useState('2.4 MB');
  const [numQuestions, setNumQuestions] = useState<number>(10);
  const [difficulty, setDifficulty] = useState<'Easy' | 'Medium' | 'Hard'>('Medium');
  const [questionType, setQuestionType] = useState('Multiple Choice');
  const [showFilePreview, setShowFilePreview] = useState(false);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setSelectedFileName(file.name);
      setFileSize(`${(file.size / (1024 * 1024)).toFixed(1)} MB`);
    }
  };

  const handleUseExamplePdf = () => {
    setSelectedFileName('Sampling_Methods.pdf');
    setFileSize('2.4 MB');
  };

  const handleGenerate = () => {
    onStartProcessing({
      fileName: selectedFileName,
      numQuestions,
      difficulty,
      questionType,
    });
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Header */}
      <div className="space-y-1.5">
        <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-blue-50 border border-blue-100 text-blue-700 text-xs font-semibold">
          <Sparkles className="w-3.5 h-3.5 text-blue-600" />
          <span>Automated Statistical Concept Parsing</span>
        </div>

        {/* Exact page title requirement */}
        <h1 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
          AI Quiz Generator
        </h1>

        {/* Exact text requirement */}
        <p className="text-xs text-slate-500">
          Upload learning material and generate personalized MCQs automatically.
        </p>
      </div>

      <div className="bg-white rounded-xl border border-slate-200 shadow-xs p-6 sm:p-7 space-y-6">
        {/* Upload Zone matching Design HTML */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <label className="text-xs font-semibold text-slate-800 uppercase tracking-wider">
              Learning Material Source (PDF, DOCX, PPTX)
            </label>
            <button
              type="button"
              onClick={handleUseExamplePdf}
              className="text-xs font-semibold text-blue-600 hover:text-blue-700 hover:underline"
            >
              Use Example: Sampling_Methods.pdf
            </button>
          </div>

          <div
            onClick={() => fileInputRef.current?.click()}
            className="border-2 border-dashed border-slate-200 hover:border-blue-400 bg-slate-50 rounded-lg p-6 sm:p-8 text-center cursor-pointer transition-colors"
          >
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleFileChange}
              accept=".pdf,.docx,.pptx"
              className="hidden"
            />

            <div className="w-10 h-10 mx-auto bg-red-100 text-red-600 rounded flex items-center justify-center font-bold text-xs mb-2 shadow-2xs">
              PDF
            </div>

            <h3 className="text-sm font-bold text-slate-800">
              Drag and drop training materials here, or browse
            </h3>
            <p className="text-xs text-slate-400 mt-0.5">
              Supports official MoSPI compendiums, NSSO manuals, NSSTA lecture notes (up to 50MB)
            </p>
          </div>

          {/* Active File Card */}
          {selectedFileName && (
            <div className="bg-slate-50 border border-slate-200 rounded-lg p-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded bg-red-100 text-red-700 flex items-center justify-center shrink-0 font-bold text-xs border border-red-200">
                  PDF
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h4 className="text-xs font-bold text-slate-900">
                      {selectedFileName}
                    </h4>
                    <span className="text-[10px] bg-green-100 text-green-700 font-bold px-1.5 py-0.2 rounded uppercase">
                      Ready for Parsing
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-500 mt-0.5">
                    {fileSize} • MoSPI Training Compendium on Sampling Techniques
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2 shrink-0">
                <button
                  type="button"
                  onClick={() => setShowFilePreview(!showFilePreview)}
                  className="px-2.5 py-1 text-xs font-medium text-slate-700 bg-white border border-slate-200 rounded hover:bg-slate-50 flex items-center gap-1 transition-colors"
                >
                  <Eye className="w-3.5 h-3.5 text-slate-500" />
                  <span>{showFilePreview ? 'Hide' : 'Preview Content'}</span>
                </button>

                <button
                  type="button"
                  onClick={() => {
                    setSelectedFileName('');
                    setFileSize('');
                  }}
                  className="p-1 text-slate-400 hover:text-rose-600 rounded"
                  title="Remove file"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* Collapsible Document Text Preview */}
          {showFilePreview && (
            <div className="p-4 bg-slate-900 text-slate-200 rounded-lg border border-slate-800 text-xs font-mono max-h-48 overflow-y-auto space-y-2">
              <div className="flex items-center justify-between text-[11px] text-blue-400 font-bold uppercase pb-1 border-b border-slate-800">
                <span>Extracted Document Stream Preview</span>
                <span>Encoding: UTF-8</span>
              </div>
              <pre className="whitespace-pre-wrap font-sans text-xs text-slate-300 leading-relaxed">
                {samplePdfText}
              </pre>
            </div>
          )}
        </div>

        {/* Configuration Controls (Prompt Mandates: Number of questions, Difficulty, Question type) */}
        <div className="pt-2 border-t border-slate-100 space-y-4">
          <h3 className="text-xs font-bold text-slate-800 uppercase tracking-wider">
            Quiz Parameters &amp; Assessment Setup
          </h3>

          <div className="grid sm:grid-cols-3 gap-4">
            {/* Number of Questions */}
            <div className="p-3 bg-slate-50 rounded-lg border border-slate-100 space-y-1.5">
              <label className="block text-[11px] font-semibold text-slate-600 uppercase">
                Number of Questions
              </label>
              <div className="flex items-center gap-2">
                {[5, 10, 15].map((count) => (
                  <button
                    key={count}
                    type="button"
                    onClick={() => setNumQuestions(count)}
                    className={`flex-1 py-1 rounded text-xs font-semibold transition-colors ${
                      numQuestions === count
                        ? 'bg-blue-600 text-white shadow-xs'
                        : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-100'
                    }`}
                  >
                    {count} MCQs
                  </button>
                ))}
              </div>
              <p className="text-[10px] text-slate-400">Standard test: 10 MCQs</p>
            </div>

            {/* Difficulty */}
            <div className="p-3 bg-slate-50 rounded-lg border border-slate-100 space-y-1.5">
              <label className="block text-[11px] font-semibold text-slate-600 uppercase">
                Difficulty Level
              </label>
              <div className="flex items-center gap-1.5">
                {(['Easy', 'Medium', 'Hard'] as const).map((lvl) => (
                  <button
                    key={lvl}
                    type="button"
                    onClick={() => setDifficulty(lvl)}
                    className={`flex-1 py-1 rounded text-xs font-semibold transition-colors ${
                      difficulty === lvl
                        ? 'bg-blue-600 text-white shadow-xs'
                        : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-100'
                    }`}
                  >
                    {lvl}
                  </button>
                ))}
              </div>
              <p className="text-[10px] text-slate-400">Aligned with SSS Cadre</p>
            </div>

            {/* Question Type */}
            <div className="p-3 bg-slate-50 rounded-lg border border-slate-100 space-y-1.5">
              <label className="block text-[11px] font-semibold text-slate-600 uppercase">
                Question Type
              </label>
              <div className="flex items-center gap-1.5">
                {['Multiple Choice', 'Case Scenario'].map((type) => (
                  <button
                    key={type}
                    type="button"
                    onClick={() => setQuestionType(type)}
                    className={`flex-1 py-1 rounded text-xs font-semibold transition-colors ${
                      questionType === type
                        ? 'bg-blue-600 text-white shadow-xs'
                        : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-100'
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>
              <p className="text-[10px] text-slate-400">Single-choice with explanations</p>
            </div>
          </div>
        </div>

        {/* Generate Button (Exact Prompt Requirement) */}
        <div className="pt-2 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="text-xs text-slate-500">
            Target Competency to Assess: <strong className="text-slate-800">Sampling Methods (42% Gap)</strong>
          </div>

          <button
            type="button"
            onClick={handleGenerate}
            disabled={!selectedFileName}
            className="bg-blue-600 hover:bg-blue-700 disabled:bg-slate-300 text-white font-semibold text-xs px-5 py-2.5 rounded-lg shadow-xs transition-colors flex items-center justify-center gap-2 cursor-pointer"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Generate MCQs</span>
          </button>
        </div>
      </div>
    </div>
  );
};
