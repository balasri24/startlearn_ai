export type ViewState =
  | 'login'
  | 'dashboard'
  | 'assessment'
  | 'gap-analysis'
  | 'recommendations'
  | 'learning'
  | 'quiz-generator'
  | 'processing'
  | 'quiz'
  | 'quiz-result'
  | 'updated-dashboard'
  | 'learning-catalog'
  | 'progress'
  | 'profile';

export type CompetencyStatus = 'Strong' | 'Needs Improvement' | 'Major Gap';
export type PriorityLevel = 'High' | 'Medium' | 'Low';

export interface Competency {
  id: string;
  name: string;
  category: string;
  score: number; // 0 to 100
  previousScore?: number;
  status: CompetencyStatus;
  priority: PriorityLevel;
  benchmarkScore: number;
  description: string;
  keySkills: string[];
}

export interface AssessmentQuestion {
  id: number;
  domain: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
}

export interface CourseRecommendation {
  id: string;
  title: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  priority: PriorityLevel;
  source: 'iGOT Karmayogi' | 'NSSTA' | 'MoSPI Academy';
  duration: string;
  courseType?: string;
  modulesCount: number;
  competencyTarget: string;
  description: string;
  curriculum: string[];
  enrolled?: boolean;
  completed?: boolean;
}

export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctIndex: number;
  topic: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  explanation: string;
}

export interface UserProfile {
  name: string;
  role: string;
  organization: string;
  employeeId: string;
  cadre: string;
  posting: string;
  avatarUrl?: string;
  overallScore: number;
  modulesCompleted: number;
  totalModules: number;
  recommendationsCount: number;
}

export interface QuizState {
  currentQuestionIndex: number;
  selectedAnswers: Record<number, number>;
  showExplanation: boolean;
  isComplete: boolean;
  score: number;
  totalQuestions: number;
  strongTopics: string[];
  weakTopics: string[];
}

export interface DemoStep {
  id: ViewState;
  stepNumber: number;
  label: string;
  description: string;
}
