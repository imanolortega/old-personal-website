import Link from "next/link";
import { string } from "prop-types";

export default function LinkWithArrow({ href, text }) {
  return (
    <Link href={href} scroll={false}>
      <a
        className="flex content-center h-8 text-gray-600 dark:text-gray-400 rounded-lg
          hover:text-gray-800 dark:hover:text-gray-200 group">
        <span className="mr-0.5">{text}</span>
        <span className="transform translate-x-0 group-hover:translate-x-1 group-hover:w-4 ease-out duration-150 transition">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M13 7l5 5m0 0l-5 5m5-5H6"
            />
          </svg>
        </span>
      </a>
    </Link>
  );
}

LinkWithArrow.defaultProps = {
  href: "",
  text: ""
};

LinkWithArrow.propTypes = {
  href: string,
  text: string
};