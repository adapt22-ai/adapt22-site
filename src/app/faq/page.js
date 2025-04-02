"use client";

import { useState } from "react";

const faqs = [
  {
    question: "What exactly does Adapt22 do?",
    answer:
      "We implement AI, software, and automation tools for small to mid-sized businesses, especially in the trades, construction, and retail spaces. We simplify and scale your operations with tools like AI chatbots, scheduling assistants, CRM automation, and custom integrations tailored to your needs.",
  },
  {
    question: "Who is Adapt22 best suited for?",
    answer:
      "Our services are designed specifically for SMBs who want modern tools without the tech overwhelm — especially contractors, HVAC/plumbing/electrical companies, construction teams, retail shops, and field service businesses.",
  },
  {
    question: "Do I need to be tech-savvy to work with you?",
    answer:
      "Not at all. That’s what we’re here for. We build systems that are intuitive, easy to manage, and come with ongoing support. You’ll never feel like you’re flying solo.",
  },
  {
    question: "Is this just another software subscription?",
    answer:
      "Nope. We're not just handing you a tool and walking away. We actively implement, train, and support your team to make sure you're seeing ROI from day one.",
  },
  {
    question: "What’s the first step to getting started?",
    answer:
      "Simple — book a free discovery call. We'll learn about your business, identify where automation or AI can help, and map out the best path forward. No pressure, just conversation.",
  },
];

export default function FAQPage() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleIndex = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-background text-foreground px-4 py-12 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-6 text-center">Frequently Asked Questions</h1>

      {faqs.map((faq, index) => (
        <div key={index} className="border-b border-gray-700 py-4">
          <button
            onClick={() => toggleIndex(index)}
            className="w-full text-left text-xl font-semibold focus:outline-none text-cyan-400"
          >
            {faq.question}
          </button>
          {activeIndex === index && (
            <p className="mt-2 text-gray-300 text-md leading-relaxed">{faq.answer}</p>
          )}
        </div>
      ))}

      <div className="mt-10 text-center">
        <a
          href="/book-a-call"
          className="inline-block bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-3 rounded-md transition-colors duration-200"
        >
          Still have questions? Book a call
        </a>
      </div>
    </div>
  );
}
