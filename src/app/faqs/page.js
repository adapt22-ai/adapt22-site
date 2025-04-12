"use client";

import { useState } from "react";

export default function FAQPage() {
  const faqs = [
    {
      q: "What industries do you work with?",
      a: "We serve small and medium-sized businesses in the trades, retail, field services, and construction. If you’re not sure whether you fall into one of those categories, just reach out — we’re happy to assess if there’s a fit."
    },
    {
      q: "Do I need to know anything about AI or automation to work with you?",
      a: "Not at all. We exist to handle all of that for you. Think of us as your personal AI/tech concierge — we’ll assess your business, understand your goals, and take care of implementation, training, and management."
    },
    {
      q: "What kinds of problems can Adapt22 solve?",
      a: "We solve problems like poor lead follow-up, inconsistent quoting, missed appointments, marketing headaches, and clunky tech systems. Whether you need one specific automation or full-stack implementation, we’ve got it handled."
    },
    {
      q: "What tools or systems do you use?",
      a: "We leverage cutting-edge tools from OpenAI, Zapier, GoHighLevel, LangChain, Voiceflow, and more — depending on your unique needs. Everything is customized to your workflow."
    },
    {
      q: "What’s the onboarding process like?",
      a: "We’ll start with a free discovery call. From there, we’ll map out your workflow, identify problems, recommend solutions, and begin implementing. You’ll always know exactly what’s being done and why."
    },
    {
      q: "Is this a one-time service or an ongoing partnership?",
      a: "Both options are available — many clients start with a project and continue with us long-term for ongoing management, support, and system optimization. Think of us as your outsourced CTO."
    },
    {
      q: "Do you offer white-label or subcontractor work?",
      a: "Yes. If you’re a marketing agency or tech provider looking to expand into AI or automation, we offer partnership models and implementation support behind the scenes."
    },
    {
      q: "What’s the investment?",
      a: "Pricing depends on the size of your team, systems in place, and what needs to be built. We offer flexible options — from one-time builds to monthly retainers. We’re happy to walk through it on a call."
    }
  ];

  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="bg-[#f3f5f3] text-gray-900">
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Heading + Gold Bar */}
          <div className="space-y-4">
            <div className="inline-flex flex-col items-start">
              <h1 className="text-5xl font-extrabold text-primary">
                Frequently Asked Questions
              </h1>
              <div className="h-1 w-[103%] bg-accent rounded-full mt-2" />
            </div>
          </div>

          {/* FAQ List */}
          <div className="space-y-6">
            {faqs.map((item, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-md bg-white shadow-sm overflow-hidden"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full flex justify-between items-center px-6 py-4 text-left text-lg font-semibold text-primary hover:bg-gray-50 transition"
                >
                  {item.q}
                  <span className="text-accent text-2xl">{openIndex === index ? "−" : "+"}</span>
                </button>
                {openIndex === index && (
                  <div className="px-6 pb-4 text-gray-800 leading-relaxed">
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