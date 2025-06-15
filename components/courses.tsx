export function Courses() {
  const exactCourses = [
    "Agronomia",
    "Bacharelado em Ciências Biológicas",
    "Bacharelado em Educação Física",
    "Bacharelado em Geografia",
    "Bacharelado em Geologia",
    "Bacharelado em Matemática Aplicada",
    "Bacharelado em Química Tecnológica",
    "Engenharia Civil",
    "Engenharia de Alimentos",
    "Engenharia de Computação",
    "Engenharia de Materiais",
    "Engenharia Química",
    "Licenciatura em Ciências Biológicas",
    "Licenciatura em Educação Física",
    "Licenciatura em Física",
    "Licenciatura em Geografia",
    "Licenciatura em Matemática",
    "Licenciatura em Química",
    "Zootecnia",
  ]

  const humanCourses = [
    "Administração",
    "Administração e Comércio Exterior",
    "Bacharelado em História",
    "Ciências Contábeis",
    "Ciências Econômicas",
    "Direito",
    "Jornalismo",
    "Licenciatura em Artes Visuais",
    "Licenciatura em História",
    "Licenciatura em Letras",
    "Licenciatura em Música",
    "Pedagogia",
    "Serviço Social",
    "Turismo",
  ]

  const healthCourses = ["Enfermagem", "Farmácia", "Medicina", "Odontologia"]

  return (
    <section id="cursos" className="bg-gray-50 py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-gray-900 mb-12">Nossos Cursos:</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-[#2B4C7E] text-white p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-4 text-center">Ciências Exatas e da Terra</h3>
            <ul className="space-y-2 text-sm">
              {exactCourses.map((course, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-blue-300 mr-2">•</span>
                  {course}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-[#2B4C7E] text-white p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-4 text-center">Ciências Humanas e Sociais</h3>
            <ul className="space-y-2 text-sm">
              {humanCourses.map((course, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-blue-300 mr-2">•</span>
                  {course}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-[#2B4C7E] text-white p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-4 text-center">Ciências da Saúde</h3>
            <ul className="space-y-2 text-sm">
              {healthCourses.map((course, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-blue-300 mr-2">•</span>
                  {course}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
