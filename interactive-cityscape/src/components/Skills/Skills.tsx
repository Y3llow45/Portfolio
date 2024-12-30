import { motion } from 'framer-motion'

const skills = [
  { name: 'React', level: 90 },
  { name: 'JavaScript', level: 85 },
  { name: 'CSS', level: 80 },
  { name: 'Node.js', level: 75 },
  { name: 'Python', level: 70 },
]

export default function Skills() {
  return (
    <div className="min-h-screen flex items-center justify-center py-20">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center text-blue-400">Skills</h2>
        <div className="space-y-8">
          {skills.map((skill) => (
            <div key={skill.name} className="relative">
              <p className="text-lg mb-2">{skill.name}</p>
              <div className="h-4 w-full bg-gray-700 rounded-full">
                <motion.div
                  className="h-full bg-blue-500 rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ duration: 1, ease: "easeInOut" }}
                  viewport={{ once: true }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

