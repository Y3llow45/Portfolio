import { motion } from 'framer-motion';
import './Projects.scss';
import Footer from '../Footer/Footer';

interface ProjectsProps {
  language: 'eng' | 'deu' | 'spa';
}

const projectsData = [
  { id: 1, title: 'Learn Electronics', description: {
    eng: 'A web scraper that filters job listings from jobs.bg based on user preferences and displays the most common technologies required.',
    deu: 'Ein Web-Scraper, der Stellenanzeigen von jobs.bg basierend auf den Benutzervorlieben filtert und die am häufigsten benötigten Technologien anzeigt.',
    spa: 'Un raspador web que filtra las ofertas de trabajo de jobs.bg según las preferencias del usuario y muestra las tecnologías más comunes requeridas.'
  },
    technologies: ['HTML', 'CSS', 'React', 'JavaScript', 'Node.js', 'Nodemon', 'Express', 'JWT', 'MongoDB', 'Mongoose'],
    github: 'https://github.com/Y3llow45/LearnElectronics'},
  { id: 2, title: 'Chato', description: {
    eng: 'Encrypted real-time chat app, built for secure communication with a focus on privacy and speed.',
    deu: 'Verschlüsselte Echtzeit-Chat-App, entwickelt für sichere Kommunikation mit Fokus auf Datenschutz und Geschwindigkeit.',
    spa: 'Aplicación de chat en tiempo real cifrada, construida para una comunicación segura con un enfoque en la privacidad y la velocidad.'
  },
    technologies: ['Vite', 'HTML', 'CSS', 'React', 'JavaScript', 'TypeScript', 'Node.js', 'Nodemon', 'Express', 'JWT', 'PostgreSQL', 'RabbitMQ', 'Socket.io','Framermotion'],
    github: 'https://github.com/Y3llow45/chat-app'},
  { id: 3, title: 'Steganography', description: {
    eng: 'Desktop app for hiding secret messages in images using Steganography.',
    deu: 'Desktop-App zum Verstecken geheimer Nachrichten in Bildern mit Steganographie.',
    spa: 'Aplicación de escritorio para ocultar mensajes secretos en imágenes usando esteganografía.'
  },
    technologies: ['Python'],
    github: 'https://github.com/Y3llow45/Steganography'},
  { id: 4, title: 'Tic-tac-toe cheat', description: {
    eng: 'Automated cheat for Google\'s tic-tac-toe game.',
    deu: 'Automatischer Cheat für Googles Tic-Tac-Toe-Spiel.',
    spa: 'Truco automatizado para el juego de tic-tac-toe de Google.'
  },
    technologies: ['Python', 'Selenium'],
    github: 'https://github.com/Y3llow45/tic-tac-toe-cheat'},
  { id: 5, title: 'Sixty-six game', description: {
    eng: 'Website for multiplayer cards game.',
    deu: 'Website für ein Mehrspieler-Kartenspiel.',
    spa: 'Sitio web para un juego de cartas multijugador.'
  },
    technologies: ['HTML', 'CSS', 'React', 'JavaScript', 'Node.js', 'Express', 'Nodemon', 'Socket.io'],
    github: 'https://github.com/Y3llow45/Sixty-six-game'},
  { id: 6, title: 'URL shortener with analytics', description: {
    eng: 'Website for shortening URLs, monitoring visitors, and generating QR codes.',
    deu: 'Website zum Kürzen von URLs, Überwachen von Besuchern und Erstellen von QR-Codes.',
    spa: 'Sitio web para acortar URLs, monitorear visitantes y generar códigos QR.'
  },
    technologies: ['HTML', 'CSS', 'React', 'JavaScript', 'TypeScript', 'Next.js', 'Prisma', 'Redux'],
    github: 'https://github.com/Y3llow45/URL-shortener-with-analytics'},
  { id: 7, title: 'Small clock arduino', description: {
    eng: 'Small 4 digit 7 segment clock using time module and Arduino.',
    deu: 'Kleine 4-stellige 7-Segment-Uhr mit Zeitmodul und Arduino.',
    spa: 'Pequeño reloj de 4 dígitos y 7 segmentos usando módulo de tiempo y Arduino.'
  },
    technologies: ['Arduino'],
    github: 'https://github.com/Y3llow45/small-clock-arduino'},
  { id: 8, title: 'Discord bot', description: {
    eng: 'Discord bot that greets users, solves Rubik\'s cubes and sudokus, sends bash commands to server and much more.',
    deu: 'Discord-Bot, der Benutzer begrüßt, Rubik\'s Würfel und Sudokus löst, Bash-Befehle an den Server sendet und vieles mehr.',
    spa: 'Bot de Discord que saluda a los usuarios, resuelve cubos de Rubik y sudokus, envía comandos bash al servidor y mucho más.'
  },
    technologies: ['Python'],
    github: 'https://github.com/Y3llow45/discord-bots'},
  { id: 9, title: 'DrawingBe', description: {
    eng: 'Desktop app that draws cool things using turtle library.',
    deu: 'Desktop-App, die coole Dinge mit der Turtle-Bibliothek zeichnet.',
    spa: 'Aplicación de escritorio que dibuja cosas geniales usando la biblioteca de tortugas.'
  },
    technologies: ['Python'],
    github: 'https://github.com/Y3llow45/DrawingBe'},
  { id: 10, title: 'Break reminder', description: {
    eng: 'Desktop app that reminds you to take a break after 30 mins of work.',
    deu: 'Desktop-App, die Sie daran erinnert, nach 30 Minuten Arbeit eine Pause zu machen.',
    spa: 'Aplicación de escritorio que te recuerda tomar un descanso después de 30 minutos de trabajo.'
  },
    technologies: ['Python'],
    github: 'https://github.com/Y3llow45/Break-reminder'},
  { id: 11, title: 'Scrape and process techs', description: {
    eng: 'A web scraper that filters job listings from jobs.bg based on user preferences and displays the most common technologies required.',
    deu: 'Ein Web-Scraper, der Stellenanzeigen von jobs.bg basierend auf den Benutzervorlieben filtert und die am häufigsten benötigten Technologien anzeigt.',
    spa: 'Un raspador web que filtra las ofertas de trabajo de jobs.bg según las preferencias del usuario y muestra las tecnologías más comunes requeridas.'
  },
    technologies: ['Python', 'CSS'],
    github: 'https://github.com/Y3llow45/scrape-and-process'},
  { id: 12, title: 'IR-Remote LEDs', description: {
    eng: 'Control LEDs using IR remote.',
    deu: 'Steuern Sie LEDs mit einer IR-Fernbedienung.',
    spa: 'Controla los LED con un control remoto IR.'
  },
    technologies: ['Arduino'],
    github: 'https://github.com/Y3llow45/IR-Remote-leds-and-receiver-with-Arduino'},
];

const imgUrls: { [key: string]: string } = {
  'React': '/images/react.svg',
  'Arduino': '/images/arduino.svg',
  'CSS': '/images/css3.svg',
  'Express': '/images/express.png',
  'Framermotion': '/images/framermotion.png',
  'JavaScript': '/images/javascript.svg',
  'MongoDB': '/images/mongodb.svg',
  'Mongoose': '/images/mongoose.png',
  'Next.js': '/images/nextjs.svg',
  'Node.js': '/images/node.js.png',
  'Nodemon': '/images/nodemon.svg',
  'Prisma': '/images/prisma.png',
  'Python': '/images/python.svg',
  'RabbitMQ': '/images/rabbitmq.svg',
  'Redux': '/images/redux.svg',
  'SaSS': '/images/sass.svg',
  'Selenium': '/images/selenium.svg',
  'Socket.io': '/images/socket.io.png',
  'TypeScript': '/images/typescript.svg',
  'HTML': '/images/html.svg',
  'Vite': '/images/vite.png',
  'PostgreSQL': '/images/postgresql.svg',
  'JWT': '/images/jwt.svg',
}

const Projects: React.FC<ProjectsProps> = ({ language }: { language: 'eng' | 'deu' | 'spa' }) => {
  return (
    <section className="projects">
      <h2>{language === 'eng' && 'My top 12 projects (34 total)'}{language === 'deu' && 'Meine Top 12 Projekte (insgesamt 34)'}{language === 'spa' && 'Mis 12 mejores proyectos (34 en total)'}</h2>
      <div className="projects-grid">
        {projectsData.map((project, index) => (
          <motion.div
            key={project.id}
            className="project-card"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <h3>{project.title}</h3>
            <p>{typeof project.description === 'string' ? project.description : project.description[language]}</p>
            {project.technologies ? (
              <>
                {project.technologies.map((tech, index) => (
                  <img key={index} src={imgUrls[tech]} alt={tech} className='tech-svg' />
                ))}
              </>
            ) : null}
            <br></br>
            <a href={project.github} target="_blank" rel="noopener noreferrer" className="github-button">
              {language === 'eng' && 'View on GitHub'}{language === 'deu' && 'Auf GitHub ansehen'}{language === 'spa' && 'Ver en GitHub'}
            </a>
          </motion.div>
        ))}
      </div>
      <Footer language={language} />
    </section>
  );
};

export default Projects;
