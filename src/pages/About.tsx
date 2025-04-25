const About = () => {
  return (
    <div className="bg-green-50 min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold text-green-600 text-center mb-6">
          Beneficios y Elaboración
        </h1>
        <div className="bg-white shadow-lg rounded-lg p-6 mb-8">
          <h2 className="text-3xl font-bold text-green-600 mb-4">
            Descripción Detallada de la Elaboración
          </h2>
          <ul className="list-disc list-inside text-gray-700">
            <li>Selección de aguacates maduros de alta calidad.</li>
            <li>Los frutos se lavan y se pelan.</li>
            <li>Se conserva solo la pulpa.</li>
            <li>La pulpa se tritura hasta formar una pasta suave.</li>
            <li>La pulpa se prensa manualmente extrayendo un líquido que contiene aceite.</li>
          </ul>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-3xl font-bold text-green-600 mb-4">Beneficios</h2>
          <h3 className="text-2xl font-semibold text-green-500 mb-2">Para la Salud</h3>
          <p className="text-gray-700 mb-4">
            Rico en grasas saludables, contiene ácido oleico que ayuda a reducir el colesterol
            malo y aumentar el bueno.
          </p>
          <h3 className="text-2xl font-semibold text-green-500 mb-2">Para el Cabello</h3>
          <p className="text-gray-700 mb-4">
            Fortalece el cabello, previene la caída y estimula el crecimiento, aportando brillo y
            suavidad.
          </p>
          <h3 className="text-2xl font-semibold text-green-500 mb-2">Para la Piel</h3>
          <p className="text-gray-700">
            Hidrata profundamente, mejora la elasticidad y previene el envejecimiento.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;