import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Taxi Aéroport Marrakech | Transfert Privé Hôtel & Riad",
  description: "Réservez votre taxi de l'aéroport Marrakech Menara vers votre hôtel. Service privé, ponctuel et confortable à prix fixe. Réservation immédiate en ligne.",
  alternates: { canonical: "https://luxurylinestravel.com/taxi-aeroport" },
};

export default function TaxiAeroport() {
  const whatsappNumber = "212708894866";
  const whatsappMessage = encodeURIComponent(
    "Bonjour, je souhaite réserver un transfert aéroport."
  );
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Banner Section */}
      <section className="relative h-[50vh] min-h-[400px] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/aeroport.jpg"
            alt="Aéroport Marrakech Menara"
            fill
            className="object-cover"
            priority
            quality={90}
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        <div className="relative z-10 h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="max-w-3xl">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-4">
                Taxi Aéroport Marrakech
              </h1>
              <div className="flex items-center gap-2 text-white/90">
                <a href="/" className="hover:text-white transition-colors">Home</a>
                <span>&gt;</span>
                <span>Taxi Aéroport Marrakech</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          {/* Main Heading */}
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Taxi transfert aéroport Marrakech – Réservation taxi privé en ligne.
            <span className="block w-24 h-1 bg-yellow-600 mt-3"></span>
          </h2>

          {/* First Paragraph */}
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            Assurez-vous votre transfert en <strong className="font-semibold text-gray-900">taxi aéroport Marrakech</strong> sans problèmes avec notre agence de taxi Transport touristique à Marrakech porte à porte de l'aéroport Marrakech Menara à votre hôtel ou riad.
          </p>

          {/* Second Paragraph */}
          <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            Tous les véhicules sont entièrement homologués et assurés et disposent de tous les équipements nécessaires pour voyager dans n'importe quelle partie du Maroc, quelles que soient les conditions météorologiques, y compris des supports supplémentaires pour les équipements sportifs et autres. Sur demande pour les vôtres.
          </p>

          {/* Subheading */}
          <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            A propos de nous Véhicules pour le transfert aéroport Marrakech.
          </h3>

          {/* Third Paragraph */}
          <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            Les véhicules sont propres à l'intérieur et à l'extérieur, nos chauffeurs sont toujours bien habillés et toujours attentifs à nos clients. Ils parlent anglais. Ils vous accueillent avec un badge, vous aident à porter vos bagages et à arriver à l'hôtel.
          </p>

          {/* List Items */}
          <ul className="space-y-4 mb-8">
            <li className="flex items-start gap-3">
              <span className="text-yellow-600 font-bold text-xl">&gt;</span>
              <p className="text-lg text-gray-700 leading-relaxed">
                Réservez dès aujourd'hui votre <strong className="font-semibold text-gray-900">taxi aéroport Marrakech</strong> et profitez de prix avantageux pour votre prochain voyage de luxe.
              </p>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-yellow-600 font-bold text-xl">&gt;</span>
              <p className="text-lg text-gray-700 leading-relaxed">
                Le service de Transport Touristique de <strong className="font-semibold text-gray-900">Luxury Lines Travel</strong>, créé dans le but d'assurer l'arrivée et le départ des clients à l'aéroport de Marrakech. Notre motivation première est la qualité de nos services et la confiance de nos clients.
              </p>
            </li>
          </ul>
        </div>
      </section>

      {/* Tarifs Banner */}
      <section className="bg-gray-800 text-white py-6 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-base sm:text-lg text-center md:text-left">
              Tarifs Transfert Aéroport Marrakech Moins Cher faites votre réservation en ligne dès aujourd'hui et profitez de votre prochain voyage dans le luxe
            </p>
            <button className="bg-yellow-600 hover:bg-yellow-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors whitespace-nowrap">
              Contactez-nous &gt;
            </button>
          </div>
        </div>
      </section>

      {/* Two Column Content Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Column: Marrakech Airport Taxi Services */}
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Réserver taxi aéroport Marrakech facilement en ligne
              </h2>

              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Réservez votre taxi aéroport Marrakech à l'avance et évitez le stress ! Un chauffeur ponctuel, un service sécurisé et confortable, et surtout, pas de surprise au niveau du prix. Votre transfert aéroport Marrakech est garanti.
              </p>

              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Réservez en ligne en quelques clics, recevez une confirmation immédiate et des tarifs clairs. Que vous voyagiez seul, en couple, en famille ou en groupe, nous avons le véhicule adapté : berline, van ou minibus.
              </p>

              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
                Transfert aéroport Marrakech : confort et tranquillité dès votre arrivée
              </h3>

              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Le transfert aéroport Marrakech est la solution idéale pour les voyageurs qui recherchent un accueil personnalisé et un trajet sans stress jusqu'à leur hébergement. Un chauffeur professionnel, un véhicule climatisé, une aide pour vos bagages, et surtout, pas d'attente à l'aéroport.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed">
                Vous pouvez réserver un transfert aéroport Marrakech pour n'importe quelle heure d'arrivée, de jour comme de nuit. Nous garantissons un service ponctuel et de qualité, pour que vous puissiez profiter pleinement de votre séjour dès la première minute.
              </p>
            </div>

            {/* Right Column: Group Tourist Transport */}
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 uppercase">
                TRANSPORT TOURISTIQUE DE GROUPES
              </h2>

              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                <strong className="font-semibold text-gray-900">Luxury Lines Travel</strong> propose des services de transport touristique de groupes. Nous travaillons en étroite collaboration avec les voyagistes pour des solutions logistiques adaptées. Nous sommes disponibles pour tous types de transport, que ce soit pour un court ou long séjour (excursions Marrakech, sorties à la journée à Marrakech, sorties à la demi-journée, ou circuits de plusieurs jours au Maroc).
              </p>

              <div className="mb-6">
                <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                  Nos services incluent :
                </p>
                <ul className="list-disc list-inside space-y-2 text-lg text-gray-700 ml-4">
                  <li>Taxi transfert (aéroport Marrakech et gare)</li>
                  <li>Transfert quotidien vers les hôtels et riads</li>
                  <li>Accompagnement pour les visites touristiques</li>
                  <li>Transfert pour les soirées organisées (restaurant, fête...)</li>
                </ul>
              </div>

              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Les voyageurs bénéficient de trajets sécurisés et des meilleures conditions.
              </p>

              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Nos chauffeurs sont disponibles pour les groupes de jour comme de nuit, et nous proposons nos services aux agences de voyage, voyagistes et groupes professionnels pour des séminaires dans la région de Marrakech.
              </p>

              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Aux organisateurs de voyages, nous offrons une logistique précise et une ponctualité irréprochable. Choisir nos services, c'est garantir la satisfaction de vos passagers.
              </p>

              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                La satisfaction des passagers fait la réputation. Il est donc important de s'appuyer sur un prestataire de confiance pour tous vos déplacements.
              </p>

              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Nous mettons à votre disposition des sièges enfants pour tous les âges et une connexion Wi-Fi gratuite dans le salon.
              </p>

              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Indiquez votre riad et les dates de vol lors de la réservation, vous recevrez une confirmation immédiate et un bon d'échange pour le chauffeur.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed">
                Indiquez les coordonnées de votre Riad et de votre vol lors de la réservation, vous recevrez une confirmation instantanée et un bon pour le chauffeur.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}

