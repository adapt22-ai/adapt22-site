"use client";

import { useState } from "react";
import { toast } from "react-hot-toast";

export default function CareersPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    linkedin: "",
    resume: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          message: `CAREERS FORM SUBMISSION\n\n${formData.message}\n\nLinkedIn: ${formData.linkedin}\nResume: ${formData.resume}`,
        }),
      });

      if (response.ok) {
        toast.success("Application sent successfully!");
        setFormData({
          name: "",
          email: "",
          linkedin: "",
          resume: "",
          message: "",
        });
        setIsSuccess(true);
      } else {
        toast.error("Failed to send application. Try again.");
      }
    } catch (error) {
      toast.error("Something went wrong.");
    }

    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-white px-4 py-12">
      <h1 className="text-4xl font-bold mb-4">Careers at Adapt22</h1>
      <p className="text-lg max-w-2xl text-center text-gray-300 mb-8">
        We’re always looking for mission-driven people who want to help shape the future of AI for SMBs.
        Fill out the form below to introduce yourself.
      </p>

      <form onSubmit={handleSubmit} className="w-full max-w-xl bg-gray-800 p-6 rounded-lg shadow-lg">
        <div className="mb-4">
          <label className="block text-sm font-medium">Name</label>
          <input
            type="text"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full p-2 mt-1 rounded-md bg-gray-700 text-white border border-gray-600 focus:border-cyan-400 focus:outline-none"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium">Email</label>
          <input
            type="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 mt-1 rounded-md bg-gray-700 text-white border border-gray-600 focus:border-cyan-400 focus:outline-none"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium">LinkedIn (optional)</label>
          <input
            type="url"
            name="linkedin"
            value={formData.linkedin}
            onChange={handleChange}
            placeholder="https://linkedin.com/in/yourname"
            className="w-full p-2 mt-1 rounded-md bg-gray-700 text-white border border-gray-600 focus:border-cyan-400 focus:outline-none"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium">Resume Link (optional)</label>
          <input
            type="url"
            name="resume"
            value={formData.resume}
            onChange={handleChange}
            placeholder="Link to resume or portfolio"
            className="w-full p-2 mt-1 rounded-md bg-gray-700 text-white border border-gray-600 focus:border-cyan-400 focus:outline-none"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium">Message</label>
          <textarea
            name="message"
            rows="4"
            required
            value={formData.message}
            onChange={handleChange}
            className="w-full p-2 mt-1 rounded-md bg-gray-700 text-white border border-gray-600 focus:border-cyan-400 focus:outline-none"
          ></textarea>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-cyan-500 hover:bg-cyan-600 text-white p-2 rounded-md transition-colors duration-200"
        >
          {isSubmitting ? "Sending..." : "Send Application"}
        </button>
      </form>

      {isSuccess && <p className="mt-4 text-cyan-400">Thanks! We'll review your info and be in touch.</p>}
    </div>
  );
}