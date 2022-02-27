export default function SectionPage({ children, className }) {
  return <section className={`md:mb-12 mb-10 ${className}`}>{children}</section>;
}
