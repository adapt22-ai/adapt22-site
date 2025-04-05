"use client";

import Image from "next/image";
import Link from "next/link";
import { FaCheckCircle } from "react-icons/fa";

export default function WhatWeDoPage() {
  return (
    <div className="min-h-screen px-6 py-20 max-w-6xl mx-auto text-white space-y-16">
      <section className="text-center">
        <h1 className="text-5xl font-bold text-cyan-400 mb-4">What We Do</h1>
        <p className="text-lg text-gray-300 max-w-3xl mx-auto">
          Adapt22 is a white-glove concierge service built to manage, implement, and scale your tech stack. Whether it’s one tool or your entire system, we become your AI and automation partner. Our job is to deeply understand your workflow, pain points, and goals — and to deliver scalable, automated, and intelligently integrated systems that work.
        </p>
      </section>

      <section className="grid md:grid-cols-2 gap-12">
        <div className="bg-white/5 p-6 rounded-lg border border-white/10 shadow-lg">
          <h2 className="text-2xl font-bold text-cyan-400 mb-4">Key Services</h2>
          <ul className="space-y-4 text-gray-300">
            <li className="flex items-start gap-3">
              <FaCheckCircle className="text-cyan-500 mt-1" />
              AI Calling & Text Bots – 24/7 quoting, booking, and client communication
            </li>
            <li className="flex items-start gap-3">
              <FaCheckCircle className="text-cyan-500 mt-1" />
              CRM + Calendar Automation – Sync leads, jobs, and follow-ups
            </li>
            <li className="flex items-start gap-3">
              <FaCheckCircle className="text-cyan-500 mt-1" />
              Intelligent Lead Routing – Assign jobs based on priority, zip code, or rep
            </li>
            <li className="flex items-start gap-3">
              <FaCheckCircle className="text-cyan-500 mt-1" />
              AI-Generated Proposals – Smart quoting to help you close more deals
            </li>
            <li className="flex items-start gap-3">
              <FaCheckCircle className="text-cyan-500 mt-1" />
              Automated Emails & Follow-Ups – Never forget to stay in touch
            </li>
            <li className="flex items-start gap-3">
              <FaCheckCircle className="text-cyan-500 mt-1" />
              Meta & Google Ads – Managed growth or plug into your existing pipeline
            </li>
          </ul>
        </div>

        <div className="bg-white/5 p-6 rounded-lg border border-white/10 shadow-lg">
          <h2 className="text-2xl font-bold text-cyan-400 mb-4">White-Glove, End-to-End Implementation</h2>
          <p className="text-gray-300 mb-4">
            We’re not a "set-it-and-forget-it" company. Our model is based on long-term partnership and active management.
          </p>
          <ul className="space-y-3 text-gray-300">
            <li className="flex items-start gap-3">
              <FaCheckCircle className="text-cyan-500 mt-1" />
              Custom workflow design based on your team’s actual day-to-day process
            </li>
            <li className="flex items-start gap-3">
              <FaCheckCircle className="text-cyan-500 mt-1" />
              Dedicated strategist who learns your company like it's their own
            </li>
            <li className="flex items-start gap-3">
              <FaCheckCircle className="text-cyan-500 mt-1" />
              No templates. No cookie-cutter tools. Every business is different — and so is every build.
            </li>
          </ul>
        </div>
      </section>

      <section className="bg-white/5 p-10 rounded-xl border border-white/10 shadow-lg text-center space-y-6">
        <h2 className="text-3xl font-bold text-cyan-400">Not Just Tech — A Tech Partner</h2>
        <p className="text-gray-300 max-w-3xl mx-auto">
          You already have a job to do — and it's not staying on top of every AI update, tool, or workflow optimization.
          Our job is to handle the headache of modern technology so you don’t have to.
        </p>
        <ul className="text-left text-gray-300 max-w-3xl mx-auto list-disc list-inside space-y-2">
          <li>We meet you where you're at and tailor tech to your team.</li>
          <li>We support you even after the system is live.</li>
          <li>You get access to our team of experts — without hiring a single person.</li>
        </ul>
        <div className="mt-6">
          <Link
            href="/book-a-call"
            className="inline-block bg-cyan-500 hover:bg-cyan-600 text-white text-lg font-semibold px-8 py-4 rounded-md transition"
          >
            Book a Free Discovery Call
          </Link>
        </div>
      </section>
    </div>
  );
}
