import { motion } from 'framer-motion'

const projects = [
  { title: 'Project 1', description: 'A brief description of Project 1' },
  { title: 'Project 2', description: 'A brief description of Project 2' },
  { title: 'Project 3', description: 'A brief description of Project 3' },
]

export default function Projects() {
  return (
    <div className="min-h-screen py-20">
      <h2 className="text-4xl font-bold mb-12 text-center text-blue-400">Projects</h2>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            className="bg-gray-800 p-6 rounded-lg shadow-lg"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="text-2xl font-semibold mb-4">{project.title}</h3>
            <p>{project.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

