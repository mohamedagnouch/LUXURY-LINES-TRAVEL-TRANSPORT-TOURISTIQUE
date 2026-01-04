"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [excursionOpen, setExcursionOpen] = useState(false);
  const [circuitsOpen, setCircuitsOpen] = useState(false);
  const pathname = usePathname();
  const whatsappNumber = "212708894866";
  const whatsappMessage = encodeURIComponent(
    "Bonjour, je souhaite obtenir plus d'informations sur vos services de transport touristique."
  );
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <>
      {/* Top Contact Bar */}
      <div className="bg-gradient-to-r from-gray-50 to-white border-b border-gray-200 py-2 sm:py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-6">
            <p className="text-xs sm:text-sm text-gray-700 text-center sm:text-left hidden sm:block">
              Pour tous les services de transport de luxe, contactez-nous
            </p>
            <p className="text-xs text-gray-700 text-center sm:hidden">
              Transport de luxe à Marrakech
            </p>
            <div className="flex items-center gap-3 sm:gap-6">
              <a
                href="tel:+212708894866"
                className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm font-medium text-gray-900 hover:text-yellow-600 transition-colors"
              >
                <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="hidden xs:inline">+212 708-894866</span>
                <span className="xs:hidden">Appel</span>
              </a>
              <a
                href="mailto:infos@luxurylinestravel.com"
                className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm font-medium text-gray-900 hover:text-yellow-600 transition-colors"
              >
                <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="hidden sm:inline">infos@luxurylinestravel.com</span>
                <span className="sm:hidden">Email</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Header with Logo and Services */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 sm:py-4">
          <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-3 sm:gap-4">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 hover:opacity-90 transition-all group">
              <div className="relative w-16 h-16 sm:w-20 sm:h-20">
                <Image
                  src="/logo.jpg"
                  alt="Luxury Lines Travel Logo"
                  fill
                  className="object-contain rounded-lg"
                />
              </div>
              <div className="flex flex-col">
                <h1 className="text-sm sm:text-lg font-bold text-gray-900 tracking-wide leading-tight">LUXURY LINES TRAVEL</h1>
                <p className="text-[9px] sm:text-[11px] text-gray-600 font-medium tracking-wider">TRANSPORT TOURISTIQUE</p>
              </div>
            </Link>

            {/* Service Highlights */}
            <div className="hidden md:flex flex-col lg:flex-row gap-3 lg:gap-6 xl:gap-8 flex-1 justify-center">
              <div className="flex items-start gap-2.5 p-2.5 rounded-lg hover:bg-gray-50 transition-colors">
                <div className="w-9 h-9 rounded-lg bg-yellow-100 flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-yellow-600" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-bold text-gray-900">Transferts d&apos;aéroport</p>
                  <p className="text-xs text-gray-600 mt-0.5">Disponibles à court terme</p>
                </div>
              </div>
              <div className="flex items-start gap-2.5 p-2.5 rounded-lg hover:bg-gray-50 transition-colors">
                <div className="w-9 h-9 rounded-lg bg-yellow-100 flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-yellow-600" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-bold text-gray-900">Fêtes de mariage</p>
                  <p className="text-xs text-gray-600 mt-0.5">Organisation facile</p>
                </div>
              </div>
              <div className="flex items-start gap-2.5 p-2.5 rounded-lg hover:bg-gray-50 transition-colors">
                <div className="w-9 h-9 rounded-lg bg-yellow-100 flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-yellow-600" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-bold text-gray-900">Réunions d&apos;affaires</p>
                  <p className="text-xs text-gray-600 mt-0.5">Ponctualité garantie</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation Bar */}
      <nav className="bg-gradient-to-r from-gray-900 to-black text-white shadow-lg" role="navigation" aria-label="Navigation principale">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Mobile menu button */}
            <button
              type="button"
              className="lg:hidden p-4 text-white hover:bg-gray-800 transition-colors rounded-lg"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-menu"
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-0.5">
              <Link
                href="/"
                className={`px-5 py-4 font-medium transition-all duration-200 ${pathname === "/"
                  ? "bg-gradient-to-r from-yellow-600 to-yellow-700 text-white shadow-lg"
                  : "hover:bg-gray-800 hover:text-yellow-400"
                  }`}
              >
                Accueil
              </Link>
              <Link
                href="/taxi-aeroport"
                className={`px-5 py-4 font-medium transition-all duration-200 ${pathname === "/taxi-aeroport"
                  ? "bg-gradient-to-r from-yellow-600 to-yellow-700 text-white shadow-lg"
                  : "hover:bg-gray-800 hover:text-yellow-400"
                  }`}
              >
                Taxi aéroport
              </Link>
              <div className="relative group">
                <button
                  type="button"
                  className="px-5 py-4 font-medium hover:bg-gray-800 hover:text-yellow-400 transition-all duration-200 flex items-center gap-1"
                  aria-expanded="false"
                  aria-haspopup="true"
                >
                  Excursion
                  <svg className="w-4 h-4 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {/* Dropdown Menu */}
                <div className="absolute left-0 top-full bg-white shadow-2xl min-w-[300px] rounded-lg mt-1 border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 overflow-hidden">
                  <Link href="/excursion-agafay" className="block px-5 py-3 text-gray-700 hover:bg-gradient-to-r hover:from-yellow-600 hover:to-yellow-700 hover:text-white transition-all duration-200 font-medium">
                    Excursion Agafay
                  </Link>
                  <Link href="/excursion-3-vallees-marrakech" className="block px-5 py-3 text-gray-700 hover:bg-gradient-to-r hover:from-yellow-600 hover:to-yellow-700 hover:text-white transition-all duration-200 font-medium">
                    Excursion Villages berbères et 3 vallées de l&apos;Atlas
                  </Link>
                  <Link href="/excursion-imlil-vallee-atlas" className="block px-5 py-3 text-gray-700 hover:bg-gradient-to-r hover:from-yellow-600 hover:to-yellow-700 hover:text-white transition-all duration-200 font-medium">
                    Excursion Imlil et vallée de l&apos;Atlas
                  </Link>
                  <Link href="/excursion-vallee-ourika" className="block px-5 py-3 text-gray-700 hover:bg-gradient-to-r hover:from-yellow-600 hover:to-yellow-700 hover:text-white transition-all duration-200 font-medium">
                    Excursion la vallée de l&apos;Ourika
                  </Link>
                  <Link href="/excursion-cascades-ouzoud" className="block px-5 py-3 text-gray-700 hover:bg-gradient-to-r hover:from-yellow-600 hover:to-yellow-700 hover:text-white transition-all duration-200 font-medium">
                    Excursions cascades d&apos;Ouzoud
                  </Link>
                  <Link href="/excursion-casablanca" className="block px-5 py-3 text-gray-700 hover:bg-gradient-to-r hover:from-yellow-600 hover:to-yellow-700 hover:text-white transition-all duration-200 font-medium">
                    Excursion Casablanca
                  </Link>
                  <Link href="/excursion-ouarzazate-ait-ben-haddou" className="block px-5 py-3 text-gray-700 hover:bg-gradient-to-r hover:from-yellow-600 hover:to-yellow-700 hover:text-white transition-all duration-200 font-medium">
                    Excursion Ouarzazate et Ait Ben Haddou
                  </Link>
                  <Link href="/excursion-essaouira" className="block px-5 py-3 text-gray-700 hover:bg-gradient-to-r hover:from-yellow-600 hover:to-yellow-700 hover:text-white transition-all duration-200 font-medium">
                    Excursion Essaouira
                  </Link>
                  <Link href="/excursion-agadir" className="block px-5 py-3 text-gray-700 hover:bg-gradient-to-r hover:from-yellow-600 hover:to-yellow-700 hover:text-white transition-all duration-200 font-medium">
                    Excursion Agadir
                  </Link>
                  <Link href="/excursion-agafay-desert-marrakech" className="block px-5 py-3 text-gray-700 hover:bg-gradient-to-r hover:from-yellow-600 hover:to-yellow-700 hover:text-white transition-all duration-200 font-medium">
                    Excursion Agafay désert Marrakech
                  </Link>
                </div>
              </div>
              <div className="relative group">
                <button
                  type="button"
                  className="px-5 py-4 font-medium hover:bg-gray-800 hover:text-yellow-400 transition-all duration-200 flex items-center gap-1"
                  aria-expanded="false"
                  aria-haspopup="true"
                >
                  Circuits
                  <svg className="w-4 h-4 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {/* Dropdown Menu */}
                <div className="absolute left-0 top-full bg-white shadow-2xl min-w-[300px] rounded-lg mt-1 border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 overflow-hidden">
                  <Link href="/circuit-4-jours-desert-merzouga" className="block px-5 py-3 text-gray-700 hover:bg-gradient-to-r hover:from-yellow-600 hover:to-yellow-700 hover:text-white transition-all duration-200 font-medium">
                    Excursion de 4 jours dans le désert de Merzouga
                  </Link>
                  <Link href="/circuit-4-jours-desert-merzouga-fes" className="block px-5 py-3 text-gray-700 hover:bg-gradient-to-r hover:from-yellow-600 hover:to-yellow-700 hover:text-white transition-all duration-200 font-medium">
                    Excursion de 4 jours Desert de Merzouga à Fès
                  </Link>
                  <Link
                    href="/circuit-3-jours-marrakech-zagora"
                    className={`block px-5 py-3 font-medium transition-all duration-200 ${pathname === "/circuit-3-jours-marrakech-zagora"
                      ? "bg-gradient-to-r from-yellow-600 to-yellow-700 text-white"
                      : "text-gray-700 hover:bg-gradient-to-r hover:from-yellow-600 hover:to-yellow-700 hover:text-white"
                      }`}
                  >
                    Circuit 3 Jours Marrakech à Zagora
                  </Link>
                </div>
              </div>
              <Link
                href="/contact"
                className="px-5 py-4 font-medium transition-all duration-200 hover:bg-gray-800 hover:text-yellow-400"
              >
                Contactez-nous
              </Link>
            </div>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div id="mobile-menu" className="lg:hidden border-t border-gray-700">
              <Link href="/" className="block px-4 py-3 hover:bg-gray-800 transition-colors" onClick={() => setMobileMenuOpen(false)}>
                Accueil
              </Link>
              <Link href="/taxi-aeroport" className="block px-4 py-3 hover:bg-gray-800 transition-colors" onClick={() => setMobileMenuOpen(false)}>
                Taxi aéroport
              </Link>
              {/* Excursion Accordion */}
              <div className="border-b border-gray-700">
                <button
                  type="button"
                  onClick={() => setExcursionOpen(!excursionOpen)}
                  className="w-full px-4 py-3 flex items-center justify-between hover:bg-gray-800 transition-colors"
                  aria-expanded={excursionOpen}
                >
                  <span className="text-yellow-600 font-semibold">Excursion</span>
                  <svg
                    className={`w-5 h-5 text-yellow-600 transition-transform duration-300 ${excursionOpen ? "rotate-180" : ""
                      }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${excursionOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
                    }`}
                >
                  <div className="pl-8 pr-4 py-2 space-y-2 bg-gray-800/50">
                    <Link href="/excursion-agafay" className="block py-2 text-gray-300 hover:text-yellow-400 transition-colors" onClick={() => setMobileMenuOpen(false)}>
                      Excursion Agafay
                    </Link>
                    <Link href="/excursion-3-vallees-marrakech" className="block py-2 text-gray-300 hover:text-yellow-400 transition-colors" onClick={() => setMobileMenuOpen(false)}>
                      Excursion Villages berbères et 3 vallées de l&apos;Atlas
                    </Link>
                    <Link href="/excursion-imlil-vallee-atlas" className="block py-2 text-gray-300 hover:text-yellow-400 transition-colors" onClick={() => setMobileMenuOpen(false)}>
                      Excursion Imlil et vallée de l&apos;Atlas
                    </Link>
                    <Link href="/excursion-vallee-ourika" className="block py-2 text-gray-300 hover:text-yellow-400 transition-colors" onClick={() => setMobileMenuOpen(false)}>
                      Excursion la vallée de l&apos;Ourika
                    </Link>
                    <Link href="/excursion-cascades-ouzoud" className="block py-2 text-gray-300 hover:text-yellow-400 transition-colors" onClick={() => setMobileMenuOpen(false)}>
                      Excursions cascades d&apos;Ouzoud
                    </Link>
                    <Link href="/excursion-casablanca" className="block py-2 text-gray-300 hover:text-yellow-400 transition-colors" onClick={() => setMobileMenuOpen(false)}>
                      Excursion Casablanca
                    </Link>
                    <Link href="/excursion-ouarzazate-ait-ben-haddou" className="block py-2 text-gray-300 hover:text-yellow-400 transition-colors" onClick={() => setMobileMenuOpen(false)}>
                      Excursion Ouarzazate et Ait Ben Haddou
                    </Link>
                    <Link href="/excursion-essaouira" className="block py-2 text-gray-300 hover:text-yellow-400 transition-colors" onClick={() => setMobileMenuOpen(false)}>
                      Excursion Essaouira
                    </Link>
                    <Link href="/excursion-agadir" className="block py-2 text-gray-300 hover:text-yellow-400 transition-colors" onClick={() => setMobileMenuOpen(false)}>
                      Excursion Agadir
                    </Link>
                    <Link href="/excursion-agafay-desert-marrakech" className="block py-2 text-gray-300 hover:text-yellow-400 transition-colors" onClick={() => setMobileMenuOpen(false)}>
                      Excursion Agafay désert Marrakech
                    </Link>
                  </div>
                </div>
              </div>

              {/* Circuits Accordion */}
              <div className="border-b border-gray-700">
                <button
                  type="button"
                  onClick={() => setCircuitsOpen(!circuitsOpen)}
                  className="w-full px-4 py-3 flex items-center justify-between hover:bg-gray-800 transition-colors"
                  aria-expanded={circuitsOpen}
                >
                  <span className="text-yellow-600 font-semibold">Circuits</span>
                  <svg
                    className={`w-5 h-5 text-yellow-600 transition-transform duration-300 ${circuitsOpen ? "rotate-180" : ""
                      }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${circuitsOpen ? "max-h-[300px] opacity-100" : "max-h-0 opacity-0"
                    }`}
                >
                  <div className="pl-8 pr-4 py-2 space-y-2 bg-gray-800/50">
                    <Link href="/circuit-4-jours-desert-merzouga" className="block py-2 text-gray-300 hover:text-yellow-400 transition-colors" onClick={() => setMobileMenuOpen(false)}>
                      Excursion de 4 jours dans le désert de Merzouga
                    </Link>
                    <Link href="/circuit-4-jours-desert-merzouga-fes" className="block py-2 text-gray-300 hover:text-yellow-400 transition-colors" onClick={() => setMobileMenuOpen(false)}>
                      Excursion de 4 jours Desert de Merzouga à Fès
                    </Link>
                    <Link href="/circuit-3-jours-marrakech-zagora" className="block py-2 text-gray-300 hover:text-yellow-400 transition-colors" onClick={() => setMobileMenuOpen(false)}>
                      Circuit 3 Jours Marrakech à Zagora
                    </Link>
                  </div>
                </div>
              </div>
              <Link
                href="/contact"
                className="block px-4 py-3 bg-yellow-600 text-white font-bold text-center mt-4 mx-4 rounded-lg"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contactez-nous
              </Link>
            </div>
          )}
        </div>
      </nav>
    </>
  );
}

