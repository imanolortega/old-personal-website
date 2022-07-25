import { useState } from "react";
import { any } from "prop-types";

import BlogPost from "@/components/blog/BlogPost";
import ContactCard from "@/components/cards/ContactCard";
import Heading from "@/components/sections/Heading";
import SearchBar from "@/components/sections/SearchBar";
import SectionPage from "@/components/sections/SectionPage";
import PageLayout from "@/layouts/PageLayout";
import SiteLayout from "@/layouts/SiteLayout";

import { formatDate } from "@/lib/datetime";
import { getAllPosts } from "@/lib/posts";
import { getAllRecommendedBlogs } from "@/lib/recommendedBlogs";

export default function Blog({ posts, recommendedBlogs }) {
  const [searchValue, setSearchValue] = useState("");

  const addText = (content, title) => {
    return content + title;
  };

  const filteredArticles = posts.filter((post) =>
    addText(post.attributes.content, post.attributes.title)
      .toString()
      .toLowerCase()
      .includes(searchValue.toLowerCase())
  );

  return (
    <SiteLayout title="Blog | Imanol Ortega">
      <PageLayout className="md:mb-16 mb-12">
        <SectionPage className="prose leading-8 text-gray-600 dark:text-gray-400">
          <Heading
            tag="h1"
            className="font-bold text-3xl md:text-5xl mb-6 text-gray-900 dark:text-white">
            Blog
          </Heading>
          <p className="mb-6">
            Escribo algunas de las cosas que voy descubriendo y le pueden servir
            a alguien más. Principalmente snippets y otras formas de hacerle la
            vida más fácil a un dev.
          </p>
          <SearchBar
            className="mb-10"
            handleSearch={setSearchValue}
            text="Buscar artículo por título o contenido"
          />
          <div className="w-full mb-2">
            {filteredArticles?.map((p) => (
              <BlogPost
                title={p.attributes.title}
                key={p.id}
                date={formatDate(p.attributes.date)}
                slug={p.attributes.slug}
                summary={
                  <div
                    className="text-sm text-gray-600 dark:text-gray-400"
                    dangerouslySetInnerHTML={{
                      __html: p.attributes.description,
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
        </SectionPage>
        <Heading
          tag="h2"
          className="font-bold text-2xl md:text-4xl mb-6 text-gray-900 dark:text-white">
          Blogs
        </Heading>
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          En el día a día navego mucho, buscando info para resolver problemas,
          para crear algún feature de los proyectos en los que trabajo o
          simplemente para aprender/entender algo. Debajo les comparto algunos
          blogs (principalmente de Front-End) que considero muy valiosos y que
          quizás puedan servirles.
        </p>
        <div className="prose leading-8 text-gray-600 dark:text-gray-400 w-full grid grid-cols-1 md:grid-cols-3 gap-4 md:flex-row">
          {recommendedBlogs?.map((blog) => (
            <ContactCard
              path={blog.attributes.url}
              title={blog.attributes.title}
              description={blog.attributes.description}
            />
          ))}
        </div>
      </PageLayout>
    </SiteLayout>
  );
}

Blog.defaultProps = {
  posts: {},
};

Blog.propTypes = {
  posts: any,
};

export async function getStaticProps() {
  const posts = await getAllPosts();
  const recommendedBlogs = await getAllRecommendedBlogs();

  return {
    props: {
      posts: posts ? posts : null,
      recommendedBlogs: recommendedBlogs ? recommendedBlogs : null,
    },
    revalidate: 60 * 60 * 24,
  };
}
