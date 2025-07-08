"use client"
import { motion } from "framer-motion"
import { FiArrowLeft, FiCalendar, FiMapPin } from "react-icons/fi"
import { useRouter } from "next/navigation"

export default function EducationPage() {
  const router = useRouter()

  const education = [
    {
      id: 1,
      degree: "Bachelor of Engineering(B. E.) - Computer Engineering",
      institution: "Sinhgad Institute of Technology, Lonavala",
      duration: "Sept 2024 - June 2027",
      location: "Pune, Maharashtra",
      grade: "CGPA: 8.00/10",
      description: "Currently exploring data structures and algorithm, AIML, MERN stack, Firebase, and software engineering concepts while building real-world projects and improving system design skills.",
    },
    {
      id: 2,
      degree: "Diploma in Engg.(Polytechnic) - Computer Engineering",
      institution: "Shreeyash College of Engineering & Technology, Chh. Sambhajinagar",
      duration: "Sept 2021 - June 2024",
      location: "Chh. Sambhajinagar, Maharashtra",
      grade: "84.74%",
      description: "Built a solid foundation in programming and development with hands-on experience in C, C++, Java, Python, Android, web technologies, and basic networking.",
    },
      {
      id: 3,
      degree: "SSC (10th) Board Examination",
      institution: "Sahakar Vidya Mandir, Sindkhed Raja",
      duration: "June 2020 - June 2021",
      location: "Sindkhed Raja, Maharashtra",
      grade: "86.60%",
      description: "Completed my Secondary Education with strong foundation in Science stream with Mathematics, Physics, and Chemistry.",
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
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Education</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">My academic journey and qualifications</p>
        </motion.div>

        <div className="space-y-6">
          {education.map((edu, index) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div className="flex-1">
                  <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{edu.degree}</h2>
                  <h3 className="text-lg text-blue-600 dark:text-blue-400 mb-3">{edu.institution}</h3>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 text-gray-600 dark:text-gray-400 mb-3">
                    <div className="flex items-center space-x-2">
                      <FiCalendar className="w-4 h-4" />
                      <span>{edu.duration}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <FiMapPin className="w-4 h-4" />
                      <span>{edu.location}</span>
                    </div>
                  </div>
                </div>
                <div className="mt-3 md:mt-0">
                  <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 rounded-full text-sm font-medium">
                    {edu.grade}
                  </span>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{edu.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
