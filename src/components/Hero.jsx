import { ArrowRight, ChevronDown } from 'lucide-react'
import profile from '../data/profile'
import stats from '../data/stats'
import '../styles/hero.css'

export default function Hero() {
  const handleScroll = (id) => {
    const el = document.querySelector(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="hero" id="hero">
      <div className="hero-bg">
        <div className="hero-gradient hero-gradient-1" />
        <div className="hero-gradient hero-gradient-2" />
        <div className="hero-gradient hero-gradient-3" />
        <div className="hero-grid" />
      </div>

      <div className="container">
        <div className="hero-content">
          <div className="hero-badge">
            <span className="hero-badge-dot" />
            Disponível para novos projetos
          </div>

          <h1 className="hero-title">
            Transformando Dados Brutos em
            <span className="gradient-text">Código Eficiente e Decisões Inteligentes</span>
          </h1>

          <p className="hero-subtitle">{profile.role}</p>

          <p className="hero-description">{profile.summary}</p>

          <div className="hero-actions">
            <button
              className="btn btn-primary"
              onClick={() => handleScroll('#projects')}
            >
              Ver Projetos
              <ArrowRight size={18} />
            </button>
            <button
              className="btn btn-secondary"
              onClick={() => handleScroll('#contact')}
            >
              Entrar em Contato
            </button>
          </div>

          <div className="hero-stats">
            {stats.map((stat) => (
              <div key={stat.label}>
                <div className="hero-stat-value">
                  {stat.value}{stat.suffix}
                </div>
                <div className="hero-stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="scroll-indicator">
        <span>Scroll</span>
        <div className="scroll-indicator-line" />
      </div>
    </section>
  )
}
