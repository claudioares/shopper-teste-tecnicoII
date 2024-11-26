import logo from '../../assets/shopper.logo.webp'
export function Header() {
  return (
    <div>

      <header className="bg-sky-950 shadow-md">
        <div className="container mx-auto flex justify-between items-center py-4 px-6">
          {/* Logo ou Título */}
          <div className="flex items-center gap-2">
            <img
              src={logo}
              alt="Logo da shopper"
              className="h-8 w-auto"
            />
          </div>

          {/* Navegação */}
          <nav className="hidden md:flex gap-6 text-white">
            <a href="/" className="hover:text-green-400 transition">
              Home
            </a>
            <a href="destinations" className="hover:text-green-400 transition">
              Destinos
            </a>
            <a href="about" className="hover:text-green-400 transition">
              Sobre
            </a>
            <a href="#contact" className="hover:text-green-400 transition">
              Contato
            </a>
          </nav>
        </div>
      </header>
    </div>
  );
}
