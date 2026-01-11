import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './Footer.scss';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';

interface FooterProps {
  language: string;
}

const Footer: React.FC<FooterProps> = ({ language }) => {
  const { setRef, isIntersecting } = useIntersectionObserver({ threshold: 0.5 });
  const [typingText, setTypingText] = useState('');
  const fullText: { [key in 'eng' | 'deu' | 'spa']: string } = {
    eng: "// Thanks for visiting! Keep building cool stuff!",
    deu: "// Danke für deinen Besuch! Baue weiterhin coole Sachen!",
    spa: "// Gracias por visitar! Sigue construyendo cosas geniales!"
  };

  useEffect(() => {
    if (isIntersecting) {
      let index = -1;
      const interval = setInterval(() => {
        setTypingText((prev) => prev + fullText[language as 'eng' | 'deu' | 'spa'][index]);
        index++;
        if (index >= fullText[language as 'eng' | 'deu' | 'spa'].length-1) {
          clearInterval(interval);
        }
      }, 100);
      return () => clearInterval(interval);
    } else {
      setTypingText('');
    }
  }, [isIntersecting, language]);

  return (
    <footer className="footer" ref={setRef}>
      <motion.div
        className="quote"
        initial={{ opacity: 0 }}
        animate={isIntersecting ? { opacity: 1 } : {}}
        transition={{ duration: 1 }}
      >
        {language === 'eng' && '"Talk is cheap. Show me the code." - Linus Torvalds'}
        {language === 'deu' && '"Reden ist billig. Zeig mir den Code." - Linus Torvalds'}
        {language === 'spa' && '"Hablar es barato. Muéstrame el código." - Linus Torvalds'}
      </motion.div>
      <motion.div
        className="typing-text"
        initial={{ opacity: 0 }}
        animate={isIntersecting ? { opacity: 1 } : {}}
        transition={{ duration: 1, delay: 1 }}
      >
        {typingText}
      </motion.div>
      <div className="visitors-count">
        <p className='small-text'>This site uses server-side analytics for anonymous visit/button counts — no cookies or personal data stored</p>
        {language === 'eng' && 'Build with ❤ by '}
        {language === 'deu' && 'Erstellt mit ❤ von '}
        {language === 'spa' && 'Construido con ❤ por '}
        <a className='orange-text' href='https://github.com/Y3llow45'>Y3llow45</a>
      </div>
    </footer>
  );
};

export default Footer;
