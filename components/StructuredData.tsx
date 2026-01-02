/**
 * Composant pour les données structurées Schema.org
 * Améliore le SEO et l'affichage dans les résultats de recherche Google
 */

import { siteConfig } from "@/lib/config";

export default function StructuredData() {
    const organizationSchema = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "@id": siteConfig.url,
        name: siteConfig.name,
        description: siteConfig.description,
        url: siteConfig.url,
        telephone: siteConfig.contact.phone,
        email: siteConfig.contact.email,
        address: {
            "@type": "PostalAddress",
            addressLocality: "Marrakech",
            addressCountry: "MA",
        },
        geo: {
            "@type": "GeoCoordinates",
            latitude: "31.6295",
            longitude: "-7.9811",
        },
        openingHoursSpecification: {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
                "Sunday",
            ],
            opens: "08:00",
            closes: "19:00",
        },
        priceRange: "$$",
        image: `${siteConfig.url}/og-image.jpg`,
        sameAs: [
            siteConfig.social.facebook,
            siteConfig.social.instagram,
            siteConfig.social.twitter,
        ],
        aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.9",
            reviewCount: "250",
        },
    };

    const serviceSchema = {
        "@context": "https://schema.org",
        "@type": "Service",
        serviceType: "Transport Touristique",
        provider: {
            "@type": "LocalBusiness",
            name: siteConfig.name,
        },
        areaServed: {
            "@type": "City",
            name: "Marrakech",
        },
        hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: "Services de Transport",
            itemListElement: [
                {
                    "@type": "Offer",
                    itemOffered: {
                        "@type": "Service",
                        name: "Transfert Aéroport Marrakech",
                        description: "Service de transfert privé depuis l'aéroport Marrakech Menara",
                    },
                },
                {
                    "@type": "Offer",
                    itemOffered: {
                        "@type": "Service",
                        name: "Excursions d'une journée",
                        description: "Excursions guidées vers les destinations populaires du Maroc",
                    },
                },
                {
                    "@type": "Offer",
                    itemOffered: {
                        "@type": "Service",
                        name: "Circuits Désert",
                        description: "Circuits de plusieurs jours dans le désert du Sahara",
                    },
                },
            ],
        },
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
            />
        </>
    );
}
