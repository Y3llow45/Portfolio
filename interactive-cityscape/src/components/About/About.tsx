import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

export default function About() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, -50])

  return (
    <motion.div
      ref={ref}
      className="min-h-screen flex items-center justify-center py-20"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <motion.div className="max-w-2xl mx-auto text-center" style={{ y }}>
        <h2 className="text-4xl font-bold mb-8 text-blue-400">About Me</h2>
        <p className="text-lg mb-6">
          I'm a passionate web developer with a keen eye for design. I love creating
          beautiful, functional, and user-friendly websites that leave a lasting impression.
        </p>
        <p className="text-lg">
          When I'm not coding, you can find me exploring new technologies, contributing
          to open-source projects, or enjoying a good cup of coffee.
        </p>
      </motion.div>
    </motion.div>
  )
}

