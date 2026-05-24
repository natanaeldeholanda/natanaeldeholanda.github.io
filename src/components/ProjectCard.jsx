import { Link } from 'react-router-dom'
import { ArrowUpRight, Image as ImageIcon } from 'lucide-react'

export default function ProjectCard({ project }) {
  return (
    <div className="project-card">
      {project.image ? (
        <div
          className="project-card-image"
          style={{ backgroundImage: `url(${project.image})` }}
        />
      ) : (
        <div className="project-card-image-placeholder">
          <ImageIcon size={32} />
        </div>
      )}

      <div className="project-card-body">
        <h3 className="project-card-title">{project.title}</h3>
        <p className="project-card-description">{project.shortDescription}</p>

        <div className="project-card-tags">
          {project.tags.map((tag) => (
            <span key={tag} className="project-tag">{tag}</span>
          ))}
        </div>

        <div className="project-card-footer">
          <Link to={project.link} className="project-card-link">
            Ver Detalhes
            <ArrowUpRight size={16} />
          </Link>
        </div>
      </div>
    </div>
  )
}
