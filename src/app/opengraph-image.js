import { ImageResponse } from "next/og";
export const alt = "adapt22 | Built for what comes next.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export default function Image() {
  return new ImageResponse(
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        width: "100%",
        height: "100%",
        background: "#15191e",
        color: "#f2f0eb",
        padding: 70,
      }}
    >
      <div style={{ display: "flex", fontSize: 44, letterSpacing: -2 }}>
        adapt22
      </div>
      <div
        style={{
          display: "flex",
          fontSize: 100,
          letterSpacing: -5,
          lineHeight: 1.05,
          maxWidth: 950,
        }}
      >
        Built for what comes next.
      </div>
      <div
        style={{
          display: "flex",
          fontSize: 19,
          color: "#a9a296",
          letterSpacing: 3,
        }}
      >
        TECHNOLOGY CONSULTING. SOFTWARE. SALESFORCE.
      </div>
    </div>,
    size,
  );
}
