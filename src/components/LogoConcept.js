import Mark from "./Mark";
const shapes = {
  swept: {
    d: "M55 64V29C55 15 65 9 77 9C91 9 100 18 100 31C100 43 92 51 80 51H72V40H80C86 40 90 37 90 31C90 25 85 20 79 20C72 20 67 24 67 31V58L60 68Z",
    fill: true,
  },
  open: { d: "M60 60V26L77 16L94 26V45L77 55H67", width: 6, round: true },
  triad: { d: "M60 60L60 18L84 18L99 43L79 54L72 40L72 67Z", fill: true },
  spiral: {
    d: "M60 60C40 50 39 26 51 16C67 1 94 10 94 29C94 44 74 48 69 36C66 29 73 24 79 28",
    width: 7,
    round: true,
  },
  orbit: {
    d: "M60 60C26 35 52 3 77 15C101 27 82 54 64 41",
    width: 8,
    round: true,
  },
  ribbon: {
    d: "M55 66V22L74 11L94 22V43L76 53L69 42L81 35V30L74 26L68 30V58Z",
    fill: true,
  },
  fold: { d: "M60 60L43 24L68 10L100 27L93 42L67 28L62 31L75 59Z", fill: true },
  monoline: { d: "M60 60V24H84V46H70", width: 4, round: false },
  blades: {
    d: "M60 60C38 45 41 13 62 10C82 8 97 23 91 41C78 34 69 40 68 55Z",
    fill: true,
  },
  interlock: {
    d: "M60 60L42 29L57 15H80L92 36L80 48L65 45",
    width: 8,
    round: true,
  },
  seal: { d: "M60 60V28L75 19L90 28V45L75 54", width: 6, round: false },
};
export default function LogoConcept({ variant }) {
  if (variant === "current") return <Mark />;
  const s = shapes[variant] || shapes.open;
  return (
    <svg viewBox="0 0 120 120" fill="none" aria-hidden="true">
      {variant === "seal" && (
        <circle cx="60" cy="60" r="54" stroke="currentColor" strokeWidth="2" />
      )}
      {[0, 120, 240].map((angle) => (
        <path
          key={angle}
          transform={`rotate(${angle} 60 60)`}
          d={s.d}
          fill={s.fill ? "currentColor" : "none"}
          stroke={s.fill ? "none" : "currentColor"}
          strokeWidth={s.width}
          strokeLinejoin={s.round ? "round" : "miter"}
          strokeLinecap={s.round ? "round" : "square"}
        />
      ))}
    </svg>
  );
}
