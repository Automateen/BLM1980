import { Link, Outlet, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function Layout() {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Inicio', path: '/' },
    { name: 'Servicios', path: '/servicios' },
    { name: 'Contacto', path: '/contacto' },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-surface overflow-x-hidden text-on-surface">
      {/* Top Banner */}
      <div className="bg-[#1a1c23] text-white/90 py-2 px-6 md:px-12 flex flex-col md:flex-row justify-between items-center text-xs tracking-wider z-[60] relative">
        <div className="flex items-center gap-6">
          <span>Llámanos para más información</span>
          <a href="tel:+34948040013" className="hover:text-white transition-colors">+34 948 04 00 13</a>
        </div>
        <div className="flex items-center gap-6 mt-2 md:mt-0">
          <a href="tel:+34635859709" className="hover:text-white transition-colors">+34 635 85 97 09</a>
          <a href="mailto:info@blm1980yacht.com" className="hover:text-white transition-colors">info@blm1980yacht.com</a>
        </div>
      </div>

      <nav
        className={`fixed top-[40px] md:top-[32px] w-full z-50 transition-colors duration-500 flex justify-between items-center px-6 md:px-12 py-4 ${
          scrolled ? 'bg-white shadow-sm' : 'bg-transparent'
        }`}
      >
        <Link
          to="/"
          className="flex items-center"
        >
          <img 
            src="/logo.png" 
            alt="BLM1980 Yacht Logo" 
            className="h-12 md:h-14 w-auto transition-all duration-500"
          />
        </Link>

        <div className="hidden md:flex items-center gap-8 font-sans font-medium text-sm">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            const textColor = scrolled ? 'text-gray-900' : 'text-white';
            const activeColor = scrolled ? 'text-gray-900 font-bold' : 'text-white font-bold';
            
            return (
              <Link
                key={link.path}
                to={link.path}
                className={`${isActive ? activeColor : textColor} hover:opacity-80 transition-all`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>
      </nav>

      <main className="flex-grow">
        <Outlet />
      </main>

      <footer className="w-full relative mt-20 bg-[#1e2022] text-white pt-20 pb-10">
        <div className="max-w-7xl mx-auto px-12 flex flex-col md:flex-row items-center md:items-start justify-between gap-12">
          <div className="flex flex-col items-center md:items-start">
            <img src="/logo.png" alt="BLM1980 Yacht Logo" className="h-20 w-auto invert brightness-0" />
          </div>
          <div className="flex flex-col text-sm text-gray-400 gap-2 items-center md:items-end">
            <div className="flex flex-wrap justify-center md:justify-end gap-6 mb-4">
              <a href="tel:+34948040013" className="hover:text-white transition-colors">+34 948 04 00 13</a>
              <a href="tel:+34635859709" className="hover:text-white transition-colors">+34 635 85 97 09</a>
              <a href="tel:+34655358662" className="hover:text-white transition-colors">+34 655 35 86 62</a>
            </div>
            <div className="w-full h-[1px] bg-white/10 mb-4"></div>
            <div className="flex flex-wrap justify-center md:justify-end gap-6">
              <a href="#" className="hover:text-white transition-colors">Aviso legal</a>
              <a href="#" className="hover:text-white transition-colors">Política de cookies</a>
              <a href="#" className="hover:text-white transition-colors">Política de privacidad</a>
              <a href="#" className="hover:text-white transition-colors">Política de accesibilidad</a>
              <a href="#" className="hover:text-white transition-colors">Alquiler de barcos</a>
            </div>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto px-12 mt-16 flex justify-center items-center gap-8">
           <img src="https://upload.wikimedia.org/wikipedia/commons/b/b7/Flag_of_Europe.svg" alt="EU Flag" className="h-8 opacity-70" />
           <p className="text-xs text-gray-500">Financiado por la Unión Europea NextGenerationEU</p>
        </div>

        <div className="max-w-7xl mx-auto px-12 mt-12 w-full">
          <div className="w-full h-[1px] bg-white/10 mb-4"></div>
          <div className="flex justify-between items-center text-xs text-gray-500">
            <p>
              © Copyright 2026 | Todos los derechos reservados | Gestión naval, corretaje y refit. Eventos de empresas y traslado de barcos.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
