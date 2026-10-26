export const metadata = {
  title: "Accessibility",
  description:
    "Accessibility features and a way to report a problem using the adapt22 website.",
  alternates: { canonical: "/accessibility" },
};
export default function Accessibility() {
  return (
    <article className="section legal">
      <p className="eyebrow">Using this website</p>
      <h1>Accessibility</h1>
      <p>
        Adapt 22 LLC aims to make the adapt22 website usable with a keyboard, a
        screen reader, and a range of screen sizes and browser settings.
      </p>
      <h2>How the site is designed</h2>
      <p>
        The site includes a skip-to-content link, labelled form controls,
        visible keyboard focus, expandable questions that work from the
        keyboard, and text alternatives for informative images. Layouts adjust
        to smaller screens. Decorative animation respects your device’s
        reduced-motion setting.
      </p>
      <h2>Testing and improvements</h2>
      <p>
        We use automated accessibility checks and manual checks of
        representative pages and interactions. These checks help identify
        issues, but do not establish that every combination of browser, device,
        and assistive technology will work without difficulty.
      </p>
      <h2>Tell us about a problem</h2>
      <p>
        If something is difficult to read or use, email{" "}
        <a href="mailto:info@adapt22.ai">info@adapt22.ai</a>. Please include the
        page, what you were trying to do, and the browser or assistive
        technology you were using, if you are comfortable sharing it. We can
        also discuss the website’s information by email or in a conversation.
      </p>
    </article>
  );
}
