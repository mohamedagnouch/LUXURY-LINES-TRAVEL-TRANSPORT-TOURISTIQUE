import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://luxurylinestravel.com"),
  title: {
    default: "Luxury Lines Travel - Transport Touristique Marrakech",
    template: "%s | Luxury Lines Travel",
  },
  description:
    "Service de transport touristique de luxe à Marrakech et dans tout le Maroc. Transferts aéroport, excursions d'une journée, circuits désert. Réservation en ligne 24/7.",
  keywords: [
    "transport touristique marrakech",
    "taxi aéroport marrakech",
    "transfert aéroport marrakech",
    "excursion marrakech",
    "circuit désert maroc",
    "excursion ourika",
    "excursion essaouira",
    "circuit merzouga",
    "luxury lines travel",
    "transport de luxe marrakech",
  ],
  authors: [{ name: "Luxury Lines Travel" }],
  creator: "Luxury Lines Travel",
  publisher: "Luxury Lines Travel",

  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://luxurylinestravel.com",
    siteName: "Luxury Lines Travel",
    title: "Luxury Lines Travel - Transport Touristique Marrakech",
    description:
      "Service de transport touristique de luxe à Marrakech. Transferts aéroport, excursions, circuits désert. Réservation en ligne 24/7.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Luxury Lines Travel - Transport Touristique Marrakech",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Luxury Lines Travel - Transport Touristique Marrakech",
    description:
      "Service de transport touristique de luxe à Marrakech. Transferts aéroport, excursions, circuits désert.",
    images: ["/og-image.jpg"],
    creator: "@luxurylinestravel",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  alternates: {
    canonical: "https://luxurylinestravel.com",
  },

  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
