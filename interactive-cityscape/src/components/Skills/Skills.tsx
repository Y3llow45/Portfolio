import { motion } from 'framer-motion';
import '../../styles/Skills.scss';

const skillsData = {
  frontend: ['React', 'Vue.js', 'CSS/Sass', 'JavaScript', 'TypeScript', 'HTML5'],
  backend: ['Node.js', 'Express', 'Python', 'Django', 'PostgreSQL', 'MongoDB'],
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
      <h2>My Skills</h2>
      <div className="skills-container">
        <motion.div
          className="skill-category frontend"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h3>Frontend</h3>
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
          <h3>Backend</h3>
          <ul>
            {skillsData.backend.map((skill, index) => (
              <SkillItem key={skill} skill={skill} index={index} />
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
