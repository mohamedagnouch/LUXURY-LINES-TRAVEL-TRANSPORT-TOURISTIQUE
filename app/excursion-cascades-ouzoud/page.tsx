import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  title: "Excursion Cascades d'Ouzoud | Nature & Singes Sauvages",
  description: "Visitez les plus hautes cascades du Maroc au départ de Marrakech. Profitez de la nature, voyez les singes magots et faites une balade en bateau.",
  alternates: { canonical: "https://luxurylinestravel.com/excursion-cascades-ouzoud" },
};

export default function ExcursionOuzoud() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Banner with Ouzoud Background */}
      <section className="relative h-[50vh] min-h-[400px] overflow-hidden">
        {/* Background image Cascades d'Ouzoud */}
        <Image
          src="/99.jpg"
          alt="Barques et cascades d'Ouzoud"
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
                Excursions cascades d'Ouzoud
              </h1>
              <div className="flex items-center gap-2 text-white/90">
                <a href="/" className="hover:text-white transition-colors">Home</a>
                <span>&gt;</span>
                <span>Excursions cascades d'Ouzoud</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Intro + Image Ouzoud */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start mb-16">
            <div className="text-[15px] leading-relaxed text-black space-y-4">
              <p>
                Situées à environ 150 km de Marrakech, les <strong>cascades d’Ouzoud</strong> sont
                parmi les plus spectaculaires du Maroc. Hautes d’une centaine de mètres, elles
                s’écoulent en plusieurs paliers dans une vallée verdoyante où oliviers, figuiers
                et vergers côtoient les falaises ocre.
              </p>
              <p>
                Après votre départ de Marrakech, vous traversez des paysages de plaines, de villages
                et de montagnes avant d’arriver au site. Une balade guidée vous permet de
                descendre vers le pied des cascades, d’emprunter les sentiers ombragés et
                d’observer, avec un peu de chance, les singes magots qui vivent dans la région.
              </p>
              <p>
                Sur place, vous pouvez profiter d’un <strong>déjeuner dans un restaurant</strong>
                avec vue directe sur les chutes, ou embarquer sur une barque décorée pour vous
                approcher du rideau d’eau et prendre des photos inoubliables.
              </p>

              <div className="mt-6 space-y-2">
                <p className="font-semibold text-red-700">• Disponibilité :</p>
                <p>Tous les jours de l’année.</p>

                <p className="font-semibold text-red-700 mt-3">• Départ :</p>
                <p>Le matin à 8h00–8h30 depuis Marrakech, retour estimé vers 18h00–19h00.</p>

                <p className="font-semibold text-red-700 mt-3">• Durée :</p>
                <p>Journée complète.</p>
              </div>

              <div className="mt-6 space-y-2">
                <p className="font-semibold">Inclus dans le prix :</p>
                <ul className="list-disc list-inside space-y-1">
                  <li>Transport en 4x4 ou minibus climatisé avec chauffeur bilingue.</li>
                  <li>Prise en charge à votre hébergement à Marrakech.</li>
                  <li>Assurance responsabilité civile.</li>
                </ul>
              </div>

              <div className="mt-4 space-y-2">
                <p className="font-semibold">Non compris :</p>
                <ul className="list-disc list-inside space-y-1">
                  <li>Déjeuner et boissons.</li>
                  <li>Balade en barque au pied des cascades (facultative, à régler sur place).</li>
                  <li>Guide local (facultatif).</li>
                </ul>
              </div>

              <div className="mt-4 space-y-2">
                <p className="font-semibold">Conseils pratiques :</p>
                <p>
                  Prévoyez des chaussures adaptées à la marche, une tenue légère en été mais une
                  veste pour le retour en soirée, ainsi qu’une protection solaire. Pensez aussi à
                  emporter une serviette si vous souhaitez vous rafraîchir près des cascades.
                </p>
              </div>
            </div>

            <div className="flex justify-center lg:justify-end">
              <div className="relative w-full max-w-xl aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="/ozzod.jpg"
                  alt="Cascades d'Ouzoud avec barques décorées"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Présentation professionnelle Ouzoud */}
          <section className="mt-10 bg-gray-50 border border-gray-200 rounded-2xl p-8 sm:p-10 lg:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
              <div className="space-y-4 text-black text-[15px] leading-relaxed">
                <h2 className="text-3xl font-bold mb-2">
                  Une journée inoubliable aux célèbres cascades d’Ouzoud
                </h2>
                <p>
                  Cette excursion est idéale pour combiner <strong>découverte naturelle,
                    fraîcheur et dépaysement</strong>. Entre les sentiers bordés d’oliviers, les
                  points de vue sur les chutes et les terrasses surplombant la vallée, chaque
                  moment de la journée offre un panorama différent sur le site.
                </p>
                <p>
                  Avec <strong>Luxury Lines Travel</strong>, vous bénéficiez d’un
                  accompagnement professionnel : trajets confortables, horaires adaptés et
                  recommandations personnalisées pour profiter pleinement du site (meilleurs
                  points de vue, restaurants, possibilités de balade).
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                  <div className="space-y-1">
                    <p className="font-semibold">• Pour tous les publics</p>
                    <p>Couples, familles, groupes d’amis ou sorties d’entreprise.</p>
                  </div>
                  <div className="space-y-1">
                    <p className="font-semibold">• Programme modulable</p>
                    <p>Possibilité de privilégier la randonnée, la détente ou la navigation en barque.</p>
                  </div>
                  <div className="space-y-1">
                    <p className="font-semibold">• Cadre exceptionnel</p>
                    <p>Un des sites naturels les plus photographiés du Maroc.</p>
                  </div>
                  <div className="space-y-1">
                    <p className="font-semibold">• Confort & sécurité</p>
                    <p>Véhicules récents, suivi de votre dossier et assistance pendant l’excursion.</p>
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
                  <li><strong>08h00 – 08h30 :</strong> Prise en charge à votre hôtel ou riad à Marrakech.</li>
                  <li><strong>Matin :</strong> Route vers Ouzoud avec arrêts photos en chemin.</li>
                  <li><strong>Fin de matinée :</strong> Balade guidée autour des cascades et descente vers le pied des chutes.</li>
                  <li><strong>Déjeuner :</strong> Repas dans un restaurant avec vue sur les cascades.</li>
                  <li><strong>Après‑midi :</strong> Temps libre, possibilité de balade en barque ou de baignade.</li>
                  <li><strong>Fin de journée :</strong> Retour vers Marrakech avec arrivée estimée en début de soirée.</li>
                </ul>
                <p className="mt-3 text-gray-700">
                  Ce programme est indicatif et peut être adapté en fonction de la saison, de la
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

