export default function SectionPage({ children, className }) {
  return <section className={`${className} md:mb-12 mb-10`}>{children}</section>;
}
