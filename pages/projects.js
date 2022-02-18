import { useState } from "react";

import SiteLayout from "../components/SiteLayout";
import ExternalLink from "../components/ExternalLink";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../constants/projects";
import { getRandomElement } from "../lib/util";

export default function Projects() {
  const [searchValue, setSearchValue] = useState("");

  const filteredProjects = projects.filter((post) =>
    post.tags.toString().toLowerCase().includes(searchValue.toLowerCase())
  );

  const gradients = [
    "from-violet-600 to-emerald-600",
    "from-violet-600 to-rose-500",
    "from-emerald-600 to-violet-600",
    "from-violet-600 to-emerald-600",
    "from-rose-500 to-violet-600",
    "from-violet-600 to-rose-500",
  ];

  return (
    <SiteLayout title="Projects | Imanol Ortega">
      <div className="flex flex-col justify-center items-start max-w-screen-md mx-auto mb-16 mt-4">
        <h1 className="font-bold text-3xl md:text-5xl mb-6 text-gray-900 dark:text-white">
          Projects
        </h1>
        <div className="mb-6 prose leading-8 text-gray-600 dark:text-gray-400">
          <p>
            Algunos proyectos que hice al principio con React. Clones,
            challenges, consumo de APIs, Autenticación con Firebase, Database
            con Firebase o Google Sheets, etc. También pueden visitar mi
            <ExternalLink href="https://easytechgreen.com">
              {" "}
              <span
                className="font-semibold bg-clip-text text-transparent bg-gradient-to-r
                from-purple-500 to-purple-600 underline decoration-1 underline-offset-4 decoration-purple-600">
                Github
              </span>
            </ExternalLink>
            .
          </p>
        </div>
        <div className="relative w-full mb-8">
          <svg
            className="absolute w-5 h-5 text-gray-400 left-3 top-3 dark:text-gray-300"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
          <input
            aria-label="Buscar proyectos por tech"
            type="text"
            onChange={(e) => setSearchValue(e.target.value)}
            placeholder="Buscar proyectos por tech"
            className="block w-full px-12 py-2 text-gray-900 bg-white border border-slate-300 rounded-md dark:border-slate-900 focus:ring-blue-500 focus:border-blue-500 dark:bg-slate-800 dark:text-slate-100 outline-slate-600"
          />
        </div>
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-4 md:flex-row">
          {filteredProjects.map((p) => (
            <ProjectCard
              title={p.title}
              tags={p.tags}
              link={p.visit}
              key={p.id}
              gradient={getRandomElement(gradients)}
            />
          ))}
        </div>
        {!filteredProjects.length && (
          <p className="w-full mb-4 text-gray-600 dark:text-gray-400">
            No hay proyectos con ese nombre
          </p>
        )}
      </div>
    </SiteLayout>
  );
}
