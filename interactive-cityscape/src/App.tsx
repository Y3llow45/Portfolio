import './App.scss'
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import About from './components/About/About'
import Skills from './components/Skills/Skills'
import Projects from './components/Projects/Projects'
import BackgroundAnimation from './components/BackgroundAnimation/BackgroundAnimation'
import Header from './components/Header/Header'
import Awards from './components/Awards/Awards'
import Experience from './components/Experience/Experience'
import Footer from './components/Footer/Footer'

export type Language = 'eng' | 'deu' | 'spa'

function App() {
  const [language, setLanguage] = useState<Language>('eng')

  useEffect(() => {
    if (import.meta.env.PROD) {
      fetch('/api/views?count=1').catch(() => {})
    }
  }, [])

  return (
    <>
      <BackgroundAnimation />
      <motion.main className="app" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
        <Header language={language} setLanguage={setLanguage} />
        <About language={language} />
        <Experience language={language} />
        <Projects language={language} />
        <Skills language={language} />
        <Awards language={language} />
        <Footer language={language} />
      </motion.main>
    </>
  )
}

export default App
