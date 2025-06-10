function Loader() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[400px] bg-white rounded-xl shadow-lg p-8">
      <div className="relative mb-6">
        <div className="animate-bounce">
          <svg
            className="w-16 h-16 text-indigo-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
            />
          </svg>
        </div>

        {/* Animated dots around the bin */}
        <div className="absolute -top-2 -right-2">
          <div className="w-3 h-3 bg-green-400 rounded-full animate-ping"></div>
        </div>
        <div className="absolute -bottom-2 -left-2">
          <div className="w-2 h-2 bg-blue-400 rounded-full animate-ping animation-delay-200"></div>
        </div>
        <div className="absolute -top-2 -left-2">
          <div className="w-2 h-2 bg-purple-400 rounded-full animate-ping animation-delay-400"></div>
        </div>
      </div>

      {/* Loading Text */}
      <h3 className="text-lg font-semibold text-gray-900 mb-2">
        Loading Waste Bins
      </h3>
      <p className="text-sm text-gray-600 mb-6 text-center max-w-xs">
        We're fetching the latest bin information for you...
      </p>

      {/* Progress Bar */}
      <div className="w-64 bg-gray-200 rounded-full h-2 mb-4">
        <div
          className="bg-indigo-600 h-2 rounded-full animate-pulse"
          style={{ width: "70%" }}
        >
          <div className="h-full bg-gradient-to-r from-indigo-600 to-indigo-400 rounded-full animate-slide"></div>
        </div>
      </div>

      {/* Spinner Dots */}
      <div className="flex space-x-2">
        <div className="w-2 h-2 bg-indigo-600 rounded-full animate-bounce"></div>
        <div className="w-2 h-2 bg-indigo-600 rounded-full animate-bounce animation-delay-200"></div>
        <div className="w-2 h-2 bg-indigo-600 rounded-full animate-bounce animation-delay-400"></div>
      </div>
    </div>
  );
}

export default Loader;
