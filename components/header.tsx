import Link from "next/link"

export function Header() {
  return (
    <header className="bg-[#2B4C7E] text-white">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <img
              src="/images/uepg-logo.png"
              alt="UEPG - Universidade Estadual de Ponta Grossa"
              className="h-12 w-auto"
            />
          </div>

          <nav className="hidden md:flex space-x-12">
            <Link
              href="#sobre"
              className="text-white font-medium hover:text-gray-200 transition-colors duration-200 text-sm tracking-wide"
            >
              SOBRE
            </Link>
            <Link
              href="#historia"
              className="text-white font-medium hover:text-gray-200 transition-colors duration-200 text-sm tracking-wide"
            >
              HISTÓRIA
            </Link>
            <Link
              href="#cursos"
              className="text-white font-medium hover:text-gray-200 transition-colors duration-200 text-sm tracking-wide"
            >
              CURSOS
            </Link>
            <Link
              href="#ingressar"
              className="text-white font-medium hover:text-gray-200 transition-colors duration-200 text-sm tracking-wide"
            >
              COMO INGRESSAR
            </Link>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button className="text-white hover:text-gray-200 transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}
