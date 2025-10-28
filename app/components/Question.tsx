import type { Question as QuestionType } from "../types";

interface QuestionProps {
  question: QuestionType;
  selectedAnswer: number | null;
  onAnswerSelect: (answerId: number) => void;
  showExplanation?: boolean;
  questionNumber: number;
  disabled?: boolean;
}

export default function Question({
  question,
  selectedAnswer,
  onAnswerSelect,
  showExplanation = false,
  questionNumber,
  disabled = false,
}: QuestionProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-6">
      <div className="mb-4">
        <span className="text-sm font-semibold text-blue-600">
          Question {questionNumber}
        </span>
        {question.category && (
          <span className="ml-2 text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
            {question.category}
          </span>
        )}
      </div>

      <h3 className="text-lg font-semibold text-gray-800 mb-4">
        {question.question}
      </h3>

      <div className="space-y-3">
        {question.options.map((option, index) => {
          const isSelected = selectedAnswer === index;
          const isCorrect = index === question.correctAnswer;
          const showCorrect = showExplanation && isCorrect;
          const showIncorrect = showExplanation && isSelected && !isCorrect;

          return (
            <button
              key={index}
              disabled={disabled}
              onClick={() => !disabled && onAnswerSelect(index)}
              className={`w-full text-left p-4 rounded-lg border-2 transition-all ${
                isSelected && !showExplanation
                  ? "border-blue-500 bg-blue-50"
                  : showCorrect
                    ? "border-green-500 bg-green-50"
                    : showIncorrect
                      ? "border-red-500 bg-red-50"
                      : "border-gray-200 hover:border-gray-300"
              } ${disabled ? "cursor-not-allowed opacity-75" : "cursor-pointer"}`}
            >
              <div className="flex items-center">
                <span
                  className={`shrink-0 w-6 h-6 rounded-full border-2 mr-3 flex items-center justify-center ${
                    isSelected && !showExplanation
                      ? "border-blue-500 bg-blue-500"
                      : showCorrect
                        ? "border-green-500 bg-green-500"
                        : showIncorrect
                          ? "border-red-500 bg-red-500"
                          : "border-gray-300"
                  }`}
                >
                  {(isSelected || showCorrect || showIncorrect) && (
                    <span className="text-white text-xs">
                      {showCorrect ? "✓" : showIncorrect ? "✗" : "•"}
                    </span>
                  )}
                </span>
                <span className="text-gray-700">{option}</span>
              </div>
            </button>
          );
        })}
      </div>

      {showExplanation && question.explanation && (
        <div className="mt-4 p-4 bg-blue-50 border-l-4 border-blue-500 rounded">
          <p className="text-sm text-gray-700">
            <span className="font-semibold">Explanation: </span>
            {question.explanation}
          </p>
        </div>
      )}
    </div>
  );
}
