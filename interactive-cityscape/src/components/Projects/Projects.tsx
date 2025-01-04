import { motion } from 'framer-motion';
import './Projects.scss';

const projectsData = [
  { id: 1, title: 'Learn Electronics', description: 'Website about electrical components and how circuits work. You can learn or teach others by making lessons.',
    technologies: ['HTML', 'CSS', 'React', 'JavaScript', 'Node.js', 'Nodemon', 'Express', 'JWT', 'MongoDB', 'Mongoose'],
    github: 'https://github.com/Y3llow45/LearnElectronics'},
  { id: 2, title: 'Chato', description: 'Encrypted real-time chat app, built for secure communication with a focus on privacy and speed.',
    technologies: ['Vite', 'HTML', 'CSS', 'React', 'JavaScript', 'TypeScript', 'Node.js', 'Nodemon', 'Express', 'JWT', 'PostgreSQL', 'RabbitMQ', 'Socket.io','Framermotion'],
    github: 'https://github.com/Y3llow45/chat-app'},
  { id: 3, title: 'Steganography', description: 'Desktop app for hiding secrete messages in images using Steganography.',
    technologies: ['Python'],
    github: 'https://github.com/Y3llow45/Steganography'},
  { id: 4, title: 'Tic-tac-toe cheat', description: `Automated cheat for google's tic-tac-toe game.`,
    technologies: ['Python', 'Selenium'],
    github: 'https://github.com/Y3llow45/tic-tac-toe-cheat'},
  { id: 5, title: 'Sixty-six game', description: 'Website for multiplayer cards game.',
    technologies: ['HTML', 'CSS', 'React', 'JavaScript', 'Node.js', 'Express', 'Nodemon', 'Socket.io'],
    github: 'https://github.com/Y3llow45/Sixty-six-game'},
  { id: 6, title: 'URL shortener with analytics', description: 'Website for shortening urls, monitoring visitors and generating qr codes.',
    technologies: ['HTML', 'CSS', 'React', 'JavaScript', 'TypeScript', 'Next.js', 'Prisma', 'Redux'],
    github: 'https://github.com/Y3llow45/URL-shortener-with-analytics'},
  { id: 7, title: 'Small clock arduino', description: 'Small 4 digit 7 segment clock using time module and arduino.',
    technologies: ['Arduino'],
    github: 'https://github.com/Y3llow45/small-clock-arduino'},
  { id: 8, title: 'Discord bot', description: 'Discord bot that greets users, solves rubiks cubes and sudokus, send bash commands to server and much more.',
    technologies: ['Python'],
    github: 'https://github.com/Y3llow45/discord-bots'},
  { id: 9, title: 'DrawingBe', description: 'Desktop app that draws cool things using turtle library.',
    technologies: ['Python'],
    github: 'https://github.com/Y3llow45/DrawingBe'},
  { id: 10, title: 'Break reminder', description: 'Desktop app that reminds you to take a break after 30 mins of work.',
    technologies: ['Python'],
    github: 'https://github.com/Y3llow45/Break-reminder'},
  { id: 11, title: 'Scrape and process techs', description: `A web scraper that filters job listings from jobs.bg based on user preferences and displays the most common technologies required.`,
    technologies: ['Python', 'CSS'],
    github: 'https://github.com/Y3llow45/scrape-and-process'},
  { id: 12, title: 'IR-Remote LEDs', description: 'Controll LEDs using IR remote.',
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

const Projects = () => {
  return (
    <section className="projects">
      <h2>My top 12 projects (34 total)</h2>
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
            <p>{project.description}</p>
            {project.technologies ? (
              <>
                {project.technologies.map((tech, index) => (
                  <img key={index} src={imgUrls[tech]} alt={tech} className='tech-svg' />
                ))}
              </>
            ) : null}
            <br></br>
            <a href={project.github} target="_blank" rel="noopener noreferrer" className="github-button">
              View on GitHub
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
