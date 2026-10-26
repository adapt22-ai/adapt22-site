import { notFound } from "next/navigation";
import LogoConcept from "../../components/LogoConcept";
import { PageIntro } from "../../components/Shared";
export const metadata = {
  title: "Triskelion logo studies",
  robots: { index: false, follow: false },
};
const families = [
  {
    id: "geometric",
    label: "01 / Geometric",
    title: "Structure & precision",
    copy: "Clear construction, measured angles, and three equal responsibilities. These lean toward a precise, ordered company identity.",
    concepts: [
      [
        "current",
        "G1",
        "Current angular",
        "The current website mark. Keep this as the baseline when comparing the others.",
      ],
      [
        "open",
        "G2",
        "Open geometry",
        "A lighter, rounded interpretation of the current construction.",
      ],
      [
        "triad",
        "G3",
        "Triad",
        "Three compact, angular arms with a stronger solid silhouette.",
      ],
    ],
  },
  {
    id: "fluid",
    label: "02 / Fluid",
    title: "Movement & continuity",
    copy: "More expressive, with a stronger connection to a traditional triskelion. These are the closest family to the sense of natural movement you described.",
    concepts: [
      [
        "swept",
        "F1",
        "Swept",
        "The fluid option from the previous review, retained for comparison.",
      ],
      [
        "spiral",
        "F2",
        "Spiral",
        "A more recognizably spiral form, with three turning arms and open ends.",
      ],
      [
        "orbit",
        "F3",
        "Orbit",
        "Three broad arcs balancing movement with a simpler outline.",
      ],
    ],
  },
  {
    id: "engineered",
    label: "03 / Engineered",
    title: "Connection & construction",
    copy: "Ribbon-like forms and deliberate turns. A more technical interpretation that still keeps the three-arm foundation.",
    concepts: [
      [
        "ribbon",
        "E1",
        "Ribbon",
        "Folded, continuous-looking strokes and a compact central connection.",
      ],
      [
        "fold",
        "E2",
        "Fold",
        "Three directional bands with a more pronounced change of angle.",
      ],
      [
        "monoline",
        "E3",
        "Circuit",
        "A restrained, fine-line option with right-angle returns.",
      ],
    ],
  },
  {
    id: "bold",
    label: "04 / Emblematic",
    title: "Presence & recognition",
    copy: "More visual weight and a stronger silhouette. Useful to compare for small icons, proposals, and a company identity that needs to stand on its own.",
    concepts: [
      [
        "blades",
        "B1",
        "Momentum",
        "Three curved, filled arms that suggest forward motion without adding an arrow.",
      ],
      [
        "interlock",
        "B2",
        "Interlock",
        "Three linked loops with a firmer, more substantial stroke.",
      ],
      [
        "seal",
        "B3",
        "Enclosed",
        "A triskelion enclosed in a fine ring, giving it the feel of a deliberate company emblem.",
      ],
    ],
  },
];
export default function BrandReview() {
  if (process.env.VERCEL_ENV === "production") notFound();
  return (
    <>
      <PageIntro
        image={false}
        label="Private working review / 12 vector studies"
        title={
          <>
            One foundation.
            <br />
            Twelve directions.
          </>
        }
        description="Four groups of triskelion studies, including the three earlier options. Compare the character of the group first, then the details of an individual mark. The current website logo remains unchanged."
      />
      <nav className="logo-family-nav section" aria-label="Logo families">
        {families.map((f) => (
          <a href={"#" + f.id} key={f.id}>
            {f.title} <span aria-hidden="true">↓</span>
          </a>
        ))}
      </nav>
      {families.map((f) => (
        <section id={f.id} className="logo-family" key={f.id}>
          <div className="logo-family-heading section">
            <div>
              <p className="eyebrow">{f.label}</p>
              <h2>{f.title}</h2>
            </div>
            <p>{f.copy}</p>
          </div>
          <div className="logo-concepts section">
            {f.concepts.map(([variant, id, title, copy]) => (
              <article key={id} data-concept={id}>
                <p className="eyebrow">
                  {id} / {title}
                </p>
                <div className="logo-large">
                  <LogoConcept variant={variant} />
                </div>
                <div className="concept-wordmark">
                  <LogoConcept variant={variant} />
                  <span>adapt22</span>
                </div>
                <p className="concept-copy">{copy}</p>
                <div className="logo-dark">
                  <LogoConcept variant={variant} />
                  <span>adapt22</span>
                </div>
                <div className="logo-small">
                  <span>Small-size test</span>
                  <LogoConcept variant={variant} />
                  <LogoConcept variant={variant} />
                </div>
              </article>
            ))}
          </div>
        </section>
      ))}
      <section className="section brand-guidance">
        <p className="eyebrow">Choosing a direction</p>
        <h2>
          Start with character.
          <br />
          Then refine the mark.
        </h2>
        <p>
          Compare G1 with the fluid group first. If the fluid group feels
          closer, F1 and F2 give us two distinct starting points. If you prefer
          a stronger company emblem, compare B2 and B3. Each direction still
          needs final optical refinement and identity clearance before adoption.
          These are newly drawn studies, not recovered versions of the missing
          earlier artwork.
        </p>
      </section>
    </>
  );
}
