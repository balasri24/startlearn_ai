import React, { useState } from 'react';
import { CourseRecommendation, ViewState } from '../types';
import { recommendedCourses } from '../data/mockData';
import {
  Sparkles,
  BookOpen,
  ExternalLink,
  ShieldCheck,
  CheckCircle2,
  Clock,
  ArrowRight,
  X,
  FileText,
  UploadCloud,
  ChevronRight
} from 'lucide-react';

interface RecommendationsViewProps {
  onNavigate: (view: ViewState) => void;
  onSelectCourseForQuiz?: (courseTitle: string) => void;
}

export const RecommendationsView: React.FC<RecommendationsViewProps> = ({
  onNavigate,
  onSelectCourseForQuiz,
}) => {
  const [selectedCourse, setSelectedCourse] = useState<CourseRecommendation | null>(null);

  const handleOpenCourse = (course: CourseRecommendation) => {
    setSelectedCourse(course);
  };

  const handleProceedToUpload = () => {
    if (selectedCourse && onSelectCourseForQuiz) {
      onSelectCourseForQuiz(selectedCourse.title);
    }
    setSelectedCourse(null);
    onNavigate('quiz-generator');
  };

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      {/* Page Title & Context Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div className="space-y-1">
          <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-blue-50 border border-blue-100 text-blue-700 text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            <span>FRAC Competency-to-Curriculum Alignment</span>
          </div>

          <h1 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
            Learning Recommendations for Ravi
          </h1>

          {/* Prompt mandated label */}
          <p className="text-xs text-slate-500">
            Recommendations generated based on your competency gaps.
          </p>
        </div>

        <button
          onClick={() => onNavigate('quiz-generator')}
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs px-4 py-2 rounded-lg shadow-xs transition-colors flex items-center gap-1.5 self-start sm:self-center"
        >
          <UploadCloud className="w-3.5 h-3.5" />
          <span>Upload Material for Quiz</span>
        </button>
      </div>

      {/* iGOT Karmayogi Prototype Integration Banner */}
      <div className="bg-[#0F172A] rounded-xl p-5 text-white border border-slate-800 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="space-y-1.5 max-w-2xl">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            <span className="text-[11px] font-bold text-emerald-400 uppercase tracking-wider">
              iGOT Karmayogi Bharat Ecosystem Bridge
            </span>
            <span className="text-[10px] bg-slate-800 text-slate-300 px-1.5 py-0.5 rounded border border-slate-700">
              Verified Cadre Partner
            </span>
          </div>

          <h3 className="text-base font-bold text-white">
            Direct Access to National Statistical Training Resources
          </h3>
          <p className="text-xs text-slate-300 leading-relaxed">
            These courses are mapped to address the <strong className="text-blue-400">Sampling Methods (42%)</strong> major deficit identified during your assessment. In production, single sign-on passes your learner competency token directly to the Karmayogi Bharat portal.
          </p>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <span className="text-xs text-slate-400 hidden sm:inline">
            3 High-Priority Courses
          </span>
        </div>
      </div>

      {/* Recommendation Cards Grid */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-sm font-bold text-slate-900">
            High Priority Capacity Building Courses
          </h2>
          <span className="text-xs text-slate-500">
            Aligned with MoSPI FRAC Standards
          </span>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {recommendedCourses.map((course) => {
            return (
              <div
                key={course.id}
                className="bg-white rounded-xl border border-slate-200 shadow-xs hover:border-blue-400 transition-all p-5 flex flex-col justify-between space-y-4 group"
              >
                <div className="space-y-3">
                  <div className="flex items-start justify-between gap-1">
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-blue-50 text-blue-700 border border-blue-100">
                      {course.courseType || 'Core Competency'}
                    </span>
                    <div className="flex items-center gap-1 text-[11px] text-slate-500 font-medium">
                      <Clock className="w-3.5 h-3.5 text-slate-400" />
                      <span>{course.duration}</span>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-sm font-bold text-slate-900 group-hover:text-blue-600 transition-colors leading-snug">
                      {course.title}
                    </h3>
                    <div className="text-[11px] text-slate-500 mt-1 space-y-0.5">
                      <div>Provider: <strong className="text-slate-700 font-semibold">{course.source}</strong></div>
                      <div>Type: <span className="text-slate-700 font-medium">{course.courseType}</span></div>
                      <div>Time: <span className="text-slate-700 font-medium">{course.duration}</span></div>
                    </div>
                  </div>

                  <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed">
                    {course.description}
                  </p>
                </div>

                <div className="space-y-2 pt-2 border-t border-slate-100">
                  <button
                    onClick={() => {
                      if (onSelectCourseForQuiz) onSelectCourseForQuiz(course.title);
                      onNavigate('learning');
                    }}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs py-2.5 rounded-lg transition-colors flex items-center justify-center gap-1.5 shadow-xs cursor-pointer"
                  >
                    <BookOpen className="w-3.5 h-3.5" />
                    <span>Start Learning</span>
                  </button>

                  <button
                    onClick={() => {
                      if (onSelectCourseForQuiz) onSelectCourseForQuiz(course.title);
                      onNavigate('quiz-generator');
                    }}
                    className="w-full bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 font-semibold text-xs py-1.5 rounded-lg transition-colors text-center cursor-pointer"
                  >
                    Generate Quiz
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Course Detail Drawer / Modal */}
      {selectedCourse && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs">
          <div className="bg-white rounded-xl shadow-xl max-w-xl w-full border border-slate-200 overflow-hidden space-y-0 animate-in fade-in zoom-in-95 duration-150">
            <div className="p-5 border-b border-slate-200 flex items-center justify-between bg-slate-50">
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 rounded-full bg-blue-500" />
                <span className="text-xs font-bold text-slate-800 uppercase tracking-wide">
                  iGOT Karmayogi Course Specification
                </span>
              </div>
              <button
                onClick={() => setSelectedCourse(null)}
                className="text-slate-400 hover:text-slate-600 p-1 rounded-md"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 space-y-4 max-h-[70vh] overflow-y-auto text-xs text-slate-600">
              <div>
                <span className="text-[10px] font-bold text-blue-600 uppercase tracking-widest">
                  {selectedCourse.source}
                </span>
                <h2 className="text-lg font-bold text-slate-900 mt-0.5">
                  {selectedCourse.title}
                </h2>
                <p className="text-slate-500 mt-1 leading-relaxed">
                  {selectedCourse.description}
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3 p-3 bg-slate-50 rounded-lg border border-slate-100 text-[11px]">
                <div>
                  <span className="text-slate-400 block">Target Competency</span>
                  <span className="font-bold text-slate-800">{selectedCourse.competencyTarget}</span>
                </div>
                <div>
                  <span className="text-slate-400 block">Estimated Duration</span>
                  <span className="font-bold text-slate-800">{selectedCourse.duration}</span>
                </div>
                <div>
                  <span className="text-slate-400 block">Cadre Level</span>
                  <span className="font-bold text-slate-800">SSS &amp; ISS Statistical Officers</span>
                </div>
                <div>
                  <span className="text-slate-400 block">Assessment Format</span>
                  <span className="font-bold text-slate-800">10-Question Diagnostic Quiz</span>
                </div>
              </div>

              <div className="space-y-2">
                <h4 className="font-bold text-slate-800 text-xs">Curriculum Outline</h4>
                <ul className="list-disc pl-4 space-y-1 text-slate-600 text-[11px]">
                  <li>Module 1: Principles of Random Sampling vs Purposive Selection</li>
                  <li>Module 2: Stratification criteria &amp; optimum Neyman allocation</li>
                  <li>Module 3: Non-sampling error reduction in national NSSO rounds</li>
                  <li>Module 4: Post-stratification weighting and design effect calculations</li>
                </ul>
              </div>

              <div className="p-3 bg-blue-50 border border-blue-100 rounded-lg text-[11px] text-blue-900 leading-normal">
                <strong>SIH Hackathon Direct Bridge:</strong> In the prototype flow, you can proceed directly to the AI Quiz Generator with this module&apos;s textbook/syllabus material loaded.
              </div>
            </div>

            <div className="p-4 bg-slate-50 border-t border-slate-200 flex items-center justify-end space-x-2">
              <button
                onClick={() => setSelectedCourse(null)}
                className="px-3 py-1.5 rounded-lg border border-slate-300 text-slate-700 font-semibold hover:bg-slate-100 transition-colors text-xs"
              >
                Close
              </button>
              <button
                onClick={handleProceedToUpload}
                className="px-4 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold shadow-xs transition-colors flex items-center space-x-1 text-xs"
              >
                <span>Generate Quiz from this Course</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
