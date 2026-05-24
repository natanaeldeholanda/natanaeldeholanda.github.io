import { Code2, Database, BarChart3 } from 'lucide-react'
import about from '../data/about'
import '../styles/about.css'

const highlights = [
  { icon: Code2, label: 'Engenharia de Software' },
  { icon: Database, label: 'Modelagem de Dados' },
  { icon: BarChart3, label: 'Business Intelligence' },
]

export default function About() {
  return (
    <section className="section about" id="about">
      <div className="container">
        <div className="section-label">Sobre Mim</div>
        <h2 className="section-title">Engenharia e Dados na Prática</h2>
        <p className="section-subtitle">
          Da arquitetura de sistemas à visualização de dados — resolvendo problemas de ponta a ponta.
        </p>

        <div className="about-content">
          <div className="about-image-wrapper">
            <img
              src="/images/bg/Natanael%202.jpeg"
              alt="Natanael de Holanda"
              className="about-image"
              onError={(e) => {
                e.target.style.display = 'none'
              }}
            />
            <div className="about-image-glow" />
          </div>

          <div className="about-text">
            {about.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}

            <div className="about-highlights">
              {highlights.map((item) => {
                const Icon = item.icon
                return (
                  <div key={item.label} className="about-highlight">
                    <div className="about-highlight-icon">
                      <Icon size={20} />
                    </div>
                    <h4>{item.label}</h4>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
