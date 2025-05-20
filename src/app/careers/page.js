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
        phone: form.get("phone"),
        message: form.get("message") + "\n\n(Submitted via Careers Page)",
      }),
      headers: { "Content-Type": "application/json" },
    });

    setStatus(response.ok ? "success" : "error");
  }

  return (
    <div className="bg-background text-textPrimary">
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto space-y-16">
          {/* Heading + Bar */}
          <div className="space-y-4">
            <div className="inline-flex flex-col items-start">
              <h1 className="text-5xl font-extrabold text-accentIndigo">Careers at Adapt22</h1>
              <div className="h-1 w-[103%] bg-primaryDark rounded-full mt-2" />
            </div>
            <p className="text-lg text-textPrimary">
              We're on a mission to make AI + automation accessible to the businesses that keep our world running...
            </p>
            <p className="text-md textMuted italic">
              Adapt22 is a Christian-led company built on Biblical values like service, persistence, and accountability.
            </p>
          </div>

          {/* Info Sections */}
          <div className="space-y-10">
            {[
              {
                title: "Who We Hire",
                items: [
                  "Creative problem-solvers with a bias toward action",
                  "People who care deeply about client success and long-term impact",
                  "Those who love learning, experimenting, and building",
                  "Folks who can operate independently, but thrive in collaboration",
                ],
              },
              {
                title: "How We Work",
                items: [
                  "100% remote — work from anywhere",
                  "Own your schedule. Hours don't matter - outcomes do.",
                  "We prioritize impact over hours and trust you to hit your goals",
                  "Quarterly team meetups",
                  "No wasted time: if it can be a Loom or Slack, make it one",
                  "Radical transparency and over-communication encouraged",
                ],
              },
              {
                title: "What We Value",
                items: ["Hard Work", "Service", "Resilience", "Persistence", "Accountability"],
              },
            ].map(({ title, items }, i) => (
              <div key={i}>
                <h2 className="text-2xl font-bold text-accentIndigo mb-3">{title}</h2>
                <ul className="list-disc list-inside text-textPrimary space-y-1">
                  {items.map((item, j) => <li key={j}>{item}</li>)}
                </ul>
              </div>
            ))}

            <div>
              <h2 className="text-2xl font-bold text-accentIndigo mb-3">Our Culture of Service</h2>
              <p className="text-textPrimary">
                We donate to causes you care about, sponsor community service...
              </p>
              <blockquote className="mt-4 italic textMuted text-sm">
                “You, my brothers and sisters, were called to be free. But do not use your freedom to indulge the flesh; rather, serve one another humbly in love. — Galatians 5:13”
              </blockquote>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-accentIndigo mb-3">Don’t see an open role?</h2>
              <p className="text-textPrimary">
                That’s okay — we’re always looking for talented people...
              </p>
            </div>
          </div>

          {/* Application Form */}
          <form
            onSubmit={handleSubmit}
            className="space-y-6 bg-surface p-8 rounded-lg shadow-lg border border-border"
          >
            {[
              { label: "Your Name", name: "name", type: "text" },
              { label: "Email Address", name: "email", type: "email" },
              { label: "Phone", name: "phone", type: "tel" },
            ].map(({ label, name, type }) => (
              <div key={name}>
                <label className="block mb-1 font-semibold text-sm text-textPrimary">{label}</label>
                <input
                  type={type}
                  name={name}
                  required={name !== "phone"}
                  className="w-full px-4 py-3 bg-[#262626] border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primaryLight"
                />
              </div>
            ))}

            <div>
              <label className="block mb-1 font-semibold text-sm text-textPrimary">Tell Us About Yourself</label>
              <textarea
                name="message"
                rows="5"
                required
                className="w-full px-4 py-3 bg-[#262626] border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primaryLight"
              />
            </div>

            <button
              type="submit"
              disabled={status === "loading"}
              className="bg-primaryDark hover:bg-[#013c35] text-white font-semibold px-6 py-3 rounded-md transition-all"
            >
              {status === "loading" ? "Sending..." : "Submit Application"}
            </button>

            {status === "success" && (
              <p className="text-success mt-2">Thanks! We'll be in touch shortly.</p>
            )}
            {status === "error" && (
              <p className="text-error mt-2">Something went wrong. Please try again.</p>
            )}
          </form>
        </div>
      </section>
    </div>
  );
}