const contatos = [
  { href: 'mailto:kaenny08rg@gmail.com', icon: 'fas fa-envelope', label: 'E-mail', value: 'kaenny08rg@gmail.com' },
  { href: 'https://github.com/kaennygranja-prog', icon: 'fab fa-github', label: 'GitHub', value: 'kaennygranja-prog' },
]

export default function Contato() {
  return (
    <section className="section contato" id="contato">
      <div className="container">
        <div className="section-intro">
          <span className="chip"><i className="fas fa-hand-holding-heart"></i> Vamos conversar</span>
          <h2>Entre em <em>Contato</em></h2>
        </div>
        <p className="contact-desc">Estou aberta a novas oportunidades e conexões. Sinta-se à vontade para entrar em contato!</p>
        <div className="contact-boxes">
          {contatos.map(c => (
            <a key={c.label} href={c.href} target="_blank" rel="noopener noreferrer" className="contact-box">
              <div className="cbox-icon"><i className={c.icon}></i></div>
              <span className="cbox-label">{c.label}</span>
              <span className="cbox-value">{c.value}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
