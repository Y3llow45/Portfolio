import './About.scss'
import type { Language } from '../../App'

const copy = {
  eng: { heading: 'About', text: 'I am a software engineer focused on backend systems, full-stack development and practical AI integrations. At Creative Digital Engineers, I developed ERP automation, an AI accounting assistant and invoice OCR workflows. I enjoy turning complex requirements into reliable, usable software.', contact: 'Get in touch' },
  deu: { heading: 'Über mich', text: 'Ich bin Softwareentwickler mit Schwerpunkt auf Backend-Systemen, Full-Stack-Entwicklung und praktischen KI-Integrationen. Bei Creative Digital Engineers habe ich ERP-Automatisierung, einen KI-Buchhaltungsassistenten und OCR-Prozesse für Rechnungen entwickelt. Ich setze komplexe Anforderungen gern in zuverlässige Software um.', contact: 'Kontakt aufnehmen' },
  spa: { heading: 'Sobre mí', text: 'Soy ingeniero de software especializado en backend, desarrollo full-stack e integraciones prácticas de IA. En Creative Digital Engineers desarrollé automatizaciones ERP, un asistente contable con IA y flujos OCR de facturas. Disfruto convirtiendo requisitos complejos en software fiable y útil.', contact: 'Contactar' }
}

const About: React.FC<{language: Language}> = ({ language }) => {
  const t = copy[language]
  return (
    <section className="content-section about" id="about">
      <div className="section-inner">
        <p className="section-kicker">01 / INTRODUCTION</p>
        <h2>{t.heading}</h2>
        <p className="about-copy">{t.text}</p>
        <a href="mailto:hristovborislav45@gmail.com" className="text-link">{t.contact} · hristovborislav45@gmail.com</a>
      </div>
    </section>
  )
}

export default About
