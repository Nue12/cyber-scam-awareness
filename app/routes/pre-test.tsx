import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { useApp } from "../context/AppContext";
import { getPreTestQuestions, submitTest } from "../services/testService";
import type { Question as QuestionType, UserAnswer } from "../types";
import Question from "../components/Question";

export default function PreTest() {
  const navigate = useNavigate();
  const { setPreTestScore, setPreTestAnswers } = useApp();

  const [questions, setQuestions] = useState<QuestionType[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<(number | null)[]>([]);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    loadQuestions();
  }, []);

  const loadQuestions = async () => {
    try {
      const data = await getPreTestQuestions();
      setQuestions(data);
      setSelectedAnswers(new Array(data.length).fill(null));
      setLoading(false);
    } catch (error) {
      console.error("Error loading questions:", error);
      setLoading(false);
    }
  };

  const handleAnswerSelect = (answerIndex: number) => {
    const newAnswers = [...selectedAnswers];
    newAnswers[currentQuestion] = answerIndex;
    setSelectedAnswers(newAnswers);
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleSubmit = async () => {
    // Check if all questions are answered
    if (selectedAnswers.some((answer) => answer === null)) {
      alert("Please answer all questions before submitting.");
      return;
    }

    setSubmitting(true);

    try {
      // Create user answers array
      const userAnswers: UserAnswer[] = selectedAnswers.map(
        (answer, index) => ({
          questionId: questions[index].id,
          selectedAnswer: answer as number,
          isCorrect: answer === questions[index].correctAnswer,
        })
      );

      // Submit test and get result
      const result = await submitTest(questions, userAnswers);

      // Save to context
      setPreTestScore(result.score);
      setPreTestAnswers(userAnswers);

      // Navigate to results or next page
      navigate("/learn");
    } catch (error) {
      console.error("Error submitting test:", error);
      alert("Error submitting test. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading questions...</p>
        </div>
      </div>
    );
  }

  const progress = ((currentQuestion + 1) / questions.length) * 100;
  const answeredCount = selectedAnswers.filter((a) => a !== null).length;

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-3xl mx-auto px-4">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Pre-Test Assessment
          </h1>
          <p className="text-gray-600">
            Test your current knowledge about cyber scams and online safety.
          </p>
        </div>

        {/* Progress Bar */}
        <div className="mb-6">
          <div className="flex justify-between text-sm text-gray-600 mb-2">
            <span>
              Question {currentQuestion + 1} of {questions.length}
            </span>
            <span>{answeredCount} answered</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-blue-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>

        {/* Question Card */}
        <Question
          question={questions[currentQuestion]}
          selectedAnswer={selectedAnswers[currentQuestion]}
          onAnswerSelect={handleAnswerSelect}
          questionNumber={currentQuestion + 1}
          showExplanation={false}
        />

        {/* Navigation Buttons */}
        <div className="flex flex-col sm:flex-row justify-between items-center mt-8 gap-3">
          <button
            onClick={handlePrevious}
            disabled={currentQuestion === 0}
            className={`w-full sm:w-auto px-4 sm:px-6 py-2 rounded-lg font-medium transition text-center ${
              currentQuestion === 0
                ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                : "bg-white text-gray-700 border border-gray-300 hover:bg-gray-50"
            }`}
          >
            ← Previous
          </button>

          <div className="flex gap-2 overflow-x-auto no-scrollbar px-1">
            {questions.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentQuestion(index)}
                className={`shrink-0 w-8 h-8 rounded-full text-sm font-medium transition ${
                  index === currentQuestion
                    ? "bg-blue-600 text-white"
                    : selectedAnswers[index] !== null
                      ? "bg-green-100 text-green-700 border border-green-300"
                      : "bg-white text-gray-400 border border-gray-300"
                }`}
              >
                {index + 1}
              </button>
            ))}
          </div>

          {currentQuestion === questions.length - 1 ? (
            <button
              onClick={handleSubmit}
              disabled={submitting || answeredCount < questions.length}
              className={`w-full sm:w-auto px-4 sm:px-6 py-2 rounded-lg font-medium transition ${
                submitting || answeredCount < questions.length
                  ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                  : "bg-blue-600 text-white hover:bg-blue-700"
              }`}
            >
              {submitting ? "Submitting..." : "Submit Test"}
            </button>
          ) : (
            <button
              onClick={handleNext}
              disabled={currentQuestion === questions.length - 1}
              className="w-full sm:w-auto px-4 sm:px-6 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition"
            >
              Next →
            </button>
          )}
        </div>

        {/* Answer Status Warning */}
        {answeredCount < questions.length && (
          <div className="mt-4 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
            <p className="text-sm text-yellow-800">
              ⚠️ Please answer all questions before submitting. You have{" "}
              {questions.length - answeredCount} unanswered question(s).
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
