import { motion } from 'framer-motion';
import './About.scss';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';

interface AboutProps {
  language: string;
}

const About: React.FC<AboutProps> = ({ language }) => {
  const { setRef, isIntersecting } = useIntersectionObserver({ threshold: 0.5 });

  const copy = () => {
    navigator.clipboard.writeText('hristovborislav45@gmail.com');
  }

  return (
    <section className="about" ref={setRef}>
      <h2>{language === 'eng' && 'About Me'}{language === 'deu' && 'Über mich'}{language === 'spa' && 'Sobre mí'}</h2>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        {language === 'eng' && (
          <>
            I'm a <span className='orange-text'>Full Stack Developer</span> who likes building innovative projects. I'm skilled at creating good looking designs. Writing the back-end <span className='orange-text'>logic</span> and solving problems is what I enjoy the most. I'm always curious to <span className='orange-text'>learn</span> new tools and technologies, so that I can improve my skills and build better projects. I like to turn <span className='orange-text'>ideas</span> into something real that people can use. If you think I would be a great fit for you team, feel free to email me at: 
          </>
        )}
        {language === 'deu' && (
          <>
            Ich bin ein <span className='orange-text'>Full Stack Entwickler</span>, der gerne innovative Projekte entwickelt. Ich bin geschickt darin, gut aussehende Designs zu erstellen. Das Schreiben der Back-End-<span className='orange-text'>Logik</span> und das Lösen von Problemen macht mir am meisten Spaß. Ich bin immer neugierig, neue Werkzeuge und Technologien zu <span className='orange-text'>lernen</span>, um meine Fähigkeiten zu verbessern und bessere Projekte zu entwickeln. Ich mag es, <span className='orange-text'>Ideen</span> in etwas Reales zu verwandeln, das die Leute nutzen können. Wenn Sie denken, dass ich gut in Ihr Team passen würde, können Sie mir gerne eine E-Mail senden an: 
          </>
        )}
        {language === 'spa' && (
          <>
            Soy un <span className='orange-text'>Desarrollador Full Stack</span> al que le gusta construir proyectos innovadores. Soy hábil en la creación de diseños atractivos. Escribir la lógica del back-end y resolver problemas es lo que más disfruto. Siempre tengo curiosidad por <span className='orange-text'>aprender</span> nuevas herramientas y tecnologías para mejorar mis habilidades y construir mejores proyectos. Me gusta convertir <span className='orange-text'>ideas</span> en algo real que la gente pueda usar. Si crees que encajaría bien en tu equipo, no dudes en enviarme un correo electrónico a: 
          </>
        )}
        <span className='selectable-text orange-text'>hristovborislav45@gmail.com</span> 
        <button className="btn-copy" onClick={() => copy()}><img className='btn-img' src='/images/copy.png'></img></button>
      </motion.p>
    </section>
  );
};

export default About;

