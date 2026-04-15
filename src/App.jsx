import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import Sobre from './components/Sobre.jsx'
import Jornada from './components/Jornada.jsx'
import Habilidades from './components/Habilidades.jsx'
import Projetos from './components/Projetos.jsx'
import Contato from './components/Contato.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Sobre />
        <Jornada />
        <Habilidades />
        <Projetos />
        <Contato />
      </main>
      <Footer />
    </>
  )
}
