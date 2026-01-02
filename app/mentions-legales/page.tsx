import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
    title: "Mentions Légales | Luxury Lines Travel",
    description: "Mentions légales de Luxury Lines Travel - Agence de transport touristique à Marrakech.",
};

export default function MentionsLegales() {
    return (
        <div className="min-h-screen bg-white text-gray-900">
            <Header />
            <main className="max-w-4xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
                <h1 className="text-3xl font-bold mb-8 border-b pb-4">Mentions Légales</h1>

                <section className="mb-8">
                    <h2 className="text-xl font-semibold mb-4 text-yellow-700">1. Présentation de l'agence</h2>
                    <p className="mb-4">
                        Le site <strong>luxurylinestravel.com</strong> est édité par l'agence Luxury Lines Travel.
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                        <li><strong>Nom de l'entreprise :</strong> Luxury Lines Travel</li>
                        <li><strong>Activité :</strong> Transport Touristique</li>
                        <li><strong>Siège social :</strong> Marrakech, Maroc</li>
                        <li><strong>Email :</strong> infos@luxurylinestravel.com</li>
                        <li><strong>Téléphone / WhatsApp :</strong> +212 7 80 89 48 66</li>
                    </ul>
                </section>

                <section className="mb-8">
                    <h2 className="text-xl font-semibold mb-4 text-yellow-700">2. Hébergement</h2>
                    <p className="mb-4">
                        Le site est hébergé par Vercel Inc., situé au 340 S Lemon Ave #1192 Walnut, CA 91789, États-Unis.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-xl font-semibold mb-4 text-yellow-700">3. Propriété intellectuelle</h2>
                    <p className="mb-4">
                        L'ensemble de ce site relève de la législation internationale sur le droit d'auteur et la propriété intellectuelle. Tous les droits de reproduction sont réservés, y compris pour les documents téléchargeables et les représentations iconographiques et photographiques.
                    </p>
                    <p>
                        La reproduction de tout ou partie de ce site sur un support électronique quel qu'il soit est formellement interdite sauf autorisation expresse du directeur de la publication.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-xl font-semibold mb-4 text-yellow-700">4. Services fournis</h2>
                    <p>
                        Luxury Lines Travel s'efforce de fournir sur le site des informations aussi précises que possible. Toutefois, l'agence ne pourra être tenue responsable des omissions, des inexactitudes et des carences dans la mise à jour, qu'elles soient de son fait ou du fait des tiers partenaires qui lui fournissent ces informations.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-xl font-semibold mb-4 text-yellow-700">5. Droit applicable</h2>
                    <p>
                        Tout litige en relation avec l'utilisation du site est soumis au droit marocain.
                    </p>
                </section>
            </main>
            <Footer />
        </div>
    );
}
