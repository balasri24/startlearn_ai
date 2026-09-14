import React, { useState } from 'react';
import { ViewState } from '../types';
import { recommendedCourses } from '../data/mockData';
import {
  BookOpen,
  Search,
  Filter,
  ShieldCheck,
  CheckCircle2,
  UploadCloud,
  ChevronRight
} from 'lucide-react';

interface LearningCatalogViewProps {
  onNavigate: (view: ViewState) => void;
}

export const LearningCatalogView: React.FC<LearningCatalogViewProps> = ({
  onNavigate,
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('All');

  const filteredCourses = recommendedCourses.filter((course) => {
    const matchesSearch =
      course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.competencyTarget.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDiff =
      selectedDifficulty === 'All' || course.difficulty === selectedDifficulty;
    return matchesSearch && matchesDiff;
  });

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-blue-50 text-blue-700 text-xs font-semibold border border-blue-100 mb-1.5">
            <ShieldCheck className="w-3.5 h-3.5 text-blue-600" />
            <span>iGOT Karmayogi Bharat • MoSPI Official Academy</span>
          </div>
          <h1 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
            Official Learning Catalog
          </h1>
          <p className="text-xs text-slate-500 mt-0.5">
            Certified capacity building courses aligned with the Capacity Building Commission (CBC) framework.
          </p>
        </div>

        <button
          onClick={() => onNavigate('quiz-generator')}
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs px-4 py-2 rounded-lg shadow-xs transition-colors flex items-center gap-1.5 self-start sm:self-auto"
        >
          <UploadCloud className="w-3.5 h-3.5" />
          <span>Upload Material for Quiz</span>
        </button>
      </div>

      {/* Filter & Search Bar */}
      <div className="bg-white rounded-xl p-3.5 border border-slate-200 shadow-xs flex flex-col sm:flex-row items-center gap-3">
        <div className="relative flex-1 w-full">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search statistical courses by topic, competency, or keyword..."
            className="w-full pl-9 pr-3 py-1.5 bg-slate-50 rounded-lg text-xs text-slate-800 focus:bg-white focus:outline-none focus:ring-1 focus:ring-blue-500 border border-slate-200"
          />
        </div>

        <div className="flex items-center gap-2 w-full sm:w-auto">
          <Filter className="w-3.5 h-3.5 text-slate-400 shrink-0" />
          <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-lg w-full sm:w-auto">
            {['All', 'Beginner', 'Intermediate', 'Advanced'].map((diff) => (
              <button
                key={diff}
                onClick={() => setSelectedDifficulty(diff)}
                className={`px-2.5 py-1 rounded text-xs font-semibold transition-all ${
                  selectedDifficulty === diff
                    ? 'bg-white text-blue-800 shadow-2xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {diff}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Catalog Grid */}
      <div className="grid md:grid-cols-2 gap-5">
        {filteredCourses.map((course) => (
          <div
            key={course.id}
            className="bg-white rounded-xl border border-slate-200 p-5 shadow-xs hover:border-blue-400 transition-colors flex flex-col justify-between space-y-4 group"
          >
            <div className="space-y-2.5">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold text-blue-700 bg-blue-50 px-2 py-0.5 rounded border border-blue-100 uppercase tracking-wider">
                  {course.competencyTarget}
                </span>
                <span className="text-xs text-slate-500">
                  {course.difficulty} • {course.duration}
                </span>
              </div>

              <h3 className="text-base font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                {course.title}
              </h3>

              <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                {course.description}
              </p>

              {/* Curriculum snippet */}
              <div className="pt-1">
                <span className="text-[11px] font-bold text-slate-700 uppercase tracking-wide block mb-1">
                  Curriculum Highlights:
                </span>
                <ul className="space-y-1">
                  {course.curriculum.slice(0, 3).map((mod, idx) => (
                    <li key={idx} className="text-xs text-slate-500 flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span className="truncate">{mod}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
              <span className="text-xs text-slate-500">
                Provider: <strong className="text-slate-700">{course.source}</strong>
              </span>
              <button
                onClick={() => onNavigate('quiz-generator')}
                className="bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold px-3.5 py-1.5 rounded-lg shadow-xs transition-colors flex items-center gap-1"
              >
                <span>Launch Quiz &amp; Material</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
