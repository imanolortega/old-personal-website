import { string } from "prop-types";

export default function Heading({ tag: Tag, children, className }) {
  return (
    <>
      <Tag className={` ${className}`}>{children}</Tag>
    </>
  );
}

Heading.defaultProps = {
  tag: "h1",
  children: "",
  className: "",
};

Heading.propTypes = {
  tag: string,
  children: string,
  className: string,
};
