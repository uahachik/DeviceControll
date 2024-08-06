const Spinner = () => (
  <div className="flex items-center justify-center w-full h-full">
    <svg
      className="w-12 h-12 text-gray-500 animate-spin"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
      />
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V4a10 10 0 00-10 10h2z"
      />
    </svg>
  </div>
);

export default Spinner;
