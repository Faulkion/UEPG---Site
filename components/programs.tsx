import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, Users, Heart, Calculator } from "lucide-react"

export function Programs() {
  const programCategories = [
    {
      title: "Ciências Humanas e Sociais",
      icon: <Users className="w-6 h-6" />,
      color: "bg-blue-500",
      programs: [
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
      ],
    },
    {
      title: "Ciências da Saúde",
      icon: <Heart className="w-6 h-6" />,
      color: "bg-red-500",
      programs: ["Enfermagem", "Farmácia", "Medicina", "Odontologia"],
    },
    {
      title: "Ciências Exatas e Tecnológicas",
      icon: <Calculator className="w-6 h-6" />,
      color: "bg-green-500",
      programs: [
        "Engenharia Civil",
        "Engenharia de Computação",
        "Engenharia Elétrica",
        "Ciência da Computação",
        "Matemática",
        "Física",
        "Química",
      ],
    },
    {
      title: "Ciências Agrárias e Biológicas",
      icon: <GraduationCap className="w-6 h-6" />,
      color: "bg-emerald-500",
      programs: ["Agronomia", "Medicina Veterinária", "Zootecnia", "Ciências Biológicas", "Geografia", "Geologia"],
    },
  ]

  return (
    <section id="cursos" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Cursos de Graduação</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore nossa ampla gama de cursos de graduação distribuídos em diferentes áreas do conhecimento
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {programCategories.map((category, index) => (
            <Card key={index} className="h-full">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className={`${category.color} p-2 rounded-lg text-white`}>{category.icon}</div>
                  <CardTitle className="text-xl">{category.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.programs.map((program, programIndex) => (
                    <Badge
                      key={programIndex}
                      variant="secondary"
                      className="text-sm py-1 px-3 hover:bg-blue-100 cursor-pointer transition-colors"
                    >
                      {program}
                    </Badge>
                  ))}
                </div>
                <p className="text-sm text-gray-500 mt-4">{category.programs.length} cursos disponíveis</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
