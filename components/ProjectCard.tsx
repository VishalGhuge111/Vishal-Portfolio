import Link from "next/link"
import Image from "next/image"
import { FiGithub, FiExternalLink, FiStar } from "react-icons/fi"
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

interface Project {
  id: number | string
  slug: string
  title: string
  description: string
  image: string
  technologies?: string[]
  tags?: string[]
  category?: string
  featured?: boolean
  githubUrl?: string
  liveUrl?: string
}

interface ProjectCardProps {
  project: Project
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
  return icons[tech] || { icon: FiStar, color: "text-gray-500" }
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const tags = project.tags ?? project.technologies ?? []
  const category = project.category ?? "Other"

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-lg transition-all duration-300 group">
      {/* Image */}
      <div className="relative overflow-hidden">
        <Image
          src={project.image || "/placeholder.svg"}
          alt={project.title}
          width={400}
          height={250}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />

        {/* Featured badge */}
        {project.featured && (
          <div className="absolute top-3 left-3 flex items-center space-x-1 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-300 px-2 py-1 rounded-full text-xs font-medium">
            <FiStar className="w-3 h-3" />
            <span>Featured</span>
          </div>
        )}

        {/* Code / Live links */}
        <div className="absolute top-3 right-3 flex space-x-2">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-white/90 dark:bg-gray-800/90 rounded-full hover:bg-white dark:hover:bg-gray-800 transition-colors"
            >
              <FiGithub className="w-4 h-4 text-gray-700 dark:text-gray-300" />
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-white/90 dark:bg-gray-800/90 rounded-full hover:bg-white dark:hover:bg-gray-800 transition-colors"
            >
              <FiExternalLink className="w-4 h-4 text-gray-700 dark:text-gray-300" />
            </a>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Category */}
        <div className="mb-2">
          <span className="px-2 py-1 text-xs font-medium bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full">
            {category}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">{project.description}</p>

        {/* Tags with Icons */}
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag) => {
            const { icon: Icon, color } = getTechIcon(tag)
            return (
              <span
                key={tag}
                className="inline-flex items-center space-x-1 px-2 py-1 text-xs bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded"
              >
                <Icon className={`w-3 h-3 ${color}`} />
                <span>{tag}</span>
              </span>
            )
          })}
        </div>

        {/* Details link */}
        <Link
          href={`/projects/${project.slug}`}
          className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium text-sm"
        >
          Learn more →
        </Link>
      </div>
    </div>
  )
}
