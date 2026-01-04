/**
 * Configuration centralisée pour Luxury Lines Travel
 * Toutes les constantes et informations de l'entreprise
 */

export const siteConfig = {
    // Informations de l'entreprise
    name: "Luxury Lines Travel",
    tagline: "Transport Touristique",
    description: "Service de transport touristique de luxe à Marrakech et dans tout le Maroc. Transferts aéroport, excursions, circuits désert.",

    // Contact
    contact: {
        phone: "+212708894866",
        phoneDisplay: "+212 708-894866",
        email: "infos@luxurylinestravel.com",
        whatsapp: "212708894866",
        address: "Marrakech, Maroc",
    },

    // URLs
    url: process.env.NEXT_PUBLIC_SITE_URL || "https://luxurylinestravel.com",

    // Réseaux sociaux
    social: {
        facebook: "https://facebook.com/luxurylinestravel",
        instagram: "https://instagram.com/luxurylinestravel",
        twitter: "https://twitter.com/luxurylinestravel",
    },

    // Informations business
    business: {
        yearsExperience: "10+",
        satisfiedClients: "5000+",
        destinations: "50+",
        availability: "24/7",
    },

    // Messages WhatsApp par défaut
    whatsappMessages: {
        default: "Bonjour, je souhaite obtenir plus d'informations sur vos services de transport touristique.",
        airport: "Bonjour, je souhaite réserver un transfert aéroport.",
        excursion: "Bonjour, je souhaite réserver une excursion.",
        circuit: "Bonjour, je souhaite réserver un circuit dans le désert.",
    },
};

// Helper pour générer l'URL WhatsApp
export function getWhatsAppUrl(message?: string) {
    const msg = message || siteConfig.whatsappMessages.default;
    return `https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent(msg)}`;
}

// Helper pour générer l'URL téléphone
export function getPhoneUrl() {
    return `tel:${siteConfig.contact.phone}`;
}

// Helper pour générer l'URL email
export function getEmailUrl(subject?: string) {
    const subjectParam = subject ? `?subject=${encodeURIComponent(subject)}` : "";
    return `mailto:${siteConfig.contact.email}${subjectParam}`;
}
