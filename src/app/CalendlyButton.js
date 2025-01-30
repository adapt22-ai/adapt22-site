"use client";
import { useEffect } from "react";

export default function CalendlyButton() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  const openCalendlyPopup = () => {
    Calendly.initPopupWidget({
      url: "https://calendly.com/jackson-adapt22?hide_landing_page_details=1",
    });
  };

  return (
    <div className="fixed bottom-6 right-6">
      <button
        onClick={openCalendlyPopup}
        className="bg-cyan-500 hover:bg-cyan-600 text-white px-5 py-3 rounded-full shadow-lg text-lg font-semibold transition transform hover:scale-105"
      >
        📅 Book a Call
      </button>
    </div>
  );
}
