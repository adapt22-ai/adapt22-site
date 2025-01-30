"use client"; // This makes it a client component

import { useEffect, useState } from "react";

export default function Cursor() {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleMouseMove = (e) => {
        setCursorPos({ x: e.clientX, y: e.clientY });
      };
      document.addEventListener("mousemove", handleMouseMove);
      return () => document.removeEventListener("mousemove", handleMouseMove);
    }
  }, []);

  return (
    <div
      className="custom-cursor"
      style={{
        position: "fixed",
        width: "10px",
        height: "10px",
        backgroundColor: "cyan",
        borderRadius: "50%",
        transform: `translate(${cursorPos.x}px, ${cursorPos.y}px)`,
        pointerEvents: "none",
        zIndex: 9999,
      }}
    />
  );
}
