import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  title: "Excursion Ouarzazate & Aït Ben Haddou | Porte du Désert",
  description: "Découvrez le ksar d'Aït Ben Haddou (UNESCO) et Ouarzazate. Traversez le Haut Atlas par le col de Tizi n'Tichka pour une journée d'histoire et de paysages.",
  alternates: { canonical: "https://luxurylinestravel.com/excursion-ouarzazate-ait-ben-haddou" },
};

export default function ExcursionOuarzazateAitBenHaddou() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Banner with Ouarzazate Background */}
      <section className="relative h-[50vh] min-h-[400px] overflow-hidden">
        {/* Background image Ouarzazate & Aït Ben Haddou */}
        <Image
          src="/ourz.jpg"
          alt="Kasbahs d'Aït Ben Haddou près de Ouarzazate au coucher du soleil"
          fill
          priority
          className="object-cover object-center"
        />
        {/* Overlay pour lisibilité du texte */}
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="max-w-3xl">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
                Excursion Ouarzazate et Aït Ben Haddou
              </h1>
              <div className="flex items-center gap-2 text-white/90">
                <a href="/" className="hover:text-white transition-colors">Home</a>
                <span>&gt;</span>
                <span>Excursion Ouarzazate et Aït Ben Haddou</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Intro + Image Ouarzazate */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start mb-16">
            <div className="text-[15px] leading-relaxed text-black space-y-4">
              <p>
                En franchissant le col de <strong>Tizi n’Tichka</strong> et les sommets du Haut
                Atlas, vous rejoignez la région de <strong>Ouarzazate</strong>, porte du désert et
                décor de nombreux films internationaux. Les paysages alternent villages berbères,
                vallées verdoyantes et plateaux arides aux couleurs ocre.
              </p>
              <p>
                L’un des moments forts de la journée est la visite du célèbre ksar
                d’<strong>Aït Ben Haddou</strong>, classé au patrimoine mondial de l’UNESCO. Ce
                village fortifié en pisé, avec ses ruelles étroites et ses kasbahs superposées,
                offre une vue imprenable sur l’oued et les palmeraies environnantes.
              </p>
              <p>
                Votre chauffeur-guide vous accompagne pour vous expliquer l’histoire des kasbahs,
                l’importance de la région dans le cinéma marocain et vous indiquer les meilleurs
                points de vue pour vos photos. Le temps libre sur place permet de flâner dans le
                ksar, de rencontrer les artisans locaux ou de déguster un thé à la menthe en
                terrasse.
              </p>

              <div className="mt-6 space-y-2">
                <p className="font-semibold text-red-700">• Disponibilité :</p>
                <p>Tous les jours de l’année.</p>

                <p className="font-semibold text-red-700 mt-3">• Départ :</p>
                <p>
                  Départ le matin de Marrakech (entre 7h00 et 7h30), retour estimé en soirée.
                </p>

                <p className="font-semibold text-red-700 mt-3">• Durée :</p>
                <p>Journée complète.</p>
              </div>

              <div className="mt-6 space-y-2">
                <p className="font-semibold">Inclus dans le prix :</p>
                <ul className="list-disc list-inside space-y-1">
                  <li>Transport privé en 4x4 ou minibus climatisé avec chauffeur bilingue.</li>
                  <li>Prise en charge et retour à votre hébergement à Marrakech.</li>
                  <li>Carburant, péages et assurance responsabilité civile.</li>
                </ul>
              </div>

              <div className="mt-4 space-y-2">
                <p className="font-semibold">Non compris :</p>
                <ul className="list-disc list-inside space-y-1">
                  <li>Déjeuner et boissons.</li>
                  <li>Droits d’entrée éventuels dans les kasbahs ou sites visités.</li>
                  <li>Guide local sur le site d’Aït Ben Haddou (facultatif).</li>
                </ul>
              </div>

              <div className="mt-4 space-y-2">
                <p className="font-semibold">Conseils pratiques :</p>
                <p>
                  Prévoyez des chaussures confortables pour marcher sur les pentes du ksar, une
                  tenue légère mais couvrante pour le soleil, une casquette, des lunettes de
                  soleil et de l’eau, surtout en été.
                </p>
              </div>
            </div>

            <div className="flex justify-center lg:justify-end">
              <div className="relative w-full max-w-xl aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="/ouarzazat.jpg"
                  alt="Ksar d'Aït Ben Haddou près de Ouarzazate"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Présentation professionnelle Ouarzazate & Aït Ben Haddou */}
          <section className="mt-10 bg-gray-50 border border-gray-200 rounded-2xl p-8 sm:p-10 lg:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
              <div className="space-y-4 text-black text-[15px] leading-relaxed">
                <h2 className="text-3xl font-bold mb-2">
                  Entre kasbahs, cinéma et paysages du Haut Atlas
                </h2>
                <p>
                  Cette excursion à <strong>Ouarzazate et Aït Ben Haddou</strong> permet de
                  découvrir un Maroc plus sauvage et authentique, loin de l’agitation des grandes
                  villes. Les kasbahs en terre, les palmeraies et les montagnes offrent un décor
                  unique, souvent utilisé comme toile de fond pour de grandes productions
                  cinématographiques.
                </p>
                <p>
                  Avec <strong>Luxury Lines Travel</strong>, vous profitez d’un trajet confortable
                  et sécurisé, d’horaires adaptés et d’un accompagnement personnalisé pour
                  organiser au mieux vos arrêts photos, vos pauses et votre visite du site
                  d’Aït Ben Haddou.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                  <div className="space-y-1">
                    <p className="font-semibold">• Pour les amoureux de paysages</p>
                    <p>Idéal pour les photographes, les passionnés de nature et de culture.</p>
                  </div>
                  <div className="space-y-1">
                    <p className="font-semibold">• Programme modulable</p>
                    <p>
                      Possibilité d’ajuster le temps passé à Ouarzazate, Aït Ben Haddou ou dans
                      les villages alentours.
                    </p>
                  </div>
                  <div className="space-y-1">
                    <p className="font-semibold">• Décor de cinéma</p>
                    <p>Région connue pour ses studios de tournage et ses paysages mythiques.</p>
                  </div>
                  <div className="space-y-1">
                    <p className="font-semibold">• Confort & sécurité</p>
                    <p>Véhicules récents, chauffeurs expérimentés et assistance pendant la journée.</p>
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
                    <strong>07h00 – 07h30 :</strong> Prise en charge à votre hôtel ou riad à
                    Marrakech et départ vers le col de Tizi n’Tichka.
                  </li>
                  <li>
                    <strong>Matin :</strong> Route panoramique dans le Haut Atlas avec arrêts
                    photos aux plus beaux points de vue.
                  </li>
                  <li>
                    <strong>Fin de matinée :</strong> Arrivée dans la région de Ouarzazate et
                    continuation vers Aït Ben Haddou, visite libre ou guidée du ksar.
                  </li>
                  <li>
                    <strong>Déjeuner :</strong> Repas dans un restaurant local avec vue sur la
                    vallée ou le ksar.
                  </li>
                  <li>
                    <strong>Après‑midi :</strong> Possibilité de passage par Ouarzazate (studio de
                    cinéma, kasbah de Taourirt de l’extérieur, etc.) selon le temps disponible.
                  </li>
                  <li>
                    <strong>Fin de journée :</strong> Retour vers Marrakech avec arrivée estimée
                    en début de soirée.
                  </li>
                </ul>
                <p className="mt-3 text-gray-700">
                  Ce programme est indicatif et peut varier selon la saison, la circulation dans le
                  col de Tizi n’Tichka et vos préférences personnelles.
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

