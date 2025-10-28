import { createContext, useContext, useState, type ReactNode } from "react";
import type { AppContextType, UserAnswer, TestResult } from "../types";

const AppContext = createContext<AppContextType | undefined>(undefined);

export const useApp = (): AppContextType => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useApp must be used within AppProvider");
  }
  return context;
};

interface AppProviderProps {
  children: ReactNode;
}

export const AppProvider = ({ children }: AppProviderProps) => {
  const [preTestScore, setPreTestScore] = useState<number | null>(null);
  const [postTestScore, setPostTestScore] = useState<number | null>(null);
  const [preTestAnswers, setPreTestAnswers] = useState<UserAnswer[]>([]);
  const [postTestAnswers, setPostTestAnswers] = useState<UserAnswer[]>([]);
  const [quizResults, setQuizResults] = useState<TestResult | null>(null);

  const value: AppContextType = {
    preTestScore,
    setPreTestScore,
    postTestScore,
    setPostTestScore,
    preTestAnswers,
    setPreTestAnswers,
    postTestAnswers,
    setPostTestAnswers,
    quizResults,
    setQuizResults,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
