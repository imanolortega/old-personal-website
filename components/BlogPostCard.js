import cn from "classnames";

export default function ProjectCard({ link, title, slug, gradient }) {
  return (
    <div
      className={cn(
        "transform hover:scale-[1.01] transition-all",
        "rounded-xl w-full p-1 border border-gray-300 dark:border-gray-700 mb-6",
        gradient
      )}>
      <a href={`${link}`}>
        <div className="flex h-full w-full dark:bg-gray-900 rounded-lg p-4">
          <h4 className="text-lg md:text-lg font-medium mb-2 sm:mb-5 w-full text-gray-900 dark:text-gray-100 tracking-tight">
            {title}
          </h4>
        </div>
      </a>
    </div>
  );
}
