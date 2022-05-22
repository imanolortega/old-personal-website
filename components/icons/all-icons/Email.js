export default function Email({ className, color }) {
  return (
    <svg
      className={className}
      width="32"
      height="32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
