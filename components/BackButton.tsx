"use client"
import { useRouter } from "next/navigation"
import { FiArrowLeft } from "react-icons/fi"

export default function BackButton() {
  const router = useRouter()

  return (
    <button
      onClick={() => router.back()}
      className="inline-flex items-center space-x-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 mb-6 transition-colors"
    >
      <FiArrowLeft className="w-4 h-4" />
      <span>Back</span>
    </button>
  )
}
