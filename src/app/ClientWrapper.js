"use client";

import { useEffect } from "react";

export default function ClientWrapper() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  const openCalendlyPopup = () => {
    if (typeof window !== "undefined" && window.Calendly) {
      window.Calendly.initPopupWidget({
        url: "https://calendly.com/jackson-adapt22/discoverycall",
      });
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 sm:bottom-4 sm:right-4">
      <button
        onClick={openCalendlyPopup}
        className="bg-primaryDark hover:bg-[#013c35] text-white px-5 py-3 rounded-full shadow-lg text-lg font-semibold transition transform hover:scale-105"
      >
        📅 Book a Call
      </button>
    </div>
  );
}