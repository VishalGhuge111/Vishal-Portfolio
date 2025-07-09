"use client"
import { useEffect } from "react"
import { notFound } from "next/navigation"
import Image from "next/image"
import { FiGithub, FiExternalLink, FiArrowLeft } from "react-icons/fi"
import { projectsData } from "@/data/projectData"
import Link from "next/link"
import {
  SiReact,
  SiNextdotjs,
  SiJavascript,
  SiTypescript,
  SiNodedotjs,
  SiMongodb,
  SiExpress,
  SiFirebase,
  SiTailwindcss,
  SiPython,
  SiDjango,
  SiVuedotjs,
  SiAngular,
  SiDocker,
  SiAwsamplify,
} from "react-icons/si"

interface ProjectPageProps {
  params: {
    slug: string
  }
}

const getTechIcon = (tech: string) => {
  const icons: { [key: string]: { icon: any; color: string } } = {
    React: { icon: SiReact, color: "text-blue-500" },
    "Next.js": { icon: SiNextdotjs, color: "text-black dark:text-white" },
    JavaScript: { icon: SiJavascript, color: "text-yellow-500" },
    TypeScript: { icon: SiTypescript, color: "text-blue-600" },
    "Node.js": { icon: SiNodedotjs, color: "text-green-600" },
    MongoDB: { icon: SiMongodb, color: "text-green-500" },
    Express: { icon: SiExpress, color: "text-gray-600" },
    Firebase: { icon: SiFirebase, color: "text-orange-500" },
    "Tailwind CSS": { icon: SiTailwindcss, color: "text-cyan-500" },
    Python: { icon: SiPython, color: "text-blue-500" },
    Django: { icon: SiDjango, color: "text-green-700" },
    "Vue.js": { icon: SiVuedotjs, color: "text-green-500" },
    Angular: { icon: SiAngular, color: "text-red-600" },
    Docker: { icon: SiDocker, color: "text-blue-500" },
    AWS: { icon: SiAwsamplify, color: "text-orange-400" },
  }
  return icons[tech] || { icon: SiReact, color: "text-gray-500" }
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = projectsData.find((p) => p.slug === params.slug)

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  if (!project) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 py-4 md:py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          href="/projects"
          className="inline-flex items-center space-x-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 mb-4 md:mb-6 transition-colors"
        >
          <FiArrowLeft className="w-4 h-4" />
          <span className="text-sm md:text-base">Back to Projects</span>
        </Link>

        <article className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden">
          <div className="relative h-48 md:h-64 lg:h-80">
            <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
          </div>

          <div className="p-4 md:p-8">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4 md:mb-6">
              {project.title}
            </h1>

            <p className="text-base md:text-xl text-gray-600 dark:text-gray-400 mb-6 md:mb-8 leading-relaxed">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 md:gap-3 mb-6 md:mb-8">
              {(project.technologies || []).map((tech) => {
                const { icon: Icon, color } = getTechIcon(tech)
                return (
                  <span
                    key={tech}
                    className="inline-flex items-center space-x-1 md:space-x-2 px-2 md:px-3 py-1 md:py-2 text-xs md:text-sm bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full"
                  >
                    <Icon className={`w-3 h-3 md:w-4 md:h-4 ${color}`} />
                    <span>{tech}</span>
                  </span>
                )
              })}
            </div>

            <div className="flex flex-wrap gap-3 md:gap-4 mb-6 md:mb-8">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 px-3 md:px-4 py-2 bg-gray-900 dark:bg-gray-700 text-white rounded-lg hover:bg-gray-800 dark:hover:bg-gray-600 transition-colors text-sm md:text-base"
                >
                  <FiGithub className="w-4 h-4" />
                  <span>View Code</span>
                </a>
              )}
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 px-3 md:px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm md:text-base"
                >
                  <FiExternalLink className="w-4 h-4" />
                  <span>Live Demo</span>
                </a>
              )}
            </div>

            <div className="space-y-6 md:space-y-8">
              <div>
                <h2 className="text-lg md:text-2xl font-semibold text-gray-900 dark:text-white mb-3 md:mb-4">
                  Problem
                </h2>
                <p className="text-sm md:text-base text-gray-600 dark:text-gray-400 leading-relaxed">
                  {project.problem}
                </p>
              </div>

              <div>
                <h2 className="text-lg md:text-2xl font-semibold text-gray-900 dark:text-white mb-3 md:mb-4">
                  Solution
                </h2>
                <p className="text-sm md:text-base text-gray-600 dark:text-gray-400 leading-relaxed">
                  {project.solution}
                </p>
              </div>

              <div>
                <h2 className="text-lg md:text-2xl font-semibold text-gray-900 dark:text-white mb-3 md:mb-4">
                  Features
                </h2>
                <ul className="space-y-2 md:space-y-3">
                  {(project.features || []).map((feature, index) => (
                    <li key={index} className="flex items-start space-x-2 md:space-x-3">
                      <span className="text-blue-600 dark:text-blue-400 mt-1 text-sm md:text-base">•</span>
                      <span className="text-sm md:text-base text-gray-600 dark:text-gray-400 leading-relaxed">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Project Images Section */}
              <div>
                <h2 className="text-lg md:text-2xl font-semibold text-gray-900 dark:text-white mb-3 md:mb-4">
                  Project Gallery
                </h2>
                {project.gallery && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                    {project.gallery.map((src, index) => (
                      <div
                        key={index}
                        className="relative h-40 md:h-48 bg-gray-100 dark:bg-gray-700 rounded-lg overflow-hidden"
                      >
                        <Image
                          src={src}
                          alt={`${project.title} Screenshot ${index + 1}`}
                          fill
                          className="object-cover transition-transform duration-300 hover:scale-105"
                        />
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>
  )
}
