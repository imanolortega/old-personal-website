import { useContext, useEffect, useState } from "react";
import { bool, string } from "prop-types";

import Site from "@/contexts/siteLayout";
import { selectStyle } from "@/lib/util";

import Icon from "./Icon";

export default function IconButton({ icon, isAProject, path }) {
  const { theme } = useContext(Site);

  const emailClassName = "block h-5 w-8 text-gray-900 dark:text-gray-100";
  const linkedinClassName = "block h-5 w-5 text-gray-900 dark:text-gray-100";
  const githubClassName = "block h-5 w-5 text-gray-900 dark:text-gray-100";
  const externalLinkClassname =
    "block h-6 w-6 text-gray-900 dark:text-gray-100";

  const iconStyle = {
    email: emailClassName,
    linkedin: linkedinClassName,
    github: githubClassName,
    external_link: externalLinkClassname,
  };

  const [iconColor, setIconColor] = useState();

  useEffect(() => {
    setIconColor(theme === "dark" ? "#fafafa" : "#475569");
  }, [theme]);

  return (
    <a
      target="_blank"
      rel="nofollow noopener noreferrer"
      aria-label={`${icon} ${isAProject ? "project" : "link contact"}`}
      href={path}
      className={`w-8 h-8 opacity-75 hover:opacity-100 rounded-lg flex items-center justify-center ${
        !isAProject ? "hover:ring-2" : null
      }  ring-slate-300 dark:ring-slate-600 transition-all cursor-pointer`}>
      <Icon
        type={icon}
        className={selectStyle(iconStyle, icon)}
        color={iconColor}
      />
    </a>
  );
}

IconButton.defaultProps = {
  icon: "",
  isAProject: false,
  path: "",
};

IconButton.propTypes = {
  icon: string,
  isAProject: bool,
  path: string,
};
