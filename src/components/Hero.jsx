export default function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="hero-container">
        <div className="hero-text-col">
          <span className="hero-badge">Portfólio Pessoal</span>
          <h1>Kaenny<br />Ribeiro<br /><span className="accent">Granja</span></h1>
          <p>Profissional comprometida, com olhar acolhedor e postura determinada. Sempre em busca de aprender, crescer e contribuir de forma significativa.</p>
          <div className="hero-btns">
            <a href="#contato" className="btn-warm">Fale comigo</a>
            <a href="#sobre" className="btn-ghost">Sobre mim <i className="fas fa-chevron-down"></i></a>
          </div>
        </div>
        <div className="hero-photo-col">
          <div className="blob-shape"></div>
          <img src="/perfil.jpg" alt="Kaenny Ribeiro Granja" className="hero-img" />
        </div>
      </div>
      <svg className="wave-divider" viewBox="0 0 1440 120" preserveAspectRatio="none">
        <path d="M0,80 C360,140 720,20 1080,80 C1260,110 1380,60 1440,80 L1440,120 L0,120 Z" fill="var(--cream)"/>
      </svg>
    </section>
  )
}
