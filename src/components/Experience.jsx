import { motion } from 'framer-motion'
import { Briefcase, GraduationCap, Award, ChevronRight } from 'lucide-react'
import { experience, education } from '../data/experience'
import '../styles/experience.css'

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-100px' },
  transition: { duration: 0.6 }
}

export default function Experience() {
  return (
    <section className="section experience" id="experience">
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="section-label">Jornada Profissional</div>
          <h2 className="section-title">Experiência & Educação</h2>
          <p className="section-subtitle">
            Minha trajetória construída com projetos desafiadores e aprendizado contínuo.
          </p>
        </motion.div>

        <div className="experience-content">
          {/* Experience Timeline */}
          <motion.div 
            className="experience-column"
            variants={fadeInUp}
            initial="initial"
            whileInView="whileInView"
          >
            <div className="experience-section-title">
              <Briefcase size={24} />
              <h3>Experiência Profissional</h3>
            </div>
            
            <div className="timeline">
              {experience.map((item, index) => (
                <motion.div 
                  key={item.id} 
                  className="timeline-item"
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="timeline-marker">
                    <div className="timeline-dot" />
                    {index !== experience.length - 1 && (
                      <div className="timeline-line" />
                    )}
                  </div>
                  
                  <div className="timeline-content">
                    <div className="timeline-header">
                      <div className="timeline-period">{item.period}</div>
                      <Award size={18} className="timeline-badge-icon" />
                    </div>
                    
                    <h4 className="timeline-role">{item.role}</h4>
                    <div className="timeline-company">{item.company}</div>
                    
                    <p className="timeline-description">{item.description}</p>
                    
                    {item.achievements && (
                      <ul className="timeline-achievements">
                        {item.achievements.map((achievement, i) => (
                          <li key={i}>
                            <ChevronRight size={16} />
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Education Timeline */}
          <motion.div 
            className="experience-column"
            variants={fadeInUp}
            initial="initial"
            whileInView="whileInView"
          >
            <div className="experience-section-title">
              <GraduationCap size={24} />
              <h3>Educação</h3>
            </div>
            
            <div className="timeline">
              {education.map((item, index) => (
                <motion.div 
                  key={item.id} 
                  className="timeline-item"
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="timeline-marker">
                    <div className="timeline-dot" />
                    {index !== education.length - 1 && (
                      <div className="timeline-line" />
                    )}
                  </div>
                  
                  <div className="timeline-content">
                    <div className="timeline-header">
                      <div className="timeline-period">{item.period}</div>
                      <GraduationCap size={18} className="timeline-badge-icon" />
                    </div>
                    
                    <h4 className="timeline-role">{item.degree}</h4>
                    <div className="timeline-company">{item.school}</div>
                    
                    {item.description && (
                      <p className="timeline-description">{item.description}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
