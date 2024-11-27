import { useLocation } from 'react-router-dom';
import logo from "@/assets/logo.svg";
import { HeaderMobile } from './mobile';
export function Header() {
  const location = useLocation().pathname;

  return (
    <div>
      <header className="bg-sky-950 shadow-md">
        <div className="container mx-auto flex justify-between items-center py-4 px-6">
          <div className="flex items-center gap-2">
            <img
              src={logo}
              alt="Logo da shopper"
              className="h-16 w-auto"
            />
          </div>

          <nav className="hidden md:flex gap-6 text-white">
            <a href="/" className={`hover:text-green-400 transition ${location === '/' && "text-green-500"}`}>
              Home
            </a>
            <a href="destinations" className={`hover:text-green-400 transition ${location === '/destinations' && "text-green-500"}`}>
              Destinos
            </a>
            <a href="about" className={`hover:text-green-400 transition ${location === '/about' && "text-green-500"}`}>
              Sobre
            </a>
          </nav>

          <nav className="flex md:hidden gap-6 text-white">
            <HeaderMobile />
          </nav>
        </div>
      </header>
    </div>
  );
}
