import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  title: "Excursion 3 Vallées de l'Atlas & Villages Berbères | Marrakech",
  description: "Explorez les vallées d'Asni, Ourika et Sidi Fares. Découvrez l'authenticité des villages berbères du Haut Atlas lors d'une excursion d'une journée.",
  alternates: { canonical: "https://luxurylinestravel.com/excursion-3-vallees-marrakech" },
};

export default function Excursion3ValleesMarrakech() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Banner with Atlas Background */}
      <section className="relative h-[50vh] min-h-[400px] overflow-hidden">
        {/* Background image */}
        <Image
          src="/vally.jpg"
          alt="Paysage verdoyant des vallées de l'Atlas"
          fill
          priority
          className="object-cover object-center"
        />
        {/* Overlay pour la lisibilité du texte */}
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="max-w-3xl">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-4">
                Excursion Villages berbères et 3 vallées de l'Atlas
              </h1>
              <div className="flex items-center gap-2 text-white/90">
                <a href="/" className="hover:text-white transition-colors">Home</a>
                <span>&gt;</span>
                <span>Excursion 3 Vallées</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Intro + Image 3 Vallées */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start mb-16">
            <div className="text-[15px] leading-relaxed text-black space-y-4">
              <p>
                Vous aimez découvrir les montagnes et faire des randonnées de plusieurs jours en
                pleine nature ? Marrakech est le point de départ idéal pour de nombreuses{" "}
                <strong>randonnées en montagne</strong> qui vous mèneront dans les coins les plus
                reculés de l’Atlas, avec des vues imprenables sur cette chaîne mythique et la
                découverte de <strong>villages berbères authentiques</strong>.
              </p>
              <p>
                L’excursion commence par un trajet en voiture qui permet de voir les collines autour
                du lac Lalla Takerkoust, puis de traverser les vallées de Moulay Brahim et
                d’Asni. Arrivés dans la région, vous débutez votre promenade à pied à travers les
                cultures en terrasses, les vergers et les villages perchés, en compagnie d’un guide
                local qui vous fera partager l’histoire et les traditions des habitants.
              </p>
              <p>
                Vous profiterez ensuite d’une visite de la <strong>vallée d’Asni</strong>, l’un des
                paysages les plus préservés de la région, avant de rejoindre un village berbère où un
                déjeuner typique peut être organisé chez l’habitant ou dans un petit restaurant
                local.
              </p>

              <div className="mt-6 space-y-2">
                <p className="font-semibold text-red-700">• Disponibilité :</p>
                <p>Tous les jours de l’année.</p>

                <p className="font-semibold text-red-700 mt-3">• Départ :</p>
                <p>Le matin à 9h00 depuis Marrakech, retour vers 17h00.</p>

                <p className="font-semibold text-red-700 mt-3">• Durée :</p>
                <p>1 journée complète.</p>
              </div>

              <div className="mt-6 space-y-2">
                <p className="font-semibold">Qu’est-ce qui est inclus dans le prix de l’activité ?</p>
                <ul className="list-disc list-inside space-y-1">
                  <li>Véhicule 4x4 ou minibus climatisé avec chauffeur bilingue.</li>
                  <li>Guide local bilingue (français, anglais).</li>
                  <li>Assurance responsabilité civile.</li>
                </ul>
              </div>

              <div className="mt-4 space-y-2">
                <p className="font-semibold">Prestations non comprises :</p>
                <ul className="list-disc list-inside space-y-1">
                  <li>Déjeuner et boissons.</li>
                  <li>Dépenses personnelles et pourboires.</li>
                </ul>
              </div>

              <div className="mt-4 space-y-2">
                <p className="font-semibold">Conseils pratiques :</p>
                <p>
                  Nous vous recommandons de porter des chaussures fermées, des vêtements souples et
                  confortables, une protection solaire et des vêtements chauds en hiver. N’oubliez
                  pas votre appareil photo pour immortaliser les paysages spectaculaires des 3
                  vallées de l’Atlas.
                </p>
              </div>
            </div>

            <div className="flex justify-center lg:justify-end">
              <div className="relative w-full max-w-xl aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="/valé.jpg"
                  alt="Villages berbères et vallées verdoyantes de l’Atlas"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Section présentation professionnelle 3 vallées */}
          <section className="mt-10 bg-gray-50 border border-gray-200 rounded-2xl p-8 sm:p-10 lg:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
              <div className="space-y-4 text-black text-[15px] leading-relaxed">
                <h2 className="text-3xl font-bold mb-2">
                  Une journée d’exception au cœur des 3 vallées de l’Atlas
                </h2>
                <p>
                  Cette excursion combine routes panoramiques, pauses photos, rencontres avec les
                  habitants et moments de détente dans un décor alpin unique au Maroc. Entre
                  villages suspendus, cultures en terrasses et sommets enneigés (en hiver), chaque
                  étape est pensée pour offrir un véritable dépaysement, tout en restant accessible
                  au départ de Marrakech.
                </p>
                <p>
                  En choisissant <strong>Luxury Lines Travel</strong>, vous bénéficiez d’une
                  organisation fluide : prise en charge à votre hébergement, itinéraire optimisé,
                  temps libre équilibré et accompagnement par des professionnels connaissant
                  parfaitement la région.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                  <div className="space-y-1">
                    <p className="font-semibold">• Itinéraire modulable</p>
                    <p>Arrêts possibles selon la météo, la saison et vos centres d’intérêt.</p>
                  </div>
                  <div className="space-y-1">
                    <p className="font-semibold">• Idéal en couple, famille ou groupe</p>
                    <p>Programme adapté aux enfants, adultes et sorties d’entreprise.</p>
                  </div>
                  <div className="space-y-1">
                    <p className="font-semibold">• Focus authenticité</p>
                    <p>Rencontres avec les habitants et découverte du mode de vie berbère.</p>
                  </div>
                  <div className="space-y-1">
                    <p className="font-semibold">• Confort & sécurité</p>
                    <p>Véhicules récents, chauffeurs expérimentés et assistance dédiée.</p>
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
                  <li><strong>08h30 – 09h00 :</strong> Prise en charge à votre hôtel ou riad à Marrakech.</li>
                  <li><strong>Matin :</strong> Route vers Lalla Takerkoust et Moulay Brahim, pauses photos, vue sur les sommets de l’Atlas.</li>
                  <li><strong>Fin de matinée :</strong> Balade à pied dans un village berbère et découverte des cultures en terrasses.</li>
                  <li><strong>Déjeuner :</strong> Repas typique possible chez l’habitant ou dans un petit restaurant local.</li>
                  <li><strong>Après‑midi :</strong> Temps libre pour profiter du paysage, boire un thé à la menthe ou visiter un autre village.</li>
                  <li><strong>Fin de journée :</strong> Retour vers Marrakech avec arrivée estimée vers 17h00.</li>
                </ul>
                <p className="mt-3 text-gray-700">
                  Cet emploi du temps est donné à titre indicatif et peut être ajusté en fonction de
                  la saison, des conditions météo et de vos préférences.
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

