import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  title: "Excursion Casablanca au départ de Marrakech | Mosquée Hassan II",
  description: "Visitez Casablanca, la capitale économique du Maroc. Découvrez la mosquée Hassan II, la corniche d'Aïn Diab et l'architecture art déco de la ville.",
  alternates: { canonical: "https://luxurylinestravel.com/excursion-casablanca" },
};

export default function ExcursionCasablanca() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Banner with Casablanca Background */}
      <section className="relative h-[50vh] min-h-[400px] overflow-hidden">
        {/* Background image Casablanca */}
        <Image
          src="/azcasa.webp"
          alt="Mosquée Hassan II et corniche de Casablanca"
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
                Excursion Casablanca
              </h1>
              <div className="flex items-center gap-2 text-white/90">
                <a href="/" className="hover:text-white transition-colors">Home</a>
                <span>&gt;</span>
                <span>Excursion Casablanca</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Intro + Image Casablanca */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start mb-16">
            <div className="text-[15px] leading-relaxed text-black space-y-4">
              <p>
                Située sur l’océan Atlantique, <strong>Casablanca</strong> est la capitale
                économique du Maroc et une ville moderne où s’illustrent à la fois
                l’architecture art déco, les grandes avenues animées et une corniche
                ouverte sur l’horizon.
              </p>
              <p>
                Au cours de cette excursion au départ de Marrakech, vous découvrez les
                lieux incontournables de la ville : la majestueuse{" "}
                <strong>mosquée Hassan II</strong> (vue extérieure), la corniche
                d’Aïn Diab, le quartier Anfa, sans oublier le centre-ville avec ses
                façades historiques et ses cafés emblématiques.
              </p>
              <p>
                Votre chauffeur-guide vous accompagne tout au long de la journée pour
                vous faire profiter des meilleurs points de vue, vous conseiller pour
                le déjeuner en bord de mer et adapter le rythme de la visite à vos
                envies : balade sur la corniche, temps libre pour le shopping ou café
                en terrasse.
              </p>

              <div className="mt-6 space-y-2">
                <p className="font-semibold text-red-700">• Disponibilité :</p>
                <p>Tous les jours de l’année.</p>

                <p className="font-semibold text-red-700 mt-3">• Départ :</p>
                <p>
                  Départ le matin depuis Marrakech (entre 7h30 et 8h00), retour
                  estimé en soirée.
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
                  <li>Frais de visites ou entrées éventuelles (mosquée Hassan II, etc.).</li>
                  <li>Guide local officiel (facultatif).</li>
                </ul>
              </div>

              <div className="mt-4 space-y-2">
                <p className="font-semibold">Conseils pratiques :</p>
                <p>
                  Prévoyez une tenue à la fois confortable et adaptée à la visite
                  de lieux de culte (épaules et genoux couverts), des chaussures
                  pour la marche en ville et une protection solaire pour la corniche.
                </p>
              </div>
            </div>

            <div className="flex justify-center lg:justify-end">
              <div className="relative w-full max-w-xl aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="/casa.jpg"
                  alt="Vue sur la mosquée Hassan II à Casablanca"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Présentation professionnelle Casablanca */}
          <section className="mt-10 bg-gray-50 border border-gray-200 rounded-2xl p-8 sm:p-10 lg:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
              <div className="space-y-4 text-black text-[15px] leading-relaxed">
                <h2 className="text-3xl font-bold mb-2">
                  Une journée entre océan, modernité et patrimoine
                </h2>
                <p>
                  Cette excursion à <strong>Casablanca</strong> est idéale pour ceux
                  qui souhaitent découvrir une autre facette du Maroc : grandes
                  artères commerçantes, buildings modernes, centres d’affaires mais
                  aussi quartiers résidentiels verdoyants et promenade en bord de mer.
                </p>
                <p>
                  Avec <strong>Luxury Lines Travel</strong>, vous bénéficiez d’un
                  service sur mesure : horaires ajustés, itinéraire modulable et
                  possibilité de combiner les visites culturelles, les pauses
                  gourmandes et les moments de détente face à l’océan.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                  <div className="space-y-1">
                    <p className="font-semibold">• Pour tous les profils</p>
                    <p>Couples, familles, groupes d’amis ou voyages d’affaires.</p>
                  </div>
                  <div className="space-y-1">
                    <p className="font-semibold">• Programme flexible</p>
                    <p>
                      Possibilité de mettre l’accent sur la culture, le shopping ou la
                      détente.
                    </p>
                  </div>
                  <div className="space-y-1">
                    <p className="font-semibold">• Cadre urbain & océanique</p>
                    <p>
                      Panorama unique entre front de mer, centre moderne et architecture
                      marocaine.
                    </p>
                  </div>
                  <div className="space-y-1">
                    <p className="font-semibold">• Confort & sécurité</p>
                    <p>Véhicules récents, chauffeurs professionnels et assistance.</p>
                  </div>
                </div>

                <div className="mt-4 flex flex-wrap gap-3 items-center">
                  <a
                    href="https://wa.me/1234567890"
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
                    <strong>07h30 – 08h00 :</strong> Prise en charge à votre hôtel ou riad à
                    Marrakech et départ en direction de Casablanca.
                  </li>
                  <li>
                    <strong>Matin :</strong> Arrivée à Casablanca, tour panoramique des
                    principaux quartiers (centre-ville, Anfa, corniche).
                  </li>
                  <li>
                    <strong>Fin de matinée :</strong> Arrêt photo à la mosquée Hassan II
                    (vue extérieure, possibilité de visite intérieure selon horaires et
                    disponibilités).
                  </li>
                  <li>
                    <strong>Déjeuner :</strong> Repas libre, de préférence sur la corniche
                    d’Aïn Diab face à l’océan.
                  </li>
                  <li>
                    <strong>Après‑midi :</strong> Temps libre pour promenade, shopping ou
                    café en terrasse dans le centre-ville.
                  </li>
                  <li>
                    <strong>Fin de journée :</strong> Retour vers Marrakech avec arrivée
                    estimée en début de soirée.
                  </li>
                </ul>
                <p className="mt-3 text-gray-700">
                  Ce programme est indicatif et peut être adapté selon vos préférences,
                  la circulation et les horaires de visite de la mosquée Hassan II.
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

