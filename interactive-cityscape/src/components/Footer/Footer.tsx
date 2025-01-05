import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './Footer.scss';

const Footer = () => {
  const [typingText, setTypingText] = useState('');
  const fullText = "// Thanks for visiting! Keep building cool stuff.";

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setTypingText((prev) => prev + fullText[index]);
      index++;
      if (index === fullText.length) {
        clearInterval(interval);
      }
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="footer">
      <motion.div
        className="quote"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        "Talk is cheap. Show me the code." – Linus Torvalds
      </motion.div>
      <div className="visitors-count">
        Visitors so far: 5,432
      </div>
      <motion.div
        className="typing-text"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
      >
        {typingText}
      </motion.div>
    </footer>
  );
};

export default Footer;
