import { useState } from 'react';

import ExternalLink from '../components/ExternalLink';
import Heading from '../components/Heading';
import PageLayout from '../components/PageLayout';
import ProjectCard from '../components/ProjectCard';
import SearchBar from '../components/SearchBar';
import SiteLayout from '../components/SiteLayout';

import { projects } from '../constants/projects';
import { getRandomElement } from '../lib/util';
import SectionPage from '../components/SectionPage';

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
      <PageLayout className="md:mb-2 mb-1">
        <SectionPage className="prose leading-8 text-gray-600 dark:text-gray-400">
          <Heading
            tag="h1"
            className="font-bold text-3xl md:text-5xl mb-6 text-gray-900 dark:text-white">
            Projects
          </Heading>
          <p className='mb-6'>
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
          <SearchBar
            className="md:mb-8"
            handleSearch={setSearchValue}
            text="Buscar por tecnología"
          />
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
        </SectionPage>
      </PageLayout>
    </SiteLayout>
  );
}
