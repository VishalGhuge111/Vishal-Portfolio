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
      title: "IEEE TechSangam Finalist",
      description: "Top 50 out of 310+ teams at MIT ADT’s 24hr national level hackathon",
      icon: "🏆",
      color: "text-yellow-600",
      bgColor: "bg-yellow-100 dark:bg-yellow-900/30",
      hasDetails: true,
      hasImage: true,
      image: "/achievements/ieee-techsangam.jpg", // Replace with actual image path
      details:
        "Finalist at IEEE TechSangam 2K25, hosted by MIT ADT University, Pune. Our project, CityConnect, tackled civic problems like poor infrastructure, waste management, and lack of engagement. It featured GPS-based issue reporting, a chatbot, recycling rewards through EcoCoins, and a leaderboard system to promote active participation. Recognized for its innovation, real-world impact, and clean technical execution.",
    },

    {
      id: 2,
      title: "Ideathon 2.0 Finalist",
      description: "Finalist in PCU Ideathon 2.0 – 24hr national hackathon (Top 40 out of 500+ teams)",
      icon: "💡",
      color: "text-indigo-600",
      bgColor: "bg-indigo-100 dark:bg-indigo-900/30",
      hasDetails: true,
      hasImage: true,
      image: "/achievements/ideathon-2.0.jpg",
      details:
        "Selected as one of the Top 40 teams out of 500+ entries in PCU Ideathon 2.0, a 24-hour national-level hackathon. Our project, MediVault, focused on revolutionizing healthcare data management using Blockchain and AI to ensure secure, transparent, and intelligent medical record handling. Demonstrated innovation, teamwork, and strong problem-solving under pressure.",
    },

    {
      id: 3,
      title: "Consolation Prize – Takshantra",
      description: "Secured consolation prize at Shreeyash College's Takshantra event for presenting an innovative tech project",
      icon: "🏅",
      color: "text-blue-600",
      bgColor: "bg-blue-100 dark:bg-blue-900/30",
      hasDetails: false,
      hasImage: false,
    },

    {
      id: 4,
      title: "State-Level Project Competition Finalist",
      description: "Represented college in MSBTE project competition with IoT home automation system",
      icon: "🏆",
      color: "text-purple-600",
      bgColor: "bg-purple-100 dark:bg-purple-900/30",
      hasDetails: true,
      hasImage: false,
      details:
        "Selected as a finalist in the MSBTE State-Level Project Competition 2023–24, where our team represented our college with an IoT-based Home Automation project. The project focused on controlling home appliances remotely using sensors and smart devices. Appreciated for its practical use and simple implementation.",
    },
    {
      id: 5,
      title: "Social Service Award",
      description: "Recognized by Caring Souls Foundation for contribution to donation drive",
      icon: "🥉",
      color: "text-purple-600",
      bgColor: "bg-purple-100 dark:bg-purple-900/30",
      hasDetails: true,
      hasImage: false,
      details:
        "Awarded Bronze Medal in 8th standard by Caring Souls Foundation for actively participating in a social service initiative. Successfully helped collect funds for cancer and AIDS patients through a school-organized donation drive. Recognized for compassion, community involvement, and teamwork.",
    }

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
                    <div className="relative w-full h-[200px] md:h-[360px] bg-gray-100 dark:bg-gray-700 rounded-lg overflow-hidden">
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
