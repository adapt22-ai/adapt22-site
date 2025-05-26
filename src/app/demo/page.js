// src/app/demo/page.js — Final Adapt22 Themed Demo Page

export const metadata = {
  title: "Try Our Demo | Adapt22",
  description: "Test out AI-powered call, text, and automation experiences from Adapt22.",
};

export default function DemoPage() {
  return (
    <div className="bg-background text-textPrimary">
      <section className="py-20 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto space-y-16 text-center">
          {/* Hero + CTA */}
          <div className="space-y-6">
            <h1 className="text-4xl sm:text-5xl font-extrabold text-accentIndigo">Try Our Demo</h1>
            <div className="h-1 w-full max-w-[300px] sm:max-w-[400px] md:max-w-[30ch] bg-primaryDark rounded-full mx-auto mt-2" />
            <p className="text-md sm:text-lg textMuted">
              Experience how our AI systems interact with your leads, handle customer conversations, and automate tasks — all custom-built around real business workflows.
            </p>
            <div className="bg-surface text-textPrimary border-l-4 border-primaryDark px-6 py-8 rounded shadow-lg text-center text-lg sm:text-xl font-semibold max-w-xl mx-auto">
              Demo Site Launch: <span className="text-xl sm:text-2xl font-semibold text-accentIndigo">June 5th</span>
            </div>
          </div>

          {/* Call to Action */}
          <div>
            <p className="text-md textMuted mb-4">Want early access or a walkthrough?</p>
            <a
              href="/book-a-call"
              className="inline-block bg-primaryDark text-white px-8 py-3 rounded-full font-semibold hover:bg-[#013c35] transition"
            >
              Book a Free Discovery Call
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}