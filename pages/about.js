import SiteLayout from "../components/SiteLayout";
import ExternalLink from "../components/ExternalLink";
import {techFront, techBack, oldTech} from '../constants/technologies';
import ContactCard from '../components/ContactCard';

export default function About() {
  return (
    <SiteLayout title="About | Imanol Ortega">
      <div className="flex flex-col justify-center items-start max-w-screen-md mx-auto mb-16 mt-4">
        <h1 className="font-bold text-3xl md:text-5xl mb-6 text-gray-900 dark:text-white">
          About Me
        </h1>
        <div className="mb-8 prose leading-8 text-gray-600 dark:text-gray-400">
          <p>
            Buenas, mi nombre es Imanol. Soy desarrollador Frontend en
            <ExternalLink href="https://easytechgreen.com">
              {' '}
              <span
                className="font-semibold bg-clip-text text-transparent bg-gradient-to-r
                from-emerald-500 to-emerald-600 underline decoration-1 underline-offset-4 decoration-emerald-600">
                easytechgreen
              </span>
            </ExternalLink>
            . Trabajo con Javascript, React y Next JS. Antes fui diseñador
            gráfico y Comunicador Social.
          </p>
        </div>
        <div className="block md:flex w-full justify-between mb-8 prose leading-8 text-gray-600 dark:text-gray-400">
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-xl text-gray-900 dark:text-white mb-3">
              Front
            </h3>
            <ul>
              {techFront.map((t) => (
                <li key={t.key}>- {t.tech}</li>
              ))}
            </ul>
          </div>
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-xl text-gray-900 dark:text-white mb-3">
              DB & Auth
            </h3>
            <ul>
              {techBack.map((t) => (
                <li key={t.key}>- {t.tech}</li>
              ))}
            </ul>
          </div>
          <div className="w-full md:w-1/3 mb-8 md:mb-0">
            <h3 className="text-xl text-gray-900 dark:text-white mb-3">
              Random
            </h3>
            <ul>
              {oldTech.map((t) => (
                <li key={t.key}>- {t.tech}</li>
              ))}
            </ul>
          </div>
        </div>
        <h2 className="font-bold text-2xl md:text-4xl mb-6 text-gray-900 dark:text-white">
          Contacto
        </h2>
        <div className="mb-8 prose leading-8 text-gray-600 dark:text-gray-400 w-full grid grid-cols-1 md:grid-cols-3 gap-4 md:flex-row">
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
      </div>
    </SiteLayout>
  );
}
