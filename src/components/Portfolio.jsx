import projects from '../data/projects'
import ProjectCard from './ProjectCard'
import '../styles/portfolio.css'

export default function Portfolio() {
  return (
    <section className="section portfolio" id="projects">
      <div className="container">
        <div className="section-label">Portfólio</div>
        <h2 className="section-title">Projetos em Destaque</h2>
        <p className="section-subtitle">
          Soluções que combinam desenvolvimento backend e análise de dados para gerar resultados reais.
        </p>

        <div className="projects-grid">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}
