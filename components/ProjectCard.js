import cn from "classnames";

export default function ProjectCard({ link, title, gradient }) {
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
          <h4 className="text-lg md:text-lg font-medium mb-6 sm:mb-10 w-full text-gray-900 dark:text-gray-100 tracking-tight">
            {title}
          </h4>
        </div>
        <div className="flex items-center text-gray-800 dark:text-gray-200 capsize"></div>
      </div>
    </a>
  );
}
