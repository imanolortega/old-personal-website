import Container from "../components/Container";
import BlogPost from "../components/BlogPost";
import BlogPostCard from "../components/BlogPostCard";
import ExternalLink from "../components/ExternalLink";

export default function Blog() {
  return (
    <Container title="Blog | Imanol Ortega">
      <div className="flex flex-col justify-center items-start max-w-screen-md mx-auto mb-16 mt-4">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-6 text-black dark:text-white">
          Blog
        </h1>
        <div className="mb-8 prose leading-8 text-gray-600 dark:text-gray-400">
          <p>
            Trato de escribir algunas de las cosas que voy descubriendo y le
            pueden servir a alguien más, principalmente snippets y otras formas de hacerle la vida más fácil a un dev.
          </p>
        </div>
        <div className="w-full">
          <h3 className="mt-8 mb-6 text-2xl font-bold tracking-tight text-black md:text-4xl dark:text-white">
            Todos
          </h3>
          <BlogPost
            title="Cómo pelar una naranja"
            summary="Es muy fácil"
            slug="nota-1"
          />
          <BlogPost
            title="Cómo pelar una naranja"
            summary="Es muy fácil"
            slug="nota-1"
          />
        </div>
      </div>
    </Container>
  );
}
