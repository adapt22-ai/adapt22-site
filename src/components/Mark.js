export default function Mark({ className = "" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 100 100"
      fill="none"
      aria-hidden="true"
    >
      <g
        stroke="currentColor"
        strokeWidth="7"
        strokeLinecap="square"
        strokeLinejoin="miter"
      >
        {[0, 120, 240].map((angle) => (
          <path
            key={angle}
            transform={`rotate(${angle} 50 50)`}
            d="M50 50V17L68 7L85 17V36L68 46"
          />
        ))}
      </g>
    </svg>
  );
}
