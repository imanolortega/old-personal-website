import cn from "classnames";
import Link from "next/link";
import useDelayedRender from "use-delayed-render";
import { useEffect, useState } from "react";
import styles from "../styles/mobile-menu.module.css";

function MenuItem({ href, delay, text }) {
  return (
    <li
      className="border-b border-gray-300 dark:border-gray-700 text-slate-600 dark:text-slate-100 text-lg font-semibold"
      style={{ transitionDelay: `${delay}ms` }}>
      <Link href={href}>
        <a className="flex w-auto pb-4">{text}</a>
      </Link>
    </li>
  );
}

export default function MobileMenu() {
  const menuLinks = [
    { id: "0", href: "/", text: "Home", transitionDelay: "150" },
    { id: "1", href: "/about", text: "About", transitionDelay: "200" },
    { id: "2", href: "/blog", text: "Blog", transitionDelay: "250" },
    { id: "3", href: "/projects", text: "Projects", transitionDelay: "300" },
  ];
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { mounted: isMenuMounted, rendered: isMenuRendered } = useDelayedRender(
    isMenuOpen,
    {
      enterDelay: 20,
      exitDelay: 300,
    }
  );

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

  return (
    <div>
      <button
        className={cn(styles.burger, 'visible md:hidden')}
        aria-label="Toggle menu"
        type="button"
        onClick={toggleMenu}>
        {!isMenuOpen && <MenuIcon />}
        {isMenuOpen && <CrossIcon />}
      </button>
      {isMenuMounted && (
        <ul
          className={cn(
            styles.menu,
            'flex flex-col absolute bg-slate-100 dark:bg-slate-900',
            isMenuRendered && styles.menuRendered
          )}>
          {menuLinks.map((l) => (
            <MenuItem
              href={l.href}
              text={l.text}
              delay={l.transitionDelay}
              key={l.id}
            />
          ))}
        </ul>
      )}
    </div>
  );
}

function MenuIcon() {
  return (
    <svg
      className="h-5 w-5 absolute text-gray-900 dark:text-gray-100"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      >
      <path
        d="M2.5 7.5H17.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2.5 12.5H17.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CrossIcon() {
  return (
    <svg
      className="h-5 w-5 absolute text-gray-900 dark:text-gray-100"
      viewBox="0 0 24 24"
      width="24"
      height="24"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
      shapeRendering="geometricPrecision"
      >
      <path d="M18 6L6 18" />
      <path d="M6 6l12 12" />
    </svg>
  );
}
