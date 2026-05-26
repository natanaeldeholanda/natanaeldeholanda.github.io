import { useState } from 'react'
import { motion } from 'framer-motion'
import projects from '../data/projects'
import ProjectCard from './ProjectCard'
import '../styles/portfolio.css'

const allFilter = { label: 'Todos', value: 'all' }

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('all')
  
  // Extract unique tags for filters
  const filters = [
    allFilter,
    ...Array.from(new Set(projects.flatMap(p => p.tags)))
      .slice(0, 5)
      .map(tag => ({ label: tag, value: tag }))
  ]
  
  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(project => project.tags.includes(activeFilter))

  return (
    <section className="section portfolio" id="projects">
      <div className="container">
        <div className="section-label">Portfólio</div>
        <h2 className="section-title">Projetos em Destaque</h2>
        <p className="section-subtitle">
          Soluções que combinam desenvolvimento backend e análise de dados para gerar resultados reais.
        </p>

        {/* Filter Buttons */}
        <div className="portfolio-filters">
          {filters.map((filter) => (
            <button
              key={filter.value}
              className={`filter-btn ${activeFilter === filter.value ? 'active' : ''}`}
              onClick={() => setActiveFilter(filter.value)}
            >
              {filter.label}
            </button>
          ))}
        </div>

        <motion.div 
          className="projects-grid"
          layout
        >
          {filteredProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </motion.div>
        
        {filteredProjects.length === 0 && (
          <div className="no-projects">
            Nenhum projeto encontrado com este filtro.
          </div>
        )}
      </div>
    </section>
  )
}
