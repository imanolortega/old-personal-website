import { bool, string, func } from "prop-types";

export default function DarkModeButton({ isMounted, isResolvedTheme, onHandleClick }) {
  return (
    <button
      aria-label="Toggle Dark Mode"
      type="button"
      className="w-8 h-8 opacity-75 bg-slate-300 rounded-lg dark:bg-slate-700 flex items-center justify-center hover:ring-2 ring-slate-400 transition-all"
      onClick={onHandleClick}>
      {isMounted && (
        <svg className="h-6 w-6" width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg">
          {isResolvedTheme === "dark" ? (
            <path
              d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
              stroke="#fff"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          ) : (
            <path
              d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
              stroke="#4A5568"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          )}
        </svg>
      )}
    </button>
  );
}

DarkModeButton.defaultProps = {
  isMounted: false,
  isResolvedTheme: "",
  onHandleClick: () => {},
};

DarkModeButton.propTypes = {
  isMounted: bool,
  isResolvedTheme: string,
  onHandleClick: func,
};