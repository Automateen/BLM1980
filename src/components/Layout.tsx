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
    <div className="min-h-screen flex flex-col bg-surface overflow-x-hidden">
      <nav
        className={`fixed top-0 w-full z-50 transition-colors duration-500 flex justify-between items-center px-6 md:px-12 py-6 ${
          scrolled ? 'bg-[#faf9f5]/80 backdrop-blur-md' : 'bg-transparent'
        }`}
      >
        <Link
          to="/"
          className={`text-xl font-bold uppercase tracking-widest transition-colors ${
            scrolled ? 'text-primary' : 'text-surface'
          }`}
        >
          BLM1980 YACHT
        </Link>

        <div className="hidden md:flex items-center gap-10 font-headline tracking-tight">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            const textColor = scrolled ? 'text-primary' : 'text-surface';
            const activeColor = scrolled ? 'text-on-tertiary-container border-on-tertiary-container' : 'text-surface border-surface';
            
            return (
              <Link
                key={link.path}
                to={link.path}
                className={`${isActive ? activeColor : textColor} ${
                  isActive
                    ? 'border-b pb-1 hover:opacity-100 transition-all'
                    : 'opacity-70 hover:opacity-100 hover:text-on-tertiary-container transition-all'
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>

        <Link
          to="/contacto"
          className="cta-gradient text-on-primary px-8 py-3 font-semibold uppercase tracking-widest text-xs rounded hover:opacity-90 transition-all active:scale-95 duration-300 ease-in-out font-label"
        >
          Consultar
        </Link>
      </nav>

      <main className="flex-grow">
        <Outlet />
      </main>

      <footer className="w-full relative mt-20 bg-surface pt-20 pb-10">
        <div className="max-w-7xl mx-auto px-12 flex flex-col items-center gap-12">
          <div className="text-lg font-bold text-primary uppercase tracking-widest">
            BLM1980 YACHT
          </div>
          <div className="flex flex-wrap justify-center gap-12">
            {['Chárter', 'Ventas', 'Gestión', 'Privacidad', 'Términos'].map((item) => (
              <a
                key={item}
                href="#"
                className="font-body text-sm uppercase tracking-widest text-primary opacity-60 hover:text-on-tertiary-container transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
          <div className="w-full h-[1px] bg-primary/10"></div>
          <p className="font-body text-xs uppercase tracking-widest text-primary opacity-40 text-center">
            © 2024 BLM1980 YACHT. TODOS LOS DERECHOS RESERVADOS.
          </p>
        </div>
      </footer>
    </div>
  );
}
