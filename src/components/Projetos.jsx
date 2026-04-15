import { projetos } from '../data/projetos.js'

export default function Projetos() {
  return (
    <section className="section projetos-sec" id="projetos">
      <div className="container">
        <div className="section-intro">
          <span className="chip"><i className="fas fa-briefcase"></i> Experiências</span>
          <h2>Meus <em>Projetos</em></h2>
        </div>
        <div className="about-cards">
          {projetos.map(p => (
            <div key={p.id} className="about-card">
              <div className="card-top"><span className="card-emoji">{p.emoji}</span></div>
              <h3>{p.titulo}</h3>
              <p>{p.descricao}</p>
              <div className="projeto-tags">
                {p.categorias.map(cat => <span key={cat} className="projeto-tag">{cat}</span>)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
