import Image from "next/image";
import { parseISO, format } from "date-fns";

import SiteLayout from "./SiteLayout";
import { formatDate } from '../lib/datetime';

export default function BlogLayout({ children, post }) {
  return (
    <SiteLayout
      title={`${post.title} | Imanol Ortega`}
      description={post.summary}
      image={`https://imanol.work${post.image}`}
      //date={new Date(post.publishedAt).toISOString()}
      type="article">
      <article className="flex flex-col items-start justify-center w-full max-w-screen-md mx-auto mb-16">
        <h1 className="mb-6 text-3xl font-bold text-black md:text-5xl dark:text-white">
          {post.title}
        </h1>
        <div className="flex flex-col items-start justify-between w-full mt-2 mb-6 md:flex-row md:items-center">
          <div className="flex items-center">
            <Image
              alt="Imanol Ortega"
              height={24}
              width={24}
              src={post.author.avatar.url}
              className="rounded-full"
            />
            <p className="ml-2 text-sm text-gray-700 dark:text-gray-300">
              {post.author.name}
              {" | "}
              {formatDate(post.date)}
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
