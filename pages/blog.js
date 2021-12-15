import { useState } from 'react';

import Container from "../components/Container";
import BlogPost from "../components/BlogPost";

import { formatDate } from '../lib/datetime';
import { getPaginatedPosts, sanitizeExcerpt } from "../lib/posts";

export default function Blog({ posts }) {
  const [searchValue, setSearchValue] = useState("");

  const addText = (content, title) => {
    return content + title;
  }

  const filteredArticles = posts.filter((post) =>
    addText(post.content, post.title).toString().toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <Container title="Blog | Imanol Ortega">
      <div className="flex flex-col justify-center items-start max-w-screen-md mx-auto mb-16 mt-4">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-6 text-gray-900 dark:text-white">
          Blog
        </h1>
        <div className="mb-8 prose leading-8 text-gray-600 dark:text-gray-400">
          <p>
            Escribo algunas de las cosas que voy descubriendo y le
            pueden servir a alguien más. Principalmente snippets y otras formas
            de hacerle la vida más fácil a un dev JR (o no tanto).
          </p>
        </div>
        <div className="relative w-full mb-8">
          <input
            aria-label="Buscar proyectos por palabras"
            type="text"
            onChange={(e) => setSearchValue(e.target.value)}
            placeholder="Buscar artículo por título o contenido"
            className="block w-full px-4 py-2 text-gray-900 bg-white border border-slate-300 rounded-md dark:border-slate-900 focus:ring-blue-500 focus:border-blue-500 dark:bg-slate-800 dark:text-slate-100 outline-slate-600"
          />
          <svg
            className="absolute w-5 h-5 text-gray-400 right-3 top-3 dark:text-gray-300"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
        <div className="w-full">
          {filteredArticles?.map((p) => (
            <BlogPost
              title={p.title}
              key={p.id}
              date={formatDate(p.date)}
              slug={p.slug}
              summary={
                <div
                  className="text-sm text-gray-600 dark:text-gray-400"
                  dangerouslySetInnerHTML={{
                    __html: sanitizeExcerpt(p.excerpt),
                  }}
                />
              }
            />
          ))}
        </div>
        {!filteredArticles.length && (
          <p className="w-full mb-4 text-gray-600 dark:text-gray-400">
            No hay artículos con esas palabras
          </p>
        )}
      </div>
    </Container>
  );
}

export async function getStaticProps() {
  const { posts, pagination } = await getPaginatedPosts();
  return {
    props: {
      posts,
      pagination: {
        ...pagination,
        basePath: "/posts",
      },
    },
    revalidate: 60 * 60 * 24,
  };
}
