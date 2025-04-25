import React from 'react';
import ProductImage from '../assets/producto.jpeg'; // Asegúrate de que la imagen exista en esta ruta

const OnePage = () => {
  return (
    <div className="scroll-smooth">
      {/* Espacio para compensar el Navbar fijo */}
      <div className="pt-20">
        
        {/* Sección Inicio con diseño de dos columnas en md+ */}
        <section id="inicio" className="bg-green-600 text-white py-20">
          <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-5xl font-bold mb-4">Bienvenido a Avoté</h1>
              <p className="text-xl mb-8">
                Donde lo artesanal y natural se unen para darte lo mejor.
              </p>
            </div>
            <div className="flex justify-center">
              <img 
                src={ProductImage} 
                alt="Producto Avoté" 
                className="w-full max-h-80 object-contain" 
              />
            </div>
          </div>
        </section>
        
        {/* Sección Nuestra Historia */}
        <section id="historia" className="py-16 px-4 bg-white">
          <div className="container mx-auto">
            <h2 className="text-4xl font-bold text-green-600 mb-6 text-center">Nuestra Historia</h2>
            <p className="text-gray-700 max-w-3xl mx-auto text-lg">
              Desde tiempos ancestrales, el aguacate ha sido símbolo de salud y tradición. Conocemos y valoramos la cultura y la forma artesanal en cada etapa del proceso.
            </p>
          </div>
        </section>
        
        {/* Sección Misión y Visión */}
        <section id="mision" className="py-16 px-4 bg-green-50">
          <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-3xl font-bold text-green-600 mb-4">Misión</h3>
              <p className="text-gray-700 text-lg">
                Brindar un aceite de aguacate 100% natural y artesanal, respetando la tradición y promoviendo la sostenibilidad.
              </p>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-green-600 mb-4">Visión</h3>
              <p className="text-gray-700 text-lg">
                Ser líderes en el mercado de productos naturales, resaltando la calidad y el compromiso con nuestras raíces culturales.
              </p>
            </div>
          </div>
        </section>
        
        {/* Sección Beneficios */}
        <section id="beneficios" className="py-16 px-4 bg-white">
          <div className="container mx-auto">
            <h2 className="text-4xl font-bold text-green-600 mb-6 text-center">Beneficios</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-green-100 p-6 rounded-lg shadow">
                <h3 className="text-2xl font-semibold text-green-700 mb-2">Para la Salud</h3>
                <p className="text-gray-700">
                  Rico en grasas saludables y vitamina E, cuida tu corazón.
                </p>
              </div>
              <div className="bg-green-100 p-6 rounded-lg shadow">
                <h3 className="text-2xl font-semibold text-green-700 mb-2">Para el Cabello</h3>
                <p className="text-gray-700">
                  Fortalece y nutre cada hebra, promoviendo su crecimiento y brillo.
                </p>
              </div>
              <div className="bg-green-100 p-6 rounded-lg shadow">
                <h3 className="text-2xl font-semibold text-green-700 mb-2">Para la Piel</h3>
                <p className="text-gray-700">
                  Hidrata y nutre la piel de manera natural, restaurando su vitalidad.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Sección Contacto */}
        <section id="contacto" className="py-16 px-4 bg-green-600 text-white">
          <div className="container mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Contacto</h2>
            <p className="text-lg mb-4">
              Escríbenos: <a href="mailto:contacto@avote.com" className="underline">contacto@avote.com</a>
            </p>
            <p className="text-lg">Tel: (+505) 8121-2756</p>
          </div>
        </section>
        
      </div>
    </div>
  );
};

export default OnePage;