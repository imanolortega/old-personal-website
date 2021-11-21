import Container from "../components/Container";
import ExternalLink from "../components/ExternalLink";

export default function About() {
  return (
    <Container title="About – Imanol Ortega">
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16 mt-4">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
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
            . Trabajo con Javascript y React JS. Antes fui diseñador
            gráfico y Comunicador Social.
          </p>
        </div>
      </div>
    </Container>

  );
}
