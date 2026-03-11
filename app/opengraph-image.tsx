import { ImageResponse } from "next/og"

export const dynamic = "force-static"
export const size = { width: 1200, height: 630 }
export const alt = "XLB — 老板不在 · Restaurant Design Studio"
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
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Corner registration marks — top-left */}
      <div style={{ position: "absolute", top: 32, left: 32, width: 40, height: 40,
        borderTop: "1.5px solid rgba(184,134,11,0.6)", borderLeft: "1.5px solid rgba(184,134,11,0.6)",
        display: "flex" }} />
      {/* top-right */}
      <div style={{ position: "absolute", top: 32, right: 32, width: 40, height: 40,
        borderTop: "1.5px solid rgba(184,134,11,0.6)", borderRight: "1.5px solid rgba(184,134,11,0.6)",
        display: "flex" }} />
      {/* bottom-left */}
      <div style={{ position: "absolute", bottom: 32, left: 32, width: 40, height: 40,
        borderBottom: "1.5px solid rgba(184,134,11,0.6)", borderLeft: "1.5px solid rgba(184,134,11,0.6)",
        display: "flex" }} />
      {/* bottom-right */}
      <div style={{ position: "absolute", bottom: 32, right: 32, width: 40, height: 40,
        borderBottom: "1.5px solid rgba(184,134,11,0.6)", borderRight: "1.5px solid rgba(184,134,11,0.6)",
        display: "flex" }} />

      {/* XLB monogram — top left */}
      <div style={{
        position: "absolute", top: 40, left: 56,
        display: "flex", flexDirection: "column", gap: 4,
      }}>
        <div style={{ fontSize: 13, color: "rgba(57,255,133,0.9)", letterSpacing: "0.4em", display: "flex" }}>
          XLB
        </div>
        <div style={{ fontSize: 9, color: "rgba(240,234,214,0.25)", letterSpacing: "0.25em", display: "flex" }}>
          RESTAURANT DESIGN STUDIO
        </div>
      </div>

      {/* Stamp badge — top right */}
      <div style={{
        position: "absolute", top: 40, right: 56,
        border: "1.5px solid rgba(192,57,43,0.55)",
        padding: "4px 10px",
        display: "flex",
        transform: "rotate(-1.5deg)",
      }}>
        <div style={{ fontSize: 9, color: "rgba(192,57,43,0.7)", letterSpacing: "0.2em", display: "flex" }}>
          CONFIDENTIAL · CEO REVIEW
        </div>
      </div>

      {/* Hero text */}
      <div style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 0,
      }}>
        <div style={{
          fontSize: 130,
          color: "#F0EAD6",
          lineHeight: 1,
          letterSpacing: "0.04em",
          display: "flex",
        }}>
          老板不在
        </div>

        {/* Divider */}
        <div style={{
          width: 280,
          height: 1,
          background: "rgba(184,134,11,0.4)",
          margin: "28px 0 20px",
          display: "flex",
        }} />

        <div style={{
          fontSize: 16,
          color: "rgba(240,234,214,0.35)",
          letterSpacing: "0.55em",
          display: "flex",
        }}>
          XLB · SHAM SHUI PO · KOWLOON · HK
        </div>
      </div>

      {/* Bottom status line */}
      <div style={{
        position: "absolute",
        bottom: 44,
        display: "flex",
        gap: 40,
        alignItems: "center",
      }}>
        <div style={{ fontSize: 10, color: "rgba(240,234,214,0.2)", letterSpacing: "0.3em", display: "flex" }}>
          DROP 001 · INVITE ONLY · 1000 PCS
        </div>
        <div style={{ width: 3, height: 3, borderRadius: "50%", background: "rgba(57,255,133,0.6)", display: "flex" }} />
        <div style={{ fontSize: 10, color: "rgba(240,234,214,0.2)", letterSpacing: "0.3em", display: "flex" }}>
          THE RESTAURANT THAT DOES NOT EXIST YET
        </div>
      </div>
    </div>,
    { ...size }
  )
}
