import { ImageResponse } from "next/og";

export const runtime = "nodejs";

export const alt = "Align — Clear expectations, less conflict, more trust";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #FFFAF5 0%, #F7F1EB 50%, #EDE6DE 100%)",
          fontFamily: "system-ui, sans-serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Decorative orbs */}
        <div
          style={{
            position: "absolute",
            top: -80,
            right: -80,
            width: 400,
            height: 400,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(42,157,143,0.15) 0%, transparent 70%)",
            display: "flex",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -60,
            left: -60,
            width: 300,
            height: 300,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(224,122,95,0.12) 0%, transparent 70%)",
            display: "flex",
          }}
        />

        {/* Logo mark */}
        <div
          style={{
            width: 80,
            height: 80,
            borderRadius: "50%",
            backgroundColor: "#2A9D8F",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: 32,
          }}
        >
          <div
            style={{
              width: 28,
              height: 28,
              borderRadius: "50%",
              backgroundColor: "#FFFAF5",
              display: "flex",
            }}
          />
        </div>

        {/* Title */}
        <div
          style={{
            fontSize: 64,
            fontWeight: 700,
            color: "#2D2926",
            letterSpacing: "-0.02em",
            marginBottom: 16,
            display: "flex",
          }}
        >
          Align
        </div>

        {/* Tagline */}
        <div
          style={{
            fontSize: 28,
            color: "#6B5E57",
            letterSpacing: "0.01em",
            display: "flex",
          }}
        >
          Clear expectations. Less conflict. More trust.
        </div>

        {/* Bottom bar */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: 6,
            background: "linear-gradient(90deg, #2A9D8F, #E07A5F, #D4A574)",
            display: "flex",
          }}
        />
      </div>
    ),
    { ...size }
  );
}
