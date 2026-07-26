import { ArrowRight } from 'lucide-react'
import profile from '../data/profile'
import stats from '../data/stats'
import '../styles/hero.css'

const stackChips = ['Java 17', 'Spring Boot', 'PostgreSQL', 'Power BI', 'REST API', 'Docker']

export default function Hero() {
  const handleScroll = (id) => {
    const el = document.querySelector(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="hero" id="hero">
      {/* Background */}
      <div className="hero-bg">
        <div className="hero-mesh" />
        <div className="hero-dots" />
        <div className="hero-line" />
      </div>

      <div className="container">
        <div className="hero-content">

          {/* Status badge */}
          <div className="hero-badge">
            <span className="hero-badge-dot" />
            Disponível para novos projetos
          </div>

          {/* Eyebrow */}
          <p className="hero-eyebrow">Desenvolvedor Backend &amp; Analista de Dados</p>

          {/* Headline */}
          <h1 className="hero-title">Transformando Dados</h1>
          <div className="hero-title-second">
            em <span className="gradient-text">Decisões de Negócio</span>
          </div>

          {/* Role line */}
          <div className="hero-role">
            <div className="hero-role-line" />
            <span className="hero-role-text">{profile.role}</span>
          </div>

          {/* Description */}
          <p className="hero-description">{profile.summary}</p>

          {/* Stack chips */}
          <div className="hero-stack">
            <span className="hero-stack-label">Stack</span>
            {stackChips.map((chip) => (
              <span key={chip} className="hero-stack-chip">{chip}</span>
            ))}
          </div>

          {/* CTA */}
          <div className="hero-actions">
            <button
              className="btn btn-primary"
              onClick={() => handleScroll('#projects')}
            >
              Ver Projetos
              <ArrowRight size={16} />
            </button>
            <button
              className="btn btn-secondary"
              onClick={() => handleScroll('#contact')}
            >
              Entrar em Contato
            </button>
          </div>

          {/* Stats */}
          <div className="hero-stats">
            {stats.map((stat) => (
              <div key={stat.label} className="hero-stat">
                <div className="hero-stat-value">
                  {stat.value}<span>{stat.suffix}</span>
                </div>
                <div className="hero-stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="scroll-indicator"
        onClick={() => handleScroll('#about')}
        role="button"
        tabIndex={0}
      >
        <span>Scroll</span>
        <div className="scroll-indicator-line" />
      </div>
    </section>
  )
}
