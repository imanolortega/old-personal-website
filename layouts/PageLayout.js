import { any, string } from "prop-types";

export default function PageLayout({ children, className }) {
  return (
    <div
      className={`flex flex-col justify-center items-start max-w-screen-md mx-auto ${className} mt-2`}>
      {children}
    </div>
  );
}

PageLayout.defaultProps = {
  children: [],
  className: "",
};

PageLayout.propTypes = {
  children: any,
  className: string,
};
