// src/app/ContactClient.js — Restyled Contact Page with Long Gold Bar and Updated Text

"use client";

import { useState } from "react";

export default function ContactClient() {
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
        message: form.get("message"),
      }),
      headers: { "Content-Type": "application/json" },
    });

    setStatus(response.ok ? "success" : "error");
  }

  return (
    <div className="bg-[#f3f5f3] text-gray-900">
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto space-y-12">
          <div className="space-y-6">
            <div>
              <h1 className="text-5xl font-extrabold text-primary">Let’s Talk</h1>
              <div className="h-1 w-[14.5rem] bg-accent rounded-full mt-2" />
            </div>
            <p className="text-lg text-gray-700">
              Whether you have questions, want to explore a custom AI/automation setup, or just want to brainstorm — we’d love to hear from you.
            </p>
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
              <label className="block mb-1 font-semibold text-sm text-gray-800">Message</label>
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
              {status === "loading" ? "Sending..." : "Send Message"}
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
