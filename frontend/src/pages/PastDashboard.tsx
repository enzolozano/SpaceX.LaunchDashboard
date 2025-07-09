import { useEffect, useState } from "react"
import { Link } from 'react-router-dom';
import { getPastLaunches } from "../api/launchApi"
import { LaunchCard } from "../components/LaunchCard"
import { ArrowLeft, History, ChevronLeft, ChevronRight } from "lucide-react"
import { Launch } from "../types/Launch";

export const PastDashboardPage = () => {
  const [launches, setLaunches] = useState<Launch[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [currentPage, setCurrentPage] = useState(1)
  const launchesPerPage = 12

  useEffect(() => {
    const fetchLaunches = async () => {
      try {
        setLoading(true)
        const data = await getPastLaunches()
        setLaunches(data)
      } catch (err) {
        setError("Failed to fetch past launches")
        console.error("Error fetching launches:", err)
      } finally {
        setLoading(false)
      }
    }

    fetchLaunches()
  }, [])

  const totalPages = Math.ceil(launches.length / launchesPerPage)
  const startIndex = (currentPage - 1) * launchesPerPage
  const endIndex = startIndex + launchesPerPage
  const currentLaunches = launches.slice(startIndex, endIndex)

  const goToNextPage = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages))
  }

  const goToPrevPage = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1))
  }

  if (loading) {
    return (
      <div className="container mx-auto p-4 max-w-6xl">
        <div className="mb-6">
          <div className="h-8 w-48 mb-4 bg-gray-200 rounded animate-pulse" />
          <div className="h-12 w-96 mb-2 bg-gray-200 rounded animate-pulse" />
          <div className="h-4 w-64 bg-gray-200 rounded animate-pulse" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array.from({ length: 12 }).map((_, i) => (
            <div key={i} className="h-48 w-full bg-gray-200 rounded-lg animate-pulse" />
          ))}
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="container mx-auto p-4 max-w-6xl">
        <div className="text-center py-12">
          <h1 className="text-2xl font-bold text-red-600 mb-4">Error Loading Launches</h1>
          <p className="text-gray-600 mb-6">{error}</p>
          <Link to="/">
            <button className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm bg-white text-gray-700 hover:bg-gray-50 transition-colors">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </button>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="container mx-auto p-4 max-w-6xl">
      <div className="mb-8">
        <Link to="/">
          <button className="inline-flex items-center px-4 py-2 mb-4 border border-gray-300 rounded-md shadow-sm bg-white text-gray-700 hover:bg-gray-50 transition-colors">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </button>
        </Link>
        <div className="flex items-center gap-3 mb-2">
          <History className="h-8 w-8 text-blue-500" />
          <h1 className="text-4xl font-bold">Past SpaceX Launches</h1>
        </div>
        <p className="text-gray-600 text-lg">
          {launches.length} completed missions • Page {currentPage} of {totalPages}
        </p>
      </div>

      {launches.length === 0 ? (
        <div className="text-center py-12">
          <History className="h-16 w-16 text-gray-400 mx-auto mb-4" />
          <h2 className="text-xl font-semibold text-gray-600 mb-2">No Past Launches Found</h2>
          <p className="text-gray-500">Unable to load launch history at this time.</p>
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {currentLaunches.map((launch) => (
              <LaunchCard
                launch={launch}
              />
            ))}
          </div>

          {totalPages > 1 && (
            <div className="flex justify-center items-center gap-4">
              <button
                onClick={goToPrevPage}
                disabled={currentPage === 1}
                className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm bg-white text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                <ChevronLeft className="h-4 w-4 mr-2" />
                Previous
              </button>

              <span className="text-gray-600">
                Page {currentPage} of {totalPages}
              </span>

              <button
                onClick={goToNextPage}
                disabled={currentPage === totalPages}
                className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm bg-white text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                Next
                <ChevronRight className="h-4 w-4 ml-2" />
              </button>
            </div>
          )}
        </>
      )}
    </div>
  )
}
