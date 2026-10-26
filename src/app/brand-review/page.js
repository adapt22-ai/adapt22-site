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
    copy: "G1, G2, F1, and B2 are retained exactly as comparison references. The three newer references N2, N4 and N11 appear in their own groups below. None of these four is treated as your chosen direction.",
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
    id: "n11",
    label: "Primary exploration / N11",
    title: "Let the curves keep going",
    copy: "N11 is retained as the baseline. A, B and C progressively extend the same line. D opens the center, E broadens the petals, and F balances the longer return with a softer outline.",
    concepts: [
      [
        "arc",
        "N11",
        "Original broad arc",
        "Your reference from the previous review, unchanged.",
      ],
      [
        "arcPlus",
        "N11-A",
        "A little further",
        "The original curve continues a short distance inward.",
      ],
      [
        "arcFurther",
        "N11-B",
        "Longer return",
        "The line continues into a fuller return, making each petal more apparent.",
      ],
      [
        "arcCurl",
        "N11-C",
        "Turn inward",
        "The longer line curls back inside the petal; a lighter stroke preserves the opening.",
      ],
      [
        "arcAir",
        "N11-D",
        "Open flower",
        "More room at the center and a finer line separate the three petals.",
      ],
      [
        "arcPetal",
        "N11-E",
        "Broad petals",
        "A wider outer sweep and longer inward return make the flower-like silhouette more distinct.",
      ],
      [
        "arcSoft",
        "N11-F",
        "Soft return",
        "A more compact petal with an extended, rounded inner return.",
      ],
    ],
  },
  {
    id: "n2",
    label: "Supporting exploration / N2",
    title: "Refine the returning loop",
    copy: "Keep the N2 structure in view while testing a longer inner stem and a more open, lighter return.",
    concepts: [
      ["return", "N2", "Original return", "The N2 source study, unchanged."],
      [
        "returnLong",
        "N2-A",
        "Longer stem",
        "The inner line extends farther up the loop.",
      ],
      [
        "returnOpen",
        "N2-B",
        "Open return",
        "A shorter terminal and lighter stroke leave a larger opening.",
      ],
    ],
  },
  {
    id: "n4",
    label: "Supporting exploration / N4",
    title: "Soften the square return",
    copy: "Keep the straighter stem of N4 while exploring rounded terminals and an extended inward turn.",
    concepts: [
      [
        "hook",
        "N4",
        "Original square return",
        "The N4 source study, unchanged.",
      ],
      [
        "hookRound",
        "N4-A",
        "Rounded terminals",
        "A lighter stroke and rounded ends soften the original geometry.",
      ],
      [
        "hookInward",
        "N4-B",
        "Inward turn",
        "The terminal continues inward, bringing more of the returning-loop character into N4.",
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
        label="Private working review / N11 / N2 / N4 refinements"
        title={
          <>
            Follow the curve.
            <br />
            Refine the mark.
          </>
        }
        description="Your four original references remain. This round focuses on N2, N4, and especially N11: longer curves, more open centers, and a simple three-petal character. The website logo remains unchanged."
      />
      <section
        className="logo-overview section"
        aria-labelledby="overview-title"
      >
        <p className="eyebrow">Compare the silhouettes first</p>
        <h2 id="overview-title">Compare every mark at the same scale.</h2>
        <p className="overview-note">
          The first four are the original references. N11, N2 and N4 are
          retained as baselines, followed by their new variations. Select a mark
          to see the larger study.
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
