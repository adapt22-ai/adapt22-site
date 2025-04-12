"use client";

export default function BookACallPage() {
  return (
    <div className="bg-[#f3f5f3] text-gray-900">
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto space-y-12 text-center">
          {/* Heading & Gold Bar */}
          <div className="space-y-4">
          <div className="inline-flex flex-col items-center">
  <h1 className="text-5xl font-extrabold text-primary">Book a Call</h1>
  <div className="h-1 w-[120%] max-w-[300px] bg-accent rounded-full mt-2" />
</div>
            <p className="text-lg text-gray-700">
              Schedule a free discovery call with Jackson to walk through your current setup, your biggest pain points, and see if Adapt22 can help. No pressure. No fluff. Just straight answers and a real conversation.
            </p>
          </div>

          {/* Calendly Embed */}
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