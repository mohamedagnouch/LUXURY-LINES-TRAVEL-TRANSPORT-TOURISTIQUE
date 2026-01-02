import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function NotFound() {
    return (
        <div className="min-h-screen bg-white">
            <Header />
            <main className="flex flex-col items-center justify-center py-24 px-4 text-center">
                <h1 className="text-9xl font-bold text-yellow-600 mb-4">404</h1>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Page non trouvée</h2>
                <p className="text-lg text-gray-600 mb-10 max-w-md">
                    Désolé, la page que vous recherchez n'existe pas ou a été déplacée.
                </p>
                <Link
                    href="/"
                    className="bg-yellow-600 hover:bg-yellow-700 text-white font-bold py-3 px-8 rounded-lg transition-colors shadow-lg"
                >
                    Retour à l'accueil
                </Link>
            </main>
            <Footer />
        </div>
    );
}
