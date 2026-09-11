import { ImageResponse } from "next/og";

export const alt = "TalUp — Бизнеске арналған сайттар";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          alignItems: "center",
          background: "#071B33",
          color: "#F7F7F5",
          display: "flex",
          height: "100%",
          justifyContent: "center",
          padding: "72px",
          width: "100%",
        }}
      >
        <div
          style={{
            border: "1px solid rgba(201, 155, 60, 0.58)",
            display: "flex",
            flexDirection: "column",
            height: "100%",
            justifyContent: "space-between",
            padding: "56px",
            width: "100%",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div
              style={{
                color: "#C99B3C",
                fontSize: 34,
                fontWeight: 800,
                letterSpacing: "0.18em",
              }}
            >
              TALUP
            </div>
            <div
              style={{
                color: "#F7F7F5",
                fontSize: 76,
                fontWeight: 700,
                lineHeight: 1.08,
                marginTop: 64,
                maxWidth: 840,
              }}
            >
              Бизнеске арналған сайттар
            </div>
          </div>
          <div
            style={{
              color: "rgba(247, 247, 245, 0.72)",
              fontSize: 26,
              fontWeight: 700,
              letterSpacing: "0.2em",
            }}
          >
            RISE BEYOND LIMITS
          </div>
        </div>
      </div>
    ),
    size,
  );
}
