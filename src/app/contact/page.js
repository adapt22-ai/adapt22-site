"use client";

import { useState } from "react";
import { toast } from "react-hot-toast";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
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
      const response = await fetch("https://formspree.io/f/mjkgrkgr", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsSuccess(true);
        toast.success("Message sent successfully!");
        setFormData({ name: "", company: "", email: "", phone: "", message: "" });
      } else {
        toast.error("Failed to send message. Try again later.");
      }
    } catch (error) {
      toast.error("Error sending message.");
    }

    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-white px-4">
      <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
      <p className="text-lg text-gray-300 mb-8 text-center">
        Fill out the form below, and we'll get back to you as soon as possible.
      </p>

      <form
        onSubmit={handleSubmit}
        className="w-full max-w-lg bg-gray-800 p-6 rounded-lg shadow-lg"
      >
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
          <label className="block text-sm font-medium">Company Name</label>
          <input
            type="text"
            name="company"
            value={formData.company}
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
          <label className="block text-sm font-medium">Phone Number</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
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
          {isSubmitting ? "Sending..." : "Send Message"}
        </button>
      </form>

      {isSuccess && (
        <p className="mt-4 text-cyan-400">Your message has been sent!</p>
      )}
    </div>
  );
}
