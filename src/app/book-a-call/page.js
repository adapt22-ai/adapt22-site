// src/app/book-a-call/page.js — Restyled Book a Call Page

"use client";

export default function BookACallPage() {
  return (
    <div className="bg-[#f3f5f3] text-gray-900">
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto space-y-10 text-center">
          <div className="space-y-4">
            <h1 className="text-5xl font-extrabold text-primary">Book a Call</h1>
            <div className="h-1 w-[20rem] bg-accent rounded-full mx-auto" />
            <p className="text-lg text-gray-700">
              Schedule a free discovery call with Jackson to walk through your current setup, your biggest pain points, and see if Adapt22 can help. No pressure. No fluff. Just straight answers and a real conversation.
            </p>
          </div>

          <div className="bg-white p-4 sm:p-6 rounded-xl shadow-lg border border-gray-200">
            <iframe
              src="https://calendly.com/jackson-adapt22/discoverycall"
              width="100%"
              height="700"
              frameBorder="0"
              scrolling="no"
              className="w-full rounded-xl"
              title="Calendly Booking Widget"
            ></iframe>
          </div>

        
        </div>
      </section>
    </div>
  );
}