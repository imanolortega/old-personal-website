import Button from '@/components/Button';
import Heading from '@/components/Heading';
import PageLayout from '@/layouts/PageLayout';
import SiteLayout from '@/layouts/SiteLayout';

import { getPaginatedPosts } from '@/lib/posts';
import { getRandomElement } from '@/lib/util';

export default function Custom404({ posts }) {
  const staticLinks = ["/", "/about", "/blog", "/projects"];
  const dynamicLinks = posts.map((p) => {
    return `/${p.slug}`;
  })
  const links = staticLinks.concat(dynamicLinks);

  return (
    <SiteLayout>
      <PageLayout className="border-gray-200 dark:border-gray-700 md:mb-14 mb-10">
        <div className='h-12'></div>
        <div className="flex w-full sm:flex-row items-start">
          <section className="flex flex-col">
            <Heading
              tag="h1"
              className="text-center font-bold text-4xl md:text-5xl md:leading-normal mb-3
            bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500 animate-fade">
              Epa!
            </Heading>
            <div className="text-center text-gray-600 dark:text-gray-400 md:mb-16 mb-12">
              <p><strong>Un error 404</strong>. Parece que la página que buscas no existe...</p>
              <p>Puedes probar con alguno de los links del menú o footer, o hacer click en el botón de links random.</p>
            </div>
            <div className='w-full flex justify-center'>
              <Button href={getRandomElement(links)} />
            </div>
          </section>
        </div>
        <div className='h-12'></div>
      </PageLayout>
    </SiteLayout>
  );
}

export async function getStaticProps() {
  const { posts } = await getPaginatedPosts();
  return {
    props: {
      posts,
    },
    revalidate: 60 * 60 * 24,
  };
}