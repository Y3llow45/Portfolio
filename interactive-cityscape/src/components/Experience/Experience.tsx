import type { Language } from '../../App'
import './Experience.scss'

const texts = {
  eng: {
    heading: 'Experience', note: 'Professional software engineering and practical electronics.',
    roles: [
      { role: 'Software Engineer — ERP & AI Development', company: 'Creative Digital Engineers', dates: 'Jun – Oct 2026', summary: 'Designed an AI accounting assistant with two agents and 34 published ERP tools; developed invoice OCR workflows, LLM optimization and Bulgarian Registry Agency / NRA integrations.' },
      { role: 'Full-Stack Developer', company: 'Softtweaks', dates: 'Feb – Nov 2025', summary: 'Built e-commerce applications, Node.js services, performance improvements and IoT/LoRa integrations.' },
      { role: 'Automotive Electronics Technician', company: 'Automotive workshop', dates: 'Jun – Sep 2024', summary: 'Performed automotive diagnostics, ECU troubleshooting, firmware binary and calibration-map analysis, and hardware repairs.' },
      { role: 'Mobile App Developer', company: 'ABIB / DCVX', dates: 'Apr – Jun 2024', summary: 'Reduced search latency by ~80% through indexing improvements and implemented infinite-scroll pagination.' },
      { role: 'Embedded Engineer', company: 'KMTronic', dates: 'Jun – Aug 2023', summary: 'Developed MCU/SoC firmware and assisted with PCB design, hardware testing and interface debugging.' }
    ]},
  deu: {
    heading: 'Berufserfahrung', note: 'Softwareentwicklung und praktische Elektronik.',
    roles: [
      { role: 'Softwareentwickler — ERP & KI', company: 'Creative Digital Engineers', dates: 'Jun – Okt 2026', summary: 'KI-Buchhaltungsassistent mit zwei Agenten und 34 veröffentlichten ERP-Tools; OCR-Rechnungsverarbeitung, LLM-Optimierung und Integrationen mit bulgarischen Behörden.' },
      { role: 'Full-Stack-Entwickler', company: 'Softtweaks', dates: 'Feb – Nov 2025', summary: 'E-Commerce-Anwendungen, Node.js-Dienste, Performance-Optimierung und IoT/LoRa-Integrationen.' },
      { role: 'Kfz-Elektroniktechniker', company: 'Automotive workshop', dates: 'Jun – Sep 2024', summary: 'Fahrzeugdiagnose, ECU-Fehlersuche, Firmware- und Kennfeldanalyse sowie Hardware-Reparaturen.' },
      { role: 'Mobile-App-Entwickler', company: 'ABIB / DCVX', dates: 'Apr – Jun 2024', summary: 'Suchlatenz durch verbesserte Indexierung um ca. 80 % reduziert und Infinite-Scroll-Paginierung umgesetzt.' },
      { role: 'Embedded-Entwickler', company: 'KMTronic', dates: 'Jun – Aug 2023', summary: 'MCU/SoC-Firmware, PCB-Design, Hardware-Tests und Schnittstellen-Debugging.' }
    ]},
  spa: {
    heading: 'Experiencia', note: 'Ingeniería de software y electrónica aplicada.',
    roles: [
      { role: 'Ingeniero de Software — ERP e IA', company: 'Creative Digital Engineers', dates: 'Jun – Oct 2026', summary: 'Asistente contable de IA con dos agentes y 34 herramientas ERP publicadas; OCR de facturas, optimización de LLM e integraciones con organismos búlgaros.' },
      { role: 'Desarrollador Full-Stack', company: 'Softtweaks', dates: 'Feb – Nov 2025', summary: 'Aplicaciones de comercio electrónico, servicios Node.js, mejoras de rendimiento e integraciones IoT/LoRa.' },
      { role: 'Técnico de electrónica automotriz', company: 'Automotive workshop', dates: 'Jun – Sep 2024', summary: 'Diagnóstico, análisis de firmware y mapas de ECU, resolución de problemas y reparación de hardware.' },
      { role: 'Desarrollador de aplicaciones móviles', company: 'ABIB / DCVX', dates: 'Abr – Jun 2024', summary: 'Reduje la latencia de búsqueda aproximadamente un 80 % y añadí paginación de desplazamiento infinito.' },
      { role: 'Ingeniero de sistemas embebidos', company: 'KMTronic', dates: 'Jun – Ago 2023', summary: 'Firmware MCU/SoC, diseño de PCB, pruebas de hardware y depuración de interfaces.' }
    ]}
}

export default function Experience({ language }: { language: Language }) {
  const t = texts[language]
  return (
    <section className="content-section experience" id="experience">
      <div className="section-inner">
        <p className="section-kicker">02 / CAREER</p>
        <h2>{t.heading}</h2>
        <p className="section-description">{t.note}</p>
        <div className="experience-list">
          {t.roles.map((item) => (
            <article className="experience-item" key={item.company}>
              <div className="experience-meta"><strong>{item.company}</strong><span>{item.dates}</span></div>
              <h3>{item.role}</h3>
              <p>{item.summary}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
