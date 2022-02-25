import { useState, useEffect } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useTheme } from 'next-themes';

import Site from '../contexts/siteLayout';

import Footer from './Footer';
import MobileMenu from './MobileMenu';
import Navbar from './Navbar';
import ScrollTopButton from './ScrollTopButton';

export default function SiteLayout(props) {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  const { children, ...customMeta } = props;
  const router = useRouter();
  const meta = {
    title: 'Imanol Ortega | Front-end Developer',
    description: `Front-end developer, JavaScript & React enthusiast.`,
    image: 'https://www.imanol.work/images/imanol-ortega-personal-site.jpg',
    type: 'website',
    ...customMeta,
  };

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function toggleMenu() {
    if (isMenuOpen) {
      setIsMenuOpen(false);
      document.body.style.overflow = '';
    } else {
      setIsMenuOpen(true);
      document.body.style.overflow = 'hidden';
    }
  }

  useEffect(() => {
    return function cleanup() {
      document.body.style.overflow = '';
    };
  }, []);

  const [showScroll, setShowScroll] = useState(false);
  const [topOfMobileMenu, setTopOfMobileMenu] = useState(false);

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 150) {
      setShowScroll(true);
      setTopOfMobileMenu(window.pageYOffset - 18);
    } else if (showScroll && window.pageYOffset <= 150) {
      setShowScroll(false);
      setTopOfMobileMenu(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', checkScrollTop);
  });

  return (
    <Site.Provider
      value={{
        theme: resolvedTheme,
      }}>
      <div className="bg-slate-100 dark:bg-slate-900 h-screen w-screen">
        <Head>
          <title>{meta.title}</title>
          <meta name="robots" content="follow, index" />
          <meta content={meta.description} name="description" />
          <meta
            property="og:url"
            content={`https://imanol.work${
              router.asPath === '/index' ? '/' : router.asPath
            }`}
          />
          <link
            rel="canonical"
            href={`https://imanol.work${
              router.asPath === '/index' ? '/' : router.asPath
            }`}
          />
          <link
            rel="icon"
            href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🧉</text></svg>"
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

        {showScroll && (
          <div className="fixed pl-6 pr-6 md:pl-8 md:pr-4 top-6 z-30 w-full">
            <div className="mx-auto w-full max-w-screen-md">
              <Navbar
                isFixed
                isMenuOpen={isMenuOpen}
                mounted={mounted}
                setTheme={setTheme}
                resolvedTheme={resolvedTheme}
                toggleMenu={toggleMenu}
              />
            </div>
          </div>
        )}
        <header className="flex flex-col justify-center px-8">
          <MobileMenu
            style={{ top: topOfMobileMenu }}
            isMenuOpen={isMenuOpen}
          />
          <Navbar
            isMenuOpen={isMenuOpen}
            mounted={mounted}
            setTheme={setTheme}
            resolvedTheme={resolvedTheme}
            toggleMenu={toggleMenu}
          />
          <div className="flex justify-center max-w-screen-md mx-auto w-full">
            <hr className="w-full border-1 border-slate-300 dark:border-gray-800 mb-8" />
          </div>
        </header>
        <main
          id="skip"
          className="flex flex-col justify-center px-8 bg-slate-100 dark:bg-slate-900">
          {children}
          <Footer />
          {showScroll && <ScrollTopButton />}
        </main>
      </div>
    </Site.Provider>
  );
}
