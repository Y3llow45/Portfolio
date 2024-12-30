import { motion } from 'framer-motion';
import './About.scss';

const About = () => {
  return (
    <section className="about">
      <h2>About Me</h2>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        I'm a passionate Full Stack Developer with a keen eye for design and a love for creating seamless user experiences. With expertise in both frontend and backend technologies, I bring ideas to life through clean, efficient, and scalable code.
      </motion.p>
    </section>
  );
};

export default About;

