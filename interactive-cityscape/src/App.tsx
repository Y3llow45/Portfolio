import './App.scss'
import { motion } from 'framer-motion'
import { useState } from 'react'
import About from './components/About/About'
import Skills from './components/Skills/Skills'
import Projects from './components/Projects/Projects'
import BackgroundAnimation from './components/BackgroundAnimation/BackgroundAnimation'
import Header from './components/Header/Header'
import Awards from './components/Awards/Awards'

function App() {
  const [language, setLanguage] = useState<'eng' | 'deu' | 'spa'>('eng')

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
