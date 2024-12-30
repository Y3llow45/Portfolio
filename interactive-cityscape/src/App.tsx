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
      <BackgroundAnimation />
      <motion.div
        className="app scroller"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <section>
          <Header />
        </section>
        <section>
          <About />
        </section>
        <section>
          <Skills />
        </section>
        <section>
          <Projects />
        </section>
      </motion.div>
    </>
  )
}

export default App
