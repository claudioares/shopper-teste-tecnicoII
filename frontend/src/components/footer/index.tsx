
export function Footer () {
    return(
        <>
            <div>
                <footer className="bg-green-700 text-white py-10">
                    <div className="container mx-auto px-6">
                        <div className="flex flex-wrap justify-between items-start gap-6">
                        {/* Logo e descrição */}
                        <div className="w-full md:w-1/3">
                            <h2 className="text-2xl font-bold">Shopper Rides</h2>
                            <p className="mt-2 text-sm">
                            Seu destino com conforto, segurança e economia. Explore a melhor maneira de chegar onde você quer, com a qualidade Shopper.
                            </p>
                        </div>

                        {/* Links úteis */}
                        <div className="w-full md:w-1/3">
                            <h3 className="text-lg font-semibold mb-4">Links Úteis</h3>
                            <ul className="space-y-2 text-sm">
                            <li><a href="/about" className="hover:underline">Sobre Nós</a></li>
                            <li><a href="/contact" className="hover:underline">Contato</a></li>
                            <li><a href="/privacy" className="hover:underline">Política de Privacidade</a></li>
                            <li><a href="/faq" className="hover:underline">FAQ</a></li>
                            </ul>
                        </div>

                        {/* Redes sociais */}
                        <div className="w-full md:w-1/3">
                            <h3 className="text-lg font-semibold mb-4">Siga-nos</h3>
                            <div className="flex space-x-4">
                            <a
                                href="https://facebook.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-white hover:text-gray-300 transition"
                            >
                                <i className="fab fa-facebook-f"></i>
                            </a>
                            <a
                                href="https://twitter.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-white hover:text-gray-300 transition"
                            >
                                <i className="fab fa-twitter"></i>
                            </a>
                            <a
                                href="https://instagram.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-white hover:text-gray-300 transition"
                            >
                                <i className="fab fa-instagram"></i>
                            </a>
                            </div>
                        </div>
                        </div>

                        {/* Copyright */}
                        <div className="mt-10 text-center text-sm text-gray-300">
                        &copy; {new Date().getFullYear()} Shopper Rides. Todos os direitos reservados.
                        </div>
                    </div>
                </footer>
            </div>
        </>
    )
}