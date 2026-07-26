import { Github, Linkedin, Twitter, Instagram } from 'lucide-react'
import profile from '../data/profile'
import '../styles/footer.css'

const socialLinks = [
  { icon: Github,    url: profile.social.github,    label: 'GitHub' },
  { icon: Linkedin,  url: profile.social.linkedin,  label: 'LinkedIn' },
  { icon: Twitter,   url: profile.social.twitter,   label: 'Twitter' },
  { icon: Instagram, url: profile.social.instagram, label: 'Instagram' },
]

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div>
            <p className="footer-tagline">
              Código que resolve problemas reais.
            </p>
            <p className="footer-subtitle">
              Backend robusto &middot; Dados estratégicos &middot; Decisões inteligentes
            </p>
          </div>

          <div className="footer-social">
            {socialLinks.map((link) => {
              const Icon = link.icon
              return (
                <a
                  key={link.label}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-social-link"
                  aria-label={link.label}
                >
                  <Icon size={16} />
                </a>
              )
            })}
          </div>

          <div className="footer-divider" />

          <div className="footer-bottom">
            <p className="footer-text">
              &copy; {new Date().getFullYear()}{' '}
              <a href={profile.social.linkedin} target="_blank" rel="noopener noreferrer">
                {profile.name}
              </a>
              {' '}&middot; Todos os direitos reservados.
            </p>
            <p className="footer-stack">
              <span>Java</span>
              <span className="footer-stack-sep">&middot;</span>
              <span>Spring Boot</span>
              <span className="footer-stack-sep">&middot;</span>
              <span>PostgreSQL</span>
              <span className="footer-stack-sep">&middot;</span>
              <span>Power BI</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
