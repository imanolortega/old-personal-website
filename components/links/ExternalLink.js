import { string, any } from "prop-types";

export default function ExternalLink({ href, children }) {
  return (
    <a
      className="text-slate-600 hover:text-slate-800 dark:text-slate-400 dark:hover:text-slate-200 transition"
      target="_blank"
      rel="noopener noreferrer"
      href={href}>
      {children}
    </a>
  );
}

ExternalLink.defaultProps = {
  href: "",
  children: {},
};

ExternalLink.propTypes = {
  href: string,
  children: any,
};
