import './App.scss'
import { motion } from 'framer-motion'
import About from './components/About/About'
import Hero from './components/Hero/Hero'
import Skills from './components/Skills/Skills'
import Projects from './components/Projects/Projects'

function App() {
  return (
    <>
      <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gray-900 text-white"
    >
      <Hero />
      <About />
      <Skills />
      <Projects />
    </motion.div>
    </>
  )
}

export default App
