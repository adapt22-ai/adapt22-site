"use client";
import { useEffect, useState } from "react";

export default function BookACallPage() {
  const [calendlyLoaded, setCalendlyLoaded] = useState(false);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    script.onload = () => setCalendlyLoaded(true);
    document.body.appendChild(script);
  }, []);

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-black text-white">
      <h1 className="text-4xl font-bold text-cyan-400 mb-4">Book a Call</h1>
      <p className="text-lg text-gray-300 mb-6">
        Schedule a time to discuss how Adapt22 can help your business.
      </p>

      {/* Full-width Calendly embed (no scrolling required) */}
      <div className="w-full max-w-4xl bg-white/10 p-6 rounded-lg shadow-lg">
        {calendlyLoaded ? (
          <iframe
            src="https://calendly.com/jackson-adapt22/discoverycall"
            className="w-full h-[700px] rounded-md"
            loading="lazy"
          ></iframe>
        ) : (
          <p className="text-center text-gray-400">Loading Calendly...</p>
        )}
      </div>
    </main>
  );
}
