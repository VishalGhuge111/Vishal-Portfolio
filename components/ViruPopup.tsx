"use client"
import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { FiX, FiMaximize2, FiSend, FiArrowRight } from "react-icons/fi"

export default function ViruPopup() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([
    { id: 1, text: "Hi! I'm Viru, Vishal's AI assistant. How can I help you today?", isBot: true },
  ])
  const [inputValue, setInputValue] = useState("")
  const [hasAskedQuestion, setHasAskedQuestion] = useState(false)
  const popupRef = useRef<HTMLDivElement>(null)

  // Close popup when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (popupRef.current && !popupRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside)
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [isOpen])

  const getQuickResponse = (question: string) => {
    const lowerQuestion = question.toLowerCase()

    if (lowerQuestion.includes("who is vishal") || lowerQuestion.includes("about vishal")) {
      return "Vishal Ghuge is a passionate Full Stack Developer from Maharashtra, India, specializing in MERN stack, JavaScript, and Firebase. He has built 15+ projects including CareerSetu and SPPU Engineer."
    }
    if (lowerQuestion.includes("careersetu")) {
      return "CareerSetu is Vishal's flagship project - a comprehensive career guidance platform built with MERN stack that helps students make informed career decisions."
    }
    if (lowerQuestion.includes("skills") || lowerQuestion.includes("technologies")) {
      return "Vishal's core skills include React, Next.js, Node.js, MongoDB, JavaScript, TypeScript, Firebase, and Tailwind CSS. He's experienced in full-stack development."
    }
    if (lowerQuestion.includes("projects")) {
      return "Vishal has built 15+ projects including CareerSetu (career guidance), SPPU Engineer (education platform), CityConnect (smart city), and many more innovative solutions."
    }
    if (lowerQuestion.includes("experience")) {
      return "Vishal has 3+ years of experience in full-stack development, completed 5+ internships, and worked with modern technologies like MERN stack."
    }
    if (lowerQuestion.includes("contact") || lowerQuestion.includes("hire")) {
      return "You can contact Vishal through his portfolio contact form, LinkedIn, or email. He's available for freelance projects and full-time opportunities."
    }

    return "Thanks for your question! For detailed information about Vishal's work, projects, and experience, please visit the full chat page where I can provide comprehensive answers."
  }

  const handleSendMessage = () => {
    if (!inputValue.trim()) return

    const newMessage = { id: Date.now(), text: inputValue, isBot: false }
    setMessages((prev) => [...prev, newMessage])

    // Get quick response
    const response = getQuickResponse(inputValue)

    setTimeout(() => {
      const botResponse = {
        id: Date.now() + 1,
        text: response,
        isBot: true,
      }
      setMessages((prev) => [...prev, botResponse])
      setHasAskedQuestion(true)
    }, 1000)

    setInputValue("")
  }

  return (
    <>
      {/* Floating Chat Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-4 right-4 md:bottom-6 md:right-6 w-12 h-12 md:w-14 md:h-14 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-full shadow-lg transition-all duration-300 z-50 flex items-center justify-center group"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        style={{ zIndex: 9999 }}
      >
        {isOpen ? <FiX className="w-5 h-5 md:w-6 md:h-6" /> : <div className="text-lg md:text-xl">🤖</div>}

        {/* Pulse animation when closed */}
        {!isOpen && (
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 animate-ping opacity-20" />
        )}
      </motion.button>

      {/* Chat Popup */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            ref={popupRef}
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="fixed bottom-16 right-4 md:bottom-24 md:right-6 w-72 md:w-80 h-80 md:h-96 bg-white dark:bg-gray-800 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 flex flex-col overflow-hidden"
            style={{ zIndex: 9998 }}
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-3 md:p-4 flex justify-between items-center">
              <div className="flex items-center space-x-2 md:space-x-3">
                <div className="w-6 h-6 md:w-8 md:h-8 bg-white/20 rounded-full flex items-center justify-center text-sm md:text-lg">
                  🤖
                </div>
                <div>
                  <h3 className="font-semibold text-sm md:text-base">Viru AI</h3>
                  <p className="text-xs opacity-90">Always here to help!</p>
                </div>
              </div>
              {hasAskedQuestion && (
                <Link
                  href="/viru"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center space-x-1 text-xs bg-white/20 hover:bg-white/30 px-2 py-1 rounded-full transition-colors"
                >
                  <FiMaximize2 className="w-3 h-3" />
                  <span className="hidden md:inline">Full Chat</span>
                </Link>
              )}
            </div>

            {/* Messages */}
            <div className="flex-1 p-3 md:p-4 overflow-y-auto space-y-2 md:space-y-3 bg-gray-50 dark:bg-gray-900">
              {messages.map((message) => (
                <div key={message.id} className={`flex ${message.isBot ? "justify-start" : "justify-end"}`}>
                  <div
                    className={`max-w-xs px-2 md:px-3 py-1 md:py-2 rounded-2xl text-xs md:text-sm shadow-sm ${
                      message.isBot
                        ? "bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 border border-gray-200 dark:border-gray-700"
                        : "bg-gradient-to-r from-blue-600 to-purple-600 text-white"
                    }`}
                  >
                    {message.text}
                  </div>
                </div>
              ))}

              {/* Direct Link Button after first response */}
              {hasAskedQuestion && (
                <div className="flex justify-center pt-2">
                  <Link
                    href="/viru"
                    onClick={() => setIsOpen(false)}
                    className="inline-flex items-center space-x-2 px-3 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full text-xs hover:from-blue-700 hover:to-purple-700 transition-colors shadow-sm"
                  >
                    <span>Continue Full Chat</span>
                    <FiArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              )}
            </div>

            {/* Input */}
            <div className="p-3 md:p-4 border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
              <div className="flex space-x-2">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                  placeholder="Ask about Vishal..."
                  className="flex-1 px-2 md:px-3 py-1 md:py-2 border border-gray-300 dark:border-gray-600 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 text-xs md:text-sm bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                />
                <button
                  onClick={handleSendMessage}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white p-1 md:p-2 rounded-full transition-colors shadow-sm"
                >
                  <FiSend className="w-3 h-3 md:w-4 md:h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
