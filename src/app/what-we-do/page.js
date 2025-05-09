// src/app/what-we-do/page.js — Adapt22 "What We Do" Page Updated with Baku Enhancements

import Link from "next/link";

export default function WhatWeDoPage() {
  return (
    <div className="bg-[#f3f5f3] text-gray-900">
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto space-y-16">

          {/* Page Intro + CTA */}
          <div className="space-y-6 text-center max-w-3xl mx-auto">
            <h1 className="text-5xl font-extrabold text-primary">What We Do</h1>
            <div className="h-1 w-[30ch] bg-accent rounded-full mx-auto mt-2" />
            <p className="text-lg leading-relaxed text-gray-700">
              Adapt22 is a white-glove service built to manage, implement, and scale your tech stack. Whether it’s one tool or your entire system, we become your partner for all things AI-powered automation and communication. Our job is to deeply understand your workflow, pain points, and goals — and to deliver scalable, automated, and intelligently integrated systems that work.
              <br /><br />
              From leveraging AI-powered bots and intelligent lead routing to building fully custom internal tools and automation workflows, we go beyond basic setups to provide enterprise-grade power for small and medium businesses. Our solutions increase efficiency, eliminate bottlenecks, and reduce manual busywork.
            </p>
            <Link
              href="/book-a-call"
              className="inline-block mt-4 px-6 py-3 text-white bg-primary font-semibold rounded hover:bg-green-800 transition"
            >
              Book a Free Discovery Call
            </Link>
          </div>

          {/* Dual Box — White Glove vs. Tech Partner */}
          <div className="grid md:grid-cols-2 gap-10">
            <div className="bg-white p-6 rounded-lg shadow border-t-4 border-primary">
              <h3 className="text-xl font-bold mb-4 text-primary">White-Glove, End-to-End Implementation</h3>
              <ul className="space-y-2 list-disc list-inside text-gray-700">
                <li>Custom workflow design based on your team’s actual day-to-day process</li>
                <li>Dedicated strategist who learns your company like it's their own</li>
                <li>No templates. No cookie-cutter tools. Every build is unique</li>
                <li>Ongoing improvements and support post-launch</li>
                <li>We set it up, test it, and train your team ourselves</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow border-t-4 border-primary">
              <h3 className="text-xl font-bold mb-4 text-primary">Not Just Tech — A Tech Partner</h3>
              <ul className="space-y-2 list-disc list-inside text-gray-700">
                <li>We meet you where you're at and tailor tech to your team</li>
                <li>We support you even after the system is live</li>
                <li>You get access to our team of experts — without hiring in-house</li>
                <li>We handle the modern AI headache so you don’t have to</li>
                <li>We build automation tools that integrate with your CRM, calendar, job boards, and internal systems</li>
              </ul>
            </div>
          </div>

          {/* Key Services */}
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-center text-primary">Key Services</h2>
            <p className="text-center text-gray-600 text-md max-w-xl mx-auto">
              These are just a few examples of the solutions we <span className="text-primary font-semibold">customize, implement, and maintain</span> for you. Every business is different — and so is every build.
            </p>
            <div className="grid md:grid-cols-2 gap-8 text-lg">
              {[ // Each description enhanced to reflect VEX/ZARA/DRIFT capabilities
                { title: "AI Calling & Text Bots", desc: "24/7 quoting, booking, and client communication — our smart assistant responds in seconds and books jobs while you sleep." },
                { title: "CRM + Calendar Automation", desc: "Sync leads, jobs, and follow-ups across platforms — custom-built for your ops flow." },
                { title: "Intelligent Lead Routing", desc: "Assign jobs based on priority, zip code, or rep — no lead left behind." },
                { title: "AI-Generated Proposals", desc: "Smart quoting to help you close more deals — crafted from customer input automatically." },
                { title: "Automated Emails & Follow-Ups", desc: "Never forget to stay in touch — revive old leads and re-engage past customers automatically." },
                { title: "Meta & Google Ads", desc: "Managed growth or plug into your existing pipeline — no fluff, just ROI." },
                { title: "Internal Knowledge Bots", desc: "Train AI on your business for fast internal answers — help your team self-serve instantly." },
                { title: "AI-Powered Onboarding", desc: "Custom workflows for new hire success — reduce friction and ramp faster." },
                { title: "Workflow Tracking & Automation", desc: "Monitor performance and spot inefficiencies — your systems should work as hard as your team does." },
                { title: "Custom Internal Tools", desc: "Fully bespoke software designed to match your exact workflow — not another SaaS shortcut." },
              ].map((item, i) => (
                <div key={i} className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-primary hover:shadow-xl transition">
                  <p className="font-bold text-primary mb-1">{item.title}</p>
                  <p className="text-gray-700 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Mission-style Wrap-up: You Deserve Better */}
          <div className="mt-24 bg-gold bg-opacity-10 py-16 px-6 rounded-lg shadow-md">
            <div className="max-w-4xl mx-auto space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold text-primary">You Deserve Better</h2>
              </div>
              <div className="border-l-4 border-accent pl-6 space-y-4">
                {[
                  "Your work is essential to keep our world running and you deserve the same tools that billion-dollar companies have.",
                  "Our focus is to understand the problems that cause wasted time and money, and then implement tailored solutions that actually work for you.",
                  "We exist to remove the burden that AI and software can be by creating a tech environment tailored to your team, goals, and needs.",
                  "Let us handle everything from implementing AI tools, customizing workflows, and automating busy work.",
                  "You name your problems and we give solutions — across trades, construction, retail, medical, and more."
                ].map((text, index) => (
                  <p key={index} className="text-md text-gray-800 flex items-start gap-2">
                    <span className="text-gold text-lg leading-6">↠</span>
                    {text}
                  </p>
                ))}
              </div>
              <div className="pt-6">
                <Link
                  href="/book-a-call"
                  className="inline-block bg-green-900 text-white px-8 py-3 rounded-full text-lg font-medium hover:bg-green-800 transition"
                >
                  Book a Free Discovery Call
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}