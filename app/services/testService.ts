import type { Question, TestResult, UserAnswer } from "../types";
import { preTestQuestions } from "../data/preTestQuestions";

export const getPreTestQuestions = async (): Promise<Question[]> => {
  // Simulate API call
  return new Promise((resolve) => {
    setTimeout(() => resolve(preTestQuestions), 300);
  });
};

export const calculateScore = (
  questions: Question[],
  userAnswers: UserAnswer[]
): TestResult => {
  const score = userAnswers.filter((answer) => answer.isCorrect).length;
  const percentage = Math.round((score / questions.length) * 100);

  return {
    score,
    totalQuestions: questions.length,
    answers: userAnswers.map((a) => a.selectedAnswer),
    completedAt: new Date(),
    percentage,
  };
};

export const submitTest = async (
  questions: Question[],
  userAnswers: UserAnswer[]
): Promise<TestResult> => {
  // Simulate API submission
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(calculateScore(questions, userAnswers));
    }, 500);
  });
};
