import { Link, useLocation } from "react-router";

export default function Navbar() {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <span className="text-2xl sm:text-3xl font-bold text-blue-600">
                🛡️
              </span>
              {/* Full title shown on small screens and up; hidden on very small viewports */}
              <span className="ml-2 text-xl font-bold text-gray-800 hidden sm:inline-block truncate">
                Cyber Scam Awareness
              </span>
              {/* Short title shown only on extra-small screens to avoid wrapping */}
              <span className="ml-2 text-base font-bold text-gray-800 sm:hidden">
                Cyber
              </span>
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            <Link
              to="/"
              className={`px-3 py-2 rounded-md text-sm font-medium ${
                isActive("/")
                  ? "bg-blue-100 text-blue-700"
                  : "text-gray-600 hover:bg-gray-100"
              }`}
            >
              Home
            </Link>
            <Link
              to="/learn"
              className={`px-3 py-2 rounded-md text-sm font-medium ${
                isActive("/learn")
                  ? "bg-blue-100 text-blue-700"
                  : "text-gray-600 hover:bg-gray-100"
              }`}
            >
              Learn
            </Link>
            <Link
              to="/results"
              className={`px-3 py-2 rounded-md text-sm font-medium ${
                isActive("/results")
                  ? "bg-blue-100 text-blue-700"
                  : "text-gray-600 hover:bg-gray-100"
              }`}
            >
              Results
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
