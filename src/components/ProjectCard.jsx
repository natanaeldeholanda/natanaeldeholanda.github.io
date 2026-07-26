import { Link } from 'react-router-dom'
import { ArrowRight, Github } from 'lucide-react'

export default function ProjectCard({ project }) {
  const hasImage = !!project.image

  return (
    <div className="project-card">
      <Link to={project.link} className="project-card-image-wrap">
        {hasImage ? (
          <div
            className="project-card-image-div"
            style={{
              backgroundImage: `url(${project.image})`,
              backgroundColor: 'var(--bg-elevated)',
            }}
          />
        ) : (
          <div className="project-card-image-placeholder">
            <span>{project.title[0]}</span>
          </div>
        )}
      </Link>

      <div className="project-card-body">
        <h3 className="project-card-title">
          <Link to={project.link}>{project.title}</Link>
        </h3>

        <p className="project-card-description">
          {project.shortDescription}
        </p>

        <div className="project-card-tags">
          {project.tags.map((tag) => (
            <span key={tag} className="project-tag">{tag}</span>
          ))}
        </div>

        <div className="project-card-footer">
          <Link to={project.link} className="project-card-link">
            Ver detalhes
            <ArrowRight size={14} />
          </Link>
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="project-card-link"
              onClick={(e) => e.stopPropagation()}
            >
              <Github size={15} />
            </a>
          )}
        </div>
      </div>
    </div>
  )
}
