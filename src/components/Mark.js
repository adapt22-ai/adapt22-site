import { brandMark } from "../lib/brand-mark";
export default function Mark({ className = "", size }) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox={brandMark.viewBox}
      fill="none"
      aria-hidden="true"
      data-brand-mark="c3"
    >
      {[0, 120, 240].map((angle) => (
        <path
          key={angle}
          transform={`rotate(${angle} 60 60)`}
          d={brandMark.d}
          stroke="currentColor"
          strokeWidth={brandMark.width}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      ))}
    </svg>
  );
}
