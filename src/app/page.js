"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function HomePage() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center px-4 text-center">
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold max-w-4xl leading-tight">
        AI Automation for the Businesses That Keep the World Running
      </h1>
      <p className="mt-6 text-lg sm:text-xl text-gray-300 max-w-2xl">
        Adapt22 helps trades, field services, construction, and retail companies implement powerful AI tools without the headache.
        Get time back. Reduce costs. Scale smarter.
      </p>

      <div className="mt-8 flex flex-col sm:flex-row items-center gap-4">
        <Link
          href="/book-a-call"
          className="inline-flex items-center bg-cyan-500 hover:bg-cyan-600 text-white text-lg font-semibold px-8 py-4 rounded-md transition"
        >
          Book a Call
          <ArrowRight className="ml-2 h-5 w-5" />
        </Link>
        <Link
          href="/what-we-do"
          className="text-white hover:text-cyan-400 text-lg transition"
        >
          See What We Do
        </Link>
      </div>

      <div className="mt-16 max-w-5xl w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-left">
          <div>
            <h3 className="text-xl font-semibold mb-2">AI Calling & Text Bots</h3>
            <p className="text-gray-400">24/7 voice and SMS systems that handle quotes, bookings, and FAQs — hands-free.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">CRM & Calendar Automation</h3>
            <p className="text-gray-400">Instantly sync leads, jobs, and schedules. Never forget a follow-up again.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">AI-Generated Proposals & Quotes</h3>
            <p className="text-gray-400">Close more jobs with intelligent proposal templates powered by AI.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Meta & Google Ads (Optional)</h3>
            <p className="text-gray-400">We drive traffic with smart campaigns — or plug into your existing pipeline.</p>
          </div>
        </div>

        <div className="mt-20 bg-white/5 p-8 rounded-xl border border-white/10 shadow-md text-left">
          <h2 className="text-3xl font-bold mb-4 text-center">
            We’re on a mission to bring AI to the trades.
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto text-center">
            Electricians. Plumbers. Retailers. HVAC techs. Landscapers. Contractors.
            <br />
            These are the people keeping our world running — and they deserve the same tools that billion-dollar companies have.
          </p>

          <div className="mt-6 text-center">
            <Link
              href="/about"
              className="text-white hover:text-cyan-400 transition text-lg"
            >
              Learn More About Adapt22
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}