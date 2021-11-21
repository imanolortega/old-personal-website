import Container from "../components/Container";
import ExternalLink from "../components/ExternalLink";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../constants/projects";

export default function Projects() {
  console.log(projects)
  return (
    <Container title="Projects | Imanol Ortega">
      <div className="flex flex-col justify-center items-start max-w-screen-md mx-auto mb-16 mt-4">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-6 text-black dark:text-white">
          Projects
        </h1>
        <div className="mb-8 prose leading-8 text-gray-600 dark:text-gray-400">
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
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6 md:flex-row">
          {projects.map((p) => (
            <ProjectCard
              title={p.title}
              link={p.visit}
              gradient="from-[#D8B4FE] to-[#818CF8]"
            />
          ))}
        </div>
      </div>
    </Container>
  );
}
