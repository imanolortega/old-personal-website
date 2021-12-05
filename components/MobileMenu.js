import cn from "classnames";
import Link from "next/link";
import useDelayedRender from "use-delayed-render";
import { useState } from "react";
import styles from "../styles/mobile-menu.module.css";

function MenuItem({ href, text }) {
  return (
    <li
      className="border-b border-gray-300 dark:border-gray-700 text-gray-900 dark:text-gray-100 text-sm font-semibold"
      style={{ transitionDelay: "150ms" }}>
      <Link href={href}>
        <a className="flex w-auto pb-4">{text}</a>
      </Link>
    </li>
  );
}

export default function MobileMenu() {
  const menuLinks = [
    { href: "/", text: "Home" },
    { href: "/about", text: "About" },
    { href: "/blog", text: "Blog" },
    { href: "/projects", text: "Projects" },
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
    } else {
      setIsMenuOpen(true);
    }
  }

  return (
    <>
      <button
        className={cn(styles.burger, "visible md:hidden")}
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
            "flex flex-col absolute bg-gray-100 dark:bg-gray-900",
            isMenuRendered && styles.menuRendered
          )}>
          {menuLinks.map((l) => (
            <MenuItem href={l.href} text={l.text} />
          ))}
        </ul>
      )}
    </>
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
