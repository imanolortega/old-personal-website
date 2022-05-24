import Link from "next/link";
import { useRouter } from "next/router";

import { string } from "prop-types";
import { useEffect } from "react";
import { useState } from "react";

export default function NavItem({ href, text }) {
  const router = useRouter();
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    setIsActive(router.asPath === href);
  }, []);

  return (
    <li>
      <Link href={href} scroll={false}>
        <a
          className={`${
            isActive
              ? "font-semibold text-slate-600 dark:text-slate-200"
              : "font-normal text-slate-600 hover:text-slate-800 dark:text-slate-400 dark:hover:text-slate-200"
          } hidden md:inline-block p-1 sm:px-3 sm:py-2 transition-all`}>
          <span className="capsize">{text}</span>
        </a>
      </Link>
    </li>
  );
}

NavItem.defaultProps = {
  href: "",
  text: "",
};

NavItem.propTypes = {
  href: string,
  text: string,
};
