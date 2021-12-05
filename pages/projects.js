import { useState } from "react";

import Container from "../components/Container";
import ExternalLink from "../components/ExternalLink";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../constants/projects";
import { getRandomElement } from "../lib/util";
import { gradients } from '../constants/gradients';

export default function Projects() {
  const [searchValue, setSearchValue] = useState("");

  const filteredProjects = projects.filter((post) =>
    post.tags.toString().toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <Container title="Projects | Imanol Ortega">
      <div className="flex flex-col justify-center items-start max-w-screen-md mx-auto mb-16 mt-4">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-6 text-black dark:text-white">
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
                from-green-500 to-green-600">
                Github
              </span>
            </ExternalLink>
            .
          </p>
        </div>
        <div className="relative w-full mb-8">
          <input
            aria-label="Buscar proyectos por tech"
            type="text"
            onChange={(e) => setSearchValue(e.target.value)}
            placeholder="Buscar proyectos por tech"
            className="block w-full px-4 py-2 text-gray-900 bg-white border border-gray-200 rounded-md dark:border-gray-900 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:text-gray-100"
          />
          <svg
            className="absolute w-5 h-5 text-gray-400 right-3 top-3 dark:text-gray-300"
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
        </div>
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6 md:flex-row">
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
    </Container>
  );
}
