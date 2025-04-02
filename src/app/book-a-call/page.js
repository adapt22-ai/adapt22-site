"use client";

import { useEffect } from "react";

export default function BookACallPage() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-4 text-center">Book a Call</h1>
      <p className="text-lg text-gray-400 mb-8 text-center max-w-xl">
        Schedule a free discovery call with us and let’s talk about how Adapt22 can help your business implement powerful AI solutions.
      </p>
      <div
        className="calendly-inline-widget w-full max-w-4xl h-[800px]"
        data-url="https://calendly.com/jackson-adapt22/discoverycall"
      ></div>
    </div>
  );
}
