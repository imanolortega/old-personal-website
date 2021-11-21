import Container from "../components/Container";
import ExternalLink from "../components/ExternalLink";
import ProjectCard from "../components/ProjectCard";

export default function Projects() {
  return (
    <Container title="About – Imanol Ortega">
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16 mt-4">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
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
        <div className="w-full flex gap-6 flex-col md:flex-row">
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
        <div className="w-full flex gap-6 flex-col md:flex-row mt-6">
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
      </div>
    </Container>
  );
}
