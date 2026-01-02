import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
    title: "Politique de Confidentialité | Luxury Lines Travel",
    description: "Politique de confidentialité et protection des données de Luxury Lines Travel.",
};

export default function PolitiqueConfidentialite() {
    return (
        <div className="min-h-screen bg-white text-gray-900">
            <Header />
            <main className="max-w-4xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
                <h1 className="text-3xl font-bold mb-8 border-b pb-4">Politique de Confidentialité</h1>

                <p className="mb-8 italic">Dernière mise à jour : 2 janvier 2026</p>

                <section className="mb-8">
                    <h2 className="text-xl font-semibold mb-4 text-yellow-700">1. Collecte des données</h2>
                    <p className="mb-4">
                        Nous collectons des informations lorsque vous nous contactez via WhatsApp ou par email pour une réservation. Les informations collectées incluent votre nom, votre numéro de téléphone et les détails relatifs à votre demande de transport.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-xl font-semibold mb-4 text-yellow-700">2. Utilisation des données</h2>
                    <p className="mb-4">
                        Toutes les informations que nous recueillons auprès de vous peuvent être utilisées pour :
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>Organiser vos transferts et excursions.</li>
                        <li>Améliorer le service client et vos besoins de prise en charge.</li>
                        <li>Vous contacter par téléphone ou WhatsApp concernant votre réservation.</li>
                    </ul>
                </section>

                <section className="mb-8">
                    <h2 className="text-xl font-semibold mb-4 text-yellow-700">3. Protection des informations</h2>
                    <p>
                        Nous sommes les seuls propriétaires des informations collectées sur ce site. Vos informations personnelles ne seront pas vendues, échangées, transférées, ou données à une autre société pour n'importe quel raison, sans votre consentement, en dehors de ce qui est nécessaire pour répondre à une demande de service.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-xl font-semibold mb-4 text-yellow-700">4. Cookies</h2>
                    <p>
                        Nos cookies améliorent l'accès à notre site et identifient les visiteurs réguliers. Cependant, cette utilisation des cookies n'est en aucune façon liée à des informations personnelles identifiables sur notre site. Nous utilisons principalement des cookies de performance (via Google Analytics si activé) pour analyser le trafic.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-xl font-semibold mb-4 text-yellow-700">5. Consentement</h2>
                    <p>
                        En utilisant notre site, vous consentez à notre politique de confidentialité.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-xl font-semibold mb-4 text-yellow-700">6. Contact</h2>
                    <p>
                        Si vous avez des questions concernant cette politique de confidentialité, vous pouvez nous contacter via : infos@luxurylinestravel.com
                    </p>
                </section>
            </main>
            <Footer />
        </div>
    );
}
