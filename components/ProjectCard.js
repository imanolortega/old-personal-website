import cn from "classnames";

export default function ProjectCard({ link, tags, title, gradient }) {
  return (
    <a
      href={`${link}`}
      target="_blank"
      className={cn(
        "transform hover:scale-[1.01] transition-all",
        "rounded-xl bg-gradient-to-r p-1",
        gradient
      )}>
      <div className="flex flex-col justify-between h-full bg-white dark:bg-gray-900 rounded-lg p-4">
        <div className="flex flex-col md:flex-row justify-between">
          <h4 className="text-lg md:text-lg font-medium mb-4 sm:mb-6 w-full text-gray-900 dark:text-gray-100 tracking-tight">
            {title}
          </h4>
        </div>
        <div className="text-gray-800 dark:text-gray-200 capsize">
          {tags && tags.map((t) => (
            <div className="text-xs text-gray-800 dark:text-white mb-1">
              {t}
            </div>
          ))}
        </div>
      </div>
    </a>
  );
}
