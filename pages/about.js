import { getAllTechnologies, getTechByType } from "@/lib/technologies";

import ContactCard from "@/components/cards/ContactCard";
import ExternalLink from "@/components/links/ExternalLink";
import Heading from "@/components/sections/Heading";
import List from "@/components/sections/List";
import PageLayout from "@/layouts/PageLayout";
import SectionPage from "@/components/sections/SectionPage";
import SiteLayout from "@/layouts/SiteLayout";

export default function About({ technologies }) {
  const frontend = getTechByType(technologies, "Front-end");
  const backend = getTechByType(technologies, "Back-end");
  const random = getTechByType(technologies, "Random");

  return (
    <SiteLayout title="About | Imanol Ortega">
      <PageLayout className="md:mb-16 mb-12">
        <SectionPage className="prose leading-8 text-gray-600 dark:text-gray-400">
          <Heading
            tag="h1"
            className="font-bold text-3xl md:text-5xl mb-6 text-gray-900 dark:text-white">
            About Me
          </Heading>
          <p className="pb-4">
            Buenas, mi nombre es Imanol. Soy desarrollador Front-end en
            <ExternalLink href="https://easytechgreen.com">
              {" "}
              <span
                className="font-semibold bg-clip-text text-transparent bg-gradient-to-r
                from-emerald-500 to-emerald-600 underline decoration-1 underline-offset-4 decoration-emerald-600">
                easytechgreen
              </span>
            </ExternalLink>
            , entusiasta del desarrollo web (JavaScript y React JS,
            principalmente) y de crear interfaces de usuario. Antes fui
            diseñador gráfico y Comunicador Social.
            <br />
            <br />
            Actualmente en mi trabajo utilizo Next JS en el Front y generalmente
            algún Headless CMS en el Back. Para mis Side Projects también
            utilizo Next JS y el Back-end depende del proyecto. Sigo estudiando
            en el día a día, enfocado en mantener buenas prácticas y convertirme
            en Fullstack. Mi foco hoy está en la experiencia de usuario: webs
            rápidas, intuitivas y accesibles.
          </p>
          <ExternalLink href="https://drive.google.com/file/d/1oDfhYE-IZunTBhiCbOm9KLI5TQOL_pQb/view?usp=sharing">
            <span
              className="font-semibold bg-clip-text text-transparent bg-gradient-to-r
              from-purple-500 to-purple-600 underline decoration-1 underline-offset-4 decoration-purple-600">
              Descargar CV
            </span>
          </ExternalLink>
        </SectionPage>
        <SectionPage className="block md:flex w-full justify-between prose leading-8 text-gray-600 dark:text-gray-400">
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <List title="Front-end" data={frontend[0]?.attributes?.tags} />
          </div>
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <List
              title="Back-end, DB & Auth"
              data={backend[0]?.attributes?.tags}
            />
          </div>
          <div className="w-full md:w-1/3">
            <List title="Random" data={random[0]?.attributes?.tags} />
          </div>
        </SectionPage>
        <Heading
          tag="h2"
          className="font-bold text-2xl md:text-4xl mb-6 text-gray-900 dark:text-white">
          Contact
        </Heading>
        <div className="prose leading-8 text-gray-600 dark:text-gray-400 w-full grid grid-cols-1 md:grid-cols-3 gap-4 md:flex-row">
          <ContactCard
            path="mailto:imanolrtega@gmail.com"
            title="Email"
            description="imanolrtega@gmail.com"
            icon="email"
          />
          <ContactCard
            path="https://www.linkedin.com/in/imanol-rtega/"
            title="LinkedIn"
            description="Ver perfil"
            icon="linkedin"
          />
          <ContactCard
            path="https://github.com/imanolrtega"
            title="GitHub"
            description="Ver GitHub"
            icon="github"
          />
        </div>
      </PageLayout>
    </SiteLayout>
  );
}

export async function getStaticProps() {
  const technologies = await getAllTechnologies();

  return {
    props: {
      technologies: technologies ? technologies : null,
    },
    revalidate: 60 * 60 * 24,
  };
}
