"use client"
import type React from "react"
import { FiSearch, FiMic } from "react-icons/fi"

interface SearchBarProps {
  value: string
  onChange: (value: string) => void
  onSearch: (query: string) => void
  placeholder?: string
}

export default function SearchBar({ value, onChange, onSearch, placeholder = "Search..." }: SearchBarProps) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSearch(value)
  }

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-2xl mx-auto">
      <div className="relative group">
        {/* Search Icon */}
        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
          <FiSearch className="h-5 w-5 text-gray-400 group-focus-within:text-blue-500 transition-colors" />
        </div>

        {/* Input Field */}
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className="block w-full pl-12 pr-16 py-4 text-base border border-gray-300 dark:border-gray-600 rounded-full bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-lg hover:shadow-xl transition-all duration-200 group-focus-within:shadow-xl"
        />

        {/* Voice Input Button */}
        <div className="absolute inset-y-0 right-0 pr-4 flex items-center">
          <button
            type="button"
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            aria-label="Voice search"
          >
            <FiMic className="h-5 w-5 text-gray-400 hover:text-blue-500 transition-colors" />
          </button>
        </div>
      </div>
    </form>
  )
}
