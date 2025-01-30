"use client";

import { useState } from "react";
import { toast } from "react-hot-toast";
import { useForm } from "@formspree/react";

export default function ContactPage() {
  const [state, handleSubmit] = useForm("f/mjkgrkgr"); // ✅ Your actual Formspree ID

  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-white px-4">
      <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
      <p className="text-lg text-gray-300 mb-8 text-center">
        Fill out the form below, and we'll get back to you as soon as possible.
      </p>

      {/* Contact Form */}
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-lg bg-gray-800 p-6 rounded-lg shadow-lg"
      >
        <div className="mb-4">
          <label className="block text-sm font-medium">Name</label>
          <input
            type="text"
            name="name"
            autoComplete="name" // ✅ Enables autofill
            required
            className="w-full p-2 mt-1 rounded-md bg-gray-700 text-white border border-gray-600 focus:border-cyan-400 focus:outline-none"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium">Company Name</label>
          <input
            type="text"
            name="company"
            autoComplete="organization" // ✅ Autofill for company name
            className="w-full p-2 mt-1 rounded-md bg-gray-700 text-white border border-gray-600 focus:border-cyan-400 focus:outline-none"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium">Email</label>
          <input
            type="email"
            name="email"
            autoComplete="email" // ✅ Autofill for email
            required
            className="w-full p-2 mt-1 rounded-md bg-gray-700 text-white border border-gray-600 focus:border-cyan-400 focus:outline-none"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium">Phone Number</label>
          <input
            type="tel"
            name="phone"
            autoComplete="tel" // ✅ Autofill for phone number
            className="w-full p-2 mt-1 rounded-md bg-gray-700 text-white border border-gray-600 focus:border-cyan-400 focus:outline-none"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium">Message</label>
          <textarea
            name="message"
            rows="4"
            autoComplete="off" // ❌ No autofill for free-text message
            required
            className="w-full p-2 mt-1 rounded-md bg-gray-700 text-white border border-gray-600 focus:border-cyan-400 focus:outline-none"
          ></textarea>
        </div>

        <button
          type="submit"
          disabled={state.submitting}
          className="w-full bg-cyan-500 hover:bg-cyan-600 text-white p-2 rounded-md transition-colors duration-200"
        >
          {state.submitting ? "Sending..." : "Send Message"}
        </button>
      </form>

      {state.succeeded && (
        <p className="mt-4 text-cyan-400">Your message has been sent!</p>
      )}

      {/* Contact Email Below the Form */}
      <div className="mt-8 text-center">
        <p className="text-lg text-gray-300">Prefer direct email?</p>
        <p
          className="text-xl font-semibold text-cyan-400 cursor-pointer"
          onClick={() => {
            navigator.clipboard.writeText("jackson@adapt22.ai");
            toast.success("Email copied to clipboard!");
          }}
        >
          jackson@adapt22.ai
        </p>
      </div>
    </div>
  );
}
