import Head from "next/head";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import Link from "next/link";

import Footer from "./Footer";
import MobileMenu from "./MobileMenu";
import IconButton from "./IconButton";

function NavItem({ href, text }) {
  const router = useRouter();
  const isActive = router.asPath === href;

  return (
    <Link href={href}>
      <a
        className={`${
          isActive
            ? "font-semibold text-slate-600 dark:text-slate-200"
            : "font-normal text-slate-600 hover:text-slate-800 dark:text-slate-400 dark:hover:text-slate-200"
        } hidden md:inline-block p-1 sm:px-3 sm:py-2 transition-all`}>
        <span className="capsize">{text}</span>
      </a>
    </Link>
  );
}

function DarkModeButton({ isMounted, isResolvedTheme, onHandleClick }) {
  return (
    <button
      aria-label="Toggle Dark Mode"
      type="button"
      className="w-8 h-8 opacity-75 bg-slate-300 rounded-lg dark:bg-slate-700 flex items-center justify-center hover:ring-2 ring-slate-400 transition-all"
      onClick={onHandleClick}>
      {isMounted && (
        <svg className="h-6 w-6" width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg">
          {isResolvedTheme === "dark" ? (
            <path
              d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
              stroke="#fff"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          ) : (
            <path
              d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
              stroke="#4A5568"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          )}
        </svg>
      )}
    </button>
  );
}

export default function Container(props) {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  // After mounting, we have access to the theme
  useEffect(() => setMounted(true), []);

  const { children, ...customMeta } = props;
  const router = useRouter();
  const meta = {
    title: "Imanol Ortega | Desarrollador Frontend",
    description: `Front-end developer, JavaScript & React enthusiast.`,
    image: "https://dailyweb.com.ar/data/img_cont/img_imagenes/img_gr/41431.jpg",
    type: "website",
    ...customMeta,
  };

  return (
    <div className="bg-slate-100 dark:bg-slate-900 h-screen">
      <Head>
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <meta content={meta.description} name="description" />
        <meta property="og:url" content={`https://imanol.work${router.asPath}`} />
        <link rel="canonical" href={`https://imanol.work${router.asPath}`} />
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🍻</text></svg>"
        />
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content="Imanol Ortega" />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@imanolrtega" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
        {meta.date && (
          <meta property="article:published_time" content={meta.date} />
        )}
      </Head>

      <div className="flex flex-col justify-center px-8">
        <nav className="flex items-center justify-between w-full relative max-w-screen-md border-gray-300 dark:border-gray-700 mx-auto pt-8 pb-4 sm:pb-4 text-gray-900 bg-slate-100 dark:bg-slate-900 bg-opacity-60 dark:text-gray-100">
          <div className="ml-[-0.60rem]">
            <MobileMenu />
            <NavItem href="/" text="Home" />
            <NavItem href="/about" text="About" />
            <NavItem href="/blog" text="Blog" />
            <NavItem href="/projects" text="Projects" />
          </div>
          <div className="flex space-x-2">
            <IconButton path="https://www.linkedin.com/in/imanol-rtega/" icon="github" />
            <IconButton path="https://github.com/imanolrtega" icon="linkedin" />
            <DarkModeButton
              onHandleClick={() =>
                setTheme(resolvedTheme === "dark" ? "light" : "dark")
              }
              isMounted={mounted}
              isResolvedTheme={resolvedTheme}
            />
          </div>
        </nav>
        <div className="flex justify-center max-w-screen-md mx-auto w-full">
          <hr className="w-full border-1 border-slate-300 dark:border-gray-800 mb-8" />
        </div>
      </div>
      <main
        id="skip"
        className="flex flex-col justify-center px-8 bg-slate-100 dark:bg-slate-900">
        {children}
        <Footer />
      </main>
    </div>
  );
}
