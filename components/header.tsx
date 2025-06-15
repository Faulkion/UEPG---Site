import Link from "next/link"

export function Header() {
  return (
    <header className="bg-[#2B4C7E] text-white">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <span className="text-2xl font-bold">UEPG</span>
          </div>

          <nav className="hidden md:flex space-x-8">
            <Link href="#sobre" className="hover:text-gray-200 transition-colors">
              SOBRE
            </Link>
            <Link href="#historia" className="hover:text-gray-200 transition-colors">
              HISTÓRIA
            </Link>
            <Link href="#cursos" className="hover:text-gray-200 transition-colors">
              CURSOS
            </Link>
            <Link href="#ingressar" className="hover:text-gray-200 transition-colors">
              COMO INGRESSAR
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}
