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
  return: {
    d: "M60 56V22C60 10 82 10 89 21C100 39 83 55 71 47L71 33",
    width: 9,
    round: true,
  },
  hook: {
    d: "M60 61V28C60 17 68 12 78 12C90 12 98 20 98 30C98 40 91 47 81 47H73",
    width: 10,
    round: false,
  },
  arc: {
    d: "M60 60C34 47 39 19 60 14C82 8 100 27 91 44C87 52 79 55 71 50",
    width: 11,
    round: true,
  },
};
// Retain the three source studies; vary the return, terminal and petal separately.
shapes.returnLong = {
  ...shapes.return,
  d: "M60 56V22C60 10 82 10 89 21C100 39 83 55 71 47L71 28",
};
shapes.returnOpen = {
  ...shapes.return,
  d: "M60 56V22C60 10 82 10 89 21C100 39 83 55 71 47L71 38",
  width: 8,
};
shapes.hookRound = { ...shapes.hook, width: 8, round: true };
shapes.hookInward = {
  ...shapes.hook,
  d: "M60 61V28C60 17 68 12 78 12C90 12 98 20 98 30C98 40 91 47 81 47H70V38",
  width: 9,
  round: true,
};
shapes.arcPlus = { ...shapes.arc, d: shapes.arc.d + "C67 48 65 44 66 40" };
shapes.arcFurther = { ...shapes.arc, d: shapes.arc.d + "C64 46 65 36 73 34" };
shapes.arcCurl = {
  ...shapes.arc,
  d: shapes.arc.d + "C64 46 65 36 73 34C79 32 84 36 84 41",
  width: 9,
};
shapes.arcAir = {
  ...shapes.arc,
  d: "M63 58C35 47 39 19 60 14C82 8 100 27 91 44C87 52 79 55 71 50C65 46 66 39 71 36",
  width: 8,
};
shapes.arcPetal = {
  ...shapes.arc,
  d: "M60 60C32 48 36 18 59 12C83 6 103 27 92 45C86 56 74 56 68 48C64 42 68 34 75 34",
  width: 9,
};
shapes.arcSoft = {
  ...shapes.arc,
  d: "M60 60C35 47 39 20 60 14C81 9 98 27 90 43C85 53 74 54 69 46C66 41 68 36 73 34",
  width: 10,
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
