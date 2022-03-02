import Heading from '@/components/Heading';
import PageLayout from '@/layouts/PageLayout';
import SiteLayout from '@/layouts/SiteLayout';

export default function Custom404() {
  return (
    <SiteLayout>
      <PageLayout className="border-gray-200 dark:border-gray-700 md:mb-14 mb-10">
        <div className="h-12"></div>
        <div className="flex w-full sm:flex-row items-start">
          <section className="flex flex-col">
            <Heading
              tag="h1"
              className="text-center font-bold text-4xl md:text-5xl md:leading-normal mb-3
            bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500 animate-fade">
              Epa!
            </Heading>
            <p className="text-center text-gray-600 dark:text-gray-400 md:mb-16 mb-12">
              <strong>Un error 404</strong>. Parece que la página que buscas no
              existe...
              <br />
              Puedes probar con alguno de los links del menú o del footer.
            </p>
          </section>
        </div>
        <div className="h-12"></div>
      </PageLayout>
    </SiteLayout>
  );
}
