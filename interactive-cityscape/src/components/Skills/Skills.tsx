import { motion } from 'framer-motion';
import './Skills.scss';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';

interface SkillsProps {
  language: string;
}

const skillsData = {
  backend: [
    'Java', 'Spring Boot', 
    'RESTful APIs', 'Microservices', 
    'RabbitMQ', 'Kafka', 
    'WebSockets', 'Python', 
    'NodeJS'            
  ],
  frontend: [
    'React',
    'TypeScript',
    'JavaScript',
    'HTML5',
    'CSS / Sass / Tailwind CSS',
    'Next.js',   
  ],
  databases: [
    'PostgreSQL',
    'JPA / Hibernate',   
    'Redis',
    'MongoDB',
  ],
  devops: [
    'Docker',
    'Kubernetes',
    'CI/CD / GitHub Actions',
    'Git / GitHub',
    'AWS / Vercel',
  ],
  testing: [
    'JUnit',
    'Jest',
    'Selenium',
    'Cypress',
  ],
};

interface SkillItemProps {
  skill: string;
  index: number;
}

const SkillItem: React.FC<SkillItemProps> = ({ skill, index }) => {
  return (
    <motion.li
      className="skill-item"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      {skill}
    </motion.li>
  );
};

const Skills: React.FC<SkillsProps> = ({ language }) => {
  const { setRef, isIntersecting } = useIntersectionObserver({ threshold: 0.5 });

  return (
    <section className="skills" ref={setRef}>
      <h2 className='skills-h2'>{language === 'eng' && 'My Skills'}{language === 'deu' && 'Meine Fähigkeiten'}{language === 'spa' && 'Mis Habilidades'}</h2>
      <div className="skills-container">
        <motion.div
          className="skill-category backend"
          initial={{ x: 50, opacity: 0 }}
          animate={isIntersecting ? { x: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h3>{language === 'eng' && 'Back-end'}{language === 'deu' && 'Back-end'}{language === 'spa' && 'Back-end'}</h3>
          <ul>
            {skillsData.backend.map((skill, index) => (
              <SkillItem key={skill} skill={skill} index={index} />
            ))}
          </ul>
        </motion.div>
        <motion.div
          className="skill-category backend"
          initial={{ x: -50, opacity: 0 }}
          animate={isIntersecting ? { x: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h3>{language === 'eng' && 'Front-end'}{language === 'deu' && 'Front-end'}{language === 'spa' && 'Front-end'}</h3>
          <ul>
            {skillsData.frontend.map((skill, index) => (
              <SkillItem key={skill} skill={skill} index={index} />
            ))}
          </ul>
        </motion.div>
        <motion.div
          className="skill-category backend"
          initial={{ x: -50, opacity: 0 }}
          animate={isIntersecting ? { x: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h3>{language === 'eng' && 'Databases'}{language === 'deu' && 'Datenbanken'}{language === 'spa' && 'Bases de datos'}</h3>
          <ul>
            {skillsData.databases.map((skill, index) => (
              <SkillItem key={skill} skill={skill} index={index} />
            ))}
          </ul>
        </motion.div>
        <motion.div
          className="skill-category backend"
          initial={{ x: 50, opacity: 0 }}
          animate={isIntersecting ? { x: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h3>{language === 'eng' && 'Devops'}{language === 'deu' && 'Devops'}{language === 'spa' && 'Devops'}</h3>
          <ul>
            {skillsData.devops.map((skill, index) => (
              <SkillItem key={skill} skill={skill} index={index} />
            ))}
          </ul>
        </motion.div>
        <motion.div
          className="skill-category backend"
          initial={{ x: -50, opacity: 0 }}
          animate={isIntersecting ? { x: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h3>{language === 'eng' && 'Testing'}{language === 'deu' && 'Testen'}{language === 'spa' && 'Pruebas'}</h3>
          <ul>
            {skillsData.testing.map((skill, index) => (
              <SkillItem key={skill} skill={skill} index={index} />
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
