import { motion } from 'framer-motion';
import './Skills.scss';

const skillsData = {
  frontend: ['React', 'Angular', 'CSS/Sass', 'JavaScript', 'TypeScript', 'HTML5', 'Framer Motion', 'Material-UI', 'GraphQL'],
  backend: ['Node.js', 'Express', 'Python', 'Django', 'Flask', 'Go', 'RabbitMQ', 'C#', '.NET', 'PHP', 'C++', 'IoT'],
  languages: ['JavaScript', 'TypeScript', 'Python', 'Go', 'C#', 'C++', 'PHP'],
  databases: ['PostgreSQL', 'MongoDB', 'MySQL', 'SQLite', 'Redis', 'Firebase', 'ORMs/ODMs'],
  devops: ['Docker', 'Kubernetes', 'CI/CD principles', 'Github Actions'],
  testing: ['Jest', 'Cypress', 'Selenium', 'Postman'],
  cybersecurity: ['OWASP', 'NIST', 'ISO 27001', 'Penetration Testing', 'Incident Response', 'Security Audits'],
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

const Skills = () => {
  return (
    <section className="skills">
      <h2 className='skills-h2'>My Skills</h2>
      <div className="skills-container">
        <motion.div
          className="skill-category backend"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h3>Front-end</h3>
          <ul>
            {skillsData.frontend.map((skill, index) => (
              <SkillItem key={skill} skill={skill} index={index} />
            ))}
          </ul>
        </motion.div>
        <motion.div
          className="skill-category backend"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h3>Back-end</h3>
          <ul>
            {skillsData.backend.map((skill, index) => (
              <SkillItem key={skill} skill={skill} index={index} />
            ))}
          </ul>
        </motion.div>
        <motion.div
          className="skill-category backend"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h3>Databases</h3>
          <ul>
            {skillsData.databases.map((skill, index) => (
              <SkillItem key={skill} skill={skill} index={index} />
            ))}
          </ul>
        </motion.div>
        <motion.div
          className="skill-category backend"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h3>Devops</h3>
          <ul>
            {skillsData.devops.map((skill, index) => (
              <SkillItem key={skill} skill={skill} index={index} />
            ))}
          </ul>
        </motion.div>
        <motion.div
          className="skill-category backend"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h3>Testing</h3>
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
