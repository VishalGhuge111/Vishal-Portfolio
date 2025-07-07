"use client"
import { motion } from "framer-motion"
import { FiArrowLeft } from "react-icons/fi"
import { useRouter } from "next/navigation"
import {
  SiReact,
  SiNextdotjs,
  SiJavascript,
  SiTypescript,
  SiTailwindcss,
  SiHtml5,
  SiCss3,
  SiNodedotjs,
  SiExpress,
  SiPython,
  SiDjango,
  SiMongodb,
  SiPostgresql,
  SiMysql,
  SiFirebase,
  SiGit,
  SiDocker,
  SiAwsamplify,
  SiVercel,
  SiFigma,
  SiVsco,
} from "react-icons/si"

export default function SkillsPage() {
  const router = useRouter()

  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "React", icon: SiReact, color: "text-blue-500" },
        { name: "Next.js", icon: SiNextdotjs, color: "text-black dark:text-white" },
        { name: "JavaScript", icon: SiJavascript, color: "text-yellow-500" },
        { name: "TypeScript", icon: SiTypescript, color: "text-blue-600" },
        { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-cyan-500" },
        { name: "HTML5", icon: SiHtml5, color: "text-orange-600" },
        { name: "CSS3", icon: SiCss3, color: "text-blue-500" },
      ],
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", icon: SiNodedotjs, color: "text-green-600" },
        { name: "Express.js", icon: SiExpress, color: "text-gray-600" },
        { name: "Python", icon: SiPython, color: "text-blue-500" },
        { name: "Django", icon: SiDjango, color: "text-green-700" },
      ],
    },
    {
      title: "Database",
      skills: [
        { name: "MongoDB", icon: SiMongodb, color: "text-green-500" },
        { name: "PostgreSQL", icon: SiPostgresql, color: "text-blue-600" },
        { name: "MySQL", icon: SiMysql, color: "text-blue-500" },
        { name: "Firebase", icon: SiFirebase, color: "text-orange-500" },
      ],
    },
    {
      title: "Tools & Others",
      skills: [
        { name: "Git", icon: SiGit, color: "text-orange-600" },
        { name: "Docker", icon: SiDocker, color: "text-blue-500" },
        { name: "AWS", icon: SiAwsamplify, color: "text-orange-400" },
        { name: "Vercel", icon: SiVercel, color: "text-black dark:text-white" },
        { name: "Figma", icon: SiFigma, color: "text-purple-500" },
        { name: "VS Code", icon: SiVsco, color: "text-blue-500" },
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 py-4 md:py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <button
          onClick={() => router.back()}
          className="inline-flex items-center space-x-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 mb-4 md:mb-6 transition-colors text-sm md:text-base"
        >
          <FiArrowLeft className="w-4 h-4" />
          <span>Back</span>
        </button>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-6 md:mb-8">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-2 md:mb-4">
            Skills
          </h1>
          <p className="text-base md:text-lg lg:text-xl text-gray-600 dark:text-gray-400">
            Technologies and tools I work with
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-4 md:p-6"
            >
              <h2 className="text-lg md:text-xl font-semibold text-gray-900 dark:text-white mb-3 md:mb-4">
                {category.title}
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-3">
                {category.skills.map((skill) => {
                  const Icon = skill.icon
                  return (
                    <div
                      key={skill.name}
                      className="flex flex-col items-center p-2 md:p-3 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors group"
                    >
                      <Icon
                        className={`w-6 h-6 md:w-8 md:h-8 ${skill.color} mb-1 md:mb-2 group-hover:scale-110 transition-transform`}
                      />
                      <span className="text-xs md:text-sm font-medium text-gray-700 dark:text-gray-300 text-center">
                        {skill.name}
                      </span>
                    </div>
                  )
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
