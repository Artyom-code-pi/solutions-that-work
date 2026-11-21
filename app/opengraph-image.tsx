import { ImageResponse } from "next/og";

export const dynamic = "force-static";
export const alt = "Solutions That Work — Turning complexity into results";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OG() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", background: "#0A1626", color: "white", padding: 80, fontFamily: "sans-serif" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <svg width="64" height="64" viewBox="0 0 32 32"><circle cx="16" cy="16" r="16" fill="#14C2B5"/><path d="M6 16c2-7 4-7 5 0s3 4 4 0 2-2 3 0h5" fill="none" stroke="#0A1626" strokeWidth="2.2" strokeLinecap="round"/><circle cx="25.5" cy="16" r="2.3" fill="#0A1626"/></svg>
          <div style={{ fontSize: 34, display: "flex" }}><b>Solutions That Work</b></div>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 76, fontWeight: 700, letterSpacing: -2, lineHeight: 1.05 }}>Complicated?</div>
          <div style={{ fontSize: 76, fontWeight: 700, letterSpacing: -2, lineHeight: 1.05, color: "#14C2B5" }}>Simple.</div>
          <div style={{ fontSize: 28, marginTop: 28, opacity: 0.7 }}>Product ownership · Technical delivery · Digital transformation — Artyom Hudolij</div>
        </div>
      </div>
    ),
    size
  );
}
