import { notFound } from "next/navigation";
import LogoStudy from "../../components/LogoStudy";
import styles from "./studio.module.css";
import { PageIntro } from "../../components/Shared";
export const metadata = {
  title: "Triskelion logo studies",
  robots: { index: false, follow: false },
};
const families = [
  {
    id: "reference",
    label: "Starting point / Unchanged",
    title: "N11-C",
    copy: "The exact mark you picked as the starting point. Keep this in view while comparing where the line ends, how it joins, and how the three shapes read together.",
    concepts: [
      [
        "baseline",
        "N11-C",
        "Original reference",
        "Unchanged from your previous review. Retained as the starting reference. C3 is now the selected website logo.",
      ],
    ],
  },
  {
    id: "flow",
    label: "01 / Close to N11-C",
    title: "Let the ends become part of the curve",
    copy: "Six ways to remove the feeling of an abrupt endpoint. Some taper into a fine tip; others physically reconnect with a loop or a shared sweep. All work in a single solid color.",
    concepts: [
      [
        "silk",
        "C1",
        "Silk tip",
        "A filled ribbon thins into the inner curl. The end dissolves through its shape, rather than fading away.",
      ],
      [
        "join",
        "C2",
        "Joined return",
        "The inner curl travels back into the outer line, joining the two instead of stopping inside the circle.",
      ],
      [
        "shared",
        "C3",
        "Shared center",
        "Selected for the website. Each inner return flows back to the central junction, making three closed, connected paths.",
      ],
      [
        "whisper",
        "C4",
        "Fine return",
        "A longer, finer paisley tip sits inside a broader outer sweep.",
      ],
      [
        "river",
        "C5",
        "Continuous current",
        "The curl continues beyond its loop into the neighboring sweep. More flowing and less like separate circular ends.",
      ],
      [
        "crescentWeave",
        "C6",
        "Woven paisley",
        "A broad outer band narrows into a curling inner line. A stronger paisley silhouette with three turning arms.",
      ],
    ],
  },
  {
    id: "free",
    label: "02 / Further from the starting point",
    title: "Paisley, petals, and a few wild cards",
    copy: "Looser interpretations of the three-part idea. These deliberately move beyond a literal triskelion: seed forms, a folded flower, sweeping tails, a knot, and an enclosing orbit.",
    concepts: [
      [
        "seeds",
        "P1",
        "Single paisley",
        "One oversized paisley replaces the radial mark. Its returning curls retain the circular movement of the starting point.",
      ],
      [
        "eyes",
        "P2",
        "Paisley eyes",
        "A fuller paisley body with a small circular eye. More ornamental and substantial.",
      ],
      [
        "bloom",
        "P3",
        "Folded bloom",
        "One solid flower-like form with three carved openings. The three-part rhythm remains without a literal three-arm symbol.",
      ],
      [
        "comet",
        "P4",
        "Swept tails",
        "Three curved, pointed bands with longer outward tails. More directional and expressive.",
      ],
      [
        "knot",
        "P5",
        "Continuous knot",
        "A continuous trefoil line with three broad lobes and a woven center. A geometric departure from the paisley forms.",
      ],
      [
        "orbitFlower",
        "P6",
        "Orbit flower",
        "A thin enclosing orbit surrounds three closed, curling petals. A quieter, more intricate emblem.",
      ],
    ],
  },
];
export default function BrandReview() {
  if (process.env.VERCEL_ENV === "production") notFound();
  return (
    <div className={styles.studio}>
      <PageIntro
        image={false}
        label="Selected identity / C3"
        title={
          <>
            Let the lines flow.
            <br />
            See where they lead.
          </>
        }
        description="N11-C is the starting point. This round explores seamless returns, tapered paisley forms, and more adventurous shapes with three-part roots. C3 is now selected and used across the website. Other studies remain here as the design record."
      />
      <section
        className="logo-overview section"
        aria-labelledby="overview-title"
      >
        <p className="eyebrow">Compare the silhouettes first</p>
        <h2 id="overview-title">Compare every mark at the same scale.</h2>
        <p className="overview-note">
          Start with N11-C, then compare C1–C6 for a closer refinement or P1–P6
          for a bigger departure. Select any mark to see it larger, with the
          wordmark, on dark, and at small sizes.
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
                <LogoStudy variant={variant} />
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
                  {id === "C3" ? " / Selected" : ""}
                </p>
                <div className="logo-large">
                  <LogoStudy variant={variant} />
                </div>
                <div className="concept-wordmark">
                  <LogoStudy variant={variant} />
                  <span>adapt22</span>
                </div>
                <p className="concept-copy">{copy}</p>
                <div className="logo-dark">
                  <LogoStudy variant={variant} />
                  <span>adapt22</span>
                </div>
                <div className="logo-small">
                  <span>Small-size test</span>
                  <LogoStudy variant={variant} />
                  <LogoStudy variant={variant} />
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
          Which feels closest: a fine tapered tip, a joined line, or a fuller
          paisley? Compare that first, then the overall silhouette. Each is a
          vector study that works without gradients. A chosen direction still
          needs optical refinement and identity clearance before adoption.
        </p>
      </section>
    </div>
  );
}
