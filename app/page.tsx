"use client"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { motion } from "framer-motion"
import SearchBar from "@/components/SearchBar"
import { FiBriefcase, FiDownload, FiUser } from "react-icons/fi"

export default function Home() {
  const router = useRouter()
  const [searchQuery, setSearchQuery] = useState("")

  const handleSearch = (query: string) => {
    if (query.trim()) {
      router.push(`/search?q=${encodeURIComponent(query)}`)
    }
  }

  const handleProjectsClick = () => {
    router.push("/projects")
  }

  const handleResumeClick = () => {
    const link = document.createElement("a")
    link.href = "/resume.pdf"
    link.download = "VishalGhuge_Resume.pdf"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const handleHireMeClick = () => {
    router.push("/hire")
  }

  const shortcuts = [
    {
      icon: FiBriefcase,
      label: "Projects",
      onClick: handleProjectsClick,
      color: "text-blue-600",
      bgColor: "bg-blue-50 dark:bg-blue-900/20",
    },
    {
      icon: FiDownload,
      label: "Resume",
      onClick: handleResumeClick,
      color: "text-green-600",
      bgColor: "bg-green-50 dark:bg-green-900/20",
    },
    {
      icon: FiUser,
      label: "Hire Me",
      onClick: handleHireMeClick,
      color: "text-purple-600",
      bgColor: "bg-purple-50 dark:bg-purple-900/20",
    },
  ]

  return (
    <main className="min-h-[calc(100vh-8rem)] flex items-center justify-center bg-black px-4 transition-colors">
      <div className="w-full max-w-4xl mx-auto text-center space-y-8">
        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight max-w-2xl mx-auto"
        >
          Vishal Ghuge
        </motion.h1>

        {/* Search Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="space-y-6"
        >
          <SearchBar
            value={searchQuery}
            onChange={setSearchQuery}
            onSearch={handleSearch}
            placeholder="Search my projects, skills, experience..."
          />

          {/* Desktop Shortcut Cards */}
          <div className="hidden sm:flex gap-4 justify-center items-center max-w-2xl mx-auto">
            {shortcuts.map((shortcut) => {
              const Icon = shortcut.icon
              return (
                <button
                  key={shortcut.label}
                  onClick={shortcut.onClick}
                  className={`flex items-center space-x-2 px-4 py-2 ${shortcut.bgColor} rounded-lg border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all duration-200 hover:scale-105 min-w-[120px] text-sm`}
                >
                  <Icon className={`w-4 h-4 ${shortcut.color}`} />
                  <span className="font-medium text-gray-700 dark:text-gray-300">{shortcut.label}</span>
                </button>
              )
            })}
          </div>

          {/* Mobile Shortcut Icons */}
          <div className="flex sm:hidden gap-6 justify-center items-center">
            {shortcuts.map((shortcut) => {
              const Icon = shortcut.icon
              return (
                <button
                  key={shortcut.label}
                  onClick={shortcut.onClick}
                  className={`flex flex-col items-center space-y-2 p-3 ${shortcut.bgColor} rounded-xl border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all duration-200 hover:scale-105`}
                >
                  <Icon className={`w-6 h-6 ${shortcut.color}`} />
                  <span className="text-xs font-medium text-gray-700 dark:text-gray-300">{shortcut.label}</span>
                </button>
              )
            })}
          </div>
        </motion.div>
      </div>
    </main>
  )
}
