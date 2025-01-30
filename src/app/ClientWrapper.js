"use client";  // This ensures it's a Client Component

import { useEffect } from "react";

export default function ClientWrapper({ calendlyUrl }) {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div className="fixed bottom-6 right-6">
      <button
        onClick={() =>
          window.Calendly.initPopupWidget({ url: calendlyUrl })
        }
        className="bg-cyan-500 hover:bg-cyan-600 text-white px-5 py-3 rounded-full shadow-lg text-lg font-semibold transition transform hover:scale-105"
      >
        📅 Book a Call
      </button>
    </div>
  );
}
