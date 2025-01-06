import { motion } from 'framer-motion';
import './Header.scss';

interface HeaderProps {
  language: 'eng' | 'deu' | 'spa';
  setLanguage: React.Dispatch<React.SetStateAction<'eng' | 'deu' | 'spa'>>;
}

const Header: React.FC<HeaderProps> = ({ language, setLanguage }) => {
  const changeLanguage = (lang: 'eng' | 'deu' | 'spa') => {
    setLanguage(lang);
  };

  return (
    <section className="header">
      <div className="language-buttons">
        <button onClick={() => changeLanguage('eng')}>ENG</button>
        <button onClick={() => changeLanguage('deu')}>DEU</button>
        <button onClick={() => changeLanguage('spa')}>SPA</button>
      </div>
      <motion.header
        className="header"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: 'spring', stiffness: 120 }}
      >
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Borislav Hristov
        </motion.h1>
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          {language === 'eng' && 'Full Stack Developer'}
          {language === 'deu' && 'Full Stack Entwickler'}
          {language === 'spa' && 'Desarrollador Full Stack'}
        </motion.h2>
      </motion.header>
    </section>
  );
};

export default Header;
