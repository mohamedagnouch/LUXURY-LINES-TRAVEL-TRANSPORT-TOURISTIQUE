import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  title: "Excursion Vallée de l'Ourika | Cascades & Villages Berbères",
  description: "Découvrez la magnifique vallée de l'Ourika au départ de Marrakech. Randonnée aux cascades de Setti Fatma, déjeuner au bord de l'eau et immersion en pays berbère.",
  alternates: { canonical: "https://luxurylinestravel.com/excursion-vallee-ourika" },
};

export default function ExcursionOurika() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Banner with Ourika Background */}
      <section className="relative h-[50vh] min-h-[400px] overflow-hidden">
        {/* Background image Ourika */}
        <Image
          src="/backourika.jpg"
          alt="Rivière et restaurants au bord de l'eau dans la vallée de l'Ourika"
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
                Excursion la vallée de l'Ourika
              </h1>
              <div className="flex items-center gap-2 text-white/90">
                <a href="/" className="hover:text-white transition-colors">Home</a>
                <span>&gt;</span>
                <span>Excursion Vallée de l'Ourika</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Intro + Image Ourika */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start mb-16">
            <div className="text-[15px] leading-relaxed text-black space-y-4">
              <p>
                À moins d’une heure de route de Marrakech, la <strong>vallée de l’Ourika</strong>
                offre un véritable bol d’air frais au cœur du Haut Atlas. Entre rivières,
                cascades, villages berbères et terrasses au bord de l’eau, c’est l’excursion
                idéale pour ceux qui souhaitent s’évader de la ville sans faire de longs trajets.
              </p>
              <p>
                Votre journée débute par un trajet panoramique le long de la vallée, ponctué de
                pauses photos dans les villages et les vergers. Arrivés près de Setti-Fatma, vous
                pouvez, si vous le souhaitez, effectuer une <strong>petite randonnée vers les
                  cascades</strong> accompagné d’un guide local, ou simplement profiter des cafés
                et restaurants installés au bord de la rivière.
              </p>
              <p>
                Le déjeuner se prend généralement dans un <strong>restaurant traditionnel</strong>
                les pieds dans l’eau, où vous pourrez déguster tajines, grillades et salades
                marocaines dans un cadre unique. L’après‑midi est consacrée à la détente, à la
                visite d’un jardin ou à la découverte de l’artisanat local (huile d’argan,
                produits naturels, poterie, etc.).
              </p>

              <div className="mt-6 space-y-2">
                <p className="font-semibold text-red-700">• Disponibilité :</p>
                <p>Tous les jours de l’année, avec une période particulièrement agréable au printemps et en été.</p>

                <p className="font-semibold text-red-700 mt-3">• Départ :</p>
                <p>Le matin à 9h00 depuis Marrakech, retour estimé vers 17h00.</p>

                <p className="font-semibold text-red-700 mt-3">• Durée :</p>
                <p>1 journée complète.</p>
              </div>

              <div className="mt-6 space-y-2">
                <p className="font-semibold">Inclus dans le prix :</p>
                <ul className="list-disc list-inside space-y-1">
                  <li>Transport en 4x4 ou minibus climatisé avec chauffeur bilingue.</li>
                  <li>Assurance responsabilité civile.</li>
                  <li>Prise en charge à votre hébergement à Marrakech.</li>
                </ul>
              </div>

              <div className="mt-4 space-y-2">
                <p className="font-semibold">Non compris :</p>
                <ul className="list-disc list-inside space-y-1">
                  <li>Déjeuner, boissons et dépenses personnelles.</li>
                  <li>Guide local pour la montée aux cascades (facultatif, à régler sur place).</li>
                </ul>
              </div>

              <div className="mt-4 space-y-2">
                <p className="font-semibold">Conseils pratiques :</p>
                <p>
                  Prévoyez des chaussures fermées (surtout si vous montez vers les cascades), une
                  tenue confortable, une protection solaire et, selon la saison, une petite veste.
                  Il est recommandé d’emporter une serviette si vous souhaitez tremper les pieds
                  dans la rivière.
                </p>
              </div>
            </div>

            <div className="flex justify-center lg:justify-end">
              <div className="relative w-full max-w-xl aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="/ourika.jpg"
                  alt="Terrasses et restaurants au bord de la rivière dans la vallée de l'Ourika"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Présentation professionnelle Ourika */}
          <section className="mt-10 bg-gray-50 border border-gray-200 rounded-2xl p-8 sm:p-10 lg:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
              <div className="space-y-4 text-black text-[15px] leading-relaxed">
                <h2 className="text-3xl font-bold mb-2">
                  Une escapade nature et fraîcheur aux portes de Marrakech
                </h2>
                <p>
                  La vallée de l’Ourika est particulièrement appréciée des familles et des
                  groupes souhaitant combiner <strong>découverte, détente et convivialité</strong>.
                  Entre les terrasses au bord de l’eau, les potagers en terrasse et les villages
                  accrochés aux flancs de montagne, chaque arrêt est l’occasion de vivre une scène
                  de vie typiquement marocaine.
                </p>
                <p>
                  En choisissant <strong>Luxury Lines Travel</strong>, vous profitez d’une
                  organisation fluide : horaires adaptés, chauffeur expérimenté, trajets
                  optimisés et conseils personnalisés pour construire la journée qui vous
                  ressemble.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                  <div className="space-y-1">
                    <p className="font-semibold">• Idéal en famille</p>
                    <p>Enfants et adultes apprécient la rivière, les terrasses et les paysages.</p>
                  </div>
                  <div className="space-y-1">
                    <p className="font-semibold">• Programme modulable</p>
                    <p>Possibilité de privilégier la randonnée, la détente ou la découverte de l’artisanat.</p>
                  </div>
                  <div className="space-y-1">
                    <p className="font-semibold">• Authenticité préservée</p>
                    <p>Rencontres avec les habitants, visites de coopératives et produits locaux.</p>
                  </div>
                  <div className="space-y-1">
                    <p className="font-semibold">• Confort & sécurité</p>
                    <p>Véhicules récents, suivi de votre dossier et assistance pendant l’excursion.</p>
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
                  <li><strong>08h30 – 09h00 :</strong> Prise en charge à votre hôtel ou riad à Marrakech.</li>
                  <li><strong>Matin :</strong> Route vers la vallée de l’Ourika, arrêts photos dans les villages.</li>
                  <li><strong>Fin de matinée :</strong> Balade vers les cascades ou promenade au bord de la rivière.</li>
                  <li><strong>Déjeuner :</strong> Repas dans un restaurant traditionnel au bord de l’eau.</li>
                  <li><strong>Après‑midi :</strong> Visite d’une coopérative ou temps libre pour se détendre.</li>
                  <li><strong>Fin de journée :</strong> Retour vers Marrakech avec arrivée estimée vers 17h00.</li>
                </ul>
                <p className="mt-3 text-gray-700">
                  Ce programme est indicatif et peut être ajusté en fonction de la saison, de la
                  météo et de vos préférences.
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

