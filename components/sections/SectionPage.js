import { any, string } from "prop-types";

export default function SectionPage({ children, className }) {
  return (
    <section className={`${className} md:mb-12 mb-10`}>{children}</section>
  );
}

SectionPage.defaultProps = {
  children: {},
  className: "",
};

SectionPage.propTypes = {
  children: any,
  className: string,
};