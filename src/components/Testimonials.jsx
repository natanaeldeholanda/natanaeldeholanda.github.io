import { Quote } from 'lucide-react'
import testimonials from '../data/testimonials'
import '../styles/testimonials.css'

export default function Testimonials() {
  return (
    <section className="section testimonials" id="testimonials">
      <div className="container">
        <div className="section-label">Depoimentos</div>
        <h2 className="section-title">O Que Dizem Sobre Mim</h2>
        <p className="section-subtitle">
          Feedback de colegas, clientes e parceiros de trabalho.
        </p>

        <div className="testimonials-grid">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="testimonial-card">
              <div className="testimonial-quote-icon">
                <Quote size={28} />
              </div>

              <p className="testimonial-content">"{testimonial.content}"</p>

              <div className="testimonial-author">
                <div className="testimonial-avatar-placeholder">
                  {testimonial.name.charAt(0)}
                </div>
                <div className="testimonial-info">
                  <div className="testimonial-name">{testimonial.name}</div>
                  <div className="testimonial-role">
                    {testimonial.role} &middot; {testimonial.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
