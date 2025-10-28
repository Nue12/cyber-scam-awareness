import { Link } from "react-router";

export default function NotFound() {
  return (
    <main className="pt-16 min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="max-w-md mx-auto text-center px-6">
        <div className="text-6xl sm:text-7xl">🙈</div>
        <h1 className="mt-4 text-3xl sm:text-4xl font-bold text-gray-900">404 — Page Not Found</h1>
        <p className="mt-2 text-gray-600">We couldn't find the page you're looking for.</p>
        <Link
          to="/"
          className="inline-block mt-6 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          Go to Home
        </Link>
      </div>
    </main>
  );
}
