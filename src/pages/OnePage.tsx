import ProductImage from '../assets/producto.jpeg';

const OnePage = () => {
  return (
    <div className="scroll-smooth bg-green-50">
      <div className="">
        {/* Sección Inicio – Hero */}
        <section
          id="inicio"
          className="relative bg-gradient-to-r from-green-800 to-green-600 text-white overflow-hidden"
        >
          <div className="container mx-auto px-6 py-20 md:py-32 flex flex-col md:flex-row items-center">
            <div className="flex-1 mb-8 md:mb-0">
              <h1 className="text-5xl md:text-6xl font-bold font-serifElegant tracking-wider">
                Bienvenido a Avoté
              </h1>
              <p className="mt-4 text-lg md:text-xl font-sansModern leading-relaxed max-w-lg">
                Descubre la fusión perfecta entre tradición y modernidad en cada gota. Nuestro aceite de aguacate es el
                reflejo de innovación y calidad, elaborado con pasión en todo su esplendor.
              </p>
              <a
                href="#contacto"
                className="mt-6 inline-block bg-green-500 hover:bg-green-400 transition-colors duration-300 text-white py-3 px-6 rounded-full text-lg shadow-xl"
              >
                Contáctanos
              </a>
            </div>
            <div className="flex-1 flex justify-center">
              <img
                src={ProductImage}
                alt="Producto Avoté"
                className="w-full max-w-md md:max-w-lg rounded-lg shadow-2xl transform transition-transform duration-500 hover:scale-105"
              />
            </div>
          </div>
          {/* Detalles decorativos */}
          <div className="absolute top-0 right-0 hidden md:block">
            <div className="w-32 h-32 bg-green-600 rounded-full filter blur-3xl opacity-70 animate-pulse"></div>
          </div>
          <div className="absolute bottom-0 left-0 hidden md:block">
            <div className="w-24 h-24 bg-green-700 rounded-full filter blur-3xl opacity-60 animate-pulse"></div>
          </div>
        </section>

        {/* Sección Nuestra Historia */}
        <section id="historia" className="py-16 px-6 bg-green-100">
          <div className="container mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-serifElegant text-green-900 mb-6">
              Nuestra Historia
            </h2>
            <p className="text-base md:text-lg text-green-800 max-w-3xl mx-auto font-sansModern leading-relaxed">
              Desde tiempos ancestrales, el aguacate ha simbolizado salud y sabiduría. En Avoté, honramos esa rica tradición
              fusionándola con las mejores innovaciones, para ofrecerte un aceite natural, premium y sostenible.
            </p>
          </div>
        </section>

        {/* Sección Misión y Visión */}
        <section id="mision" className="py-16 px-6 bg-green-50">
          <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="text-center md:text-left">
              <h3 className="text-3xl md:text-4xl font-serifElegant text-green-900 mb-4">Misión</h3>
              <p className="text-base md:text-lg text-green-700 font-sansModern leading-relaxed">
                Ofrecer un aceite de aguacate de vanguardia, fusionando métodos tradicionales con la innovación del 2025, en
                un compromiso por la salud y el bienestar.
              </p>
            </div>
            <div className="text-center md:text-left">
              <h3 className="text-3xl md:text-4xl font-serifElegant text-green-900 mb-4">Visión</h3>
              <p className="text-base md:text-lg text-green-700 font-sansModern leading-relaxed">
                Ser referentes globales en productos naturales, inspirando un estilo de vida consciente y saludable, con
                tendencias que marcan el futuro.
              </p>
            </div>
          </div>
        </section>

        {/* Sección Beneficios */}
        <section id="beneficios" className="py-16 px-6 bg-green-100">
          <div className="container mx-auto">
            <h2 className="text-4xl md:text-5xl font-serifElegant text-green-900 mb-10 text-center">Beneficios</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl shadow-lg p-6 transform transition-transform duration-300 hover:-translate-y-2">
                <h3 className="text-2xl font-semibold text-green-800 mb-3">Para la Salud</h3>
                <p className="text-green-700 text-base font-sansModern">
                  Contribuye a un corazón sano y energía vital, gracias a sus grasas saludables y antioxidantes naturales.
                </p>
              </div>
              <div className="bg-white rounded-xl shadow-lg p-6 transform transition-transform duration-300 hover:-translate-y-2">
                <h3 className="text-2xl font-semibold text-green-800 mb-3">Para el Cabello</h3>
                <p className="text-green-700 text-base font-sansModern">
                  Fortalece y nutre, aportándole brillo y reduciendo la caída, dejando tu cabello espectacularmente saludable.
                </p>
              </div>
              <div className="bg-white rounded-xl shadow-lg p-6 transform transition-transform duration-300 hover:-translate-y-2">
                <h3 className="text-2xl font-semibold text-green-800 mb-3">Para la Piel</h3>
                <p className="text-green-700 text-base font-sansModern">
                  Hidrata y repara tu piel, restaurando su vitalidad y suavidad con cada aplicación.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Sección Contacto */}
        <section id="contacto" className="py-16 px-6 bg-green-900 text-white">
          <div className="container mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-serifElegant mb-6">Contacto</h2>
            <p className="text-base md:text-lg font-sansModern mb-6">
              Escríbenos a{' '}
              <a
                href="mailto:contacto@avote.com"
                className="underline text-green-400 hover:text-green-300"
              >
                contacto@avote.com
              </a>{' '}
              o llámanos al <span className="font-semibold">(+505) 8121-2756</span>.
            </p>
            <a
              href="#inicio"
              className="inline-block bg-green-600 hover:bg-green-500 transition-colors duration-300 py-3 px-8 rounded-full text-lg shadow-xl"
            >
              Volver al Inicio
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default OnePage;