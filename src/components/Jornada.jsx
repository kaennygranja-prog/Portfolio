import { jornada } from '../data/projetos.js'

export default function Jornada() {
  return (
    <>
      <div className="wave-section">
        <svg viewBox="0 0 1440 100" preserveAspectRatio="none">
          <path d="M0,40 C480,100 960,0 1440,40 L1440,100 L0,100 Z" fill="var(--brown-dark)"/>
        </svg>
      </div>
      <section className="section jornada" id="jornada">
        <div className="container">
          <div className="section-intro light">
            <span className="chip chip-light"><i className="fas fa-road"></i> Trajetória</span>
            <h2>Minha <em>Jornada</em></h2>
          </div>
          <div className="journey-cards">
            {jornada.map(j => (
              <div key={j.id} className="journey-card">
                <div className="journey-num">{j.numero}</div>
                <div className="journey-body">
                  <span className="journey-tag">{j.tag}</span>
                  <h3>{j.titulo}</h3>
                  <p>{j.descricao}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <div className="wave-section wave-up">
        <svg viewBox="0 0 1440 100" preserveAspectRatio="none">
          <path d="M0,60 C480,0 960,100 1440,60 L1440,0 L0,0 Z" fill="var(--brown-dark)"/>
        </svg>
      </div>
    </>
  )
}
