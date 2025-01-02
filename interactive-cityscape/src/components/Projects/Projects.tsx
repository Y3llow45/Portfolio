import { motion } from 'framer-motion';
import './Projects.scss';

const projectsData = [
  { id: 1, title: 'Learn Electronics', description: 'Learn about electrical components and how circuits work. You can learn or teach others by making lessons.' },
  { id: 2, title: 'Chato', description: 'Encrypted real-time chat app, built for secure communication with a focus on privacy and speed.' },
  { id: 3, title: 'Steganography', description: 'Desktop app for hiding secrete messages in images using Steganography.' },
  { id: 4, title: 'Tic-tac-toe cheat', description: `Automated cheat for google's tic-tac-toe game.` },
  { id: 5, title: 'Sixty-six game', description: 'Website for multiplayer cards game.' },
  { id: 6, title: 'URL shortener with analytics', description: 'Website for shortening urls, monitoring visitors and generating qr codes.' },
  { id: 7, title: 'Small clock arduino', description: 'Small 4 digit 7 segment clock using time module and arduino.' },
  { id: 8, title: 'Discord bot', description: 'Discord bot that greets users, solves rubiks cubes and sudokus, send bash commands to server and much more.' },
  { id: 9, title: 'DrawingBe', description: 'Desktop app that draws cool things using turtle library.' },
  { id: 10, title: 'Break reminder', description: 'Desktop app that reminds you to take a break after 30 mins of work.' },
  { id: 11, title: 'Cheat for perfect circle', description: 'Cheat for perfect circle game with ~98% accuracy.' },
  { id: 12, title: 'IR-Remote LEDs with Arduino', description: 'Controll LEDs using IR remote.' },
];

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
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
