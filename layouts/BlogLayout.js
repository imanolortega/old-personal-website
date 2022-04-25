import Image from "next/image";
import { object } from "prop-types";

import Heading from "@/components/Heading";
import SiteLayout from "@/layouts/SiteLayout";

import { formatDate } from "@/lib/datetime";

export default function BlogLayout({ children, post }) {
  return (
    <SiteLayout
      title={`${post.attributes.title} | Imanol Ortega`}
      description={post.attributes.description}
      image={`${post.attributes.cover}`}
      date={formatDate(post.attributes.date)}
      type="article">
      <article className="flex flex-col items-start justify-center w-full max-w-screen-md mx-auto md:mb-16 mb-12">
        <Heading
          tag="h1"
          className="mb-6 text-3xl font-bold text-black md:text-5xl dark:text-white">
          {post.attributes.title}
        </Heading>
        <div className="flex flex-col items-start justify-between w-full mt-2 mb-6 md:flex-row md:items-center">
          <div className="flex items-center">
            <p className="text-sm text-gray-700 dark:text-gray-300">
              Publicado el {formatDate(post.attributes.date)}
              {" | "}
              Modificado por última vez el {formatDate(post.attributes.updatedAt)}
            </p>
          </div>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400 min-w-32 md:mt-0">
            {/*post.readingTime.text*/}
          </p>
        </div>
        <div className="w-full mt-4 prose dark:prose-dark max-w-none">
          {children}
        </div>
        <div className="text-xs text-center w-full mt-4">
          Última actualización del artículo el {formatDate(post.modified)}
        </div>
      </article>
    </SiteLayout>
  );
}

BlogLayout.defaultProps = {
  children: {},
  post: {},
};

BlogLayout.propTypes = {
  children: object,
  post: object,
};
