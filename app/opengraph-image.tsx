import { ImageResponse } from "next/og"

export const dynamic = "force-static"
export const size = { width: 1200, height: 630 }
export const alt = "XLB — 老板不在"
export const contentType = "image/png"

export default function OGImage() {
  return new ImageResponse(
    <div
      style={{
        background: "#0A0A0A",
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "monospace",
      }}
    >
      <div style={{ fontSize: 120, color: "#F0EAD6", marginBottom: 24 }}>
        老板不在
      </div>
      <div
        style={{
          fontSize: 18,
          color: "rgba(240,234,214,0.3)",
          letterSpacing: "0.5em",
        }}
      >
        XLB · SHAM SHUI PO · HK
      </div>
      <div
        style={{
          position: "absolute",
          bottom: 40,
          fontSize: 12,
          color: "rgba(240,234,214,0.15)",
          letterSpacing: "0.3em",
        }}
      >
        THE RESTAURANT THAT DOES NOT EXIST YET
      </div>
    </div>,
    { ...size }
  )
}
