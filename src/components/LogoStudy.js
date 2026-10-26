import LogoConcept from "./LogoConcept";
import { brandMark } from "../lib/brand-mark";

// New studies use geometric taper and shared paths, never an opacity fade.
const curl =
  "M60 60C34 47 39 19 60 14C82 8 100 27 91 44C87 52 79 55 71 50C64 46 65 36 73 34C79 32 84 36 84 41";
const studies = {
  silk: {
    fill: true,
    d: "M60 65C29 52 34 16 58 10C86 3 108 27 95 47C88 59 74 61 66 51C57 40 64 28 74 29C84 28 91 37 85 45C88 35 73 31 70 39C66 49 79 52 87 42C96 28 81 13 63 18C44 23 42 45 63 56Z",
  },
  join: {
    d: curl + "C84 49 74 51 70 44C66 36 77 27 86 32C90 34 92 37 92 39",
    width: 7,
  },
  shared: brandMark,
  whisper: {
    fill: true,
    d: "M64 64C34 55 32 22 55 12C78 2 103 18 99 37C96 54 77 63 66 52C56 43 62 29 74 29C86 29 91 41 83 48C88 37 77 33 71 39C65 47 77 53 85 45C98 32 86 15 69 17C47 18 40 42 64 56Z",
  },
  river: {
    d: "M60 60C34 47 39 19 60 14C82 8 100 27 91 44C87 52 79 55 71 50C61 43 66 30 77 31C91 33 86 53 73 57C64 60 57 59 51 55",
    width: 6,
  },
  crescentWeave: {
    fill: true,
    d: "M60 65C33 53 32 24 51 13C74 0 103 16 101 36C99 53 82 64 69 57C55 50 56 32 70 28C80 25 91 34 86 44C89 32 72 28 68 39C64 49 77 55 87 47C101 35 86 13 68 18C47 23 43 43 63 56Z",
  },
  seeds: {
    fill: true,
    single: true,
    d: "M55 108C24 108 10 83 21 59C32 35 60 30 72 13C81 1 79 2 87 7C104 20 106 44 95 58C84 72 63 70 62 57C61 45 74 38 83 46C89 53 84 62 77 61C86 59 85 48 78 48C66 48 69 65 83 63C103 58 99 28 83 19C74 40 55 43 44 60C30 82 43 97 61 87C76 78 72 62 60 64C87 53 104 84 83 102C76 107 65 109 55 108Z",
  },
  eyes: {
    fill: true,
    d: "M60 63C29 48 35 15 60 10C85 5 106 28 94 49C87 60 71 61 64 51C59 43 63 34 71 32C80 29 89 37 85 45C82 51 75 51 72 47C75 48 80 47 80 42C80 36 71 36 69 41C65 50 78 56 86 47C99 32 81 13 63 20C44 27 45 48 60 63Z",
  },
  bloom: {
    fill: true,
    single: true,
    d: "M60 18C73 2 103 10 105 33C107 45 99 56 85 60C103 69 102 95 84 106C66 117 48 106 46 89C32 104 6 97 9 73C10 54 26 47 41 51C28 34 40 14 60 18ZM61 32C44 27 42 47 58 54C66 48 71 40 61 32ZM85 73C81 58 64 64 61 78C68 88 81 90 85 73ZM28 72C25 87 45 88 51 73C46 61 31 60 28 72Z",
  },
  comet: {
    fill: true,
    d: "M59 62C29 50 29 17 53 9C82 -1 108 20 100 43C96 55 85 62 73 57C94 56 105 34 91 21C76 7 54 18 52 35C50 46 54 54 66 59C81 65 92 61 101 51C89 74 72 72 59 62Z",
  },
  knot: {
    single: true,
    d:
      Array.from({ length: 241 }, (_, i) => {
        const t = (i / 240) * Math.PI * 2;
        return `${i ? "L" : "M"}${(60 + (Math.sin(t) + 2 * Math.sin(2 * t)) * 15).toFixed(2)} ${(60 + (Math.cos(t) - 2 * Math.cos(2 * t)) * 15).toFixed(2)}`;
      }).join(" ") + "Z",
    width: 4.5,
  },
  orbitFlower: {
    d: "M60 60C33 49 36 22 56 14C79 4 101 24 94 43C88 60 67 60 65 45C63 32 82 29 85 42C88 55 73 66 60 60Z",
    width: 5,
    ring: true,
  },
};
export default function LogoStudy({ variant }) {
  if (variant === "baseline") return <LogoConcept variant="arcCurl" />;
  const s = studies[variant];
  if (!s) return null;
  return (
    <svg viewBox="0 0 120 120" fill="none" aria-hidden="true">
      {s.ring && (
        <circle
          cx="60"
          cy="60"
          r="54"
          stroke="currentColor"
          strokeWidth="1.5"
        />
      )}
      {(s.single ? [0] : [0, 120, 240]).map((angle) => (
        <path
          key={angle}
          transform={`rotate(${angle} 60 60)`}
          d={s.d}
          fill={s.fill ? "currentColor" : "none"}
          fillRule="evenodd"
          stroke={s.fill ? "none" : "currentColor"}
          strokeWidth={s.width}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      ))}
    </svg>
  );
}
