import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  title: "Excursion Agadir au départ de Marrakech | Plage & Marina",
  description: "Passez une journée détente à Agadir. Profitez de la plage de sable fin, visitez la marina moderne et admirez la vue panoramique depuis la kasbah Agadir Oufella.",
  alternates: { canonical: "https://luxurylinestravel.com/excursion-agadir" },
};

export default function ExcursionAgadir() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Banner with Agadir Background */}
      <section className="relative h-[50vh] min-h-[400px] overflow-hidden">
        {/* Background image Agadir */}
        <Image
          src="/222.jpg"
          alt="Marina d'Agadir avec bateaux et colline"
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
                Excursion Agadir
              </h1>
              <div className="flex items-center gap-2 text-white/90">
                <a href="/" className="hover:text-white transition-colors">Home</a>
                <span>&gt;</span>
                <span>Excursion Agadir</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Intro + Image Agadir */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start mb-16">
            <div className="text-[15px] leading-relaxed text-black space-y-4">
              <p>
                Nichée au bord de l’Atlantique, <strong>Agadir</strong> est une station balnéaire
                moderne réputée pour sa grande plage, sa marina, son ensoleillement quasi permanent
                et son ambiance détendue. C’est la destination idéale pour combiner découverte
                urbaine et moments de farniente au bord de la mer.
              </p>
              <p>
                Au départ de Marrakech, vous traversez les paysages variés du Souss pour rejoindre
                Agadir. Sur place, vous pourrez admirer la vue panoramique depuis la kasbah
                surplombant la ville, flâner le long de la corniche, découvrir la marina, le port
                de pêche ou encore visiter le souk El Had, l’un des plus grands marchés de la
                région.
              </p>
              <p>
                Votre chauffeur reste à votre disposition pour adapter la journée à vos envies :
                promenade en bord de mer, temps libre pour la baignade, déjeuner de poissons
                grillés, shopping au souk ou découverte des quartiers modernes de la ville.
              </p>

              <div className="mt-6 space-y-2">
                <p className="font-semibold text-red-700">• Disponibilité :</p>
                <p>Tous les jours de l’année.</p>

                <p className="font-semibold text-red-700 mt-3">• Départ :</p>
                <p>
                  Départ de Marrakech le matin (entre 7h30 et 8h00), retour estimé en début de
                  soirée.
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
                  <li>Activités optionnelles (jet‑ski, balade en bateau, etc.).</li>
                  <li>Guide local (facultatif).</li>
                </ul>
              </div>

              <div className="mt-4 space-y-2">
                <p className="font-semibold">Conseils pratiques :</p>
                <p>
                  Prévoyez maillot de bain, serviette, protection solaire (chapeau, lunettes,
                  crème) et des chaussures confortables pour marcher sur la corniche ou au souk.
                </p>
              </div>
            </div>

            <div className="flex justify-center lg:justify-end">
              <div className="relative w-full max-w-xl aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="/agadir.jpg"
                  alt="Marina d'Agadir et front de mer"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Présentation professionnelle Agadir */}
          <section className="mt-10 bg-gray-50 border border-gray-200 rounded-2xl p-8 sm:p-10 lg:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
              <div className="space-y-4 text-black text-[15px] leading-relaxed">
                <h2 className="text-3xl font-bold mb-2">
                  Une journée balnéaire entre plage, marina et kasbah
                </h2>
                <p>
                  L’excursion à <strong>Agadir</strong> est idéale pour ceux qui recherchent une
                  journée de détente au bord de l’océan, tout en découvrant une ville moderne et
                  dynamique. Entre la longue plage, la corniche animée et les cafés en front de
                  mer, chacun peut trouver son rythme.
                </p>
                <p>
                  Avec <strong>Luxury Lines Travel</strong>, vous profitez d’un trajet confortable,
                  d’un accompagnement professionnel et d’un programme flexible qui s’adapte à vos
                  attentes : plus de temps à la plage, au souk ou sur les hauteurs de la kasbah.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                  <div className="space-y-1">
                    <p className="font-semibold">• Pour les amateurs de mer</p>
                    <p>Parfait pour se baigner, bronzer ou se promener en bord de plage.</p>
                  </div>
                  <div className="space-y-1">
                    <p className="font-semibold">• Programme modulable</p>
                    <p>
                      Possibilité de combiner visite de la ville, souk, marina et temps libre.
                    </p>
                  </div>
                  <div className="space-y-1">
                    <p className="font-semibold">• Ambiance moderne</p>
                    <p>
                      Hôtels, restaurants, cafés et infrastructures balnéaires de qualité.
                    </p>
                  </div>
                  <div className="space-y-1">
                    <p className="font-semibold">• Confort & sécurité</p>
                    <p>Véhicules récents, chauffeurs expérimentés et assistance.</p>
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
                    Marrakech et départ vers Agadir.
                  </li>
                  <li>
                    <strong>Matin :</strong> Arrivée à Agadir, montée possible à la kasbah pour une
                    vue panoramique sur la baie.
                  </li>
                  <li>
                    <strong>Fin de matinée :</strong> Promenade sur la corniche, découverte de la
                    marina et du front de mer.
                  </li>
                  <li>
                    <strong>Déjeuner :</strong> Repas libre dans un restaurant en bord de mer ou au
                    port.
                  </li>
                  <li>
                    <strong>Après‑midi :</strong> Temps libre pour la plage, les activités
                    nautiques ou la visite du souk El Had.
                  </li>
                  <li>
                    <strong>Fin de journée :</strong> Retour vers Marrakech avec arrivée estimée en
                    début de soirée.
                  </li>
                </ul>
                <p className="mt-3 text-gray-700">
                  Ce programme est indicatif et peut être ajusté en fonction de la saison, de la
                  circulation et de vos préférences personnelles.
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

