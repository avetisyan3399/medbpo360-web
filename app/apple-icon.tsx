import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
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
          background: "#0f2b46",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 92,
            fontWeight: 700,
            fontFamily: "sans-serif",
            color: "#ffffff",
            letterSpacing: -3,
          }}
        >
          M
        </div>
        <div
          style={{
            display: "flex",
            width: 56,
            height: 6,
            marginTop: 10,
            borderRadius: 3,
            background: "#17a673",
          }}
        />
      </div>
    ),
    { ...size }
  );
}
