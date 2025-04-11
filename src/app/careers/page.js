// src/app/careers/page.js — Restyled Careers Page Matching Global Layout

"use client";

import { useState } from "react";

export default function CareersPage() {
  const [status, setStatus] = useState("idle");

  async function handleSubmit(event) {
    event.preventDefault();
    setStatus("loading");

    const form = new FormData(event.target);
    const response = await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify({
        name: form.get("name"),
        email: form.get("email"),
        message: form.get("message") + "\n\n(Submitted via Careers Page)",
      }),
      headers: { "Content-Type": "application/json" },
    });

    setStatus(response.ok ? "success" : "error");
  }

  return (
    <div className="bg-[#f3f5f3] text-gray-900">
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto space-y-16">
          <div className="space-y-4">
            <h1 className="text-5xl font-extrabold text-primary">Careers at Adapt22</h1>
            <div className="h-1 w-[30rem] bg-accent rounded-full" />
            <p className="text-lg text-gray-700">
              We're on a mission to make AI + automation accessible to the businesses that keep our world running. If you're passionate about tech, entrepreneurship, and serving others — we’d love to hear from you.
            </p>
          </div>

          <div className="space-y-10">
            <div>
              <h2 className="text-2xl font-bold text-primary mb-3">Who We Hire</h2>
              <ul className="list-disc list-inside text-gray-800 space-y-1">
                <li>Creative problem-solvers with a bias toward action</li>
                <li>People who care deeply about client success and long-term impact</li>
                <li>Those who love learning, experimenting, and building</li>
                <li>Folks who can operate independently, but thrive in collaboration</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-primary mb-3">How We Work</h2>
              <ul className="list-disc list-inside text-gray-800 space-y-1">
                <li>Flexible, hybrid work culture with a strong team bond</li>
                <li>Optional 4-day work week — Fridays for rest, learning, focused work, or service</li>
                <li>We prioritize impact, not hours</li>
                <li>Quarterly meetups in new cities (when remote)</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-primary mb-3">Don’t see an open role?</h2>
              <p className="text-gray-800">
                That’s okay — we’re always looking for talented people who want to be part of something meaningful. Reach out and tell us how you could contribute.
              </p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 rounded-lg shadow-lg border border-gray-200">
            <div>
              <label className="block mb-1 font-semibold text-sm text-gray-800">Your Name</label>
              <input
                type="text"
                name="name"
                required
                className="w-full px-4 py-3 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
              />
            </div>
            <div>
              <label className="block mb-1 font-semibold text-sm text-gray-800">Email Address</label>
              <input
                type="email"
                name="email"
                required
                className="w-full px-4 py-3 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
              />
            </div>
            <div>
              <label className="block mb-1 font-semibold text-sm text-gray-800">Tell Us About Yourself</label>
              <textarea
                name="message"
                rows="5"
                required
                className="w-full px-4 py-3 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
              />
            </div>
            <button
              type="submit"
              disabled={status === "loading"}
              className="bg-primary hover:bg-green-800 text-white font-semibold px-6 py-3 rounded-md transition-all"
            >
              {status === "loading" ? "Sending..." : "Submit Application"}
            </button>
            {status === "success" && (
              <p className="text-green-600 mt-2">Thanks! We'll be in touch shortly.</p>
            )}
            {status === "error" && (
              <p className="text-red-500 mt-2">Something went wrong. Please try again.</p>
            )}
          </form>
        </div>
      </section>
    </div>
  );
}
