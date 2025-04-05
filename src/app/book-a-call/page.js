"use client";

export default function BookACallPage() {
  return (
    <div className="min-h-screen px-6 py-20 max-w-3xl mx-auto text-white text-center">
      <h1 className="text-5xl font-bold mb-6 text-cyan-400">Book a Call</h1>
      <p className="text-lg text-gray-300 mb-10">
        Schedule a free discovery call with Jackson to walk through your current setup, your biggest pain points, and see if Adapt22 can help. No pressure. No fluff. Just straight answers and a real conversation.
      </p>

      <div className="bg-white/5 border border-white/10 rounded-xl p-4 sm:p-6 shadow-lg">
        <iframe
          src="https://calendly.com/jackson-adapt22/discoverycall"
          width="100%"
          height="700"
          frameBorder="0"
          scrolling="no"
          className="w-full rounded-xl"
        ></iframe>
      </div>

      <p className="text-sm text-gray-500 mt-6">
        Prefer to reach out directly? Email us at{" "}
        <a href="mailto:jackson@adapt22.ai" className="text-cyan-400 hover:underline">
          jackson@adapt22.ai
        </a>
      </p>
    </div>
  );
}
