import type { QuizScenario, TestResult } from "../types";
import { quizScenarios } from "../data/quizScenarios";

export const getQuizScenarios = async (): Promise<QuizScenario[]> => {
  // Simulate API call
  return new Promise((resolve) => {
    setTimeout(() => resolve(quizScenarios), 300);
  });
};

export const calculateQuizScore = (
  scenarios: QuizScenario[],
  userAnswers: number[]
): TestResult => {
  const score = userAnswers.filter(
    (answer, index) => answer === scenarios[index].correctAnswer
  ).length;

  const percentage = Math.round((score / scenarios.length) * 100);

  return {
    score,
    totalQuestions: scenarios.length,
    answers: userAnswers,
    completedAt: new Date(),
    percentage,
  };
};

export const submitQuiz = async (
  scenarios: QuizScenario[],
  userAnswers: number[]
): Promise<TestResult> => {
  // Simulate API submission
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(calculateQuizScore(scenarios, userAnswers));
    }, 500);
  });
};
