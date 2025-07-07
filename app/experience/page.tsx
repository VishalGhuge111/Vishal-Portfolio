"use client"
import { motion } from "framer-motion"
import { FiBriefcase, FiCalendar } from "react-icons/fi"
import { experiences } from "@/data/experienceData"
import BackButton from "@/components/BackButton"

export default function ExperiencePage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <BackButton />

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Experience</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">My professional journey and work experience</p>
        </motion.div>

        <div className="space-y-8">
          {experiences.map((experience, index) => (
            <motion.div
              key={experience.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-8"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div className="flex-1">
                  <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">{experience.position}</h2>
                  <div className="flex items-center space-x-4 text-gray-600 dark:text-gray-400 mb-4">
                    <div className="flex items-center space-x-2">
                      <FiBriefcase className="w-4 h-4" />
                      <span>{experience.company}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <FiCalendar className="w-4 h-4" />
                      <span>{experience.duration}</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <span
                    className={`px-3 py-1 text-sm font-medium rounded-full ${
                      experience.type === "Full-time"
                        ? "bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300"
                        : "bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300"
                    }`}
                  >
                    {experience.type}
                  </span>
                </div>
              </div>

              <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">{experience.description}</p>

              <div>
                <h3 className="text-sm font-medium text-gray-900 dark:text-white mb-3">Technologies Used:</h3>
                <div className="flex flex-wrap gap-2">
                  {experience.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-sm bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
