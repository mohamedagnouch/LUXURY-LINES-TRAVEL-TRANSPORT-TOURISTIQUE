import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  title: "Circuit 4 Jours Désert Merzouga | Départ Marrakech",
  description: "Découvrez le Sud du Maroc avec notre circuit de 4 jours vers le désert de Merzouga. Ait Ben Haddou, Gorges du Dadès et nuit en camp berbère.",
  alternates: { canonical: "https://luxurylinestravel.com/circuit-4-jours-desert-merzouga" },
};

export default function Circuit4JoursDesertMerzouga() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Banner with Desert Background */}
      <section className="relative h-[50vh] min-h-[400px] overflow-hidden">
        <Image
          src="/merzougaé.jpg"
          alt="Circuit 4 Jours Désert de Merzouga"
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="max-w-3xl">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
                Circuit 4 Jours Marrakech - Ouarzazate - Merzouga
              </h1>
              <div className="flex items-center gap-2 text-white/90">
                <a href="/" className="hover:text-white transition-colors">Home</a>
                <span>&gt;</span>
                <span>Circuit 4 Jours Désert de Merzouga</span>
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
              Découvrez le désert de Merzouga en 4 jours
            </h2>
            <p className="text-lg text-black leading-relaxed mb-4">
              Partez pour une aventure inoubliable de 4 jours à travers les paysages époustouflants du Maroc,
              de Marrakech aux dunes dorées de Merzouga. Ce circuit vous emmène à travers les montagnes de l'Atlas,
              les kasbahs historiques, les vallées verdoyantes et le désert du Sahara pour une expérience complète
              de la diversité marocaine.
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
                  Départ de Marrakech en direction d'Ouarzazate. Vous traverserez le <strong>Haut Atlas</strong>
                  via le col de <strong>Tizi n'Tichka</strong> (2260 mètres d'altitude), offrant des vues panoramiques
                  spectaculaires sur les montagnes.
                </p>
                <p>
                  Arrêt à la <strong>Kasbah Ait Ben Haddou</strong>, un ancien village fortifié classé au patrimoine
                  mondial de l'UNESCO. Cette kasbah est l'une des plus belles et des mieux préservées du Maroc,
                  ayant servi de décor à de nombreux films hollywoodiens.
                </p>
                <p>
                  Continuation vers <strong>Ouarzazate</strong>, surnommée "Hollywood de l'Afrique" pour ses studios
                  de cinéma. Visite de la <strong>Kasbah Taourirte</strong> et du centre cinématographique.
                  Nuit à Ouarzazate.
                </p>
              </div>
            </div>

            {/* Jour 2 */}
            <div className="bg-gray-50 border border-gray-200 rounded-2xl p-8">
              <h3 className="text-3xl font-bold text-black mb-4">
                Jour 2 : Ouarzazate - Klaat-megouna - Vallée du Dadès
              </h3>
              <div className="text-[15px] leading-relaxed text-black space-y-4">
                <p>
                  Après le petit déjeuner, départ vers la <strong>palmeraie de Skoura</strong>, une oasis verdoyante
                  au cœur d'un paysage aride. Passage par la <strong>Kasbah Amridil</strong>, l'une des plus belles
                  kasbahs de la région, où vous pourrez explorer son architecture traditionnelle berbère.
                </p>
                <p>
                  Continuation vers <strong>Klaat-megouna</strong>, la capitale de la <strong>Vallée des Roses</strong>.
                  Cette région est célèbre pour ses champs de roses et ses produits dérivés. Vous pourrez voir les
                  femmes vendre des produits à base de roses (eau de rose, huile, savons).
                </p>
                <p>
                  Arrivée à <strong>Boumalne Dadès</strong> pour la nuit, au cœur de la vallée du Dadès.
                </p>
              </div>
            </div>

            {/* Jour 3 */}
            <div className="bg-gray-50 border border-gray-200 rounded-2xl p-8">
              <h3 className="text-3xl font-bold text-black mb-4">
                Jour 3 : Gorges du Dadès - Gorges de Toudgha - Merzouga
              </h3>
              <div className="text-[15px] leading-relaxed text-black space-y-4">
                <p>
                  Visite des <strong>Gorges du Dadès</strong> et des <strong>Gorges de Toudgha</strong>, deux sites
                  naturels impressionnants où les falaises s'élèvent à plus de 300 mètres de hauteur. Arrêts photos
                  pour immortaliser ces paysages grandioses.
                </p>
                <p>
                  Continuation vers <strong>Erfoud</strong>, connue pour ses palmeraies de Tinjdad, son système
                  d'irrigation traditionnel, ses fossiles et ses dattes biologiques. Découverte de cette ville
                  aux portes du désert.
                </p>
                <p>
                  Arrivée à <strong>Merzouga</strong> en fin d'après-midi. Transfert en dromadaire vers un
                  <strong> camp nomade dans le désert du Sahara</strong>. Soirée magique avec dîner traditionnel
                  berbère, musique et danse autour du feu, sous un ciel étoilé. Nuit dans le camp au cœur des dunes.
                </p>
              </div>
            </div>

            {/* Jour 4 */}
            <div className="bg-gray-50 border border-gray-200 rounded-2xl p-8">
              <h3 className="text-3xl font-bold text-black mb-4">
                Jour 4 : Merzouga - Ouarzazate - Montagnes Atlas - Marrakech
              </h3>
              <div className="text-[15px] leading-relaxed text-black space-y-4">
                <p>
                  <strong>Lever tôt</strong> pour assister au lever du soleil depuis le sommet des dunes.
                  Les dromadaires et votre guide du désert vous emmèneront en aventure sur les dunes de sable,
                  offrant une excellente opportunité de prendre des photos du lever du soleil depuis le sommet des dunes.
                </p>
                <p>
                  Retour au camp pour le petit déjeuner, puis départ vers Marrakech. Vous traverserez à nouveau
                  <strong> Ouarzazate</strong> et les <strong>montagnes de l'Atlas</strong>, profitant une dernière
                  fois des paysages montagneux.
                </p>
                <p>
                  Arrivée à <strong>Marrakech</strong> en fin de journée. Fin du circuit 4 jours Marrakech-Merzouga
                  et fin de nos services.
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
                <p>4 jours complets.</p>
              </div>

              <div className="mt-6">
                <p className="font-semibold mb-3">Inclus dans le prix :</p>
                <ul className="list-disc list-inside space-y-2">
                  <li>Véhicule : 4×4 ou minibus climatisé avec chauffeur</li>
                  <li>Nuits dans des hôtels</li>
                  <li>Petit déjeuner</li>
                  <li>Carburant</li>
                  <li>Dîner</li>
                  <li>Balade à dos de chameau</li>
                  <li>Une nuit dans un camp dans le désert</li>
                  <li>Assurance contre les dommages en responsabilité civile</li>
                </ul>
              </div>

              <div className="mt-6">
                <p className="font-semibold mb-3">Non inclus dans le prix :</p>
                <ul className="list-disc list-inside space-y-2">
                  <li>Les repas et boissons (sauf petit déjeuner et dîner mentionnés)</li>
                  <li>Les pourboires et les extras</li>
                </ul>
              </div>
            </div>

            <div className="flex justify-center lg:justify-end">
              <div className="relative w-full max-w-xl aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="/merzouga.jpg"
                  alt="Kasbah Ait Ben Haddou - Circuit Merzouga"
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
                  Un circuit complet à travers les merveilles du Maroc
                </h2>
                <p>
                  Ce circuit de 4 jours vous permet de découvrir la <strong>diversité exceptionnelle du Maroc</strong> :
                  des montagnes de l'Atlas aux dunes du Sahara, en passant par les kasbahs historiques, les vallées
                  verdoyantes et les gorges spectaculaires. Chaque jour apporte son lot de découvertes et d'émotions.
                </p>
                <p>
                  Avec <strong>Luxury Lines Travel</strong>, vous bénéficiez d'un accompagnement professionnel :
                  véhicules confortables et climatisés, chauffeurs expérimentés, hébergements sélectionnés et
                  organisation soignée de chaque étape du voyage.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm mt-6">
                  <div className="space-y-1">
                    <p className="font-semibold">• Expérience désertique</p>
                    <p>Nuit dans un camp nomade au cœur des dunes de Merzouga.</p>
                  </div>
                  <div className="space-y-1">
                    <p className="font-semibold">• Patrimoine culturel</p>
                    <p>Visite de kasbahs classées UNESCO et sites historiques.</p>
                  </div>
                  <div className="space-y-1">
                    <p className="font-semibold">• Paysages variés</p>
                    <p>Montagnes, vallées, gorges et désert en un seul circuit.</p>
                  </div>
                  <div className="space-y-1">
                    <p className="font-semibold">• Confort & sécurité</p>
                    <p>Véhicules récents, hébergements de qualité et assurance incluse.</p>
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
                  <li><strong>• Kasbah Ait Ben Haddou :</strong> Site UNESCO et décor de films célèbres</li>
                  <li><strong>• Ouarzazate :</strong> Hollywood de l'Afrique et kasbah Taourirte</li>
                  <li><strong>• Vallée des Roses :</strong> Découverte de Klaat-megouna et ses produits</li>
                  <li><strong>• Gorges du Dadès et Toudgha :</strong> Sites naturels impressionnants</li>
                  <li><strong>• Merzouga :</strong> Nuit dans le désert du Sahara avec dromadaires</li>
                  <li><strong>• Lever de soleil :</strong> Expérience magique depuis les dunes</li>
                </ul>
                <p className="mt-4 text-gray-700">
                  Ce programme est indicatif et peut être adapté en fonction de la saison, de la météo
                  et de vos préférences. Contactez-nous pour personnaliser votre circuit.
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




