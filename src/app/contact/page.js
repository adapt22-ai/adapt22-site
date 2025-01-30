"use client";
import Script from "next/script";

export default function Contact() {
  return (
    <div className="max-w-2xl mx-auto mt-10 px-4 text-gray-200">
      <h1 className="text-3xl font-bold text-cyan-400 mb-4">Contact Us</h1>
      <p className="mb-4">
        Have questions? Schedule a call below or email us at{" "}
        <a href="mailto:info@adapt22.ai" className="text-cyan-300">
          info@adapt22.ai
        </a>.
      </p>

      {/* Calendly Inline Embed */}
      <div
        className="calendly-inline-widget"
        data-url="https://calendly.com/jackson-adapt22/30min"
        style={{ minWidth: "320px", height: "630px" }}
      />

      {/* Calendly Script */}
      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="afterInteractive"
      />
    </div>
  );
}
