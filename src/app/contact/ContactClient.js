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
        company: form.get("company"),
        phone: form.get("phone"),
        message: form.get("message"),
      }),
      headers: { "Content-Type": "application/json" },
    });

    setStatus(response.ok ? "success" : "error");
  }

  return (
    <div className="bg-background text-textPrimary">
      <section className="py-20 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto space-y-12">
          {/* Heading + Bar */}
          <div className="text-center space-y-6">
            <h1 className="text-4xl sm:text-5xl font-extrabold text-accentIndigo">Let’s Talk</h1>
            <div className="h-1 w-full max-w-[300px] sm:max-w-[400px] md:max-w-[30ch] bg-primaryDark rounded-full mx-auto" />
            <p className="text-md sm:text-lg textMuted">
              Whether you have questions, want to explore a custom AI/automation setup, or just want to brainstorm — we’d love to hear from you.
            </p>
          </div>

          {/* Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="space-y-6 bg-surface p-6 sm:p-8 rounded-lg shadow-lg border border-border"
          >
            {[
              { label: "Your Name", name: "name", type: "text" },
              { label: "Email Address", name: "email", type: "email" },
              { label: "Company", name: "company", type: "text" },
              { label: "Phone", name: "phone", type: "tel" },
            ].map(({ label, name, type }) => (
              <div key={name}>
                <label className="block mb-1 font-semibold text-sm text-textPrimary">{label}</label>
                <input
                  type={type}
                  name={name}
                  required={name !== "company" && name !== "phone"}
                  className="w-full px-4 py-3 bg-[#262626] border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primaryLight"
                />
              </div>
            ))}

            <div>
              <label className="block mb-1 font-semibold text-sm text-textPrimary">Message</label>
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
              {status === "loading" ? "Sending..." : "Send Message"}
            </button>

            {status === "success" && (
              <p className="text-primaryLight mt-2">Thanks! We'll be in touch shortly.</p>
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