// src/app/who-we-are/page.js — Finalized "Who We Are" Page with Your Exact Verbiage and Visual Structure

import Link from "next/link";
import Image from "next/image";

export default function WhoWeArePage() {
  return (
    <div className="bg-[#f3f5f3] text-gray-900">
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto space-y-14">

          {/* Page Title + Intro Quote */}
          <div>
          <h1 className="text-5xl font-extrabold mb-6 text-primary text-center">Who We Are</h1>
          <div className="h-1 w-[30ch] bg-accent rounded-full mx-auto mt-2 mb-6" />
            <div className="max-w-3xl mx-auto text-left">
              <p className="text-lg text-gray-700 leading-relaxed">
                Adapt22 started from a personal, deep routed frustration, <strong>
                  “Why do the companies who keep our world going not have the software they need to thrive?”
                </strong> This bothered our founder, Jackson McConnell, for a long time as he had lived in both worlds - home service and software.
              </p>
            </div>
          </div>

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
            <div className="w-full md:w-2/3 space-y-5 text-gray-800">
              <h2 className="text-2xl font-bold text-primary">Jackson McConnell</h2>
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
          <div className="bg-white border-t-4 border-primary text-center text-lg italic text-gray-800 px-8 py-10 rounded shadow-md">
            <p className="max-w-3xl mx-auto">
              “Long-term partnerships mean everything to me in this space. I’m not in this for a ‘one-and-done’ relationship. I want to see you and your team continue to win again and again, and get to be a small part of that equation.”
            </p>
            <footer className="mt-4 text-base text-gray-500">— Jackson McConnell</footer>
          </div>

          {/* Core Values */}
          <div className="bg-primary text-white py-12 px-6 rounded-md shadow-md text-center">
            <h2 className="text-3xl font-semibold mb-8">Adapt22 Core Values</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
              {["Honesty", "Accountability", "Service", "Resilience", "Tenacity"].map((val, i) => (
                <div key={i} className="bg-white text-primary font-bold py-4 rounded shadow-md">
                  {val}
                </div>
              ))}
            </div>
          </div>

          {/* Scripture Blockquote */}
          <blockquote className="text-center text-xl font-semibold italic text-gray-700 mt-16">
            “You, my brothers and sisters, were called to be free. But do not use your freedom to indulge the flesh; rather, serve one another humbly in love.”
            <footer className="mt-2 text-base text-gray-500">— Galatians 5:13</footer>
          </blockquote>

          {/* Dual Column Grid */}
          <div className="grid md:grid-cols-2 gap-12 mt-20">
            <div className="bg-white p-6 rounded-lg shadow border-t-4 border-primary">
              <h3 className="text-xl font-bold mb-4 text-primary">What You Receive</h3>
              <ul className="space-y-2 list-disc list-inside text-gray-700">
                <li>More of your two most important resources — Time and Money</li>
                <li>Scalable, future-proof solutions to each of your problems</li>
                <li>A team equipped to understand and serve your needs</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow border-t-4 border-primary">
              <h3 className="text-xl font-bold mb-4 text-primary">What We Believe</h3>
              <ul className="space-y-2 list-disc list-inside text-gray-700">
                <li>AI should serve people — not confuse them.</li>
                <li>Providing white-glove, done-for-you solutions tailored to your needs.</li>
                <li>Your time is better spent on your craft — not clicking around 20 dashboards.</li>
              </ul>
            </div>
          </div>

          {/* Team Section */}
          <div className="mt-20">
            <h2 className="text-3xl font-bold text-center text-primary mb-10">The Team Behind Adapt22</h2>
            <div className="grid md:grid-cols-2 gap-10 text-gray-800">
              {[
                { title: "Software Strategists", desc: "Understanding your operations and tailoring the right systems to support your business growth." },
                { title: "Client Success", desc: "Helping you onboard smoothly, answering questions, and ensuring long-term results." },
                { title: "Developers & Integrators", desc: "Managing the buildout of your AI workflows, integrations, and automation." },
                { title: "AI Specialists", desc: "Using the latest AI tools (OpenAI, Agents, LangChain, etc.) to solve real business problems." }
              ].map((member, i) => (
                <div key={i} className="bg-white p-6 rounded shadow border-l-4 border-primary">
                  <h4 className="font-semibold text-lg mb-2">{member.title}</h4>
                  <p>{member.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Mission Statement Callout */}
          <div className="mt-24 text-center bg-gold bg-opacity-10 py-12 rounded-lg shadow-md">
            <h2 className="text-3xl font-bold">
              <span className="text-gray-900">Adapt22 Mission:</span>{" "}
              <span className="text-accent">Serving Those Who Serve Us.</span>
            </h2>
            <p className="text-lg text-gray-700 mt-4 max-w-2xl mx-auto">
              Your work is essential to keep our world running and you deserve the same tools that billion-dollar companies have.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}