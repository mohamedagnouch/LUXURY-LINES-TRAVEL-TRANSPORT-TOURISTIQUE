import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-900 to-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-12">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-4 mb-6">
              <div className="text-4xl font-bold bg-gradient-to-br from-yellow-600 to-yellow-700 bg-clip-text text-transparent">
                <span>L</span>
                <span>L</span>
                <span>T</span>
              </div>
              <div className="flex flex-col">
                <h3 className="text-lg font-bold text-white">LUXURY LINES TRAVEL</h3>
                <p className="text-xs text-gray-400 font-medium">TRANSPORT TOURISTIQUE</p>
              </div>
            </div>
            <p className="text-sm text-gray-300 leading-relaxed">
              L&apos;agence de transport touristique <strong className="text-white">Luxury Lines Travel</strong> offre des services de transport de luxe, location voiture longue durée et taxi aéroport, répondant à toutes les exigences de manière sûre et fiable.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold mb-4 relative inline-block">
              Liens Rapides
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-gradient-to-r from-yellow-600 to-yellow-500 mt-2"></span>
            </h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-gray-300 hover:text-yellow-400 transition-colors duration-200 flex items-center gap-2 group">
                  <svg className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  <span>Accueil</span>
                </Link>
              </li>
              <li>
                <Link href="/taxi-aeroport" className="text-gray-300 hover:text-yellow-400 transition-colors duration-200 flex items-center gap-2 group">
                  <svg className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  <span>Taxi aéroport</span>
                </Link>
              </li>
              <li>
                <Link href="/excursion-agafay" className="text-gray-300 hover:text-yellow-400 transition-colors duration-200 flex items-center gap-2 group">
                  <svg className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  <span>Excursions</span>
                </Link>
              </li>
              <li>
                <Link href="/circuit-3-jours-marrakech-zagora" className="text-gray-300 hover:text-yellow-400 transition-colors duration-200 flex items-center gap-2 group">
                  <svg className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  <span>Circuits</span>
                </Link>
              </li>
              <li>
                <a
                  href="https://wa.me/212780894866?text=Bonjour%2C%20je%20souhaite%20obtenir%20plus%20d%27informations%20sur%20vos%20services%20de%20transport%20touristique."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-yellow-400 transition-colors duration-200 flex items-center gap-2 group"
                >
                  <svg className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  <span>Contactez-nous</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold mb-4 relative inline-block">
              Contactez-nous
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-gradient-to-r from-yellow-600 to-yellow-500 mt-2"></span>
            </h3>
            <div className="space-y-4">
              {/* Phone */}
              <div className="flex items-start gap-4 group">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-yellow-600/20 to-yellow-700/20 flex items-center justify-center flex-shrink-0 group-hover:from-yellow-600/30 group-hover:to-yellow-700/30 transition-all">
                  <svg className="w-5 h-5 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <a
                    href="tel:+212780894866"
                    className="text-white hover:text-yellow-400 transition-colors duration-200 font-semibold block"
                  >
                    +212 7 80 89 48 66
                  </a>
                  <p className="text-gray-400 text-sm mt-1">Lundi - Dimanche, 8h00 - 19h00</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4 group">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-yellow-600/20 to-yellow-700/20 flex items-center justify-center flex-shrink-0 group-hover:from-yellow-600/30 group-hover:to-yellow-700/30 transition-all">
                  <svg className="w-5 h-5 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <a
                    href="mailto:infos@luxurylinestravel.com"
                    className="hover:text-gold transition-colors"
                  >
                    infos@luxurylinestravel.com
                  </a>
                  <p className="text-gray-400 text-sm mt-1">Réponse rapide garantie</p>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start gap-4 group">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-yellow-600/20 to-yellow-700/20 flex items-center justify-center flex-shrink-0 group-hover:from-yellow-600/30 group-hover:to-yellow-700/30 transition-all">
                  <svg className="w-5 h-5 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-white font-semibold">Marrakech, Maroc</p>
                  <p className="text-gray-400 text-sm mt-1">Service disponible partout au Maroc</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 mt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © {new Date().getFullYear()} <span className="text-yellow-500 font-semibold">Luxury Lines Travel</span>. Tous droits réservés.
            </p>
            <div className="flex items-center gap-6">
              <Link
                href="/politique-confidentialite"
                className="text-gray-400 hover:text-yellow-400 text-sm transition-colors duration-200"
              >
                Politique de confidentialité
              </Link>
              <Link
                href="/mentions-legales"
                className="text-gray-400 hover:text-yellow-400 text-sm transition-colors duration-200"
              >
                Mentions Légales
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
