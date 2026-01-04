import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  title: "Excursion Imlil & Vallée de l'Atlas | Au pied du Toubkal",
  description: "Partez à la découverte d'Imlil, le village aux mille vergers au pied du mont Toubkal. Randonnée en montagne, déjeuner berbère et paysages grandioses.",
  alternates: { canonical: "https://luxurylinestravel.com/excursion-imlil-vallee-atlas" },
};

export default function ExcursionImlilValleeAtlas() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Banner with Imlil Background */}
      <section className="relative h-[50vh] min-h-[400px] overflow-hidden">
        {/* Background image Imlil */}
        <Image
          src="/imlilhaut.jpg"
          alt="Village d'Imlil et vallée de l'Atlas"
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
                Excursion Imlil et vallée de l'Atlas
              </h1>
              <div className="flex items-center gap-2 text-white/90">
                <a href="/" className="hover:text-white transition-colors">Home</a>
                <span>&gt;</span>
                <span>Excursion Imlil</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Intro + Image Imlil */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start mb-16">
            <div className="text-[15px] leading-relaxed text-black space-y-4">
              <p>
                Situé au pied du <strong>mont Toubkal</strong>, plus haut sommet d’Afrique du Nord,
                le village d’Imlil est le point de départ incontournable pour explorer la haute
                vallée de l’Atlas. Cette excursion vous permet de découvrir des paysages de
                montagne spectaculaires, des villages accrochés aux pentes et le quotidien des
                familles berbères.
              </p>
              <p>
                Après votre départ de Marrakech, vous traversez des plaines et des vallées
                verdoyantes avant d’atteindre Imlil. Sur place, une balade à pied est organisée à
                votre rythme à travers les vergers, les cultures en terrasses et les hameaux
                traditionnels, accompagnée d’un guide local qui vous présente l’histoire de la
                région et ses coutumes.
              </p>
              <p>
                Un <strong>déjeuner typique</strong> peut être prévu chez l’habitant ou dans une
                petite auberge avec vue sur les montagnes, l’occasion de partager un moment
                convivial autour d’un tajine, de salades marocaines et du traditionnel thé à la
                menthe.
              </p>

              <div className="mt-6 space-y-2">
                <p className="font-semibold text-red-700">• Disponibilité :</p>
                <p>Tous les jours de l’année, selon la météo en montagne.</p>

                <p className="font-semibold text-red-700 mt-3">• Départ :</p>
                <p>Le matin à 9h00 depuis Marrakech, retour estimé vers 17h00.</p>

                <p className="font-semibold text-red-700 mt-3">• Durée :</p>
                <p>1 journée complète.</p>
              </div>

              <div className="mt-6 space-y-2">
                <p className="font-semibold">Inclus dans le prix :</p>
                <ul className="list-disc list-inside space-y-1">
                  <li>Transport en 4x4 ou minibus climatisé avec chauffeur bilingue.</li>
                  <li>Guide local à Imlil (français / anglais).</li>
                  <li>Assurance responsabilité civile.</li>
                </ul>
              </div>

              <div className="mt-4 space-y-2">
                <p className="font-semibold">Non compris :</p>
                <ul className="list-disc list-inside space-y-1">
                  <li>Déjeuner et boissons.</li>
                  <li>Dépenses personnelles et pourboires.</li>
                </ul>
              </div>

              <div className="mt-4 space-y-2">
                <p className="font-semibold">Conseils pratiques :</p>
                <p>
                  Prévoyez des chaussures de marche confortables, une veste chaude en hiver, une
                  protection solaire (chapeau, lunettes, crème) et une bouteille d’eau. Le climat
                  peut être plus frais qu’à Marrakech, surtout en soirée.
                </p>
              </div>
            </div>

            <div className="flex justify-center lg:justify-end">
              <div className="relative w-full max-w-xl aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="/imlil1.jpg"
                  alt="Paysages montagneux autour du village d'Imlil"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Présentation professionnelle Imlil */}
          <section className="mt-10 bg-gray-50 border border-gray-200 rounded-2xl p-8 sm:p-10 lg:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
              <div className="space-y-4 text-black text-[15px] leading-relaxed">
                <h2 className="text-3xl font-bold mb-2">
                  Imlil, porte d’entrée idéale vers la haute montagne
                </h2>
                <p>
                  Que vous soyez randonneur débutant ou marcheur expérimenté, Imlil offre une
                  multitude de sentiers adaptés à tous les niveaux. Cette journée peut être
                  organisée comme une simple promenade d’initiation ou comme une étape plus sportive
                  pour préparer une ascension du Toubkal.
                </p>
                <p>
                  Avec <strong>Luxury Lines Travel</strong>, vous bénéficiez d’un accompagnement
                  sérieux : chauffeurs habitués aux routes de montagne, guides sélectionnés pour
                  leur connaissance du terrain et une logistique pensée pour votre confort et votre
                  sécurité.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                  <div className="space-y-1">
                    <p className="font-semibold">• Adapté à tous les profils</p>
                    <p>Couples, familles avec enfants, groupes d’amis ou séminaires d’entreprise.</p>
                  </div>
                  <div className="space-y-1">
                    <p className="font-semibold">• Flexibilité du programme</p>
                    <p>Possibilité de raccourcir ou prolonger la marche selon vos envies.</p>
                  </div>
                  <div className="space-y-1">
                    <p className="font-semibold">• Focus authenticité</p>
                    <p>Rencontres avec les habitants, visite de villages et découverte du mode de vie berbère.</p>
                  </div>
                  <div className="space-y-1">
                    <p className="font-semibold">• Confort & sécurité</p>
                    <p>Véhicules récents, assistance sur place et suivi de votre dossier.</p>
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
                  <li><strong>Matin :</strong> Route panoramique vers Imlil, pauses photos en chemin.</li>
                  <li><strong>Fin de matinée :</strong> Balade guidée dans les villages et la vallée.</li>
                  <li><strong>Déjeuner :</strong> Repas typique chez l’habitant ou en auberge locale.</li>
                  <li><strong>Après‑midi :</strong> Temps libre, possibilité de marche supplémentaire ou de détente.</li>
                  <li><strong>Fin de journée :</strong> Retour vers Marrakech avec arrivée estimée vers 17h00.</li>
                </ul>
                <p className="mt-3 text-gray-700">
                  Ce programme est donné à titre indicatif et peut être ajusté en fonction de la
                  saison, de la météo et de vos attentes.
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

