import { useContext } from 'react';

import Site from '@/contexts/siteLayout';

export default function ScrollTopButton() {
  const { theme } = useContext(Site);

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      onClick={scrollTop}
      className="fixed bottom-4 right-4 backdrop-blur-md dark:backdrop-blur-md bg-slate-400/30 dark:bg-slate-800/40 rounded-full md:p-2 p-3">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="none"
        stroke={theme === 'dark' ? '#fafafa' : '#475569'}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round">
        <path d="M12 19V5M5 12l7-7 7 7" />
      </svg>
    </button>
  );
}
