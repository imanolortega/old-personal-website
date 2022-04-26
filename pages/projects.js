import { useState } from "react";

import ExternalLink from "@/components/ExternalLink";
import Heading from "@/components/Heading";
import ProjectCard from "@/components/ProjectCard";
import SearchBar from "@/components/SearchBar";
import SectionPage from "@/components/SectionPage";
import PageLayout from "@/layouts/PageLayout";
import SiteLayout from "@/layouts/SiteLayout";

import { getRandomElement } from "@/lib/util";
import { getAllProjects, searchTag } from "@/lib/projects";

export default function Projects({ projects }) {
  const [searchValue, setSearchValue] = useState("");

  const filteredProjects = projects?.filter((project) =>
    searchTag(project.attributes?.tags?.data, searchValue)
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
      <PageLayout className="md:mb-2">
        <SectionPage className="prose leading-8 text-gray-600 dark:text-gray-400">
          <Heading
            tag="h1"
            className="font-bold text-3xl md:text-5xl mb-6 text-gray-900 dark:text-white">
            Projects
          </Heading>
          <p className="mb-6">
            Algunos proyectos que hice al principio con React (y muy pocos con
            Vue). Clones, challenges, consumo de APIs, Autenticación con
            Firebase, Database con Firebase o Google Sheets, etc. También pueden
            visitar mi
            <ExternalLink href="https://github.com/imanolrtega">
              {" "}
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
            className="mb-8"
            handleSearch={setSearchValue}
            text="Buscar por tecnología"
          />
          <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-4 md:flex-row">
            {filteredProjects?.map((p) => (
              <ProjectCard
                title={p.attributes.title}
                tags={p.attributes.tags.data}
                key={p.id}
                gradient={getRandomElement(gradients)}
                githubLink={p.attributes.github}
                externalLink={p.attributes.landing}
              />
            ))}
          </div>
          {!filteredProjects?.length && (
            <p className="w-full mb-4 text-gray-600 dark:text-gray-400">
              No hay proyectos con esa tecnología
            </p>
          )}
        </SectionPage>
      </PageLayout>
    </SiteLayout>
  );
}

export async function getStaticProps() {
  const projects = await getAllProjects();

  return {
    props: {
      projects: projects ? projects : null,
    },
    revalidate: 60 * 60 * 24,
  };
}
