import { motion } from 'framer-motion';
import './Header.scss';

const Header = () => {
  return (
    <section className="header">
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
        Full Stack Developer
      </motion.h2>
    </motion.header>
    </section>
  );
};

export default Header;
