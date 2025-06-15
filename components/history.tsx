export function History() {
  return (
    <section id="historia" className="bg-gray-50 py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-gray-900 mb-8">HISTÓRIA</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              A Universidade Estadual de Ponta Grossa (UEPG) foi criada em 6 de novembro de 1969, através da Lei nº
              6034, a Universidade pelo Decreto nº 18.111, de 28 de janeiro de 1970, unindo faculdades existentes já
              documentadas em Farmácia e Bioquímica e Odontologia, Direito e Ciências Econômicas e Administração.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Reconhecida pelo governo federal em 1973, a UEPG teve como primeiros dirigentes o Reitor Álvaro Augusto
              Cunha Rocha (1970-1974); Reitor Cleto Serafim Rios (1974-1978); Reitor Tufy Nader (1978-1982); Reitor
              Onildo Pereira da Silva (1982-1986); Reitor Ruy Brito Cunha Lima (1986-1990); Reitor Ney Leprevost
              (1990-1994); Reitor Jonel Thiago de Mattos (1994-1998); Reitor Ruy Brito Cunha Lima (1998-2002); Reitor
              Daniel Albach Tavares e Waldir Silva Couto (1978-1981); Escola Paulista e João Lúcio (1981-1987); Reitor
              Luis Carlos Gabardo (1987-1991); João Carlos Gomes e Antônio Paulino Ribeiro Neto (1991-1995); Reitor
              Sérgio Grando (2002-2006); João Carlos Gomes e Carlos Luciano Santana Vargas (2006-2010) e reeleição para
              mais dois anos, com mandato até 2014. Atualmente, a Universidade Estadual de Ponta Grossa é dirigida pelo
              Reitor Miguel Sanches Neto.
            </p>
          </div>
          <div>
            <img
              src="/images/building2.jpg"
              alt="Historic UEPG Building"
              className="rounded-lg shadow-lg w-full max-w-2xl h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
