import './Projects.scss'
import type { Language } from '../../App'

type Copy = { eng: string; deu: string; spa: string }
type Project = {
  title: string
  description: Copy
  stack: string[]
  github: string
  image?: string
  imageAlt?: string
}

const projects: Project[] = [
  {
    title: 'Steganography',
    description: {
      eng: 'Desktop GUI and CLI that hide and recover messages in PNG images using a custom pixel-based algorithm.',
      deu: 'Desktop-GUI und CLI zum Verstecken und Wiederherstellen von Nachrichten in PNG-Bildern mit einem eigenen Pixelalgorithmus.',
      spa: 'Interfaz de escritorio y CLI para ocultar y recuperar mensajes en PNG mediante un algoritmo propio basado en píxeles.'
    },
    stack: ['Python', 'PySide6', 'Pillow'],
    github: 'https://github.com/Y3llow45/Steganography',
    image: 'https://user-images.githubusercontent.com/68009977/232536759-a29bddc8-5d54-42e0-a0e8-8c1b1c106d46.png',
    imageAlt: 'Steganography desktop application'
  },
  {
    title: 'LearnElectronics',
    description: {
      eng: 'Full-stack electronics learning platform with user roles, JWT authentication and a rich-text lesson editor.',
      deu: 'Full-Stack-Lernplattform für Elektronik mit Benutzerrollen, JWT-Authentifizierung und Rich-Text-Lektionseditor.',
      spa: 'Plataforma educativa de electrónica con roles, autenticación JWT y editor de lecciones de texto enriquecido.'
    },
    stack: ['React', 'Express', 'MongoDB', 'Draft.js'],
    github: 'https://github.com/Y3llow45/LearnElectronics',
    image: 'https://github.com/Y3llow45/LearnElectronics/assets/68009977/3c2e09b5-6eff-42e3-b674-d2b656930a66',
    imageAlt: 'LearnElectronics website'
  },
  {
    title: 'Chato',
    description: {
      eng: 'Real-time chat with RSA-based message encryption, PostgreSQL, offline RabbitMQ queuing and Socket.IO.',
      deu: 'Echtzeit-Chat mit RSA-basierter Nachrichtenverschlüsselung, PostgreSQL, RabbitMQ-Offline-Warteschlange und Socket.IO.',
      spa: 'Chat en tiempo real con cifrado RSA, PostgreSQL, colas offline con RabbitMQ y Socket.IO.'
    },
    stack: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'RabbitMQ'],
    github: 'https://github.com/Y3llow45/chat-app',
    image: 'https://github.com/user-attachments/assets/a71e743b-23e7-4d88-83c3-0c8cf7409f94',
    imageAlt: 'Chato database architecture diagram'
  },
  {
    title: 'Data Quality & Anomaly Detection',
    description: {
      eng: 'Async CSV processing with dataset versions, column statistics and outlier detection, presented in a Svelte dashboard.',
      deu: 'Asynchrone CSV-Verarbeitung mit Datensatzversionen, Spaltenstatistiken und Ausreißererkennung in einem Svelte-Dashboard.',
      spa: 'Análisis asíncrono de CSV con versiones, estadísticas de columnas y detección de valores atípicos en Svelte.'
    },
    stack: ['Java', 'Spring Boot', 'Svelte', 'PostgreSQL'],
    github: 'https://github.com/Y3llow45/Data-Quality-And-Anomaly-Detection-Platform',
    image: 'https://github.com/user-attachments/assets/5d09de73-4d75-42aa-9d90-71869e693e41',
    imageAlt: 'Data quality dashboard'
  },
  {
    title: 'CineVerse',
    description: {
      eng: 'Spring Boot application featuring JWT authentication, TOTP 2FA, roles, uploads, audit logging and rate limiting.',
      deu: 'Spring-Boot-Anwendung mit JWT-Anmeldung, TOTP-2FA, Rollen, Datei-Uploads, Audit-Logs und Rate-Limiting.',
      spa: 'Aplicación Spring Boot con JWT, autenticación TOTP 2FA, roles, archivos, auditoría y limitación de solicitudes.'
    },
    stack: ['Java', 'Spring Boot', 'Spring Security', 'PostgreSQL'],
    github: 'https://github.com/Y3llow45/CineVerse'
  },
  {
    title: 'URL Shortener & Analytics',
    description: {
      eng: 'Shorten links, generate QR codes and track visits, with automated browser tests.',
      deu: 'Links kürzen, QR-Codes generieren und Besucher messen, mit automatisierten Browser-Tests.',
      spa: 'Acorta enlaces, genera códigos QR y analiza visitas con pruebas automatizadas del navegador.'
    },
    stack: ['Next.js', 'TypeScript', 'Prisma', 'Jest', 'Puppeteer'],
    github: 'https://github.com/Y3llow45/URL-shortener-with-analytics',
    image: 'https://github.com/user-attachments/assets/2928110d-08c7-4e04-8558-db7160ce03f0',
    imageAlt: 'URL analytics dashboard'
  }
]

const more = [
  { name: 'Sixty-Six Multiplayer', href: 'https://github.com/Y3llow45/Sixty-six-game' },
  { name: 'Job Requirements Scraper', href: 'https://github.com/Y3llow45/scrape-and-process' },
  { name: 'Tic-Tac-Toe Automation', href: 'https://github.com/Y3llow45/tic-tac-toe-cheat' }
]

const labels = {
  eng: { heading: 'Featured projects', intro: 'Selected personal projects across backend, full-stack, desktop software and data systems.', code: 'View code', more: 'More experiments', all: 'All GitHub repositories' },
  deu: { heading: 'Ausgewählte Projekte', intro: 'Persönliche Projekte aus Backend, Full-Stack, Desktop-Software und Datenverarbeitung.', code: 'Code ansehen', more: 'Weitere Experimente', all: 'Alle GitHub-Repositories' },
  spa: { heading: 'Proyectos destacados', intro: 'Proyectos personales de backend, full-stack, software de escritorio y sistemas de datos.', code: 'Ver código', more: 'Más experimentos', all: 'Todos mis repositorios' }
}

function trackProject(title: string) {
  if (!import.meta.env.PROD) return
  const params = new URLSearchParams({ event: 'click_project_github', project_title: title })
  fetch('/api/views?' + params.toString(), { keepalive: true }).catch(() => {})
}

export default function Projects({ language }: { language: Language }) {
  const t = labels[language]
  return (
    <section className="content-section projects" id="projects">
      <div className="section-inner">
        <p className="section-kicker">03 / WORK</p>
        <h2>{t.heading}</h2>
        <p className="section-description">{t.intro}</p>
        <div className="projects-grid">
          {projects.map(project => (
            <article className="project-card" key={project.title}>
              {project.image && <div className="project-image"><img src={project.image} alt={project.imageAlt ?? project.title} loading="lazy" /></div>}
              <div className="project-body">
                <h3>{project.title}</h3>
                <p>{project.description[language]}</p>
                <ul className="project-stack" aria-label="Technologies">{project.stack.map(tech => <li key={tech}>{tech}</li>)}</ul>
                <a className="project-link" href={project.github} onClick={() => trackProject(project.title)} target="_blank" rel="noopener noreferrer">{t.code} ↗</a>
              </div>
            </article>
          ))}
        </div>
        <div className="project-archive">
          <h3>{t.more}</h3>
          <div className="archive-links">{more.map(item => <a href={item.href} target="_blank" rel="noopener noreferrer" key={item.name}>{item.name} ↗</a>)}</div>
          <a className="text-link" href="https://github.com/Y3llow45?tab=repositories" target="_blank" rel="noopener noreferrer">{t.all} ↗</a>
        </div>
      </div>
    </section>
  )
}
