import { habilidades } from '../data/projetos.js'

function Ring({ percent }) {
  const r = 52
  const c = 2 * Math.PI * r
  const offset = c - (c * percent) / 100
  return (
    <div className="ring-wrap">
      <svg className="ring-svg" viewBox="0 0 120 120">
        <circle className="ring-bg" cx="60" cy="60" r={r} />
        <circle
          className="ring-fill"
          cx="60" cy="60" r={r}
          style={{ strokeDasharray: c, strokeDashoffset: offset }}
        />
      </svg>
      <span className="ring-val">{percent}%</span>
    </div>
  )
}

export default function Habilidades() {
  return (
    <section className="section habilidades" id="habilidades">
      <div className="container">
        <div className="section-intro">
          <span className="chip"><i className="fas fa-star"></i> Competências</span>
          <h2>Minhas <em>Habilidades</em></h2>
        </div>
        <div className="skills-ring-grid">
          {habilidades.map(h => (
            <div key={h.id} className="skill-ring-card">
              <Ring percent={h.percent} />
              <h3>{h.nome}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
