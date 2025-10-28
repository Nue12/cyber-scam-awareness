import { useState, useEffect } from "react";
import { Link } from "react-router";
import { useApp } from "../context/AppContext";
import { quizScenarios } from "../data/quizScenarios";
import type { QuizScenario } from "../types";

export default function Quiz() {
  const { setQuizResults } = useApp();
  const [currentScenario, setCurrentScenario] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [score, setScore] = useState(0);
  const [answeredScenarios, setAnsweredScenarios] = useState<boolean[]>(
    new Array(quizScenarios.length).fill(false)
  );
  const [completed, setCompleted] = useState(false);

  const scenario = quizScenarios[currentScenario];

  const handleAnswerSelect = (answerIndex: number) => {
    if (showExplanation) return; // Prevent changing answer after submission
    setSelectedAnswer(answerIndex);
  };

  const handleSubmit = () => {
    if (selectedAnswer === null) {
      alert("Please select an answer first.");
      return;
    }

    const isCorrect = selectedAnswer === scenario.correctAnswer;

    // Update score if not already answered
    if (!answeredScenarios[currentScenario] && isCorrect) {
      setScore(score + 1);
    }

    // Mark as answered
    const newAnswered = [...answeredScenarios];
    newAnswered[currentScenario] = true;
    setAnsweredScenarios(newAnswered);

    setShowExplanation(true);
  };

  const handleNext = () => {
    if (currentScenario < quizScenarios.length - 1) {
      setCurrentScenario(currentScenario + 1);
      setSelectedAnswer(null);
      setShowExplanation(false);
    } else {
      // Quiz completed
      const finalScore = {
        score:
          score +
          (selectedAnswer === scenario.correctAnswer &&
          !answeredScenarios[currentScenario]
            ? 1
            : 0),
        totalQuestions: quizScenarios.length,
        answers: [],
        completedAt: new Date(),
        percentage: Math.round(
          ((score +
            (selectedAnswer === scenario.correctAnswer &&
            !answeredScenarios[currentScenario]
              ? 1
              : 0)) /
            quizScenarios.length) *
            100
        ),
      };
      setQuizResults(finalScore);
      setCompleted(true);
    }
  };

  const handlePrevious = () => {
    if (currentScenario > 0) {
      setCurrentScenario(currentScenario - 1);
      setSelectedAnswer(null);
      setShowExplanation(false);
    }
  };

  const handleScenarioJump = (index: number) => {
    setCurrentScenario(index);
    setSelectedAnswer(null);
    setShowExplanation(false);
  };

  if (completed) {
    const finalScore =
      score +
      (selectedAnswer === scenario.correctAnswer &&
      !answeredScenarios[currentScenario]
        ? 1
        : 0);
    const percentage = Math.round((finalScore / quizScenarios.length) * 100);

    return (
      <div className="min-h-screen bg-linear-to-br from-green-50 to-blue-50 py-12">
        <div className="max-w-2xl mx-auto px-4">
          <div className="bg-white rounded-xl shadow-xl p-8 text-center">
            <div className="text-6xl mb-6">🎉</div>
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              Quiz Completed!
            </h1>
            <div className="mb-6">
              <p className="text-5xl font-bold text-blue-600 mb-2">
                {percentage}%
              </p>
              <p className="text-xl text-gray-700">
                You got {finalScore} out of {quizScenarios.length} scenarios
                correct
              </p>
            </div>

            {percentage >= 80 ? (
              <p className="text-lg text-green-600 mb-6">
                Excellent work! You have a strong understanding of cyber scams.
              </p>
            ) : percentage >= 60 ? (
              <p className="text-lg text-blue-600 mb-6">
                Good job! You're getting better at identifying scams.
              </p>
            ) : (
              <p className="text-lg text-orange-600 mb-6">
                Keep learning! Review the educational content to improve your
                skills.
              </p>
            )}

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => {
                  setCurrentScenario(0);
                  setSelectedAnswer(null);
                  setShowExplanation(false);
                  setScore(0);
                  setAnsweredScenarios(
                    new Array(quizScenarios.length).fill(false)
                  );
                  setCompleted(false);
                }}
                className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-medium"
              >
                Try Again
              </button>
              <Link to="/post-test">
                <button className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition font-medium">
                  Take Post-Test
                </button>
              </Link>
              <Link to="/">
                <button className="px-6 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition font-medium">
                  Back to Home
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Interactive Scam Scenarios
          </h1>
          <p className="text-gray-600">
            Apply what you've learned by identifying scams in realistic
            situations
          </p>
        </div>

        {/* Progress */}
        <div className="mb-6">
          <div className="flex justify-between text-sm text-gray-600 mb-2">
            <span>
              Scenario {currentScenario + 1} of {quizScenarios.length}
            </span>
            <span>
              Score: {score}/{quizScenarios.length}
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-green-600 h-2 rounded-full transition-all duration-300"
              style={{
                width: `${((currentScenario + 1) / quizScenarios.length) * 100}%`,
              }}
            ></div>
          </div>
        </div>

        {/* Scenario Card */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-6">
          <div className="mb-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-bold text-gray-900">
                {scenario.title}
              </h2>
              <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                Scenario #{currentScenario + 1}
              </span>
            </div>

            <div className="bg-gray-50 border-l-4 border-blue-500 p-6 rounded-r-lg mb-6">
              <p className="text-gray-800 whitespace-pre-line leading-relaxed">
                {scenario.scenario}
              </p>
            </div>

            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              {scenario.question}
            </h3>

            <div className="space-y-3">
              {scenario.options.map((option, index) => {
                const isSelected = selectedAnswer === index;
                const isCorrect = index === scenario.correctAnswer;
                const showCorrect = showExplanation && isCorrect;
                const showIncorrect =
                  showExplanation && isSelected && !isCorrect;

                return (
                  <button
                    key={index}
                    onClick={() => handleAnswerSelect(index)}
                    disabled={showExplanation}
                    className={`w-full text-left p-5 rounded-lg border-2 transition-all ${
                      isSelected && !showExplanation
                        ? "border-blue-500 bg-blue-50"
                        : showCorrect
                          ? "border-green-500 bg-green-50"
                          : showIncorrect
                            ? "border-red-500 bg-red-50"
                            : "border-gray-200 hover:border-gray-300"
                    } ${showExplanation ? "cursor-not-allowed" : "cursor-pointer"}`}
                  >
                    <div className="flex items-center">
                      <span
                        className={`shrink-0 w-7 h-7 rounded-full border-2 mr-4 flex items-center justify-center font-semibold ${
                          isSelected && !showExplanation
                            ? "border-blue-500 bg-blue-500 text-white"
                            : showCorrect
                              ? "border-green-500 bg-green-500 text-white"
                              : showIncorrect
                                ? "border-red-500 bg-red-500 text-white"
                                : "border-gray-300 text-gray-500"
                        }`}
                      >
                        {showCorrect
                          ? "✓"
                          : showIncorrect
                            ? "✗"
                            : String.fromCharCode(65 + index)}
                      </span>
                      <span className="text-gray-800">{option}</span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Explanation */}
          {showExplanation && (
            <div
              className={`mt-6 p-5 rounded-lg border-l-4 ${
                selectedAnswer === scenario.correctAnswer
                  ? "bg-green-50 border-green-500"
                  : "bg-red-50 border-red-500"
              }`}
            >
              <h4
                className={`font-semibold mb-2 ${
                  selectedAnswer === scenario.correctAnswer
                    ? "text-green-900"
                    : "text-red-900"
                }`}
              >
                {selectedAnswer === scenario.correctAnswer
                  ? "✓ Correct!"
                  : "✗ Incorrect"}
              </h4>
              <p
                className={`text-sm ${
                  selectedAnswer === scenario.correctAnswer
                    ? "text-green-800"
                    : "text-red-800"
                }`}
              >
                {scenario.explanation}
              </p>
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex justify-between mt-8 pt-6 border-t">
            <button
              onClick={handlePrevious}
              disabled={currentScenario === 0}
              className={`px-6 py-2 rounded-lg font-medium transition ${
                currentScenario === 0
                  ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                  : "bg-white text-gray-700 border border-gray-300 hover:bg-gray-50"
              }`}
            >
              ← Previous
            </button>

            {!showExplanation ? (
              <button
                onClick={handleSubmit}
                disabled={selectedAnswer === null}
                className={`px-6 py-3 rounded-lg font-medium transition ${
                  selectedAnswer === null
                    ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                    : "bg-blue-600 text-white hover:bg-blue-700"
                }`}
              >
                Check Answer
              </button>
            ) : (
              <button
                onClick={handleNext}
                className="px-6 py-3 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 transition"
              >
                {currentScenario === quizScenarios.length - 1
                  ? "Finish Quiz"
                  : "Next Scenario →"}
              </button>
            )}
          </div>
        </div>

        {/* Scenario Navigation */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="font-semibold text-gray-800 mb-4">Scenarios</h3>
          <div className="grid grid-cols-4 sm:grid-cols-8 gap-2">
            {quizScenarios.map((_, index) => (
              <button
                key={index}
                onClick={() => handleScenarioJump(index)}
                className={`w-full aspect-square rounded-lg text-sm font-medium transition ${
                  index === currentScenario
                    ? "bg-blue-600 text-white"
                    : answeredScenarios[index]
                      ? "bg-green-100 text-green-700 border border-green-300"
                      : "bg-gray-100 text-gray-600 border border-gray-300 hover:bg-gray-200"
                }`}
              >
                {index + 1}
              </button>
            ))}
          </div>
        </div>

        {/* Tips Section */}
        <div className="mt-6 bg-blue-50 border border-blue-200 rounded-lg p-6">
          <h3 className="font-bold text-blue-900 mb-3 flex items-center">
            <span className="text-xl mr-2">💡</span>
            Tips for Identifying Scams
          </h3>
          <ul className="space-y-2 text-sm text-blue-800">
            <li>• Look for urgency and pressure tactics</li>
            <li>• Verify sender information and URLs carefully</li>
            <li>• Be skeptical of offers that seem too good to be true</li>
            <li>
              • Never share sensitive information through unsolicited messages
            </li>
            <li>• When in doubt, verify through official channels</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
