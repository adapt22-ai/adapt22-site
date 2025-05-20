"use client";

export default function BookACallPage() {
  return (
    <div className="bg-background text-textPrimary">
      <section className="py-20 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto space-y-12 text-center">
          {/* Heading & Gold Bar */}
          <div className="space-y-4">
            <div className="inline-flex flex-col items-center">
              <h1 className="text-4xl sm:text-5xl font-extrabold text-accentIndigo">Book a Call</h1>
              <div className="h-1 w-full max-w-[300px] sm:max-w-[400px] md:max-w-[30ch] bg-primaryDark rounded-full mt-2" />
            </div>
            <p className="text-md sm:text-lg textMuted max-w-2xl mx-auto">
              Schedule a free discovery call with our strategists to walk through your current setup, your biggest pain points, and see if Adapt22 can help. No pressure. No fluff. Just straight answers and a real conversation.
            </p>
          </div>

          {/* Calendly Embed */}
          <div className="bg-surface p-4 sm:p-6 rounded-xl shadow-lg border border-border">
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