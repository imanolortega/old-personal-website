import { any, string } from "prop-types";

export default function ExternalLink({ children, className, href }) {
  return (
    <a
      className={`${className} text-slate-600 hover:text-slate-800 dark:text-slate-400 dark:hover:text-slate-200 transition`}
      target="_blank"
      rel="noopener noreferrer"
      href={href}>
      {children}
    </a>
  );
}

ExternalLink.defaultProps = {
  className: "",
  children: {},
  href: "",
};

ExternalLink.propTypes = {
  children: any,
  className: string,
  href: string,
};
