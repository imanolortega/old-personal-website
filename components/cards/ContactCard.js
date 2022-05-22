import { useContext, useEffect, useState } from "react";
import { string } from "prop-types";

import Site from "@/contexts/siteLayout";
import { contactCardIconsStyle } from "@/styles/icons";

import Heading from "../sections/Heading";
import Icon from "../icons/Icon";

export default function ContactCard({ description, icon, path, title }) {
  const { theme } = useContext(Site);

  const [iconColor, setIconColor] = useState();

  useEffect(() => {
    setIconColor(theme === "dark" ? "#94a3b8" : "#475569");
  }, [theme]);

  return (
    <a
      aria-label={title}
      target="_blank"
      rel="nofollow noopener noreferrer"
      href={path}
      className="w-full group border border-gray-400 dark:border-gray-600 rounded-lg p-6">
      {icon && (
        <Icon
          type={icon}
          className={contactCardIconsStyle[icon]}
          color={iconColor}
        />
      )}
      <Heading
        tag="h3"
        className="text-lg md:text-lg font-medium mb-2 sm:mb-5 w-full text-gray-800 dark:text-gray-100">
        {title}
      </Heading>
      <p className="text-gray-600 dark:text-gray-400 text-base">
        {description}
      </p>
    </a>
  );
}

ContactCard.defaultProps = {
  description: "",
  icon: "",
  path: "",
  title: "",
};

ContactCard.propTypes = {
  date: string,
  slug: string,
  summary: string,
  title: string,
};
