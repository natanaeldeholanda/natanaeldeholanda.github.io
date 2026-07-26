import { useState, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import '../styles/navbar.css'

const navItems = [
  { label: 'Início',      href: '#hero' },
  { label: 'Sobre',       href: '#about' },
  { label: 'Habilidades', href: '#skills' },
  { label: 'Projetos',    href: '#projects' },
  { label: 'Contato',     href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled]     = useState(false)
  const [menuOpen, setMenuOpen]     = useState(false)
  const [activeSection, setActive]  = useState('#hero')
  const location   = useLocation()
  const isHome     = location.pathname === '/'
  const observerRef = useRef(null)

  /* scroll shadow */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  /* active section via IntersectionObserver */
  useEffect(() => {
    if (!isHome) return

    const sections = navItems
      .map(({ href }) => document.querySelector(href))
      .filter(Boolean)

    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(`#${entry.target.id}`)
          }
        })
      },
      { rootMargin: '-40% 0px -55% 0px', threshold: 0 }
    )

    sections.forEach((s) => observerRef.current.observe(s))
    return () => observerRef.current?.disconnect()
  }, [isHome])

  const handleNavClick = (href) => {
    setMenuOpen(false)
    if (!isHome) return
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-inner">
        {/* Logo / monograma */}
        <Link to="/" className="navbar-logo">
          <div className="navbar-logo-mark">NH</div>
          <span className="navbar-logo-text">
            <span>Natanael</span> de Holanda
          </span>
        </Link>

        {/* Links */}
        <div className={`navbar-links ${menuOpen ? 'open' : ''}`}>
          {navItems.map((item) => (
            <a
              key={item.href}
              href={isHome ? item.href : '/'}
              className={isHome && activeSection === item.href ? 'active' : ''}
              onClick={(e) => {
                if (isHome) {
                  e.preventDefault()
                  handleNavClick(item.href)
                }
              }}
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Mobile toggle */}
        <button
          className={`navbar-toggle ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </nav>
  )
}
