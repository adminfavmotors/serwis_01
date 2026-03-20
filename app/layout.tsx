import type { Metadata } from "next";
import { Rajdhani, Inter, JetBrains_Mono } from "next/font/google";
import Script from "next/script";

import CookiesBanner from "@/components/CookiesBanner";

import "./globals.css";

const rajdhani = Rajdhani({
  weight: ["500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const inter = Inter({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  weight: ["400", "500"],
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "MotoFix Serwis Kraków | Warsztat Samochodowy ul. Przemysłowa",
  description:
    "Profesjonalny serwis samochodowy w Krakowie. Wymiana oleju, geometria kół, diagnostyka, blacharstwo. Umów wizytę online. ☎ +48 123 456 789",
  keywords: [
    "serwis samochodowy Kraków",
    "warsztat samochodowy Kraków",
    "wymiana oleju Kraków",
    "geometria kół Kraków",
    "diagnostyka komputerowa Kraków",
    "wymiana opon Kraków",
    "blacharstwo Kraków",
    "serwis klimatyzacji Kraków",
    "MotoFix Serwis",
    "warsztat Kraków Przemysłowa",
  ],
  authors: [{ name: "FavMotors Studio" }],
  creator: "FavMotors Studio",
  metadataBase: new URL("https://serwis01.vercel.app"),
  alternates: {
    canonical: "/",
  },
  verification: {
    google: "REPLACE_WITH_GOOGLE_VERIFICATION_CODE",
  },
  openGraph: {
    title: "MotoFix Serwis — Warsztat Samochodowy Kraków",
    description:
      "Profesjonalny serwis w Krakowie. 15 lat doświadczenia, 3000+ napraw. Umów wizytę online.",
    url: "https://serwis01.vercel.app",
    siteName: "MotoFix Serwis",
    locale: "pl_PL",
    type: "website",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "MotoFix Serwis — Warsztat Samochodowy Kraków",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MotoFix Serwis — Warsztat Samochodowy Kraków",
    description: "Profesjonalny serwis samochodowy w Krakowie.",
    images: ["/twitter-image"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const autoRepairSchema = {
  "@context": "https://schema.org",
  "@type": "AutoRepair",
  name: "MotoFix Serwis",
  image: "https://serwis01.vercel.app/opengraph-image",
  url: "https://serwis01.vercel.app",
  telephone: "+48123456789",
  email: "kontakt@motofix-serwis.pl",
  description:
    "Profesjonalny serwis samochodowy w Krakowie. Wymiana oleju, geometria kół, diagnostyka komputerowa, wymiana opon, blacharstwo, klimatyzacja.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "ul. Przemysłowa 12",
    addressLocality: "Kraków",
    addressRegion: "małopolskie",
    postalCode: "30-701",
    addressCountry: "PL",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 50.0647,
    longitude: 19.945,
  },
  hasMap: "https://maps.google.com/?q=ul.+Przemysłowa+12,+30-701+Kraków",
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
  currenciesAccepted: "PLN",
  paymentAccepted: "Cash, Credit Card, Bank Transfer",
  areaServed: {
    "@type": "City",
    name: "Kraków",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "127",
    bestRating: "5",
    worstRating: "1",
  },
  review: [
    {
      "@type": "Review",
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
      },
      author: {
        "@type": "Person",
        name: "Marek K.",
      },
      reviewBody:
        "Wszystko jasno wyjaśnione, termin dotrzymany i auto odebrane jeszcze tego samego dnia.",
    },
    {
      "@type": "Review",
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
      },
      author: {
        "@type": "Person",
        name: "Anna W.",
      },
      reviewBody:
        "Bardzo sprawna diagnostyka i uczciwa wycena. Czuć, że zespół naprawdę zna się na swojej pracy.",
    },
  ],
  sameAs: ["https://maps.google.com/?q=MotoFix+Serwis+Kraków"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <head>
        <Script
          id="schema-autorepar"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(autoRepairSchema),
          }}
        />
      </head>
      <body
        className={`${rajdhani.variable} ${inter.variable} ${jetbrainsMono.variable}`}
      >
        {children}
        <CookiesBanner />
      </body>
    </html>
  );
}
