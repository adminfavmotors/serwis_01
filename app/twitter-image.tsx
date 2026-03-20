import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "MotoFix Serwis — Warsztat Samochodowy Kraków";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "630px",
          backgroundColor: "#0E0F11",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          position: "relative",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "6px",
            backgroundColor: "#2B7FFF",
            display: "flex",
          }}
        />

        <div
          style={{
            position: "absolute",
            left: "80px",
            top: "80px",
            bottom: "80px",
            width: "4px",
            backgroundColor: "#2B7FFF",
            display: "flex",
          }}
        />

        <div
          style={{
            paddingLeft: "32px",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "24px",
            }}
          >
            <span
              style={{
                fontSize: "14px",
                color: "#2B7FFF",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                border: "1px solid rgba(43,127,255,0.4)",
                padding: "6px 16px",
                borderRadius: "2px",
              }}
            >
              ⬡ AUTORYZOWANY SERWIS • KRAKÓW
            </span>
          </div>

          <div
            style={{
              fontSize: "88px",
              fontWeight: 900,
              color: "#EAEDF2",
              lineHeight: 0.88,
              letterSpacing: "-0.02em",
              marginBottom: "32px",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <span>MOTOFIX</span>
            <span style={{ color: "#2B7FFF" }}>SERWIS</span>
          </div>

          <div
            style={{
              width: "64px",
              height: "4px",
              backgroundColor: "#2B7FFF",
              marginBottom: "28px",
              display: "flex",
            }}
          />

          <div
            style={{
              fontSize: "24px",
              color: "#6B7280",
              letterSpacing: "0.02em",
              display: "flex",
            }}
          >
            Warsztat Samochodowy • ul. Przemysłowa 12, Kraków
          </div>

          <div
            style={{
              display: "flex",
              gap: "48px",
              marginTop: "40px",
            }}
          >
            {[
              { value: "15+", label: "LAT NA RYNKU" },
              { value: "3000+", label: "NAPRAW" },
              { value: "4.9★", label: "OCENA GOOGLE" },
            ].map((stat) => (
              <div
                key={stat.label}
                style={{ display: "flex", flexDirection: "column" }}
              >
                <span
                  style={{
                    fontSize: "32px",
                    fontWeight: 700,
                    color: "#2B7FFF",
                  }}
                >
                  {stat.value}
                </span>
                <span
                  style={{
                    fontSize: "12px",
                    color: "#6B7280",
                    letterSpacing: "0.15em",
                  }}
                >
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div
          style={{
            position: "absolute",
            bottom: "40px",
            right: "80px",
            fontSize: "14px",
            color: "#6B7280",
            display: "flex",
          }}
        >
          serwis01.vercel.app
        </div>
      </div>
    ),
    { ...size },
  );
}
