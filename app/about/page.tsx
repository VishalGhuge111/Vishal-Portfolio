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
                Hi, I’m Vishal Ghuge, a passionate Full Stack Developer from Maharashtra, India 
                who loves building things that make life easier or smarter. I mostly work with the MERN stack, 
                JavaScript, and Firebase, and I’m always exploring new tools and ideas to level up.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">My Journey</h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                My journey in technology started with as a curiosity for how technology works has turned into a 
                deep passion for development. Over time, I’ve worked on impactful projects like CareerSetu — 
                a career guidance platform, and SPPU Engineer — an educational resource hub for engineering students. 
                Each project has helped me grow as a developer and problem-solver.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">What I Do</h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                I focus on full-stack web development, creating clean, responsive, and performance-driven applications. 
                My skill set includes React, Node.js, Express, MongoDB, and other modern web technologies. 
                I’m constantly learning and love taking on new challenges that push my limits.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Contact Information</h2>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <FiMapPin className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  <span className="text-gray-600 dark:text-gray-400">Pune, Maharashtra</span>
                </div>
                <div className="flex items-center space-x-3">
                  <FiMail className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  <span className="text-gray-600 dark:text-gray-400">vishalghuge2005@gmail.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <FiPhone className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  <span className="text-gray-600 dark:text-gray-400">+91 7666768179</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
