import Mark from "./Mark";
export default function LogoConcept({ variant }) {
  if (variant === "current") return <Mark />;
  return (
    <svg viewBox="0 0 120 120" fill="none" aria-hidden="true">
      {[0, 120, 240].map((angle) => (
        <g key={angle} transform={`rotate(${angle} 60 60)`}>
          {variant === "swept" ? (
            <path
              d="M55 64V29C55 15 65 9 77 9C91 9 100 18 100 31C100 43 92 51 80 51H72V40H80C86 40 90 37 90 31C90 25 85 20 79 20C72 20 67 24 67 31V58L60 68Z"
              fill="currentColor"
            />
          ) : (
            <path
              d="M60 60V26L77 16L94 26V45L77 55H67"
              stroke="currentColor"
              strokeWidth="6"
              strokeLinejoin="round"
              strokeLinecap="round"
            />
          )}
        </g>
      ))}
    </svg>
  );
}
