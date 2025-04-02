"use client";

import { FaCheckCircle } from "react-icons/fa";

export default function WhatWeDoPage() {
  return (
    <div className="min-h-screen px-6 py-24 bg-background text-foreground">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl font-bold mb-6">What We Do</h1>
        <p className="text-lg text-gray-300 mb-10">
          Adapt22 helps service businesses modernize operations with automation, AI tools, and clear implementation.
        </p>
      </div>

      {/* Section: AI & Software Solutions */}
      <section className="max-w-5xl mx-auto mb-16">
        <h2 className="text-3xl font-semibold mb-4 text-cyan-400">AI & Software Solutions</h2>
        <ul className="space-y-3 text-gray-200">
          <li className="flex items-start gap-3">
            <FaCheckCircle className="text-cyan-500 mt-1" />
            <span>
              <strong>AI-Powered Communication:</strong> SMS, email, and phone automation using advanced LLMs to handle client touchpoints.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <FaCheckCircle className="text-cyan-500 mt-1" />
            <span>
              <strong>CRM & Workflow Integrations:</strong> Connect your existing systems with smart automations tailored to your team.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <FaCheckCircle className="text-cyan-500 mt-1" />
            <span>
              <strong>Lead Follow-Up Automation:</strong> Never let a lead fall through the cracks. Our AI bots follow up, nurture, and convert.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <FaCheckCircle className="text-cyan-500 mt-1" />
            <span>
              <strong>Smart Appointment Booking:</strong> Let AI schedule appointments, reduce no-shows, and sync with your calendar automatically.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <FaCheckCircle className="text-cyan-500 mt-1" />
            <span>
              <strong>AI-Powered Job Estimators:</strong> Generate estimates or quotes based on inputs, local rates, or historical data.
            </span>
          </li>
        </ul>
      </section>

      {/* Section: Marketing & Growth Services */}
      <section className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-semibold mb-4 text-cyan-400">Marketing & Growth Services</h2>
        <ul className="space-y-3 text-gray-200">
          <li className="flex items-start gap-3">
            <FaCheckCircle className="text-cyan-500 mt-1" />
            <span>
              <strong>Funnel Creation:</strong> Full lead-to-close marketing funnels tailored to your service area and niche.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <FaCheckCircle className="text-cyan-500 mt-1" />
            <span>
              <strong>Meta & Google Ads:</strong> AI-optimized ad campaigns to generate predictable local leads.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <FaCheckCircle className="text-cyan-500 mt-1" />
            <span>
              <strong>Reputation Management:</strong> Automatically collect, display, and respond to customer reviews.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <FaCheckCircle className="text-cyan-500 mt-1" />
            <span>
              <strong>Analytics Dashboards:</strong> Real-time visibility into your marketing ROI, bookings, and revenue flow.
            </span>
          </li>
        </ul>
      </section>

      {/* CTA */}
      <div className="text-center mt-16">
        <a
          href="/book-a-call"
          className="inline-block bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-3 rounded-md text-lg font-semibold transition-colors duration-200"
        >
          Book a Call Now
        </a>
      </div>
    </div>
  );
}
