export default function PageLayout({ children, className }) {
  return (
    <div
      className={`flex flex-col justify-center items-start max-w-screen-md mx-auto md:mb-16 mb-12 mt-2 ${className}`}>
      {children}
    </div>
  );
}
