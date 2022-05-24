import Link from "next/link";
import { string } from "prop-types";

export default function MenuItem({ href, delay, text }) {
  return (
    <li
      className="border-b border-gray-300 dark:border-gray-700 text-slate-600 dark:text-slate-100 text-lg font-semibold"
      style={{ transitionDelay: `${delay}ms` }}>
      <Link href={href} scroll={false}>
        <a className="flex w-auto pb-4">{text}</a>
      </Link>
    </li>
  );
}

MenuItem.defaultProps = {
  href: "",
  delay: "",
  text: "",
};

MenuItem.propTypes = {
  href: string,
  delay: string,
  text: string,
};
