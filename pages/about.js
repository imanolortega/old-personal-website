import Container from "../components/Container";
import ExternalLink from "../components/ExternalLink";
import {techFront, techBack, oldTech} from '../constants/technologies';

export default function About() {
  console.log(techFront);
  return (
    <Container title="About | Imanol Ortega">
      <div className="flex flex-col justify-center items-start max-w-screen-md mx-auto mb-16 mt-4">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-6 text-black dark:text-white">
          About Me
        </h1>
        <div className="mb-8 prose leading-8 text-gray-600 dark:text-gray-400">
          <p>
            Buenas, mi nombre es Imanol. Soy desarrollador Frontend en
            <ExternalLink href="https://easytechgreen.com">
              {" "}
              <span
                className="font-semibold bg-clip-text text-transparent bg-gradient-to-r
                from-green-500 to-green-600">
                easytechgreen
              </span>
            </ExternalLink>
            . Trabajo con Javascript, React y Next JS. Antes fui diseñador
            gráfico y Comunicador Social.
          </p>
        </div>
        <div className="block md:flex w-full justify-between mb-8 prose leading-8 text-gray-600 dark:text-gray-400">
          <div className="w-full md:w-1/3 mb-6 md:mb-0" >
            <h3 className="text-xl text-black dark:text-white mb-3">Front</h3>
            <ul>
              {techFront.map((t) => (
                <li>- {t.tech}</li>
              ))}
            </ul>
          </div>
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-xl text-black dark:text-white mb-3">Back</h3>
            <ul>
              {techBack.map((t) => (
                <li>- {t.tech}</li>
              ))}
            </ul>
          </div>
          <div className="w-full md:w-1/3 mb-6 md:mb-0" >
            <h3 className="text-xl text-black dark:text-white mb-3">Random 🥸</h3>
            <ul>
              {oldTech.map((t) => (
                <li>- {t.tech}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Container>
  );
}
