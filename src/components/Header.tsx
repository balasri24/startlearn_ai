import React from 'react';
import { ViewState, UserProfile } from '../types';
import {
  Menu,
  RotateCcw,
  Presentation,
  ShieldCheck,
  ExternalLink
} from 'lucide-react';

interface HeaderProps {
  currentView: ViewState;
  onNavigate: (view: ViewState) => void;
  user: UserProfile;
  isLoggedIn: boolean;
  onLogout: () => void;
  onResetJourney: () => void;
  showDemoBar: boolean;
  setShowDemoBar: (show: boolean) => void;
  currentStepNumber: number;
  onOpenMobileSidebar?: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentView,
  onNavigate,
  user,
  isLoggedIn,
  onLogout,
  onResetJourney,
  showDemoBar,
  setShowDemoBar,
  currentStepNumber,
  onOpenMobileSidebar,
}) => {
  const getPageTitle = (view: ViewState) => {
    switch (view) {
      case 'dashboard':
        return 'Learner Impact Dashboard';
      case 'assessment':
        return 'Competency Assessment';
      case 'gap-analysis':
        return 'AI Competency Gap Analysis';
      case 'recommendations':
        return 'iGOT Karmayogi Recommendations';
      case 'quiz-generator':
        return 'AI Quiz Generator';
      case 'processing':
        return 'AI Concept Processing Pipeline';
      case 'quiz':
        return 'Current Assessment — Sampling Methods';
      case 'quiz-result':
        return 'Assessment Diagnostic Results';
      case 'updated-dashboard':
        return 'Learner Impact Dashboard';
      case 'learning-catalog':
        return 'Official Learning Catalog';
      case 'progress':
        return 'Progress & Competency Audit';
      case 'profile':
        return 'Statistical Officer Profile';
      case 'login':
        return 'Officer Portal Authentication';
      default:
        return 'Learner Impact Dashboard';
    }
  };

  return (
    <div className="sticky top-0 z-30 bg-white">
      {/* Top Gov Info Strip */}
      <div className="bg-[#0F172A] text-slate-300 text-xs px-4 sm:px-6 py-1.5 flex flex-wrap items-center justify-between border-b border-slate-800">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5 font-medium">
            <span className="inline-block w-2 h-2 rounded-full bg-blue-500"></span>
            <span className="text-[11px] font-semibold text-slate-200">भारत सरकार | Government of India</span>
          </div>
          <span className="text-slate-700 hidden md:inline">|</span>
          <span className="text-slate-400 hidden md:inline text-[11px]">
            Ministry of Statistics and Programme Implementation (MoSPI)
          </span>
        </div>

        <div className="flex items-center gap-3 text-[11px]">
          <span className="hidden sm:inline-flex items-center gap-1 text-slate-400">
            <ShieldCheck className="w-3.5 h-3.5 text-blue-400" />
            iGOT Karmayogi Bharat Aligned
          </span>

          <button
            onClick={() => setShowDemoBar(!showDemoBar)}
            className={`px-2 py-0.5 rounded text-[11px] font-semibold flex items-center gap-1 transition-colors ${
              showDemoBar
                ? 'bg-blue-600 text-white'
                : 'bg-slate-800 text-slate-300 hover:text-white'
            }`}
          >
            <Presentation className="w-3 h-3" />
            <span>SIH Step {currentStepNumber}/10</span>
          </button>

          <button
            onClick={onResetJourney}
            className="text-slate-400 hover:text-white text-[11px] flex items-center gap-1 transition-colors"
            title="Reset demonstration to Step 1"
          >
            <RotateCcw className="w-3 h-3" />
            <span className="hidden sm:inline">Reset</span>
          </button>
        </div>
      </div>

      {/* Main Header Toolbar */}
      <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-4 sm:px-8">
        <div className="flex items-center space-x-3">
          {/* Mobile hamburger button */}
          {isLoggedIn && (
            <button
              onClick={onOpenMobileSidebar}
              className="lg:hidden p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors"
              aria-label="Open sidebar"
            >
              <Menu className="w-5 h-5" />
            </button>
          )}

          {!isLoggedIn && (
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-blue-500 rounded flex items-center justify-center font-bold text-white shadow-xs">
                S
              </div>
              <span className="text-lg font-bold text-slate-900 tracking-tight">StatLearn AI</span>
            </div>
          )}

          <h1 className="text-base sm:text-lg font-semibold text-slate-800 tracking-tight truncate">
            {getPageTitle(currentView)}
          </h1>
        </div>

        {/* Right side utility status chips & controls */}
        <div className="flex items-center space-x-3">
          {/* Active Session Badge matching Design HTML */}
          <span className="text-xs px-2.5 py-1 bg-green-100 text-green-700 font-bold rounded uppercase tracking-wider whitespace-nowrap">
            Active Session: SIH 2024
          </span>

          {isLoggedIn ? (
            <button
              onClick={onLogout}
              className="hidden sm:inline-flex text-xs font-semibold text-slate-500 hover:text-slate-800 px-3 py-1.5 rounded-lg hover:bg-slate-100 border border-transparent hover:border-slate-200 transition-colors"
            >
              Sign Out
            </button>
          ) : (
            <button
              onClick={() => onNavigate('login')}
              className="bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold px-3.5 py-1.5 rounded-lg shadow-xs transition-colors flex items-center gap-1.5"
            >
              <span>Login</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </button>
          )}
        </div>
      </header>
    </div>
  );
};
