import type { Language } from '../../App'
import './Skills.scss'

const items = [
  { title: 'Backend & systems', values: ['Java', 'Spring Boot', 'Node.js', 'Express', 'REST APIs', 'Python', 'JPA / Hibernate', 'RabbitMQ', 'Socket.IO'] },
  { title: 'Frontend', values: ['React', 'TypeScript', 'JavaScript', 'Next.js', 'Svelte', 'HTML', 'CSS / SCSS'] },
  { title: 'Data & security', values: ['PostgreSQL', 'MongoDB', 'Redis', 'SQL', 'JWT', 'OAuth2', 'Spring Security'] },
  { title: 'AI & cloud', values: ['Azure AI Foundry', 'Azure Document Intelligence', 'LLM agents', 'Tool calling', 'Prompt optimization', 'Azure'] },
  { title: 'Development & testing', values: ['Git', 'GitHub Actions', 'Docker / Podman', 'Linux', 'Gradle / Maven', 'JUnit', 'Jest', 'Selenium'] }
]
const labels = {
  eng: ['Skills', 'Technologies I use to build, operate and test software.'],
  deu: ['Kenntnisse', 'Technologien, die ich bei Entwicklung, Betrieb und Tests einsetze.'],
  spa: ['Habilidades', 'Tecnologías con las que desarrollo, opero y pruebo software.']
}
export default function Skills({ language }: { language: Language }) {
  return (
    <section className="content-section skills" id="skills">
      <div className="section-inner">
        <p className="section-kicker">04 / TOOLKIT</p>
        <h2>{labels[language][0]}</h2>
        <p className="section-description">{labels[language][1]}</p>
        <div className="skills-container">
          {items.map(group => <article className="skill-category" key={group.title}>
            <h3>{group.title}</h3>
            <ul>{group.values.map(skill => <li key={skill}>{skill}</li>)}</ul>
          </article>)}
        </div>
      </div>
    </section>
  )
}
