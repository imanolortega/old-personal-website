import Link from "next/link";
import { string } from "prop-types";

import Heading from "../sections/Heading";

export default function BlogPostCard({ date, link, modified, title }) {
  return (
    <div className="relative w-full group">
      <div
        className="
        absolute
        inset-0.5
        group-hover:inset-0
        dark:inset-1
        dark:group-hover:inset-0.5
        bg-gradient-to-r from-green-500 to-blue-500
        opacity-50
        group-hover:opacity-60
        transition
        duration-900
        rounded-xl
        blur
        mb-6"></div>
      <div className="transform transition-all rounded-xl w-full p-1 mb-6">
        <Link href={`${link}`} scroll={false}>
          <a>
            <div className="h-full w-full bg-slate-100 dark:bg-slate-900 rounded-lg p-4">
              <Heading
                tag="h3"
                className="text-lg md:text-lg font-medium mb-2 sm:mb-5 w-full text-gray-900 dark:text-gray-100">
                {title}
              </Heading>
              <p className="text-xs">
                Publicado el {date} | Última actualización el{" "}
                {modified}
              </p>
            </div>
          </a>
        </Link>
      </div>
    </div>
  );
}

BlogPostCard.defaultProps = {
  date: "",
  link: "",
  modified: "",
  title: "",
};

BlogPostCard.propTypes = {
  date: string,
  slug: string,
  summary: string,
  title: string,
};
