import React, { useState } from 'react';
import { ViewState, UserProfile, Competency } from './types';
import {
  initialUserProfile,
  initialCompetencies,
  updatedCompetencies,
  demoSteps
} from './data/mockData';
import { Sidebar } from './components/Sidebar';
import { Header } from './components/Header';
import { SIHDemoBar } from './components/SIHDemoBar';
import { LoginPage } from './components/LoginPage';
import { LearnerDashboard } from './components/LearnerDashboard';
import { CompetencyAssessment } from './components/CompetencyAssessment';
import { GapAnalysisView } from './components/GapAnalysisView';
import { RecommendationsView } from './components/RecommendationsView';
import { LearningView } from './components/LearningView';
import { QuizGeneratorView } from './components/QuizGeneratorView';
import { ProcessingScreen } from './components/ProcessingScreen';
import { AIQuizView } from './components/AIQuizView';
import { QuizResultView } from './components/QuizResultView';
import { UpdatedDashboardView } from './components/UpdatedDashboardView';
import { LearningCatalogView } from './components/LearningCatalogView';
import { ProgressAnalyticsView } from './components/ProgressAnalyticsView';
import { OfficerProfileView } from './components/OfficerProfileView';

export default function App() {
  const [currentView, setCurrentView] = useState<ViewState>('login');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState<UserProfile>(initialUserProfile);
  const [competencies, setCompetencies] = useState<Competency[]>(initialCompetencies);
  const [showDemoBar, setShowDemoBar] = useState(true);
  const [uploadedFileName, setUploadedFileName] = useState('Sampling_Methods.pdf');
  const [quizScore, setQuizScore] = useState(8);
  const [totalQuizQuestions, setTotalQuizQuestions] = useState(10);
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  // Compute step number for SIH demo
  const currentStep = demoSteps.find((s) => s.id === currentView);
  const currentStepNumber = currentStep ? currentStep.stepNumber : 1;

  // Step 1: Login
  const handleLogin = () => {
    setIsLoggedIn(true);
    setCurrentView('dashboard');
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setCurrentView('login');
  };

  // Step 3: Complete Assessment -> Step 4: Gap Analysis
  const handleCompleteAssessment = () => {
    setCurrentView('gap-analysis');
  };

  // Step 6: Start Processing -> Step 7: Processing Screen
  const handleStartProcessing = (config: {
    fileName: string;
    numQuestions: number;
    difficulty: 'Easy' | 'Medium' | 'Hard';
    questionType: string;
  }) => {
    setUploadedFileName(config.fileName);
    setTotalQuizQuestions(config.numQuestions);
    setCurrentView('processing');
  };

  // Step 7 -> Step 8: Processing Finished -> AI Quiz
  const handleProcessingComplete = () => {
    setCurrentView('quiz');
  };

  // Step 8 -> Step 9: Quiz Finished -> Quiz Result
  const handleFinishQuiz = (score: number, total: number) => {
    setQuizScore(score);
    setTotalQuizQuestions(total);
    setCurrentView('quiz-result');
  };

  // Step 9 -> Step 10: Apply Update -> Updated Competency Dashboard
  const handleApplyCompetencyUpdate = () => {
    setCompetencies(updatedCompetencies);
    setUser((prev) => ({
      ...prev,
      overallScore: 73,
      modulesCompleted: 4,
    }));
    setCurrentView('updated-dashboard');
  };

  // Reset entire journey to step 1
  const handleResetJourney = () => {
    setCompetencies(initialCompetencies);
    setUser(initialUserProfile);
    setIsLoggedIn(false);
    setCurrentView('login');
  };

  // Stepper Next Step Handler for SIH walkthrough
  const handleNextStep = () => {
    const currentIndex = demoSteps.findIndex((s) => s.id === currentView);
    if (currentIndex >= 0 && currentIndex < demoSteps.length - 1) {
      const nextStep = demoSteps[currentIndex + 1];
      if (nextStep.id === 'updated-dashboard') {
        handleApplyCompetencyUpdate();
      } else {
        if (!isLoggedIn && nextStep.id !== 'login') {
          setIsLoggedIn(true);
        }
        setCurrentView(nextStep.id);
      }
    }
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex font-sans text-slate-900 antialiased selection:bg-blue-100 selection:text-blue-900">
      {/* Persistent / Responsive Clean Utility Sidebar for Logged-in Users */}
      {isLoggedIn && (
        <Sidebar
          currentView={currentView}
          onNavigate={setCurrentView}
          user={user}
          onLogout={handleLogout}
          isOpenMobile={mobileSidebarOpen}
          onCloseMobile={() => setMobileSidebarOpen(false)}
        />
      )}

      {/* Main Content Column */}
      <div className="flex-1 flex flex-col min-w-0 min-h-screen">
        {/* Top Header */}
        <Header
          currentView={currentView}
          onNavigate={setCurrentView}
          user={user}
          isLoggedIn={isLoggedIn}
          onLogout={handleLogout}
          onResetJourney={handleResetJourney}
          showDemoBar={showDemoBar}
          setShowDemoBar={setShowDemoBar}
          currentStepNumber={currentStepNumber}
          onOpenMobileSidebar={() => setMobileSidebarOpen(true)}
        />

        {/* SIH Hackathon Demonstration Step Bar */}
        {showDemoBar && (
          <SIHDemoBar
            currentView={currentView}
            onNavigate={(view) => {
              if (view !== 'login' && !isLoggedIn) {
                setIsLoggedIn(true);
              }
              if (view === 'updated-dashboard') {
                handleApplyCompetencyUpdate();
              } else {
                setCurrentView(view);
              }
            }}
            onNextStep={handleNextStep}
            onResetJourney={handleResetJourney}
          />
        )}

        {/* Dynamic View Router */}
        <main className="flex-1 bg-[#F8FAFC] p-4 sm:p-6 lg:p-8">
          {currentView === 'login' && <LoginPage onLogin={handleLogin} />}

          {currentView === 'dashboard' && (
            <LearnerDashboard
              user={user}
              competencies={competencies}
              onNavigate={setCurrentView}
            />
          )}

          {currentView === 'assessment' && (
            <CompetencyAssessment
              onComplete={handleCompleteAssessment}
              onNavigate={setCurrentView}
            />
          )}

          {currentView === 'gap-analysis' && (
            <GapAnalysisView
              competencies={competencies}
              onNavigate={setCurrentView}
            />
          )}

          {currentView === 'recommendations' && (
            <RecommendationsView
              onNavigate={setCurrentView}
              onSelectCourseForQuiz={(title) => {
                setUploadedFileName(`${title.replace(/\s+/g, '_')}.pdf`);
              }}
            />
          )}

          {currentView === 'learning' && (
            <LearningView
              onNavigate={setCurrentView}
              onGenerateQuiz={(fileName) => {
                setUploadedFileName(fileName);
              }}
            />
          )}

          {currentView === 'quiz-generator' && (
            <QuizGeneratorView
              onStartProcessing={handleStartProcessing}
              onNavigate={setCurrentView}
            />
          )}

          {currentView === 'processing' && (
            <ProcessingScreen
              fileName={uploadedFileName}
              onComplete={handleProcessingComplete}
            />
          )}

          {currentView === 'quiz' && (
            <AIQuizView
              onFinishQuiz={handleFinishQuiz}
              onNavigate={setCurrentView}
            />
          )}

          {currentView === 'quiz-result' && (
            <QuizResultView
              score={quizScore}
              totalQuestions={totalQuizQuestions}
              onNavigate={setCurrentView}
              onUpdateCompetency={handleApplyCompetencyUpdate}
            />
          )}

          {currentView === 'updated-dashboard' && (
            <UpdatedDashboardView
              user={user}
              onNavigate={setCurrentView}
              onResetJourney={handleResetJourney}
            />
          )}

          {currentView === 'learning-catalog' && (
            <LearningCatalogView onNavigate={setCurrentView} />
          )}

          {currentView === 'progress' && (
            <ProgressAnalyticsView
              user={user}
              competencies={competencies}
              onNavigate={setCurrentView}
            />
          )}

          {currentView === 'profile' && (
            <OfficerProfileView
              user={user}
              onNavigate={setCurrentView}
              onResetJourney={handleResetJourney}
            />
          )}
        </main>

        {/* Minimal Clean Utility Footer */}
        <footer className="bg-white border-t border-slate-200 py-4 px-6 sm:px-8 text-xs text-slate-500 mt-auto">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
            <div className="flex items-center space-x-2">
              <span className="w-2 h-2 rounded-full bg-blue-500"></span>
              <span className="font-semibold text-slate-700">StatLearn AI</span>
              <span>• Ministry of Statistics and Programme Implementation (MoSPI)</span>
            </div>
            <div className="flex items-center space-x-4 text-[11px] text-slate-400">
              <span>National Statistical Systems Training Academy (NSSTA)</span>
              <span>•</span>
              <span>iGOT Karmayogi Bharat</span>
              <span>•</span>
              <span className="text-slate-600 font-medium">Smart India Hackathon 2024</span>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
