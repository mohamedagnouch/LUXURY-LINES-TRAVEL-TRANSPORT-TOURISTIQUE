import Image from "next/image";
import Link from "next/link";

/**
 * EXEMPLE DE PAGE AVEC CSS ORGANISÉ
 * 
 * Cette page montre comment utiliser les nouvelles classes CSS
 * au lieu des classes Tailwind inline répétitives.
 * 
 * Comparez avec l'ancienne version pour voir les améliorations!
 */

export default function ExampleRefactoredPage() {
    const whatsappNumber = "212708894866";
    const whatsappMessage = encodeURIComponent(
        "Bonjour, je souhaite réserver un service de transport touristique."
    );
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

    return (
        <>
            {/* ========================================
          HERO SECTION - Version refactorisée
          ======================================== */}
            <section className="relative h-[70vh] min-h-[500px] overflow-hidden">
                {/* Background Image */}
                <div className="absolute inset-0">
                    <Image
                        src="/marrakech-hero.jpg"
                        alt="Vue panoramique de Marrakech"
                        fill
                        className="object-cover"
                        priority
                        quality={90}
                    />
                    {/* Utilisation de la classe hero-overlay au lieu de classes inline */}
                    <div className="hero-overlay absolute inset-0"></div>
                </div>

                {/* Text Overlay */}
                <div className="relative z-10 h-full flex items-center">
                    <div className="container-custom w-full">
                        <div className="max-w-2xl">
                            {/* Utilisation de la classe hero-title */}
                            <h1 className="hero-title">
                                Transport Touristique
                                <br />
                                de Luxe
                            </h1>

                            <p className="text-responsive text-white/95 mb-4">
                                Voyagez confortablement lors de votre prochain excursion ou séjour avec nos services de transport premium.
                            </p>

                            <p className="text-base sm:text-lg text-white/90 mb-8">
                                Réservez aujourd'hui votre transfert aéroport avec prix compétitif
                            </p>

                            {/* Utilisation des classes btn */}
                            <div className="flex flex-col sm:flex-row gap-4">
                                <a
                                    href={whatsappUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn btn-primary"
                                >
                                    Réserver maintenant
                                </a>
                                <Link href="/taxi-aeroport" className="btn btn-secondary">
                                    En savoir plus
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ========================================
          SECTION POURQUOI NOUS CHOISIR
          ======================================== */}
            <section className="section-padding bg-white">
                <div className="container-custom max-w-6xl">
                    {/* Titre avec séparateur */}
                    <div className="text-center mb-8">
                        <h2 className="section-title">
                            Transport touristique Marrakech Maroc
                        </h2>
                        <div className="title-divider mb-6"></div>
                    </div>

                    <h3 className="text-xl sm:text-2xl text-center text-gray-700 mb-8 font-semibold">
                        Pourquoi choisir notre agence de transport Touristique à Luxury Lines Travel ?
                    </h3>

                    <p className="text-responsive text-gray-600 text-center max-w-4xl mx-auto mb-16">
                        <strong className="font-semibold text-gray-900">Luxury Lines Travel</strong> s'engage à offrir des services de transport touristique de qualité supérieure à travers le Maroc, incluant Marrakech, Casablanca et le désert du Sahara, garantissant des voyages confortables, sécurisés et mémorables.
                    </p>

                    {/* Grille de fonctionnalités avec classes réutilisables */}
                    <div className="grid-features">
                        {/* Feature 1 */}
                        <div className="card">
                            <div className="card-icon">
                                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4" />
                                </svg>
                            </div>
                            <h4 className="text-xl font-bold text-gray-900 mb-3">
                                Réservation en ligne facile
                                <span className="block w-16 h-1 bg-gradient-to-r from-yellow-500 to-yellow-600 mt-3 rounded-full"></span>
                            </h4>
                            <p className="text-gray-600 leading-relaxed">
                                Réservez votre transport touristique Marrakech en quelques clics grâce à notre plateforme intuitive. Plus besoin de vous déplacer ou de passer des appels interminables.
                            </p>
                        </div>

                        {/* Feature 2 */}
                        <div className="card">
                            <div className="card-icon">
                                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                            </div>
                            <h4 className="text-xl font-bold text-gray-900 mb-3">
                                Chauffeurs professionnels
                                <span className="block w-16 h-1 bg-gradient-to-r from-yellow-500 to-yellow-600 mt-3 rounded-full"></span>
                            </h4>
                            <p className="text-gray-600 leading-relaxed">
                                Nos chauffeurs de transport touristique Marrakech sont expérimentés, ponctuels et parlent plusieurs langues. Ils vous accueillent avec le sourire.
                            </p>
                        </div>

                        {/* Feature 3 */}
                        <div className="card">
                            <div className="card-icon">
                                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                                    <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1V5a1 1 0 00-1-1H3zM14 7a1 1 0 00-1 1v6.05A2.5 2.5 0 0115.95 16H17a1 1 0 001-1v-5a1 1 0 00-.293-.707l-2-2A1 1 0 0015 7h-1z" />
                                </svg>
                            </div>
                            <h4 className="text-xl font-bold text-gray-900 mb-3">
                                Vaste flotte de véhicules
                                <span className="block w-16 h-1 bg-gradient-to-r from-yellow-500 to-yellow-600 mt-3 rounded-full"></span>
                            </h4>
                            <p className="text-gray-600 leading-relaxed">
                                Nous proposons une large gamme de véhicules de luxe adaptés à tous vos besoins : berlines premium, minibus confortables, et véhicules tout-terrain.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ========================================
          SECTION EXCURSIONS
          ======================================== */}
            <section className="section-padding bg-white">
                <div className="container-custom">
                    <div className="text-center mb-12">
                        <h2 className="section-title">
                            Découvrez les excursions Marrakech Maroc
                        </h2>
                        <div className="title-divider mb-8"></div>
                    </div>

                    <p className="text-responsive text-gray-700 text-center mb-16 max-w-4xl mx-auto">
                        Découvrez Marrakech et ses environs en louant l'un de nos véhicules. Réservez une{" "}
                        <a href="#" className="text-yellow-600 hover:text-yellow-700 font-semibold">excursion Agafay</a>
                        {" "}ou une{" "}
                        <a href="#" className="text-yellow-600 hover:text-yellow-700 font-semibold">excursion Marrakech</a>.
                    </p>

                    {/* Grille d'excursions */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                        {/* Excursion 1 */}
                        <div className="excursion-card">
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
                                    Excursion vallée de l'Ourika
                                </h3>
                                <div className="flex justify-center mb-6">
                                    <div className="excursion-image">
                                        <Image
                                            src="/licensed-image.jpg"
                                            alt="Vallée de l'Ourika"
                                            fill
                                            className="object-cover"
                                            sizes="128px"
                                        />
                                    </div>
                                </div>
                                <p className="text-gray-600 text-center mb-6 leading-relaxed">
                                    La vallée de l'Ourika est une vallée du Haut Atlas marocain. C'est vraiment un lieu idéal pour une excursion d'une journée.
                                </p>
                                <a
                                    href={whatsappUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn btn-primary w-full"
                                >
                                    Contactez-nous
                                </a>
                            </div>
                        </div>

                        {/* Excursion 2 */}
                        <div className="excursion-card">
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
                                    Balade chameau Marrakech
                                </h3>
                                <div className="flex justify-center mb-6">
                                    <div className="excursion-image">
                                        <Image
                                            src="/licensed-image1.jpg"
                                            alt="Balade chameau Marrakech"
                                            fill
                                            className="object-cover"
                                            sizes="128px"
                                        />
                                    </div>
                                </div>
                                <p className="text-gray-600 text-center mb-6 leading-relaxed">
                                    En passant un bon moment devant des villas et des maisons berbères dans les alentours de palmeraie à dos de dromadaire.
                                </p>
                                <a
                                    href={whatsappUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn btn-primary w-full"
                                >
                                    Contactez-nous
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ========================================
          SECTION TÉMOIGNAGES
          ======================================== */}
            <section className="relative section-padding overflow-hidden">
                {/* Background Image */}
                <div className="absolute inset-0">
                    <Image
                        src="/unnamed2.jpg"
                        alt="Paysage désertique"
                        fill
                        className="object-cover"
                        quality={90}
                    />
                    <div className="absolute inset-0 bg-black/40"></div>
                </div>

                {/* Content */}
                <div className="relative z-10 container-custom max-w-4xl text-center">
                    <h2 className="hero-title mb-6">
                        Avis de nos clients
                        <span className="block w-24 h-1 bg-yellow-600 mx-auto mt-4"></span>
                    </h2>

                    {/* Testimonial avec classe personnalisée */}
                    <div className="testimonial-quote mt-12">
                        <div className="relative">
                            {/* Opening Quote */}
                            <div className="absolute -top-4 -left-4 sm:-left-8">
                                <svg className="quote-icon" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.996 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.984zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                                </svg>
                            </div>

                            {/* Testimonial Text */}
                            <p className="text-lg sm:text-xl lg:text-2xl text-white leading-relaxed px-8 sm:px-16 py-4">
                                Excellent service. Notre chauffeur nous attendait à l'arrivée et nous avons rapidement quitté Aéroport de Marrakech pour être déposés à notre Riad. Véhicule très confortable et propre avec beaucoup de place pour nos bagages.
                            </p>

                            {/* Closing Quote */}
                            <div className="absolute -bottom-4 -right-4 sm:-right-8">
                                <svg className="quote-icon transform rotate-180" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.996 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.984zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
