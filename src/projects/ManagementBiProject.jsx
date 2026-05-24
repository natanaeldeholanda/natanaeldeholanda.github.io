import { Check, Code2, Database, BarChart3, Cpu } from 'lucide-react'
import ProjectShell from '../components/ProjectShell'
import { getProjectBySlug } from '../data/projects'
import '../styles/project-shell.css'

export default function ManagementBiProject() {
  const project = getProjectBySlug('management-bi')

  return (
    <ProjectShell slug="management-bi">
      <div className="project-section">
        <h3 className="project-section-title">
          <Check size={20} className="project-section-title-icon" />
          Funcionalidades Principais
        </h3>
        <div className="project-features">
          {project.features.map((f, i) => (
            <div key={i} className="project-feature">
              <Check size={16} className="project-feature-icon" />
              <span>{f}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="project-section">
        <h3 className="project-section-title">
          <Code2 size={20} className="project-section-title-icon" />
          Stack Tecnológica
        </h3>
        <div className="project-tech-grid">
          {Object.entries(project.techDetails).map(([key, value]) => (
            <div key={key} className="project-tech-card">
              <div className="project-tech-label">{key}</div>
              <div className="project-tech-value">{value}</div>
            </div>
          ))}
        </div>
      </div>
    </ProjectShell>
  )
}
