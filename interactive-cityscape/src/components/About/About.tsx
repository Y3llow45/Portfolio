import { motion } from 'framer-motion';
import './About.scss';

const About = () => {
  const copy = () => {
    navigator.clipboard.writeText('hristovborislav45@gmail.com');
  }

  return (
    <section className="about">
      <h2>About Me</h2>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        I'm a Full Stack Developer who likes building innovative projects. I'm skilled at creating good looking designs. Writing the back-end logic and solving problems is what I enjoy the most. I'm always curious to learn new tools and technologies, so that I can improve my skills and build better projects. I like to turn ideas into something real that people can use. If you think I would be a great fit for you team, feel free to email me at: <span className='selectable-text'>hristovborislav45@gmail.com</span> 
        <button className="btn-copy" onClick={() => copy()}><img className='btn-img' src='/images/copy.png'></img></button>
      </motion.p>
    </section>
  );
};

export default About;

