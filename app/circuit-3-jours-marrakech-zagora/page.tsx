import type { Metadata } from "next";
import Image from "next/image";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "Circuit 3 Jours Marrakech - Zagora - M'Hamid | Désert du Sahara",
  description: "Partez pour une aventure de 3 jours dans le désert de Zagora. Montagnes de l'Atlas, Ait Ben Haddou et nuit sous les étoiles dans un bivouac nomade.",
  alternates: { canonical: "https://luxurylinestravel.com/circuit-3-jours-marrakech-zagora" },
};

export default function Circuit3JoursMarrakechZagora() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Banner with Desert Background */}
      <section className="relative h-[50vh] min-h-[400px] overflow-hidden">
        <Image
          src="/42.jpg"
          alt="Circuit 3 Jours Marrakech à Zagora"
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="max-w-3xl">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
                Circuit 3 Jours Marrakech - Zagora
              </h1>
              <div className="flex items-center gap-2 text-white/90">
                <a href="/" className="hover:text-white transition-colors">Home</a>
                <span>&gt;</span>
                <span>Circuit 3 Jours Marrakech à Zagora</span>
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
              Découvrez le désert de Zagora en 3 jours
            </h2>
            <p className="text-lg text-black leading-relaxed mb-4">
              Partez pour une aventure de 3 jours à travers les paysages époustouflants du sud marocain,
              de Marrakech aux dunes de Zagora et M'Hamid. Ce circuit vous emmène à travers les montagnes
              de l'Atlas, les kasbahs historiques et le désert du Sahara pour une expérience complète de
              la diversité marocaine.
            </p>
          </div>

          {/* Programme Jour par Jour */}
          <div className="space-y-12 mb-16">
            {/* Jour 1 */}
            <div className="bg-gray-50 border border-gray-200 rounded-2xl p-8">
              <h3 className="text-3xl font-bold text-black mb-4">
                Jour 1 : Marrakech - Tizi N'Tichka - Ouarzazate - Zagora
              </h3>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                <div className="text-[15px] leading-relaxed text-black space-y-4">
                  <p>
                    Départ de <strong>Marrakech</strong> en direction d'Ouarzazate. Vous traverserez le
                    <strong> Haut Atlas</strong> via le col de <strong>Tizi n'Tichka</strong> (2260 mètres
                    d'altitude), offrant des vues panoramiques spectaculaires sur les montagnes.
                  </p>
                  <p>
                    Arrêt à la <strong>Kasbah Ait Benhaddou</strong>, un ancien village fortifié classé au
                    <strong> patrimoine mondial de l'UNESCO</strong>. Cette kasbah est l'une des plus belles
                    et des mieux préservées du Maroc, ayant servi de décor à de nombreux films hollywoodiens.
                  </p>
                  <p>
                    Continuation vers <strong>Ouarzazate</strong> pour le déjeuner. Visite de la
                    <strong> Kasbah Taourirte</strong> et du centre cinématographique, surnommé
                    "Hollywood de l'Afrique" pour ses studios de cinéma.
                  </p>
                  <p>
                    Dans l'après-midi, route vers <strong>Zagora</strong> et ses dunes. En fin de journée,
                    vous profiterez d'une <strong>balade à dos de chameau</strong> au coucher du soleil,
                    suivie d'un <strong>dîner dans les dunes</strong> et d'une <strong>nuit dans un bivouac
                      nomade</strong> sous les étoiles.
                  </p>
                </div>
                <div className="flex justify-center lg:justify-end">
                  <div className="relative w-full max-w-xl aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
                    <Image
                      src="/44.jpg"
                      alt="Dunes de Zagora - Circuit 3 jours"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Jour 2 */}
            <div className="bg-gray-50 border border-gray-200 rounded-2xl p-8">
              <h3 className="text-3xl font-bold text-black mb-4">
                Jour 2 : Zagora - Vallée daraa - Tamgroute - M'Hamid El Ghizlane
              </h3>
              <div className="text-[15px] leading-relaxed text-black space-y-4">
                <p>
                  Après le petit déjeuner, départ vers le village de <strong>Tamegroute</strong>, situé à
                  18 km de Zagora. Ce village est célèbre pour sa <strong>kasbah souterraine</strong> et
                  l'une des <strong>plus anciennes bibliothèques coraniques du Maroc</strong>, abritant
                  des manuscrits rares et précieux.
                </p>
                <p>
                  Continuation vers <strong>M'Hamid El Ghizlane</strong>, la dernière ville avant le désert.
                  Vous arriverez aux <strong>dunes de Erg Lihoudi</strong>, où vous profiterez d'une
                  <strong> balade à dos de chameau d'une heure</strong> pour admirer le coucher du soleil
                  sur les dunes dorées.
                </p>
                <p>
                  Soirée magique avec <strong>dîner traditionnel berbère</strong> et <strong>nuit dans un
                    bivouac</strong> au cœur du désert, sous un ciel étoilé.
                </p>
              </div>
            </div>

            {/* Jour 3 */}
            <div className="bg-gray-50 border border-gray-200 rounded-2xl p-8">
              <h3 className="text-3xl font-bold text-black mb-4">
                Jour 3 : M'Hamid El Ghizlane - Taznakht - Ait Benhaddou - Marrakech
              </h3>
              <div className="text-[15px] leading-relaxed text-black space-y-4">
                <p>
                  Après le petit-déjeuner, vous quittez le désert en passant par le village de
                  <strong> Taznakht</strong>, connu pour ses <strong>tapis berbères</strong> traditionnels.
                  Vous pourrez découvrir l'artisanat local et les techniques de tissage ancestrales.
                </p>
                <p>
                  Pause déjeuner dans le village d'<strong>Ait Benhaddou</strong> avant de continuer vers
                  Marrakech. Vous traverserez à nouveau les montagnes de l'Atlas, profitant une dernière
                  fois des paysages montagneux.
                </p>
                <p>
                  Arrivée à <strong>Marrakech</strong> en fin de journée. <strong>Fin du circuit Marrakech
                    Zagora de 3 jours</strong> et fin de nos services.
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
                <p>Tous les jours à 8h30 depuis Marrakech.</p>
              </div>

              <div>
                <p className="font-semibold text-red-700 mb-2">• Durée :</p>
                <p>3 jours complets.</p>
              </div>

              <div className="mt-6">
                <p className="font-semibold mb-3">Inclus dans le prix :</p>
                <ul className="list-disc list-inside space-y-2">
                  <li>Véhicule : 4×4 ou minibus climatisé</li>
                  <li>Nuits dans des hôtels</li>
                  <li>Petit déjeuner</li>
                  <li>Carburant</li>
                  <li>Dîner</li>
                  <li>Balade à dos de chameau</li>
                  <li>Une nuit dans un bivouac dans le désert</li>
                  <li>Assurance responsabilité civile</li>
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
                  src="/42.jpg"
                  alt="Campement dans le désert - Circuit Zagora"
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
                  Un circuit complet à travers le désert marocain
                </h2>
                <p>
                  Ce circuit de 3 jours vous permet de découvrir la <strong>beauté du désert marocain</strong> :
                  des montagnes de l'Atlas aux dunes de Zagora et M'Hamid, en passant par les kasbahs
                  historiques et les villages berbères. Chaque jour apporte son lot de découvertes et d'émotions.
                </p>
                <p>
                  Avec <strong>Luxury Lines Travel</strong>, vous bénéficiez d'un accompagnement professionnel :
                  véhicules confortables et climatisés, chauffeurs expérimentés, hébergements sélectionnés et
                  organisation soignée de chaque étape du voyage.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm mt-6">
                  <div className="space-y-1">
                    <p className="font-semibold">• Expérience désertique</p>
                    <p>Nuits en bivouac au cœur des dunes de Zagora et M'Hamid.</p>
                  </div>
                  <div className="space-y-1">
                    <p className="font-semibold">• Patrimoine culturel</p>
                    <p>Visite de kasbahs UNESCO et bibliothèque coranique de Tamegroute.</p>
                  </div>
                  <div className="space-y-1">
                    <p className="font-semibold">• Balades chameau</p>
                    <p>Couchers de soleil magiques depuis les dunes.</p>
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
                  <li><strong>• Kasbah Ait Benhaddou :</strong> Site UNESCO et décor de films célèbres</li>
                  <li><strong>• Ouarzazate :</strong> Hollywood de l'Afrique et kasbah Taourirte</li>
                  <li><strong>• Tamegroute :</strong> Bibliothèque coranique et kasbah souterraine</li>
                  <li><strong>• Zagora :</strong> Balade chameau et nuit en bivouac</li>
                  <li><strong>• M'Hamid :</strong> Dunes de Erg Lihoudi et coucher de soleil</li>
                  <li><strong>• Taznakht :</strong> Découverte de l'artisanat des tapis berbères</li>
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




