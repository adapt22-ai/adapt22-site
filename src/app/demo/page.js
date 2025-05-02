// src/app/demo/page.js — Final Adapt22 Themed Demo Page

export const metadata = {
  title: "Try Our Demo | Adapt22",
  description: "Test out AI-powered call, text, and automation experiences from Adapt22.",
};

export default function DemoPage() {
  return (
    <div className="bg-[#f3f5f3] text-gray-900">
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto space-y-16 text-center">
          {/* Hero + CTA */}
          <div className="space-y-6">
            <h1 className="text-5xl font-extrabold text-primary">Try Our Demo</h1>
            <div className="h-1 w-[30ch] bg-accent rounded-full mx-auto mt-2" />
            <p className="text-lg text-gray-700">
              Experience how our AI systems interact with your leads, handle customer conversations, and automate tasks — all custom-built around real business workflows.
            </p>
            <div className="bg-white text-primary border-l-4 border-primary px-6 py-8 rounded shadow-lg text-center text-xl font-semibold max-w-xl mx-auto">
              Demo Site Launch: <span className="text-accent">May 7</span>
            </div>
          </div>

          {/* Call to Action */}
          <div>
            <p className="text-gray-700 mb-4">Want early access or a walkthrough?</p>
            <a
              href="/book-a-call"
              className="inline-block bg-primary text-white px-8 py-3 rounded-full font-semibold hover:bg-green-800 transition"
            >
              Book a Free Discovery Call
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}