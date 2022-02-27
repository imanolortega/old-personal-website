import { useState, useEffect } from "react";
import Image from 'next/image';

import { projects } from "../constants/projects";
import { getPaginatedPosts } from '../lib/posts';
import { getRandomElement, shuffle } from "../lib/util";

import BlogPostCard from "../components/BlogPostCard";
import SiteLayout from "../components/SiteLayout";
import ExternalLink from "../components/ExternalLink";
import LinkWithIcon from '../components/LinkWithIcon';
import ProjectCard from "../components/ProjectCard";
import { formatDate } from '../lib/datetime';
import PageLayout from "../components/PageLayout";

export default function Home({ posts }) {
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
            <h1
              className="font-bold text-3xl md:text-5xl md:leading-normal mb-3
            bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500 animate-fade">
              Imanol Ortega
            </h1>
            <p className="text-gray-600 dark:text-gray-400 md:mb-16 mb-12">
              Desarrollador Front-end en{' '}
              <ExternalLink href="https://easytechgreen.com/">
                <span
                  className="font-semibold bg-clip-text text-transparent bg-gradient-to-r
                from-emerald-500 to-emerald-600 underline decoration-1 underline-offset-4 decoration-emerald-600">
                  easytechgreen
                </span>
              </ExternalLink>
              . JavaScript, React y Next JS.
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
        <h2 className="font-bold text-2xl md:text-4xl mb-6 text-gray-900 dark:text-white">
          Blog
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          Trato de escribir algunas de las cosas que voy descubriendo y le
          pueden servir a alguien más.
        </p>
        {posts?.map((p) => (
          <BlogPostCard
            date={formatDate(p.date)}
            key={p.title}
            link={`blog/${p.slug}`}
            modified={p.modified}
            title={p.title}
          />
        ))}
        <LinkWithIcon text="Más artículos" href="/blog" />
        <span className="md:h-16 h-12" />
        <h2 className="font-bold text-2xl md:text-4xl mb-6 text-gray-900 dark:text-white">
          Projects
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          Proyectos trainee y challenges que hice al principio. Los últimos
          proyectos voy a agregarlos más adelante.
        </p>
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-4 md:flex-row mb-4">
          {allProjects.map((p) => (
            <ProjectCard
              externalLink={p.visit}
              gradient={getRandomElement(gradients)}
              githubLink={p.source}
              key={p.id}
              link={p.visit}
              tags={p.tags}
              title={p.title}
            />
          ))}
        </div>
        <LinkWithIcon text="Más proyectos" href="/projects" />
      </PageLayout>
    </SiteLayout>
  );
}

export async function getStaticProps() {
  const { posts, pagination } = await getPaginatedPosts();
  return {
    props: {
      posts,
      pagination: {
        ...pagination,
        basePath: '/posts',
      },
    },
    revalidate: 60 * 60 * 24,
  };
}
