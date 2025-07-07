"use client"
import { motion } from "framer-motion"
import { FiArrowLeft, FiMail, FiPhone, FiDownload, FiCalendar } from "react-icons/fi"
import { useRouter } from "next/navigation"

export default function HirePage() {
  const router = useRouter()

  const services = [
    {
      title: "Full Stack Development",
      description: "Complete web application development using MERN stack",
      features: ["React/Next.js Frontend", "Node.js Backend", "Database Design", "API Development"],
    },
    {
      title: "Frontend Development",
      description: "Modern, responsive user interfaces with latest technologies",
      features: ["React/Next.js", "Tailwind CSS", "TypeScript", "Mobile Responsive"],
    },
    {
      title: "Backend Development",
      description: "Scalable server-side solutions and API development",
      features: ["Node.js/Express", "Database Integration", "Authentication", "API Design"],
    },
  ]

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <button
          onClick={() => router.back()}
          className="inline-flex items-center space-x-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 mb-6 transition-colors"
        >
          <FiArrowLeft className="w-4 h-4" />
          <span>Back</span>
        </button>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Hire Me</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">Let's work together on your next project</p>
        </motion.div>

        <div className="space-y-8">
          {/* Services */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">Services I Offer</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6"
                >
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">{service.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                        <span className="text-sm text-gray-600 dark:text-gray-400">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-8"
          >
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">Get In Touch</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <FiMail className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  <span className="text-gray-600 dark:text-gray-400">vishalghuge2005@gmail.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <FiPhone className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  <span className="text-gray-600 dark:text-gray-400">+91 7666768179</span>
                </div>
                <div className="flex items-center space-x-3">
                  <FiCalendar className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  <span className="text-gray-600 dark:text-gray-400">Available for new projects</span>
                </div>
              </div>
              <div className="space-y-4">
                <button className="w-full flex items-center justify-center space-x-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                  <FiMail className="w-4 h-4" />
                  <span>Send Email</span>
                </button>
                <button className="w-full flex items-center justify-center space-x-2 px-6 py-3 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors">
                  <FiDownload className="w-4 h-4" />
                  <span>Download Resume</span>
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
