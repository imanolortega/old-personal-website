import { func, string } from "prop-types";

export default function SearchBar({ className, handleSearch, text }) {
  return (
    <form className={`relative w-full ${className}`}>
      <label className="sr-only">{text}</label>
      <svg
        className="absolute w-5 h-5 text-gray-400 left-3 top-[0.85rem] dark:text-gray-300"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        />
      </svg>
      <input
        aria-label={text}
        type="text"
        onChange={(e) => handleSearch(e.target.value)}
        placeholder={text}
        className="block w-full px-12 py-2 text-gray-900 bg-white border border-slate-300 rounded-md dark:border-slate-900 focus:ring-blue-500 focus:border-blue-500 dark:bg-slate-800 dark:text-slate-100 outline-slate-600"
      />
    </form>
  );
}

SearchBar.defaultProps = {
  className: "",
  handleSearch: () => {},
  text: "",
};

SearchBar.propTypes = {
  className: string,
  handleSearch: func,
  text: string,
};
