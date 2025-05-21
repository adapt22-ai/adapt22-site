"use client";

import Link from "next/link";

export default function WhatWeDoPage() {
  return (
    <div className="bg-background text-textPrimary">
      {/* Hero Section with Video */}
      <section className="relative w-full min-h-[90vh] overflow-hidden flex items-center justify-center text-textPrimary px-4">
        <video
  ref={(video) => {
    if (video) video.playbackRate = 1.5;
  }}
  autoPlay
  muted
  loop
  playsInline
  className="absolute inset-0 w-full h-full object-cover opacity-60 z-0"
>
  <source src="/2-wwd.mp4" type="video/mp4" />
</video>

        <div className="relative z-10 max-w-6xl mx-auto space-y-14 px-4 sm:px-6 text-center">
          <div className="space-y-6 max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-accentIndigo drop-shadow-md">
              What We Do
            </h1>
            <div className="h-1 w-[16ch] sm:w-[30ch] bg-primaryDark rounded-full mx-auto mt-2" />
            <p className="text-lg sm:text-xl md:text-2xl leading-relaxed textMuted font-medium drop-shadow-md px-2 sm:px-0">
              Adapt22 is a white-glove service built to manage, implement, and scale your tech stack. Whether it’s one tool or your entire system, we become your partner for all things AI-powered automation and communication. Our job is to deeply understand your workflow, pain points, and goals — and to deliver scalable, automated, and intelligently integrated systems that work.
            </p>
            <Link
              href="/book-a-call"
              className="inline-block mt-4 px-6 py-3 text-white bg-primaryDark font-semibold rounded hover:bg-[#013c35] transition"
            >
              Book a Free Discovery Call
            </Link>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-20 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto space-y-20">

          {/* Dual Box — White Glove vs. Tech Partner */}
          <div className="grid md:grid-cols-2 gap-10">
            {[
              {
                title: "White-Glove, End-to-End Implementation",
                points: [
                  "Custom workflow design based on your team’s actual day-to-day process",
                  "Dedicated strategist who learns your company like it's their own",
                  "No templates. No cookie-cutter tools. Every build is unique",
                  "Ongoing improvements and support post-launch",
                  "We set it up, test it, and train your team ourselves"
                ]
              },
              {
                title: "Not Just Tech — A Tech Partner",
                points: [
                  "We meet you where you're at and tailor tech to your team",
                  "We support you even after the system is live",
                  "You get access to our team of experts — without hiring in-house",
                  "We handle the modern AI headache so you don’t have to",
                  "We build automation tools that integrate with your CRM, calendar, job boards, and internal systems"
                ]
              }
            ].map((section, i) => (
              <div key={i} className="bg-surface p-6 rounded-lg shadow border-t-4 border-primaryDark">
                <h3 className="text-xl font-bold mb-4 text-white">{section.title}</h3>
                <ul className="space-y-2 list-disc list-inside textMuted leading-relaxed text-sm sm:text-base">
                  {section.points.map((point, j) => (
                    <li key={j}>{point}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Key Services */}
          <div className="space-y-10">
            <h2 className="text-4xl font-bold text-center text-accentIndigo">Key Services</h2>
            <p className="text-center textMuted text-md max-w-xl mx-auto">
              These are just a few examples of the solutions we <span className="text-accentIndigo font-bold">customize, implement, and maintain</span> for you. Every business is different — and so is every build.
            </p>

            <div className="grid md:grid-cols-2 gap-8 text-lg">
              {[
                {
                  title: "AI Calling & Text Bots",
                  bullets: [
                    "Handles inbound and outbound calls & texts — 24/7.",
                    "Sounds human, books jobs, follows up, reschedules, etc.",
                    "Custom-trained on your tone, workflows, and offerings."
                  ]
                },
                {
                  title: "CRM + Calendar Automation",
                  bullets: [
                    "Auto-sync leads, jobs, and follow-ups — no more double entry.",
                    "Send reminders, status updates, and confirmations automatically.",
                    "Custom logic for lead scoring, tagging, and workflow progression."
                  ]
                },
                {
                  title: "AI-Generated Proposals",
                  bullets: [
                    "Quotes built instantly from customer inputs or chat data.",
                    "Branded, editable templates with AI-written summaries.",
                    "Reduce time-to-quote and close more jobs faster."
                  ]
                },
                {
                  title: "Automated Emails & Follow-Ups",
                  bullets: [
                    "Smart drip sequences for leads, no-shows, and upsells.",
                    "Behavior-based reactivation: emails sent when people ghost.",
                    "Write, send, and track — hands-free."
                  ]
                },
                {
                  title: "Meta & Google Ads Integration",
                  bullets: [
                    "Integrate leads directly into your AI flows (no delays).",
                    "Auto-respond with personalized text/call follow-ups.",
                    "Plug into your pipeline or let us manage the ad flow."
                  ]
                },
                {
                  title: "Internal Knowledge Bots",
                  bullets: [
                    "Trained on your SOPs, docs, and policies.",
                    "Answer team questions instantly — no more Slack pileups.",
                    "Improve onboarding and reduce manager bottlenecks."
                  ]
                },
                {
                  title: "Custom AI Agents & Workflows",
                  bullets: [
                    "Multi-step agents built to replace admin work and manual ops.",
                    "End-to-end task flows — from lead to invoice — hands-free.",
                    "Designed around your unique needs, not SaaS templates."
                  ]
                },
                {
                  title: "AI-Powered Onboarding Systems",
                  bullets: [
                    "New hire workflows, training bots, and auto-reminders.",
                    "Custom checklists, role-based logic, and status tracking.",
                    "Reduces ramp-up time and ensures nothing gets skipped."
                  ]
                },
                {
                  title: "Workflow Tracking & Automation",
                  bullets: [
                    "Monitor bottlenecks, flag overdue tasks, and auto-assign work.",
                    "Custom dashboards tied to your internal logic and KPIs.",
                    "Automate status updates between departments or clients."
                  ]
                },
                {
                  title: "Fully Custom Internal Tools",
                  bullets: [
                    "Bespoke software tailored to your exact operations.",
                    "Skip the off-the-shelf bloat — we build only what you need.",
                    "Scalable, maintainable, and owned by you."
                  ]
                }
              ].map(({ title, bullets }, i) => (
                <div key={i} className="bg-surface p-6 rounded-xl shadow-lg border-l-4 border-primaryDark hover:shadow-xl transition">
                  <p className="font-bold text-white mb-2">{title}</p>
                  <ul className="list-disc list-inside space-y-2 text-sm text-textMuted leading-relaxed">
                    {bullets.map((b, j) => (
                      <li key={j}>{b}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Mission-style Wrap-up: You Deserve Better */}
          <div className="mt-24 bg-primaryDark bg-opacity-10 py-16 px-6 rounded-lg shadow-md">
            <div className="max-w-4xl mx-auto space-y-8">
              <h2 className="text-3xl font-bold text-primaryLight">You Deserve Better</h2>
              <div className="border-l-4 border-primaryLight pl-6 space-y-4">
                {[
                  "Your work is essential to keep our world running and you deserve the same tools that billion-dollar companies have.",
                  "Our focus is to understand the problems that cause wasted time and money, and then implement tailored solutions that actually work for you.",
                  "We exist to remove the burden that AI and software can be by creating a tech environment tailored to your team, goals, and needs.",
                  "Let us handle everything from implementing AI tools, customizing workflows, and automating busy work.",
                  "You name your problems and we give solutions — across trades, construction, retail, medical, and more."
                ].map((text, index) => (
                  <p key={index} className="text-md text-textPrimary flex items-start gap-2">
                    <span className="text-primaryLight text-lg leading-6">↠</span>
                    {text}
                  </p>
                ))}
              </div>
              <div className="pt-6">
                <Link
                  href="/book-a-call"
                  className="inline-block bg-primaryLight text-black px-8 py-3 rounded-full text-lg font-medium hover:bg-[#013c35] transition"
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