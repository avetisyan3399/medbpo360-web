import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0f2b46",
          borderRadius: 7,
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 20,
            fontWeight: 700,
            fontFamily: "sans-serif",
            color: "#ffffff",
            letterSpacing: -1,
          }}
        >
          M
        </div>
      </div>
    ),
    { ...size }
  );
}
