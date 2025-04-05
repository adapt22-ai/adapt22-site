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
    <section className="min-h-screen px-6 py-24 max-w-4xl mx-auto text-white">
      <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-cyan-400">Let’s Talk</h1>
      <p className="text-gray-300 text-lg mb-10">
        Whether you have questions, want to explore a custom AI/automation setup, or just want to brainstorm — we’d love to hear from you.
        <br />
        Fill out the form below or email us directly at{" "}
        <a href="mailto:jackson@adapt22.ai" className="text-cyan-400 hover:underline">
          jackson@adapt22.ai
        </a>
        .
      </p>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block mb-1 font-semibold">Your Name</label>
          <input
            type="text"
            name="name"
            required
            className="w-full px-4 py-2 bg-white/10 border border-white/10 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-400"
          />
        </div>
        <div>
          <label className="block mb-1 font-semibold">Email Address</label>
          <input
            type="email"
            name="email"
            required
            className="w-full px-4 py-2 bg-white/10 border border-white/10 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-400"
          />
        </div>
        <div>
          <label className="block mb-1 font-semibold">Message</label>
          <textarea
            name="message"
            rows="5"
            required
            className="w-full px-4 py-2 bg-white/10 border border-white/10 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-400"
          />
        </div>
        <button
          type="submit"
          disabled={status === "loading"}
          className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold px-6 py-3 rounded-md transition-all"
        >
          {status === "loading" ? "Sending..." : "Send Message"}
        </button>
        {status === "success" && (
          <p className="text-green-400 mt-2">Thanks! We'll be in touch shortly.</p>
        )}
        {status === "error" && (
          <p className="text-red-400 mt-2">Something went wrong. Please try again.</p>
        )}
      </form>
    </section>
  );
}
