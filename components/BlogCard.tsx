import Link from "next/link"
import Image from "next/image"
import { FiCalendar, FiClock } from "react-icons/fi"

interface Blog {
  id: number
  slug: string
  title: string
  excerpt: string
  author: string
  date: string
  readTime: string
  tags: string[]
  image: string
}

interface BlogCardProps {
  blog: Blog
}

export default function BlogCard({ blog }: BlogCardProps) {
  return (
    <Link href={`/blog/${blog.slug}`}>
      <article className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-lg transition-all duration-300 group">
        <div className="relative overflow-hidden">
          <Image
            src={blog.image || "/placeholder.svg"}
            alt={blog.title}
            width={400}
            height={250}
            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>

        <div className="p-4 md:p-6">
          {/* Single line: Author, Date, Read Time */}
          <div className="flex items-center justify-between text-xs md:text-sm text-gray-500 dark:text-gray-400 mb-3 flex-wrap gap-1">
            <span className="font-medium">{blog.author}</span>
            <div className="flex items-center space-x-3 md:space-x-4">
              <div className="flex items-center space-x-1">
                <FiCalendar className="w-3 h-3 md:w-4 md:h-4" />
                <span>{new Date(blog.date).toLocaleDateString()}</span>
              </div>
              <div className="hidden sm:flex items-center space-x-1">
                <FiClock className="w-3 h-3 md:w-4 md:h-4" />
                <span>{blog.readTime}</span>
              </div>
            </div>
          </div>

          <h2 className="text-lg md:text-xl font-semibold text-gray-900 dark:text-white mb-2 md:mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-2">
            {blog.title}
          </h2>

          <p className="text-sm md:text-base text-gray-600 dark:text-gray-400 mb-3 md:mb-4 line-clamp-3">
            {blog.excerpt}
          </p>

          <div className="flex flex-wrap gap-1 md:gap-2">
            {blog.tags.map((tag) => (
              <span
                key={tag}
                className="px-2 py-1 text-xs bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </article>
    </Link>
  )
}
