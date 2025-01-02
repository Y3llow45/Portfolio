import { motion } from 'framer-motion';
import './Projects.scss';

const projectsData = [
  { id: 1, title: 'Learn Electronics', description: 'A full-stack e-commerce solution built with React and Node.js.' },
  { id: 2, title: 'Chato', description: 'A productivity app created using Vue.js and Firebase.' },
  { id: 3, title: 'Steganography', description: 'An interactive weather dashboard using React and OpenWeatherMap API.' },
  { id: 4, title: 'Tic-tac-toe cheat', description: 'A full-stack e-commerce solution built with React and Node.js.' },
  { id: 5, title: 'Sixty-six game', description: 'A productivity app created using Vue.js and Firebase.' },
  { id: 6, title: 'URL-shortener-with-analytics', description: 'An interactive weather dashboard using React and OpenWeatherMap API.' },
  { id: 7, title: 'small-clock-arduino', description: 'A full-stack e-commerce solution built with React and Node.js.' },
  { id: 8, title: 'discord-bots', description: 'A productivity app created using Vue.js and Firebase.' },
  { id: 9, title: 'DrawingBe', description: 'An interactive weather dashboard using React and OpenWeatherMap API.' },
  { id: 10, title: 'Break-reminder', description: 'A full-stack e-commerce solution built with React and Node.js.' },
  { id: 11, title: 'Cheat-for-perfect-circle', description: 'A productivity app created using Vue.js and Firebase.' },
  { id: 12, title: 'IR-Remote-leds-and-receiver-with-Arduino', description: 'An interactive weather dashboard using React and OpenWeatherMap API.' },
];

const Projects = () => {
  return (
    <section className="projects">
      <h2>My Projects</h2>
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
