import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { History } from "@/components/history"
import { Mission } from "@/components/mission"
import { Courses } from "@/components/courses"
import { HowToJoin } from "@/components/how-to-join"

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <About />
      <History />
      <Mission />
      <Courses />
      <HowToJoin />
    </div>
  )
}
