"use client"
import { motion } from "framer-motion"
import { FiArrowLeft, FiMapPin, FiMail, FiPhone } from "react-icons/fi"
import { useRouter } from "next/navigation"

export default function AboutPage() {
  const router = useRouter()

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
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">About Me</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">Get to know more about my journey and passion</p>
        </motion.div>

        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-8">
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Who I Am</h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                I'm Vishal Ghuge, a passionate Full Stack Developer from Maharashtra, India. With expertise in the MERN
                stack, JavaScript, and Firebase, I love building smart products and innovative solutions that solve
                real-world problems.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">My Journey</h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                My journey in technology started with curiosity and has evolved into a passion for creating meaningful
                digital experiences. I've worked on various projects including CareerSetu, a career guidance platform,
                and SPPU Engineer, an educational platform for engineering students.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">What I Do</h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                I specialize in full-stack web development, creating responsive and user-friendly applications. My
                expertise includes React, Node.js, MongoDB, Express, and modern web technologies. I'm always eager to
                learn new technologies and take on challenging projects.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Contact Information</h2>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <FiMapPin className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  <span className="text-gray-600 dark:text-gray-400">Maharashtra, India</span>
                </div>
                <div className="flex items-center space-x-3">
                  <FiMail className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  <span className="text-gray-600 dark:text-gray-400">vishal@example.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <FiPhone className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  <span className="text-gray-600 dark:text-gray-400">+91 12345 67890</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
