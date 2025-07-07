"use client"
import { useState, useRef, useEffect } from "react"
import { motion } from "framer-motion"
import { FiSend, FiUser, FiArrowLeft } from "react-icons/fi"
import { useRouter } from "next/navigation"

interface Message {
  id: number
  text: string
  isBot: boolean
  timestamp: Date
}

export default function ViruPage() {
  const router = useRouter()
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "👋 Hello! I'm Viru, your intelligent AI assistant specializing in everything about Vishal Ghuge.\n\nI have comprehensive knowledge about:\n• His projects (CareerSetu, SPPU Engineer, etc.)\n• Technical skills and expertise\n• Professional experience and achievements\n• Educational background\n• Contact information\n\nWhat would you like to know?",
      isBot: true,
      timestamp: new Date(),
    },
  ])
  const [inputValue, setInputValue] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const exampleQuestions = [
    "Tell me about Vishal's background",
    "What are his main projects?",
    "What technologies does he use?",
    "How can I contact him?",
  ]

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return

    const userMessage: Message = {
      id: Date.now(),
      text: inputValue,
      isBot: false,
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInputValue("")
    setIsLoading(true)

    try {
      const response = await fetch("/api/viru", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: inputValue,
          history: messages.slice(-10),
        }),
      })

      if (!response.ok) {
        throw new Error("Failed to get response")
      }

      const data = await response.json()

      const botMessage: Message = {
        id: Date.now() + 1,
        text: data.message,
        isBot: true,
        timestamp: new Date(),
      }

      setMessages((prev) => [...prev, botMessage])
    } catch (error) {
      const errorMessage: Message = {
        id: Date.now() + 1,
        text: "I apologize, but I'm experiencing some technical difficulties right now. Please try again in a moment, or feel free to contact Vishal directly through his portfolio.",
        isBot: true,
        timestamp: new Date(),
      }
      setMessages((prev) => [...prev, errorMessage])
    } finally {
      setIsLoading(false)
    }
  }

  const handleExampleClick = (question: string) => {
    setInputValue(question)
  }

  return (
    <div className="flex-1 flex flex-col bg-gray-50 dark:bg-gray-900">
      {/* Chat Header */}
      <div className="flex-shrink-0 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 px-4 py-3">
        <div className="flex items-center space-x-3">
          <button
            onClick={() => router.back()}
            className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-colors"
          >
            <FiArrowLeft className="w-5 h-5 text-gray-600 dark:text-gray-400" />
          </button>
          <div className="w-px h-6 bg-gray-300 dark:bg-gray-600"></div>
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-sm">🤖</div>
            <div>
              <h1 className="text-base font-semibold text-gray-900 dark:text-white">Viru AI</h1>
              <p className="text-xs text-gray-500 dark:text-gray-400">Vishal's personal AI assistant</p>
            </div>
          </div>
        </div>
      </div>

      {/* Chat Container - Centered for Desktop */}
      <div className="flex-1 flex justify-center overflow-hidden">
        <div className="w-full max-w-4xl flex flex-col bg-white dark:bg-gray-800 lg:mx-4 lg:my-4 lg:rounded-xl lg:shadow-lg lg:border lg:border-gray-200 lg:dark:border-gray-700 overflow-hidden">
          {/* Scrollable Messages Area */}
          <div className="flex-1 overflow-y-auto">
            <div className="px-4 py-6">
              {/* Messages */}
              <div className="space-y-4">
                {messages.map((message) => (
                  <motion.div
                    key={message.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`flex ${message.isBot ? "justify-start" : "justify-end"}`}
                  >
                    <div
                      className={`flex items-start space-x-3 max-w-xs md:max-w-2xl ${message.isBot ? "" : "flex-row-reverse space-x-reverse"}`}
                    >
                      <div
                        className={`w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 text-sm ${
                          message.isBot ? "bg-blue-600 text-white" : "bg-gray-600 text-white"
                        }`}
                      >
                        {message.isBot ? "🤖" : <FiUser className="w-3 h-3" />}
                      </div>
                      <div
                        className={`px-3 py-2 rounded-2xl shadow-sm ${
                          message.isBot
                            ? "bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                            : "bg-blue-600 text-white"
                        }`}
                      >
                        <p className="text-sm leading-relaxed whitespace-pre-wrap">{message.text}</p>
                        <p className="text-xs opacity-70 mt-1">
                          {message.timestamp.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}

                {isLoading && (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex justify-start">
                    <div className="flex items-start space-x-3">
                      <div className="w-7 h-7 rounded-full bg-blue-600 text-white flex items-center justify-center text-sm">
                        🤖
                      </div>
                      <div className="bg-gray-100 dark:bg-gray-700 px-3 py-2 rounded-2xl shadow-sm">
                        <div className="flex space-x-1">
                          <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce"></div>
                          <div
                            className="w-2 h-2 bg-blue-500 rounded-full animate-bounce"
                            style={{ animationDelay: "0.1s" }}
                          ></div>
                          <div
                            className="w-2 h-2 bg-blue-500 rounded-full animate-bounce"
                            style={{ animationDelay: "0.2s" }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
                <div ref={messagesEndRef} />
              </div>

              {/* Example Questions - 2x2 Grid */}
              {messages.length === 1 && (
                <div className="mt-6 border-t border-gray-200 dark:border-gray-700 pt-6">
                  <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-4">
                    <p className="text-xs font-medium text-gray-600 dark:text-gray-400 mb-3">
                      💡 Quick Start - Try asking:
                    </p>
                    <div className="grid grid-cols-2 gap-2">
                      {exampleQuestions.map((question, index) => (
                        <button
                          key={index}
                          onClick={() => handleExampleClick(question)}
                          className="text-left p-2 text-xs bg-white dark:bg-gray-600 hover:bg-gray-50 dark:hover:bg-gray-500 rounded-lg transition-colors border border-gray-200 dark:border-gray-500"
                        >
                          <span className="text-blue-600 dark:text-blue-400 text-xs">❓</span> {question}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Fixed Input Area with Border */}
          <div className="flex-shrink-0 bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 p-4">
            <div className="flex space-x-3">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && !e.shiftKey && handleSendMessage()}
                placeholder="Ask me anything about Vishal Ghuge..."
                disabled={isLoading}
                className="flex-1 px-4 py-2.5 border border-gray-300 dark:border-gray-600 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 disabled:opacity-50 text-sm"
              />
              <button
                onClick={handleSendMessage}
                disabled={!inputValue.trim() || isLoading}
                className="bg-blue-600 hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed text-white px-4 py-2.5 rounded-full transition-colors flex-shrink-0"
              >
                <FiSend className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
