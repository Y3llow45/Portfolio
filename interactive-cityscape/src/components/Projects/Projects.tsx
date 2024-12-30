import { motion } from 'framer-motion';
import '../../styles/Projects.scss';

const projectsData = [
  { id: 1, title: 'E-commerce Platform', description: 'A full-stack e-commerce solution built with React and Node.js.' },
  { id: 2, title: 'Task Management App', description: 'A productivity app created using Vue.js and Firebase.' },
  { id: 3, title: 'Weather Forecast Dashboard', description: 'An interactive weather dashboard using React and OpenWeatherMap API.' },
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
