// src/app/who-we-are/page.js — Finalized w/ Background Video and Brand Colors

"use client";

import Link from "next/link";
import Image from "next/image";

export default function WhoWeArePage() {
  return (
    <div className="bg-background text-textPrimary">
      {/* Hero Video Background Section */}
      <section className="relative w-full h-[90vh] overflow-hidden flex items-center justify-center text-textPrimary">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-60 z-0"
        >
          <source src="/Vid-4.mp4" type="video/mp4" />
        </video>

        <div className="relative z-10 text-center max-w-5xl px-6 space-y-10">
          <h1 className="text-6xl md:text-7xl font-extrabold text-accentIndigo drop-shadow-md">
            Who We Are
          </h1>
          <div className="h-1 w-[30ch] bg-primaryDark rounded-full mx-auto mt-2 mb-6" />
          <p className="text-xl md:text-2xl leading-relaxed text-textPrimary font-medium max-w-4xl mx-auto drop-shadow-md">
            Adapt22 started from a personal, deep rooted frustration, <strong>
              “Why do the companies who keep our world going not have the software they need to thrive?”
            </strong> This bothered our founder, Jackson McConnell, for a long time as he had lived in both worlds — home service and software.
          </p>
        </div>
      </section>

      {/* Founder Section and Main Content */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto space-y-14">

          {/* Founder Section */}
          <div className="flex flex-col md:flex-row items-start gap-10">
            <div className="w-full md:w-1/3 pt-8">
              <Image
                src="/headshot.png"
                alt="Jackson McConnell"
                width={500}
                height={500}
                className="rounded-xl shadow-xl"
              />
            </div>
            <div className="w-full md:w-2/3 space-y-5 text-textPrimary">
              <h2 className="text-2xl font-bold text-white">Jackson McConnell</h2>
              <p>
                Jackson started a home services business in high school and grew it over 5 years. As Covid struck and the evolution of AI emerged,
                he pivoted into the world of software. Eventually, Jackson was leading a team building custom software for SMBs in trades,
                construction, service industries, retail, and medical.
              </p>
              <p>
                While it was incredibly fulfilling to be serving these companies and working directly with the entrepreneurs,
                he still didn’t feel like he was doing enough for them. One last problem remained, and likely the most pressing —
                no matter how shiny the solution was, implementing, managing, and scaling it was still a disaster.
              </p>
              <p>
                “Implement, Manage, Scale” are the three ends of the triskelion in the Adapt22 logo and happen to be what Jackson enjoyed doing most.
                This is why Adapt22 was born — to be a white-glove service handling everything tech related, so you get to solely focus on your craft and team.
              </p>
              <p>
                Our mission is straightforward: <strong>“Serving Those Who Serve Us.”</strong> Your work is essential to keep our world running and you deserve
                the same tools that billion-dollar companies have. Too many people feel as if modern AI and software solutions have left them behind — we exist to change that narrative.
              </p>
            </div>
          </div>

          {/* Full-width Quote */}
          <div className="bg-surface border-t-4 border-primaryDark text-center text-lg italic text-textPrimary px-8 py-10 rounded shadow-md">
            <p className="max-w-3xl mx-auto">
              “Long-term partnerships mean everything to me in this space. I’m not in this for a ‘one-and-done’ relationship. I want to see you and your team continue to win again and again, and get to be a small part of that equation.”
            </p>
            <footer className="mt-4 text-base textMuted">— Jackson McConnell</footer>
          </div>

          {/* Core Values */}
          <div className="bg-primaryDark border-t-4 border-surface text-white py-12 px-6 rounded-md shadow-md text-center">
            <h2 className="text-3xl font-semibold mb-8 text-white">Adapt22 Core Values</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
              {["Hard Work", "Service", "Resilience", "Persistence", "Accountability"].map((val, i) => (
                <div key={i} className="bg-white text-primaryDark font-bold py-4 rounded shadow-md">
                  {val}
                </div>
              ))}
            </div>
          </div>

          {/* Scripture Blockquote */}
          <blockquote className="text-center text-xl font-semibold italic textMuted mt-16">
            “You, my brothers and sisters, were called to be free. But do not use your freedom to indulge the flesh; rather, serve one another humbly in love.”
            <footer className="mt-2 text-base textMuted">— Galatians 5:13</footer>
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
          <div className="mt-24 text-center bg-primaryDark bg-opacity-10 py-12 rounded-lg shadow-md">
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
