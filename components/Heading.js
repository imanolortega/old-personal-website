export default function Heading({ tag: Tag, children, className }) {
  return (
    <>
      <Tag
        className={` ${className}`}>
        {children}
      </Tag>
    </>
  );
}
