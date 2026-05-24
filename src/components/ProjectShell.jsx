import { Link } from 'react-router-dom'
import { ArrowLeft, ArrowRight, Check, Code2, Database, BarChart3, Cpu } from 'lucide-react'
import { getAllProjects } from '../data/projects'
import '../styles/project-shell.css'

const sectionIconMap = {
  features: Check,
  backend: Code2,
  database: Database,
  bi: BarChart3,
  infra: Cpu,
  others: Cpu,
}

export default function ProjectShell({ slug, children }) {
  const projects = getAllProjects()
  const currentIndex = projects.findIndex((p) => p.slug === slug)
  const project = projects[currentIndex]

  if (!project) return null

  const prev = currentIndex > 0 ? projects[currentIndex - 1] : null
  const next = currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null

  return (
    <div className="project-page">
      <div className="container">
        <Link to="/#projects" className="project-back">
          <ArrowLeft size={18} />
          Voltar para Projetos
        </Link>

        <div className="project-header">
          <div className="project-header-tags">
            {project.tags.map((tag) => (
              <span key={tag} className="project-tag">{tag}</span>
            ))}
          </div>
          <h1 className="project-header-title gradient-text">{project.title}</h1>
          <p className="project-header-description">{project.fullDescription}</p>
        </div>

        {children}

        <div className="project-navigation">
          {prev ? (
            <Link to={prev.link} className="project-nav-link">
              <ArrowLeft size={18} className="project-nav-arrow" />
              <div>
                <div className="project-nav-label">Anterior</div>
                <div className="project-nav-title">{prev.title}</div>
              </div>
            </Link>
          ) : <div />}

          {next ? (
            <Link to={next.link} className="project-nav-link" style={{ textAlign: 'right' }}>
              <div>
                <div className="project-nav-label">Próximo</div>
                <div className="project-nav-title">{next.title}</div>
              </div>
              <ArrowRight size={18} className="project-nav-arrow" />
            </Link>
          ) : <div />}
        </div>
      </div>
    </div>
  )
}
