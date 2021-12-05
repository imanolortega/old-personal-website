export default function ProjectCard({ date, link, title }) {
  return (
      <div className="relative w-full group">
        <div
        className="
        absolute
        inset-1
        group-hover:inset-0.5
        bg-gradient-to-r from-green-500 to-blue-500
        opacity-50
        group-hover:opacity-60
        transition
        duration-900
        rounded-xl
        blur
        mb-6">
        </div>
        <div className="transform transition-all rounded-xl w-full p-1 mb-6">
          <a href={`${link}`}>
            <div className="h-full w-full bg-gray-50 dark:bg-gray-900 rounded-lg p-4">
              <h4 className="text-lg md:text-lg font-medium mb-2 sm:mb-5 w-full text-gray-900 dark:text-gray-100 tracking-tight">
                {title}
              </h4>
              <p className="text-xs">Publicado el {date}</p>
            </div>
          </a>
        </div>
      </div>
  );
}
