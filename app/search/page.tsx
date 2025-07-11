"use client"
import { useState, useEffect } from "react"
import { useSearchParams, useRouter } from "next/navigation"
import Link from "next/link"
import { motion } from "framer-motion"
import { FiSearch, FiArrowLeft, FiExternalLink } from "react-icons/fi"
import Fuse from "fuse.js"
import { searchData } from "@/data/searchData"

type SearchItem = {
  id: string | number
  title: string
  description?: string
  excerpt?: string
  tags?: string[]
  searchableContent?: string
  type: string
  slug?: string
}

export default function SearchPage() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const query = searchParams.get("q") || ""
  const [searchQuery, setSearchQuery] = useState(query)
  const [results, setResults] = useState<SearchItem[]>([])

  useEffect(() => {
    if (query) {
      performSearch(query)
      setSearchQuery(query)
    }
  }, [query])

  const performSearch = (searchTerm: string) => {
  if (!searchTerm.trim()) {
    setResults([])
    return
  }

  const fuse = new Fuse(searchData as SearchItem[], {
    keys: [
      { name: "title", weight: 0.4 },
      { name: "description", weight: 0.3 },
      { name: "excerpt", weight: 0.1 },
      { name: "tags", weight: 0.2 },
      { name: "searchableContent", weight: 1 },
    ],
    threshold: 0.5,              // slightly more tolerant
    distance: 200,               // allows bigger gaps in words
    minMatchCharLength: 2,
    ignoreLocation: true,
    includeScore: true,
    findAllMatches: true,        // catch partial matches
    useExtendedSearch: false,    // don't use complex operators
  })

  const cleanedQuery = searchTerm.toLowerCase().replace(/\b(of|the|in|a|an|and)\b/g, "") // remove stopwords
  const results = fuse.search(cleanedQuery).map((res) => res.item)
  setResults(results)
}


  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery)}`)
      performSearch(searchQuery)
    }
  }

  const getItemLink = (item: SearchItem) => {
    switch (item.type) {
      case "project":
        return `/projects/${item.slug}`
      case "blog":
        return `/blog/${item.slug}`
      case "experience":
        return "/experience"
      case "skill":
        return "/skills"
      case "about":
        return "/about"
      case "education":
        return "/education"
      case "achievement":
        return "/achievements"
      default:
        return "#"
    }
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center space-x-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 mb-6"
          >
            <FiArrowLeft className="w-4 h-4" />
            <span>Back to Home</span>
          </Link>

          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Search Results</h1>

          {/* Search Bar */}
          <form onSubmit={handleSearch} className="mb-6">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <FiSearch className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search projects, blogs, experience..."
                className="block w-full pl-12 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button type="submit" className="absolute inset-y-0 right-0 pr-4 flex items-center">
                <FiSearch className="h-5 w-5 text-blue-600 hover:text-blue-700 transition-colors" />
              </button>
            </div>
          </form>
        </div>

        {/* Results */}
        <div className="space-y-6">
          {results.length > 0 ? (
            <>
              <p className="text-gray-600 dark:text-gray-400">
                Found {results.length} result{results.length !== 1 ? "s" : ""} for "{query}"
              </p>
              {results.map((item, index) => (
                <motion.div
                  key={`${item.type}-${item.id}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6 hover:shadow-md transition-shadow"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <span className="px-2 py-1 text-xs font-medium bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full">
                          {item.type}
                        </span>
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{item.title}</h3>
                      <p className="text-gray-600 dark:text-gray-400 mb-4">{item.description || item.excerpt}</p>

                      <div className="flex items-center justify-between">
                        <div>
                          {item.tags && (
                            <div className="flex flex-wrap gap-2">
                              {item.tags.map((tag, i) => (
                                <span
                                  key={`${tag}-${i}`}
                                  className="px-2 py-1 text-xs bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded"
                                >
                                  {tag}
                                </span>
                              ))}
                            </div>
                          )}
                        </div>

                        <Link
                          href={getItemLink(item)}
                          className="inline-flex items-center space-x-1 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium text-sm"
                        >
                          <span>View</span>
                          <FiExternalLink className="w-3 h-3" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </>
          ) : query ? (
            <div className="text-center py-12">
              <p className="text-gray-600 dark:text-gray-400">No results found for "{query}"</p>
              <p className="text-sm text-gray-500 dark:text-gray-500 mt-2">
                Try searching for: projects, skills, experience, React, JavaScript, or CareerSetu
              </p>
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-600 dark:text-gray-400">Enter a search term to get started</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
