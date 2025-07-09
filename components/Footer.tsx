import { FiGithub, FiLinkedin, FiInstagram } from "react-icons/fi"
import { FaWhatsapp } from "react-icons/fa"

export default function Footer() {
  const socialLinks = [
    { href: "https://wa.me/7666768179", icon: FaWhatsapp, color: "text-green-600" },
    { href: "https://instagram.com/vishalghuge.111", icon: FiInstagram, color: "text-pink-600" },
    { href: "https://linkedin.com/in/vishalghuge111", icon: FiLinkedin, color: "text-blue-600" },
    { href: "https://github.com/vishalghuge111", icon: FiGithub, color: "text-gray-800 dark:text-gray-200" },
  ]

  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        {/* Desktop Footer */}
        <div className="hidden md:flex justify-between items-center">
          <div className="text-base text-gray-600 dark:text-gray-400">©2025 - Vishal Ghuge</div>
          <div className="flex items-center space-x-6">
            {socialLinks.map((social) => {
              const Icon = social.icon
              return (
                <a
                  key={social.href}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-base hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
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

        {/* Mobile Footer */}
        <div className="flex md:hidden items-center justify-between">
          <div className="text-sm text-gray-600 dark:text-gray-400">© 2025 - Vishal Ghuge</div>
          <div className="text-gray-400 text-lg">|</div>
          <div className="flex space-x-3">
            {socialLinks.map((social) => {
              const Icon = social.icon
              return (
                <a
                  key={social.href}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors"
                >
                  <Icon className={`w-5 h-5 ${social.color}`} />
                </a>
              )
            })}
          </div>
        </div>
      </div>
    </footer>
  )
}
