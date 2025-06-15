export function About() {
  return (
    <section id="sobre" className="bg-[#2B4C7E] text-white py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-8">SOBRE</h2>
            <p className="text-lg leading-relaxed">
              A finalidade que justifica a existência da UEPG enquanto Instituição de Ensino Superior do complexo
              educacional do Estado do Paraná, autarquia de direito público e que busca seus objetivos estratégicos
              junto à sociedade, é formar profissionais e cidadãos, produzir conhecimento científico, tecnológico e
              cultural, aplicar e difundir o patrimônio universal do saber humano, capacitando todos os seus integrantes
              a serem agentes transformadores da realidade na ideia de ação solidária entre a ensino de graduação e
              pós-graduação, a pesquisa e a extensão.
            </p>
          </div>
          <div className="flex justify-center">
            <img
              src="/images/building1.jpg"
              alt="UEPG University Building"
              className="rounded-lg shadow-lg w-full max-w-lg h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
