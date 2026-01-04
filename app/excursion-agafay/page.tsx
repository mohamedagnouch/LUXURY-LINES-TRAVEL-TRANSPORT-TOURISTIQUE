import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  title: "Excursion Désert Agafay Marrakech | Quad, Dromadaire & Dîner",
  description: "Vivez une excursion magique dans le désert d'Agafay. Balade en quad, buggy, dromadaire et dîner sous les étoiles aux portes de Marrakech.",
  alternates: { canonical: "https://luxurylinestravel.com/excursion-agafay" },
};

export default function ExcursionAgafay() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Banner with Agafay Background */}
      <section className="relative h-[60vh] min-h-[420px] overflow-hidden bg-[#cc6600]">
        {/* Background image très centrée */}
        <Image
          src="/AGAFAYEX.jpg"
          alt="Vue du désert d'Agafay"
          fill
          priority
          className="object-cover object-center md:object-[center_60%]"
        />
        {/* Overlay léger pour la lisibilité du texte */}
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="text-center">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-yellow-100 mb-4 drop-shadow-[0_0_20px_rgba(255,255,255,0.5)]">
                Excursion Agafay
              </h1>
              <div className="flex items-center justify-center gap-2 text-yellow-100/90">
                <a href="/" className="hover:text-white transition-colors">Home</a>
                <span>&gt;</span>
                <span>Excursion Agafay</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="mb-12">
            <h2 className="text-4xl sm:text-5xl font-bold text-black mb-6">
              Excursion désert Agafay depuis Marrakech
            </h2>
            <p className="text-lg text-black mb-4 leading-relaxed">
              À deux pas de Marrakech, plongez dans un monde de dunes dorées et d'horizons infinis. Vivez le frisson des balades en quad et en buggy, profitez d'une paisible randonnée à dos de chameau au coucher du soleil et terminez votre journée par un dîner magique sous les étoiles. Plus qu'une simple excursion, c'est une expérience inoubliable.
            </p>
            <p className="text-lg text-black">
              Si vous souhaitez réserver d'autres <a href="#" className="text-[#cc6600] hover:underline font-semibold">excursions</a> ou des circuits au Maroc, contactez notre partenaire <a href="#" className="text-[#cc6600] hover:underline font-semibold">Excursions Marrakech</a>.
            </p>
          </div>

          {/* Image Grid Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {/* Quad */}
            <div className="relative rounded-lg overflow-hidden h-64 group">
              {/* Background Image Quad */}
              <Image
                src="/unnamed1.jpg"
                alt="Excursion Quad dans le désert d'Agafay"
                fill
                priority
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              {/* Dark gradient overlay for readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
              {/* Bottom Left Label */}
              <div className="absolute bottom-0 left-0 p-4 z-10">
                <h3 className="text-white text-xl font-bold drop-shadow-md">Quad</h3>
              </div>
            </div>

            {/* Buggy */}
            <div className="relative rounded-lg overflow-hidden h-64 group">
              {/* Background Image Buggy */}
              <Image
                src="/buggy.jpg"
                alt="Excursion Buggy dans le désert d'Agafay"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              {/* Dark gradient overlay for readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
              {/* Bottom Left Label */}
              <div className="absolute bottom-0 left-0 p-4 z-10">
                <h3 className="text-white text-xl font-bold drop-shadow-md">Buggy</h3>
              </div>
            </div>

            {/* Dromadaire */}
            <div className="relative rounded-lg overflow-hidden h-64 group">
              {/* Background Image Dromadaire */}
              <Image
                src="/camel.jpg"
                alt="Balade en dromadaire dans le désert d'Agafay"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              {/* Dark gradient overlay for readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
              {/* Bottom Left Label */}
              <div className="absolute bottom-0 left-0 p-4 z-10">
                <h3 className="text-white text-xl font-bold drop-shadow-md">Dromadaire</h3>
              </div>
            </div>

            {/* Dîner-spectacle */}
            <div className="relative rounded-lg overflow-hidden h-64 group">
              {/* Background Image Dîner-spectacle */}
              <Image
                src="/lila.jpg"
                alt="Dîner-spectacle dans le désert d'Agafay"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              {/* Dark gradient overlay for readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
              {/* Bottom Left Label */}
              <div className="absolute bottom-0 left-0 p-4 z-10">
                <h3 className="text-white text-xl font-bold drop-shadow-md">Dîner-spectacle</h3>
              </div>
            </div>
          </div>

          {/* Features Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1: Expérience authentique */}
            <div className="text-center">
              <div className="mb-6 flex justify-center">
                <svg className="w-20 h-20 text-[#cc6600]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v18M12 3l8 8M12 3L4 11" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-black mb-4">
                Expérience authentique dans le désert
              </h3>
              <p className="text-black leading-relaxed">
                Plongez dans les paysages époustouflants du désert d'Agafay grâce à des aventures guidées par des experts, adaptées à vos envies.
              </p>
            </div>

            {/* Feature 2: Service et sécurité */}
            <div className="text-center">
              <div className="mb-6 flex justify-center">
                <svg className="w-20 h-20 text-[#cc6600]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                  <circle cx="12" cy="12" r="10" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-black mb-4">
                Service et sécurité haut de gamme
              </h3>
              <p className="text-black leading-relaxed">
                Nous mettons à votre disposition des quads, des buggys et des chameaux parfaitement entretenus, ainsi que des guides professionnels pour une expérience sûre et agréable.
              </p>
            </div>

            {/* Feature 3: Moments inoubliables */}
            <div className="text-center">
              <div className="mb-6 flex justify-center">
                <svg className="w-20 h-20 text-[#cc6600]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v18m-9-9h18" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 12h18M12 3v18" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-black mb-4">
                Moments inoubliables
              </h3>
              <p className="text-black leading-relaxed">
                Des balades palpitantes aux dîners paisibles au coucher du soleil, chaque expérience est conçue pour créer des souvenirs inoubliables.
              </p>
            </div>
          </div>

          {/* Agafay Professional Presentation */}
          <section className="mt-20 bg-gray-50 border border-gray-200 rounded-2xl p-8 sm:p-10 lg:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
              <div>
                <h3 className="text-3xl font-bold text-black mb-4">
                  Agafay, un désert d’exception aux portes de Marrakech
                </h3>
                <p className="text-black leading-relaxed mb-4">
                  Situé à seulement quelques kilomètres de Marrakech, le désert d’Agafay offre une
                  alternative idéale aux longs trajets vers le Sahara. Ses collines rocheuses, ses
                  lumières changeantes et ses vastes étendues offrent un cadre unique pour des
                  expériences haut de gamme, loin de l’agitation de la ville.
                </p>
                <p className="text-black leading-relaxed mb-4">
                  Avec Luxury Lines Travel, vous profitez d’une organisation professionnelle :
                  transferts confortables, activités encadrées par des équipes expérimentées et
                  partenaires locaux sélectionnés pour la qualité de leur accueil et de leurs
                  services. Chaque détail est pensé pour offrir à vos invités une expérience fluide,
                  élégante et parfaitement maîtrisée.
                </p>
                <p className="text-black leading-relaxed mb-6">
                  Que vous voyagiez en couple, en famille, entre amis ou dans le cadre d’un séminaire
                  d’entreprise, nos équipes bâtissent un programme sur mesure en fonction de votre
                  budget, de votre timing et de vos attentes (team building, soirée privée,
                  anniversaire, comité de direction, etc.).
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-black mb-6">
                  <div className="space-y-1">
                    <p className="font-semibold">• Accès rapide depuis Marrakech</p>
                    <p>Idéal pour une demi‑journée ou une journée complète d’évasion.</p>
                  </div>
                  <div className="space-y-1">
                    <p className="font-semibold">• Expériences sur mesure</p>
                    <p>Quads, buggys, dromadaires, dîners privés et soirées sous les étoiles.</p>
                  </div>
                  <div className="space-y-1">
                    <p className="font-semibold">• Confort & sécurité</p>
                    <p>Véhicules récents, encadrement professionnel et assistance dédiée.</p>
                  </div>
                  <div className="space-y-1">
                    <p className="font-semibold">• Partenaires sélectionnés</p>
                    <p>Camps et restaurants choisis pour leur sérieux et leur authenticité.</p>
                  </div>
                </div>
                <div className="mt-4 flex flex-wrap gap-3">
                  <a
                    href="https://wa.me/212708894866"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-[#cc6600] text-white text-sm font-semibold shadow-md hover:bg-[#b35600] transition-colors"
                  >
                    Demander un devis personnalisé
                  </a>
                  <p className="text-xs text-gray-600">
                    Réponse rapide de notre équipe commerciale pour toute demande de groupe ou individuelle.
                  </p>
                </div>
              </div>
              <div className="relative h-64 sm:h-80 lg:h-full min-h-[260px] rounded-2xl overflow-hidden">
                <Image
                  src="/agafay-desert.jpg"
                  alt="Paysage du désert d'Agafay au coucher du soleil"
                  fill
                  className="object-cover"
                />
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
