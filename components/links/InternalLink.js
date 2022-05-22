import { string, any } from "prop-types";
import Link from "next/link";

export default function InternalLink({ href, children }) {
  return (
    <Link href={href} scroll={false}>
      <a className="text-slate-600 hover:text-slate-800 dark:text-slate-400 dark:hover:text-slate-200 transition">
        <span className="capsize">{children}</span>
      </a>
    </Link>
  );
}

InternalLink.defaultProps = {
  href: "",
  children: {},
};

InternalLink.propTypes = {
  href: string,
  children: any,
};

