import { useState, useEffect } from "react";
import Image from "next/image";
import { array } from "prop-types";

import BlogPostCard from "@/components/cards/BlogPostCard";
import ExternalLink from "@/components/links/ExternalLink";
import Heading from "@/components/sections/Heading";
import LinkWithArrow from "@/components/links/LinkWithArrow";
import ProjectCard from "@/components/cards/ProjectCard";
import PageLayout from "@/layouts/PageLayout";
import SiteLayout from "@/layouts/SiteLayout";

import { formatDate } from "@/lib/datetime";
import { getAllPosts } from "@/lib/posts";
import { getAllProjects } from "@/lib/projects";
import { getRandomElement, shuffle } from "@/lib/util";

export default function Home({ posts, projects }) {
  const [allProjects, setAllProjects] = useState([]);

  useEffect(() => {
    setAllProjects(shuffle(projects).slice(6));

    const interval = setInterval(() => {
      setAllProjects(shuffle(projects).slice(6));
    }, 30000);
    return () => clearInterval(interval);
  }, []);

  const gradients = [
    "from-violet-600 to-emerald-600",
    "from-violet-600 to-rose-500",
    "from-emerald-600 to-violet-600",
    "from-violet-600 to-emerald-600",
    "from-rose-500 to-violet-600",
    "from-violet-600 to-rose-500",
  ];

  return (
    <SiteLayout>
      <PageLayout className="border-gray-200 dark:border-gray-700 md:mb-14 mb-10">
        <div className="flex w-full justify-between flex-col-reverse sm:flex-row items-start">
          <div className="flex flex-col pr-8">
            <Heading
              tag="h1"
              className="font-bold text-3xl md:text-5xl md:leading-normal mb-3
            bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500 animate-fade">
              Imanol Ortega
            </Heading>
            <p className="text-gray-600 dark:text-gray-400 md:mb-16 mb-12">
              Desarrollador Front-End. JavaScript, React y Next JS.
            </p>
          </div>
          <div className="w-[80px] sm:w-[176px] justify-end mb-8 sm:mb-0 md:flex hidden">
            <div className="flex rounded-full bg-gradient-to-tl from-green-400/60 to-blue-500/60 shadow-lg p-1">
              <div className="flex rounded-full bg-slate-50/60 dark:bg-black/60 p-[2px]">
                <Image
                  alt="Imanol Ortega"
                  height={110}
                  width={110}
                  src="/images/imanol.jpg"
                  className="rounded-full filter grayscale"
                />
              </div>
            </div>
          </div>
        </div>
        <Heading
          tag="h2"
          className="font-bold text-2xl md:text-4xl mb-6 text-gray-900 dark:text-white">
          Projects
        </Heading>
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          Proyectos trainee y challenges que hice al principio. Los últimos
          proyectos voy a agregarlos más adelante.
        </p>
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-4 md:flex-row mb-4">
          {allProjects?.map((p) => (
            <ProjectCard
              externalLink={p.attributes.landing}
              gradient={getRandomElement(gradients)}
              githubLink={p.attributes.github}
              key={p.id}
              tags={p.attributes.tags.data}
              title={p.attributes.title}
            />
          ))}
        </div>
        <LinkWithArrow text="Más proyectos" href="/projects" />
      </PageLayout>
    </SiteLayout>
  );
}

Home.defaultProps = {
  posts: {},
};

Home.propTypes = {
  posts: array,
};

export async function getStaticProps() {
  const posts = await getAllPosts();
  const projects = await getAllProjects();

  return {
    props: {
      posts: posts ? posts : null,
      projects: projects ? projects : null,
    },
    revalidate: 60 * 60 * 24,
  };
}
