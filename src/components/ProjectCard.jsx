import { Link } from 'react-router-dom'
import { ArrowUpRight, Image as ImageIcon } from 'lucide-react'

export default function ProjectCard({ project, index }) {
  const num = String(index + 1).padStart(2, '0')

  return (
    <div className="project-card">
      {/* Imagem */}
      <div className="project-card-image-wrap">
        <span className="project-card-number">Project {num}</span>

        {project.image ? (
          <div
            className="project-card-image-div"
            style={{ backgroundImage: `url(${project.image})` }}
          />
        ) : (
          <div className="project-card-image-placeholder">
            <ImageIcon size={28} />
          </div>
        )}
      </div>

      {/* Body */}
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
            <ArrowUpRight size={15} />
          </Link>
        </div>
      </div>
    </div>
  )
}
