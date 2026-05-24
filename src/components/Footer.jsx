import { Github, Linkedin, Twitter, Instagram } from 'lucide-react'
import profile from '../data/profile'
import '../styles/footer.css'

const socialLinks = [
  { icon: Github, url: profile.social.github, label: 'GitHub' },
  { icon: Linkedin, url: profile.social.linkedin, label: 'LinkedIn' },
  { icon: Twitter, url: profile.social.twitter, label: 'Twitter' },
  { icon: Instagram, url: profile.social.instagram, label: 'Instagram' },
]

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
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
                  <Icon size={18} />
                </a>
              )
            })}
          </div>

          <p className="footer-text">
            &copy; {new Date().getFullYear()} <a href={profile.social.linkedin} target="_blank" rel="noopener noreferrer">{profile.name}</a>. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
