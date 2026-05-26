import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, ChevronDown, Github, Linkedin, Mail } from 'lucide-react'
import profile from '../data/profile'
import stats from '../data/stats'
import '../styles/hero.css'

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
}

export default function Hero() {
  const [typedText, setTypedText] = useState('')
  const fullText = profile.tagline
  
  useEffect(() => {
    let index = 0
    const interval = setInterval(() => {
      setTypedText(fullText.slice(0, index + 1))
      index++
      if (index === fullText.length) clearInterval(interval)
    }, 50)
    
    return () => clearInterval(interval)
  }, [])

  const handleScroll = (id) => {
    const el = document.querySelector(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="hero" id="hero">
      <div className="hero-bg">
        <div className="hero-gradient hero-gradient-1" />
        <div className="hero-gradient hero-gradient-2" />
        <div className="hero-gradient hero-gradient-3" />
        <div className="hero-grid" />
      </div>

      <div className="container">
        <motion.div 
          className="hero-content"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          <motion.div 
            className="hero-badge"
            variants={fadeInUp}
          >
            <span className="hero-badge-dot" />
            Disponível para novos projetos
          </motion.div>

          <motion.h1 
            className="hero-title"
            variants={fadeInUp}
          >
            {typedText}
            <span className="gradient-text"></span>
          </motion.h1>

          <motion.p 
            className="hero-subtitle"
            variants={fadeInUp}
          >
            {profile.role}
          </motion.p>

          <motion.p 
            className="hero-description"
            variants={fadeInUp}
          >
            {profile.summary}
          </motion.p>

          <motion.div 
            className="hero-actions"
            variants={fadeInUp}
          >
            <button
              className="btn btn-primary"
              onClick={() => handleScroll('#projects')}
            >
              Ver Projetos
              <ArrowRight size={18} />
            </button>
            <button
              className="btn btn-secondary"
              onClick={() => handleScroll('#contact')}
            >
              Entrar em Contato
            </button>
          </motion.div>

          <motion.div 
            className="hero-social"
            variants={fadeInUp}
          >
            <a href={profile.social.github} target="_blank" rel="noopener noreferrer" className="social-link">
              <Github size={20} />
            </a>
            <a href={profile.social.linkedin} target="_blank" rel="noopener noreferrer" className="social-link">
              <Linkedin size={20} />
            </a>
            <a href={`mailto:${profile.email}`} className="social-link">
              <Mail size={20} />
            </a>
          </motion.div>

          <motion.div 
            className="hero-stats"
            variants={fadeInUp}
          >
            {stats.map((stat) => (
              <div key={stat.label}>
                <div className="hero-stat-value">
                  {stat.value}{stat.suffix}
                </div>
                <div className="hero-stat-label">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      <div className="scroll-indicator">
        <span>Scroll</span>
        <div className="scroll-indicator-line" />
      </div>
    </section>
  )
}
