import { Code2, Database, BarChart3 } from 'lucide-react'
import '../styles/skills.css'

const iconMap = { Code2, Database, BarChart3 }

/** Converte nível numérico em badge semântico */
function levelBadge(level) {
  if (level >= 80) return { label: 'Expert',     cls: 'skill-chip-badge--expert' }
  if (level >= 65) return { label: 'Proficient', cls: 'skill-chip-badge--proficient' }
  return             { label: 'Familiar',        cls: 'skill-chip-badge--familiar' }
}

const skills = [
  {
    category: 'Engenharia & Backend',
    icon: 'Code2',
    items: [
      { name: 'Java / Spring Boot',       level: 80 },
      { name: 'Arquitetura de Software',  level: 70 },
      { name: 'APIs RESTful',             level: 85 },
      { name: 'Microserviços',            level: 65 },
    ],
  },
  {
    category: 'Banco de Dados',
    icon: 'Database',
    items: [
      { name: 'PostgreSQL',          level: 80 },
      { name: 'SQL Server',          level: 75 },
      { name: 'MySQL',               level: 75 },
      { name: 'Modelagem de Dados',  level: 80 },
      { name: 'Otimização de Queries', level: 70 },
    ],
  },
  {
    category: 'Data Analytics & BI',
    icon: 'BarChart3',
    items: [
      { name: 'Power BI (DAX, ETL)',     level: 75 },
      { name: 'Metabase',               level: 70 },
      { name: 'Tableau',                level: 60 },
      { name: 'Storytelling com Dados', level: 75 },
    ],
  },
]

export default function Skills() {
  return (
    <section className="section skills-section" id="skills">
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
                    <Icon size={20} />
                  </div>
                  <h3 className="skill-card-title">{category.category}</h3>
                </div>

                <div className="skill-chips">
                  {category.items.map((skill) => {
                    const badge = levelBadge(skill.level)
                    return (
                      <div key={skill.name} className="skill-chip">
                        <span className="skill-chip-name">{skill.name}</span>
                        <span className={`skill-chip-badge ${badge.cls}`}>
                          {badge.label}
                        </span>
                      </div>
                    )
                  })}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
