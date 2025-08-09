"use client";

import Link from "next/link";
import Image from "next/image";

export default function WhoWeArePage() {
  return (
    <div className="bg-background text-textPrimary">
      {/* Hero Video Background Section */}
      <section className="relative w-full min-h-[90vh] overflow-hidden flex items-center justify-center text-textPrimary px-4">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-60 z-0"
        >
          <source src="/3-wwa.mp4" type="video/mp4" />
        </video>

        <div className="relative z-10 text-center max-w-5xl space-y-8 sm:space-y-10">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-accentIndigo drop-shadow-md">
            Who We Are
          </h1>
          <div className="h-1 w-[16ch] sm:w-[24ch] bg-primaryDark rounded-full mx-auto mt-2 mb-6" />
          <p className="text-lg sm:text-xl md:text-2xl leading-relaxed text-textPrimary font-medium max-w-3xl mx-auto drop-shadow-md px-2 sm:px-0">
            Adapt22 started from a personal, deep rooted frustration, <strong>
              “Why do the companies who keep our world going not have the software they need to thrive?”
            </strong> This bothered our founder, Jackson McConnell, for a long time as he had lived in both worlds — home service and software.
          </p>
        </div>
      </section>

      {/* Founder Section and Main Content */}
      <section className="py-20 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto space-y-14">

          {/* Founder Section */}
          <div className="flex flex-col md:flex-row items-start gap-10">
            <div className="w-full md:w-1/3">
              <Image
                src="/headshot.png"
                alt="Jackson McConnell"
                width={500}
                height={500}
                className="rounded-xl shadow-xl w-full h-auto object-cover"
              />
            </div>
            <div className="w-full md:w-2/3 space-y-5 text-textPrimary">
  <h2 className="text-2xl font-bold text-accentIndigo">Jackson McConnell</h2>
  <p>
    Jackson was born and raised in Atlanta, Georgia, and got an early start in the trades. While still in high school, he launched a home services business — and grew it steadily over five years. <span className="font-bold text-primaryLight">He fell in love with the work itself</span>: serving real people by solving real problems and keeping homes and businesses running smoothly.
  </p>
  <p>
    While running his crews and managing day-to-day operations, Jackson noticed how clunky, outdated, and frustrating most software tools were — not just for his company, but for every contractor and partner he worked with.
  </p>
  <p>
    When the pandemic hit and AI started reshaping industries, <span className="font-bold text-primaryLight">Jackson saw an opportunity to pivot — not away from trades, but to better serve them</span>. He moved into software, eventually leading a team building custom solutions for SMBs in construction, home services, retail, and healthcare.
  </p>
  <p>
    But even great software wasn’t enough. Jackson kept seeing the same issue: no matter how powerful the tool, implementing it, managing it, and getting it to scale without friction was always the bottleneck.
  </p>
  <p>
    <span className="font-bold text-primaryLight">“Implement, Manage, Scale”</span> — those are the three ends of the triskelion in the Adapt22 logo, and they represent exactly what Jackson set out to solve. Adapt22 was built to be a white-glove service that handles everything tech-related — so you can stay focused on your craft, your customers, and your team.
  </p>
  <p>
    The mission is simple: <span className="font-bold text-primaryLight">“Serving Those Who Serve Us.”</span> Your work keeps the world running. You deserve the same powerful tools billion-dollar companies have — without the hassle. Most modern software leaves tradespeople behind. We exist to change that.
  </p>
</div>
          </div>

          {/* Full-width Quote */}
          <div className="bg-surface border-t-4 border-primaryDark text-center text-xl text-textPrimary px-6 py-10 rounded shadow-md">
            <p className="max-w-3xl mx-auto">
              “You, my brothers and sisters, were called to be free. But do not use your freedom to indulge the flesh; rather, serve one another humbly in love.”
            </p>
            <footer className="mt-4 text-base textMuted">— Galatians 5:13</footer>
          </div>

          {/* Core Values */}
          <div className="bg-primaryDark border-t-4 border-surface text-white py-12 px-6 rounded-md shadow-md text-center">
            <h2 className="text-3xl font-semibold mb-8 text-white">Adapt22 Virtues</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
              {["Hard Work", "Service", "Resilience", "Persistence", "Accountability"].map((val, i) => (
                <div key={i} className="bg-white text-primaryDark font-bold py-4 rounded shadow-md">
                  {val}
                </div>
              ))}
            </div>
          </div>

          {/* Scripture Blockquote */}
          <blockquote className="text-center text-xl font-semibold italic textMuted mt-16 px-4">
            “Long-term partnerships mean everything to me in this space. I’m not in this for a ‘one-and-done’ relationship. I want to see you and your team continue to win again and again, and get to be a small part of that equation.” 
            <footer className="mt-2 text-base textMuted">— Jackson McConnell</footer>
          </blockquote>

          {/* Dual Column Grid */}
          <div className="grid md:grid-cols-2 gap-12 mt-20">
            <div className="bg-surface p-6 rounded-lg shadow border-t-4 border-primaryDark">
              <h3 className="text-2xl font-bold mb-4 text-white">What You Receive</h3>
              <ul className="space-y-2 list-disc list-inside textMuted">
                <li>More of your two most important resources — Time and Money</li>
                <li>Scalable, future-proof solutions to each of your problems</li>
                <li>A team equipped to understand and serve your needs</li>
              </ul>
            </div>
            <div className="bg-surface p-6 rounded-lg shadow border-t-4 border-primaryDark">
              <h3 className="text-2xl font-bold mb-4 text-white">What We Believe</h3>
              <ul className="space-y-2 list-disc list-inside textMuted">
                <li>AI should serve people — not confuse them.</li>
                <li>Providing white-glove, done-for-you solutions tailored to your needs.</li>
                <li>Your time is better spent on your craft — not clicking around 20 dashboards.</li>
              </ul>
            </div>
          </div>

          {/* Team Section */}
          <div className="mt-20">
            <h2 className="text-4xl font-bold text-center text-accentIndigo mb-10">The Team Behind Adapt22</h2>
            <div className="grid md:grid-cols-2 gap-10">
              {[
                { title: "Software Strategists", desc: "Understanding your operations and tailoring the right systems to support your business growth." },
                { title: "Client Success", desc: "Helping you onboard smoothly, answering questions, and ensuring long-term results." },
                { title: "Developers & Integrators", desc: "Managing the buildout of your AI workflows, integrations, and automation." },
                { title: "AI Specialists", desc: "Using the latest AI tools (OpenAI, Agents, LangChain, etc.) to solve real business problems." }
              ].map((member, i) => (
                <div key={i} className="bg-surface p-6 rounded shadow border-l-4 border-primaryDark">
                  <h4 className="font-semibold text-lg mb-2 text-white">{member.title}</h4>
                  <p className="text-textMuted">{member.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Mission Statement Callout */}
          <div className="mt-24 text-center bg-primaryDark bg-opacity-10 py-12 rounded-lg shadow-md px-4">
            <h2 className="text-3xl font-bold">
              <span className="text-textPrimary">Adapt22 Mission:</span>{" "}
              <span className="text-primaryLight">Serving Those Who Serve Us.</span>
            </h2>
            <p className="text-lg textMuted mt-4 max-w-2xl mx-auto">
              Your work is essential to keep our world running and you deserve the same tools that billion-dollar companies have.
            </p>
          </div>

        </div>
      </section>
    </div>
  );
}