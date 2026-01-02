import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  title: "Excursion Désert Agafay Marrakech | Coucher de Soleil & Dîner",
  description: "Profitez d'une soirée inoubliable au désert d'Agafay. Coucher de soleil, balade à dos de chameau et dîner traditionnel sous les étoiles.",
  alternates: { canonical: "https://luxurylinestravel.com/excursion-agafay-desert-marrakech" },
};

export default function ExcursionAgafayDesertMarrakech() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Banner with Agafay Desert Background */}
      <section className="relative h-[50vh] min-h-[400px] overflow-hidden">
        {/* Background image désert Agafay */}
        <Image
          src="/DDDD.jpg"
          alt="Désert d'Agafay au coucher du soleil près de Marrakech"
          fill
          priority
          className="object-cover object-center md:object-[center_60%]"
        />
        {/* Overlay pour lisibilité du texte */}
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="max-w-3xl">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
                Excursion Agafay désert Marrakech
              </h1>
              <div className="flex items-center gap-2 text-white/90">
                <a href="/" className="hover:text-white transition-colors">Home</a>
                <span>&gt;</span>
                <span>Excursion Agafay désert Marrakech</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Intro + Image Agafay désert */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start mb-16">
            <div className="text-[15px] leading-relaxed text-black space-y-4">
              <p>
                À seulement quelques kilomètres de Marrakech, le <strong>désert d’Agafay</strong>
                offre un paysage minéral unique fait de collines rocheuses, de lumières dorées et
                d’horizons à perte de vue. C’est l’endroit idéal pour vivre une véritable
                expérience désertique sans parcourir de longues heures de route.
              </p>
              <p>
                Cette excursion vous permet de profiter d’un <strong>coucher de soleil
                  inoubliable</strong> sur le désert, d’une balade à dos de chameau ou en quad
                (en option) et d’un dîner convivial dans un camp soigneusement sélectionné,
                avec musique d’ambiance et ciel étoilé.
              </p>
              <p>
                Votre chauffeur privé vient vous chercher à Marrakech et vous accompagne jusqu’au
                désert d’Agafay, puis reste à votre disposition pour le retour en soirée. Tout est
                organisé pour que vous profitiez pleinement de l’atmosphère magique du désert, en
                couple, en famille ou entre amis.
              </p>

              <div className="mt-6 space-y-2">
                <p className="font-semibold text-red-700">• Disponibilité :</p>
                <p>Tous les jours de l’année.</p>

                <p className="font-semibold text-red-700 mt-3">• Départ :</p>
                <p>
                  Départ de Marrakech dans l’après‑midi (heure ajustable selon la saison) pour
                  profiter du coucher de soleil, retour après le dîner.
                </p>

                <p className="font-semibold text-red-700 mt-3">• Durée :</p>
                <p>Demi‑journée / soirée.</p>
              </div>

              <div className="mt-6 space-y-2">
                <p className="font-semibold">Inclus dans le prix :</p>
                <ul className="list-disc list-inside space-y-1">
                  <li>Transport privé aller‑retour depuis votre hébergement à Marrakech.</li>
                  <li>Véhicule climatisé avec chauffeur bilingue.</li>
                  <li>Dîner dans un camp du désert (selon formule choisie).</li>
                  <li>Assurance responsabilité civile.</li>
                </ul>
              </div>

              <div className="mt-4 space-y-2">
                <p className="font-semibold">Non compris :</p>
                <ul className="list-disc list-inside space-y-1">
                  <li>Balade en dromadaire, quad ou buggy (réservable en option).</li>
                  <li>Boissons et dépenses personnelles.</li>
                  <li>Pourboires aux guides et au personnel du camp (facultatifs).</li>
                </ul>
              </div>

              <div className="mt-4 space-y-2">
                <p className="font-semibold">Conseils pratiques :</p>
                <p>
                  Prévoyez une veste ou un pull pour la soirée (les températures baissent après le
                  coucher du soleil), des chaussures fermées et confortables, ainsi qu’un appareil
                  photo pour immortaliser les paysages.
                </p>
              </div>
            </div>

            <div className="flex justify-center lg:justify-end">
              <div className="relative w-full max-w-xl aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="/SSSS.jpg"
                  alt="Camp dans le désert d'Agafay au coucher du soleil"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Présentation professionnelle désert Agafay */}
          <section className="mt-10 bg-gray-50 border border-gray-200 rounded-2xl p-8 sm:p-10 lg:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
              <div className="space-y-4 text-black text-[15px] leading-relaxed">
                <h2 className="text-3xl font-bold mb-2">
                  Une soirée d’exception aux portes de Marrakech
                </h2>
                <p>
                  L’<strong>excursion Agafay désert Marrakech</strong> est pensée pour offrir une
                  expérience immersive : route confortable, accueil chaleureux au camp, coucher de
                  soleil sur les collines désertiques et dîner sous les étoiles avec ambiance
                  traditionnelle.
                </p>
                <p>
                  Avec <strong>Luxury Lines Travel</strong>, vous bénéficiez d’une organisation
                  professionnelle et flexible : possibilité de personnaliser les activités
                  (dromadaire, quad, buggy), privatisation partielle ou totale d’un espace et
                  adaptation aux besoins des couples, familles ou groupes.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                  <div className="space-y-1">
                    <p className="font-semibold">• Idéal en fin de journée</p>
                    <p>Parfait pour admirer le coucher de soleil et profiter de la fraîcheur du soir.</p>
                  </div>
                  <div className="space-y-1">
                    <p className="font-semibold">• Adapté à tous les profils</p>
                    <p>Couples, familles, groupes d’amis ou événements d’entreprise.</p>
                  </div>
                  <div className="space-y-1">
                    <p className="font-semibold">• Activités modulables</p>
                    <p>Balades à dos de chameau, quads, buggys, animations musicales, etc.</p>
                  </div>
                  <div className="space-y-1">
                    <p className="font-semibold">• Confort & sécurité</p>
                    <p>Transferts fiables, camps partenaires vérifiés et équipes expérimentées.</p>
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
                <h3 className="text-xl font-semibold">Exemple de déroulé de la soirée</h3>
                <ul className="space-y-1">
                  <li>
                    <strong>15h30 – 17h00 :</strong> Prise en charge à votre hébergement à
                    Marrakech et route vers le désert d’Agafay.
                  </li>
                  <li>
                    <strong>Fin d’après‑midi :</strong> Arrivée au camp, accueil avec thé à la
                    menthe, temps libre et préparation pour les activités choisies.
                  </li>
                  <li>
                    <strong>Coucher de soleil :</strong> Balade en dromadaire ou moment de détente
                    face aux collines désertiques.
                  </li>
                  <li>
                    <strong>Soirée :</strong> Dîner traditionnel (souvent accompagné de musique ou
                    d’animations selon le camp).
                  </li>
                  <li>
                    <strong>Fin de soirée :</strong> Retour vers Marrakech avec arrivée estimée en
                    fin de soirée.
                  </li>
                </ul>
                <p className="mt-3 text-gray-700">
                  Ce programme est indicatif et peut être adapté en fonction du camp choisi, de la
                  saison et de vos préférences (horaire, activités, niveau de confort).
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

