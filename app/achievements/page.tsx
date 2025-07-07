"use client"
import { useState } from "react"
import { motion } from "framer-motion"
import { FiArrowLeft, FiChevronDown, FiChevronUp, FiImage } from "react-icons/fi"
import { useRouter } from "next/navigation"
import Image from "next/image"

export default function AchievementsPage() {
  const router = useRouter()
  const [expandedItems, setExpandedItems] = useState<number[]>([])

  const achievements = [
    {
      id: 1,
      title: "University Hackathon Winner",
      description: "Won 1st place in university-level hackathon with CityConnect project",
      icon: "🏆",
      color: "text-yellow-600",
      bgColor: "bg-yellow-100 dark:bg-yellow-900/30",
      hasDetails: true,
      hasImage: true,
      image: "/placeholder.svg?height=200&width=300&text=Hackathon+Winner",
      details:
        "Led a team of 4 developers to create CityConnect, a smart city platform that connects citizens with local government services. The project was built using React, Node.js, and MongoDB, featuring real-time service tracking and citizen-government communication tools. Competed against 50+ teams and won based on innovation, technical implementation, and social impact.",
    },
    {
      id: 2,
      title: "Coding Club Leader",
      description: "Led the university coding club and organized 10+ technical workshops",
      icon: "⭐",
      color: "text-blue-600",
      bgColor: "bg-blue-100 dark:bg-blue-900/30",
      hasDetails: true,
      hasImage: true,
      image: "/placeholder.svg?height=200&width=300&text=Coding+Club+Leader",
      details:
        "Successfully managed a coding club with 200+ active members. Organized weekly coding sessions, hackathons, and technical workshops covering topics like web development, data structures, and competitive programming. Mentored 50+ junior students and helped them secure internships at top tech companies.",
    },
    {
      id: 3,
      title: "Academic Excellence",
      description: "Maintained CGPA of 8.5/10 throughout the Computer Science Engineering program",
      icon: "🎓",
      color: "text-green-600",
      bgColor: "bg-green-100 dark:bg-green-900/30",
      hasDetails: false,
      hasImage: false,
    },
    {
      id: 4,
      title: "Project Portfolio",
      description: "Completed 15+ personal projects showcasing various technologies",
      icon: "💼",
      color: "text-purple-600",
      bgColor: "bg-purple-100 dark:bg-purple-900/30",
      hasDetails: true,
      hasImage: false,
      details:
        "Developed a diverse portfolio of projects including CareerSetu (career guidance platform), SPPU Engineer (educational platform), CityConnect (smart city solution), EcoTracker (sustainability app), and many more. Each project demonstrates proficiency in different technology stacks and problem-solving approaches.",
    },
  ]

  const toggleExpanded = (id: number) => {
    setExpandedItems((prev) => (prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]))
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 py-4 md:py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <button
          onClick={() => router.back()}
          className="inline-flex items-center space-x-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 mb-4 md:mb-6 transition-colors text-sm md:text-base"
        >
          <FiArrowLeft className="w-4 h-4" />
          <span>Back</span>
        </button>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-6 md:mb-8">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-2 md:mb-4">
            Achievements
          </h1>
          <p className="text-base md:text-lg lg:text-xl text-gray-600 dark:text-gray-400">
            My accomplishments and milestones
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-4 md:gap-6">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-4 md:p-6"
            >
              {/* Top Section: Icon, Title, Description, Button */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-start space-x-3 md:space-x-4 flex-1">
                  <div
                    className={`w-10 h-10 md:w-12 md:h-12 ${achievement.bgColor} rounded-lg flex items-center justify-center text-lg md:text-2xl flex-shrink-0`}
                  >
                    {achievement.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h2 className="text-lg md:text-xl font-semibold text-gray-900 dark:text-white mb-1 md:mb-2">
                      {achievement.title}
                    </h2>
                    <p className="text-sm md:text-base text-gray-600 dark:text-gray-400 leading-relaxed">
                      {achievement.description}
                    </p>
                  </div>
                </div>

                {/* View Details Button */}
                {achievement.hasDetails && (
                  <button
                    onClick={() => toggleExpanded(achievement.id)}
                    className="ml-2 md:ml-4 flex items-center space-x-1 px-2 md:px-3 py-1 md:py-2 text-xs md:text-sm text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-lg transition-colors flex-shrink-0"
                  >
                    {achievement.hasImage && <FiImage className="w-3 h-3 md:w-4 md:h-4 mr-1" />}
                    <span>{expandedItems.includes(achievement.id) ? "Less" : "Details"}</span>
                    {expandedItems.includes(achievement.id) ? (
                      <FiChevronUp className="w-3 h-3 md:w-4 md:h-4" />
                    ) : (
                      <FiChevronDown className="w-3 h-3 md:w-4 md:h-4" />
                    )}
                  </button>
                )}
              </div>

              {/* Expanded Details - Full Width */}
              {expandedItems.includes(achievement.id) && achievement.details && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="pt-4 border-t border-gray-200 dark:border-gray-700"
                >
                  <p className="text-sm md:text-base text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                    {achievement.details}
                  </p>

                  {/* Achievement Image - Full Width */}
                  {achievement.hasImage && achievement.image && (
                    <div className="relative h-32 md:h-48 bg-gray-100 dark:bg-gray-700 rounded-lg overflow-hidden">
                      <Image
                        src={achievement.image || "/placeholder.svg"}
                        alt={achievement.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                  )}
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
