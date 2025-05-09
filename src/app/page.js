// src/app/page.js — Finalized w/ Demo CTA + All Sections

import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="bg-white text-gray-900">
      {/* Hero Section with Motion Video */}
      <section className="relative w-full h-[80vh] overflow-hidden flex items-center justify-center">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-60 z-0"
        >
          <source src="/bg.mp4" type="video/mp4" />
        </video>

        <div className="relative z-10 text-center max-w-3xl px-6">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6 drop-shadow-md text-gray-900">
            AI Automation for the Businesses That Keep Our World Running
          </h1>
          <p className="text-lg md:text-xl mb-6 text-gray-900">
            Adapt22 offers white-glove implementation, management, and scaling
            of AI-powered communication and automation systems — built specifically
            for SMBs in the trades, field services, construction, retail, and medical practices.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Link
              href="/book-a-call"
              className="inline-block bg-green-900 text-white text-lg font-semibold px-10 py-4 rounded-full shadow hover:bg-green-800 transition"
            >
              Book a Call
            </Link>
            <Link
              href="/demo"
              className="inline-block bg-yellow-500 text-white text-lg font-semibold px-10 py-4 rounded-full shadow hover:bg-yellow-600 transition"
            >
              Try Our Demo
            </Link>
          </div>
        </div>
      </section>

      {/* AI Service Cards with Intro Block */}
      <section className="bg-green-900 py-20 px-6 text-white">
        <div className="max-w-screen-xl mx-auto space-y-10">
          <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition text-center text-green-900">
            <h3 className="text-2xl md:text-3xl font-extrabold mb-4">
              Custom AI Implementation, Tailored to You
            </h3>
            <p className="text-md max-w-3xl mx-auto text-gray-800">
              We specialize in white-glove AI communication and automation services that adapt to your unique business needs.
              Whether you're looking to overhaul your entire tech stack or implement one tool that finally works,
              we’ll plan it, customize it, build it, and manage it — end to end. You don’t lift a finger.
              Our goal is simple: remove complexity, streamline operations, and help you scale smarter.
            </p>
          </div>

          <div className="grid gap-10 md:grid-cols-3 text-left">
            {[{
              title: "AI Calling & Text Bots",
              desc: "24/7 voice and SMS systems that handle quotes, bookings, and FAQs — hands-free."
            }, {
              title: "CRM & Calendar Automation",
              desc: "Instantly sync leads, jobs, and schedules. Never forget a follow-up again."
            }, {
              title: "AI-Generated Proposals",
              desc: "Close more jobs with intelligent proposal templates powered by AI."
            }, {
              title: "Meta & Google Ad Management",
              desc: "We drive traffic with smart campaigns — or plug into your existing pipeline."
            }, {
              title: "Intelligent Lead Routing",
              desc: "Route new jobs to the right reps or techs based on zip code, priority, or availability."
            }, {
              title: "Automated Email & Follow-ups",
              desc: "Send timely emails and reminders using AI to boost conversions and reduce no-shows."
            }].map(({ title, desc }, i) => (
              <div key={i} className="bg-white p-6 rounded-lg shadow hover:shadow-md transition text-green-900">
                <h3 className="text-xl font-bold mb-2">{title}</h3>
                <p className="text-sm text-gray-700">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Value Proposition Section */}
      <section className="bg-[#f3f3f3] py-16 px-6 text-center">
        <div className="max-w-4xl mx-auto space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold">
            Whether it’s managing one tool or your entire tech stack, we are here to serve you:
          </h2>
          <p className="text-lg text-gray-800">
            Get time back. Reduce costs. Scale smarter — without the headache.
          </p>
          <p className="text-lg text-gray-800">
            Focus on what matters: the craft you’ve mastered and the company you lead.
          </p>
          <p className="text-lg text-gray-800">
            You maintain full control — we just handle the heavy lifting.
          </p>
          <Link
            href="/what-we-do"
            className="inline-block bg-green-900 text-white text-lg font-semibold px-8 py-3 rounded-full shadow hover:bg-green-800 transition mt-6"
          >
            See What We Do
          </Link>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="bg-gray-200 py-20 px-6 text-left">
        <div className="max-w-4xl mx-auto space-y-10">
          <h2 className="text-3xl md:text-4xl font-bold">
            <span className="text-gray-800">Adapt22 Mission:</span>{" "}
            <span className="text-yellow-500 font-semibold">Serving Those Who Serve Us.</span>
          </h2>
          <div className="border-l-4 border-yellow-500 pl-6 space-y-6">
            {[
              "Your work is essential to keep our world running and you deserve the same tools that billion-dollar companies have.",
              "Our focus is to understand the problems that cause wasted time and money, and then implement tailored solutions that actually work for you.",
              "We exist to remove the burden that AI and software can be by creating a tech environment tailored to your team, goals, and needs.",
              "Let us handle everything from implementing AI tools, customizing workflows, and automating busy work.",
              "You name your problems and we give solutions."
            ].map((text, i) => (
              <p key={i} className="text-md text-gray-800 flex items-start gap-2">
                <span className="text-yellow-600 text-lg leading-6">↠</span>
                {text}
              </p>
            ))}
          </div>
          <div className="text-center">
            <Link
              href="/who-we-are"
              className="inline-block mt-8 bg-green-900 text-white px-8 py-3 rounded-full text-lg font-medium hover:bg-green-800 transition"
            >
              Learn More About Adapt22
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}