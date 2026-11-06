import { motion } from 'framer-motion'
import { Analytics } from '@vercel/analytics/react'
import './Header.scss'
import type { Language } from '../../App'

interface HeaderProps {
  language: Language
  setLanguage: React.Dispatch<React.SetStateAction<Language>>
}

const copy = {
  eng: { subtitle: 'Backend & AI Systems Engineer', intro: 'Building reliable software, intelligent agents and practical products.', work: 'Experience', projects: 'Projects', skills: 'Skills', awards: 'Awards', contact: 'Contact', github: 'GitHub' },
  deu: { subtitle: 'Backend- & KI-Systementwickler', intro: 'Ich entwickle zuverlässige Software, intelligente Agenten und praktische Produkte.', work: 'Erfahrung', projects: 'Projekte', skills: 'Kenntnisse', awards: 'Auszeichnungen', contact: 'Kontakt', github: 'GitHub' },
  spa: { subtitle: 'Ingeniero de Backend y Sistemas de IA', intro: 'Desarrollo software fiable, agentes inteligentes y productos prácticos.', work: 'Experiencia', projects: 'Proyectos', skills: 'Habilidades', awards: 'Premios', contact: 'Contacto', github: 'GitHub' }
}

const Header: React.FC<HeaderProps> = ({ language, setLanguage }) => {
  const t = copy[language]
  return (
    <header className="hero" id="top">
      <Analytics />
      <nav className="site-nav" aria-label="Main navigation">
        <a className="site-brand" href="#top">BH<span>.</span></a>
        <div className="nav-links">
          <a href="#experience">{t.work}</a>
          <a href="#projects">{t.projects}</a>
          <a href="#skills">{t.skills}</a>
          <a href="#awards">{t.awards}</a>
        </div>
        <div className="language-buttons" aria-label="Choose language">
          {(['eng','deu','spa'] as const).map(lang => (
            <button key={lang} type="button" className={language === lang ? 'active' : ''} onClick={() => setLanguage(lang)} aria-pressed={language === lang}>{lang.toUpperCase()}</button>
          ))}
        </div>
      </nav>
      <motion.div className="hero-content" initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
        <p className="eyebrow">SOFTWARE ENGINEER · SOFIA, BULGARIA</p>
        <h1>Borislav Hristov</h1>
        <h2>{t.subtitle}</h2>
        <p className="hero-intro">{t.intro}</p>
        <div className="hero-actions">
          <a className="primary-action" href="#projects">{t.projects}</a>
          <a className="secondary-action" href="https://github.com/Y3llow45" target="_blank" rel="noopener noreferrer">{t.github}</a>
          <a className="secondary-action" href="mailto:hristovborislav45@gmail.com">{t.contact}</a>
        </div>
        <p className="hero-stack">Java · Spring Boot · React · Node.js · PostgreSQL · Azure AI</p>
      </motion.div>
    </header>
  )
}

export default Header
