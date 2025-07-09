import { useEffect, useState } from "react"
import { Link } from 'react-router-dom';
import { getUpcomingLaunches } from "../api/launchApi"
import { LaunchCard } from "../components/LaunchCard"
import { ArrowLeft, Calendar } from "lucide-react"
import { Launch } from "../types/Launch";

export const UpcomingDashboardPage = () => {
  const [launches, setLaunches] = useState<Launch[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchLaunches = async () => {
      try {
        setLoading(true)
        const data = await getUpcomingLaunches()
        setLaunches(data)
      } catch (err) {
        setError("Failed to fetch upcoming launches")
        console.error("Error fetching launches:", err)
      } finally {
        setLoading(false)
      }
    }

    fetchLaunches()
  }, [])

  if (loading) {
    return (
      <div className="container mx-auto p-4 max-w-6xl">
        <div className="mb-6">
          <div className="h-8 w-48 mb-4 bg-gray-200 rounded animate-pulse" />
          <div className="h-12 w-96 mb-2 bg-gray-200 rounded animate-pulse" />
          <div className="h-4 w-64 bg-gray-200 rounded animate-pulse" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array.from({ length: 6 }).map((_, i) => (
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
          <Calendar className="h-8 w-8 text-green-500" />
          <h1 className="text-4xl font-bold">Upcoming SpaceX Launches</h1>
        </div>
        <p className="text-gray-600 text-lg">{launches.length} upcoming missions scheduled</p>
      </div>

      {launches.length === 0 ? (
        <div className="text-center py-12">
          <Calendar className="h-16 w-16 text-gray-400 mx-auto mb-4" />
          <h2 className="text-xl font-semibold text-gray-600 mb-2">No Upcoming Launches</h2>
          <p className="text-gray-500">Check back later for new mission announcements.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {launches.map((launch) => (
            <LaunchCard
              launch={launch}
            />
          ))}
        </div>
      )}
    </div>
  )
}
