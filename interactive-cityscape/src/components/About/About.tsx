import { motion } from 'framer-motion';
import './About.scss';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';

const About = () => {
  const { setRef, isIntersecting } = useIntersectionObserver({ threshold: 0.5 });

  const copy = () => {
    navigator.clipboard.writeText('hristovborislav45@gmail.com');
  }

  return (
    <section className="about" ref={setRef}>
      <h2>About Me</h2>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        I'm a <span className='orange-text'>Full Stack Developer</span> who likes building innovative projects. I'm skilled at creating good looking designs. Writing the back-end <span className='orange-text'>logic</span> and solving problems is what I enjoy the most. I'm always curious to <span className='orange-text'>learn</span> new tools and technologies, so that I can improve my skills and build better projects. I like to turn <span className='orange-text'>ideas</span> into something real that people can use. If you think I would be a great fit for you team, feel free to email me at: <span className='selectable-text orange-text'>hristovborislav45@gmail.com</span> 
        <button className="btn-copy" onClick={() => copy()}><img className='btn-img' src='/images/copy.png'></img></button>
      </motion.p>
    </section>
  );
};

export default About;

