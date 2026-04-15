const cards = [
  { emoji: '💡', titulo: 'Meu Perfil', texto: 'Sou Kaenny Ribeiro Granja, uma profissional que acredita no poder da dedicação e da empatia. Encaro cada desafio com determinação e uma postura colaborativa.' },
  { emoji: '🎯', titulo: 'Meus Objetivos', texto: 'Busco oportunidades que me permitam crescer profissionalmente e contribuir com equipes que valorizam a ética, o respeito e o trabalho em conjunto.' },
  { emoji: '🌱', titulo: 'Meus Valores', texto: 'Empatia, responsabilidade, proatividade e aprendizado contínuo são os pilares que orientam minha vida pessoal e profissional.' },
]

export default function Sobre() {
  return (
    <section className="section sobre" id="sobre">
      <div className="container">
        <div className="section-intro">
          <span className="chip"><i className="fas fa-seedling"></i> Quem sou eu</span>
          <h2>Sobre <em>Mim</em></h2>
        </div>
        <div className="about-cards">
          {cards.map(c => (
            <div key={c.titulo} className="about-card">
              <div className="card-top"><span className="card-emoji">{c.emoji}</span></div>
              <h3>{c.titulo}</h3>
              <p>{c.texto}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
