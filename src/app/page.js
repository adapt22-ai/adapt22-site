"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function LandingPage() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center px-4 text-center">
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold max-w-4xl leading-tight">
        AI Automation for the Businesses That Keep the World Running
      </h1>
      <p className="mt-6 text-lg sm:text-xl text-gray-300 max-w-2xl">
        Adapt22 is a white-glove concierge service designed to manage, implement, and scale AI + automation systems for SMBs in the trades, retail, field services, and construction.
      </p>

      <p className="mt-4 text-md sm:text-lg text-gray-400 max-w-3xl">
        Our primary focus is to deeply understand your problems and frustrations, and from there, we implement solutions that are scalable, 100% managed by our team, and actually work for you.
      </p>

      <p className="mt-4 text-md sm:text-lg text-gray-400 max-w-3xl">
        We exist to remove the burden that AI and software can be. Let us create a tech environment tailored to your team, goals, and needs. We handle everything from implementing AI tools, customizing workflows, and automating busy work. You name your problems and we guarantee solutions.
      </p>

      <div className="mt-6 text-left max-w-3xl mx-auto text-gray-300 space-y-2">
        <p className="font-medium">Whether it’s managing one tool or your entire tech stack, we are here to serve you:</p>
        <ul className="list-disc list-inside space-y-1">
          <li>Get time back. Reduce costs. Scale smarter — without the headache.</li>
          <li>Focus on what matters: the craft you’ve mastered and the company you lead.</li>
          <li>You maintain full control — we just handle the heavy lifting.</li>
        </ul>
      </div>

      <div className="mt-10 flex flex-col sm:flex-row items-center gap-4">
        <Link href="/book-a-call">
          <button className="inline-flex items-center bg-cyan-500 hover:bg-cyan-600 text-white text-lg font-semibold px-8 py-4 rounded-md transition">
            Book a Call
            <ArrowRight className="ml-2 h-5 w-5" />
          </button>
        </Link>
        <Link href="/what-we-do">
          <button className="text-white hover:text-cyan-400 text-lg transition">
            See What We Do
          </button>
        </Link>
      </div>

      <div className="mt-20 max-w-5xl w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
          <div>
            <h3 className="text-xl font-semibold mb-2">AI Calling & Text Bots</h3>
            <p className="text-gray-400">24/7 voice and SMS systems that handle quotes, bookings, and FAQs — hands-free.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">CRM & Calendar Automation</h3>
            <p className="text-gray-400">Instantly sync leads, jobs, and schedules. Never forget a follow-up again.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">AI-Generated Proposals</h3>
            <p className="text-gray-400">Close more jobs with intelligent proposal templates powered by AI.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Meta & Google Ad Management</h3>
            <p className="text-gray-400">We drive traffic with smart campaigns — or plug into your existing pipeline.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Intelligent Lead Routing</h3>
            <p className="text-gray-400">Route new jobs to the right reps or techs based on zip code, priority, or availability.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Automated Email & Follow-ups</h3>
            <p className="text-gray-400">Send timely emails and reminders using AI to boost conversions and reduce no-shows.</p>
          </div>
        </div>

        <div className="mt-20 bg-white/5 p-8 rounded-xl border border-white/10 shadow-md text-left">
          <h2 className="text-3xl font-bold mb-4 text-center">
            Adapt22 Mission:
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto text-center">
            Serving Those Who Serve Us.
            <br /><br />
            Your work is essential to keep our world running and you deserve the same tools that billion-dollar companies have.
          </p>

          <div className="mt-6 text-center">
            <Link href="/who-we-are">
              <button className="text-white hover:text-cyan-400 transition text-lg">
                Learn More About Adapt22
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
