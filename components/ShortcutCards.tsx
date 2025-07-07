"use client"
import { FiBriefcase, FiDownload } from "react-icons/fi"

interface ShortcutCardsProps {
  onProjectsClick: () => void
  onResumeClick: () => void
  onAIChatClick: () => void
}

export default function ShortcutCards({ onProjectsClick, onResumeClick, onAIChatClick }: ShortcutCardsProps) {
  const shortcuts = [
    {
      icon: FiBriefcase,
      label: "Projects",
      onClick: onProjectsClick,
      color: "text-blue-600",
      bgColor: "bg-blue-50 dark:bg-blue-900/20",
    },
    {
      icon: FiDownload,
      label: "Resume",
      onClick: onResumeClick,
      color: "text-green-600",
      bgColor: "bg-green-50 dark:bg-green-900/20",
    },
  ]

  return (
    <div className="flex gap-4 justify-center items-center max-w-lg mx-auto">
      {shortcuts.map((shortcut) => {
        const Icon = shortcut.icon
        return (
          <button
            key={shortcut.label}
            onClick={shortcut.onClick}
            className={`flex items-center space-x-3 px-6 py-4 ${shortcut.bgColor} rounded-xl border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all duration-200 hover:scale-105 w-full min-w-[140px]`}
          >
            <Icon className={`w-5 h-5 ${shortcut.color}`} />
            <span className="font-medium text-gray-700 dark:text-gray-300">{shortcut.label}</span>
          </button>
        )
      })}
    </div>
  )
}
