export interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation?: string;
  category?: string;
}

export interface QuizScenario {
  id: number;
  title: string;
  scenario: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  imageUrl?: string;
}

export interface TestResult {
  score: number;
  totalQuestions: number;
  answers: number[];
  completedAt: Date;
  percentage: number;
}

export interface UserAnswer {
  questionId: number;
  selectedAnswer: number;
  isCorrect: boolean;
}

export interface AppContextType {
  preTestScore: number | null;
  setPreTestScore: (score: number | null) => void;
  postTestScore: number | null;
  setPostTestScore: (score: number | null) => void;
  preTestAnswers: UserAnswer[];
  setPreTestAnswers: (answers: UserAnswer[]) => void;
  postTestAnswers: UserAnswer[];
  setPostTestAnswers: (answers: UserAnswer[]) => void;
  quizResults: TestResult | null;
  setQuizResults: (results: TestResult | null) => void;
}
