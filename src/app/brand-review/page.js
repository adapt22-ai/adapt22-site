import { notFound } from "next/navigation";
import LogoConcept from "../../components/LogoConcept";
import { PageIntro } from "../../components/Shared";
export const metadata = {
  title: "Logo direction review",
  robots: { index: false, follow: false },
};
const concepts = [
  [
    "current",
    "01 / Current geometry",
    "Angular triskelion",
    "The current mark, now in bronze. It is compact and simple, but the repeated outline can feel more like a general technology symbol than a distinctive company mark.",
  ],
  [
    "swept",
    "02 / Recommended direction to explore",
    "Swept triskelion",
    "A more fluid three-arm form with a deliberate forward movement. It keeps the implement, manage, scale meaning and has more personality beside the editorial wordmark. This is a new vector study, not the missing earlier artwork.",
  ],
  [
    "open",
    "03 / Lighter alternative",
    "Open triskelion",
    "An open, rounded construction. Less mechanical than the current mark, with a lighter feel. It will need careful small-size refinement before it could become a final identity.",
  ],
];
export default function BrandReview() {
  if (process.env.VERCEL_ENV === "production") notFound();
  return (
    <>
      <PageIntro
        image={false}
        label="Private working review / Not a final identity"
        title={
          <>
            Keep the meaning.
            <br />
            Find the right character.
          </>
        }
        description="Three directions for our logo conversation. The website continues to use the current mark in bronze. No new concept has been selected as the final logo."
      />
      <section className="logo-concepts section">
        {concepts.map(([variant, label, title, copy]) => (
          <article key={variant}>
            <p className="eyebrow">{label}</p>
            <div className="logo-large">
              <LogoConcept variant={variant} />
            </div>
            <div className="concept-wordmark">
              <LogoConcept variant={variant} />
              <span>adapt22</span>
            </div>
            <h2>{title}</h2>
            <p>{copy}</p>
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
      </section>
      <section className="section brand-guidance">
        <p className="eyebrow">What should decide it</p>
        <h2>
          Recognizable before
          <br />
          it needs explaining.
        </h2>
        <p>
          The final mark should hold up in one color, read clearly at navigation
          and favicon sizes, and feel like adapt22 without relying on a mountain
          illustration. The landscape photography can carry the sense of place;
          the logo should carry the company.
        </p>
      </section>
    </>
  );
}
