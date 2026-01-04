import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  title: "Excursion Essaouira au départ de Marrakech | Médina & Plage",
  description: "Profitez d'une journée à Essaouira, la perle de l'Atlantique. Visitez la Sqala, le port de pêche traditionnel et la médina classée à l'UNESCO.",
  alternates: { canonical: "https://luxurylinestravel.com/excursion-essaouira" },
};

export default function ExcursionEssaouira() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Banner with Essaouira Background */}
      <section className="relative h-[50vh] min-h-[400px] overflow-hidden">
        {/* Background image Essaouira */}
        <Image
          src="/111.webp"
          alt="Port d'Essaouira avec remparts et mouettes"
          fill
          priority
          className="object-cover object-center"
        />
        {/* Overlay pour lisibilité du texte */}
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="max-w-3xl">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-4">
                Excursion Essaouira
              </h1>
              <div className="flex items-center gap-2 text-white/90">
                <a href="/" className="hover:text-white transition-colors">Home</a>
                <span>&gt;</span>
                <span>Excursion Essaouira</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Intro + Image Essaouira */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start mb-16">
            <div className="text-[15px] leading-relaxed text-black space-y-4">
              <p>
                Ancien port portugais, <strong>Essaouira</strong> est aujourd’hui une ville
                côtière au charme authentique, réputée pour ses remparts, son port animé, ses
                ruelles blanches et bleues et son atmosphère détendue face à l’océan Atlantique.
              </p>
              <p>
                Depuis Marrakech, la route traverse les plaines plantées d’arganiers où vous
                pouvez apercevoir les fameuses chèvres perchées dans les arbres. À l’arrivée,
                vous découvrez la médina classée au patrimoine mondial de l’UNESCO, le port
                de pêche, la sqala et les longues plages balayées par le vent.
              </p>
              <p>
                Votre chauffeur vous dépose près de la médina pour vous laisser profiter
                librement de la ville : promenade sur les remparts, déjeuner de poisson frais
                au port, shopping dans les boutiques d’artisans (bois de thuya, cuir, bijoux,
                art contemporain) ou pause café sur une terrasse panoramique.
              </p>

              <div className="mt-6 space-y-2">
                <p className="font-semibold text-red-700">• Disponibilité :</p>
                <p>Tous les jours de l’année.</p>

                <p className="font-semibold text-red-700 mt-3">• Départ :</p>
                <p>
                  Départ de Marrakech le matin (entre 8h00 et 8h30), retour estimé en fin
                  d’après‑midi ou en début de soirée.
                </p>

                <p className="font-semibold text-red-700 mt-3">• Durée :</p>
                <p>Journée complète.</p>
              </div>

              <div className="mt-6 space-y-2">
                <p className="font-semibold">Inclus dans le prix :</p>
                <ul className="list-disc list-inside space-y-1">
                  <li>Transport privé en véhicule climatisé avec chauffeur bilingue.</li>
                  <li>Prise en charge et retour à votre hébergement à Marrakech.</li>
                  <li>Carburant, péages et assurance responsabilité civile.</li>
                </ul>
              </div>

              <div className="mt-4 space-y-2">
                <p className="font-semibold">Non compris :</p>
                <ul className="list-disc list-inside space-y-1">
                  <li>Déjeuner et boissons.</li>
                  <li>Guide local à Essaouira (facultatif).</li>
                  <li>Activités optionnelles (balade à cheval, quad, etc.).</li>
                </ul>
              </div>

              <div className="mt-4 space-y-2">
                <p className="font-semibold">Conseils pratiques :</p>
                <p>
                  Prévoir une veste légère (le vent peut être frais, même en été), des chaussures
                  confortables pour marcher dans la médina et le long des remparts, ainsi qu’une
                  protection solaire pour la plage.
                </p>
              </div>
            </div>

            <div className="flex justify-center lg:justify-end">
              <div className="relative w-full max-w-xl aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="/essaouira.jpg"
                  alt="Port et remparts d'Essaouira"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Présentation professionnelle Essaouira */}
          <section className="mt-10 bg-gray-50 border border-gray-200 rounded-2xl p-8 sm:p-10 lg:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
              <div className="space-y-4 text-black text-[15px] leading-relaxed">
                <h2 className="text-3xl font-bold mb-2">
                  Une escapade océanique entre remparts et plages
                </h2>
                <p>
                  L’excursion à <strong>Essaouira</strong> est parfaite pour faire une pause
                  rafraîchissante loin de l’agitation de Marrakech. L’ambiance y est plus
                  douce, les ruelles moins chargées et l’océan apporte une lumière et une
                  énergie uniques.
                </p>
                <p>
                  Avec <strong>Luxury Lines Travel</strong>, vous bénéficiez d’un trajet
                  confortable, d’horaires flexibles et de conseils personnalisés pour profiter
                  au mieux de votre journée : où déjeuner, que visiter, où acheter de
                  l’artisanat de qualité, etc.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                  <div className="space-y-1">
                    <p className="font-semibold">• Pour tous les voyageurs</p>
                    <p>Couples, familles, groupes d’amis ou voyages en solo.</p>
                  </div>
                  <div className="space-y-1">
                    <p className="font-semibold">• Programme flexible</p>
                    <p>
                      Possibilité de privilégier la découverte culturelle, la plage ou le
                      shopping.
                    </p>
                  </div>
                  <div className="space-y-1">
                    <p className="font-semibold">• Cadre unique</p>
                    <p>
                      Médina fortifiée, port animé, galeries d’art et longues plages atlantiques.
                    </p>
                  </div>
                  <div className="space-y-1">
                    <p className="font-semibold">• Confort & sécurité</p>
                    <p>Véhicules récents, chauffeurs expérimentés et assistance.</p>
                  </div>
                </div>

                <div className="mt-4 flex flex-wrap gap-3 items-center">
                  <a
                    href="https://wa.me/212708894866"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-[#cc6600] text-white text-sm font-semibold shadow-md hover:bg-[#b35600] transition-colors"
                  >
                    Demander un devis ou une réservation
                  </a>
                  <p className="text-xs text-gray-600">
                    Réponse rapide pour toute demande individuelle, famille ou groupe.
                  </p>
                </div>
              </div>

              <div className="space-y-4 text-black text-sm">
                <h3 className="text-xl font-semibold">Exemple de déroulé de la journée</h3>
                <ul className="space-y-1">
                  <li>
                    <strong>08h00 – 08h30 :</strong> Prise en charge à votre hôtel ou riad à
                    Marrakech et départ vers Essaouira.
                  </li>
                  <li>
                    <strong>Matin :</strong> Arrêts photos possibles dans les zones d’arganiers
                    puis arrivée à Essaouira, première découverte de la ville.
                  </li>
                  <li>
                    <strong>Fin de matinée :</strong> Promenade dans la médina, le port et sur les
                    remparts.
                  </li>
                  <li>
                    <strong>Déjeuner :</strong> Repas libre, souvent à base de poisson frais dans
                    l’un des restaurants du port ou de la médina.
                  </li>
                  <li>
                    <strong>Après‑midi :</strong> Temps libre pour la plage, le shopping ou la
                    visite de galeries d’art.
                  </li>
                  <li>
                    <strong>Fin de journée :</strong> Retour vers Marrakech avec arrivée estimée en
                    début de soirée.
                  </li>
                </ul>
                <p className="mt-3 text-gray-700">
                  Ce programme est indicatif et peut être adapté selon la saison, la météo et vos
                  préférences personnelles.
                </p>
              </div>
            </div>
          </section>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}

