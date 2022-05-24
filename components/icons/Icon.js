import { useContext } from "react";
import { string } from "prop-types";

import Site from "@/contexts/siteLayout";

import Cross from "./all-icons/Cross";
import Email from "./all-icons/Email";
import ExternalLink from "./all-icons/ExternalLink";
import GitHub from "./all-icons/GitHub";
import LinkedIn from "./all-icons/LinkedIn";
import Menu from "./all-icons/Menu";

export default function Icon({ className, color, type }) {
  const { theme } = useContext(Site);

  const iconsTypes = {
    cross: Cross,
    email: Email,
    external_link: ExternalLink,
    github: GitHub,
    linkedin: LinkedIn,
    menu: Menu,
  };
  const IconType = iconsTypes[type];

  return <IconType className={className} color={color} theme={theme} />;
}

Icon.defaultProps = {
  className: "",
  color: "",
  type: "",
};

Icon.propTypes = {
  className: string,
  color: string,
  type: string,
};
