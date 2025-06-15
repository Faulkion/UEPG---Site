import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, FileText, Calendar, Users } from "lucide-react"

export function HowToJoin() {
  const steps = [
    {
      icon: <FileText className="w-8 h-8" />,
      title: "1. Inscrição no Vestibular",
      description:
        "Realize sua inscrição no processo seletivo da UEPG através do site oficial durante o período de inscrições.",
      details: ["Taxa de inscrição", "Documentos necessários", "Escolha do curso"],
    },
    {
      icon: <Calendar className="w-8 h-8" />,
      title: "2. Preparação e Provas",
      description: "Prepare-se para as provas do vestibular que avaliam conhecimentos do ensino médio.",
      details: ["Cronograma de provas", "Conteúdo programático", "Local das provas"],
    },
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: "3. Resultado e Classificação",
      description: "Acompanhe a divulgação dos resultados e sua classificação no curso escolhido.",
      details: ["Lista de aprovados", "Chamadas subsequentes", "Prazo para recursos"],
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "4. Matrícula",
      description: "Efetue sua matrícula dentro do prazo estabelecido com toda documentação necessária.",
      details: ["Documentos para matrícula", "Prazos", "Orientação acadêmica"],
    },
  ]

  const requirements = [
    "Certificado de conclusão do Ensino Médio",
    "Histórico escolar do Ensino Médio",
    "Documento de identidade (RG)",
    "CPF",
    "Título de eleitor (se maior de 18 anos)",
    "Certificado de reservista (homens)",
    "Comprovante de residência",
    "Fotos 3x4 recentes",
  ]

  return (
    <section id="ingressar" className="bg-gray-50 py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Como Ingressar na UEPG</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Siga os passos abaixo para se tornar um estudante da Universidade Estadual de Ponta Grossa
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {steps.map((step, index) => (
            <Card key={index} className="h-full hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className="bg-[#2B4C7E] text-white p-3 rounded-lg">{step.icon}</div>
                  <CardTitle className="text-xl">{step.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">{step.description}</p>
                <ul className="space-y-2">
                  {step.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="flex items-center text-sm text-gray-500">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Documentos Necessários</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {requirements.map((requirement, index) => (
              <div key={index} className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span className="text-gray-700">{requirement}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 bg-[#2B4C7E] text-white rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">Precisa de Mais Informações?</h3>
          <p className="text-lg mb-6">
            Entre em contato conosco para esclarecer suas dúvidas sobre o processo de ingresso
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <div className="flex items-center justify-center space-x-2">
              <span>📞</span>
              <span>(42) 3220-3000</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <span>✉️</span>
              <span>vestibular@uepg.br</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
