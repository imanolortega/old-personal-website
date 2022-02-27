import Link from "next/link";

import Heading from './Heading';

export default function BlogPost({ date, title, summary, slug }) {
  return (
    <Link href={`/blog/${slug}`}>
      <a className="w-full">
        <div className="w-full pl-4 mb-8 rounded-sm border-l-4 transition border-l-slate-400 dark:hover:border-l-slate-200 hover:border-l-slate-500">
          <div className="flex flex-col justify-between md:flex-row mb-2">
            <Heading tag="h3" className="w-full mb-2 text-lg font-medium text-gray-900 md:text-xl dark:text-gray-100">
              {title}
            </Heading>
            <p className="w-32 mb-4 text-left text-gray-500 md:text-right md:mb-0">
              {date}
            </p>
          </div>
          <p>
            {summary}
          </p>
        </div>
      </a>
    </Link>
  );
}
