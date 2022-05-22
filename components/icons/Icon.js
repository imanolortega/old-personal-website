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

  const icons = {
    cross: <Cross className={className} theme={theme} />,
    email: <Email className={className} color={color} theme={theme} />,
    external_link: (
      <ExternalLink className={className} color={color} theme={theme} />
    ),
    github: <GitHub className={className} color={color} theme={theme} />,
    linkedin: <LinkedIn className={className} color={color} theme={theme} />,
    menu: <Menu className={className} theme={theme} />,
  };

  return <>{icons[type]}</>;
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
