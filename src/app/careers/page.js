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
          {/* Heading + Gold Bar */}
          <div className="space-y-4">
            <div className="inline-flex flex-col items-start">
              <h1 className="text-5xl font-extrabold text-primary">Careers at Adapt22</h1>
              <div className="h-1 w-[103%] bg-accent rounded-full mt-2" />
            </div>
            <p className="text-lg text-gray-700">
              We're on a mission to make AI + automation accessible to the businesses that keep our world running. If you're passionate about tech, entrepreneurship, and serving others — we’d love to hear from you.
            </p>
            <p className="text-md text-gray-600 italic">
              Adapt22 is a Christian-led company built on Biblical values like service, persistence, and accountability. While not a ministry, we believe in purpose-driven work.
            </p>
          </div>

          {/* Info Sections */}
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
                <li>100% remote — work from anywhere</li>
                <li>Own your schedule. Hours don't matter - outcomes do.</li>
                <li>We prioritize impact over hours and trust you to hit your goals</li>
                <li>Quarterly team meetups</li>
                <li>No wasted time: if it can be a Loom or Slack, make it one</li>
                <li>Radical transparency and over-communication encouraged</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-primary mb-3">What We Value</h2>
              <ul className="list-disc list-inside text-gray-800 space-y-1">
                <li>Hard Work</li>
                <li>Service</li>
                <li>Resilience</li>
                <li>Persistence</li>
                <li>Accountability</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-primary mb-3">Our Culture of Service</h2>
              <p className="text-gray-800">
                We donate to causes you care about, sponsor community service, and even serve together when we meet in person. “Serving Those Who Serve Us” is more than a tagline — it’s how we operate internally and externally.
              </p>
              <blockquote className="mt-4 italic text-gray-600 text-sm">
                “You, my brothers and sisters, were called to be free. But do not use your freedom to indulge the flesh; rather, serve one another humbly in love.” — Galatians 5:13
              </blockquote>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-primary mb-3">Don’t see an open role?</h2>
              <p className="text-gray-800">
                That’s okay — we’re always looking for talented people who want to be part of something meaningful. Reach out and tell us how you could contribute.
              </p>
            </div>
          </div>

          {/* Application Form */}
          <form
            onSubmit={handleSubmit}
            className="space-y-6 bg-white p-8 rounded-lg shadow-lg border border-gray-200"
          >
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