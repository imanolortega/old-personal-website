import { useState, useEffect } from "react";

import { projects } from "../constants/projects";
import { getPaginatedPosts } from '../lib/posts';
import { getRandomElement, shuffle } from "../lib/util";

import BlogPostCard from "../components/BlogPostCard";
import Container from "../components/Container";
import ExternalLink from "../components/ExternalLink";
import LinkWithIcon from '../components/LinkWithIcon';
import ProjectCard from "../components/ProjectCard"
import { gradients } from '../constants/gradients';
import { formatDate } from '../lib/datetime';

export default function Home({posts}) {
  const [allProjects, setAllProjects] = useState([]);
  console.log(formatDate(posts[0].date))

  useEffect(() => {
    setAllProjects(shuffle(projects).slice(5));

    const interval = setInterval(() => {
      setAllProjects(shuffle(projects).slice(5));
    }, 30000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Container>
      <div
        className="flex flex-col justify-center items-start max-w-screen-md border-gray-200
        dark:border-gray-700 mx-auto pb-16">
        <div className="flex flex-col-reverse sm:flex-row items-start">
          <div className="flex flex-col pr-8">
            <h1
              className="font-bold text-3xl md:text-5xl md:leading-normal tracking-tight mb-3
            bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500 animate-fade">
              Imanol Ortega
            </h1>
            <h2 className="text-gray-700 dark:text-gray-200 mb-16">
              Desarrollador Frontend JR en{" "}
              <ExternalLink href="https://easytechgreen.com/">
                <span
                  className="font-semibold bg-clip-text text-transparent bg-gradient-to-r
                from-green-500 to-green-600">
                  easytechgreen
                </span>
              </ExternalLink>
              .
            </h2>
          </div>
          <div className="w-[80px] sm:w-[176px] relative mb-2 sm:mb-0 mr-auto"></div>
        </div>
        <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-6 text-black dark:text-white">
          Blog
        </h3>
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          Trato de escribir algunas de las cosas que voy descubriendo y le
          pueden servir a alguien más.
        </p>
        {posts?.map((p) => (
          <BlogPostCard
            title={p.title}
            link={p.slug}
            date={formatDate(p.date)}
          />
        ))}
        <LinkWithIcon text="Más artículos" href="/blog" />
        <span className="h-16" />
        <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-6 text-black dark:text-white">
          Proyectos
        </h3>
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          Proyectos trainee y challenges que hice al principio. Los últimos
          proyectos voy a agregarlos más adelante.
        </p>
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6 md:flex-row mb-6">
          {allProjects.map((p) => (
            <ProjectCard
              title={p.title}
              tags={p.tags}
              link={p.visit}
              key={p.id}
              gradient={getRandomElement(gradients)}
            />
          ))}
        </div>
        <LinkWithIcon text="Más proyectos" href="/projects" />
      </div>
    </Container>
  );
}

export async function getStaticProps() {
  const { posts, pagination } = await getPaginatedPosts();
  console.log(posts)
  return {
    props: {
      posts,
      pagination: {
        ...pagination,
        basePath: '/posts',
      },
    },
  };
}
