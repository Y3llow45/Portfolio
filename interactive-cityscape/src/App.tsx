import './App.scss'
import { motion } from 'framer-motion'
import About from './components/About/About'
import Skills from './components/Skills/Skills'
import Projects from './components/Projects/Projects'
import BackgroundAnimation from './components/BackgroundAnimation/BackgroundAnimation'
import Header from './components/Header/Header'

function App() {
  return (
    <>
      <motion.div
      className="app"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <BackgroundAnimation />
      <Header />
      <About />
      <Skills />
      <Projects />
    </motion.div>
    </>
  )
}

export default App
