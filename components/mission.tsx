export function Mission() {
  return (
    <section className="bg-[#2B4C7E] text-white py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-8">MISSÃO</h2>
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
            <img src="/images/student-transparent.png" alt="UEPG Student with Laptop" className="w-96 h-auto" />
          </div>
        </div>
      </div>
    </section>
  )
}
