"use client"
import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { useTheme } from "./ThemeProvider"
import {
  FiHome,
  FiBriefcase,
  FiFileText,
  FiMail,
  FiSun,
  FiMoon,
  FiUser,
  FiDownload,
  FiAward,
  FiCode,
  FiX,
  FiGithub,
  FiLinkedin,
  FiInstagram,
} from "react-icons/fi"
import { FaBrain, FaWhatsapp, FaGraduationCap } from "react-icons/fa"

export default function Navbar() {
  const [isMobileModalOpen, setIsMobileModalOpen] = useState(false)
  const [isDesktopPopoverOpen, setIsDesktopPopoverOpen] = useState(false)
  const pathname = usePathname()
  const { theme, toggleTheme } = useTheme()

  const navItems = [
    { href: "/", label: "Home", icon: FiHome },
    { href: "/about", label: "About", icon: FiUser },
    { href: "/education", label: "Education", icon: FaGraduationCap },
    { href: "/projects", label: "Projects", icon: FiBriefcase },
    { href: "/blog", label: "Blogs", icon: FiFileText },
    { href: "/experience", label: "Experience", icon: FaBrain },
  ]

  const profileMenuItems = [
    { href: "/skills", label: "Skills", icon: FiCode },
    { href: "/achievements", label: "Achievements", icon: FiAward },
    { href: "/contact", label: "Contact", icon: FiMail },
    { href: "/hire", label: "Hire Me", icon: FiBriefcase },
    { href: "/viru", label: "AI Chat", icon: FiUser },
  ]

  const socialLinks = [
    { href: "https://instagram.com/vishalghuge.111", icon: FiInstagram, color: "text-pink-600" },
    { href: "https://linkedin.com/in/vishalghuge111", icon: FiLinkedin, color: "text-blue-600" },
    { href: "https://github.com/vishalghuge111", icon: FiGithub, color: "text-gray-800 dark:text-gray-200" },
    { href: "https://wa.me/7666768179", icon: FaWhatsapp, color: "text-green-600" },
  ]

  return (
    <>
      <nav className="bg-white dark:bg-gray-900 shadow-sm border-b border-gray-200 dark:border-gray-700 sticky top-0 z-40 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Left - Logo/Name */}
            <Link href="/" className="flex items-center">
              <img
                src={theme === "dark" ? "/logo-dark.png" : "/logo-light.png"}
                alt="Vishal Logo"
                className="h-8 w-auto"
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => {
                const Icon = item.icon
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`flex items-center space-x-2 text-sm font-medium transition-colors hover:text-blue-600 dark:hover:text-blue-400 ${
                      pathname === item.href ? "text-blue-600 dark:text-blue-400" : "text-gray-700 dark:text-gray-300"
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span>{item.label}</span>
                  </Link>
                )
              })}

              {/* Theme Toggle */}
              <button
                onClick={toggleTheme}
                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                aria-label="Toggle theme"
              >
                {theme === "light" ? (
                  <FiMoon className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                ) : (
                  <FiSun className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                )}
              </button>

              {/* Desktop Profile Popover */}
              <div className="relative">
                <button
                  onClick={() => setIsDesktopPopoverOpen(!isDesktopPopoverOpen)}
                  className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105"
                >
                  {/* Replace V with your image */}
                  <img
                    src="/profile.jpg" // <-- update with your image path
                    alt="Vishal Ghuge"
                    className="w-10 h-10 rounded-full object-cover"
                  />
                </button>

                <AnimatePresence>
                  {isDesktopPopoverOpen && (
                    <>
                      {/* Backdrop */}
                      <div className="fixed inset-0 z-40" onClick={() => setIsDesktopPopoverOpen(false)} />

                      {/* Popover Content */}
                      <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: -10 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute right-0 top-full mt-2 w-80 bg-white dark:bg-gray-800 rounded-xl shadow-2xl border border-gray-200 dark:border-gray-700 z-50"
                      >
                        <div className="p-4 space-y-4">
                          {/* Profile Header */}
                          <div className="flex items-center space-x-4 pb-4 border-b border-gray-200 dark:border-gray-700">
                            <img
                              src="/profile.jpg" // <-- update with your image path
                              alt="Vishal Ghuge"
                              className="w-12 h-12 rounded-full object-cover border-2 border-blue-600"
                            />
                            <div>
                              <h3 className="font-semibold text-gray-900 dark:text-white">Vishal Ghuge</h3>
                              <p className="text-sm text-gray-600 dark:text-gray-400">Full Stack Developer</p>
                            </div>
                          </div>

                          {/* Navigation Links */}
                          <div className="space-y-1">
                            {[...navItems, ...profileMenuItems].map((item) => {
                              const Icon = item.icon
                              return (
                                <Link
                                  key={item.href}
                                  href={item.href}
                                  onClick={() => setIsDesktopPopoverOpen(false)}
                                  className="flex items-center space-x-3 px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                                >
                                  <Icon className="w-4 h-4 text-gray-600 dark:text-gray-400" />
                                  <span className="text-sm text-gray-700 dark:text-gray-300">{item.label}</span>
                                </Link>
                              )
                            })}
                            <a
                              href="/resume.pdf"
                              download
                              onClick={() => setIsDesktopPopoverOpen(false)}
                              className="flex items-center space-x-3 px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                            >
                              <FiDownload className="w-4 h-4 text-gray-600 dark:text-gray-400" />
                              <span className="text-sm text-gray-700 dark:text-gray-300">Resume</span>
                            </a>
                          </div>

                          {/* Social Links */}
                          <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                            <div className="flex justify-center space-x-4">
                              {socialLinks.map((social) => {
                                const Icon = social.icon
                                return (
                                  <a
                                    key={social.href}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                                  >
                                    <Icon className={`w-4 h-4 ${social.color}`} />
                                  </a>
                                )
                              })}
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    </>
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* Mobile - Theme Toggle + Profile Icon */}
            <div className="md:hidden flex items-center space-x-3">
              <button
                onClick={toggleTheme}
                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                aria-label="Toggle theme"
              >
                {theme === "light" ? (
                  <FiMoon className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                ) : (
                  <FiSun className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                )}
              </button>

              <button
                onClick={() => setIsMobileModalOpen(true)}
                className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg"
              >
                <img
                  src="/profile.jpg" // <-- update with your image path if needed
                  alt="Vishal Ghuge"
                  className="w-8 h-8 rounded-full object-cover"
                />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Modal */}
      <AnimatePresence>
        {isMobileModalOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 z-50 md:hidden"
              onClick={() => setIsMobileModalOpen(false)}
            />

            {/* Modal */}
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 500 }}
              className="fixed inset-x-0 bottom-0 bg-white dark:bg-gray-900 rounded-t-2xl shadow-2xl z-50 md:hidden max-h-[90vh] overflow-y-auto"
            >
              <div className="p-6">
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <img
                      src="/profile.jpg" // <-- update with your image path
                      alt="Vishal Ghuge"
                      className="w-12 h-12 rounded-full object-cover border-2 border-blue-600"
                    />
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white">Vishal Ghuge</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Full Stack Developer</p>
                    </div>
                  </div>
                  <button
                    onClick={() => setIsMobileModalOpen(false)}
                    className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                  >
                    <FiX className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                  </button>
                </div>

                {/* Navigation Menu */}
                <div className="space-y-2 mb-6">
                  {[...navItems, ...profileMenuItems].map((item) => {
                    const Icon = item.icon
                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setIsMobileModalOpen(false)}
                        className="flex items-center space-x-4 px-4 py-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                      >
                        <Icon className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                        <span className="text-gray-700 dark:text-gray-300">{item.label}</span>
                      </Link>
                    )
                  })}
                  <a
                    href="/vishalghuge-resume.pdf"
                    download
                    onClick={() => setIsMobileModalOpen(false)}
                    className="flex items-center space-x-4 px-4 py-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                  >
                    <FiDownload className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                    <span className="text-gray-700 dark:text-gray-300">Resume</span>
                  </a>
                </div>

                {/* Social Links */}
                <div className="pt-6 border-t border-gray-200 dark:border-gray-700">
                  <h4 className="text-sm font-medium text-gray-900 dark:text-white mb-4">Connect with me</h4>
                  <div className="grid grid-cols-2 gap-3">
                    {socialLinks.map((social) => {
                      const Icon = social.icon
                      return (
                        <a
                          key={social.href}
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center space-x-3 px-4 py-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                        >
                          <Icon className={`w-5 h-5 ${social.color}`} />
                          <span className="text-gray-700 dark:text-gray-300">
                            {social.href.includes("instagram")
                              ? "Instagram"
                              : social.href.includes("linkedin")
                                ? "LinkedIn"
                                : social.href.includes("github")
                                  ? "GitHub"
                                  : "WhatsApp"}
                          </span>
                        </a>
                      )
                    })}
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
