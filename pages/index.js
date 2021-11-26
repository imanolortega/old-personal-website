import Link from "next/link";

import Container from "../components/Container";
import BlogPostCard from "../components/BlogPostCard";
import ProjectCard from "../components/ProjectCard";
import ExternalLink from "../components/ExternalLink";
import { useState } from "react";
import { projects } from "../constants/projects";
import { useEffect } from "react";
import { getRandomElement, shuffle } from "../lib/utils";

export function ArrowLink({ text, href }) {
  return (
    <Link href={href}>
      <a
        className="flex content-center h-8 text-gray-600 dark:text-gray-400 rounded-lg
          hover:text-gray-800 dark:hover:text-gray-200 hover:translate-x-1 transition-all">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="wiggle h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M13 7l5 5m0 0l-5 5m5-5H6"
          />
        </svg>
        {text}
      </a>
    </Link>
  );
}

export default function Home() {
  const [allProjects, setAllProjects] = useState([]);

  useEffect(() => {
    setAllProjects(shuffle(projects).slice(5));
  }, []);

  let gradients = [
    "from-[#D8B4FE] to-[#818CF8]",
    "from-[#6EE7B7] to-[#9333EA]",
    "from-[#FDE68A] to-[#FCA5A5]",
    "from-[#818CF8] to-[#D8B4FE]",
    "from-[#9333EA] to-[#6EE7B7]",
    "from-[#FCA5A5] to-[#FDE68A]",
  ];

  return (
    <Container>
      <div
        className="flex flex-col justify-center items-start max-w-screen-md border-gray-200
        dark:border-gray-700 mx-auto pb-16">
        <div className="flex flex-col-reverse sm:flex-row items-start">
          <div className="flex flex-col pr-8">
            <h1
              className="font-bold text-3xl md:text-5xl md:leading-normal tracking-tight mb-3
            bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">
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
        <BlogPostCard
          title="Cómo mezclar un array en JS sin métodos"
          slug="style-guides-component-libraries-design-systems"
          gradient="from-[#D8B4FE] to-[#818CF8]"
        />
        <BlogPostCard
          title="Agregar Darkmode con Tailwind"
          slug="style-guides-component-libraries-design-systems"
          gradient="from-[#D8B4FE] to-[#818CF8]"
        />
        <ArrowLink text="Más artículos" href="/blog" />
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
        <ArrowLink text="Más proyectos" href="/projects" />
      </div>
    </Container>
  );
}
