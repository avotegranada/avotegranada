import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-green-800/30 backdrop-blur-lg shadow-lg border-b border-green-700/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo y Título */}
          <div className="flex items-center">
            {/* Puedes incluir un logotipo aquí si lo deseas */}
            <span className="ml-2 text-xl font-serifElegant text-white">
              Avoté
            </span>
          </div>
          {/* Menú en pantallas grandes */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a
                href="#inicio"
                className="text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-green-700/50 transition"
              >
                Inicio
              </a>
              <a
                href="#historia"
                className="text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-green-700/50 transition"
              >
                Nuestra Historia
              </a>
              <a
                href="#mision"
                className="text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-green-700/50 transition"
              >
                Misión y Visión
              </a>
              <a
                href="#beneficios"
                className="text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-green-700/50 transition"
              >
                Beneficios
              </a>
              <a
                href="#contacto"
                className="text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-green-700/50 transition"
              >
                Contacto
              </a>
            </div>
          </div>
          {/* Botón Hamburger para pantallas pequeñas */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-green-700/50 focus:outline-none transition"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
      {/* Menú desplegable para móviles */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a
              href="#inicio"
              onClick={() => setIsOpen(false)}
              className="block text-white px-3 py-2 rounded-md text-base font-medium hover:bg-green-700/50 transition"
            >
              Inicio
            </a>
            <a
              href="#historia"
              onClick={() => setIsOpen(false)}
              className="block text-white px-3 py-2 rounded-md text-base font-medium hover:bg-green-700/50 transition"
            >
              Nuestra Historia
            </a>
            <a
              href="#mision"
              onClick={() => setIsOpen(false)}
              className="block text-white px-3 py-2 rounded-md text-base font-medium hover:bg-green-700/50 transition"
            >
              Misión y Visión
            </a>
            <a
              href="#beneficios"
              onClick={() => setIsOpen(false)}
              className="block text-white px-3 py-2 rounded-md text-base font-medium hover:bg-green-700/50 transition"
            >
              Beneficios
            </a>
            <a
              href="#contacto"
              onClick={() => setIsOpen(false)}
              className="block text-white px-3 py-2 rounded-md text-base font-medium hover:bg-green-700/50 transition"
            >
              Contacto
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};
/* Keloke, nah estaba revisando este código y lo pude haber hecho mejor OwO */

export default Navbar;