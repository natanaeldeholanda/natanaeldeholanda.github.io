import { useEffect, useRef } from 'react'
import { Briefcase, GraduationCap, ChevronRight } from 'lucide-react'
import { experience, education } from '../data/experience'
import '../styles/experience.css'

const timeline = [
  { type: 'work', ...experience[0] },
  { type: 'edu', ...education[0] },
  { type: 'edu', ...education[1] },
  { type: 'work', ...experience[1] },
  { type: 'edu', ...education[2] },
  { type: 'work', ...experience[2] },
  { type: 'edu', ...education[3] },
  { type: 'edu', ...education[4] },
]

function TimelineItem({ item, index }) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('timeline-item--visible')
          observer.unobserve(el)
        }
      },
      { threshold: 0.15, rootMargin: '-40px 0px' }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const isWork = item.type === 'work'

  return (
    <div
      ref={ref}
      className="timeline-item"
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      <div className="timeline-dot-wrapper">
        <div className={`timeline-dot ${isWork ? 'timeline-dot--work' : 'timeline-dot--edu'}`} />
      </div>
      <div className="timeline-card">
        <div className="timeline-meta">
          <span className={`timeline-type ${isWork ? 'timeline-type--work' : 'timeline-type--edu'}`}>
            {isWork ? <Briefcase size={12} /> : <GraduationCap size={12} />}
            {isWork ? 'Experiência' : 'Formação'}
          </span>
          <span className="timeline-period">{item.period}</span>
        </div>
        <h4 className="timeline-role">{item.role || item.degree}</h4>
        <div className="timeline-company">{item.company || item.school}</div>
        {item.description && (
          <p className="timeline-description">{item.description}</p>
        )}
        {item.achievements && (
          <ul className="timeline-achievements">
            {item.achievements.map((a, i) => (
              <li key={i}>
                <ChevronRight size={14} />
                <span>{a}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}

export default function Experience() {
  return (
    <section className="section experience" id="experience">
      <div className="container">
        <div className="section-label">Jornada Profissional</div>
        <h2 className="section-title">Experiência & Formação</h2>
        <p className="section-subtitle">
          Carreira e aprendizado cresceram lado a lado — cada etapa combina prática e estudo.
        </p>

        <div className="timeline-container">
          {timeline.map((item, i) => (
            <TimelineItem key={`${item.type}-${item.id}`} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
