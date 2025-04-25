import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-green-600 shadow-md sticky top-0 z-10">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center p-4">
        <div className="text-white font-bold text-2xl">Avoté</div>
        {/* Menú para pantallas medianas en adelante */}
        <div className="hidden md:flex space-x-4">
          <a href="#inicio" className="text-white hover:text-green-200 transition">Inicio</a>
          <a href="#historia" className="text-white hover:text-green-200 transition">Nuestra Historia</a>
          <a href="#mision" className="text-white hover:text-green-200 transition">Misión y Visión</a>
          <a href="#beneficios" className="text-white hover:text-green-200 transition">Beneficios</a>
          <a href="#contacto" className="text-white hover:text-green-200 transition">Contacto</a>
        </div>
        {/* Botón hamburguesa para pantallas pequeñas */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
          >
            {isOpen ? '✕' : '☰'}
          </button>
        </div>
      </div>
      {/* Menú desplegable para móviles */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 flex flex-col space-y-2">
          <a href="#inicio" onClick={() => setIsOpen(false)} className="text-white hover:text-green-200 transition">Inicio</a>
          <a href="#historia" onClick={() => setIsOpen(false)} className="text-white hover:text-green-200 transition">Nuestra Historia</a>
          <a href="#mision" onClick={() => setIsOpen(false)} className="text-white hover:text-green-200 transition">Misión y Visión</a>
          <a href="#beneficios" onClick={() => setIsOpen(false)} className="text-white hover:text-green-200 transition">Beneficios</a>
          <a href="#contacto" onClick={() => setIsOpen(false)} className="text-white hover:text-green-200 transition">Contacto</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;