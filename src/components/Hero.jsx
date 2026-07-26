import { ArrowRight, Terminal } from 'lucide-react'
import profile from '../data/profile'
import '../styles/hero.css'

export default function Hero() {
  const handleScroll = (id) => {
    const el = document.querySelector(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="hero" id="hero">
      <div className="hero-bg">
        <div className="hero-mesh" />
        <div className="hero-line" />
      </div>

      <div className="container">
        <div className="hero-layout">
          <div className="hero-main-content">
            <h1 className="hero-title">
              Arquitetura Java
            </h1>
            <div className="hero-title-second">
              <span className="gradient-text">Inteligência de Dados</span>
            </div>

            <div className="hero-role">
              <div className="hero-role-line" />
              <span className="hero-role-text">{profile.role}</span>
            </div>

            <p className="hero-description">{profile.summary}</p>

            <div className="hero-stats-inline">
              <span>15+ projetos</span>
              <span className="hero-stats-dot">·</span>
              <span>12+ tecnologias</span>
              <span className="hero-stats-dot">·</span>
              <span>3.000+ horas de código</span>
            </div>

            <div className="hero-actions">
              <button
                className="btn btn-primary"
                onClick={() => handleScroll('#projects')}
              >
                Ver projetos
                <ArrowRight size={16} />
              </button>
              <button
                className="btn btn-secondary"
                onClick={() => handleScroll('#contact')}
              >
                Entrar em contato
              </button>
            </div>
          </div>
        </div>
      </div>

      <div
        className="scroll-indicator"
        onClick={() => handleScroll('#about')}
        role="button"
        tabIndex={0}
      >
        <span>Explorar</span>
        <div className="scroll-indicator-line" />
      </div>
    </section>
  )
}
