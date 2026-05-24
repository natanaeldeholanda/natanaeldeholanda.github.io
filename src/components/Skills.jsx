import { Code2, Database, BarChart3 } from 'lucide-react'
import skills from '../data/skills'
import '../styles/skills.css'

const iconMap = {
  Code2,
  Database,
  BarChart3,
}

export default function Skills() {
  return (
    <section className="section" id="skills">
      <div className="container">
        <div className="section-label">Competências</div>
        <h2 className="section-title">Hard Skills</h2>
        <p className="section-subtitle">
          Tecnologias e ferramentas que domino para entregar soluções completas.
        </p>

        <div className="skills-grid">
          {skills.map((category) => {
            const Icon = iconMap[category.icon]
            return (
              <div key={category.category} className="skill-card">
                <div className="skill-card-header">
                  <div className="skill-card-icon">
                    <Icon size={22} />
                  </div>
                  <h3 className="skill-card-title">{category.category}</h3>
                </div>

                <div className="skill-items">
                  {category.items.map((skill) => (
                    <div key={skill.name} className="skill-item">
                      <div className="skill-item-header">
                        <span className="skill-item-name">{skill.name}</span>
                        <span className="skill-item-level">{skill.level}%</span>
                      </div>
                      <div className="skill-bar">
                        <div
                          className="skill-bar-fill"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
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
