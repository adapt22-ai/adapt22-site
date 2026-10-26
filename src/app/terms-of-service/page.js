export const metadata = {
  title: "Website terms",
  description:
    "Information about using the adapt22 website and discussing a potential engagement.",
  alternates: { canonical: "/terms-of-service" },
};
export default function Terms() {
  return (
    <article className="section legal">
      <p className="eyebrow">Website information / October 26, 2026</p>
      <h1>Website terms</h1>
      <p>
        adapt22 LLC operates this website to explain our services and provide
        ways to start a conversation. For questions, use{" "}
        <a href="/contact">our contact page</a>.
      </p>
      <h2>Service information</h2>
      <p>
        Service descriptions illustrate potential areas of work. They are not a
        proposal, a fixed package, or a guarantee of a particular business
        result. An engagement begins only after scope, responsibilities,
        deliverables, fees, and applicable terms are separately agreed.
      </p>
      <h2>Submitting an inquiry</h2>
      <p>
        A contact message or scheduled conversation does not establish an
        engagement or a confidentiality agreement. Please keep initial messages
        to a general description of your situation and avoid sharing
        confidential records, credentials, or sensitive personal information.
      </p>
      <h2>Third-party services</h2>
      <p>
        Scheduling links and other external links lead to services operated by
        their respective providers. Their availability and terms are governed by
        those providers.
      </p>
      <h2>Website content</h2>
      <p>
        Information may change as services develop. If you need to rely on a
        specific capability, availability, or delivery timeline, confirm it
        directly with our team and include it in the agreed scope.
      </p>
    </article>
  );
}
