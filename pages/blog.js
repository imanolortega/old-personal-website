import { useState } from 'react';

import BlogPost from '../components/BlogPost';
import ContactCard from '../components/ContactCard';
import Heading from '../components/Heading';
import PageLayout from '../components/PageLayout';
import SearchBar from '../components/SearchBar';
import SiteLayout from '../components/SiteLayout';

import { formatDate } from '../lib/datetime';
import { getPaginatedPosts, sanitizeExcerpt } from '../lib/posts';
import { recommendedBlogs } from '../constants/recommendedBlogs';
import SectionPage from '../components/SectionPage';

export default function Blog({ posts }) {
  const [searchValue, setSearchValue] = useState('');

  const addText = (content, title) => {
    return content + title;
  };

  const filteredArticles = posts.filter((post) =>
    addText(post.content, post.title)
      .toString()
      .toLowerCase()
      .includes(searchValue.toLowerCase())
  );

  return (
    <SiteLayout title="Blog | Imanol Ortega">
      <PageLayout>
        <SectionPage className="prose leading-8 text-gray-600 dark:text-gray-400">
          <Heading tag="h1" className="font-bold text-3xl md:text-5xl mb-6 text-gray-900 dark:text-white">
            Blog
          </Heading>
          <p className='mb-6'>
            Escribo algunas de las cosas que voy descubriendo y le pueden servir
            a alguien más. Principalmente snippets y otras formas de hacerle la
            vida más fácil a un dev JR (o no tanto).
          </p>
          <SearchBar
            className="mb-10"
            handleSearch={setSearchValue}
            text="Buscar artículo por título o contenido"
          />
          <div className="w-full mb-2">
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
        </SectionPage>
        <Heading tag="h2" className="font-bold text-2xl md:text-4xl mb-6 text-gray-900 dark:text-white">
          Recommended Blogs
        </Heading>
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          En el día a día navego mucho, buscando info para resolver bugs, para
          crear algún feature de los proyectos en los que trabajo o simplemente
          para aprender/entender algo. Debajo les comparto algunos blogs que
          considero muy valiosos y que quizás puedan servirles. Son de Front-end
          principalmente.
        </p>
        <div className="prose leading-8 text-gray-600 dark:text-gray-400 w-full grid grid-cols-1 md:grid-cols-3 gap-4 md:flex-row">
          {recommendedBlogs.map((blog) => (
            <ContactCard
              path={blog.url}
              title={blog.title}
              description={blog.description}
            />
          ))}
        </div>
      </PageLayout>
    </SiteLayout>
  );
}

export async function getStaticProps() {
  const { posts, pagination } = await getPaginatedPosts();
  return {
    props: {
      posts,
      pagination: {
        ...pagination,
        basePath: '/posts',
      },
    },
    revalidate: 60 * 60 * 24,
  };
}
