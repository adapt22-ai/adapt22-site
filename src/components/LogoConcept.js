import Mark from "./Mark";
const shapes = {
  swept: {
    d: "M55 64V29C55 15 65 9 77 9C91 9 100 18 100 31C100 43 92 51 80 51H72V40H80C86 40 90 37 90 31C90 25 85 20 79 20C72 20 67 24 67 31V58L60 68Z",
    fill: true,
  },
  open: { d: "M60 60V26L77 16L94 26V45L77 55H67", width: 6, round: true },
  interlock: {
    d: "M60 60L42 29L57 15H80L92 36L80 48L65 45",
    width: 8,
    round: true,
  },
  helix: {
    d: "M60 60C35 48 37 18 60 13C81 9 99 24 93 42C89 54 73 57 68 47C62 36 75 28 82 34",
    width: 6,
    round: true,
  },
  return: {
    d: "M60 56V22C60 10 82 10 89 21C100 39 83 55 71 47L71 33",
    width: 9,
    round: true,
  },
  oval: {
    d: "M60 59C47 47 45 21 62 15C79 9 94 20 91 35C88 48 75 48 70 40",
    width: 7,
    round: true,
  },
  hook: {
    d: "M60 61V28C60 17 68 12 78 12C90 12 98 20 98 30C98 40 91 47 81 47H73",
    width: 10,
    round: false,
  },
  cutstone: {
    d: "M55 62V20L73 9L98 24V44L81 54L70 48L83 40V31L73 25L67 29V55Z",
    fill: true,
  },
  aperture: {
    d: "M60 61L43 31L57 10H83L100 39L87 55H73L84 40L75 25H64L58 34L72 57Z",
    fill: true,
  },
  chisel: {
    d: "M55 65L44 25L64 10L95 18L100 38L86 51L72 47L84 36L81 28L67 24L59 30L68 57Z",
    fill: true,
  },
  crescent: {
    d: "M60 62C34 48 39 15 64 10C84 6 101 22 97 42C93 26 81 20 71 26C60 33 62 45 72 54L64 68Z",
    fill: true,
  },
  weave: {
    d: "M55 64V25L76 13L96 25V46L77 57L69 43L81 36V33L76 30L70 33V55Z",
    fill: true,
  },
  link: {
    d: "M60 60L42 30L58 13H82L96 37L82 52H69L61 38L70 28",
    width: 6,
    round: false,
  },
  arc: {
    d: "M60 60C34 47 39 19 60 14C82 8 100 27 91 44C87 52 79 55 71 50",
    width: 11,
    round: true,
  },
  contour: {
    d: "M60 60V28C60 17 69 12 78 12C90 12 97 21 97 31C97 42 87 50 77 48M69 59V29C69 24 73 21 78 21C84 21 88 25 88 31C88 36 84 40 79 40",
    width: 3,
    round: true,
  },
};
export default function LogoConcept({ variant }) {
  if (variant === "current") return <Mark />;
  const s = shapes[variant] || shapes.open;
  return (
    <svg viewBox="0 0 120 120" fill="none" aria-hidden="true">
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
