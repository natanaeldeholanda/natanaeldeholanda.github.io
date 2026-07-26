import { ArrowRight, ShieldCheck, Terminal } from 'lucide-react'
import profile from '../data/profile'
import stats from '../data/stats'
import '../styles/hero.css'

const stackChips = ['Java 17 / Spring', 'Arquitetura de Software', 'PostgreSQL / SQL', 'Business Intelligence', 'REST APIs', 'Docker']

export default function Hero() {
  const handleScroll = (id) => {
    const el = document.querySelector(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="hero" id="hero">
      {/* Elementos visuais de fundo elegantes */}
      <div className="hero-bg">
        <div className="hero-mesh" />
        <div className="hero-dots" />
        <div className="hero-line" />
      </div>

      <div className="container">
        <div className="hero-layout">

          {/* Coluna Principal de Conteúdo */}
          <div className="hero-main-content">
            
            {/* Tag / Badge de Disponibilidade & Senioridade */}
            <div className="hero-badge">
              <ShieldCheck size={16} className="hero-badge-icon" />
              <span>Engenharia de Software Sênior &amp; Dados</span>
            </div>

            {/* Cargo / Eyebrow em destaque */}
            <p className="hero-eyebrow">{profile.role}</p>

            {/* Títulos principais perfeitamente alinhados */}
            <h1 className="hero-title">
              Arquitetura Robusta &amp;
            </h1>
            <div className="hero-title-second">
              <span className="gradient-text">Inteligência de Dados</span>
            </div>

            {/* Linha divisória fina com detalhe no cargo */}
            <div className="hero-role">
              <div className="hero-role-line" />
              <span className="hero-role-text">Consultoria Técnica &amp; Desenvolvimento de Soluções Críticas</span>
            </div>

            {/* Breve resumo executivo */}
            <p className="hero-description">{profile.summary}</p>

            {/* Tags de Tecnologias / Competências da Hero */}
            <div className="hero-stack">
              <span className="hero-stack-label">
                <Terminal size={14} style={{ display: 'inline', marginRight: '4px', verticalAlign: 'middle' }} />
                Core Stack:
              </span>
              {stackChips.map((chip) => (
                <span key={chip} className="hero-stack-chip">{chip}</span>
              ))}
            </div>

            {/* Botões de Ação Principais */}
            <div className="hero-actions">
              <button
                className="btn btn-primary"
                onClick={() => handleScroll('#projects')}
              >
                Explorar Soluções e Case Studies
                <ArrowRight size={16} />
              </button>
              <button
                className="btn btn-secondary"
                onClick={() => handleScroll('#contact')}
              >
                Falar com o Especialista
              </button>
            </div>

          </div>

        </div>

        {/* Estatísticas e Números Executivos Alinhados na Base */}
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

      {/* Indicador de Scroll Interativo */}
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
