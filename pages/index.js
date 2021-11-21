import Link from "next/link";

import Container from "../components/Container";
import BlogPostCard from "../components/BlogPostCard";
import ProjectCard from "../components/ProjectCard";
import ExternalLink from "../components/ExternalLink";

export function ArrowLink({ text, href }) {
  return (
    <Link href={href}>
      <a
        className="flex content-center h-8 mt-6 text-gray-600 dark:text-gray-400 rounded-lg
          hover:text-gray-800 dark:hover:text-gray-200 transition-all">
        {text}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="wiggle h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M13 7l5 5m0 0l-5 5m5-5H6"
          />
        </svg>
      </a>
    </Link>
  );
}

export default function Home() {
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
        <ArrowLink text="Ver más artículos" href="/projects" />
        <span className="h-16" />
        <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-6 text-black dark:text-white">
          Proyectos
        </h3>
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          Proyectos trainee y challenges que hice al principio. Los últimos
          proyectos voy a agregarlos más adelante.
        </p>
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6 md:flex-row">
          <ProjectCard
            title="Facebook Clone"
            slug="style-guides-component-libraries-design-systems"
            gradient="from-[#D8B4FE] to-[#818CF8]"
          />
          <ProjectCard
            title="Tetris con React"
            slug="rust"
            gradient="from-[#6EE7B7] to-[#9333EA]"
          />
          <ProjectCard
            title="Datatable Googlesheets"
            slug="react-state-management"
            gradient="from-[#FDE68A] to-[#FCA5A5]"
          />
        </div>
        <ArrowLink text="Ver más proyectos" href="/blog" />
      </div>
    </Container>
  );
}
