"use client";
import { useState } from "react";

export default function FAQPage() {
  const faqs = [
    {
      q: "What industries do you work with?",
      a: "We serve small and medium-sized businesses in the trades, retail, field services, and construction..."
    },
    {
      q: "Do I need to know anything about AI or automation to work with you?",
      a: "Not at all. We exist to handle all of that for you..."
    },
    {
      q: "What kinds of problems can Adapt22 solve?",
      a: "We solve problems like poor lead follow-up, inconsistent quoting..."
    },
    {
      q: "What tools or systems do you use?",
      a: "We leverage cutting-edge tools from OpenAI, Zapier, GoHighLevel..."
    },
    {
      q: "What’s the onboarding process like?",
      a: "We’ll start with a free discovery call..."
    },
    {
      q: "Is this a one-time service or an ongoing partnership?",
      a: "Both options are available — many clients start with a project and continue..."
    },
    {
      q: "Do you offer white-label or subcontractor work?",
      a: "Yes. If you’re a marketing agency or tech provider looking to expand..."
    },
    {
      q: "What’s the investment?",
      a: "Pricing depends on the size of your team, systems in place..."
    }
  ];

  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="bg-background text-textPrimary">
      <section className="py-20 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Heading + Gold Bar */}
          <div className="text-center space-y-4">
            <div className="inline-flex flex-col items-center">
              <h1 className="text-4xl sm:text-5xl font-extrabold text-accentIndigo">
                Frequently Asked Questions
              </h1>
              <div className="h-1 w-full max-w-[300px] sm:max-w-[400px] md:max-w-[103%] bg-primaryDark rounded-full mt-2" />
            </div>
          </div>

          {/* FAQ List */}
          <div className="space-y-6">
            {faqs.map((item, index) => (
              <div
                key={index}
                className="border border-border rounded-md bg-surface shadow-sm overflow-hidden"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full flex justify-between items-center px-6 py-4 text-left text-lg font-semibold text-primaryText hover:bg-surface transition"
                >
                  {item.q}
                  <span className="text-accentIndigo text-2xl">
                    {openIndex === index ? "−" : "+"}
                  </span>
                </button>
                {openIndex === index && (
                  <div className="px-6 pb-4 textMuted leading-relaxed">
                    {item.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}