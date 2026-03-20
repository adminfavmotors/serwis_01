import type { Metadata } from "next";
import { Bebas_Neue, DM_Sans, Space_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-display",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin", "latin-ext"],
  variable: "--font-body",
  display: "swap",
});

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://motofix-serwis.vercel.app"),
  title: "MotoFix Serwis Kraków | Warsztat Samochodowy ul. Przemysłowa",
  description:
    "Profesjonalny serwis samochodowy w Krakowie. Wymiana oleju, geometria kół, diagnostyka, blacharstwo. Umów wizytę online. ☎ +48 123 456 789",
  keywords:
    "serwis samochodowy Kraków, warsztat samochodowy Kraków, wymiana oleju Kraków, geometria kół Kraków, diagnostyka komputerowa Kraków",
  openGraph: {
    title: "MotoFix Serwis — Warsztat Samochodowy Kraków",
    description:
      "Profesjonalny serwis w Krakowie. 15 lat doświadczenia, 3000+ napraw.",
    url: "https://motofix-serwis.vercel.app",
    siteName: "MotoFix Serwis",
    locale: "pl_PL",
    type: "website",
  },
  robots: { index: true, follow: true },
  alternates: { canonical: "https://motofix-serwis.vercel.app" },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "AutoRepair",
  name: "MotoFix Serwis",
  url: "https://serwis01.vercel.app",
  telephone: "+48123456789",
  address: {
    "@type": "PostalAddress",
    streetAddress: "ul. Przemysłowa 12",
    addressLocality: "Kraków",
    postalCode: "30-701",
    addressCountry: "PL",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 50.0647,
    longitude: 19.945,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "18:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Saturday"],
      opens: "09:00",
      closes: "14:00",
    },
  ],
  priceRange: "zł zł",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "127",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <body
        className={`${bebasNeue.variable} ${dmSans.variable} ${spaceMono.variable} bg-bg font-body text-body text-dark antialiased`}
      >
        <Script
          id="autrepair-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        {children}
      </body>
    </html>
  );
}
