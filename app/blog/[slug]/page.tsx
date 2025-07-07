import { notFound } from "next/navigation"
import Image from "next/image"
import { FiCalendar, FiClock, FiUser } from "react-icons/fi"
import { blogs } from "@/data/blogData"
import BackButton from "@/components/BackButton"

interface BlogPageProps {
  params: {
    slug: string
  }
}

export default function BlogPage({ params }: BlogPageProps) {
  const blog = blogs.find((b) => b.slug === params.slug)

  if (!blog) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-4 md:py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <BackButton />

        <article className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden">
          <div className="relative h-48 md:h-64 lg:h-80">
            <Image src={blog.image || "/placeholder.svg"} alt={blog.title} fill className="object-cover" />
          </div>

          <div className="p-4 md:p-6 lg:p-8">
            {/* Single line: Author, Date, Read Time */}
            <div className="flex items-center justify-between text-xs md:text-sm text-gray-500 dark:text-gray-400 mb-4 md:mb-6 flex-wrap gap-2">
              <div className="flex items-center space-x-2">
                <FiUser className="w-3 h-3 md:w-4 md:h-4" />
                <span className="font-medium">{blog.author}</span>
              </div>
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

            <h1 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-gray-900 dark:text-white mb-4 md:mb-6">
              {blog.title}
            </h1>

            <div className="flex flex-wrap gap-1 md:gap-2 mb-6 md:mb-8">
              {blog.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2 md:px-3 py-1 text-xs md:text-sm bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="prose prose-sm md:prose-base lg:prose-lg dark:prose-invert max-w-none">
              <p className="text-base md:text-lg lg:text-xl text-gray-600 dark:text-gray-400 mb-6 md:mb-8 leading-relaxed">
                {blog.excerpt}
              </p>
              <div dangerouslySetInnerHTML={{ __html: blog.content }} />
            </div>
          </div>
        </article>
      </div>
    </div>
  )
}
