import { useState } from 'react';

import ExternalLink from '../components/ExternalLink';
import SearchBar from '../components/SearchBar';
import SiteLayout from '../components/SiteLayout';
import ProjectCard from '../components/ProjectCard';

import { projects } from '../constants/projects';
import { getRandomElement } from '../lib/util';


export default function Projects() {
  const [searchValue, setSearchValue] = useState('');

  const filteredProjects = projects.filter((post) =>
    post.tags.toString().toLowerCase().includes(searchValue.toLowerCase())
  );

  const gradients = [
    'from-violet-600 to-emerald-600',
    'from-violet-600 to-rose-500',
    'from-emerald-600 to-violet-600',
    'from-violet-600 to-emerald-600',
    'from-rose-500 to-violet-600',
    'from-violet-600 to-rose-500',
  ];

  return (
    <SiteLayout title="Projects | Imanol Ortega">
      <div className="flex flex-col justify-center items-start max-w-screen-md mx-auto md:mb-16 mb-12 mt-4">
        <h1 className="font-bold text-3xl md:text-5xl mb-6 text-gray-900 dark:text-white">
          Projects
        </h1>
        <div className="mb-6 prose leading-8 text-gray-600 dark:text-gray-400">
          <p>
            Algunos proyectos que hice al principio con React (y muy pocos con
            Vue). Clones, challenges, consumo de APIs, Autenticación con
            Firebase, Database con Firebase o Google Sheets, etc. También pueden
            visitar mi
            <ExternalLink href="https://github.com/imanolrtega">
              {' '}
              <span
                className="font-semibold bg-clip-text text-transparent bg-gradient-to-r
                from-purple-500 to-purple-600 underline decoration-1 underline-offset-4 decoration-purple-600">
                Github
              </span>
              , donde hay más repos
            </ExternalLink>
            .
          </p>
        </div>
        <SearchBar handleSearch={setSearchValue} text="Buscar por tecnología" />
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-4 md:flex-row">
          {filteredProjects.map((p) => (
            <ProjectCard
              title={p.title}
              tags={p.tags}
              link={p.visit}
              key={p.id}
              gradient={getRandomElement(gradients)}
              githubLink={p.source}
              externalLink={p.visit}
            />
          ))}
        </div>
        {!filteredProjects.length && (
          <p className="w-full mb-4 text-gray-600 dark:text-gray-400">
            No hay proyectos con esa tecnología
          </p>
        )}
      </div>
    </SiteLayout>
  );
}
