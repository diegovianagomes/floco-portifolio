import { ImageResponse } from "next/og"

// Image metadata
export const alt = "Floc.o Arquitetura"
export const size = {
  width: 1200,
  height: 630,
}

export const contentType = "image/png"

// Image generation
export default async function Image() {
  return new ImageResponse(
    <div
      style={{
        fontSize: 48,
        background: "white",
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        color: "black",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          marginBottom: 40,
        }}
      >
        <div style={{ fontSize: 120, fontWeight: "bold", lineHeight: "0.9" }}>C=</div>
        <div style={{ fontSize: 120, fontWeight: "bold", lineHeight: "0.9" }}>CI</div>
      </div>
      <div style={{ fontSize: 32 }}>Floco Arquitetura</div>
    </div>,
    {
      ...size,
    },
  )
}

