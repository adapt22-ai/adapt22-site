import Image from "next/image";
import { PageIntro, CTA } from "../../components/Shared";
import Mark from "../../components/Mark";
export const metadata = {
  title: "About Jackson & adapt22",
  description:
    "Meet Jackson McConnell, founder of adapt22. Business experience informs practical technology leadership and hands-on delivery.",
  alternates: { canonical: "/about" },
};
export default function About() {
  return (
    <>
      <PageIntro
        label="Independent by design"
        title={
          <>
            Close to the business.
            <br />
            Accountable for the work.
          </>
        }
        description="adapt22 is led by Jackson McConnell. A direct relationship with the person helping you make the decisions—and see them through."
      />
      <section className="founder section">
        <div className="portrait">
          <Image
            src="/headshot.png"
            alt="Jackson McConnell, founder of adapt22"
            width={900}
            height={1100}
            sizes="(max-width: 700px) 90vw, 40vw"
          />
          <p>
            Jackson McConnell <span>Founder / adapt22</span>
          </p>
        </div>
        <div>
          <p className="eyebrow">From operations to technology</p>
          <h2>
            The work behind
            <br />
            the work.
          </h2>
          <p>
            Jackson’s background spans running a home services business and
            building software. That experience shapes how adapt22 approaches
            technology: begin with the people doing the work, understand what
            gets in their way, and make the solution useful in practice.
          </p>
          <p>
            A new tool is only one part of the job. The decisions around it—how
            it connects, who owns it, and how the team learns to use
            it—determine whether it helps.
          </p>
          <p>
            That is why adapt22 brings strategy and implementation together. You
            work directly with Jackson to define the problem, make the
            tradeoffs, and keep the work connected to the business.
          </p>
          <p className="founder-signoff">
            Clear thinking. Hands-on work. Personal accountability.
          </p>
        </div>
      </section>
      <section className="values section">
        <p className="eyebrow">What the name stands for</p>
        <div className="values-grid">
          <Mark />
          <div>
            <h2>
              Implement.
              <br />
              Manage.
              <br />
              Scale.
            </h2>
            <p>
              Three connected responsibilities. The triskelion reflects the idea
              that putting something in place is the beginning, not the finish
              line. It needs to work today and be ready for what comes next.
            </p>
          </div>
        </div>
      </section>
      <CTA />
    </>
  );
}
