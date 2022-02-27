export default function PageLayout(props) {
  const { children, className } = props;
  return (
    <div
      className={`flex flex-col justify-center items-start max-w-screen-md mx-auto md:mb-16 mb-12 mt-2 ${className}`}>
      {children}
    </div>
  );
}
