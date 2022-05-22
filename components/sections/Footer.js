import Link from "next/link";

import ExternalLink from "../links/ExternalLink";
import InternalLink from "../links/InternalLink";

export default function Footer() {
  return (
    <footer className="flex flex-col justify-center items-start max-w-screen-md mx-auto w-full mb-8">
      <hr className="w-full border-1 border-slate-300 dark:border-slate-800 mb-8" />
      <div className="w-full max-w-screen-md grid grid-cols-1 gap-4 md:pb-16 pb-12 sm:grid-cols-3">
        <div className="flex flex-col space-y-4">
          <InternalLink href="/">Home</InternalLink>
          <InternalLink href="/about">About</InternalLink>
          <InternalLink href="/blog">Blog</InternalLink>
          <InternalLink href="/projects">Projects</InternalLink>
        </div>
        <div className="flex flex-col space-y-4">
          <ExternalLink href="https://www.linkedin.com/in/imanol-rtega/">
            LinkedIn
          </ExternalLink>
          <ExternalLink href="https://github.com/imanolrtega">
            GitHub
          </ExternalLink>
        </div>
      </div>
      <p className="text-slate-600 dark:text-slate-400 mb-2">
        <ExternalLink
          href="https://github.com/imanolrtega/new-personal-website"
          children={"Codeado"}
        />{" "}
        con <ExternalLink href="https://nextjs.org/" children={"Next JS"} />,{" "}
        <ExternalLink href="https://tailwindcss.com/" children={"Tailwind"} />,{" "}
        <ExternalLink href="https://graphql.org/" children={"GraphQL"} />,{" "}
        <ExternalLink href="https://strapi.io/" children={"Strapi"} /> y
        hosteado en{" "}
        <ExternalLink href="https://vercel.com/" children={"Vercel"} />.
      </p>
    </footer>
  );
}
