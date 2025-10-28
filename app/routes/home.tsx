import type { Route } from "./+types/home";
import { Link } from "react-router";
import { useApp } from "../context/AppContext";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  const { preTestScore, postTestScore } = useApp();

  return (
    <div className="min-h-screen bg-linear-to-br from-blue-50 to-indigo-100">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Cyber Scam Awareness
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Learn to protect yourself from online scams and cyber threats
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="text-4xl mb-3">📧</div>
            <h3 className="font-semibold text-gray-800 mb-2">Phishing</h3>
            <p className="text-sm text-gray-600">Recognize fraudulent emails</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="text-4xl mb-3">💳</div>
            <h3 className="font-semibold text-gray-800 mb-2">Identity Theft</h3>
            <p className="text-sm text-gray-600">Protect your personal data</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="text-4xl mb-3">🎯</div>
            <h3 className="font-semibold text-gray-800 mb-2">
              Social Engineering
            </h3>
            <p className="text-sm text-gray-600">Spot manipulation tactics</p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Your Learning Journey
          </h2>

          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center">
                <span className="text-2xl mr-4">1️⃣</span>
                <div>
                  <h3 className="font-semibold text-gray-800">Pre-Test</h3>
                  <p className="text-sm text-gray-600">
                    Assess your current knowledge
                  </p>
                </div>
              </div>
              {preTestScore !== null ? (
                <span className="text-green-600 font-semibold">
                  ✓ Completed
                </span>
              ) : (
                <Link to="/pre-test">
                  <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition">
                    Start
                  </button>
                </Link>
              )}
            </div>

            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center">
                <span className="text-2xl mr-4">2️⃣</span>
                <div>
                  <h3 className="font-semibold text-gray-800">Learn</h3>
                  <p className="text-sm text-gray-600">
                    Educational content on scams
                  </p>
                </div>
              </div>
              <Link to="/learn">
                <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition">
                  Learn
                </button>
              </Link>
            </div>

            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center">
                <span className="text-2xl mr-4">3️⃣</span>
                <div>
                  <h3 className="font-semibold text-gray-800">
                    Interactive Quiz
                  </h3>
                  <p className="text-sm text-gray-600">
                    Apply what you've learned
                  </p>
                </div>
              </div>
              <Link to="/quiz">
                <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition">
                  Practice
                </button>
              </Link>
            </div>

            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center">
                <span className="text-2xl mr-4">4️⃣</span>
                <div>
                  <h3 className="font-semibold text-gray-800">Post-Test</h3>
                  <p className="text-sm text-gray-600">
                    Measure your improvement
                  </p>
                </div>
              </div>
              {postTestScore !== null ? (
                <span className="text-green-600 font-semibold">
                  ✓ Completed
                </span>
              ) : (
                <Link to="/post-test">
                  <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition">
                    Start
                  </button>
                </Link>
              )}
            </div>
          </div>
        </div>

        {(preTestScore !== null || postTestScore !== null) && (
          <div className="text-center">
            <Link to="/results">
              <button className="bg-indigo-600 text-white px-8 py-3 rounded-lg hover:bg-indigo-700 transition text-lg font-semibold">
                View Your Results
              </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
