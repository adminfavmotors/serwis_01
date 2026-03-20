"use client";

import { useEffect, useState } from "react";

export default function CookiesBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      const accepted = localStorage.getItem("cookies_accepted");
      if (!accepted) setVisible(true);
    } catch {
      setVisible(true);
    }
  }, []);

  const accept = () => {
    try {
      localStorage.setItem("cookies_accepted", "true");
    } catch {}
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-label="Informacja o plikach cookies"
      className="fixed bottom-0 left-0 right-0 z-[9999]"
      style={{
        backgroundColor: "#161616",
        borderTop: "1px solid #2A2A2A",
        borderTopLeftRadius: "0px",
        borderTopRightRadius: "0px",
      }}
    >
      <div
        style={{ height: "3px", backgroundColor: "#FF6B00", width: "100%" }}
      />

      <div
        className="mx-auto flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center"
        style={{
          maxWidth: "1280px",
          padding: "16px 24px",
        }}
      >
        <p
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "13px",
            color: "#888888",
            lineHeight: 1.6,
            maxWidth: "680px",
            margin: 0,
          }}
        >
          Ta strona używa plików <span style={{ color: "#F0F0F0" }}>cookies</span>{" "}
          w celu analizy ruchu i poprawy jakości usług. Kontynuując przeglądanie,
          wyrażasz zgodę na ich używanie zgodnie z naszą{" "}
          <a
            href="/polityka-prywatnosci"
            style={{ color: "#FF6B00", textDecoration: "underline" }}
          >
            Polityką Prywatności
          </a>
          .
        </p>

        <div className="flex shrink-0 items-center gap-3">
          <a
            href="/polityka-prywatnosci"
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "13px",
              color: "#888888",
              textDecoration: "underline",
              whiteSpace: "nowrap",
            }}
          >
            Więcej informacji
          </a>

          <button
            onClick={accept}
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "13px",
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "0.08em",
              backgroundColor: "#FF6B00",
              color: "#0D0D0D",
              border: "none",
              borderRadius: "2px",
              padding: "10px 24px",
              cursor: "pointer",
              whiteSpace: "nowrap",
              transition: "background-color 0.15s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "#CC5500";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "#FF6B00";
            }}
          >
            Akceptuję
          </button>
        </div>
      </div>
    </div>
  );
}
