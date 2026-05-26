import { motion } from 'framer-motion'
import { Quote, Star } from 'lucide-react'
import testimonials from '../data/testimonials'
import '../styles/testimonials.css'

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-100px' },
  transition: { duration: 0.6 }
}

export default function Testimonials() {
  return (
    <section className="section testimonials" id="testimonials">
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="section-label">Depoimentos</div>
          <h2 className="section-title">O Que Dizem Sobre Mim</h2>
          <p className="section-subtitle">
            Feedback de colegas, clientes e parceiros de trabalho.
          </p>
        </motion.div>

        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              className="testimonial-card"
              variants={fadeInUp}
              initial="initial"
              whileInView="whileInView"
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="testimonial-quote-icon">
                <Quote size={32} />
              </div>
              
              <div className="testimonial-stars">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>
              
              <p className="testimonial-content">"{testimonial.content}"</p>
              
              <div className="testimonial-author">
                <div className="testimonial-avatar-placeholder">
                  {testimonial.name.charAt(0)}
                </div>
                <div className="testimonial-info">
                  <div className="testimonial-name">{testimonial.name}</div>
                  <div className="testimonial-role">
                    {testimonial.role} • {testimonial.company}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
