import type { Metadata } from "next";
import { siteConfig } from "./config";

/**
 * Génère les métadonnées pour une page
 */
export function generatePageMetadata({
    title,
    description,
    path = "",
    image = "/og-image.jpg",
    keywords = [],
}: {
    title: string;
    description: string;
    path?: string;
    image?: string;
    keywords?: string[];
}): Metadata {
    const url = `${siteConfig.url}${path}`;
    const fullTitle = `${title} | ${siteConfig.name}`;

    const defaultKeywords = [
        "transport touristique marrakech",
        "taxi aéroport marrakech",
        "excursion marrakech",
        "circuit désert maroc",
        "transfert aéroport marrakech",
        "luxury lines travel",
    ];

    return {
        title: fullTitle,
        description,
        keywords: [...defaultKeywords, ...keywords],
        authors: [{ name: siteConfig.name }],
        creator: siteConfig.name,
        publisher: siteConfig.name,

        metadataBase: new URL(siteConfig.url),
        alternates: {
            canonical: url,
        },

        openGraph: {
            type: "website",
            locale: "fr_FR",
            url,
            title: fullTitle,
            description,
            siteName: siteConfig.name,
            images: [
                {
                    url: image,
                    width: 1200,
                    height: 630,
                    alt: title,
                },
            ],
        },

        twitter: {
            card: "summary_large_image",
            title: fullTitle,
            description,
            images: [image],
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

        verification: {
            google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
        },
    };
}
