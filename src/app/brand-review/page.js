import { notFound } from "next/navigation";
import LogoConcept from "../../components/LogoConcept";
import { PageIntro } from "../../components/Shared";
export const metadata = {
  title: "Triskelion logo studies",
  robots: { index: false, follow: false },
};
const families = [
  {
    id: "references",
    label: "Reference shortlist / Not a selection",
    title: "The four worth keeping in view",
    copy: "G1, G2, F1, and B2 are retained exactly as comparison references. All other previous studies have been removed. None of these four is treated as your chosen direction.",
    concepts: [
      [
        "current",
        "G1",
        "Current angular",
        "The existing website mark, unchanged.",
      ],
      [
        "open",
        "G2",
        "Open geometry",
        "The lighter open construction from the last review.",
      ],
      [
        "swept",
        "F1",
        "Swept",
        "The filled, curved return from the last review.",
      ],
      [
        "interlock",
        "B2",
        "Interlock",
        "The linked angular loops from the last review.",
      ],
    ],
  },
  {
    id: "loops",
    label: "New studies / 01–04",
    title: "Open loops & returning arms",
    copy: "Four different ways for each arm to turn back toward the center. Compare the open space, the shape of the return, and how distinctly the three arms read at a small size.",
    concepts: [
      [
        "helix",
        "N1",
        "Helix",
        "Long, open turns with a smaller internal curl. More organic than the reference shortlist.",
      ],
      [
        "return",
        "N2",
        "Return",
        "Broad rounded returns with short inward stems. A more compact, substantial silhouette.",
      ],
      [
        "oval",
        "N3",
        "Oval",
        "Three elongated loops leave more air around the center.",
      ],
      [
        "hook",
        "N4",
        "Square return",
        "A straight stem meets a rounded outer return, with deliberately flat terminals.",
      ],
    ],
  },
  {
    id: "carved",
    label: "New studies / 05–08",
    title: "Carved forms & negative space",
    copy: "Solid silhouettes rather than outlined loops. Each uses a different internal cut: stepped, triangular, faceted, or curved. View these in one color before judging the bronze version.",
    concepts: [
      [
        "cutstone",
        "N5",
        "Cut stone",
        "Stepped inner cuts and three faceted returns. A heavier alternative to G2.",
      ],
      [
        "aperture",
        "N6",
        "Aperture",
        "Three folded planes leave angular openings around a triangular center.",
      ],
      [
        "chisel",
        "N7",
        "Chisel",
        "Offset facets create a less regular outside edge and a sharply cut interior.",
      ],
      [
        "crescent",
        "N8",
        "Crescent",
        "A solid crescent-shaped arm with a broad outer curve and tapered inner return.",
      ],
    ],
  },
  {
    id: "connected",
    label: "New studies / 09–12",
    title: "Interwoven bands & parallel lines",
    copy: "These explore the connection between the arms more directly: a folded band, an angular link, a broad arc, and a double contour. They keep the three-part construction while changing its weight and rhythm.",
    concepts: [
      [
        "weave",
        "N9",
        "Woven band",
        "Filled bands with narrow internal channels and a compact center.",
      ],
      [
        "link",
        "N10",
        "Open link",
        "An angular return with deliberate gaps and a more open center than B2.",
      ],
      [
        "arc",
        "N11",
        "Broad arc",
        "Wide circular turns with restrained internal detail.",
      ],
      [
        "contour",
        "N12",
        "Double contour",
        "Two parallel lines describe each return. A quieter, more intricate study.",
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
        label="Private working review / 4 references + 12 new studies"
        title={
          <>
            Keep the foundation.
            <br />
            Explore the form.
          </>
        }
        description="Your four reference marks, followed by twelve newly drawn triskelion studies. These explore different structures, not just different colors or line weights. The website logo remains unchanged."
      />
      <section
        className="logo-overview section"
        aria-labelledby="overview-title"
      >
        <p className="eyebrow">Compare the silhouettes first</p>
        <h2 id="overview-title">All sixteen, side by side.</h2>
        <p className="overview-note">
          The first four are your references. N1–N12 are new. Select a mark to
          see its larger study and small-size test.
        </p>
        <div>
          {families
            .flatMap((f) => f.concepts)
            .map(([variant, id, title]) => (
              <a
                href={`#concept-${id}`}
                key={id}
                aria-label={`${id}: ${title}`}
              >
                <LogoConcept variant={variant} />
                <span>{id}</span>
              </a>
            ))}
        </div>
      </section>
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
              <article key={id} id={`concept-${id}`} data-concept={id}>
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
          Start with the silhouette at the small-size test. Then compare how the
          arms connect and how much open space remains. The reference shortlist
          is here to help you explain what is closer, not to force a choice.
          These are exploration drawings; a selected direction still needs
          optical refinement and identity clearance before adoption. None is
          claimed to reproduce the missing earlier artwork.
        </p>
      </section>
    </>
  );
}
