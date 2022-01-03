const ExternalLink = ({ href, children }) => (
  <a
    className="text-slate-500 hover:text-slate-600 dark:text-slate-400 dark:hover:text-slate-200 transition"
    target="_blank"
    rel="noopener noreferrer"
    href={href}>
    {children}
  </a>
);

export default ExternalLink;
