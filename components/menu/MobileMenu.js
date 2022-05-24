import { bool, object } from "prop-types";

import cn from "classnames";
import styles from "../../styles/mobile-menu.module.css";
import useDelayedRender from "use-delayed-render";

import MenuItem from './MenuItem';

export default function MobileMenu({ isMenuOpen, style }) {
  const menuLinks = [
    { id: "0", href: "/", text: "Home", transitionDelay: "150" },
    { id: "1", href: "/about", text: "About", transitionDelay: "200" },
    { id: "2", href: "/blog", text: "Blog", transitionDelay: "250" },
    { id: "3", href: "/projects", text: "Projects", transitionDelay: "300" },
  ];

  const { mounted: isMenuMounted, rendered: isMenuRendered } = useDelayedRender(
    isMenuOpen,
    {
      enterDelay: 20,
      exitDelay: 300,
    }
  );

  return (
    <nav>
      {isMenuMounted && (
        <ul
          style={style}
          className={cn(
            styles.menu,
            "flex flex-col absolute bg-slate-100 dark:bg-slate-900",
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
    </nav>
  );
}

MobileMenu.defaultProps = {
  isMenuOpen: false,
  style: {},
};

MobileMenu.propTypes = {
  isMenuOpen: bool,
  style: object,
};
