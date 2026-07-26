import { Code2, Database, BarChart3 } from 'lucide-react'
import skills from '../data/skills'
import '../styles/skills.css'

const iconMap = { Code2, Database, BarChart3 }

export default function Skills() {
  return (
    <section className="section skills-section" id="skills">
      <div className="container">
        <div className="section-label">Competências</div>
        <h2 className="section-title">Hard Skills</h2>
        <p className="section-subtitle">
          Tecnologias e ferramentas para entregar soluções completas.
        </p>

        <div className="skills-grid">
          {skills.map((category) => {
            const Icon = iconMap[category.icon]
            return (
              <div key={category.category} className="skill-card">
                <div className="skill-card-header">
                  <div className="skill-card-icon">
                    <Icon size={20} />
                  </div>
                  <h3 className="skill-card-title">{category.category}</h3>
                </div>

                <div className="skill-chips">
                  {category.items.map((name) => (
                    <div key={name} className="skill-chip">
                      <span className="skill-chip-name">{name}</span>
                    </div>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
