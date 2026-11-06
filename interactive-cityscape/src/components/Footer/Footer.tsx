import './Footer.scss'
import type { Language } from '../../App'

const labels = {
  eng: { thanks: 'Thanks for visiting. Keep building cool things.', note: 'Anonymous page and link counters are collected on the server.', made: 'Built by' },
  deu: { thanks: 'Danke für deinen Besuch. Baue weiter coole Dinge.', note: 'Anonyme Seiten- und Linkzähler werden serverseitig erfasst.', made: 'Erstellt von' },
  spa: { thanks: 'Gracias por visitar. Sigue creando cosas geniales.', note: 'Se registran contadores anónimos de páginas y enlaces en el servidor.', made: 'Creado por' }
}
export default function Footer({ language }: { language: Language }) {
  const t = labels[language]
  return <footer className="footer" id="contact">
    <p className="footer-quote">{t.thanks}</p>
    <div className="footer-links">
      <a href="mailto:hristovborislav45@gmail.com">Email</a>
      <a href="https://github.com/Y3llow45" target="_blank" rel="noopener noreferrer">GitHub</a>
      <a href="https://www.linkedin.com/in/borislav-hristov-85b200283/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
    </div>
    <small>{t.note}</small>
    <p className="footer-credit">{t.made} Borislav Hristov · 2026</p>
  </footer>
}
