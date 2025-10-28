import { Link } from "react-router";
import { useApp } from "../context/AppContext";

export default function Results() {
  const { preTestScore, postTestScore, preTestAnswers, postTestAnswers } =
    useApp();

  // Calculate percentages
  const preTestPercentage =
    preTestScore !== null && preTestAnswers.length > 0
      ? Math.round((preTestScore / preTestAnswers.length) * 100)
      : 0;

  const postTestPercentage =
    postTestScore !== null && postTestAnswers.length > 0
      ? Math.round((postTestScore / postTestAnswers.length) * 100)
      : 0;

  const improvement = postTestPercentage - preTestPercentage;

  const getScoreColor = (percentage: number) => {
    if (percentage >= 80) return "text-green-600";
    if (percentage >= 60) return "text-blue-600";
    if (percentage >= 40) return "text-yellow-600";
    return "text-red-600";
  };

  const getScoreMessage = (percentage: number) => {
    if (percentage >= 80)
      return "Excellent! You have strong awareness of cyber scams.";
    if (percentage >= 60) return "Good job! You understand most concepts.";
    if (percentage >= 40)
      return "Fair. Consider reviewing the materials again.";
    return "Needs improvement. Please review the educational content.";
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-blue-50 to-indigo-100 py-12">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Your Results
          </h1>
          <p className="text-lg text-gray-600">
            Here's how you performed on the assessments
          </p>
        </div>

        {/* Comparison Card */}
        {preTestScore !== null && postTestScore !== null && (
          <div className="bg-white rounded-xl shadow-xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
              Your Progress
            </h2>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              {/* Pre-Test Score */}
              <div className="text-center p-6 bg-gray-50 rounded-lg">
                <p className="text-sm text-gray-600 mb-2">Pre-Test Score</p>
                <p
                  className={`text-5xl font-bold mb-2 ${getScoreColor(preTestPercentage)}`}
                >
                  {preTestPercentage}%
                </p>
                <p className="text-gray-700">
                  {preTestScore} / {preTestAnswers.length} correct
                </p>
              </div>

              {/* Post-Test Score */}
              <div className="text-center p-6 bg-gray-50 rounded-lg">
                <p className="text-sm text-gray-600 mb-2">Post-Test Score</p>
                <p
                  className={`text-5xl font-bold mb-2 ${getScoreColor(postTestPercentage)}`}
                >
                  {postTestPercentage}%
                </p>
                <p className="text-gray-700">
                  {postTestScore} / {postTestAnswers.length} correct
                </p>
              </div>
            </div>

            {/* Improvement Indicator */}
            <div
              className={`text-center p-6 rounded-lg ${
                improvement > 0
                  ? "bg-green-50"
                  : improvement < 0
                    ? "bg-red-50"
                    : "bg-gray-50"
              }`}
            >
              <p className="text-sm text-gray-600 mb-2">Improvement</p>
              <p
                className={`text-4xl font-bold ${
                  improvement > 0
                    ? "text-green-600"
                    : improvement < 0
                      ? "text-red-600"
                      : "text-gray-600"
                }`}
              >
                {improvement > 0 ? "+" : ""}
                {improvement}%
              </p>
              <p className="text-gray-700 mt-2">
                {improvement > 0 &&
                  "🎉 Great job! Your knowledge has improved!"}
                {improvement === 0 && "Your score remained the same."}
                {improvement < 0 && "Consider reviewing the materials again."}
              </p>
            </div>
          </div>
        )}

        {/* Individual Score Cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {/* Pre-Test Only */}
          {preTestScore !== null && postTestScore === null && (
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-gray-800">Pre-Test</h3>
                <span className="text-3xl">📝</span>
              </div>
              <p
                className={`text-4xl font-bold mb-2 ${getScoreColor(preTestPercentage)}`}
              >
                {preTestPercentage}%
              </p>
              <p className="text-gray-600 mb-4">
                {preTestScore} out of {preTestAnswers.length} correct
              </p>
              <p className="text-sm text-gray-700">
                {getScoreMessage(preTestPercentage)}
              </p>
            </div>
          )}

          {/* Post-Test Only */}
          {postTestScore !== null && preTestScore === null && (
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-gray-800">Post-Test</h3>
                <span className="text-3xl">✅</span>
              </div>
              <p
                className={`text-4xl font-bold mb-2 ${getScoreColor(postTestPercentage)}`}
              >
                {postTestPercentage}%
              </p>
              <p className="text-gray-600 mb-4">
                {postTestScore} out of {postTestAnswers.length} correct
              </p>
              <p className="text-sm text-gray-700">
                {getScoreMessage(postTestPercentage)}
              </p>
            </div>
          )}
        </div>

        {/* No Results Yet */}
        {preTestScore === null && postTestScore === null && (
          <div className="bg-white rounded-lg shadow-lg p-12 text-center mb-8">
            <span className="text-6xl mb-4 block">📊</span>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              No Results Yet
            </h3>
            <p className="text-gray-600 mb-6">
              Complete the pre-test and post-test to see your results here.
            </p>
            <Link to="/pre-test">
              <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition font-semibold">
                Start Pre-Test
              </button>
            </Link>
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-4 justify-center">
          <Link to="/">
            <button className="px-6 py-3 bg-white text-gray-700 rounded-lg border border-gray-300 hover:bg-gray-50 transition font-medium">
              ← Back to Home
            </button>
          </Link>

          {preTestScore === null && (
            <Link to="/pre-test">
              <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-medium">
                Take Pre-Test
              </button>
            </Link>
          )}

          {preTestScore !== null && postTestScore === null && (
            <Link to="/post-test">
              <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-medium">
                Take Post-Test
              </button>
            </Link>
          )}

          <Link to="/learn">
            <button className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition font-medium">
              Review Content
            </button>
          </Link>
        </div>

        {/* Tips Section */}
        {postTestScore !== null && (
          <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-6">
            <h3 className="font-bold text-blue-900 mb-3 flex items-center">
              <span className="text-xl mr-2">💡</span>
              Key Takeaways
            </h3>
            <ul className="space-y-2 text-sm text-blue-800">
              <li>• Always verify sender information before clicking links</li>
              <li>• Use two-factor authentication whenever possible</li>
              <li>• Be cautious of urgent requests for personal information</li>
              <li>
                • Check URLs carefully for misspellings or suspicious domains
              </li>
              <li>• When in doubt, contact the organization directly</li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
