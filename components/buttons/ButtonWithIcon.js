import { useContext, useEffect, useState } from "react";
import { bool, string } from "prop-types";

import Site from "@/contexts/siteLayout";
import { buttonWhitIconsStyle } from "@/styles/icons";

import Icon from "../icons/Icon";

export default function ButtonWithIcon({ icon, isAProject, path }) {
  const { theme } = useContext(Site);

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
        className={buttonWhitIconsStyle[icon]}
        color={iconColor}
      />
    </a>
  );
}

ButtonWithIcon.defaultProps = {
  icon: "",
  isAProject: false,
  path: "",
};

ButtonWithIcon.propTypes = {
  icon: string,
  isAProject: bool,
  path: string,
};
