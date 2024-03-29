import { any, bool, func, string } from "prop-types";

import ButtonWithIcon from "../buttons/ButtonWithIcon";
import DarkModeButton from "../buttons/DarkModeButton";
import Icon from "../icons/Icon";
import NavItem from "./NavItem";
import cn from "classnames";
import { menuIconsStyle } from "@/styles/icons";
import styles from "@/styles/mobile-menu.module.css";

export default function Navbar({
  isFixed,
  isMenuOpen,
  mounted,
  setTheme,
  resolvedTheme,
  toggleMenu,
}) {
  return (
    <nav
      className={`flex items-center justify-between w-full relative max-w-screen-md border-gray-300 dark:border-gray-700 mx-auto pt-8 pb-4 sm:pb-4 text-gray-900 bg-slate-100 dark:bg-slate-900 bg-opacity-60 dark:text-gray-100 ${
        isFixed
          ? "visible md:hidden rounded-2xl backdrop-blur-md bg-slate-200/40 dark:bg-slate-700/20 md:px-4 md:pt-4 px-4 pt-2 pb-2"
          : null
      }`}>
      <ul className="inline-flex ml-[-0.60rem]">
        <button
          className={cn(styles.burger, "visible md:hidden")}
          aria-label="Toggle menu"
          type="button"
          onClick={toggleMenu}>
          {!isMenuOpen && (
            <Icon type="menu" className={menuIconsStyle["menu"]} />
          )}
          {isMenuOpen && (
            <Icon type="cross" className={menuIconsStyle["cross"]} />
          )}
        </button>
        <NavItem href="/" text="Home" />
        <NavItem href="/about" text="About" />
        <NavItem href="/projects" text="Projects" />
      </ul>
      <div className="flex space-x-2">
        <ButtonWithIcon path="https://github.com/imanolrtega" icon="github" />
        <ButtonWithIcon
          path="https://www.linkedin.com/in/imanol-rtega/"
          icon="linkedin"
        />
        <DarkModeButton
          onHandleClick={() =>
            setTheme(resolvedTheme === "dark" ? "light" : "dark")
          }
          isMounted={mounted}
          isResolvedTheme={resolvedTheme}
        />
      </div>
    </nav>
  );
}

Navbar.defaultProps = {
  isFixed: false,
  isMenuOpen: false,
  mounted: false,
  setTheme: () => {},
  resolvedTheme: "",
  toggleMenu: () => {},
};

Navbar.propTypes = {
  isFixed: any,
  isMenuOpen: bool,
  mounted: bool,
  setTheme: func,
  resolvedTheme: string,
  toggleMenu: func,
};
