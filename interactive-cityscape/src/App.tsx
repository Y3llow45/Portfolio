import './App.scss'
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import About from './components/About/About'
import Skills from './components/Skills/Skills'
import Projects from './components/Projects/Projects'
import BackgroundAnimation from './components/BackgroundAnimation/BackgroundAnimation'
import Header from './components/Header/Header'
import Awards from './components/Awards/Awards'

declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}

const GA_ID = import.meta.env.VITE_GA_ID;

function App() {
  const [language, setLanguage] = useState<'eng' | 'deu' | 'spa'>('eng');

  useEffect(() => {
    const script = document.createElement('script');
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
    script.async = true;
    document.head.appendChild(script);

    window.dataLayer = window.dataLayer || [];
    function gtag(...args: any[]) {
      window.dataLayer.push(args);
    }
    window.gtag = gtag;

    gtag('js', new Date());
    gtag('config', GA_ID);
  }, []);

  return (
    <>
      <BackgroundAnimation />
      <motion.div
        className="app scroller"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <section>
          <Header language={language} setLanguage={setLanguage} />
        </section>
        <section>
          <About language={language} />
        </section>
        <section>
          <Awards language={language} />
        </section>
        <section>
          <Skills language={language} />
        </section>
        <Projects language={language} />
      </motion.div>
    </>
  )
}

export default App
