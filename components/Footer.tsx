import React from "react";
import Image from "next/image";

const Footer = () => {
    return (
        <footer className="bg-[#7D7E75] text-gray-300 py-6">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-wrap justify-between">
                    
                    {/* Colonne 1 : Logo et droits d'auteur */}
                    <div className="text-center md:text-left mb-4 w-full md:w-auto">
                        <a href="/" className="text-white text-2xl font-bold">Logo</a>
                        <p className="mt-2">© 2024 Tous droits réservés</p>
                    </div>
  
                    {/* Colonne 2 : Liens utiles */}
                    <div className="text-center md:text-left mb-4 w-full md:w-auto">
                        <p className="text-lg font-semibold">Liens utiles</p>
                        <ul className="mt-2">
                            <li className="mb-2">
                                <a href="/" className="text-gray-300 hover:text-white">Accueil</a>
                            </li>
                            <li className="mb-2">
                                <a href="/tarif" className="text-gray-300 hover:text-white">Tarif</a>
                            </li>
                            <li className="mb-2">
                                <a href="/qui-sommes-nous" className="text-gray-300 hover:text-white">Qui sommes-nous</a>
                            </li>
                            <li>
                                <a href="/contact" className="text-gray-300 hover:text-white">Contactez-nous</a>
                            </li>
                        </ul>
                    </div>
  
                    {/* Colonne 3 : Liens légaux */}
                    <div className="text-center md:text-left mb-4 w-full md:w-auto">
                        <p className="text-lg font-semibold">Liens légaux</p>
                        <ul className="mt-2">
                            <li className="mb-2">
                                <a href="/mentions-legales" className="text-gray-300 hover:text-white">Mentions légales</a>
                            </li>
                            <li className="mb-2">
                                <a href="/conditions-generales-de-vente" className="text-gray-300 hover:text-white">Conditions générales de vente</a>
                            </li>
                            <li className="mb-2">
                                <a href="/politique-de-confidentialite" className="text-gray-300 hover:text-white">Politique de confidentialité</a>
                            </li>
                        </ul>
                    </div>
                    <div className="text-center md:text-center md:col-span-1">
                        <p className="text-lg font-semibold mb-4">Suivez-nous</p>
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-center space-x-2">
                            <a href="/" className="text-gray-300 hover:text-white">
                                <Image
                                    src="/images/socialIcon/instagram.svg"
                                    alt="Instagram"
                                    width={32}
                                    height={32}
                                    className="h-6 w-6"
                            />
                            </a>
                            <a href="/" className="text-gray-300 hover:text-white">
                                <Image
                                    src="/images/socialIcon/facebook.svg"
                                    alt="Facebook"
                                    width={32}
                                    height={32}
                                    className="h-6 w-6"
                                />
                            </a>
                            <a href="/" className="text-gray-300 hover:text-white">
                                <Image
                                    src="/images/socialIcon/youtube.svg"
                                    alt="YouTube"
                                    width={32}
                                    height={32}
                                    className="h-6 w-6"
                                />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;