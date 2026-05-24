import { useState } from 'react'
import { Mail, MapPin, Linkedin, Github, Send } from 'lucide-react'
import profile from '../data/profile'
import '../styles/contact.css'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const handleSubmit = (e) => {
    e.preventDefault()
    const mailto = `mailto:${profile.email}?subject=Contato do Portfólio - ${form.name}&body=${encodeURIComponent(form.message)}`
    window.location.href = mailto
  }

  return (
    <section className="section" id="contact">
      <div className="container">
        <div className="section-label">Contato</div>
        <h2 className="section-title">Vamos Trabalhar Juntos</h2>
        <p className="section-subtitle">
          Tem um projeto em mente ou quer trocar uma ideia? Estou aberto a novas oportunidades e colaborações.
        </p>

        <div className="contact-content">
          <div className="contact-info">
            <p className="contact-info-text">
              Se você busca um profissional que une desenvolvimento backend robusto com visão analítica para criar soluções completas, entre em contato.
            </p>

            <div className="contact-links">
              <a href={`mailto:${profile.email}`} className="contact-link">
                <div className="contact-link-icon">
                  <Mail size={18} />
                </div>
                <div>
                  <div className="contact-link-text">{profile.email}</div>
                  <div className="contact-link-label">Email</div>
                </div>
              </a>

              <a href={profile.social.linkedin} target="_blank" rel="noopener noreferrer" className="contact-link">
                <div className="contact-link-icon">
                  <Linkedin size={18} />
                </div>
                <div>
                  <div className="contact-link-text">linkedin.com/in/natanaeldeholanda</div>
                  <div className="contact-link-label">LinkedIn</div>
                </div>
              </a>

              <a href={profile.social.github} target="_blank" rel="noopener noreferrer" className="contact-link">
                <div className="contact-link-icon">
                  <Github size={18} />
                </div>
                <div>
                  <div className="contact-link-text">github.com/natanaeldeholanda</div>
                  <div className="contact-link-label">GitHub</div>
                </div>
              </a>

              <div className="contact-link">
                <div className="contact-link-icon">
                  <MapPin size={18} />
                </div>
                <div>
                  <div className="contact-link-text">{profile.location}</div>
                  <div className="contact-link-label">Localização</div>
                </div>
              </div>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <h3 className="contact-form-title">Envie uma mensagem</h3>

            <div className="form-group">
              <input
                type="text"
                className="form-input"
                placeholder="Seu nome"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                required
              />
            </div>

            <div className="form-group">
              <input
                type="email"
                className="form-input"
                placeholder="Seu email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                required
              />
            </div>

            <div className="form-group">
              <textarea
                className="form-textarea"
                placeholder="Sua mensagem"
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                required
              />
            </div>

            <button type="submit" className="btn btn-primary form-submit">
              Enviar Mensagem
              <Send size={16} />
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
