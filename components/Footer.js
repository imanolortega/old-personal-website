import Link from "next/link";

import ExternalLink from "./ExternalLink";

export default function Footer() {
  return (
    <footer className="flex flex-col justify-center items-start max-w-screen-md mx-auto w-full mb-8">
      <hr className="w-full border-1 border-slate-300 dark:border-slate-800 mb-8" />
      <div className="w-full max-w-screen-md grid grid-cols-1 gap-4 pb-16 sm:grid-cols-3">
        <div className="flex flex-col space-y-4">
          <Link href="/">
            <a className="text-slate-500 hover:text-slate-600 dark:text-slate-400 dark:hover:text-slate-200 transition">Home</a>
          </Link>
          <Link href="/about">
            <a className="text-slate-500 hover:text-slate-600 dark:text-slate-400 dark:hover:text-slate-200 transition">
              About
            </a>
          </Link>
          <Link href="/blog">
            <a className="text-slate-500 hover:text-slate-600 dark:text-slate-400 dark:hover:text-slate-200 transition">Blog</a>
          </Link>
        </div>
        <div className="flex flex-col space-y-4">
          <ExternalLink href="https://www.youtube.com/channel/UCZMli3czZnd1uoc1ShTouQw">
            LinkedIn
          </ExternalLink>
          <ExternalLink href="https://github.com/leerob">GitHub</ExternalLink>
        </div>
        <div className="flex flex-col space-y-4"></div>
      </div>
    </footer>
  );
}
