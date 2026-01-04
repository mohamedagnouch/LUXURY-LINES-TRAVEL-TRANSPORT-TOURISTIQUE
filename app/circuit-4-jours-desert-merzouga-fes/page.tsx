import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  title: "Circuit 4 Jours Désert Merzouga à Fès | Départ Marrakech",
  description: "Le circuit idéal reliant Marrakech à Fès via le désert de Merzouga. Traversez le Haut Atlas, les Gorges du Dadès et passez une nuit magique dans les dunes.",
  alternates: { canonical: "https://luxurylinestravel.com/circuit-4-jours-desert-merzouga-fes" },
};

export default function Circuit4JoursDesertMerzougaFes() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Banner with Fès Background */}
      <section className="relative h-[50vh] min-h-[400px] overflow-hidden">
        <Image
          src="/fes.jpg"
          alt="Circuit 4 Jours Désert de Merzouga à Fès"
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="max-w-3xl">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
                Circuit 4 Jours Désert de Merzouga à Fès
              </h1>
              <div className="flex items-center gap-2 text-white/90">
                <a href="/" className="hover:text-white transition-colors">Home</a>
                <span>&gt;</span>
                <span>Circuit 4 Jours Désert de Merzouga à Fès</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Intro Section */}
          <div className="mb-16">
            <h2 className="text-4xl font-bold text-black mb-6">
              De Marrakech aux dunes de Merzouga, arrivée à Fès en 4 jours
            </h2>
            <p className="text-lg text-black leading-relaxed mb-4">
              Un itinéraire complet qui relie Marrakech, le désert de Merzouga et l’arrivée à Fès.
              Quatre jours pour traverser l’Atlas, explorer les kasbahs, dormir au cœur des dunes
              et terminer dans la médina impériale de Fès.
            </p>
          </div>

          {/* Programme Jour par Jour */}
          <div className="space-y-12 mb-16">
            {/* Jour 1 */}
            <div className="bg-gray-50 border border-gray-200 rounded-2xl p-8">
              <h3 className="text-3xl font-bold text-black mb-4">
                Jour 1 : Marrakech - Ouarzazate
              </h3>
              <div className="text-[15px] leading-relaxed text-black space-y-4">
                <p>
                  Départ matinal de Marrakech. Traversée du <strong>Haut Atlas</strong> par le col
                  de <strong>Tizi n’Tichka</strong> (2260 m), arrêts photos sur les plus beaux
                  panoramas.
                </p>
                <p>
                  Visite de la <strong>Kasbah Ait Ben Haddou</strong>, classée UNESCO, puis route
                  vers <strong>Ouarzazate</strong>, le « Hollywood de l’Afrique ». Découverte de la
                  <strong> Kasbah Taourirt</strong> (extérieur) et des studios de cinéma (en option).
                  Nuit à Ouarzazate.
                </p>
              </div>
            </div>

            {/* Jour 2 */}
            <div className="bg-gray-50 border border-gray-200 rounded-2xl p-8">
              <h3 className="text-3xl font-bold text-black mb-4">
                Jour 2 : Ouarzazate - Skoura - Kelaat M’Gouna - Vallée du Dadès
              </h3>
              <div className="text-[15px] leading-relaxed text-black space-y-4">
                <p>
                  Passage par la <strong>palmeraie de Skoura</strong> et la <strong>Kasbah Amridil</strong>.
                  Route des mille kasbahs jusqu’à <strong>Kelaat M’Gouna</strong>, capitale de la
                  <strong> Vallée des Roses</strong> (boutiques et produits à base de rose).
                </p>
                <p>
                  Arrivée à <strong>Boumalne Dadès</strong>. Installation et nuit dans la vallée du
                  Dadès.
                </p>
              </div>
            </div>

            {/* Jour 3 */}
            <div className="bg-gray-50 border border-gray-200 rounded-2xl p-8">
              <h3 className="text-3xl font-bold text-black mb-4">
                Jour 3 : Gorges du Dadès - Gorges de Toudgha - Merzouga (nuit en camp)
              </h3>
              <div className="text-[15px] leading-relaxed text-black space-y-4">
                <p>
                  Découverte des <strong>Gorges du Dadès</strong> puis des <strong>Gorges de
                    Toudgha</strong>. Arrêts photos et balade libre parmi les falaises impressionnantes.
                </p>
                <p>
                  Route vers <strong>Erfoud</strong> (palmeraies, fossiles, dattes). Arrivée à
                  <strong> Merzouga</strong> en fin d’après-midi. <strong>Balade à dos de chameau</strong>
                  au coucher du soleil pour rejoindre votre camp au cœur des dunes.
                </p>
                <p>
                  Dîner traditionnel berbère, musique autour du feu et nuit en camp nomade sous les
                  étoiles.
                </p>
              </div>
            </div>

            {/* Jour 4 */}
            <div className="bg-gray-50 border border-gray-200 rounded-2xl p-8">
              <h3 className="text-3xl font-bold text-black mb-4">
                Jour 4 : Merzouga - Vallée du Ziz - Moyen Atlas - Fès
              </h3>
              <div className="text-[15px] leading-relaxed text-black space-y-4">
                <p>
                  Réveil matinal pour le <strong>lever de soleil</strong> sur les dunes. Retour au camp
                  et petit déjeuner.
                </p>
                <p>
                  Départ vers <strong>Erfoud</strong> puis traversée de la <strong>Vallée du Ziz</strong>,
                  richissime en palmeraies. Passage par <strong>Errachidia</strong>, <strong>Midelt</strong>
                  et le <strong>Moyen Atlas</strong> (forêts de cèdres, possibilités d’apercevoir des
                  singes magots).
                </p>
                <p>
                  Arrivée à <strong>Fès</strong> en fin d’après-midi/soirée. Fin du circuit et de nos
                  services.
                </p>
              </div>
            </div>
          </div>

          {/* Informations Pratiques */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 mb-16">
            <div className="text-[15px] leading-relaxed text-black space-y-6">
              <div>
                <p className="font-semibold text-red-700 mb-2">• Disponibilité :</p>
                <p>Tous les jours de l'année.</p>
              </div>

              <div>
                <p className="font-semibold text-red-700 mb-2">• Départ :</p>
                <p>Le matin à 8h30 depuis Marrakech.</p>
              </div>

              <div>
                <p className="font-semibold text-red-700 mb-2">• Durée :</p>
                <p>4 jours complets, arrivée à Fès.</p>
              </div>

              <div className="mt-6">
                <p className="font-semibold mb-3">Inclus dans le prix :</p>
                <ul className="list-disc list-inside space-y-2">
                  <li>Transport privé en 4×4 ou minibus climatisé avec chauffeur</li>
                  <li>Nuits dans des hôtels/riads selon l’itinéraire</li>
                  <li>Petit déjeuner</li>
                  <li>Dîner</li>
                  <li>Carburant</li>
                  <li>Balade à dos de chameau</li>
                  <li>Une nuit dans un camp dans le désert</li>
                  <li>Assurance responsabilité civile</li>
                </ul>
              </div>

              <div className="mt-6">
                <p className="font-semibold mb-3">Non inclus :</p>
                <ul className="list-disc list-inside space-y-2">
                  <li>Déjeuners et boissons</li>
                  <li>Pourboires et dépenses personnelles</li>
                </ul>
              </div>
            </div>

            <div className="flex justify-center lg:justify-end">
              <div className="relative w-full max-w-xl aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="/fes.jpg"
                  alt="Vue de Fès - fin du circuit"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Présentation Professionnelle */}
          <section className="mt-10 bg-gray-50 border border-gray-200 rounded-2xl p-8 sm:p-10 lg:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
              <div className="space-y-4 text-black text-[15px] leading-relaxed">
                <h2 className="text-3xl font-bold mb-2">
                  Un itinéraire du sud marocain jusqu’à Fès
                </h2>
                <p>
                  Ce circuit combine les paysages désertiques de <strong>Merzouga</strong> et la
                  richesse culturelle de <strong>Fès</strong>. Vous traversez l’Atlas, les palmeraies
                  du Ziz, les kasbahs historiques et terminez dans l’une des plus belles médinas du
                  Maroc.
                </p>
                <p>
                  Avec <strong>Luxury Lines Travel</strong>, vous profitez d’un accompagnement
                  professionnel : trajets confortables, chauffeurs expérimentés, hébergements
                  sélectionnés et programme modulable selon vos attentes.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm mt-6">
                  <div className="space-y-1">
                    <p className="font-semibold">• Expérience saharienne</p>
                    <p>Nuit en camp, coucher/lever de soleil, balade à dos de chameau.</p>
                  </div>
                  <div className="space-y-1">
                    <p className="font-semibold">• Patrimoine & culture</p>
                    <p>Kasbahs UNESCO, vallées, gorges et arrivée dans la médina de Fès.</p>
                  </div>
                  <div className="space-y-1">
                    <p className="font-semibold">• Itinéraire varié</p>
                    <p>Atlas, palmeraies du Ziz, Moyen Atlas et forêts de cèdres.</p>
                  </div>
                  <div className="space-y-1">
                    <p className="font-semibold">• Confort & sécurité</p>
                    <p>Véhicules récents, assurance incluse, accompagnement dédié.</p>
                  </div>
                </div>

                <div className="mt-6 flex flex-wrap gap-3 items-center">
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
                <h3 className="text-xl font-semibold">Points forts du circuit</h3>
                <ul className="space-y-2">
                  <li><strong>• Ait Ben Haddou :</strong> Kasbah UNESCO et décor de cinéma</li>
                  <li><strong>• Vallée des Roses :</strong> Produits et paysages parfumés</li>
                  <li><strong>• Gorges du Dadès & Toudgha :</strong> Falaises impressionnantes</li>
                  <li><strong>• Merzouga :</strong> Nuit en camp, chameaux, dunes du Sahara</li>
                  <li><strong>• Vallée du Ziz :</strong> Palmeraies spectaculaires</li>
                  <li><strong>• Fès :</strong> Arrivée dans la médina impériale</li>
                </ul>
                <p className="mt-4 text-gray-700">
                  Programme ajustable selon la saison, la météo et vos préférences. Contactez-nous
                  pour personnaliser les étapes et le niveau de confort.
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




